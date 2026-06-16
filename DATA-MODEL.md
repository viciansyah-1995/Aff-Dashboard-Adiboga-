# Data Model - Affiliate Dashboard (Adiboga)

## Tujuan
Dokumen ini menjelaskan data model general untuk Affiliate Dashboard (Adiboga) berdasarkan scope saat ini.

Fokus data model:
- memisahkan source data external dengan data operasional internal
- mendukung sourcing dari FastMoss sebagai source utama phase 1
- tetap mendukung import/manual upload sebagai fallback
- menyiapkan fondasi untuk outreach, campaign, sample, submission, point, dan reporting

## Prinsip Desain
1. Data source external dan data internal dipisah sejak awal
2. Satu affiliator bisa memiliki lebih dari satu akun / channel
3. Satu affiliator bisa mengikuti banyak campaign
4. Shipment, content submission, dan point harus bisa diaudit
5. Reporting disusun dari data operasional + data performa + formula estimasi

## Mermaid ERD

```mermaid
erDiagram
    DATA_SOURCES {
        uuid id PK
        string source_name
        string source_type
        string status
        datetime created_at
        datetime updated_at
    }

    SOURCE_IMPORT_BATCHES {
        uuid id PK
        uuid data_source_id FK
        string batch_type
        string status
        int record_count
        datetime started_at
        datetime finished_at
        text notes
    }

    SOURCE_CREATOR_RECORDS {
        uuid id PK
        uuid data_source_id FK
        uuid batch_id FK
        string external_creator_id
        string external_username
        string platform
        string category
        string region
        int follower_count
        float engagement_rate
        text raw_payload
        datetime fetched_at
    }

    AFFILIATORS {
        uuid id PK
        string full_name
        string display_name
        string primary_platform
        string status
        string qualification_status
        string sourcing_method
        datetime created_at
        datetime updated_at
    }

    AFFILIATOR_ACCOUNTS {
        uuid id PK
        uuid affiliator_id FK
        string platform
        string username
        string profile_url
        string external_creator_id
        int follower_count
        float engagement_rate
        boolean is_primary
        datetime created_at
        datetime updated_at
    }

    AFFILIATOR_SOURCE_LINKS {
        uuid id PK
        uuid affiliator_id FK
        uuid source_record_id FK
        string match_method
        float confidence_score
        datetime linked_at
    }

    AFFILIATOR_CONTACTS {
        uuid id PK
        uuid affiliator_id FK
        string contact_type
        string contact_value
        boolean is_verified
        string source
        datetime created_at
        datetime updated_at
    }

    AFFILIATOR_TAGS {
        uuid id PK
        uuid affiliator_id FK
        string tag_name
        string tag_type
        datetime created_at
    }

    OUTREACH_PIPELINES {
        uuid id PK
        uuid affiliator_id FK
        string pipeline_status
        string owner_name
        string channel
        datetime last_contacted_at
        datetime next_followup_at
        text notes
    }

    OUTREACH_ACTIVITIES {
        uuid id PK
        uuid pipeline_id FK
        string activity_type
        string actor_type
        text message_draft
        text message_sent
        string result_status
        datetime activity_at
    }

    CAMPAIGNS {
        uuid id PK
        string campaign_name
        string sow_name
        string campaign_type
        string status
        date start_date
        date end_date
        int quota
        text requirement_summary
        datetime created_at
        datetime updated_at
    }

    CAMPAIGN_DELIVERABLES {
        uuid id PK
        uuid campaign_id FK
        string deliverable_type
        string platform
        int quantity
        text rule_notes
    }

    CAMPAIGN_PARTICIPANTS {
        uuid id PK
        uuid campaign_id FK
        uuid affiliator_id FK
        string participation_status
        datetime invited_at
        datetime joined_at
        datetime approved_at
    }

    SAMPLE_REQUESTS {
        uuid id PK
        uuid campaign_participant_id FK
        string request_status
        text request_notes
        text shipping_address
        datetime requested_at
        datetime approved_at
    }

    SHIPMENTS {
        uuid id PK
        uuid sample_request_id FK
        string courier_name
        string tracking_number
        string shipment_status
        datetime shipped_at
        datetime delivered_at
        text notes
    }

    CONTENT_SUBMISSIONS {
        uuid id PK
        uuid campaign_participant_id FK
        string platform
        string content_url
        string submission_status
        datetime posted_at
        datetime submitted_at
        datetime reviewed_at
        text review_notes
    }

    PERFORMANCE_METRICS {
        uuid id PK
        uuid content_submission_id FK
        int views
        int likes
        int comments
        int shares
        float estimated_cpm
        float estimated_nmv
        float estimated_media_value
        datetime measured_at
    }

    POINT_LEDGER {
        uuid id PK
        uuid affiliator_id FK
        uuid campaign_id FK
        uuid content_submission_id FK
        string point_type
        int points
        text reason
        datetime created_at
    }

    ROI_REPORTS {
        uuid id PK
        uuid campaign_id FK
        string report_period
        float total_estimated_cost
        float total_estimated_nmv
        float total_estimated_roi
        text calculation_notes
        datetime generated_at
    }

    DATA_SOURCES ||--o{ SOURCE_IMPORT_BATCHES : has
    DATA_SOURCES ||--o{ SOURCE_CREATOR_RECORDS : provides
    SOURCE_IMPORT_BATCHES ||--o{ SOURCE_CREATOR_RECORDS : contains

    AFFILIATORS ||--o{ AFFILIATOR_ACCOUNTS : has
    AFFILIATORS ||--o{ AFFILIATOR_CONTACTS : has
    AFFILIATORS ||--o{ AFFILIATOR_TAGS : has
    AFFILIATORS ||--o{ OUTREACH_PIPELINES : has
    AFFILIATORS ||--o{ CAMPAIGN_PARTICIPANTS : joins
    AFFILIATORS ||--o{ AFFILIATOR_SOURCE_LINKS : mapped_from

    SOURCE_CREATOR_RECORDS ||--o{ AFFILIATOR_SOURCE_LINKS : matched_to

    OUTREACH_PIPELINES ||--o{ OUTREACH_ACTIVITIES : logs

    CAMPAIGNS ||--o{ CAMPAIGN_DELIVERABLES : defines
    CAMPAIGNS ||--o{ CAMPAIGN_PARTICIPANTS : has
    CAMPAIGNS ||--o{ ROI_REPORTS : summarized_in

    CAMPAIGN_PARTICIPANTS ||--o{ SAMPLE_REQUESTS : requests
    CAMPAIGN_PARTICIPANTS ||--o{ CONTENT_SUBMISSIONS : submits

    SAMPLE_REQUESTS ||--o{ SHIPMENTS : fulfilled_by

    CONTENT_SUBMISSIONS ||--o{ PERFORMANCE_METRICS : measured_by

    AFFILIATORS ||--o{ POINT_LEDGER : earns
    CAMPAIGNS ||--o{ POINT_LEDGER : relates_to
    CONTENT_SUBMISSIONS ||--o{ POINT_LEDGER : triggers
```

## Penjelasan Entitas Utama

### 1. Data Source Layer
Entitas:
- `DATA_SOURCES`
- `SOURCE_IMPORT_BATCHES`
- `SOURCE_CREATOR_RECORDS`

Tujuan:
- menyimpan asal data seperti FastMoss, Kalodata, atau import manual
- memisahkan raw external data dari master affiliator internal
- memudahkan re-sync, audit, dan troubleshooting konektor

### 2. Master Affiliator Layer
Entitas:
- `AFFILIATORS`
- `AFFILIATOR_ACCOUNTS`
- `AFFILIATOR_CONTACTS`
- `AFFILIATOR_TAGS`
- `AFFILIATOR_SOURCE_LINKS`

Tujuan:
- membangun identitas affiliator internal yang lebih stabil
- mendukung satu affiliator dengan banyak akun/platform
- mendukung dedupe dan enrichment lintas source

### 3. Outreach Layer
Entitas:
- `OUTREACH_PIPELINES`
- `OUTREACH_ACTIVITIES`

Tujuan:
- melacak status pendekatan ke affiliator
- memisahkan draft AI, aktivitas human, dan hasil follow-up

### 4. Campaign Layer
Entitas:
- `CAMPAIGNS`
- `CAMPAIGN_DELIVERABLES`
- `CAMPAIGN_PARTICIPANTS`

Tujuan:
- menyimpan struktur campaign / SoW
- mencatat siapa ikut campaign apa dan status partisipasinya

### 5. Fulfillment Layer
Entitas:
- `SAMPLE_REQUESTS`
- `SHIPMENTS`

Tujuan:
- mencatat request sample dan pengiriman via 3PL
- mendukung tracking status operasional

### 6. Submission & Performance Layer
Entitas:
- `CONTENT_SUBMISSIONS`
- `PERFORMANCE_METRICS`

Tujuan:
- menyimpan link posting dan hasil review
- mencatat performa konten untuk kebutuhan estimasi value dan ROI

### 7. Point & Reporting Layer
Entitas:
- `POINT_LEDGER`
- `ROI_REPORTS`

Tujuan:
- menghitung reward affiliator secara audit-friendly
- menyimpan ringkasan reporting per campaign/periode

## Catatan Penting

1. FastMoss diposisikan sebagai source utama phase 1, tetapi model tetap support Kalodata dan import manual.
2. Contact data sebaiknya tidak diasumsikan selalu datang dari source external. Bisa jadi harus diisi atau diverifikasi internal.
3. `SOURCE_CREATOR_RECORDS` tidak langsung dianggap master affiliator. Harus lewat proses mapping/dedupe ke `AFFILIATORS`.
4. `ROI_REPORTS` harus dianggap estimasi kecuali di masa depan sudah ada actual commerce attribution yang valid.
5. Jika nanti ada portal affiliator yang lebih kompleks, bisa ditambah entitas auth/user terpisah.

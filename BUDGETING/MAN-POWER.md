# Budgeting Man Power - Affiliate Dashboard (Adiboga)

## Tujuan Dokumen
Dokumen ini mengestimasi kebutuhan sumber daya manusia (man power) untuk membangun Affiliate Dashboard (Adiboga) berdasarkan scope yang sudah didefinisikan di BRD dan Data Model.

## Asumsi Dasar
- Estimasi berdasarkan tingkat kompleksitas moderat
- Tim pengembangan memiliki kemampuan React/Next.js dan backend (Node.js/Supabase atau similar)
- UI/UX sudah tersedia atau bisa menggunakan komponen готовый
- FastMoss API integration sebagai fokus phase 1

## Struktur Tim yang Disarankan

### Core Team
| Role | Jumlah | fungsi |
|------|--------|--------|
| Project Manager | 1 | koordinasi, timeline, stakeholder management |
| Frontend Developer | 1-2 | Next.js, UI components, portal |
| Backend Developer | 1-2 | API, database, integrasi |
| UI/UX Designer | 1 | wireframe, mockup, design system |
| QA/Tester | 1 | testing, bug tracking |

### Optional / Extended
| Role | Jumlah | fungsi |
|------|--------|--------|
| Data Engineer | 0-1 | FastMoss connector, data pipeline |
| DevOps | 0-1 | deployment, CI/CD, monitoring |

---

## Estimasi Effort per Modul

### Modul 1: Lead Sourcing Module
| Sub-modul | Estimasi Hari | Tingkat | Keterangan |
|-----------|---------------|---------|------------|
| FastMoss API Connector | 5-7 hari | Medium | depends on API documentation availability |
| Import CSV/Excel | 2-3 hari | Low | fallback mechanism |
| Data cleaning & dedupe | 3-5 hari | Medium | logic untuk matching |
| Source management UI | 2-3 hari | Low | CRUD data sources |
| **Total Modul 1** | **12-18 hari** | | |

### Modul 2: Affiliate CRM / Pipeline Module
| Sub-modul | Estimasi Hari | Tingkat | Keterangan |
|-----------|---------------|---------|------------|
| Affiliate listing & master data | 4-5 hari | Medium | CRUD, filtering, pagination |
| Profile enrichment | 3-4 hari | Medium | multi-account management |
| Tagging & segmentation | 2-3 hari | Low | |
| Qualification workflow | 3-4 hari | Medium | status transitions |
| **Total Modul 2** | **12-16 hari** | | |

### Modul 3: Outreach Pipeline Module
| Sub-modul | Estimasi Hari | Tingkat | Keterangan |
|-----------|---------------|---------|------------|
| Outreach task management | 3-4 hari | Medium | assignment & tracking |
| AI draft generation | 4-6 hari | High | integration with AI API |
| Communication logging | 2-3 hari | Low | |
| Pipeline dashboard | 2-3 hari | Low | |
| **Total Modul 3** | **11-16 hari** | | |

### Modul 4: Campaign / SoW Module
| Sub-modul | Estimasi Hari | Tingkat | Keterangan |
|-----------|---------------|---------|------------|
| Campaign CRUD | 3-4 hari | Medium | |
| Deliverable definition | 2-3 hari | Medium | |
| Participant management | 3-4 hari | Medium | |
| Campaign dashboard | 2-3 hari | Low | |
| **Total Modul 4** | **10-14 hari** | | |

### Modul 5: Affiliate Portal Module
| Sub-modul | Estimasi Hari | Tingkat | Keterangan |
|-----------|---------------|---------|------------|
| Auth & login | 2-3 hari | Medium | |
| Dashboard affiliator | 2-3 hari | Medium | |
| Campaign browse & apply | 3-4 hari | Medium | |
| Profile management | 2-3 hari | Low | |
| **Total Modul 5** | **9-13 hari** | | |

### Modul 6: Sample Fulfillment Module
| Sub-modul | Estimasi Hari | Tingkat | Keterangan |
|-----------|---------------|---------|------------|
| Sample request workflow | 3-4 hari | Medium | |
| Approval process | 2-3 hari | Low | |
| Shipment tracking (manual) | 2-3 hari | Low | |
| 3PL integration placeholder | 2-3 hari | Medium | future-ready |
| **Total Modul 6** | **9-13 hari** | | |

### Modul 7: Content Submission Module
| Sub-modul | Estimasi Hari | Tingkat | Keterangan |
|-----------|---------------|---------|------------|
| Link submission form | 2-3 hari | Low | |
| Submission review UI | 2-3 hari | Medium | |
| Status workflow | 2 hari | Low | |
| **Total Modul 7** | **6-8 hari** | | |

### Modul 8: Point & Reward Module
| Sub-modul | Estimasi Hari | Tingkat | Keterangan |
|-----------|---------------|---------|------------|
| Point engine logic | 3-4 hari | High | rule complexity |
| Ledger & history | 2-3 hari | Medium | |
| Point dashboard | 2 hari | Low | |
| **Total Modul 8** | **7-9 hari** | | |

### Modul 9: Analytics & Reporting Module
| Sub-modul | Estimasi Hari | Tingkat | Keterangan |
|-----------|---------------|---------|------------|
| Dashboard basics | 3-4 hari | Medium | |
| Campaign reporting | 3-4 hari | Medium | |
| Affiliate performance | 2-3 hari | Medium | |
| ROI estimation | 4-6 hari | High | formula complexity |
| Export functionality | 2 hari | Low | |
| **Total Modul 9** | **14-19 hari** | | |

### Infrastructure & Shared
| Sub-modul | Estimasi Hari | Tingkat | Keterangan |
|-----------|---------------|---------|------------|
| Database design & migration | 3-5 hari | Medium | based on data model |
| Auth & RBAC | 3-4 hari | Medium | |
| API layer | 5-7 hari | Medium | |
| UI components / design system | 4-6 hari | Medium | reusable components |
| Testing & bug fixing | 5-7 hari | Medium | |
| Deployment & CI/CD | 2-3 hari | Low | |
| **Total Shared** | **22-32 hari** | | |

---

## Ringkasan Estimasi Total

| Kategori | Total Hari (Range) |
|----------|---------------------|
| Modul 1-9 | 90-127 hari |
| Infrastructure & Shared | 22-32 hari |
| **Total** | **112-159 hari** |

---

## Estimasi Timeline (1 Tim)

Dengan asumsi 1 tim penuh (1 PM + 2 FE + 2 BE + 1 UI/UX + 1 QA):

| Approach | Durasi | Keterangan |
|----------|--------|------------|
| Sequential (modul demi modul) | ~5-7 bulan | 112-159 hari kerja / 20 hari per bulan |
| Parallel (2 track) | ~3-4 bulan | dengan splitting tim |
| MVP focused (Phase 1-2 only) | ~2-3 bulan | 60-80 hari |

---

## Rekomendasi Timeline

### MVP (Phase 1-2 dari BRD)
Fokus: Sourcing → CRM → Outreach → Campaign → Portal Basic → Sample → Submission

| Week | Fokus |
|------|-------|
| 1-2 | Infrastructure, DB, Auth |
| 3-4 | Modul 1 (Sourcing) |
| 5-6 | Modul 2 (CRM) |
| 7-8 | Modul 3 (Outreach) |
| 9-10 | Modul 4 (Campaign) |
| 11-12 | Modul 5 (Portal) |
| 13-14 | Modul 6-7 (Fulfillment + Submission) |
| 15-16 | Integration, Testing, Bug fixing |
| **Total MVP** | **~4 bulan** |

### Full Phase (Phase 1-3)
Tambah Phase 3 (Point, Reporting, AI enhancement) → tambah 6-8 minggu.

---

## Budget Kategori Lain (untuk konteks lengkap)

| Kategori | Estimasi (IDR) | Keterangan |
|----------|-----------------|------------|
| Gaji tim (4 bulan MVP) | 120-200 juta | зависит dari lokasi & level |
| Infrastructure (cloud/db) | 2-5 juta/bln | Supabase/AWS |
| Tools & licenses | 1-3 juta | design tools, hosting |
| AI API (outreach) | 0.5-2 juta | depends on usage |
| Contingency (20%) | 25-40 juta | |

---

## Catatan Penting

1. **Estimasi ini kasar** — perlu refinement setelah PRD detail dan technical design.
2. **FastMoss API** adalah wild card — kalau API complex atau tidak tersedia, perlu waktu lebih untuk fallback manual.
3. **AI outreach** butuh iterasi — kemungkinan perlu waktu lebih untuk prompt engineering.
4. **ROI estimation** butuh definisi formula yang jelas dari bisnis — kalau masih abu-abu, effort bisa membengkak.
5. **Testing & bug fixing** sering underestimate — tambahkan buffer 20-30%.

---

## Suggested Next Steps

1. Finalisasi technical stack (Next.js + Supabase / custom backend)
2. Definisikan struktur tim yang realistic dengan availability
3. Breakdown modul ke task cards dengan acceptance criteria
4. Prioritaskan MVP scope (Phase 1-2) sebelumestimasi detail
5. Sinkronkan dengan stakeholder untuk ekspektasi timeline

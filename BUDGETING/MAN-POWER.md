# Budgeting Man Power - Affiliate Dashboard (Adiboga)

## Tujuan Dokumen
Dokumen ini mengestimasi kebutuhan sumber daya manusia (man power) untuk membangun Affiliate Dashboard (Adiboga) dengan pendekatan **lean team + AI assistance**.

## Pendekatan: Lean Team + AI

### Asumsi
- **2 orang tim** (fullstack developers yang bisa handle FE + BE)
- **AI sebagai assistant** untuk:
  - Code generation
  - Code review
  - Documentation
  - Debugging
  - Boilerplate setup
- AI mempercepat ~30-50% effort coding per orang
- UI/UX bisa menggunakan komponen готовый (Tailwind + shadcn/ui atau similar)
- FastMoss API integration sebagai fokus phase 1

---

## Struktur Tim (Lean)

| Role | Jumlah | Keterangan |
|------|--------|-------------|
| Lead Developer (FE + BE) | 1 | Fullstack, AI-assisted |
| Developer (FE + BE) | 1 | Fullstack, AI-assisted |
| **Total** | **2** | |

### Catatan
- Project Manager role bisa dihandle oleh lead atau stakeholder
- UI/UX bisa menggunakan ready-made components
- QA dihandle oleh AI-assisted testing + stakeholder review

---

## Estimasi Effort per Modul (dengan AI)

AI membantu mempercepat:
- Boilerplate code (~40% faster)
- Documentation (~50% faster)
- Code review (~30% faster)
- Debugging (~20% faster)

| Modul | Effort Normal | Dengan AI | Keterangan |
|-------|---------------|-----------|------------|
| **Modul 1: Lead Sourcing** | 12-18 hari | **7-11 hari** | FastMoss connector + import fallback |
| **Modul 2: Affiliate CRM / Pipeline** | 12-16 hari | **7-10 hari** | Listing, enrichment, tagging |
| **Modul 3: Outreach Pipeline** | 11-16 hari | **7-10 hari** | Task, AI draft, logging |
| **Modul 4: Campaign / SoW** | 10-14 hari | **6-9 hari** | CRUD, deliverables, participants |
| **Modul 5: Affiliate Portal** | 9-13 hari | **5-8 hari** | Auth, dashboard, apply |
| **Modul 6: Sample Fulfillment** | 9-13 hari | **5-8 hari** | Request, approval, tracking |
| **Modul 7: Content Submission** | 6-8 hari | **4-5 hari** | Form, review, status |
| **Modul 8: Point & Reward** | 7-9 hari | **4-6 hari** | Engine, ledger, dashboard |
| **Modul 9: Analytics & Reporting** | 14-19 hari | **8-12 hari** | Dashboards, ROI estimation |
| **Infrastructure & Shared** | 22-32 hari | **13-20 hari** | DB, auth, API, components |
| **Total** | **112-159 hari** | **66-99 hari** | |

---

## Estimasi Timeline

### Dengan 2 Orang + AI

| Approach | Durasi | Keterangan |
|----------|--------|------------|
| Sequential (modul demi modul) | ~4-5 bulan | 66-99 hari / 20 hari per bulan |
| MVP focused (Phase 1-2) | ~**2.5-3 bulan** | 40-55 hari kerja |
| Full Phase (1-3) | ~**3.5-4.5 bulan** | 66-99 hari kerja |

### Perbandingan

| Skema | Timeline | Man Power |
|-------|----------|-----------|
| Full Team (5-7 orang) | 4-6 bulan | 5-7 orang |
| **Lean + AI (2 orang)** | **2.5-4.5 bulan** | **2 orang** |

---

## Rekomendasi Timeline MVP (Lean + AI)

### MVP (Phase 1-2) — ~10-12 minggu

| Week | Fokus | Modul |
|------|-------|-------|
| 1 | Setup: DB, Auth, API, Components | Infrastructure |
| 2-3 | FastMoss Connector + Import | Modul 1 |
| 4-5 | Affiliate Listing + CRM | Modul 2 |
| 6-7 | Outreach Pipeline + AI Draft | Modul 3 |
| 8-9 | Campaign / SoW Management | Modul 4 |
| 10 | Affiliate Portal Basic | Modul 5 |
| 11 | Sample + Submission | Modul 6-7 |
| 12 | Integration, Testing, Polish | All |

### Full Phase (Phase 1-3) — ~14-18 minggu

| Week | Fokus |
|------|-------|
| 1-2 | Infrastructure + Modul 1-2 |
| 3-4 | Modul 3-5 |
| 5-6 | Modul 6-7 |
| 7-9 | Modul 8-9 (Point + Reporting) |
| 10-12 | Integration, Testing, Polish |
| 13-18 | Buffer, AI enhancement, bug fixing |

---

## Budget Kategori (Lean)

| Kategori | Estimasi (IDR) | Keterangan |
|----------|-----------------|------------|
| Gaji 2 orang (3 bulan MVP) | 30-60 juta | зависит dari level |
| Infrastructure (cloud/db) | 2-4 juta/bln | Supabase/AWS |
| Tools & licenses | 0.5-1 juta | design tools, hosting |
| AI API (ChatGPT/Claude) | 0.5-1 juta | depends on usage |
| Contingency (15%) | 5-10 juta | |
| **Total MVP** | **38-76 juta** | |

### Perbandingan Budget

| Skema | Budget |
|-------|--------|
| Full Team (5-7 orang) | 120-200 juta+ |
| **Lean + AI (2 orang)** | **38-76 juta** |

---

## Catatan Penting

1. **AI bukan replacement** — AI membantu mempercepat, tapi keputusan arsitektur dan code review tetap manusia.
2. **2 orang harus fullstack** — idealnya mampu handle Next.js + API + DB.
3. **FastMoss API** adalah wild card — kalau API complex atau tidak tersedia, perlu waktu lebih untuk fallback.
4. **MVP scope harus dijaga** — jangan tambahkan fitur di luar Phase 1-2 dulu.
5. **Buffer penting** — add 2-3 minggu buffer untuk unexpected issues.

---

## AI Tools yang Disarankan

| Fungsi | Tool |备注|
|--------|------|-----|
| Code generation | ChatGPT, Claude, Cursor | |
| Code review | ChatGPT, Claude | |
| Documentation | ChatGPT, Claude | |
| Testing | ChatGPT, automated tools | |
| Debugging | ChatGPT, Cursor | |

---

## Suggested Next Steps

1. Tentukan siapa 2 orang yang akan jadi tim (fullstack capability)
2. Tentukan AI tools yang akan digunakan (ChatGPT/Claude/Cursor)
3. Finalisasi MVP scope (Phase 1-2) sebelumestimasi detail
4. Setup development environment dengan AI integration
5. Sinkronkan ekspektasi timeline dengan stakeholder

# SEO Strategy

**Last Updated:** 2026-06-28  
**Source:** PRD + Market Research

---

## Primary Keywords

| Keyword Cluster | Target Page |
|-----------------|-------------|
| highway facing plots Telangana | `/projects/sreeja-highway-city` |
| open plots near Hyderabad | Home |
| HMDA approved plots | Legal Vault |
| RRR corridor plots | Investment Benefits |
| NRI plot investment Telangana | `/nri-zone` |

---

## Programmatic SEO (Phase 3)

Dedicated landing pages for corridor combinations:

```
/open-plots-on-mumbai-highway
/hmda-plots-near-regional-ring-road
/residential-plots-in-shadnagar
/residential-plots-choutuppal
/commercial-plots-vijayawada-highway
```

Each page pulls from `project.json` + `company.json` — no hardcoded copy.

---

## Structured Data

```json
{
  "@type": "RealEstateListing",
  "name": "Sreeja Highway City Gated Plots",
  "offers": { "value": "[TBD]", "unitText": "INR per Sq. Yard" }
}
```

Generate from `active_projects/*/metadata/project.json`.

---

## Technical SEO

| Requirement | Target |
|-------------|--------|
| LCP | < 2.0s |
| Lighthouse mobile | 95+ |
| Core Web Vitals | 100% Good |
| Alt text | From `metadata/assets/*.json` |
| Canonical URLs | From `project.json → seo.canonicalPath` |

---

## Content SEO

- Every image: alt text from asset metadata JSON
- Every project: unique meta title + description in `project.json`
- FAQ page: schema.org FAQPage markup
- Blog [TBD]: corridor guides, NRI legal guides

---

## Missing

- [ ] Confirmed price range for schema.org offers
- [ ] Google Search Console setup
- [ ] Sitemap.xml generation strategy
- [ ] Competitor keyword gap analysis

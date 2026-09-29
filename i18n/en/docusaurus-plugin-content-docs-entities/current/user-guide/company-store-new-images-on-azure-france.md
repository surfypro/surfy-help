---
sidebar_position: 8
sidebar_label: Images on Azure (France)
---

# Store new images on Azure (France)

When the company turns on <P code="company:storeNewImagesOnAzureFrance" />, **new** product image uploads are hosted in **France**. Display (sizes and previews) stays the same. Existing images are **not** moved.

## What is this for?

- Host **new** company images in France.
- Keep the same sizes and previews as before.
- Let existing and new images coexist **without migration**.

This is **not**:

- the <P code="company:proxyImages" /> option (different setting, different purpose) ;
- an automatic move of images already online.

## Prerequisites

You need permission to **edit** the **Company** record.

## Turn the option on

1. Open the [Company](/entities/admin/company) record.
2. Enable <P code="company:storeNewImagesOnAzureFrance" />.
3. Save.

**Later** product image uploads (logos, photos, floor backgrounds, and so on) then use storage in France. How users add an image stays the same.

## Effect

| Situation | Behaviour |
|-----------|-----------|
| Option **off** | Usual image upload behaviour. |
| Option **on** | Only **new** uploads are affected. |
| Images already online | Stay where they are; **no** migration. |
| Display | Unchanged for readers. |

Accepted formats when adding an image stay **unchanged** per upload path (same as before this option).

## Limits

- **No migration** of images already hosted elsewhere.
- **Mixed estate**: older and newer images coexist.
- **≠ Images proxy**: <P code="company:proxyImages" /> does not turn on France storage, and vice versa.

## See also

- [Company](/entities/admin/company) record — company properties, including <P code="company:proxyImages" /> ([Images proxy](/entities/admin/company#proxy-images)).
- Alpha changelog: [What's New (alpha)](/changelog/app-alpha).

---
sidebar_position: 1
sidebar_label: Building dashboard — typology group reports
---

# Building dashboard — typology group reports

On a <OT code="building" /> **Building dashboard**, the **Typology groups** tab groups reports that cross **space typology groups** and **services** (level-1 organizations). You can refine what you see with a **session report filter**: hide rows or columns for the current session without changing the building’s data.

## Prerequisites

- Access to the **Building dashboard** (same permissions as today to view these reports).

## Open the reports

1. Open the <OT code="building" /> record.
2. Open <LSV code="building:dashboard" /> (**Dashboard**).
3. Select the **Typology groups** tab.
4. Expand the report you need:
   - **Surface types by service**
   - **Distribution of surface types by service**
   - **m²/PdT ratio per service**

**Surface types by level** (another report on the same theme) is **not** covered by the **Service** column hiding described below.

## Session report filter

The hiding actions on this page:

- apply **only for your session** (reload or a new visit restores everything);
- do **not** change data stored in Surfy;
- keep the **chart** and **report data table** in sync when both are shown.

You can combine **strike through a series** (row) and **strike through a service** (column or **chart click**) on the reports listed above.

## Strike through a series (report row)

To remove a **typology group** from the chart:

- click the matching entry in the chart **legend**, **or**
- click that group’s **row** in the **report data table**.

The row appears **struck through** in the table; the series disappears from the chart. Click again to show it.

The table may also offer toggles (**precise figures**, **show / hide m²**, **recalculate percentages** based on visible series) — see [What's New](/changelog/app) for the Building dashboard features already in production.

## Strike through a service (report column)

On **Surface types by service**, **Distribution of surface types by service**, and **m²/PdT ratio per service**:

1. Find the **report data table** under the chart (**Service** columns, including **Unassigned**).
2. Click the **header** of the service column to hide.
3. The column is **struck through and dimmed**; that service **no longer appears** on the chart.
4. Click the header again to **restore** the service.

If you hide **all** services, the chart may look **empty** — that is expected.

## Chart click to strike through a service

On the same three reports, you can also **strike through a service** by clicking the **service label** under the chart (x-axis, below the bars).

1. Above the **report data table**, find the table toolbar (next to the other toggles).
2. **Enable chart click to hide a service** is **on by default**: clicking a **service label** under the chart **hides** that service (struck-through column in the table, service removed from the chart).
3. Turn the option off (**Disable chart click to hide a service**) if you do not want to hide services from the chart anymore; clicks on those labels then have no hide effect.
4. To **show again** a service you hid from the chart, click the **Service** column **header** in the table again (clicking a label under the chart does **not** restore an already hidden service).

**Session report filter** and **chart / table sync** work the same as when hiding via a column.

## Limits

- No **persistence**: your choices are not saved for later visits.
- No **Service** column hiding on **Surface types by level**.
- No Excel export from this tab.

## See also

- [What's New (alpha)](/changelog/app-alpha) — latest Building dashboard updates on alpha.
- [Space typology group](/entities/surfy/global-admin/room-type-group) — definition of groups used in these reports.

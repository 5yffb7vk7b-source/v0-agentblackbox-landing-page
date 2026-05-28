# ProofPatch — Reply Monitoring

Use these Gmail searches to check for replies from the 9 Batch 1 recipients. Run them
manually (or have the assistant run them on request). **Do not automate replies without
human review.**

> **Note on the send record (2026-05-28):** the 9 sent copies were manually deleted from
> Gmail and now sit in Trash (active Sent Mail returns 0). The **reply** searches below use
> `from:<recipient>` and are unaffected — incoming replies still land in the inbox regardless
> of whether the sent copy exists. But Gmail no longer holds the outbound record: treat
> `outreach-tracker.csv` as the source of truth for who was contacted, not Sent Mail.

## Reply-Check Gmail Queries

Per recipient (look for inbound replies in the last 14 days):

- `from:tdwhere123@gmail.com newer_than:14d`
- `from:yiming.wu@outlook.com newer_than:14d`
- `from:kailesk@houseofmvps.com newer_than:14d`
- `from:florian@bruniaux.com newer_than:14d`
- `from:sean@seandonahoe.com newer_than:14d`
- `from:git-public@hesreallyhim.com newer_than:14d`
- `from:vladta@wix.com newer_than:14d`
- `from:sgroy10@gmail.com newer_than:14d`
- `from:bayram.annakov@gmail.com newer_than:14d`

All-at-once sweep:

- `newer_than:14d (from:tdwhere123@gmail.com OR from:yiming.wu@outlook.com OR from:kailesk@houseofmvps.com OR from:florian@bruniaux.com OR from:sean@seandonahoe.com OR from:git-public@hesreallyhim.com OR from:vladta@wix.com OR from:sgroy10@gmail.com OR from:bayram.annakov@gmail.com)`

Bounce check:

- `from:mailer-daemon newer_than:14d`
- `subject:(Delivery Status Notification) newer_than:14d`

## Status Values to Set in outreach-tracker.csv

When a reply or signal comes in, update the lead's `Status` to one of:

- `replied` — any human reply received
- `interested` — positive / wants to learn more
- `not_interested` — declined or objected
- `demo_booked` — agreed to a call/demo
- `bounced` — delivery failure (also note the bounce in Notes)
- `no_response` — no reply by Day 10+ (mark cold)

## Rules

- Do not automate replies. Read each reply and respond manually.
- Confirm the correct repo / live demo URL before sending any link.
- Update the tracker and `follow-up-plan.md` status whenever a lead's state changes.
- Re-run `python3 go-to-market/validate_tracker.py` after status edits to catch CSV corruption.

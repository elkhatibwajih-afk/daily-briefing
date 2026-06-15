# 📈 Daily Briefing Dashboard

Your personal news + markets dashboard: Middle East / Lebanon politics + major US news, plus investment-banking-grade financial coverage — all on one page.

---

## ▶ How to OPEN it
**Double-click `index.html`** (in this `news-dashboard` folder). It opens in your web browser. No internet needed just to view it.

> Tip: right-click `index.html` → *Open with* → Chrome or Edge, then **bookmark the tab** so it's one click every morning.

---

## 🔄 How to UPDATE it (your daily routine)
The numbers and headlines live in **`data.js`**. To refresh them:

1. Open **Claude Code** in this folder (the same place you are now).
2. Type **`/update-news`** and press **Enter**.
3. Wait ~1–2 minutes while Claude researches markets + news and rewrites `data.js`.
4. Switch to your browser and **refresh the page** (press **F5**).

That's the whole routine:  **`/update-news`  →  refresh browser.**

---

## 🧭 What's on the dashboard
- **Market Snapshot** — major indices (S&P 500, Nasdaq, Dow, Europe, Asia), plus interest rates, FX, and crypto.
- **Big Stocks** — the largest companies with 1-day / 1-month / 1-year moves.
- **Commodities** — oil (WTI & Brent), gold, silver, natural gas, copper, wheat.
- **Financial News** — M&A, IPOs, earnings, and macro / central-bank news. Click the **chips** at the top to filter by category.
- **Politics** — Middle East with a Lebanon focus on the left, major US news on the right.

---

## 📁 The files (what each one does)
| File | What it is |
|------|-----------|
| `index.html` | The dashboard itself — design & layout. You never need to touch this. |
| `data.js` | The data the dashboard shows. `/update-news` rewrites this for you. |
| `README.md` | This guide. |

---

## ℹ️ Good to know
- **Colors:** 🟢 green = up, 🔴 red = down, grey **—** = data not available that day.
- The **"as of" line** at the top tells you how fresh each group is — markets data is usually the most recent close, not a live stream.
- ⚠️ **Not investment advice.** This is an informational briefing built from public sources. Always double-check a number before you act on it.

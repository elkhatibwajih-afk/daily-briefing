/* ============================================================
   DAILY BRIEFING — DATA FILE
   ------------------------------------------------------------
   This file holds everything your dashboard displays.
   It is regenerated each time you run  /update-news  in Claude Code.
   You normally never edit this by hand.

   Last generated: October 6, 2026
   Note: refreshed after a ~3-month pause (prior edition Jun 29);
   the index/stock sparkline history was rebuilt from real
   Sep 16–Oct 5 daily closes.
   ============================================================ */

window.DASHBOARD_DATA = {

  dateLabel: "Tuesday, October 6, 2026",
  lastUpdated: "October 6, 2026",
  updatedAt: "October 6, 2026, 5:47 PM (Beirut)",
  asOfNote: "US stocks & indices: Mon Oct 5 close (Tuesday's session is underway). Europe, Asia & Gulf: Oct 6, at/near close. Commodities, FX & crypto: live Oct 6. Rates: Oct 2 (latest FRED post). The sparkline history was rebuilt from Sep 16–Oct 5 daily closes after a ~3-month pause, so the chart shows the last ~3 weeks and will grow back toward 30 sessions.",
  drivingStory: "US stocks are near record highs — the S&P 500 sits at 7,774 (+13.6% YTD), led by AI megacaps (Nvidia ~$5.8T; Meta +20% on the month) — even though the Fed HIKED in September to 3.75–4.00% (its first increase since 2023) and the 10-year yield has pushed near 5.3%. A soft September jobs report (+29k) has cooled bets on another hike. The dominant macro driver is geopolitical: the summer's US–Iran de-escalation collapsed back into conflict, and the resulting Strait of Hormuz disruption has pushed Brent crude back near $100. Lebanon's truce is fraying (Israel still holds ~20% of the south; the 2026 economy is now set to contract ~6%). A government shutdown was averted, and Q3 earnings season kicks off with the big banks on Oct 13.",

  /* Short labels for the most recent trading sessions (oldest → newest), used as the index-chart x-axis & hover dates. NYSE calendar; rebuilt Sep 16 → Oct 5, 2026 after the pause. */
  histDates: ["Sep 16","Sep 17","Sep 18","Sep 21","Sep 22","Sep 23","Sep 24","Sep 25","Sep 28","Sep 29","Sep 30","Oct 1","Oct 2","Oct 5"],

  /* ---------- MARKETS ---------- */
  markets: {

    indices: [
      { name: "S&P 500",          level: 7773.95,  day: "+0.66", month: "+0.72", ytd: "+13.6", note: "Mon Oct 5 close; near its Aug record (~7,799).", hist: [7552,7638,7651,7765,7765,7706,7704,7743,7684,7671,7652,7666,7723,7774] },
      { name: "Nasdaq Composite", level: 27477.31, day: "+1.05", month: "+3.66", ytd: "+18.2", hist: [25978,26418,26523,27122,27244,26936,26939,27069,26820,26798,26861,26872,27191,27477] },
      { name: "Nasdaq 100",       level: 31076.44, day: "+0.87", month: "+5.19", ytd: "+23.1", hist: [28945,29447,29644,30482,30732,30470,30479,30608,30277,30339,30409,30502,30808,31076] },
      { name: "Dow Jones",        level: 51267.90, day: "+0.18", month: "-4.0", ytd: "+6.7", note: "Lagged tech — fell ~4% on the month as the rate hike hit cyclicals.", hist: [51462,51778,51683,52049,51864,51512,51350,51829,51482,51350,50906,50927,51177,51268] },
      { name: "Russell 2000",     level: 2847.14,  day: "+0.50", month: "-4.3", ytd: "+14.4", note: "Small-caps hit hardest by the September rate hike." },
      { name: "STOXX Europe 600", level: 635.66,   day: "+0.32", month: "-2.2", ytd: "+7.2", note: "Oct 6 close." },
      { name: "FTSE 100",         level: 10518.25, day: "+0.19", month: "-2.8", ytd: "+5.9", note: "Oct 6 close." },
      { name: "Nikkei 225",       level: 70683.98, day: "+1.05", month: "+7.0", ytd: "+41.1", note: "Oct 6 close; a 2026 standout. Some sites misreport YTD ~+80% (a base-date error) — true YTD ~+41%." },
      { name: "Hang Seng",        level: 24160.00, day: "+0.50", month: "-4.9", ytd: "-5.7", note: "Oct 6 close." }
    ],

    rates: [
      { name: "US 10-Year Treasury", value: "5.28%",      change: "Near multi-year highs (was ~4.96% Sep 21) on the Fed's hawkish turn" },
      { name: "US 2-Year Treasury",  value: "4.83%",      change: "Up sharply since the September hike; 2s10s spread ~+45bp" },
      { name: "Fed Funds (target)",  value: "3.75–4.00%", change: "HIKED +25bp Sep 16 (first hike since 2023, 12–0); held Jul 29" }
    ],

    fx: [
      { name: "EUR/USD",            value: "1.1249", day: "+0.24" },
      { name: "USD/JPY",            value: "158.07", day: "+0.10" },
      { name: "GBP/USD",            value: "1.3267", day: "+0.34" },
      { name: "Dollar Index (DXY)", value: "101.92", day: "-0.24" }
    ],

    crypto: [
      { name: "Bitcoin",  price: 86082, day: "+0.3", month: "+8.8", year: "-29.1" },
      { name: "Ethereum", price: 2711,  day: "-0.0", month: "+8.8", year: "-39.1" }
    ]
  },

  /* ---------- REGIONAL MARKETS (GCC & Egypt) ---------- */
  /* Oct 6 close (YTD computed vs the Dec 31 2025 close, not the 1-year figure) */
  regionalMarkets: [
    { name: "Saudi · TASI",        level: 10590.00, day: "+1.05", month: "-3.94", ytd: "+0.95", note: "Oct 6 close" },
    { name: "Abu Dhabi · ADX",     level: 9993.00,  day: "-0.17", month: "+0.18", ytd: "+0.01", note: "Oct 6 close" },
    { name: "Dubai · DFM",         level: 5908.00,  day: "+0.12", month: "-0.39", ytd: "-2.30", note: "Oct 6 close" },
    { name: "Qatar · QE",          level: 9259.00,  day: "-0.28", month: "-5.38", ytd: "-13.97", note: "Oct 6 close; the region's weakest YTD" },
    { name: "Kuwait · All-Share",  level: 8638.52,  day: "-0.59", month: "-2.28", ytd: "-3.02", note: "Oct 6 close" },
    { name: "Bahrain · All-Share", level: 1902.46,  day: "-0.23", month: "-1.80", ytd: "-7.94", note: "Oct 6 close" },
    { name: "Oman · MSX 30",       level: 7788.00,  day: "+0.75", month: "+2.40", ytd: "+32.75", note: "Oct 6 close; +33% YTD (a 2026 standout)" },
    { name: "Egypt · EGX 30",      level: 53298.00, day: "-0.48", month: "-5.88", ytd: "+27.42", note: "Oct 6 close; +27% YTD (the ~+44% headline is the 1-year figure)" }
  ],

  /* ---------- WEEK AHEAD (scheduled catalysts) ---------- */
  weekAhead: [
    { date: "Wed Oct 7", category: "Central Bank", event: "FOMC minutes (September meeting)", detail: "Minutes of the Sep meeting where the Fed hiked to 3.75–4.00% — markets parse how many more hikes are coming." },
    { date: "Wed Oct 7", category: "Geopolitics", event: "Oct 7 anniversary", detail: "Third anniversary of the 2023 Hamas attack; commemorations across Israel amid a strained Gaza truce." },
    { date: "Fri Oct 9", category: "Econ", event: "UMich consumer sentiment (prelim, Oct)", detail: "A private survey — one of the cleaner US reads on the consumer and inflation expectations." },
    { date: "Mon Oct 12", category: "Markets", event: "Columbus Day — US bond market closed", detail: "The stock market stays open; Treasury trading is shut for the holiday." },
    { date: "Mon Oct 12", category: "Geopolitics", event: "IMF–World Bank Annual Meetings open (Bangkok)", detail: "Through Oct 18 — global growth, debt and the oil-shock outlook, with sideline bilaterals." },
    { date: "Tue Oct 13", category: "Earnings", event: "Q3 bank kickoff: JPMorgan, Goldman, Citi, Wells Fargo", detail: "The unofficial start of earnings season (plus Johnson & Johnson); trading and dealmaking fees in focus." },
    { date: "Wed Oct 14", category: "Earnings", event: "Bank of America, Morgan Stanley, ASML", detail: "More banks plus ASML — a key read on AI-chip capex." },
    { date: "Wed Oct 14", category: "Econ", event: "US CPI (September) + Fed Beige Book", detail: "The marquee inflation print (the data is flowing normally — no shutdown) ahead of the Oct 27–28 FOMC." },
    { date: "Thu Oct 15", category: "Econ", event: "US PPI + retail sales (September)", detail: "Wholesale inflation and a read on whether the consumer is slowing with the labor market." },
    { date: "Thu Oct 15", category: "Earnings", event: "TSMC Q3", detail: "The world's top chip foundry — the cleanest gauge of AI-hardware demand." },
    { date: "Oct (TBD)", category: "IPO", event: "Anthropic Nasdaq listing watch", detail: "Reported to be targeting an October IPO (potentially >$60B raised) — no confirmed pricing date yet." },
    { date: "Tue Oct 27", category: "Central Bank", event: "Next FOMC meeting (Oct 27–28)", detail: "Markets are split on whether the Fed delivers another hike after the soft September jobs report." }
  ],

  /* ---------- BIG STOCKS (largest by market cap) ---------- */
  /* Price & 1-day = Mon Oct 5 close · 1M / 1Y = trailing price return · ranking: Meta jumped to #7 */
  stocks: [
    { ticker: "NVDA",  name: "Nvidia",              price: 238.90, day: "+2.12", month: "+3.7",  year: "+29.0",  mktcap: "$5.85T", hist: [213.90,219.34,222.27,227.38,228.87,225.51,224.58,225.07,228.86,227.21,228.38,230.86,233.95,238.90] },
    { ticker: "AAPL",  name: "Apple",               price: 332.89, day: "-0.24", month: "+4.0",  year: "+28.3",  mktcap: "$4.86T", hist: [332.41,337.00,336.13,338.98,339.75,337.02,335.92,341.07,338.40,329.40,333.02,330.32,333.69,332.89] },
    { ticker: "GOOGL", name: "Alphabet",            price: 346.47, day: "+0.86", month: "+2.4",  year: "+40.6",  mktcap: "$4.19T", hist: [342.87,347.33,349.54,354.97,351.16,337.83,342.36,343.92,342.75,340.92,344.08,338.24,343.50,346.47] },
    { ticker: "MSFT",  name: "Microsoft",           price: 525.18, day: "+1.48", month: "+5.1",  year: "+3.1",   mktcap: "$3.96T", hist: [490.30,497.75,493.78,501.61,498.00,500.59,497.93,516.17,509.22,508.96,512.90,512.80,517.53,525.18] },
    { ticker: "AMZN",  name: "Amazon",              price: 251.40, day: "-0.05", month: "-2.8",  year: "+15.1",  mktcap: "$2.73T", hist: [245.96,251.19,253.71,258.45,254.98,249.27,249.38,249.67,246.15,246.67,249.15,248.23,251.52,251.40] },
    { ticker: "SPCX",  name: "SpaceX",              price: 171.09, day: "+7.63", month: "+15.6", year: "n/a",    mktcap: "$2.31T", hist: [150.88,154.81,152.71,151.85,154.72,148.36,148.03,148.68,145.47,149.24,150.86,148.07,158.96,171.09] },
    { ticker: "META",  name: "Meta Platforms",      price: 741.90, day: "+1.90", month: "+20.3", year: "+3.8",   mktcap: "$1.89T", hist: [673.31,682.31,665.75,741.25,736.60,744.10,777.59,751.66,715.62,738.79,725.18,725.93,728.08,741.90] },
    { ticker: "AVGO",  name: "Broadcom",            price: 362.51, day: "+2.08", month: "+1.3",  year: "+11.3",  mktcap: "$1.79T", hist: [339.51,347.30,357.61,362.66,364.54,354.99,350.36,352.81,349.57,355.10,351.19,343.64,355.14,362.51] },
    { ticker: "TSLA",  name: "Tesla",               price: 378.73, day: "+2.20", month: "+7.0",  year: "-11.4",  mktcap: "$1.51T", hist: [358.08,366.20,364.27,375.30,378.90,380.12,377.94,372.11,357.45,352.84,354.81,354.11,370.59,378.73] },
    { ticker: "BRK.B", name: "Berkshire Hathaway",  price: 504.26, day: "+0.32", month: "-0.4",  year: "+1.9",   mktcap: "$1.09T", hist: [519.80,509.20,509.77,502.01,503.49,507.17,505.18,505.48,503.09,502.35,497.95,500.50,502.65,504.26] },
    { ticker: "JPM",   name: "JPMorgan Chase",      price: 332.38, day: "0.00", month: "-7.3",  year: "+7.7",   mktcap: "$884B", hist: [348.92,349.31,349.67,352.04,340.00,337.53,338.56,343.06,336.59,334.98,330.83,333.18,332.38,332.38] }
  ],

  /* ---------- COMMODITIES ---------- */
  /* Live, Oct 6 — oil elevated as the renewed Iran conflict disrupts the Strait of Hormuz */
  commodities: [
    { name: "WTI Crude",   price: 88.03,   unit: "$/bbl",     day: "-1.57", month: "-5.4",  ytd: "+53.3" },
    { name: "Brent Crude", price: 98.47,   unit: "$/bbl",     day: "-1.85", month: "+1.3",  ytd: "+61.8" },
    { name: "Natural Gas", price: 3.11,    unit: "$/MMBtu",   day: "+1.52", month: "+6.7",  ytd: "-15.6" },
    { name: "Gold",        price: 4152.53, unit: "$/oz",      day: "+0.31", month: "-5.7",  ytd: "-3.9" },
    { name: "Silver",      price: 60.99,   unit: "$/oz",      day: "-0.10", month: "-7.8",  ytd: "-14.4" },
    { name: "Copper",      price: 6.57,    unit: "$/lb",      day: "-0.30", month: "-2.6",  ytd: "+15.6" },
    { name: "Wheat",       price: 698.45,  unit: "¢/bushel",  day: "+0.90", month: "-4.4",  ytd: "+37.8" }
  ],

  /* ---------- FINANCIAL NEWS ---------- */
  financialNews: [
    { category: "Macro", headline: "US stocks hold near records on AI even as the Fed turns hawkish",
      summary: "The S&P 500 closed Oct 5 at 7,773.95 (+13.6% YTD), just shy of its August record, led by AI megacaps (Nvidia ~$5.8T, Meta +20% on the month) — resilience that has persisted despite a September rate hike and a 10-year yield near 5.3%.",
      source: "AP / Standard-Journal", url: "https://www.standard-journal.com/ap/business/us-stocks-rise-back-towards-records-as-ai-companies-report-strong-profits/article_c0be0e64-425c-5591-956b-deb5eca54e1d.html", date: "Oct 5, 2026" },

    { category: "Macro", headline: "Fed hikes to 3.75–4.00% — its first rate increase since 2023",
      summary: "The FOMC raised the funds-rate target by 25bp on Sep 16 in a unanimous 12–0 vote (after a divided 9–3 hold on Jul 29), with Chair Kevin Warsh prioritizing the fight against Iran-war-driven inflation; the SEP lifted the 2026 PCE projection to 3.6%.",
      source: "CNBC", url: "https://www.cnbc.com/2026/09/16/fed-meeting-today-live-updates.html", date: "Sep 16, 2026" },

    { category: "Macro", headline: "September jobs report nearly stalls — just +29,000, jobless rate up to 4.2%",
      summary: "Payrolls rose only 29,000 in September (released Oct 2, below the ~90k expected), unemployment ticked up to 4.2%, and July/August were revised down a combined 60,000 — a clear labor-market cooldown that trimmed the odds of another Fed hike.",
      source: "Fox Business", url: "https://www.foxbusiness.com/economy/us-jobs-report-september-2026", date: "Oct 2, 2026" },

    { category: "Macro", headline: "Government shutdown averted — stopgap funds Washington through Dec 11",
      summary: "Congress acted nearly a month early: a continuing resolution (Senate 90–6, House 370–48) signed Sep 2 keeps the government open past the Oct 1 fiscal-year start and the Nov 3 midterms, pushing the next funding cliff to Dec 11 — so official data is flowing normally.",
      source: "NBC News", url: "https://www.nbcnews.com/politics/congress/senate-leaders-reach-deal-avert-shutdown-2026-elections-rcna590564", date: "Sep 2, 2026" },

    { category: "Macro", headline: "Oil stays elevated — Brent near $98 — on the Iran conflict and Hormuz risk",
      summary: "Brent traded around $98 and WTI ~$88 (both up 50%+ YTD) as the renewed US–Iran conflict keeps a risk premium on Strait of Hormuz shipping; OPEC+ held October output steady and the G7 has been drawing down emergency stockpiles.",
      source: "Energy Connects", url: "https://www.energyconnects.com/news/oil/2026/september/opecplus-keeps-output-policy-unchanged-for-october", date: "Oct 6, 2026" },

    { category: "M&A", headline: "Paramount's ~$110B Warner Bros. Discovery takeover moves toward close",
      summary: "Paramount Skydance is acquiring Warner Bros. Discovery at $31.00/share — about $81B of equity (~$110B enterprise value) — in the year's largest media megadeal, uniting Harry Potter, DC, Star Trek and SpongeBob under one roof; with financing locked, it is proceeding toward completion.",
      source: "Reuters / afaqs", url: "https://www.afaqs.com/news/media/paramount-to-acquire-warner-bros-discovery-in-110-billion-deal-11163286", date: "Oct 2026" },

    { category: "Capital Markets", headline: "Paramount lands a ~$52B financing package; bond book tops $109B",
      summary: "Paramount Skydance priced the year's largest M&A financing (~$52B, including ~$7.5B of loans) for the WBD deal; the investment-grade bond tranche (~$30B) drew more than $109B of orders — ~3.6x oversubscribed — and was rated investment grade by Fitch and S&P.",
      source: "Pulse 2.0", url: "https://pulse2.com/paramount-draws-more-than-109-billion-of-orders-for-warner-bros-discovery-bond-financing/", date: "Sep 30, 2026" },

    { category: "M&A", headline: "Aon to buy USI Insurance from KKR for $17B",
      summary: "Insurance broker Aon agreed to acquire USI Insurance Services (~$3B annual revenue) from KKR for $17B including debt — an all-cash deal targeting ~$395M of run-rate synergies and a Q4 2026 close; Aon shares fell ~10% on the news.",
      source: "FinTech Global", url: "https://fintech.global/2026/09/01/aon-agrees-17bn-deal-to-acquire-usi-from-kkr/", date: "Sep 1, 2026" },

    { category: "Capital Markets", headline: "Record US investment-grade bond supply — September tops ~$200B",
      summary: "US high-grade corporate issuance hit about $200.9B in September (one of the five biggest months on record, boosted by the Paramount jumbo deal) as issuers rushed to beat rising yields; 2026 gross supply is tracking toward a record north of $2T.",
      source: "9fin", url: "https://9fin.com/insights/us-ig-wrap-september-volume", date: "Oct 2026" },

    { category: "Earnings", headline: "Q3 2026 earnings season opens with high expectations",
      summary: "FactSet projects S&P 500 Q3 earnings growth of ~29.5% y/y on ~12.3% revenue growth — which would be a third straight quarter of 25%+ profit growth, led by tech, energy and communication services — with analysts unusually raising (not cutting) estimates into the prints.",
      source: "FactSet", url: "https://insight.factset.com/sp-500-earnings-season-preview-q3-2026", date: "Oct 2, 2026" },

    { category: "Macro", headline: "Rotation out of rate-sensitive stocks — Dow and small-caps lag tech",
      summary: "The September hike split the market: the Dow fell ~4% and the Russell 2000 ~4.3% over the past month as higher yields hit cyclicals and small-caps, while the Nasdaq rose on AI strength — a widening leadership gap under a near-5.3% 10-year.",
      source: "MarketScreener", url: "https://www.marketscreener.com/quote/index/RUSSELL-2000-INDEX-4515/", date: "Oct 6, 2026" },

    { category: "Deal", headline: "Bitcoin recovers to ~$86k but is still down sharply year-on-year",
      summary: "Bitcoin trades near $86,000 (up ~9% on the month, having rebounded from its summer lows near $59k) and Ethereum ~$2,710, yet both remain down ~29% and ~39% respectively over 12 months — a crypto bear market under higher-for-longer rates.",
      source: "Trading Economics", url: "https://tradingeconomics.com/btcusd:cur", date: "Oct 6, 2026" },

    { category: "IPO", headline: "A busy late-September US IPO window",
      summary: "Listings clustered before month-end — Accelevation (ACCV) raised $540M, ADARx Pharmaceuticals (ADRX) $447M, Electra Therapeutics (ETRA) $350M and Orion180 Insurance (OIG) $240M — one of the busiest new-issue stretches in years.",
      source: "IPOScoop", url: "https://www.iposcoop.com/current-year-pricings/", date: "Sep 2026" },

    { category: "IPO", headline: "NSE readies India's biggest-ever IPO (~$3.6B)",
      summary: "The National Stock Exchange of India moved to list after SEBI approval with a ~₹30,000 crore (~$3.6B) all-secondary offer — India's largest IPO ever — at a valuation near ₹5.26 lakh crore, a notable global new-issue amid a strong 2026 IPO market.",
      source: "Outlook Business", url: "https://www.outlookbusiness.com/markets/nse-rs-30000-cr-ipo-issue-likely-to-open-on-september-18-listing-on-sep-25", date: "Sep 2026" },

    { category: "Macro", headline: "Dollar eases from its highs; gold holds near $4,150 after a blow-off spike",
      summary: "The Dollar Index slipped to ~101.9 even with the Fed hawkish, while gold sits near $4,152 (down ~6% on the month after an earlier spike above $5,000) and silver near $61 — precious metals cooling as real yields climb.",
      source: "Trading Economics", url: "https://tradingeconomics.com/commodity/gold", date: "Oct 6, 2026" },

    { category: "Earnings", headline: "Chip bellwether TSMC on deck (Oct 15) as the AI trade stays central",
      summary: "After Micron's blowout and Nvidia's march past a ~$5.8T market cap, the world's top foundry TSMC reports Q3 on Oct 15 — a key read on whether AI-hardware demand can keep justifying megacap valuations into year-end.",
      source: "Nasdaq", url: "https://www.nasdaq.com/articles/3-quarterly-reports-watch-week-nflx-pep-tsm", date: "Oct 2026" }
  ],

  /* ---------- VENTURE CAPITAL (GCC-weighted + big global) ---------- */
  ventureCapital: [
    { region: "GCC", headline: "Saudi fintech Barq becomes a unicorn with a $329.5M Series A",
      summary: "Riyadh digital-payments app Barq raised a $329.5M Series A — one of Saudi Arabia's largest-ever — at a $1.85B valuation, with Noon Investments, Sohar International Bank and the M20 Fund participating; Barq says it has 15M+ users.",
      source: "Wamda / Arab News", url: "https://www.wamda.com/2026/09/saudi-fintech-barq-closes-329-5-million-series-a", date: "Sep 2026" },

    { region: "GCC", headline: "Tabby raises $233M Series F at a $6.5B valuation",
      summary: "Saudi/UAE fintech Tabby raised $233M (up ~44% from its $4.5B mark a year earlier), led by Blue Pool Capital with HSG, Wellington and Arbor Ventures, as it expands beyond BNPL into broader credit ahead of a widely expected IPO.",
      source: "FinTech Futures", url: "https://www.fintechfutures.com/venture-capital-funding/tabby-raises-233m-at-6-5bn-valuation", date: "Sep 2026" },

    { region: "GCC", headline: "Paymob lands a $35M pre-Series C co-led by Mubadala",
      summary: "MENA payments-infrastructure firm Paymob (Egypt/UAE/Saudi/Oman) raised $35M co-led by Mubadala and the EBRD, with British International Investment, Global Ventures and DPI Ventures; it now serves 390,000+ merchants.",
      source: "Arab News", url: "https://www.arabnews.com/startups/startup-wrap-funding-momentum-continues-in-mena-despite-regional-headwinds-3002904", date: "Sep 26, 2026" },

    { region: "GCC", headline: "Bahrain's Tarabut secures $50M in strategic financing",
      summary: "Open-banking infrastructure firm Tarabut raised $50M led by Riyad Bank, the SAB X-Tech Fund and GIB Saudi Arabia (with Zamil Group and Kanoo Ventures) to deepen its Saudi expansion.",
      source: "Arab News", url: "https://www.arabnews.com/startups/startup-wrap-saudi-fintechs-lead-regional-funding-surge-as-smes-secure-major-deals-3002142", date: "Sep 19, 2026" },

    { region: "GCC", headline: "Saudi fintech Abwab.ai raises a $4M seed led by Speedinvest",
      summary: "Riyadh-based Abwab.ai closed a $4M seed led by Speedinvest to build AI-driven financial and credit infrastructure for the region.",
      source: "Arab News", url: "https://www.arabnews.com/startups/saudi-fintech-abwabai-raises-4m-in-seed-round-led-by-speedinvest-3002549", date: "Sep 21, 2026" },

    { region: "GCC", headline: "Qatar's Aligator raises a $1.2M seed led by QDB",
      summary: "Qatar-based Aligator, which builds autonomous PR/communications AI agents, raised a $1.2M seed led by Qatar Development Bank (with Media City Qatar's Next Ventures) to expand across MENA.",
      source: "Wamda", url: "https://www.wamda.com/2026/09/qatar-aligator-raises-1-2-million-seed-round", date: "Sep 30, 2026" },

    { region: "GCC", headline: "Saudi procurement-tech Project Suppliers raises a $1M pre-seed",
      summary: "Saudi construction-and-procurement startup Project Suppliers closed a $1M (SAR 3.75M) pre-seed to scale its B2B building-materials platform — one of the freshest early-October GCC rounds.",
      source: "Wamda", url: "https://www.wamda.com/2026/10/saudi-project-suppliers-raises-1-million-pre-seed", date: "Oct 5, 2026" },

    { region: "GCC", headline: "UAE's Huspy acquires Italy's Integra Finance in an EU push",
      summary: "Dubai proptech/mortgage platform Huspy acquired Italian brokerage Integra Finance as part of a planned ~$86M investment in Italy; Huspy now operates in 15 cities across the UAE, Spain, Saudi Arabia and Italy.",
      source: "Arab News", url: "https://www.arabnews.com/startups/startup-wrap-funding-momentum-continues-in-mena-despite-regional-headwinds-3002904", date: "Sep 26, 2026" },

    { region: "Global", headline: "OpenAI in talks to raise $30B+ at a ~$1.4T valuation",
      summary: "OpenAI is reportedly in talks for a pre-IPO round of at least $30B at roughly a $1.4T valuation — among the largest private raises ever; CEO Sam Altman has ruled out a 2026 public listing. (Reported/in talks — not closed.)",
      source: "TechCrunch", url: "https://techcrunch.com/2026/09/29/openai-repotedly-in-talks-to-raise-30b-round-at-1-4t-valuation/", date: "Sep 29, 2026" },

    { region: "Global", headline: "Instinct raises a $1B Series C at a $10B valuation",
      summary: "San Francisco personal-AI-assistant startup Instinct raised $1B at a $10B valuation from Sequoia, Benchmark and Coatue — the largest US venture round of the week.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-cyber-real-estate-instinct/", date: "Oct 2, 2026" },

    { region: "Global", headline: "EliseAI raises $350M at a $4B valuation",
      summary: "EliseAI, which builds AI agents for housing and property management, raised $350M at a $4B valuation led by Andreessen Horowitz and Bessemer Venture Partners.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-cyber-real-estate-instinct/", date: "Oct 2, 2026" },

    { region: "Global", headline: "General Intuition raises $220M at a $6.2B valuation",
      summary: "Foundational-AI startup General Intuition closed $220M at a $6.2B valuation, led by Valor Equity Partners and Atreides Management, extending the frenzy for frontier-AI bets.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-cyber-real-estate-instinct/", date: "Oct 2, 2026" }
  ],

  /* ---------- LEBANON ECONOMY ---------- */
  lebanonEconomy: [
    { label: "Lira / USD",         value: "~89,500",     sub: "Official band ~89,500; market ~89,700 — stable since 2023" },
    { label: "Inflation (y/y)",    value: "~16.7%",      sub: "August 2026 — easing from ~19% in May" },
    { label: "BdL FX Reserves",    value: "~$11.4B",     sub: "Sep 30, 2026 — broadly flat/gently declining (excludes gold)" },
    { label: "Eurobonds",          value: "~29¢",        sub: "BLOM Bond Index ~29 (late Sept); +~19% YTD on reform/UAE-reengagement hopes; in default since 2020" },
    { label: "IMF Program",        value: "No deal yet", sub: "IMF visit Sept 15–18 praised the bank-resolution law as 'a significant step'; a staff-level deal is still hoped-for" },
    { label: "Reconstruction",     value: "~$11B+",      sub: "World Bank (Mar 2025) estimate — predates the 2026 war, so likely understated" },
    { label: "GDP Growth",         value: "-6.4% (2026f)", sub: "World Bank — a war-driven contraction, reversing ~+4% in 2025" },
    { label: "Bank-System Losses", value: "~$70–80B",    sub: "The 'gap'; the Gap Law on loss distribution is still the core fight" }
  ],

  /* ---------- GEOPOLITICAL MAP (today's hotspots) ---------- */
  mapPoints: [
    { place: "Beirut",            lat: 33.89, lng: 35.50,  weight: 3, region: "Lebanon",     label: "Truce fraying — Israel still holds ~20% of the south; IMF talks continue with no deal yet; GDP set to contract ~6%" },
    { place: "South Lebanon",     lat: 33.38, lng: 35.48,  weight: 3, region: "Lebanon",     label: "Near-daily Israeli strikes test the ceasefire; the army took phase-one control but Hezbollah refuses to disarm" },
    { place: "Tehran",            lat: 35.69, lng: 51.39,  weight: 3, region: "Iran",        label: "The US–Iran deal collapsed into renewed conflict; UN snapback sanctions reimposed and IAEA inspectors locked out" },
    { place: "Strait of Hormuz",  lat: 26.57, lng: 56.25,  weight: 3, region: "Gulf",        label: "Shipping disruption from the Iran conflict keeps Brent crude near $100" },
    { place: "Washington",        lat: 38.90, lng: -77.04, weight: 2, region: "US",          label: "Fed hiked to 3.75–4.00%; a shutdown was averted (funded to Dec 11); midterms loom Nov 3" },
    { place: "Gaza",              lat: 31.50, lng: 34.47,  weight: 3, region: "Israel-Gaza", label: "Trump's ceasefire one year on — phase two deadlocked; 1,400+ killed since the truce and a deepening hunger crisis" },
    { place: "Jerusalem",         lat: 31.77, lng: 35.21,  weight: 2, region: "Israel-Gaza", label: "Oct 7 third-anniversary commemorations amid multi-front pressure (Lebanon, Iran, Gaza)" },
    { place: "Doha",              lat: 25.29, lng: 51.53,  weight: 2, region: "Gulf",        label: "Qatar shuttling between the US, Israel and Hamas on the Gaza file" },
    { place: "Damascus",          lat: 33.51, lng: 36.29,  weight: 1, region: "Syria",       label: "Al-Sharaa–Israel security talks stalled near '90%'; he demanded an Israeli pullback at the UN" },
    { place: "Riyadh",            lat: 24.71, lng: 46.68,  weight: 1, region: "Gulf",        label: "OPEC+ held October output steady as the Hormuz risk premium lifts oil" }
  ],
  mapArcs: [
    { from: [35.69, 51.39],  to: [26.57, 56.25] },
    { from: [38.90, -77.04], to: [35.69, 51.39] },
    { from: [25.29, 51.53],  to: [31.50, 34.47] },
    { from: [33.89, 35.50],  to: [31.77, 35.21] },
    { from: [38.90, -77.04], to: [25.29, 51.53] }
  ],

  /* ---------- POLITICS ---------- */
  politics: {

    middleEast: [
      { region: "Lebanon", headline: "June truce frays — Israel keeps striking the south and still occupies ~20% of it",
        summary: "The US-brokered truce in effect since ~June 19 is holding only in name: Israel still holds five positions across roughly 20% of south Lebanon and has carried out near-daily strikes (a mid-August strike killed 11, an early-September one 12). The 2026 war's cumulative toll is now above ~4,300 Lebanese killed and ~1.2 million displaced.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/8/16/why-has-israel-escalated-attacks-in-southern-lebanon-despite-ceasefire", date: "Sep–Oct 2026" },

      { region: "Lebanon", headline: "'Disarmament-for-withdrawal' framework stalled — Hezbollah refuses, army finishes only phase one",
        summary: "The June 26 US framework (Israeli withdrawal in exchange for Hezbollah disarmament) is still rejected by Hezbollah (chief Qassem called it 'null and void') and Speaker Berri; the army completed only phase one south of the Litani, while Hezbollah refuses to give up weapons as long as strikes and occupation continue. Aoun and Salam back a state monopoly on arms.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/features/2026/6/27/israel-lebanon-deal-ties-ceasefire-to-hezbollah-disarmament-will-it-work", date: "Sep 2026" },

      { region: "Lebanon", headline: "IMF leaves Beirut with no program yet; economy set to shrink ~6.4% in 2026",
        summary: "An IMF mission (Sept 15–18) said no arrangement is in place yet but praised the amended Bank Resolution Law as 'a significant step forward'; the World Bank projects the war-hit economy to contract 6.4% in 2026 after ~+4% in 2025, with reconstruction needs earlier pegged near $11B and a 'financial gap law' still pending.",
        source: "IMF", url: "https://www.imf.org/en/news/articles/2026/09/18/pr26297-lebanon-imf-staff-concludes-visit-to-lebanon", date: "Sep 18, 2026" },

      { region: "Iran", headline: "US–Iran 'final deal' collapsed into war; UN snapback sanctions reimposed",
        summary: "The June 2026 roadmap never produced a final deal — talks collapsed, the IAEA declared Iran non-compliant, and UN 'snapback' sanctions were reimposed, with agency cameras disabled and inspectors blocked from the bombed Fordow, Natanz and Isfahan sites. A late-September report that Iran offered inspector access for sanctions relief was publicly denied by Tehran (unconfirmed).",
        source: "CNN", url: "https://www.cnn.com/2026/09/10/politics/iran-nuclear-program-inspections-iaea", date: "Sep–Oct 2026" },

      { region: "Iran", headline: "Iran's economy buckles under reimposed sanctions — inflation near 90%",
        summary: "With UN sanctions back and the war disrupting oil exports, Iran's inflation is running near 90% year-on-year and the rial has fallen roughly 30%, deepening the economic strain even as Tehran shifts to a more offensive military posture.",
        source: "Rigzone", url: "https://www.rigzone.com/news/wire/iran_wants_sanctions_eased_to_allow_back_nuclear_inspectors-02-oct-2026-184755-article/", date: "Oct 2, 2026" },

      { region: "Gulf", headline: "OPEC+ holds October output steady as Hormuz disruption keeps Brent near $100",
        summary: "At a Sept 6 virtual meeting the core OPEC+ producers kept October output at September levels, citing uncertainty while the Iran war disrupts the Strait of Hormuz; Brent traded around $98–102 (up ~55% year-on-year), with the G7 drawing down emergency stockpiles to ease prices.",
        source: "Energy Connects", url: "https://www.energyconnects.com/news/oil/2026/september/opecplus-keeps-output-policy-unchanged-for-october", date: "Oct 6, 2026" },

      { region: "Israel-Gaza", headline: "Trump's Gaza ceasefire one year on — phase two deadlocked, hunger persists",
        summary: "A year after the October 2025 truce, phase two is stuck on sequencing (Israel wants Hamas disarmed before completing its withdrawal; Hamas ties disarmament to withdrawal). Gaza's health ministry says 1,400+ Palestinians have been killed since the truce; ~77% face acute food insecurity and most remain displaced.",
        source: "UN OCHA", url: "https://www.ochaopt.org/content/humanitarian-situation-update-331-gaza-strip", date: "Oct 2026" },

      { region: "Syria", headline: "Al-Sharaa–Israel security talks stall near '90%'; president demands withdrawal at the UN",
        summary: "In his Sept 23 UN General Assembly speech, Syrian President al-Sharaa demanded Israel pull back to its Dec 8, 2024 lines and reaffirmed the 1974 disengagement agreement, after US-backed talks on a new security pact reportedly reached ~90% before stalling over sequencing; Israeli forces remain inside the Golan buffer.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/9/23/syrias-al-sharaa-warns-israeli-attacks-endanger-delicate-post-war-recovery", date: "Sep 23, 2026" }
    ],

    us: [
      { headline: "No shutdown — Trump signed a stopgap Sept 2 funding the government through Dec 11",
        summary: "Congress acted nearly a month early: the Senate (90–6) and House (370–48) passed a continuing resolution, signed Sep 2, keeping the government open past the Oct 1 fiscal-year start and the Nov 3 midterms. There is no shutdown; the next funding cliff is Dec 11.",
        source: "NBC News", url: "https://www.nbcnews.com/politics/congress/senate-leaders-reach-deal-avert-shutdown-2026-elections-rcna590564", date: "Sep 2, 2026" },

      { headline: "Fed hikes in September — first increase since 2023 — to 3.75%–4.00%",
        summary: "After holding 9–3 on Jul 29, the FOMC raised rates 25bp on Sep 16 in a unanimous 12–0 vote — its first hike since 2023 — as Chair Kevin Warsh prioritized fighting the Iran-war energy-driven inflation; markets price roughly one more possible hike in 2026.",
        source: "CNBC", url: "https://www.cnbc.com/2026/09/16/fed-meeting-today-live-updates.html", date: "Sep 16, 2026" },

      { headline: "Hiring stalls — just 29,000 jobs added in September; unemployment up to 4.2%",
        summary: "The September jobs report (released Oct 2) showed only +29,000 payrolls and unemployment rising to 4.2%, with sharp downward revisions to July (−10,000) and August (+133,000) and slowing wage growth — a clear cooldown even as inflation stays above target.",
        source: "CNN", url: "https://www.cnn.com/2026/10/02/economy/us-jobs-report-september-final", date: "Oct 2, 2026" },

      { headline: "Democrats favored for the House with four weeks to the midterms; Trump approval ~37%",
        summary: "Heading into Nov 3, Democrats lead the generic ballot by roughly 9 points (NBC 52–43) and are favored to retake the House (Cook forecasts a +5 to +15 net seat gain), with Trump's approval near 37% — among the lowest pre-midterm readings in decades — though the Senate map stays tougher for Democrats.",
        source: "NPR", url: "https://www.npr.org/2026/10/06/nx-s1-5989694/midterm-elections-control-congress", date: "Oct 6, 2026" },

      { headline: "Supreme Court's June rulings went against Trump on birthright & the Fed; new term opened Oct 5",
        summary: "In late June the Court struck down Trump's birthright-citizenship order 6–3 (Trump v. Barbara) and blocked his firing of Fed Governor Lisa Cook 5–4 (she keeps her seat), while upholding state transgender-sports bans 6–3. The new term began Oct 5 with a docket featuring AR-15 bans, immigration detention and a climate-liability case.",
        source: "SCOTUSblog", url: "https://www.scotusblog.com/2026/06/court-rules-that-states-can-exclude-transgender-athletes-from-girls-and-womens-sports/", date: "Oct 5, 2026" }
    ]
  },

  /* ---------- SOURCES (footer credits) ---------- */
  sources: [
    { name: "Trading Economics", url: "https://tradingeconomics.com/" },
    { name: "stockanalysis.com", url: "https://stockanalysis.com/" },
    { name: "CNBC",              url: "https://www.cnbc.com/" },
    { name: "Al Jazeera",        url: "https://www.aljazeera.com/" },
    { name: "CNN",               url: "https://www.cnn.com/" },
    { name: "Crunchbase News",   url: "https://news.crunchbase.com/" },
    { name: "Arab News",         url: "https://www.arabnews.com/" },
    { name: "IMF",               url: "https://www.imf.org/" }
  ]
};

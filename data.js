/* ============================================================
   DAILY BRIEFING — DATA FILE
   ------------------------------------------------------------
   This file holds everything your dashboard displays.
   It is regenerated each time you run  /update-news  in Claude Code.
   You normally never edit this by hand.

   Last generated: June 19, 2026
   ============================================================ */

window.DASHBOARD_DATA = {

  dateLabel: "Friday, June 19, 2026",
  lastUpdated: "June 19, 2026",
  updatedAt: "June 19, 2026, 6:14 PM (Beirut)",
  asOfNote: "US stocks & indices: Thu Jun 18 close (US markets closed Fri Jun 19, Juneteenth) · international indices, commodities, FX & crypto: Jun 18–19 · regional markets: ~Jun 18 close.",
  drivingStory: "US markets were closed today for Juneteenth, so prices are Thursday's close — and they're still digesting the Fed's hawkish surprise (a hold that now points to a 2026 hike), which has kept the dollar at a multi-week high and pushed gold and crypto lower. The big geopolitical story: the US–Iran deal's Geneva signing was postponed as Iran suspended talks over the deadliest day yet of Israeli strikes on Lebanon (~47 killed) — though a US/Qatar-brokered Israel–Hezbollah ceasefire then took hold.",

  /* Short labels for the most recent trading sessions (oldest → newest), used as the index-chart x-axis & hover dates. NYSE calendar; ends at the latest US close. */
  histDates: ["May 18","May 19","May 20","May 21","May 22","May 26","May 27","May 28","May 29","Jun 1","Jun 2","Jun 3","Jun 4","Jun 5","Jun 8","Jun 9","Jun 10","Jun 11","Jun 12","Jun 15","Jun 16","Jun 17","Jun 18"],

  /* ---------- MARKETS ---------- */
  markets: {

    indices: [
      { name: "S&P 500",          level: 7500.58,  day: "+1.08", month: "+2.00", ytd: "+9.6", hist: [7354,7433,7446,7473,7519,7520,7564,7580,7600,7610,7554,7584,7384,7406,7387,7267,7394,7431,7554,7511,7420,7501] },
      { name: "Nasdaq Composite", level: 26517.93, day: "+1.91", month: "+2.50", ytd: "+14.1", hist: [25871,26270,26293,26344,26656,26675,26917,26973,27087,27094,26854,26831,25709,25930,25679,25170,25810,25889,26684,26376,26022,26518] },
      { name: "Nasdaq 100",       level: 30234.00, day: "+1.90", month: "+2.50", ytd: "+19.7", note: "Estimated from the Nasdaq Composite — a separate Nasdaq 100 level wasn't published while US markets were shut Jun 19." },
      { name: "Dow Jones",        level: 51564.70, day: "+0.14", month: "+4.50", ytd: "+7.3", hist: [49364,50009,50286,50580,50462,50644,50669,51032,51079,51308,50687,51562,50867,50786,50872,49919,50849,51202,51671,52000,51493,51565] },
      { name: "Russell 2000",     level: 2979.77,  day: "+2.12", month: "+8.50", ytd: "+20.1", hist: [2747,2817,2843,2869,2921,2920,2937,2919,2906,2932,2894,2935,2834,2855,2867,2835,2921,2944,2965,2939,2918,2980] },
      { name: "STOXX Europe 600", level: 639.00,   day: "0.00", month: "+2.90", ytd: "+7.9", hist: [621,625,632,628,628,625,626,621,625,621,624,623,622,619,619,618,622,633,634,636,637,639,639] },
      { name: "FTSE 100",         level: 10406.25, day: "-0.97", month: "-0.25", ytd: "+3.3", hist: [10432,10443,10466,10491,10505,10426,10409,10339,10374,10332,10360,10368,10373,10227,10255,10304,10472,10431,10494,10478,10504,10406] },
      { name: "Nikkei 225",       level: 71053.49, day: "+1.65", month: "+9.30", ytd: "+41.1", note: "Record territory. Some data sites misreport YTD ~+80% (a base-date error) — true YTD is ~+41%.", hist: [64996,64999,64693,66330,66310,66934,66734,68402,67471,66588,63792,64025,65417,64179,64217,66020,68463,69318,68755,69980,69902,71053] },
      { name: "Hang Seng",        level: 23924.81, day: "-1.59", month: "-6.70", ytd: "-6.7", hist: [25651,25387,25606,25599,25328,25006,25182,25398,26038,25633,25253,24962,24657,24566,24408,24249,24718,24843,24494,24312,24312,23925] }
    ],

    rates: [
      { name: "US 10-Year Treasury", value: "4.45%",      change: "little changed (Jun 18)" },
      { name: "US 2-Year Treasury",  value: "4.18%",      change: "+16bp on the Jun 17 hawkish Fed" },
      { name: "Fed Funds (target)",  value: "3.50–3.75%", change: "Held Jun 17; dot plot now signals a 2026 HIKE" }
    ],

    fx: [
      { name: "EUR/USD",            value: "1.1500", day: "-0.17" },
      { name: "USD/JPY",            value: "160.70", day: "+0.06" },
      { name: "GBP/USD",            value: "1.3420", day: "-0.10" },
      { name: "Dollar Index (DXY)", value: "100.60", day: "+0.30" }
    ],

    crypto: [
      { name: "Bitcoin",  price: 62500, day: "-2.4", month: "+14.0", year: "+37.0" },
      { name: "Ethereum", price: 1688,  day: "-2.2", month: "+16.0", year: "+29.0" }
    ]
  },

  /* ---------- REGIONAL MARKETS (GCC & Egypt) ---------- */
  regionalMarkets: [
    { name: "Saudi · TASI",        level: 11121.13, day: "+0.06", month: "+1.26", ytd: "+6.01" },
    { name: "Abu Dhabi · ADX",     level: 10016.82, day: "-0.96", month: "+4.36", ytd: "+0.24" },
    { name: "Dubai · DFM",         level: 6269.51,  day: "+2.51", month: "+6.00", ytd: "+3.70" },
    { name: "Qatar · QE",          level: 10510.92, day: "-0.61", month: "+0.89", ytd: "-2.33" },
    { name: "Kuwait · All-Share",  level: 8760.16,  day: "-0.61", month: "+1.17", ytd: "-1.66" },
    { name: "Bahrain · All-Share", level: 2028.09,  day: "+0.60", month: "+5.32", ytd: "-1.86" },
    { name: "Oman · MSX 30",       level: 7582.24,  day: "-0.67", month: "-2.15", ytd: "+29.23" },
    { name: "Egypt · EGX 30",      level: 52621.84, day: "+1.10", month: "+1.18", ytd: "+25.80" }
  ],

  /* ---------- WEEK AHEAD (scheduled catalysts) ---------- */
  weekAhead: [
    { date: "Mon Jun 22", category: "Geopolitics", event: "US–Iran deal: day ~4 of the 60-day window", detail: "Watching whether the postponed Geneva talks restart, plus Strait of Hormuz reopening and Israel–Lebanon ceasefire compliance." },
    { date: "Mon Jun 22", category: "Geopolitics", event: "Lebanon–Israel talks: fifth round begins", detail: "Beirut seeks a permanent ceasefire, full Israeli withdrawal, army deployment and reconstruction." },
    { date: "Tue Jun 23", category: "Earnings", event: "FedEx Q4 (after close)", detail: "Bellwether for global shipping and freight demand." },
    { date: "Tue Jun 23", category: "Central Bank", event: "Fed speakers / Powell-style testimony window", detail: "Semiannual monetary-policy testimony typically lands this stretch (exact date to confirm)." },
    { date: "Wed Jun 24", category: "Earnings", event: "Micron FQ3 (after close)", detail: "Key AI / HBM-memory demand gauge." },
    { date: "Wed Jun 24", category: "Earnings", event: "General Mills & Paychex", detail: "A consumer-staples read plus an SMB-payrolls signal (before open)." },
    { date: "Thu Jun 25", category: "Econ", event: "US final Q1 GDP + corporate profits", detail: "Third estimate; prior 2nd estimate was revised to +1.6% (8:30am ET)." },
    { date: "Thu Jun 25", category: "Econ", event: "US durable goods (May) + jobless claims", detail: "A capex signal and a high-frequency labor read; also advance goods trade." },
    { date: "Thu Jun 25", category: "Central Bank", event: "Banxico (Mexico) rate decision", detail: "Consensus sees a ~50bp cut — a fourth straight." },
    { date: "Fri Jun 26", category: "Econ", event: "US PCE inflation (May) + income & spending", detail: "The Fed's preferred inflation gauge — the week's marquee data after the hawkish dot plot." },
    { date: "Tue Jun 30", category: "Earnings", event: "Nike Q4 (after close)", detail: "A read on the US consumer and Nike's turnaround." },
    { date: "Tue Jun 30", category: "Econ", event: "US consumer confidence (June)", detail: "Conference Board confidence plus Chicago PMI." }
  ],

  /* ---------- BIG STOCKS (largest by market cap) ---------- */
  /* Price & 1-day = Thu Jun 18 close (US shut Jun 19) · 1M / 1Y = trailing price return */
  stocks: [
    { ticker: "NVDA",  name: "Nvidia",              price: 210.69, day: "+2.95", month: "-6.5",  year: "+44.8",  mktcap: "$5.10T", hist: [220.6,223.5,219.5,215.3,214.9,212.6,214.3,211.1,224.4,222.8,214.8,218.7,205.1,208.6,208.2,200.4,204.9,205.2,212.5,207.4,204.65,210.69] },
    { ticker: "GOOGL", name: "Alphabet",            price: 368.03, day: "+1.17", month: "-7.3",  year: "+112.3", mktcap: "$4.52T", hist: [387.7,388.9,387.7,383,388.9,388.8,390.1,380.3,376.4,361.9,359,372.2,368.5,363.3,364.3,356.4,357.8,359.7,369.4,373.3,363.79,368.03] },
    { ticker: "AAPL",  name: "Apple",               price: 298.01, day: "+0.70", month: "+0.1",  year: "+51.6",  mktcap: "$4.38T", hist: [299,302.3,305,308.8,308.3,310.9,312.5,312.1,306.3,315.2,310.3,311.2,307.3,301.5,290.6,291.6,295.6,291.1,296.4,299.2,295.95,298.01] },
    { ticker: "MSFT",  name: "Microsoft",           price: 379.40, day: "+0.13", month: "-10.2", year: "-21.0",  mktcap: "$2.82T", hist: [417.4,421.1,419.1,418.6,416,412.7,427,450.2,460.5,441.3,427.3,428.1,416.7,411.7,403.4,397.4,390.3,390.7,399.8,393.8,378.91,379.40] },
    { ticker: "AMZN",  name: "Amazon",              price: 244.39, day: "+2.90", month: "-7.7",  year: "+15.0",  mktcap: "$2.57T", hist: [259.3,265,268.5,266.3,265.3,271.9,274,270.6,261.3,256.5,250,253.8,246,245.2,244.2,238,241.5,238.6,246,246,237.5,244.39] },
    { ticker: "SPCX",  name: "SpaceX",              price: 174.90, day: "-8.82", month: "n/a",   year: "n/a",    mktcap: "$2.31T", hist: [192.5,201.8,191.82,174.90] },
    { ticker: "AVGO",  name: "Broadcom",            price: 411.35, day: "+4.70", month: "-2.2",  year: "+65.0",  mktcap: "$1.94T", hist: [411.1,417.8,414.6,414.1,422,421.9,426.6,446.8,460,481.6,479.2,418.9,385.7,396.6,392.2,372.1,385.6,382.1,393.9,376.7,392.9,411.35] },
    { ticker: "TSLA",  name: "Tesla",               price: 400.49, day: "+1.04", month: "-2.3",  year: "+24.4",  mktcap: "$1.50T", hist: [404.1,417.3,417.9,426,433.6,440.4,442.1,435.8,415.9,423.7,423.7,418.5,391,409,396.7,381.6,399.2,406.4,411.2,404.7,396.38,400.49] },
    { ticker: "META",  name: "Meta Platforms",      price: 577.22, day: "+1.70", month: "-5.6",  year: "-17.0",  mktcap: "$1.47T", hist: [602.6,605.1,607.4,610.3,612.3,635.3,635.3,632.5,600.5,597.6,623,627.6,593,585.4,584.6,571,568.4,567,593.5,600.2,567.58,577.22] },
    { ticker: "BRK.B", name: "Berkshire Hathaway",  price: 489.46, day: "-0.37", month: "+0.2",  year: "+0.9",   mktcap: "$1.06T", hist: [480.5,480.9,480,486.4,483.6,479.9,477.4,474.5,470.3,471.5,475.4,478.6,488.1,487,487.8,483.7,485.8,489.3,495.5,495,491.28,489.46] },
    { ticker: "JPM",   name: "JPMorgan Chase",      price: 325.22, day: "-2.47", month: "+8.1",  year: "+18.7",  mktcap: "$890B", hist: [295.7,302,303,306.4,306.7,299.3,296.7,299.3,296.6,301,300.9,310.9,312.4,311.1,312.7,309.1,313.5,320.7,319.4,331.1,333.46,325.22] }
  ],

  /* ---------- COMMODITIES ---------- */
  commodities: [
    { name: "WTI Crude",   price: 76.91,   unit: "$/bbl",     day: "+0.40", month: "-24.7", ytd: "+26.1" },
    { name: "Brent Crude", price: 80.04,   unit: "$/bbl",     day: "+0.24", month: "-25.6", ytd: "+31.8" },
    { name: "Natural Gas", price: 3.22,    unit: "$/MMBtu",   day: "-0.45", month: "+6.1",  ytd: "-24.5" },
    { name: "Gold",        price: 4151.05, unit: "$/oz",      day: "-1.40", month: "-6.5",  ytd: "-1.5" },
    { name: "Silver",      price: 64.54,   unit: "$/oz",      day: "-1.69", month: "-13.0", ytd: "-5.7" },
    { name: "Copper",      price: 6.32,    unit: "$/lb",      day: "-0.86", month: "-1.6",  ytd: "+11.3" },
    { name: "Wheat",       price: 605.75,  unit: "¢/bushel",  day: "-1.14", month: "n/a",   ytd: "+19.5" }
  ],

  /* ---------- FINANCIAL NEWS ---------- */
  financialNews: [
    { category: "Macro", headline: "Fed holds, but the dot plot flips to a 2026 HIKE in Warsh's debut",
      summary: "The FOMC held at 3.50–3.75% on June 17 (Kevin Warsh's first meeting as Chair), but the median year-end dot jumped to 3.8% (from 3.4%), with 9 of 18 officials now penciling in a 2026 hike and the easing bias stripped from the statement. 2026 median PCE inflation was raised to 3.6%.",
      source: "StockTitan", url: "https://www.stocktitan.net/articles/fed-rate-decision-june-17-2026", date: "Jun 17, 2026" },

    { category: "Macro", headline: "Stocks slid on the hawkish Fed; 2-year yield spiked ~16bp",
      summary: "Equities fell on June 17 (S&P −1.2%, Dow −507) and the 2-year Treasury yield jumped 16+bp to ~4.18% as markets repriced to the steeper dot plot. The Dollar Index surged to a multi-week high; stocks then rebounded June 18 before the Juneteenth close.",
      source: "TheStreet", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-june-17-2026", date: "Jun 17, 2026" },

    { category: "Macro", headline: "Gold and silver sink as the dollar tests yearly highs",
      summary: "Gold fell more than 2.5% intraday and lost the $4,300 level (slipping toward ~$4,150), and silver dropped below $66, as the hawkish Fed lifted the dollar and real yields and pressured non-yielding assets.",
      source: "Kitco News", url: "https://www.kitco.com/news/article/2026-06-18/gold-silver-sink-dollar-tests-yearly-highs-following-hawkish-fed-kitco-pm", date: "Jun 18, 2026" },

    { category: "Macro", headline: "Bank of England holds at 3.75%, with two dissents for a hike",
      summary: "The BoE's MPC voted 7–2 to hold Bank Rate at 3.75% on June 18, with the two dissenters favoring a 25bp increase amid sticky UK inflation (CPI ~2.8%) and Middle East energy risk — a hawkish tilt mirroring the Fed.",
      source: "NBC News / BoE", url: "https://www.mortgageonefinance.co.uk/news/bank-of-england-18-june-2026-rate-decision", date: "Jun 18, 2026" },

    { category: "Macro", headline: "Brent crashes below $80 as the US–Iran deal reopens Hormuz",
      summary: "Brent fell toward $80 and WTI toward $77 — their lowest since March — after the US–Iran framework to reopen the Strait of Hormuz and lift oil sanctions, erasing the war-risk premium (Brent down ~38% from April's high). Prices turned choppy as fresh Lebanon strikes threatened the truce.",
      source: "CNBC", url: "https://www.cnbc.com/2026/05/29/oil-prices-iran-ceasefire-us-trump-strait-hormuz-energy-costs.html", date: "Jun 18, 2026" },

    { category: "M&A", headline: "Fox to acquire Roku for ~$22B in a streaming push",
      summary: "Fox agreed to buy Roku at $160/share (~$22B enterprise value), with Fox holders owning ~73% of the combined group and $12B of committed bridge financing from Morgan Stanley; it targets ~$400M of synergies and the #3 US TV spot. Closing expected H1 2027.",
      source: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-06-15/fox-to-buy-roku-at-22-billion-value-in-streaming-video-push", date: "Jun 15, 2026" },

    { category: "M&A", headline: "Drahi sells SFR to a Bouygues/Orange/Iliad consortium for €20.4B",
      summary: "Patrick Drahi's Altice France signed an MoU to sell mobile carrier SFR to a three-way consortium (≈42% Bouygues, ≈31% Iliad/Free, ≈27% Orange) valuing it at €20.4B ($23.5B) — one of Europe's largest telecom deals of the decade, pending regulatory review.",
      source: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-06-08/billionaire-drahi-strikes-20-billion-deal-to-sell-france-s-sfr", date: "Jun 2026" },

    { category: "M&A", headline: "Nuvei to acquire Payoneer for $2.75B in cash",
      summary: "Payments firm Nuvei agreed to buy cross-border payments platform Payoneer in a $2.75B all-cash deal, extending fintech consolidation.",
      source: "Inside Arbitrage", url: "https://www.insidearbitrage.com/category/new-merger-announcements/", date: "Jun 15, 2026" },

    { category: "M&A", headline: "Olin to acquire Huntsman in a ~$4.3B chemicals tie-up",
      summary: "Olin agreed to acquire Huntsman in a deal valued at ~$4.27B, consolidating the North American specialty/commodity chemicals space.",
      source: "SEC / Olin", url: "https://www.sec.gov/Archives/edgar/data/0000074303/000119312526271782/d99037dex991.htm", date: "Jun 2026" },

    { category: "IPO", headline: "SpaceX completes the largest IPO in history — $75B raised",
      summary: "SpaceX (Nasdaq: SPCX) priced its IPO at $135/share, selling 555.6M shares for a ~$75B raise (more than double Aramco's 2019 record) at a $1.77T valuation; it opened June 12 at $150 and closed +19%.",
      source: "Yahoo Finance", url: "https://finance.yahoo.com/markets/stocks/article/spacex-sets-135-ipo-price-ahead-of-friday-nasdaq-debut-101955774.html", date: "Jun 12, 2026" },

    { category: "IPO", headline: "SpaceX tumbles ~9% in the Fed selloff — its worst day since listing",
      summary: "SPCX fell nearly 9% to ~$175 on June 18 (down sharply from its ~$226 post-IPO peak) as the hawkish Fed hammered high-multiple growth names; its market cap slipped back below Amazon to ~$2.3T.",
      source: "TradingKey", url: "https://www.tradingkey.com/analysis/stocks/us-stocks/261974416-fed-spacex-allbirds-tradingkey", date: "Jun 18, 2026" },

    { category: "IPO", headline: "OpenAI confidentially files for an IPO; Anthropic also in motion",
      summary: "OpenAI's confidential SEC S-1 was confirmed, targeting a listing as early as September 2026 at a valuation analysts expect to top $1 trillion — following rival Anthropic's June confidential draft.",
      source: "Fortune", url: "https://fortune.com/2026/06/09/openai-files-confidential-s-1-sec-ipo/", date: "Jun 9, 2026" },

    { category: "Earnings", headline: "Accenture beats and raises its cash-flow outlook",
      summary: "Accenture posted fiscal Q3 revenue of $18.72B (+6%) and EPS up 9% to $3.80, with $3.6B free cash flow, and raised FY26 FCF guidance to $10.8–11.5B (≥$9.3B returned to shareholders).",
      source: "Accenture", url: "https://newsroom.accenture.com/news/2026/accenture-reports-third-quarter-fiscal-2026-results", date: "Jun 18, 2026" },

    { category: "Earnings", headline: "Kroger Q1 beats on $46.1B revenue, e-commerce +19%",
      summary: "Kroger reported Q1 revenue of $46.1B with adjusted e-commerce sales up 19% y/y and identical sales (ex-fuel) +1.0%, and maintained FY26 adjusted EPS guidance of $5.10–$5.30.",
      source: "Benzinga", url: "https://www.techtimes.com/articles/318657/20260618/kroger-q1-2026-earnings-beat-estimates-461b-revenue-digital-19.htm", date: "Jun 18, 2026" },

    { category: "Earnings", headline: "CarMax beats but drops 9%; Jabil delivers a beat-and-raise",
      summary: "CarMax reported Q1 revenue over $8B and EPS of $1.31 (both ahead of estimates) yet fell 9% despite multiple price-target hikes; the same day, Jabil posted a beat-and-raise quarter on AI demand.",
      source: "Stocktwits", url: "https://stocktwits.com/news-articles/markets/equity/kmx-stock-recoups-earnings-day-losses-analysts-pour-praise-on-new-car-max-ceo-s-focus-on-cost-and-customer-experience/cZKka7dR77Z", date: "Jun 17, 2026" },

    { category: "Capital Markets", headline: "Wall Street sees record 2026 investment-grade supply — over $2 trillion",
      summary: "Morgan Stanley projects US high-grade issuance could top $2T in 2026 (the largest on record), with ~$620B printed in Q1 and AI-related debt seen more than doubling to ~$400B; IG spreads remain near multi-decade tights (~77bp).",
      source: "Yahoo Finance", url: "https://finance.yahoo.com/news/wall-street-sees-record-investment-171724660.html", date: "Jun 2026" }
  ],

  /* ---------- VENTURE CAPITAL (GCC-weighted + big global) ---------- */
  ventureCapital: [
    { region: "GCC", headline: "Saudi PIF's HUMAIN and stc extend their AI data-center JV",
      summary: "PIF-backed HUMAIN and Saudi Telecom (via Center3) extended their MoU to form an AI data-center JV (HUMAIN 51% / stc 49%) targeting up to 1GW of capacity, starting with a 250MW phase — disclosed in a June 18 Tadawul filing.",
      source: "Arab News", url: "https://www.arabnews.com/node/2647674/amp", date: "Jun 18, 2026" },

    { region: "GCC", headline: "CargoX (UAE) raises $250M for autonomous logistics",
      summary: "UAE driverless-delivery platform CargoX secured $250M led by Abu Dhabi's BlueFive Capital (~$15B AUM), with ex-Talabat CEO Tomaso Rodriguez as CEO, to scale autonomous last/middle/long-haul fleets.",
      source: "Wamda", url: "https://www.wamda.com/2026/06/cargox-secures-250-million-led-bluefive-capital-driverless-logistics-expansion", date: "Jun 2026" },

    { region: "GCC", headline: "TruKKer lands a $300M securitization facility from ADCB",
      summary: "Gulf digital-freight marketplace TruKKer secured a non-recourse trade-receivables securitization facility of up to $300M arranged by ADCB — one of the region's largest structured-finance deals for a tech startup, backed by receivables across the UAE, Saudi Arabia and Turkey.",
      source: "Wamda", url: "https://www.wamda.com/2026/05/trukker-secures-300m-securitisation-facility-adcb", date: "May 2026" },

    { region: "GCC", headline: "Khwarizmi Ventures launches a $70M+ Fund II for GCC startups",
      summary: "Riyadh's Khwarizmi Ventures held a first close above SAR 270M (~$70M) on Fund II from institutions and Saudi family offices, backing seed and Series A startups across the GCC.",
      source: "Wamda", url: "https://www.wamda.com/2026/05/khwarizmi-ventures-launches-fund-ii-70m-close-gcc-startups", date: "May 2026" },

    { region: "GCC", headline: "Jadwa launches a GCC private-credit fund — ~$80M first close",
      summary: "Saudi Arabia's Jadwa Investment launched a GCC-focused private-credit fund targeting up to SAR 750M (~$200M) and completed a first close above SAR 300M (~$80M), part of the region's pivot toward private credit.",
      source: "Gulf News", url: "https://gulfnews.com/business/markets/jadwa-investment-launches-sar-750-million-private-credit-fund-for-gcc-market-1.500408131", date: "Jun 2026" },

    { region: "GCC", headline: "SPARQ (UAE) raises $8.5M seed for an AI game engine",
      summary: "UAE AI game-engine startup SPARQ raised $8.5M in seed funding with early participation from a16z's Scout Fund, after self-funding ~$2.5M over two years.",
      source: "entARABI", url: "https://entarabi.com/en/2026/06/during-the-first-week-of-june-2026-startup-investments-reach-258-5-million/", date: "Jun 2026" },

    { region: "GCC", headline: "Saudi proptech Rize raises $2.9M seed for 'rent now, pay later'",
      summary: "Riyadh proptech Rize closed a $2.9M seed led by SEEDRA Ventures and HALA Ventures to expand its monthly rent-installment platform across the Kingdom.",
      source: "PropTech Buzz", url: "https://www.proptechbuzz.com/news/saudi-proptech-rize-raises-seed-funding", date: "Jun 2026" },

    { region: "GCC", headline: "MENA startups raised $454.7M in May — debt-led",
      summary: "MENA startups raised $454.7M across 33 deals in May (+202% m/m, +76% y/y), but debt was ~66% of the total. The UAE led with $379M (15 deals), Saudi $70M (11), Egypt $5M (3); ~$1.5B raised YTD through May.",
      source: "Wamda", url: "https://www.wamda.com/en/2026/06/mena-startups-raise-4547-million-2026-led-debt-financing", date: "Jun 2026" },

    { region: "Global", headline: "Anthropic closes a $65B round at a $965B valuation",
      summary: "Anthropic raised $65B led by Altimeter, Dragoneer, Greenoaks and Sequoia, valuing it at $965B post-money — the largest standalone-AI round to date — with run-rate revenue reportedly crossing ~$47B and total funding now ~$144B.",
      source: "Anthropic", url: "https://www.anthropic.com/news/series-h", date: "May 2026" },

    { region: "Global", headline: "Ramp raises $750M at a $44B valuation",
      summary: "Spend-management fintech Ramp raised $750M led by ICONIQ, GIC and Ontario Teachers', lifting its valuation to $44B (from $32B six months earlier).",
      source: "TechCrunch", url: "https://techcrunch.com/2026/06/04/ramp-raises-750m-at-44b-valuation-as-investors-hunger-for-fintechs-with-an-ai-story/", date: "Jun 4, 2026" },

    { region: "Global", headline: "Global VC hit a record ~$300B in Q1 2026 — AI ~80%",
      summary: "Global venture funding set a record near $300B in Q1 2026, with AI taking ~$242B (~80%); OpenAI's $122B round (at an $852B valuation), Anthropic, xAI and Waymo drove roughly two-thirds of the quarter.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/record-breaking-funding-ai-global-q1-2026/", date: "Q1 2026" }
  ],

  /* ---------- LEBANON ECONOMY ---------- */
  lebanonEconomy: [
    { label: "Lira / USD",         value: "~89,500",     sub: "Official peg; parallel ~90,300 (mid-Jun 2026)" },
    { label: "Inflation (y/y)",    value: "~20%",        sub: "April 2026 — up from ~11% in January" },
    { label: "BdL FX Reserves",    value: "~$11.6B",     sub: "Mid-June 2026 (+$185M in early June)" },
    { label: "Eurobonds",          value: "~25–27¢",     sub: "On the dollar; in default (latest firm quote Mar 2026)" },
    { label: "IMF Program",        value: "Stalled",     sub: "No Board-approved program; gated on reforms (Gap Law)" },
    { label: "GDP Growth",         value: "+3.5% (2025)", sub: "First growth in ~8 years; 2026 likely back in contraction" },
    { label: "Eurobond Debt",      value: "~$39B",       sub: "In default & unrestructured since 2020" },
    { label: "Bank-System Losses", value: "~$72B",       sub: "The 'gap'; Gap Law drafted Dec 2025" }
  ],

  /* ---------- GEOPOLITICAL MAP (today's hotspots) ---------- */
  mapPoints: [
    { place: "Beirut",          lat: 33.89, lng: 35.50,  weight: 3, region: "Lebanon",     label: "Deadliest day of the war — Israeli strikes kill ~47; a ceasefire then takes hold" },
    { place: "Geneva",          lat: 46.20, lng: 6.14,   weight: 3, region: "Iran",        label: "US–Iran deal signing POSTPONED; talks suspended over Lebanon" },
    { place: "Washington",      lat: 38.90, lng: -77.04, weight: 3, region: "US",          label: "Fed stays hawkish; Trump's Iran deal stalls on day one" },
    { place: "South Lebanon",   lat: 33.38, lng: 35.48,  weight: 2, region: "Lebanon",     label: "Hezbollah kills 4 Israeli soldiers; displaced begin returning to ruins" },
    { place: "Tehran",          lat: 35.69, lng: 51.39,  weight: 2, region: "Iran",        label: "MoU signed electronically; Khamenei gives qualified approval" },
    { place: "Strait of Hormuz",lat: 26.57, lng: 56.25,  weight: 2, region: "Iran",        label: "Reopening drives oil sharply lower, then choppy on Lebanon" },
    { place: "Doha",            lat: 25.29, lng: 51.53,  weight: 2, region: "Gulf",        label: "Qatar (with the US) brokered the Israel–Hezbollah ceasefire" },
    { place: "Riyadh",          lat: 24.71, lng: 46.68,  weight: 2, region: "Gulf",        label: "HUMAIN–stc AI data-center JV (up to 1GW)" },
    { place: "Abu Dhabi",       lat: 24.45, lng: 54.38,  weight: 1, region: "Gulf",        label: "CargoX $250M; TruKKer $300M facility" },
    { place: "Damascus",        lat: 33.51, lng: 36.29,  weight: 1, region: "Syria",       label: "Sharaa says Israel normalization failed 'at the last minute'" }
  ],
  mapArcs: [
    { from: [38.90, -77.04], to: [35.69, 51.39] },
    { from: [35.69, 51.39],  to: [33.89, 35.50] },
    { from: [38.90, -77.04], to: [46.20, 6.14] },
    { from: [35.69, 51.39],  to: [26.57, 56.25] },
    { from: [25.29, 51.53],  to: [33.89, 35.50] }
  ],

  /* ---------- POLITICS ---------- */
  politics: {

    middleEast: [
      { region: "Lebanon", headline: "Deadliest day of the war: Israeli strikes kill ~47 as a fragile truce takes hold",
        summary: "Israeli airstrikes across Lebanon killed at least 47 people and wounded ~97 on Friday (per the Health Ministry) after overnight strikes on 80+ Hezbollah targets — the deadliest flare-up since the US–Iran MoU. A US/Qatar-brokered Israel–Hezbollah ceasefire then took effect, with immediate violations reported.",
        source: "U.S. News / Reuters", url: "https://www.usnews.com/news/world/articles/2026-06-19/israel-steps-up-lebanon-attacks-with-strikes-that-kill-15", date: "Jun 19, 2026" },

      { region: "Lebanon", headline: "Hezbollah kills four Israeli soldiers, including a tank battalion commander",
        summary: "In one of its deadliest attacks of the war, Hezbollah killed four IDF soldiers in south Lebanon — fueling the escalation that derailed the Geneva talks and underscoring how unresolved the southern front remains despite the MoU.",
        source: "CBS News", url: "https://www.cbsnews.com/live-updates/iran-us-war-talks-suspended-trump-mou-israel-lebanon-hezbollah-fighting/", date: "Jun 19, 2026" },

      { region: "Lebanon", headline: "The withdrawal dispute that is threatening the whole deal",
        summary: "Iran's FM Araghchi says continued Israeli occupation of south Lebanon would violate the MoU, while a US official counters that the deal does NOT require an Israeli withdrawal and Netanyahu says troops will stay in a southern 'security zone' as long as necessary — the core sticking point.",
        source: "PBS NewsHour / AP", url: "https://www.pbs.org/newshour/world/iran-says-the-deal-to-end-the-war-with-the-u-s-requires-israel-to-withdraw-from-lebanon", date: "Jun 18, 2026" },

      { region: "Lebanon", headline: "Beirut presses for a fifth round of talks on June 22",
        summary: "Presidents Aoun and PM Salam are preparing for a fifth round of US-mediated Lebanon–Israel talks beginning June 22, calling the US–Iran MoU 'a positive factor.' Lebanon's demands: a permanent ceasefire, Israeli withdrawal to the international border, army deployment, prisoner returns, and reconstruction.",
        source: "Naharnet", url: "https://www.naharnet.com/stories/320722-aoun-and-salam-discuss-preparations-for-new-round-of-israel-talks", date: "Jun 18, 2026" },

      { region: "Lebanon", headline: "Displaced residents return to a ruined south amid hope and grief",
        summary: "As the war winds down after the MoU, residents began returning to devastated southern villages just a week after fresh evacuation warnings — surveying flattened neighborhoods around Tyre and Qlailieh, while Paris urged Washington to pressure Israel to halt the strikes.",
        source: "PBS NewsHour / AP", url: "https://www.pbs.org/newshour/world/residents-return-to-war-ravaged-southern-lebanon-with-hope-and-sorrow-after-the-u-s-iran-deal", date: "Jun 18, 2026" },

      { region: "Iran", headline: "US–Iran Geneva signing postponed; MoU signed electronically days earlier",
        summary: "The Geneva ceremony to launch 60 days of technical talks was postponed/suspended — officials told AP that Iran paused over the intensifying Israeli strikes on Lebanon — though the MoU itself was already signed electronically on June 17–18 (Trump and Pezeshkian), with Khamenei giving qualified approval.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/17/iran-confirms-that-mou-has-been-signed-electronically-by-both-sides", date: "Jun 19, 2026" },

      { region: "Gulf", headline: "Strait of Hormuz reopening drives oil lower, then choppy on Lebanon",
        summary: "As the framework took shape and Iran agreed to reopen Hormuz, oil tumbled sharply (Brent toward $80 from war-time highs), but renewed Israeli strikes on Lebanon pushed crude back up several percent on fears the truce won't hold. Gulf producers had cut output by over 11M bpd at the war's peak.",
        source: "CNBC", url: "https://www.cnbc.com/2026/05/29/oil-prices-iran-ceasefire-us-trump-strait-hormuz-energy-costs.html", date: "Jun 18, 2026" },

      { region: "Syria", headline: "Syria's Sharaa says Israel normalization failed 'at the last minute'",
        summary: "Syrian President Ahmed al-Sharaa said his government tried to normalize ties with Israel 'without success,' claiming Israel backed out late — as the US repealed Caesar Act sanctions and the UN delisting cements support for Syria's transition.",
        source: "Middle East Eye", url: "https://www.middleeasteye.net/news/meeting-message-syrias-sharaa-eyes-boost-against-israel-sdf-and-sanctions-us-visit", date: "Jun 2026" }
    ],

    us: [
      { headline: "Geneva talks postponed — Trump's biggest foreign-policy gambit stalls on day one",
        summary: "The June 19 Geneva launch of US–Iran final-deal talks was postponed amid the Lebanon escalation, with VP Vance's trip scrapped. The administration says the MoU still holds and consultations continue through mediators.",
        source: "CBS News", url: "https://www.cbsnews.com/live-updates/iran-war-trump-us-deal-strait-of-hormuz/", date: "Jun 19, 2026" },

      { headline: "Warsh chairs his first FOMC and turns the Fed hawkish",
        summary: "New Chair Kevin Warsh — confirmed 54–45 in May amid Fed-independence concerns — chaired the June 16–17 meeting, holding rates but delivering a hawkish dot plot, even as Trump openly pushes for cuts.",
        source: "CNBC", url: "https://www.cnbc.com/2026/06/15/trump-warsh-fed-reshape.html", date: "Jun 17, 2026" },

      { headline: "Supreme Court enters its final week with blockbuster rulings pending",
        summary: "With the term ending around June 30 and ~22 cases left, the Court must still rule on birthright citizenship, transgender-athlete bans, and the president's power to fire independent-agency members — having already struck down Trump's sweeping tariffs and weakened the Voting Rights Act.",
        source: "NPR", url: "https://www.npr.org/2026/06/09/nx-s1-5847967/supreme-court-major-cases-left-2026", date: "Jun 2026" },

      { headline: "Congress clears a $70B immigration-enforcement bill",
        summary: "The House (214–212) and Senate (52–47) approved a $70B package funding ICE and Border Patrol through the end of Trump's term, ending a months-long impasse; a fight over a 'settlement fund' for allies was a flashpoint.",
        source: "NPR", url: "https://www.npr.org/2026/06/05/nx-s1-5847589/senate-passes-immigration-enforcement-bill-without-limits-on-trump-settlement-fund", date: "Jun 2026" },

      { headline: "Tallying the cost of the Iran war for the US economy",
        summary: "NPR assessed the war's price tag — military spending, the oil-price spike from the Hormuz blockade, and trade disruption — as the ceasefire framework takes hold and markets recalibrate.",
        source: "NPR", url: "https://www.npr.org/2026/06/17/nx-s1-5860739/iran-war-cost-oil-military-trade", date: "Jun 17, 2026" }
    ]
  },

  /* ---------- SOURCES (footer credits) ---------- */
  sources: [
    { name: "Trading Economics", url: "https://tradingeconomics.com/" },
    { name: "stockanalysis.com", url: "https://stockanalysis.com/" },
    { name: "CNBC",              url: "https://www.cnbc.com/" },
    { name: "Al Jazeera",        url: "https://www.aljazeera.com/" },
    { name: "NPR",               url: "https://www.npr.org/" },
    { name: "CBS News",          url: "https://www.cbsnews.com/" },
    { name: "Wamda",             url: "https://www.wamda.com/" },
    { name: "Crunchbase News",   url: "https://news.crunchbase.com/" }
  ]
};

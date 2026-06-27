/* ============================================================
   DAILY BRIEFING — DATA FILE
   ------------------------------------------------------------
   This file holds everything your dashboard displays.
   It is regenerated each time you run  /update-news  in Claude Code.
   You normally never edit this by hand.

   Last generated: June 27, 2026
   ============================================================ */

window.DASHBOARD_DATA = {

  dateLabel: "Saturday, June 27, 2026",
  lastUpdated: "June 27, 2026",
  updatedAt: "June 27, 2026, 9:25 PM (Beirut)",
  asOfNote: "Weekend — markets closed. US stocks & indices: Fri Jun 26 close (two sessions since the last edition — a hot PCE on Thu, then a 5th straight Nasdaq loss Fri). Europe & Asia: Fri Jun 26 (the Nikkei plunged −4.2% Friday). Gulf & Egypt: Thu Jun 25 close (the Gulf weekend is Fri–Sat). Commodities, FX & rates: Fri Jun 26 settle (closed for the weekend). Crypto: live Sat Jun 27. The index chart now extends through Jun 26.",
  drivingStory: "It was a hot-inflation week that markets mostly shrugged off: Thursday's PCE hit a 3-year high (4.1% headline) but stocks held, then Friday the Micron-driven AI bounce faded — the Nasdaq logged a 5th straight loss as chips fell on a report that OpenAI may delay its IPO to 2027 (on the week: Nasdaq −4.6%, but the Dow +0.6% on a defensive rotation). Oil kept sliding to a ~4-month low (Brent ~$72) as Strait of Hormuz traffic recovered, and crypto slid (Bitcoin ~$60k). The weekend's big headline is geopolitical: the US brokered an Israel–Lebanon framework deal in Washington — Rubio called it 'the beginning of the beginning' — though the core withdrawal-vs-disarmament dispute is unresolved and Hezbollah rejects it.",

  /* Short labels for the most recent trading sessions (oldest → newest), used as the index-chart x-axis & hover dates. NYSE calendar; ends at the latest US close (Fri Jun 26). */
  histDates: ["May 19","May 20","May 21","May 22","May 26","May 27","May 28","May 29","Jun 1","Jun 2","Jun 3","Jun 4","Jun 5","Jun 8","Jun 9","Jun 10","Jun 11","Jun 12","Jun 15","Jun 16","Jun 17","Jun 18","Jun 22","Jun 23","Jun 24","Jun 25","Jun 26"],

  /* ---------- MARKETS ---------- */
  markets: {

    indices: [
      { name: "S&P 500",          level: 7354.02,  day: "-0.05", month: "-2.2", ytd: "+7.4", note: "Fri Jun 26 close; a hot PCE was shrugged off, but the Nasdaq fell a 5th straight session.", hist: [7354,7433,7446,7473,7519,7520,7564,7580,7600,7610,7554,7584,7384,7406,7387,7267,7394,7431,7554,7511,7420,7501,7473,7365,7358,7357,7354] },
      { name: "Nasdaq Composite", level: 25297.62, day: "-0.24", month: "-5.1", ytd: "+8.8", hist: [25871,26270,26293,26344,26656,26675,26917,26973,27087,27094,26854,26831,25709,25930,25679,25170,25810,25889,26684,26376,26022,26518,26167,25587,25477,25359,25298] },
      { name: "Nasdaq 100",       level: 29118.24, day: "-1.09", month: "-3.0", ytd: "+15.3", note: "Fri Jun 26 close; chip weakness led the week's slide." },
      { name: "Dow Jones",        level: 51876.11, day: "-0.09", month: "+2.8", ytd: "+8.0", hist: [49364,50009,50286,50580,50462,50644,50669,51032,51079,51308,50687,51562,50867,50786,50872,49919,50849,51202,51671,52000,51493,51565,51713,51667,51849,51921,51876] },
      { name: "Russell 2000",     level: 3010.08,  day: "+0.07", month: "+3.0", ytd: "+21.3", note: "Crossed 3,000 for the first time (Jun 22).", hist: [2747,2817,2843,2869,2921,2920,2937,2919,2906,2932,2894,2935,2834,2855,2867,2835,2921,2944,2965,2939,2918,2980,3004,2975,2987,3008,3010] },
      { name: "STOXX Europe 600", level: 635.88,   day: "-0.68", month: "+1.2", ytd: "+7.8", note: "Fri Jun 26 close.", hist: [621,625,632,628,628,625,626,621,625,621,624,623,622,619,619,618,622,633,634,636,637,639,639,635,635,640,636] },
      { name: "FTSE 100",         level: 10508.02, day: "-0.21", month: "0.0", ytd: "+5.8", note: "Fri Jun 26 close.", hist: [10432,10443,10466,10491,10505,10426,10409,10339,10374,10332,10360,10368,10373,10227,10255,10304,10472,10431,10494,10478,10504,10406,10438,10429,10429,10530,10508] },
      { name: "Nikkei 225",       level: 69360.88, day: "-4.15", month: "+6.7", ytd: "+37.8", note: "Fri Jun 26 close; plunged −4.2% Friday in the AI/chip rout (had hit ~72,400 Thu). Some sites misreport YTD ~+80% (a base-date error) — true YTD ~+38%.", hist: [64996,64999,64693,66330,66310,66934,66734,68402,67471,66588,63792,64025,65417,64179,64217,66020,68463,69318,68755,69980,69902,71053,72354,69582,69384,72366,69361] },
      { name: "Hang Seng",        level: 22671.86, day: "-1.76", month: "-10.5", ytd: "-11.6", note: "Fri Jun 26 close — a 1-year low.", hist: [25651,25387,25606,25599,25328,25006,25182,25398,26038,25633,25253,24962,24657,24566,24408,24249,24718,24843,24494,24312,24312,23925,23769,23336,23090,23077,22672] }
    ],

    rates: [
      { name: "US 10-Year Treasury", value: "4.37%",      change: "Fell to a ~7-week low; an in-line PCE trimmed the rate-hike premium" },
      { name: "US 2-Year Treasury",  value: "4.10%",      change: "Led the move down as 2026-hike odds eased slightly" },
      { name: "Fed Funds (target)",  value: "3.50–3.75%", change: "Held Jun 17; markets still price ~66% odds of a Sept HIKE" }
    ],

    fx: [
      { name: "EUR/USD",            value: "1.1381", day: "+0.12" },
      { name: "USD/JPY",            value: "161.67", day: "-0.04" },
      { name: "GBP/USD",            value: "1.3222", day: "+0.23" },
      { name: "Dollar Index (DXY)", value: "101.36", day: "-0.07" }
    ],

    crypto: [
      { name: "Bitcoin",  price: 60440, day: "+0.7", month: "-17.8", year: "-43.7" },
      { name: "Ethereum", price: 1590,  day: "+0.9", month: "-20.8", year: "-34.8" }
    ]
  },

  /* ---------- REGIONAL MARKETS (GCC & Egypt) ---------- */
  /* Latest close = Thu Jun 25 (the Gulf weekend is Fri–Sat; markets reopen Sunday) */
  regionalMarkets: [
    { name: "Saudi · TASI",        level: 10933.23, day: "-0.67", month: "-1.31", ytd: "+4.22", note: "Thu Jun 25 close" },
    { name: "Abu Dhabi · ADX",     level: 10012.00, day: "+0.19", month: "+2.38", ytd: "+0.19", note: "Thu Jun 25 close" },
    { name: "Dubai · DFM",         level: 6024.59,  day: "-1.43", month: "-4.32", ytd: "-0.35", note: "Thu Jun 25 close" },
    { name: "Qatar · QE",          level: 10281.81, day: "-0.38", month: "-2.59", ytd: "-4.47", note: "Thu Jun 25 close" },
    { name: "Kuwait · All-Share",  level: 8687.40,  day: "-0.27", month: "-0.84", ytd: "-2.47", note: "Thu Jun 25 close" },
    { name: "Bahrain · All-Share", level: 2041.60,  day: "+0.26", month: "+3.16", ytd: "-1.21", note: "Last quote Jun 24" },
    { name: "Oman · MSX 30",       level: 7316.65,  day: "-0.43", month: "-5.68", ytd: "+24.71", note: "Thu Jun 25 close; +25% YTD (the ~+62% headline is the 1-year figure)" },
    { name: "Egypt · EGX 30",      level: 51443.07, day: "-0.52", month: "-2.67", ytd: "+22.98", note: "Thu Jun 25 close; +23% YTD (the ~+55% headline is the 1-year figure)" }
  ],

  /* ---------- WEEK AHEAD (scheduled catalysts) ---------- */
  weekAhead: [
    { date: "Mon Jun 29", category: "Geopolitics", event: "US Supreme Court opinion day", detail: "Marquee rulings still pending — birthright citizenship and whether the President can fire Fed Governor Lisa Cook (Trump v. Cook)." },
    { date: "Mon Jun 29", category: "Central Bank", event: "ECB Sintra Forum opens (through Jul 1)", detail: "Lagarde hosts global central bankers; watch for rate-path signals." },
    { date: "Tue Jun 30", category: "Econ", event: "US consumer confidence + Chicago PMI", detail: "Conference Board confidence and a regional manufacturing gauge for June." },
    { date: "Tue Jun 30", category: "Earnings", event: "Nike Q4 (after close)", detail: "A low bar — consensus ~$0.12 EPS on ~$10.9B revenue; tariff drag in focus." },
    { date: "Tue Jun 30", category: "Earnings", event: "Constellation Brands FQ1 (after close)", detail: "Beer depletions (Modelo) vs soft wine & spirits; call Jul 1." },
    { date: "Tue Jun 30", category: "IPO", event: "Lime (Nasdaq: LIME) IPO pricing", detail: "Uber-backed e-scooter operator; $24–26/share for up to a ~$1.66B valuation." },
    { date: "Wed Jul 1", category: "Econ", event: "ISM Manufacturing + JOLTS + ADP payrolls", detail: "A heavy data day — factory activity, job openings and private payrolls ahead of Thursday's jobs report." },
    { date: "Wed Jul 1", category: "Earnings", event: "General Mills Q4 (before open)", detail: "Fiscal Q4 + the FY27 guide; consensus ~$0.82 EPS." },
    { date: "Thu Jul 2", category: "Econ", event: "June jobs report (nonfarm payrolls)", detail: "The week's marquee print — pulled forward to Thursday (consensus ~172K) ahead of the holiday." },
    { date: "Thu Jul 3", category: "Econ", event: "ISM Services + factory orders; US early close", detail: "Services and orders data; the stock and bond markets close early (2pm ET) ahead of July 4." },
    { date: "Fri Jul 4", category: "Geopolitics", event: "US markets closed — Independence Day", detail: "Equities and bonds shut for the holiday." },
    { date: "Sun Jul 5", category: "Geopolitics", event: "OPEC+ ministerial (output for August)", detail: "The group sets August quotas as oil sits at ~4-month lows (date to be reconfirmed)." },
    { date: "Tue Jul 8", category: "Geopolitics", event: "NATO summit, Ankara (Jul 7–8)", detail: "The 36th NATO summit; defense spending and Ukraine on the agenda." }
  ],

  /* ---------- BIG STOCKS (largest by market cap) ---------- */
  /* Price & 1-day = Fri Jun 26 close · 1M / 1Y = trailing price return · ranking: Tesla edged back above Meta */
  stocks: [
    { ticker: "NVDA",  name: "Nvidia",              price: 192.53, day: "-1.64", month: "-10.4", year: "+24.8",  mktcap: "$4.66T", hist: [220.6,223.5,219.5,215.3,214.9,212.6,214.3,211.1,224.4,222.8,214.8,218.7,205.1,208.6,208.2,200.4,204.9,205.2,212.5,207.4,204.65,210.69,208.65,200.04,199.00,195.74,192.53] },
    { ticker: "AAPL",  name: "Apple",               price: 283.78, day: "+3.14", month: "-8.0",  year: "+40.8",  mktcap: "$4.17T", hist: [299,302.3,305,308.8,308.3,310.9,312.5,312.1,306.3,315.2,310.3,311.2,307.3,301.5,290.6,291.6,295.6,291.1,296.4,299.2,295.95,298.01,297.01,294.30,293.08,275.15,283.78] },
    { ticker: "GOOGL", name: "Alphabet",            price: 337.39, day: "-1.84", month: "-13.2", year: "+97.7",  mktcap: "$4.12T", hist: [387.7,388.9,387.7,383,388.9,388.8,390.1,380.3,376.4,361.9,359,372.2,368.5,363.3,364.3,356.4,357.8,359.7,369.4,373.3,363.79,368.03,349.68,346.13,345.29,343.71,337.39] },
    { ticker: "MSFT",  name: "Microsoft",           price: 372.97, day: "+5.71", month: "-10.4", year: "-24.2",  mktcap: "$2.77T", hist: [417.4,421.1,419.1,418.6,416,412.7,427,450.2,460.5,441.3,427.3,428.1,416.7,411.7,403.4,397.4,390.3,390.7,399.8,393.8,378.91,379.40,367.34,373.94,365.46,352.83,372.97] },
    { ticker: "AMZN",  name: "Amazon",              price: 232.69, day: "+2.50", month: "-12.3", year: "+9.8",   mktcap: "$2.50T", hist: [259.3,265,268.5,266.3,265.3,271.9,274,270.6,261.3,256.5,250,253.8,246,245.2,244.2,238,241.5,238.6,246,246,237.5,244.39,232.79,234.11,234.27,227.01,232.69] },
    { ticker: "SPCX",  name: "SpaceX",              price: 153.23, day: "+0.15", month: "n/a",   year: "n/a",    mktcap: "$2.02T", hist: [192.5,201.8,191.82,174.90,154.60,156.11,154.54,153.00,153.23] },
    { ticker: "AVGO",  name: "Broadcom",            price: 365.02, day: "-3.67", month: "-13.3", year: "+37.9",  mktcap: "$1.74T", hist: [411.1,417.8,414.6,414.1,422,421.9,426.6,446.8,460,481.6,479.2,418.9,385.7,396.6,392.2,372.1,385.6,382.1,393.9,376.7,392.9,411.35,392.13,380.15,382.07,378.91,365.02] },
    { ticker: "TSLA",  name: "Tesla",               price: 379.71, day: "+1.22", month: "-12.4", year: "+15.9",  mktcap: "$1.43T", hist: [404.1,417.3,417.9,426,433.6,440.4,442.1,435.8,415.9,423.7,423.7,418.5,391,409,396.7,381.6,399.2,406.4,411.2,404.7,396.38,400.49,405.05,381.61,375.53,375.12,379.71] },
    { ticker: "META",  name: "Meta Platforms",      price: 550.25, day: "+1.36", month: "-10.1", year: "-22.4",  mktcap: "$1.40T", hist: [602.6,605.1,607.4,610.3,612.3,635.3,635.3,632.5,600.5,597.6,623,627.6,593,585.4,584.6,571,568.4,567,593.5,600.2,567.58,577.22,563.85,562.20,557.67,542.87,550.25] },
    { ticker: "BRK.B", name: "Berkshire Hathaway",  price: 498.66, day: "+2.22", month: "+3.1",  year: "+2.6",   mktcap: "$1.07T", hist: [480.5,480.9,480,486.4,483.6,479.9,477.4,474.5,470.3,471.5,475.4,478.6,488.1,487,487.8,483.7,485.8,489.3,495.5,495,491.28,489.46,488.69,492.81,494.81,487.81,498.66] },
    { ticker: "JPM",   name: "JPMorgan Chase",      price: 329.05, day: "-1.81", month: "+7.3",  year: "+15.8",  mktcap: "$882B", hist: [295.7,302,303,306.4,306.7,299.3,296.7,299.3,296.6,301,300.9,310.9,312.4,311.1,312.7,309.1,313.5,320.7,319.4,331.1,333.46,325.22,331.48,334.14,333.45,335.12,329.05] }
  ],

  /* ---------- COMMODITIES ---------- */
  /* Fri Jun 26 settle (closed for the weekend) — oil at ~4-month lows as the US–Iran de-escalation reopens Hormuz */
  commodities: [
    { name: "WTI Crude",   price: 69.23,   unit: "$/bbl",     day: "-3.74", month: "-21.9", ytd: "+12.7" },
    { name: "Brent Crude", price: 71.99,   unit: "$/bbl",     day: "-4.34", month: "-22.0", ytd: "+17.8" },
    { name: "Natural Gas", price: 3.28,    unit: "$/MMBtu",   day: "-0.49", month: "+6.0",  ytd: "-22.9" },
    { name: "Gold",        price: 4087.01, unit: "$/oz",      day: "+1.49", month: "-8.3",  ytd: "-3.0" },
    { name: "Silver",      price: 58.78,   unit: "$/oz",      day: "+1.61", month: "-20.9", ytd: "-14.1" },
    { name: "Copper",      price: 6.14,    unit: "$/lb",      day: "+1.15", month: "-2.6",  ytd: "+8.1" },
    { name: "Wheat",       price: 578.25,  unit: "¢/bushel",  day: "-2.16", month: "-7.1",  ytd: "+10.0" }
  ],

  /* ---------- FINANCIAL NEWS ---------- */
  financialNews: [
    { category: "Macro", headline: "May PCE runs hottest in 3 years — headline 4.1%, core 3.4% — but markets shrug",
      summary: "The Fed's preferred gauge rose to 4.1% y/y (highest since spring 2023) with core at 3.4% (a touch above the 3.3% forecast); real spending and incomes both rose 0.3%, so stocks held and Treasury yields slipped rather than repricing a hawkish shock.",
      source: "CBS News", url: "https://www.cbsnews.com/news/pce-report-report-may-2026-federal-reserve-inflation/", date: "Jun 25, 2026" },

    { category: "Macro", headline: "Final Q1 GDP revised up to 2.1%; jobless claims fall",
      summary: "The third estimate of Q1 2026 GDP was lifted to a 2.1% annualized pace (from 1.6%) and weekly jobless claims fell, signaling the economy held up even as the durable-goods print was soft on payback from a prior spike.",
      source: "The Globe and Mail", url: "https://www.theglobeandmail.com/business/article-us-pce-inflation-measure-tops-4-in-may-consumer-spending-strong/", date: "Jun 25, 2026" },

    { category: "Macro", headline: "Friday: the AI bounce fades — Nasdaq logs a 5th straight loss",
      summary: "The S&P slipped 0.05% to 7,354 and the Nasdaq fell 0.24% to 25,298 (its 5th straight decline) as chip stocks rolled over on a report that OpenAI may delay its IPO to 2027; on the week the Nasdaq lost 4.6% while the Dow rose 0.6% on a defensive rotation.",
      source: "CNBC", url: "https://www.cnbc.com/amp/2026/06/25/stock-market-today-live-updates.html", date: "Jun 26, 2026" },

    { category: "Macro", headline: "Oil slides to a ~4-month low as Hormuz traffic recovers",
      summary: "WTI fell to ~$69 and Brent to ~$72 — the lowest since late February and a >10% weekly drop — as tankers openly transited the Strait of Hormuz after the US–Iran deal, restoring Gulf exports toward ~75% of pre-war levels (Saudi resumed loading at Ras Tanura).",
      source: "Al Jazeera", url: "https://www.aljazeera.com/economy/2026/6/17/oil-prices-continue-slide-amid-hopes-for-peace-opening-of-strait-of-hormuz", date: "Jun 26, 2026" },

    { category: "Macro", headline: "Dollar holds near a 13-month high; 10-year yield eases to ~4.37%",
      summary: "The dollar index sat near a 13-month high (~101.4) on hawkish-Fed bets and the equity rout, while the 10-year Treasury yield fell to a ~7-week low of ~4.37% and the 2-year to ~4.10% after the in-line PCE.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/25/dollar-rides-high-on-fed-rate-hike-bets.html", date: "Jun 25, 2026" },

    { category: "Macro", headline: "Hawkish Fed: Warsh flags 'work to do' on prices; ~66% odds of a Sept hike",
      summary: "New Chair Kevin Warsh said the committee has 'work to do on the price stability front,' and with 9 of 18 officials projecting a 2026 hike (median year-end 3.8%), CME FedWatch shows ~66% odds of a September hike and ~32% for July.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/25/pce-inflation-report-may-2026-.html", date: "Jun 25, 2026" },

    { category: "Earnings", headline: "Micron's blowout draws aggressive target hikes",
      summary: "After fiscal Q3 revenue of $41.46B and a ~$50B Q4 guide on sold-out HBM, analysts piled on: Deutsche Bank lifted its target to $1,500 (from $1,000), UBS to $1,625 and Citi to $1,200 — a rare bright spot in a soft week for chips.",
      source: "Barchart", url: "https://www.barchart.com/story/news/2330980/why-1-veteran-analyst-doubled-her-micron-stock-price-target-for-2026", date: "Jun 26, 2026" },

    { category: "Earnings", headline: "Nike Q4 preview (Jun 30) — a low bar with tariff drag",
      summary: "Consensus is just $0.12 EPS on ~$10.85B revenue (a ~2% revenue decline; EPS down ~21% y/y) after estimates were cut ~45% in three months, with ~250bps of North America tariff drag — though a tariff-refund gain could surprise.",
      source: "AlphaStreet", url: "https://news.alphastreet.com/nike-q4-2026-earnings-preview-june-30-street-expects-0-12-eps/", date: "Jun 26, 2026" },

    { category: "M&A", headline: "Clearwater Analytics taken private for $8.4B",
      summary: "A Permira- and Warburg Pincus-led group (with Francisco Partners and Temasek) closed its $8.4B take-private of Clearwater at $24.55/share (~47% premium), backed by $3.5B of Goldman-led direct lending; the stock has delisted.",
      source: "Permira", url: "https://www.permira.com/news-and-insights/announcements/clearwater-analytics-completes-84-billion-take-private-acquisition-by-permira-and-warburg-pincus", date: "Jun 25, 2026" },

    { category: "M&A", headline: "Persistent Systems launches a takeover of Nagarro",
      summary: "India's Persistent Systems unveiled an all-cash voluntary public takeover of Nagarro at EUR 81.00/share (a ~140% premium) to form the 'Persistent-Nagarro Group,' and signed a binding deal to buy a ~21% stake at the offer price.",
      source: "ScanX", url: "https://scanx.trade/stock-market-news/companies/persistent-systems-acquires-21-stake-in-nagarro-se-launches-takeover-offer/44054796", date: "Jun 25, 2026" },

    { category: "IPO", headline: "Doncasters soars 33% in its NYSE debut",
      summary: "The aerospace/IGT superalloy maker priced an upsized IPO at $33 (above range) for $919M, then traded up to $44 — a 33% first-day pop — riding the military-spending and aerospace new-issue wave.",
      source: "IPOScoop", url: "https://www.iposcoop.com/the-ipo-buzz-doncasters-dpc-holdings-dpc-upsizes-ipo-prices-it-at-33-1-above-range/", date: "Jun 25, 2026" },

    { category: "IPO", headline: "SpaceX round-trips its debut as OpenAI reportedly eyes a 2027 IPO",
      summary: "SPCX has given back nearly all of its post-IPO gains, trading ~$153 (vs a $225 intraday peak on Jun 17); the volatility reportedly has OpenAI leaning toward pushing its own IPO to 2027 at a ~$1T target — a report that pressured chips Friday.",
      source: "Yahoo Finance", url: "https://finance.yahoo.com/markets/stocks/articles/openai-delay-ipo-sam-altman-103507298.html", date: "Jun 26, 2026" },

    { category: "IPO", headline: "A busy pre-July-4 IPO window: Lime, ITG and Sinda",
      summary: "Uber-backed Lime set terms for a Nasdaq listing (~$1.66B target, pricing the week of Jun 29), while ITG (~$2.5B market cap, $19–22) and Sinda crowd the calendar — the busiest new-issue stretch ahead of the holiday.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/22/uber-backed-lime-seeks-up-to-1point66-billion-valuation-in-us-ipo.html", date: "Jun 26, 2026" },

    { category: "Capital Markets", headline: "7-year Treasury note auction clears sharply lower at 3.79%",
      summary: "The $44B 7-year note auctioned at a high yield of 3.790% (down from 4.018% prior) with a 2.50 bid-to-cover — consistent with the week's flight to safety and falling yields.",
      source: "TreasuryDirect", url: "https://www.treasurydirect.gov/auctions/announcements-data-results/", date: "Jun 25, 2026" },

    { category: "Capital Markets", headline: "2026 high-grade bond supply seen up to $2.25T (+35%)",
      summary: "Mid-year outlooks flag investment-grade issuance forecasts as high as $2.25T (+35% y/y) — supply potentially outstripping demand for the first time since 2022 — driven heavily by hyperscalers funding data-center buildouts.",
      source: "Charles Schwab", url: "https://www.schwab.com/learn/story/corporate-bond-outlook", date: "Jun 2026" },

    { category: "M&A", headline: "Fox to acquire Roku for ~$22B in a landmark connected-TV deal",
      summary: "Roku holders get $160/share ($96 cash + 0.9693 Fox Class A shares), a ~$22B enterprise value and a 34% premium; Fox secured a $12B loan for the cash portion and targets ~$400M of synergies, closing 1H 2027.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/15/fox-to-buy-roku.html", date: "Jun 15, 2026" }
  ],

  /* ---------- VENTURE CAPITAL (GCC-weighted + big global) ---------- */
  ventureCapital: [
    { region: "GCC", headline: "Foodics (Saudi) fully acquires Greece's Norma AI for restaurant AI",
      summary: "Saudi F&B-SaaS unicorn Foodics completed a full buyout of Greek hospitality-AI startup Norma AI (amount undisclosed), converting a 2025 minority stake into full ownership to build agentic restaurant-AI tools — the headline deal in this week's MENA wrap.",
      source: "Arab News", url: "https://www.arabnews.com/node/2648741/business-economy", date: "Jun 27, 2026" },

    { region: "GCC", headline: "Saudi Arabia leads MENA H1 2026 startup funding with $1.34B raised",
      summary: "First-half 2026 data shows Saudi Arabia topping regional startup funding at $1.34B, overtaking the UAE for the period — a marker of the Kingdom's deepening venture ecosystem.",
      source: "Wamda", url: "https://www.wamsaudi.com/news-articles/startup-wrap-saudi-arabia-leads-mena-startup-funding-h1-134bn-raised", date: "Jun 2026" },

    { region: "GCC", headline: "CargoX (UAE) raises a $250M growth round led by BlueFive Capital",
      summary: "Autonomous-logistics player CargoX (led by ex-Talabat CEO Tomaso Rodriguez) raised $250M led by BlueFive Capital to scale autonomous freight — one of the region's largest growth rounds of 2026.",
      source: "Arab News", url: "https://www.arabnews.com/node/2646163/business-economy", date: "Jun 2026" },

    { region: "GCC", headline: "Agenz (Morocco) closes an oversubscribed $5M seed for proptech data",
      summary: "Real-estate data and proptech platform Agenz raised an oversubscribed $5M seed led by Breega, Attijariwafa Ventures and Saviu Ventures to scale its property-valuation and data tools.",
      source: "Arab News", url: "https://www.arabnews.com/node/2648741/business-economy", date: "Jun 27, 2026" },

    { region: "GCC", headline: "Rentify (UAE) raises a $2M seed and launches 'Earn AI'",
      summary: "UAE proptech-fintech Rentify raised a $2M seed (taking total funding to ~$2.5M) and launched its Earn AI automated rental-revenue product with enterprise clients including Gargash Real Estate.",
      source: "Arab News", url: "https://www.arabnews.com/node/2648741/business-economy", date: "Jun 27, 2026" },

    { region: "GCC", headline: "EU-backed €45M Social Entrepreneurship Fund opens for MENA, managed by Anara",
      summary: "The European Commission, Germany's BMZ and KfW launched the €45M equity window of an €80M Social Entrepreneurship Fund for MENA impact startups (with a €35M debt window to follow), with Anara Impact Capital as manager.",
      source: "European Commission", url: "https://north-africa-middle-east-gulf.ec.europa.eu/news/joint-press-release-launch-equity-window-social-entrepreneurship-fund-sef-boost-sustainable-jobs-and-2026-06-02_en", date: "Jun 2026" },

    { region: "GCC", headline: "RoboCare (Tunisia) lands six-figure backing from 216 Capital",
      summary: "Tunisian agricultural-robotics startup RoboCare secured an undisclosed six-figure investment from 216 Capital to fund expansion across Africa and the Middle East.",
      source: "Arab News", url: "https://www.arabnews.com/node/2648741/business-economy", date: "Jun 27, 2026" },

    { region: "GCC", headline: "Oman's Sharakah backs the Zameeli freelance marketplace",
      summary: "Oman's Sharakah provided undisclosed Shariah-compliant growth financing to freelance marketplace Zameeli to fund nationwide expansion — a rarer Oman-ecosystem deal.",
      source: "Arab News", url: "https://www.arabnews.com/node/2647977/business-economy", date: "Jun 2026" },

    { region: "Global", headline: "Baseten raises a $1.5B Series F at a $13B valuation",
      summary: "AI-inference platform Baseten closed a $1.5B Series F at a $13B valuation (its fourth raise in 18 months), led by Altimeter with Conviction, Spark, Sands and Wellington — the single largest venture round of the week.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-marketing-robotics-baseten/", date: "Jun 26, 2026" },

    { region: "Global", headline: "AppsFlyer raises a $1B Series E at a $2.7B valuation",
      summary: "Mobile-marketing and data-analytics firm AppsFlyer raised a $1B Series E at a $2.7B valuation, with backing from Unity, Meta, Moloco and Google.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-marketing-robotics-baseten/", date: "Jun 26, 2026" },

    { region: "Global", headline: "Groq raises $650M for AI-inference chips",
      summary: "AI-inference chip company Groq raised $650M in growth funding led by Infinitum and Disruptive, roughly six months after an Nvidia-related acquihire transaction.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-marketing-robotics-baseten/", date: "Jun 26, 2026" },

    { region: "Global", headline: "Ollin Biosciences raises a $330M Series B",
      summary: "Austin-based ophthalmic-therapeutics startup Ollin Biosciences closed a $330M Series B led by TCG Crossover and Arch Venture Partners — the week's largest non-AI / biotech round.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-marketing-robotics-baseten/", date: "Jun 26, 2026" }
  ],

  /* ---------- LEBANON ECONOMY ---------- */
  lebanonEconomy: [
    { label: "Lira / USD",         value: "~89,500",     sub: "89,573 on Jun 26; holding in the ~89,600 band (parallel near official)" },
    { label: "Inflation (y/y)",    value: "~19%",        sub: "19.04% in May 2026 — eased from 20.02% in April" },
    { label: "BdL FX Reserves",    value: "~$11.63B",    sub: "Mid-June 2026 (+$185M in early June; excludes gold)" },
    { label: "Eurobonds",          value: "~26¢",        sub: "BLOM Bond Index 26.33 (week of Jun 18); in default since 2020" },
    { label: "IMF Program",        value: "Stalled",     sub: "Early-stage technical talks; no agreed program yet" },
    { label: "Reconstruction",     value: "~$11B",       sub: "World Bank estimate (total war cost ~$14B)" },
    { label: "GDP Growth",         value: "+3.5% (2025)", sub: "World Bank; ~+4.0% forecast for 2026 (reform-contingent)" },
    { label: "Bank-System Losses", value: "~$80B",       sub: "The 'gap' (~$72B in losses to allocate); Gap Law still unresolved" }
  ],

  /* ---------- GEOPOLITICAL MAP (today's hotspots) ---------- */
  mapPoints: [
    { place: "Washington",        lat: 38.90, lng: -77.04, weight: 3, region: "US",          label: "Brokered the Jun 26 Israel–Lebanon framework deal and the US–Iran roadmap; Rubio: 'the beginning of the beginning'" },
    { place: "Beirut",            lat: 33.89, lng: 35.50,  weight: 3, region: "Lebanon",     label: "Lebanon signs the framework; Hezbollah's Qassem demands an unconditional Israeli withdrawal" },
    { place: "South Lebanon",     lat: 33.38, lng: 35.48,  weight: 3, region: "Lebanon",     label: "Ceasefire fragile — strikes continued during the talks (3 killed Jun 25); the toll is now 4,230" },
    { place: "Tehran",            lat: 35.69, lng: 51.39,  weight: 3, region: "Iran",        label: "60-day MoU holds, but the IAEA inspector-access dispute is unresolved" },
    { place: "Strait of Hormuz",  lat: 26.57, lng: 56.25,  weight: 3, region: "Gulf",        label: "Reopened toll-free; ~67M barrels of stored Iranian oil freed — crude at ~4-month lows" },
    { place: "Gulf of Oman",      lat: 24.50, lng: 58.50,  weight: 2, region: "Gulf",        label: "Tankers that had stored sanctioned crude now cleared to deliver to buyers" },
    { place: "Doha",              lat: 25.29, lng: 51.53,  weight: 2, region: "Gulf",        label: "Qatar's mediation channel stays active across the Iran and Lebanon files" },
    { place: "Riyadh",            lat: 24.71, lng: 46.68,  weight: 2, region: "Gulf",        label: "OPEC+ anchor — a ~Jul 5 meeting sets August output as Saudi resumes Ras Tanura loading" },
    { place: "Damascus",          lat: 33.51, lng: 36.29,  weight: 1, region: "Syria",       label: "Reported 'advanced' US-brokered talks to revive the 1974 Israel–Syria disengagement" },
    { place: "Gaza",              lat: 31.50, lng: 34.47,  weight: 1, region: "Israel-Gaza", label: "The Oct-2025 truce holds unevenly; the UN reports rising violence (~936 killed since)" }
  ],
  mapArcs: [
    { from: [38.90, -77.04], to: [33.89, 35.50] },
    { from: [38.90, -77.04], to: [35.69, 51.39] },
    { from: [35.69, 51.39],  to: [26.57, 56.25] },
    { from: [33.89, 35.50],  to: [33.38, 35.48] },
    { from: [25.29, 51.53],  to: [35.69, 51.39] }
  ],

  /* ---------- POLITICS ---------- */
  politics: {

    middleEast: [
      { region: "Lebanon", headline: "US brokers an Israel–Lebanon framework deal in Washington; Rubio calls it 'the beginning of the beginning'",
        summary: "The 5th round ended June 26 with Secretary Rubio announcing a framework to 'restore Lebanon's sovereignty, disarm Hezbollah and dismantle its terrorist infrastructure' — including 'pilot zones' where the Lebanese Army retakes two areas inside Israel's buffer zone, a US-facilitated coordination group, $100M in US humanitarian aid and $30M to reimburse the LAF. Full terms are undisclosed and it's billed as a 'first step.'",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/26/us-announces-framework-agreement-between-israel-and-lebanon", date: "Jun 26, 2026" },

      { region: "Lebanon", headline: "But the core deadlock persists — Netanyahu vs Hezbollah on withdrawal vs disarmament",
        summary: "Netanyahu said Israel will hold the buffer zone 'until Hezbollah disarms and as long as there is a threat,' while Hezbollah chief Qassem insisted 'Israel must leave unconditionally' and an MP accused Beirut of 'unilateral, gratuitous concessions.' Hezbollah continues to reject the talks outright.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/26/hezbollah-demands-israel-leave-lebanon-unconditionally-as-us-talks-extend", date: "Jun 26, 2026" },

      { region: "Lebanon", headline: "Ceasefire fragile — strikes continue during the talks; toll rises to 4,230 dead",
        summary: "Israel killed three people June 25 in a strike on a car in Nabatieh Governorate as forces kept operating in front-line villages. Lebanon's Health Ministry put the cumulative toll since March 2 at 4,230 killed and 12,179 wounded — up from ~4,057 on June 20.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/25/israel-kills-three-in-lebanon-as-rubio-praises-progress-in-washington-talks", date: "Jun 25, 2026" },

      { region: "Lebanon", headline: "Reconstruction ~$11B; IMF still early-stage; inflation easing to ~19%",
        summary: "Lebanon's recovery needs sit near $11B (total war cost ~$14B) and IMF talks remain at the technical stage with no agreed program, even as inflation cooled to 19.04% in May (from 20.02% in April) and BdL reserves edged up to ~$11.63B.",
        source: "World Bank", url: "https://www.worldbank.org/en/news/press-release/2026/01/22/lebanon-economic-rebound-marks-cautious-recovery-amidst-progress-on-reforms", date: "Jun 2026" },

      { region: "Iran", headline: "IAEA–Iran inspector-access dispute deepens under the 60-day roadmap",
        summary: "IAEA chief Grossi said the MoU puts the nuclear file under agency supervision — 'to supervise, we need to inspect' — but Iran's deputy FM countered that access to strike-damaged sites will be resolved 'solely within the framework of a final agreement,' with no new visits planned before the Aug 21 deadline.",
        source: "CNBC", url: "https://www.cnbc.com/2026/06/26/us-iran-peace-deal-nuclear-access.html", date: "Jun 26, 2026" },

      { region: "Gulf", headline: "Oil slides to a ~4-month low as Hormuz traffic nears pre-war levels",
        summary: "Brent fell to ~$72 and WTI toward $69 — the lowest since Feb 27 and a >10% weekly drop — as tankers openly transited the Strait of Hormuz, restoring Gulf exports to ~75% of pre-war levels; Saudi resumed loading at Ras Tanura and Iraq is seeking a higher OPEC quota.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/economy/2026/6/17/oil-prices-continue-slide-amid-hopes-for-peace-opening-of-strait-of-hormuz", date: "Jun 26, 2026" },

      { region: "Syria", headline: "Damascus and Israel reported in 'advanced' talks to revive the 1974 disengagement",
        summary: "President al-Sharaa confirmed advanced US-brokered negotiations for a security deal reactivating the 1974 disengagement and an Israeli pullback to pre-Dec 2024 lines under 'full Syrian sovereignty'; reported elements include a possible 25-year Golan lease, though specifics are unconfirmed.",
        source: "Kurdistan24", url: "https://www.kurdistan24.net/en/story/889716/israel-syria-move-toward-us-brokered-security-deal-diplomatic-ties", date: "Jun 2026" },

      { region: "Israel-Gaza", headline: "Gaza truce holds unevenly; the UN reports rising violence",
        summary: "Despite the October 2025 ceasefire, the UN reported an uptick in Israeli strikes since late May (dozens killed) with the post-ceasefire toll at ~936 dead, and warned Gaza 'remains the most dangerous place on earth to deliver aid' as water output fell ~20% in May.",
        source: "UN Press", url: "https://press.un.org/en/2026/sc16390.doc.htm", date: "Jun 2026" }
    ],

    us: [
      { headline: "Supreme Court hands Trump immigration wins and strikes a Hawaii gun law; the blockbusters are still pending",
        summary: "On June 25 the Court issued two rulings backing Trump's immigration agenda (over liberal dissents) and split 6–3 to strike a Hawaii law banning guns on private property open to the public. The marquee cases — birthright citizenship (Trump v. Barbara), firing Fed Governor Lisa Cook (Trump v. Cook), and transgender sports — remain undecided, with the next opinion day Monday June 29.",
        source: "SCOTUSblog", url: "https://www.scotusblog.com/2026/06/major-decisions-ahead/", date: "Jun 26, 2026" },

      { headline: "May PCE runs hottest in 3 years, but a September Fed hike stays the base case",
        summary: "Headline PCE hit 4.1% y/y and core 3.4% (both roughly in line), and with final Q1 GDP revised up to 2.1%, markets took it in stride — keeping ~66% odds of a September rate hike under new Chair Kevin Warsh's hawkish 'price stability' emphasis.",
        source: "CNBC", url: "https://www.cnbc.com/2026/06/25/pce-inflation-report-may-2026-.html", date: "Jun 25, 2026" },

      { headline: "Treasury's 60-day Iran oil-sanctions waiver in force; Vance says no congressional sign-off needed",
        summary: "Treasury's General License X (issued Jun 22) authorizes Iranian crude and petrochemical sales in dollars through Aug 21 — the first dollar-denominated Iran oil trade in over four decades — and VP Vance said the administration is 'quite confident' it can waive the sanctions without Congress, after the Senate's 50–48 War Powers Resolution.",
        source: "The Hill", url: "https://thehill.com/homenews/administration/5930408-trump-iran-deal-oil-sanctions/", date: "Jun 2026" },

      { headline: "Wall Street's AI bounce fades into the weekend",
        summary: "The Micron-driven relief rally rolled over Friday — the Nasdaq logged a 5th straight loss as chip stocks fell on a report that OpenAI may delay its IPO to 2027 — leaving the Nasdaq down 4.6% on the week even as the Dow eked out a 0.6% gain on a defensive rotation.",
        source: "CNBC", url: "https://www.cnbc.com/amp/2026/06/25/stock-market-today-live-updates.html", date: "Jun 26, 2026" },

      { headline: "Doncasters' 33% pop headlines a busy pre-holiday IPO window",
        summary: "The aerospace superalloy maker jumped 33% in its NYSE debut (priced $33, traded to $44) and Uber-backed Lime, ITG and Sinda crowded the calendar — a sign the new-issue market stayed hot even as megacap tech wobbled.",
        source: "IPOScoop", url: "https://www.iposcoop.com/the-ipo-buzz-doncasters-dpc-holdings-dpc-upsizes-ipo-prices-it-at-33-1-above-range/", date: "Jun 25, 2026" }
    ]
  },

  /* ---------- SOURCES (footer credits) ---------- */
  sources: [
    { name: "Trading Economics", url: "https://tradingeconomics.com/" },
    { name: "stockanalysis.com", url: "https://stockanalysis.com/" },
    { name: "CNBC",              url: "https://www.cnbc.com/" },
    { name: "Al Jazeera",        url: "https://www.aljazeera.com/" },
    { name: "SCOTUSblog",        url: "https://www.scotusblog.com/" },
    { name: "Crunchbase News",   url: "https://news.crunchbase.com/" },
    { name: "Arab News",         url: "https://www.arabnews.com/" },
    { name: "The Hill",          url: "https://thehill.com/" }
  ]
};

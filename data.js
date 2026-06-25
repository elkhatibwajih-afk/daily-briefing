/* ============================================================
   DAILY BRIEFING — DATA FILE
   ------------------------------------------------------------
   This file holds everything your dashboard displays.
   It is regenerated each time you run  /update-news  in Claude Code.
   You normally never edit this by hand.

   Last generated: June 25, 2026
   ============================================================ */

window.DASHBOARD_DATA = {

  dateLabel: "Thursday, June 25, 2026",
  lastUpdated: "June 25, 2026",
  updatedAt: "June 25, 2026, 10:07 AM (Beirut)",
  asOfNote: "Thursday, pre-US-open. US stocks & indices: Wed Jun 24 close — Micron's after-hours blowout has futures pointing higher into today's PCE inflation print. Europe & Asia: Wed Jun 24 (the Nikkei surged ~4% intraday Thursday on Micron). Gulf & Egypt: Wed Jun 24. Commodities, rates, FX & crypto: live Thu Jun 25 AM. The index chart now extends through Jun 24.",
  drivingStory: "Micron's blowout report (record revenue and a ~$50B next-quarter guide) lit an AI-relief rally overnight — the Nikkei jumped ~4% and US futures rose — after Wednesday's session stabilized (the Dow edged up, the Nasdaq slipped) following the early-week tech rout. All eyes are on today's US PCE inflation print (8:30am ET), the Fed's preferred gauge, with the hawkish 'hikes-not-cuts' debate live. Oil kept sliding (WTI ~$70, Brent ~$74) on the US–Iran de-escalation, and the dollar hit a 13-month high. Lebanon's ceasefire is fragile as the 5th round of Washington talks wraps — 'pilot zones' agreed in principle, but disarmament still deadlocked.",

  /* Short labels for the most recent trading sessions (oldest → newest), used as the index-chart x-axis & hover dates. NYSE calendar; ends at the latest US close (Wed Jun 24). */
  histDates: ["May 19","May 20","May 21","May 22","May 26","May 27","May 28","May 29","Jun 1","Jun 2","Jun 3","Jun 4","Jun 5","Jun 8","Jun 9","Jun 10","Jun 11","Jun 12","Jun 15","Jun 16","Jun 17","Jun 18","Jun 22","Jun 23","Jun 24"],

  /* ---------- MARKETS ---------- */
  markets: {

    indices: [
      { name: "S&P 500",          level: 7358.22,  day: "-0.10", month: "-1.5", ytd: "+7.5", note: "Wed Jun 24 close; futures higher Thu on Micron.", hist: [7354,7433,7446,7473,7519,7520,7564,7580,7600,7610,7554,7584,7384,7406,7387,7267,7394,7431,7554,7511,7420,7501,7473,7365,7358] },
      { name: "Nasdaq Composite", level: 25476.63, day: "-0.43", month: "-3.3", ytd: "+9.6", hist: [25871,26270,26293,26344,26656,26675,26917,26973,27087,27094,26854,26831,25709,25930,25679,25170,25810,25889,26684,26376,26022,26518,26167,25587,25477] },
      { name: "Nasdaq 100",       level: 29221.00, day: "-0.43", month: "-3.3", ytd: "+15.7", note: "Wed Jun 24 close (moved with the Composite)." },
      { name: "Dow Jones",        level: 51848.90, day: "+0.35", month: "+2.5", ytd: "+7.9", hist: [49364,50009,50286,50580,50462,50644,50669,51032,51079,51308,50687,51562,50867,50786,50872,49919,50849,51202,51671,52000,51493,51565,51713,51667,51849] },
      { name: "Russell 2000",     level: 2986.63,  day: "+0.37", month: "+4.1", ytd: "+20.4", hist: [2747,2817,2843,2869,2921,2920,2937,2919,2906,2932,2894,2935,2834,2855,2867,2835,2921,2944,2965,2939,2918,2980,3004,2975,2987] },
      { name: "STOXX Europe 600", level: 634.63,   day: "-0.05", month: "+0.5", ytd: "+7.6", note: "Wed Jun 24 close.", hist: [621,625,632,628,628,625,626,621,625,621,624,623,622,619,619,618,622,633,634,636,637,639,639,635,635] },
      { name: "FTSE 100",         level: 10428.85, day: "0.00", month: "-0.6", ytd: "+5.0", note: "Wed Jun 24 close.", hist: [10432,10443,10466,10491,10505,10426,10409,10339,10374,10332,10360,10368,10373,10227,10255,10304,10472,10431,10494,10478,10504,10406,10438,10429,10429] },
      { name: "Nikkei 225",       level: 69384.00, day: "-0.28", month: "+6.4", ytd: "+37.8", note: "Wed Jun 24 close; surged ~4% intraday Thu Jun 25 (~72,000) on Micron's blowout. Some sites misreport YTD ~+80% (a base-date error) — true YTD ~+38%.", hist: [64996,64999,64693,66330,66310,66934,66734,68402,67471,66588,63792,64025,65417,64179,64217,66020,68463,69318,68755,69980,69902,71053,72354,69582,69384] },
      { name: "Hang Seng",        level: 23090.27, day: "-1.05", month: "-8.6", ytd: "-10.0", note: "Wed Jun 24 close.", hist: [25651,25387,25606,25599,25328,25006,25182,25398,26038,25633,25253,24962,24657,24566,24408,24249,24718,24843,24494,24312,24312,23925,23769,23336,23090] }
    ],

    rates: [
      { name: "US 10-Year Treasury", value: "4.45%",      change: "Eased a 2nd session as oil dropped & inflation fears cooled; PCE today" },
      { name: "US 2-Year Treasury",  value: "4.24%",      change: "Front end firm on the hawkish-Fed repricing (~68% odds of a Sept hike)" },
      { name: "Fed Funds (target)",  value: "3.50–3.75%", change: "Held Jun 17; BofA & Deutsche Bank now see 2026 HIKES, not cuts" }
    ],

    fx: [
      { name: "EUR/USD",            value: "1.1345", day: "-0.19" },
      { name: "USD/JPY",            value: "161.82", day: "+0.14" },
      { name: "GBP/USD",            value: "1.3180", day: "-0.13" },
      { name: "Dollar Index (DXY)", value: "101.62", day: "+0.22" }
    ],

    crypto: [
      { name: "Bitcoin",  price: 62400, day: "-0.5", month: "-18.0", year: "+39.0" },
      { name: "Ethereum", price: 1670,  day: "+0.1", month: "-16.0", year: "+30.0" }
    ]
  },

  /* ---------- REGIONAL MARKETS (GCC & Egypt) ---------- */
  /* Latest close = Wed Jun 24 (Gulf markets trade Sun–Thu) */
  regionalMarkets: [
    { name: "Saudi · TASI",        level: 11006.80, day: "-0.25", month: "-0.64", ytd: "+4.9", note: "Wed Jun 24 close" },
    { name: "Abu Dhabi · ADX",     level: 10012.19, day: "-0.13", month: "+3.75", ytd: "+0.20", note: "Wed Jun 24 close" },
    { name: "Dubai · DFM",         level: 6112.00,  day: "+0.12", month: "+6.16", ytd: "+1.0", note: "Wed Jun 24 close" },
    { name: "Qatar · QE",          level: 10321.23, day: "-0.84", month: "-2.55", ytd: "-4.1", note: "Wed Jun 24 close" },
    { name: "Kuwait · All-Share",  level: 8710.75,  day: "+0.01", month: "-1.18", ytd: "-2.2", note: "Wed Jun 24 close" },
    { name: "Bahrain · All-Share", level: 2041.60,  day: "+0.26", month: "+3.16", ytd: "-1.2", note: "Wed Jun 24 close" },
    { name: "Oman · MSX 30",       level: 7348.49,  day: "+0.62", month: "-5.49", ytd: "+25.3", note: "Wed Jun 24 close; +25% YTD (the ~+63% headline is the 1-year figure)" },
    { name: "Egypt · EGX 30",      level: 51710.90, day: "-0.11", month: "-1.80", ytd: "+23.6", note: "Wed Jun 24 close; +24% YTD (the ~+57% headline is the 1-year figure)" }
  ],

  /* ---------- WEEK AHEAD (scheduled catalysts) ---------- */
  weekAhead: [
    { date: "Thu Jun 25", category: "Econ", event: "US PCE inflation (May) + GDP + durable goods + claims", detail: "Today's marquee: the Fed's preferred PCE gauge (headline seen ~+4.1% y/y) alongside final Q1 GDP and weekly claims — all 8:30am ET." },
    { date: "Thu Jun 25", category: "Central Bank", event: "Banxico (Mexico) rate decision", detail: "Base case a HOLD at 6.50% after May's cut ended the easing cycle (a final 25bp cut is a minority call)." },
    { date: "Thu Jun 25", category: "IPO", event: "Doncasters (NYSE: DPC) first trade", detail: "Priced an upsized IPO at $33/share (above the $28–32 range), ~$919M raised; UK aerospace superalloy-parts maker." },
    { date: "Thu Jun 25", category: "Geopolitics", event: "Lebanon–Israel talks wrap in Washington", detail: "5th round closes with 'pilot zones' agreed in principle but the withdrawal-vs-disarmament sequencing still deadlocked." },
    { date: "Fri Jun 26", category: "Econ", event: "Final June UMich consumer sentiment", detail: "Revision to the preliminary June reading (10am ET)." },
    { date: "Tue Jun 30", category: "Econ", event: "US consumer confidence + Chicago PMI", detail: "Conference Board confidence and a regional manufacturing gauge for June." },
    { date: "Tue Jun 30", category: "Earnings", event: "Nike Q4 (after close)", detail: "A read on the US consumer and Nike's turnaround under new management." },
    { date: "Tue Jun 30", category: "Earnings", event: "Constellation Brands FQ1 (after close)", detail: "Beer depletions (Modelo) vs soft wine & spirits; call Jul 1." },
    { date: "Tue Jun 30", category: "Geopolitics", event: "US Supreme Court term ends", detail: "Rulings still pending: birthright citizenship, transgender sports, and whether the President can fire a Fed governor (Trump v. Cook)." },
    { date: "Wed Jul 1", category: "Econ", event: "ISM Manufacturing (June)", detail: "The first major July data point; prior 54.0." },
    { date: "Wed Jul 1", category: "Earnings", event: "General Mills Q4 (before open)", detail: "Fiscal Q4 plus the FY27 guide amid its 'strategic transformation.'" },
    { date: "Thu Jul 2", category: "Econ", event: "June jobs report (nonfarm payrolls)", detail: "Pulled forward to Thursday (confirmed by the BLS) ahead of the Jul 3–4 holiday." },
    { date: "Fri Jul 4", category: "Geopolitics", event: "US markets closed — Independence Day", detail: "Equities & bonds shut Fri Jul 4; the bond market closes early (2pm ET) Thu Jul 3." }
  ],

  /* ---------- BIG STOCKS (largest by market cap) ---------- */
  /* Price & 1-day = Wed Jun 24 close · 1M / 1Y = trailing price return · ranking: Meta edged above Tesla */
  stocks: [
    { ticker: "NVDA",  name: "Nvidia",              price: 199.00, day: "-0.52", month: "-7.1",  year: "+38.8",  mktcap: "$4.82T", hist: [220.6,223.5,219.5,215.3,214.9,212.6,214.3,211.1,224.4,222.8,214.8,218.7,205.1,208.6,208.2,200.4,204.9,205.2,212.5,207.4,204.65,210.69,208.65,200.04,199.00] },
    { ticker: "AAPL",  name: "Apple",               price: 293.08, day: "-0.41", month: "-4.7",  year: "+46.6",  mktcap: "$4.30T", hist: [299,302.3,305,308.8,308.3,310.9,312.5,312.1,306.3,315.2,310.3,311.2,307.3,301.5,290.6,291.6,295.6,291.1,296.4,299.2,295.95,298.01,297.01,294.30,293.08] },
    { ticker: "GOOGL", name: "Alphabet",            price: 345.29, day: "-0.24", month: "-10.6", year: "+110.1", mktcap: "$4.21T", hist: [387.7,388.9,387.7,383,388.9,388.8,390.1,380.3,376.4,361.9,359,372.2,368.5,363.3,364.3,356.4,357.8,359.7,369.4,373.3,363.79,368.03,349.68,346.13,345.29] },
    { ticker: "MSFT",  name: "Microsoft",           price: 365.46, day: "-2.27", month: "-11.5", year: "+21.0",  mktcap: "$2.71T", hist: [417.4,421.1,419.1,418.6,416,412.7,427,450.2,460.5,441.3,427.3,428.1,416.7,411.7,403.4,397.4,390.3,390.7,399.8,393.8,378.91,379.40,367.34,373.94,365.46] },
    { ticker: "AMZN",  name: "Amazon",              price: 234.27, day: "+0.07", month: "-12.8", year: "+12.3",  mktcap: "$2.52T", hist: [259.3,265,268.5,266.3,265.3,271.9,274,270.6,261.3,256.5,250,253.8,246,245.2,244.2,238,241.5,238.6,246,246,237.5,244.39,232.79,234.11,234.27] },
    { ticker: "SPCX",  name: "SpaceX",              price: 154.54, day: "-1.01", month: "n/a",   year: "n/a",    mktcap: "$2.04T", hist: [192.5,201.8,191.82,174.90,154.60,156.11,154.54] },
    { ticker: "AVGO",  name: "Broadcom",            price: 382.07, day: "+0.51", month: "-8.2",  year: "+50.9",  mktcap: "$1.82T", hist: [411.1,417.8,414.6,414.1,422,421.9,426.6,446.8,460,481.6,479.2,418.9,385.7,396.6,392.2,372.1,385.6,382.1,393.9,376.7,392.9,411.35,392.13,380.15,382.07] },
    { ticker: "META",  name: "Meta Platforms",      price: 557.67, day: "-0.81", month: "-7.9",  year: "-17.6",  mktcap: "$1.42T", hist: [602.6,605.1,607.4,610.3,612.3,635.3,635.3,632.5,600.5,597.6,623,627.6,593,585.4,584.6,571,568.4,567,593.5,600.2,567.58,577.22,563.85,562.20,557.67] },
    { ticker: "TSLA",  name: "Tesla",               price: 375.53, day: "-1.59", month: "-10.4", year: "+18.5",  mktcap: "$1.41T", hist: [404.1,417.3,417.9,426,433.6,440.4,442.1,435.8,415.9,423.7,423.7,418.5,391,409,396.7,381.6,399.2,406.4,411.2,404.7,396.38,400.49,405.05,381.61,375.53] },
    { ticker: "BRK.B", name: "Berkshire Hathaway",  price: 494.81, day: "+0.41", month: "+1.3",  year: "+1.6",   mktcap: "$1.07T", hist: [480.5,480.9,480,486.4,483.6,479.9,477.4,474.5,470.3,471.5,475.4,478.6,488.1,487,487.8,483.7,485.8,489.3,495.5,495,491.28,489.46,488.69,492.81,494.81] },
    { ticker: "JPM",   name: "JPMorgan Chase",      price: 333.45, day: "-0.21", month: "+9.1",  year: "+21.5",  mktcap: "$893B", hist: [295.7,302,303,306.4,306.7,299.3,296.7,299.3,296.6,301,300.9,310.9,312.4,311.1,312.7,309.1,313.5,320.7,319.4,331.1,333.46,325.22,331.48,334.14,333.45] }
  ],

  /* ---------- COMMODITIES ---------- */
  /* Live, Thu Jun 25 AM — oil at ~3-month lows as the US–Iran de-escalation unwinds the war-risk premium */
  commodities: [
    { name: "WTI Crude",   price: 69.80,   unit: "$/bbl",     day: "-1.00", month: "-26.0", ytd: "+13.6" },
    { name: "Brent Crude", price: 74.20,   unit: "$/bbl",     day: "-3.00", month: "-23.0", ytd: "+21.4" },
    { name: "Natural Gas", price: 3.16,    unit: "$/MMBtu",   day: "+0.60", month: "+4.4",  ytd: "-25.7" },
    { name: "Gold",        price: 3990.00, unit: "$/oz",      day: "-0.46", month: "-12.5", ytd: "-5.3" },
    { name: "Silver",      price: 61.50,   unit: "$/oz",      day: "+0.40", month: "-21.0", ytd: "-10.1" },
    { name: "Copper",      price: 5.98,    unit: "$/lb",      day: "+0.60", month: "-6.1",  ytd: "+5.3" },
    { name: "Wheat",       price: 585.00,  unit: "¢/bushel",  day: "-0.30", month: "-8.1",  ytd: "+11.3" }
  ],

  /* ---------- FINANCIAL NEWS ---------- */
  financialNews: [
    { category: "Earnings", headline: "Micron crushes Q3 and guides Q4 to ~$50B; stock jumps ~15% after hours",
      summary: "Micron reported record revenue of ~$41.5B and non-GAAP EPS of ~$25 with an ~85% gross margin as data-center sales topped $25B; it guided next-quarter revenue to ~$50B (vs ~$43.6B est) on sold-out 2026 HBM capacity, sending the stock up ~15% after hours.",
      source: "GlobeNewswire (Micron)", url: "https://www.globenewswire.com/news-release/2026/06/24/3317151/14450/en/Micron-Technology-Inc-Reports-Record-Results-for-the-Third-Quarter-of-Fiscal-2026.html", date: "Jun 24, 2026" },

    { category: "Macro", headline: "Wall Street steadies Wednesday; Micron then lifts futures into PCE day",
      summary: "The Dow rose 0.35% to 51,849 while the S&P slipped 0.10% and the Nasdaq fell 0.43% into Micron's print after the early-week tech rout; Micron's blowout then sent Nasdaq-100 futures up ~1.8% and sparked a ~4% Nikkei rally Thursday.",
      source: "TheStreet", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-june-24-2026", date: "Jun 24, 2026" },

    { category: "Macro", headline: "Today is PCE day — inflation seen accelerating to a multi-year high",
      summary: "May PCE (the Fed's preferred gauge, 8:30am ET) is forecast at ~+4.1% y/y headline (highest since 2023) with core ~3.3%, alongside final Q1 GDP (~+1.6%), durable goods and jobless claims — the key test for the 'hikes-not-cuts' debate.",
      source: "Morningstar", url: "https://www.morningstar.com/economy/may-pce-expected-show-rising-inflation", date: "Jun 25, 2026" },

    { category: "Macro", headline: "Oil keeps sliding on US–Iran de-escalation; WTI near $70",
      summary: "WTI fell toward $70 (session low ~$69.6) and Brent to ~$74 — the lowest since before the war — as a US waiver let buyers take already-loaded Iranian crude and Strait of Hormuz tanker traffic resumed; oil is down ~40% from its wartime peak.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/24/oil-prices-wti-brent-crude-trump-doj-gasoline-prices-strait-of-hormuz.html", date: "Jun 24, 2026" },

    { category: "Macro", headline: "Dollar hits a 13-month high as rate-hike bets and the stock rout boost demand",
      summary: "The dollar index climbed to ~101.6 — its strongest since May 2025 — on higher-for-longer Fed expectations and safe-haven demand, while the 10-year Treasury yield eased a second session to ~4.45%.",
      source: "CNBC", url: "https://www.cnbc.com/amp/2026/06/24/dollar-at-13-month-high-as-rate-hike-bets-stock-rout-boost-demand.html", date: "Jun 24, 2026" },

    { category: "Macro", headline: "BofA calls for three Fed HIKES in 2026 as inflation runs hot",
      summary: "BofA now expects 75bp of hikes this year (to 4.25–4.50%), reversing its cut call, after the June dot plot showed half of policymakers penciling hikes; markets price ~68% odds of a September hike (vs 29% a week earlier).",
      source: "Fortune", url: "https://fortune.com/2026/06/22/fed-rate-hikes-outlook-sticky-inflation-kevin-warsh-job-growth-oil-prices/", date: "Jun 22, 2026" },

    { category: "Earnings", headline: "Paychex edges past estimates; guides FY27 revenue +5–6%",
      summary: "Paychex reported fiscal Q4 EPS of $1.32 (vs $1.31 est) on revenue of $1.61B (+12.6% y/y) and guided FY2027 total revenue growth to 5–6% — a steady read on small-business hiring.",
      source: "Investing.com", url: "https://m.investing.com/news/earnings/paychex-earnings-beat-by-001-revenue-topped-estimates-4758445", date: "Jun 24, 2026" },

    { category: "M&A", headline: "AkzoNobel and Axalta advance their all-share 'merger of equals'",
      summary: "AkzoNobel published its shareholder circular for the previously announced all-share merger of equals with Axalta Coating Systems, moving one of the largest coatings-sector combinations toward a shareholder vote.",
      source: "SEC (Form 425)", url: "https://www.sec.gov/Archives/edgar/data/0001616862/000095010326009428/dp248886_425.htm", date: "Jun 24, 2026" },

    { category: "M&A", headline: "Public Storage to buy Public Storage Canada for ~$1.2B",
      summary: "The self-storage REIT agreed to acquire its Canadian namesake for ~$889M in OP units plus $310M cash (with up to $288M of earn-out), expanding its footprint across major Canadian markets.",
      source: "Business Wire", url: "https://www.businesswire.com/newsroom/subject/merger-acquisition", date: "Jun 24, 2026" },

    { category: "Deal", headline: "Selectis Health to be taken private by Black Pearl Equities at $5.75/share",
      summary: "Black Pearl Equities will launch an all-cash tender offer for healthcare operator Selectis Health at $5.75/share (conditioned on ≥70% tendered, no financing contingency), with closing expected in Q3 2026.",
      source: "StockTitan", url: "https://www.stocktitan.net/news/GBCS/selectis-health-inc-enters-into-agreement-to-be-acquired-by-black-j19ldzrkk1ao.html", date: "Jun 23, 2026" },

    { category: "IPO", headline: "Doncasters prices an upsized aerospace IPO at $33 — above the range",
      summary: "The UK precision-component/superalloy maker priced its upsized NYSE IPO at $33/share (above the $28–32 range) for ~$919M, listing today under 'DPC' (with a $75M QIA placement) — a sign of healthy demand for industrial new-issues.",
      source: "StockTitan", url: "https://www.stocktitan.net/news/DPC/doncasters-announces-pricing-of-upsized-initial-public-wf34cn7ro5a9.html", date: "Jun 24, 2026" },

    { category: "IPO", headline: "SpaceX settles around $154 after its record debut",
      summary: "After the largest IPO ever (priced $135, ~$75B raised, ~$1.8T valuation on June 12), SPCX trades near $154 — well off its $225 intraday peak (Jun 16) — as the trillion-dollar valuation debate continues.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/12/spacex-ipo-spcx-live-updates.html", date: "Jun 24, 2026" },

    { category: "M&A", headline: "Fox to acquire Roku for ~$22B in a landmark connected-TV deal",
      summary: "Roku holders get $160/share ($96 cash + 0.9693 Fox Class A shares), a ~$22B enterprise value and a 34% premium; Fox secured a $12B loan for the cash portion and targets ~$400M of synergies, closing 1H 2027.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/15/fox-to-buy-roku.html", date: "Jun 15, 2026" },

    { category: "Capital Markets", headline: "Nvidia prices a record $25B bond — its largest-ever debt deal",
      summary: "Nvidia sold $25B across seven tranches (its first high-grade issuance since 2021, upsized on ~$85B of orders) to fund AI-infrastructure buildout, with the 30-year tranche pricing at just 65bp over Treasuries.",
      source: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-06-15/nvidia-kicks-off-first-high-grade-bond-offering-since-2021", date: "Jun 15, 2026" },

    { category: "Capital Markets", headline: "Treasury rounds out the week's coupon supply with 5- and 7-year notes",
      summary: "The Treasury auctioned the 5-year note Wednesday and the 7-year Thursday (results settle Jun 30) — closely watched for demand against the backdrop of the hawkish-Fed repricing and a 13-month-high dollar.",
      source: "TreasuryDirect", url: "https://www.treasurydirect.gov/auctions/upcoming/", date: "Jun 25, 2026" },

    { category: "M&A", headline: "Olin and Huntsman to merge — a ~$12B+ North American chemicals leader",
      summary: "An all-stock merger of equals (~$12.5B combined 2025 revenue): Huntsman holders receive 0.5476 Olin shares each, leaving Olin holders ~54.5% and Huntsman ~45.5%, targeting $400M+ in synergies.",
      source: "PR Newswire", url: "https://www.prnewswire.com/news-releases/olin-and-huntsman-announce-transformative-merger-of-equals-to-create-a-12-billion-integrated-north-american-chemicals-leader-302801469.html", date: "Jun 16, 2026" }
  ],

  /* ---------- VENTURE CAPITAL (GCC-weighted + big global) ---------- */
  ventureCapital: [
    { region: "GCC", headline: "Revora (UAE) raises a $2M seed for AI-driven commerce",
      summary: "UAE AI-commerce startup Revora (formerly MyAlice) raised a $2M seed co-led by i2i Ventures and Oraseya Capital (Dubai's DIEZ fund), with Anchorless Bangladesh, F6 Ventures and Orbit Startups, to scale its 'AI sales layer' across Saudi/GCC.",
      source: "Wamda", url: "https://www.wamda.com/2026/06/revora-raises-2-million-scale-ai-driven-conversational-commerce-mena", date: "Jun 24, 2026" },

    { region: "GCC", headline: "Saudi Venture Capital invests in Aliph Capital Fund I",
      summary: "SVC committed to Aliph Fund I, a GCC-focused growth (private-equity) fund managed by Abu Dhabi's Aliph Capital — extending SVC's fund-of-funds push into later-stage Gulf growth capital.",
      source: "Saudi Press Agency", url: "https://www.spa.gov.sa/en/N2219113", date: "Jun 23, 2026" },

    { region: "GCC", headline: "CargoX (UAE) raises a $250M growth round led by BlueFive Capital",
      summary: "Autonomous-logistics player CargoX (led by ex-Talabat CEO Tomaso Rodriguez) raised $250M led by BlueFive Capital to scale autonomous freight — one of the region's largest growth rounds of 2026.",
      source: "Arab News", url: "https://www.arabnews.com/node/2646163/business-economy", date: "Jun 2026" },

    { region: "GCC", headline: "WakeCap (Saudi Arabia) makes a double cross-border acquisition",
      summary: "Saudi construction-tech firm WakeCap acquired Singapore's Frontline (AI construction-planning) and Brazil's Trackfy (workforce safety/operational intelligence) — a sign of Gulf-led outbound M&A in industrial tech.",
      source: "Arab News", url: "https://www.arabnews.com/node/2647977/business-economy", date: "Jun 20, 2026" },

    { region: "GCC", headline: "CNTXT AI (UAE) raises a $60M Series A for sovereign AI infrastructure",
      summary: "Abu Dhabi data-and-AI firm CNTXT AI closed a $60M Series A co-led by AI71 and BlueFive Capital to deploy secure enterprise/government AI (and acquired Arabic voice-AI startup Actualize).",
      source: "Arab News", url: "https://www.arabnews.com/node/2647977/business-economy", date: "Jun 20, 2026" },

    { region: "GCC", headline: "du Ventures (UAE) launches a $50M corporate VC fund, managed by Shorooq",
      summary: "UAE telco du stood up a $50M corporate-venture fund — managed by Shorooq Partners — to back fintech, AI, cybersecurity, cloud, gaming and enterprise software across the region.",
      source: "Arab News", url: "https://www.arabnews.com/node/2646163/business-economy", date: "Jun 2026" },

    { region: "GCC", headline: "eVoost AI (UAE) raises $2.2M to expand its real-estate AI tooling",
      summary: "UAE proptech eVoost AI raised $2.2M led by First Drop VC with Qora71 (Hub71-backed) to fund international expansion of its real-estate AI products.",
      source: "Wamda", url: "https://www.wamda.com/2026/05/uae-based-evoost-ai-expands-globally-2-2m-funding-round", date: "Jun 2026" },

    { region: "GCC", headline: "Dubizzle Group takes a strategic stake in Tern (UAE)",
      summary: "Dubizzle Group Ventures invested in rental-rewards platform Tern, with exclusive integration across the Bayut and dubizzle marketplaces — a notable regional corporate-VC move.",
      source: "Arab News", url: "https://www.arabnews.com/node/2647977/business-economy", date: "Jun 20, 2026" },

    { region: "Global", headline: "Cognition (maker of Devin) raises $1B+ at a ~$26B valuation",
      summary: "AI-coding startup Cognition raised over $1B at a ~$26B post-money valuation led by Lux Capital, General Catalyst and 8VC — roughly a 2.5x step-up from its $10.2B mark eight months earlier.",
      source: "TechCrunch", url: "https://techcrunch.com/2026/05/27/ai-coding-startup-cognition-raises-1b-at-25b-pre-money-valuation/", date: "May 27, 2026" },

    { region: "Global", headline: "Twenty Technologies hits unicorn status with a $100M Series B",
      summary: "Twenty Technologies raised a $100M Series B led by Accel at a $1B valuation — one of the week's new unicorns, alongside $100M rounds for Hydra Host and Ent.AI.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-cybersecurity-defense-startup-ai-odyssey-leads/", date: "Jun 2026" },

    { region: "Global", headline: "Odyssey raises a $310M Series B at a $1.45B valuation",
      summary: "AI 'world-model' startup Odyssey raised $310M led by Natural Capital (with Amazon, AMD Ventures and Google Ventures) — the largest venture round of the week.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-cybersecurity-defense-startup-ai-odyssey-leads/", date: "Jun 2026" },

    { region: "Global", headline: "Anthropic raises ~$65B at a ~$965B valuation",
      summary: "AI lab Anthropic's ~$65B Series H lifted its valuation to ~$965B — briefly the first company to top OpenAI's private AI valuation.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/ai/biggest-funding-rounds-ai-anthropic-65b-dominates/", date: "Jun 2026" }
  ],

  /* ---------- LEBANON ECONOMY ---------- */
  lebanonEconomy: [
    { label: "Lira / USD",         value: "~89,500",     sub: "Official band 85,500–89,500; parallel near the band (Jun 2026)" },
    { label: "Inflation (y/y)",    value: "~19%",        sub: "May 2026 — eased from 20% in April" },
    { label: "BdL FX Reserves",    value: "~$11.63B",    sub: "Mid-June 2026 (+$185M in early June; excludes gold)" },
    { label: "Eurobonds",          value: "~26¢",        sub: "BLOM Bond Index 26.33 (week of Jun 18); in default since 2020" },
    { label: "IMF Program",        value: "Stalled",     sub: "No new program; gated on the bank-resolution & Gap laws" },
    { label: "Reconstruction",     value: "~$11B",       sub: "World Bank estimate (total war cost ~$14B)" },
    { label: "GDP Growth",         value: "+4.2% (2025)", sub: "World Bank: +4.2% 2025, +4.0% 2026 forecast (reform-contingent)" },
    { label: "Bank-System Losses", value: "~$80B",       sub: "The 'gap'; Gap Law still the core restructuring fight" }
  ],

  /* ---------- GEOPOLITICAL MAP (today's hotspots) ---------- */
  mapPoints: [
    { place: "Washington",        lat: 38.90, lng: -77.04, weight: 3, region: "US",          label: "Lebanon–Israel 5th round wraps; US–Iran 60-day roadmap being finalized amid a nuclear-inspection dispute" },
    { place: "Beirut",            lat: 33.89, lng: 35.50,  weight: 3, region: "Lebanon",     label: "'Pilot zones' agreed in principle, but talks deadlocked on withdrawal-vs-disarmament sequencing" },
    { place: "South Lebanon",     lat: 33.27, lng: 35.20,  weight: 2, region: "Lebanon",     label: "Fresh strikes across the Nabatieh region (~27 killed Jun 24) keep the ceasefire fragile" },
    { place: "Tehran",            lat: 35.69, lng: 51.39,  weight: 3, region: "Iran",        label: "Oil-sanctions waiver in force through August; an IAEA inspector-access standoff is the first friction" },
    { place: "Strait of Hormuz",  lat: 26.57, lng: 56.25,  weight: 3, region: "Gulf",        label: "Toll-free transit under the MoU; tanker traffic recovering — Brent slid to ~$74" },
    { place: "Gulf of Oman",      lat: 24.50, lng: 58.50,  weight: 1, region: "Gulf",        label: "Tankers of Iranian crude departing; oil down ~40% from its wartime peak" },
    { place: "Doha",              lat: 25.29, lng: 51.53,  weight: 2, region: "Gulf",        label: "Qatar's mediation channel stays active across the Iran and Gaza files" },
    { place: "Riyadh",            lat: 24.71, lng: 46.68,  weight: 1, region: "Gulf",        label: "OPEC+ leader weighing a further output hike for August as oil falls" },
    { place: "Damascus",          lat: 33.51, lng: 36.29,  weight: 1, region: "Syria",       label: "A US-brokered Syria–Israel de-escalation reviving the 1974 disengagement reported 'advanced'" },
    { place: "Gaza",              lat: 31.50, lng: 34.47,  weight: 1, region: "Israel-Gaza", label: "The truce holds but the humanitarian crisis deepens; ~1,000 killed since it began" }
  ],
  mapArcs: [
    { from: [38.90, -77.04], to: [33.89, 35.50] },
    { from: [38.90, -77.04], to: [35.69, 51.39] },
    { from: [35.69, 51.39],  to: [26.57, 56.25] },
    { from: [25.29, 51.53],  to: [35.69, 51.39] },
    { from: [33.27, 35.20],  to: [33.89, 35.50] }
  ],

  /* ---------- POLITICS ---------- */
  politics: {

    middleEast: [
      { region: "Lebanon", headline: "Lebanon and Israel agree on 'pilot zones' in principle as the 5th round wraps in Washington",
        summary: "The US-brokered fifth round (Jun 23–25, Secretary Rubio overseeing) reached agreement in principle on 'pilot zones' in south Lebanon where the Lebanese Army would take exclusive control — free of non-state weapons — in exchange for staged Israeli withdrawals, with LAF units to be US-vetted to confirm no Hezbollah links.",
        source: "Reuters", url: "https://www.detroitnews.com/story/news/world/2026/06/24/israel-lebanon-discussing-pilot-scheme-handover-territory/90673921007/", date: "Jun 24, 2026" },

      { region: "Lebanon", headline: "But the political track stays deadlocked on sequencing — withdrawal vs disarmament",
        summary: "Talks stalled on the core trade-off: Israel says full withdrawal comes only after Hezbollah surrenders its weapons to the state, while Hezbollah refuses to disarm while Israeli troops remain. Israel's Smotrich said forces will not leave 'as long as Hezbollah exists,' and officials briefed on day one described 'more regression than steps forward.'",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/19/us-announces-new-round-of-israel-lebanon-talks-in-washington-next-week", date: "Jun 24, 2026" },

      { region: "Lebanon", headline: "Ceasefire fragile — fresh strikes across Nabatieh kill ~27 after Hezbollah fire",
        summary: "Israel struck across southern and eastern Lebanon, including the Nabatieh region, after the IDF said Hezbollah fired 50+ projectiles and drones near the Ali Taher ridge; Lebanese media reported at least 27 killed. The cumulative toll's last firm count was 4,057 dead / 12,121 wounded (Jun 20).",
        source: "NBC News", url: "https://www.nbcnews.com/world/iran/israel-continues-lebanon-strikes-fresh-ceasefire-rcna350952", date: "Jun 24, 2026" },

      { region: "Lebanon", headline: "Reconstruction ~$11B; IMF stalled; World Bank now sees 2026 growth at +4%",
        summary: "Lebanon's recovery needs are pegged near $11B (total war cost ~$14B) and a new IMF program remains blocked pending the bank-resolution and 'Gap' laws — but the World Bank's June report did lift 2025 growth to +4.2% and forecast +4.0% for 2026, contingent on reform and reconstruction.",
        source: "World Bank", url: "https://www.worldbank.org/en/news/press-release/2026/01/22/lebanon-economic-rebound-marks-cautious-recovery-amidst-progress-on-reforms", date: "Jun 2026" },

      { region: "Iran", headline: "An IAEA–Iran clash over inspector access threatens the 60-day roadmap",
        summary: "IAEA chief Grossi said inspections of Iran's enrichment sites are 'going to happen' under the interim deal but called the timing 'not essential'; Iran's Foreign Ministry flatly contradicted him, saying inspectors will not examine the sites until a final deal — the first major friction in the 60-day MoU.",
        source: "NPR", url: "https://www.npr.org/2026/06/24/g-s1-129770/iran-nuclear-inspection", date: "Jun 24, 2026" },

      { region: "Gulf", headline: "Iran oil-sanctions waiver in force; Hormuz tanker traffic recovering",
        summary: "Treasury's 60-day license (through ~Aug 21) lets Iran sell crude and petrochemicals in dollars and clears previously-sanctioned vessels; Hormuz traffic has ticked up (Qatari LNG and supertankers transiting) and Brent slid to ~$74, the lowest since before the war.",
        source: "CNBC", url: "https://www.cnbc.com/2026/06/23/us-iran-oil-sanction-relief-strait-of-hormuz-peace-deal-.html", date: "Jun 23, 2026" },

      { region: "Syria", headline: "Damascus pursues a 1974-disengagement revival; al-Sharaa says talks 'advanced'",
        summary: "President al-Sharaa's government is seeking a reciprocal security deal reactivating the 1974 Israel–Syria disengagement and an Israeli pullback toward pre-Dec 2024 Golan lines as a phased step — though al-Sharaa rules out joining the Abraham Accords and no deal is signed.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/1/7/everything-you-need-to-know-about-the-syria-israel-deal-in-paris", date: "Jun 2026" },

      { region: "Israel-Gaza", headline: "Gaza truce holds but the humanitarian crisis deepens; ~1,000 killed since",
        summary: "UN briefers told the Security Council that Gazans remain 'trapped in a humanitarian nightmare' — no hospital fully operational and Kerem Shalom the sole approved cargo crossing — with nearly 1,000 Palestinians killed since the truce began amid continued strikes.",
        source: "UN Press", url: "https://press.un.org/en/2026/sc16390.doc.htm", date: "Jun 2026" }
    ],

    us: [
      { headline: "Senate passes a historic Iran War Powers Resolution 50–48 — but it's non-binding",
        summary: "For the first time, the Senate approved a war-powers rebuke directing Trump to halt military action against Iran absent congressional approval; four Republicans crossed over (Cassidy, Murkowski, Collins, Paul) and one Democrat (Fetterman) opposed. The measure won't be sent to the White House and isn't legally binding; Trump blasted the 'Four Republican Losers.'",
        source: "NPR", url: "https://www.npr.org/2026/06/23/nx-s1-5868599/senate-iran-war-powers-resolution", date: "Jun 23, 2026" },

      { headline: "Today's PCE expected to show inflation accelerating to a multi-year high",
        summary: "The May PCE report (8:30am ET) — the Fed's preferred gauge — is forecast at ~+4.1% y/y headline (highest since 2023) with core ~3.3% / +0.37% m/m; economists expect May to mark the 2026 inflation peak as oil eases.",
        source: "Morningstar", url: "https://www.morningstar.com/economy/may-pce-expected-show-rising-inflation", date: "Jun 25, 2026" },

      { headline: "Hawkish Fed: 2026 inflation projection lifted to 3.6%; hike odds building",
        summary: "The FOMC held June 17 but its projections raised year-end 2026 PCE inflation to 3.6% and trimmed GDP to 2.2%; Deutsche Bank now joins BofA in seeing 2026 hikes (toward a ~4.1% funds rate) rather than cuts.",
        source: "Federal Reserve", url: "https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260617.htm", date: "Jun 17, 2026" },

      { headline: "Supreme Court term winds down — marquee rulings still pending",
        summary: "The Court is in its final stretch (term ends ~June 30) with blockbusters still outstanding: birthright citizenship (Trump v. Barbara), whether the President can fire Fed Governor Lisa Cook (Trump v. Cook), and the transgender-sports cases — all expected by early July.",
        source: "SCOTUSblog", url: "https://www.scotusblog.com/2026/06/the-most-important-cases-yet-to-be-decided/", date: "Jun 24, 2026" },

      { headline: "US–Iran deal implementation drives domestic pushback",
        summary: "Beyond the War Powers vote, the interim MoU and Treasury's oil-sanctions waiver face scrutiny over Iran's oil-revenue windfall and the IAEA-access dispute, keeping the deal politically contentious in Washington even as markets cheer the de-escalation.",
        source: "CBS News", url: "https://www.cbsnews.com/live-updates/us-iran-trump-deal-nuclear-inspections-iaea-timing-not-essential/", date: "Jun 24, 2026" }
    ]
  },

  /* ---------- SOURCES (footer credits) ---------- */
  sources: [
    { name: "Trading Economics", url: "https://tradingeconomics.com/" },
    { name: "stockanalysis.com", url: "https://stockanalysis.com/" },
    { name: "CNBC",              url: "https://www.cnbc.com/" },
    { name: "Al Jazeera",        url: "https://www.aljazeera.com/" },
    { name: "NPR",               url: "https://www.npr.org/" },
    { name: "Reuters",           url: "https://www.reuters.com/" },
    { name: "Arab News",         url: "https://www.arabnews.com/" },
    { name: "Crunchbase News",   url: "https://news.crunchbase.com/" }
  ]
};

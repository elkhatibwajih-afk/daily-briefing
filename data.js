/* ============================================================
   DAILY BRIEFING — DATA FILE
   ------------------------------------------------------------
   This file holds everything your dashboard displays.
   It is regenerated each time you run  /update-news  in Claude Code.
   You normally never edit this by hand.

   Last generated: June 24, 2026
   ============================================================ */

window.DASHBOARD_DATA = {

  dateLabel: "Wednesday, June 24, 2026",
  lastUpdated: "June 24, 2026",
  updatedAt: "June 24, 2026, 8:44 AM (Beirut)",
  asOfNote: "Wednesday, pre-US-open. US stocks & indices: Tue Jun 23 close — two sessions since the holiday (Mon Jun 22 & Tue Jun 23) brought a tech-led selloff. Europe & Asia: Tue Jun 23 (the Nikkei fell after Monday's record, and slid further Wed). Gulf & Egypt: Tue Jun 23. Commodities, rates, FX & crypto: live Wed Jun 24 AM. The index chart now extends through Jun 23.",
  drivingStory: "US markets reopened to a two-day, tech-led selloff (the Nasdaq fell 2.2% Tuesday as semiconductors were routed) even as the geopolitics eased: Washington lifted Iranian oil sanctions under an interim 60-day deal, and the Senate joined the House in a war-powers rebuke. Oil slid toward a three-month low (Brent ~$76), while gold and crypto fell on a hawkish-Fed bias — BofA now expects three 2026 rate HIKES — and the dollar firmed. Lebanon's ceasefire is holding loosely as the 5th round of Washington talks runs through Thursday; today brings Micron earnings and, Thursday, the marquee US PCE inflation print.",

  /* Short labels for the most recent trading sessions (oldest → newest), used as the index-chart x-axis & hover dates. NYSE calendar; ends at the latest US close (Tue Jun 23). */
  histDates: ["May 19","May 20","May 21","May 22","May 26","May 27","May 28","May 29","Jun 1","Jun 2","Jun 3","Jun 4","Jun 5","Jun 8","Jun 9","Jun 10","Jun 11","Jun 12","Jun 15","Jun 16","Jun 17","Jun 18","Jun 22","Jun 23"],

  /* ---------- MARKETS ---------- */
  markets: {

    indices: [
      { name: "S&P 500",          level: 7365.46,  day: "-1.44", month: "-1.44", ytd: "+7.6", note: "Tue Jun 23 close; a two-day, tech-led selloff after the holiday.", hist: [7354,7433,7446,7473,7519,7520,7564,7580,7600,7610,7554,7584,7384,7406,7387,7267,7394,7431,7554,7511,7420,7501,7473,7365] },
      { name: "Nasdaq Composite", level: 25587.04, day: "-2.21", month: "-2.9", ytd: "+10.1", hist: [25871,26270,26293,26344,26656,26675,26917,26973,27087,27094,26854,26831,25709,25930,25679,25170,25810,25889,26684,26376,26022,26518,26167,25587] },
      { name: "Nasdaq 100",       level: 29347.27, day: "-3.29", month: "-2.9", ytd: "+16.2", note: "Tue Jun 23 close; semiconductors led the drop." },
      { name: "Dow Jones",        level: 51666.84, day: "-0.09", month: "+2.2", ytd: "+7.5", hist: [49364,50009,50286,50580,50462,50644,50669,51032,51079,51308,50687,51562,50867,50786,50872,49919,50849,51202,51671,52000,51493,51565,51713,51667] },
      { name: "Russell 2000",     level: 2975.48,  day: "-0.96", month: "+3.7", ytd: "+19.9", hist: [2747,2817,2843,2869,2921,2920,2937,2919,2906,2932,2894,2935,2834,2855,2867,2835,2921,2944,2965,2939,2918,2980,3004,2975] },
      { name: "STOXX Europe 600", level: 634.63,   day: "-0.73", month: "+0.5", ytd: "+7.6", note: "Tue Jun 23 close.", hist: [621,625,632,628,628,625,626,621,625,621,624,623,622,619,619,618,622,633,634,636,637,639,639,635] },
      { name: "FTSE 100",         level: 10428.85, day: "-0.09", month: "-0.6", ytd: "+5.0", note: "Tue Jun 23 close.", hist: [10432,10443,10466,10491,10505,10426,10409,10339,10374,10332,10360,10368,10373,10227,10255,10304,10472,10431,10494,10478,10504,10406,10438,10429] },
      { name: "Nikkei 225",       level: 69582.00, day: "-3.83", month: "+6.7", ytd: "+38.2", note: "Tue Jun 23 close; hit a record ~72,350 Mon then fell −3.8% Tue, and slid further Wed Jun 24 (~69,120). Some sites misreport YTD ~+80% (a base-date error) — true YTD ~+38%.", hist: [64996,64999,64693,66330,66310,66934,66734,68402,67471,66588,63792,64025,65417,64179,64217,66020,68463,69318,68755,69980,69902,71053,72354,69582] },
      { name: "Hang Seng",        level: 23336.28, day: "-1.82", month: "-8.6", ytd: "-9.0", note: "Tue Jun 23 close.", hist: [25651,25387,25606,25599,25328,25006,25182,25398,26038,25633,25253,24962,24657,24566,24408,24249,24718,24843,24494,24312,24312,23925,23769,23336] }
    ],

    rates: [
      { name: "US 10-Year Treasury", value: "4.48%",      change: "Eased Tue on a flight-to-safety bid (tech selloff + Iran de-escalation)" },
      { name: "US 2-Year Treasury",  value: "4.21%",      change: "Front end repricing for a possible 2026 HIKE (~68% odds of a Sept hike)" },
      { name: "Fed Funds (target)",  value: "3.50–3.75%", change: "Held Jun 17; BofA now sees 75bp of HIKES in 2026 (Sep/Oct/Dec)" }
    ],

    fx: [
      { name: "EUR/USD",            value: "1.1367", day: "-0.13" },
      { name: "USD/JPY",            value: "161.59", day: "+0.03" },
      { name: "GBP/USD",            value: "1.3197", day: "-0.06" },
      { name: "Dollar Index (DXY)", value: "101.40", day: "+0.08" }
    ],

    crypto: [
      { name: "Bitcoin",  price: 62700, day: "-1.0", month: "-19.0", year: "+40.3" },
      { name: "Ethereum", price: 1669,  day: "-2.4", month: "-17.0", year: "+30.5" }
    ]
  },

  /* ---------- REGIONAL MARKETS (GCC & Egypt) ---------- */
  /* Latest close = Tue Jun 23 (Gulf markets trade Sun–Thu; Wed session not open yet at 8:20am Beirut) */
  regionalMarkets: [
    { name: "Saudi · TASI",        level: 11033.99, day: "-0.35", month: "-0.40", ytd: "+5.18", note: "Tue Jun 23 close" },
    { name: "Abu Dhabi · ADX",     level: 10024.70, day: "-0.11", month: "+3.33", ytd: "+0.32", note: "Tue Jun 23 close" },
    { name: "Dubai · DFM",         level: 6105.00,  day: "-1.27", month: "n/a",   ytd: "+0.96", note: "Tue Jun 23 close" },
    { name: "Qatar · QE",          level: 10408.77, day: "-0.36", month: "-2.78", ytd: "-3.29", note: "Tue Jun 23 close" },
    { name: "Kuwait · All-Share",  level: 8709.66,  day: "-0.38", month: "-1.77", ytd: "-2.22", note: "Tue Jun 23 close" },
    { name: "Bahrain · All-Share", level: 2036.40,  day: "+0.28", month: "+3.80", ytd: "-1.46", note: "Tue Jun 23 close" },
    { name: "Oman · MSX 30",       level: 7303.30,  day: "-1.16", month: "-5.26", ytd: "+24.49", note: "Tue Jun 23 close; +24.5% YTD (the ~+61% headline is the 1-year figure)" },
    { name: "Egypt · EGX 30",      level: 51769.74, day: "-1.55", month: "-2.07", ytd: "+23.76", note: "Tue Jun 23 close; +23.8% YTD (the ~+59% headline is the 1-year figure)" }
  ],

  /* ---------- WEEK AHEAD (scheduled catalysts) ---------- */
  weekAhead: [
    { date: "Wed Jun 24", category: "Earnings", event: "Micron FQ3 (after close)", detail: "The marquee AI / HBM-memory read — 2026 HBM capacity reportedly sold out; BofA lifted its target to $1,500." },
    { date: "Wed Jun 24", category: "Earnings", event: "Paychex Q4 (before open)", detail: "An SMB hiring / labor-market tell (consensus ~$1.31 EPS)." },
    { date: "Thu Jun 25", category: "Econ", event: "US PCE inflation (May) — the week's marquee print", detail: "The Fed's preferred inflation gauge (8:30am ET), released the same morning as GDP & durable goods." },
    { date: "Thu Jun 25", category: "Econ", event: "Final Q1 GDP + durable goods + jobless claims", detail: "Third GDP estimate (~+1.6% annualized), May durable goods and weekly claims — all 8:30am ET." },
    { date: "Thu Jun 25", category: "Central Bank", event: "Banxico (Mexico) rate decision", detail: "Base case a HOLD at 6.50% after May's cut ended the easing cycle." },
    { date: "Thu Jun 25", category: "IPO", event: "Doncasters (NYSE: DPC) first trade", detail: "~$700M IPO (23.33M shares at $28–32; QIA took a $75M placement); UK aerospace superalloy-parts maker." },
    { date: "Thu Jun 25", category: "Geopolitics", event: "Lebanon–Israel talks — political track (Washington)", detail: "Final day of the 5th round; 'pilot-zone' Israeli withdrawal and Lebanese Army deployment on the table (Hezbollah excluded)." },
    { date: "Tue Jun 30", category: "Econ", event: "US consumer confidence + Chicago PMI", detail: "Conference Board confidence and a regional activity gauge for June." },
    { date: "Tue Jun 30", category: "Earnings", event: "Nike Q4 (after close)", detail: "A read on the US consumer and Nike's turnaround under new management." },
    { date: "Tue Jun 30", category: "Geopolitics", event: "US Supreme Court term ends", detail: "Blockbusters still pending: birthright citizenship, transgender sports, and whether the President can fire a Fed governor (Trump v. Cook)." },
    { date: "Wed Jul 1", category: "Econ", event: "ISM Manufacturing (June)", detail: "Prior 54.0 (strongest since 2022); a factory-activity gauge into H2." },
    { date: "Wed Jul 1", category: "Earnings", event: "General Mills Q4 (before open)", detail: "Fiscal Q4 plus the FY27 guide amid its 'strategic transformation.'" },
    { date: "Thu Jul 2", category: "Econ", event: "June jobs report", detail: "Nonfarm payrolls, pulled forward a day ahead of the Jul 3–4 holiday." }
  ],

  /* ---------- BIG STOCKS (largest by market cap) ---------- */
  /* Price & 1-day = Tue Jun 23 close · 1M / 1Y = trailing price return · ranking re-checked (AAPL edged above GOOGL; SpaceX #6) */
  stocks: [
    { ticker: "NVDA",  name: "Nvidia",              price: 200.04, day: "-4.13", month: "-7.1",  year: "+38.8",  mktcap: "$4.85T", hist: [220.6,223.5,219.5,215.3,214.9,212.6,214.3,211.1,224.4,222.8,214.8,218.7,205.1,208.6,208.2,200.4,204.9,205.2,212.5,207.4,204.65,210.69,208.65,200.04] },
    { ticker: "AAPL",  name: "Apple",               price: 294.30, day: "-0.91", month: "-4.7",  year: "+46.6",  mktcap: "$4.32T", hist: [299,302.3,305,308.8,308.3,310.9,312.5,312.1,306.3,315.2,310.3,311.2,307.3,301.5,290.6,291.6,295.6,291.1,296.4,299.2,295.95,298.01,297.01,294.30] },
    { ticker: "GOOGL", name: "Alphabet",            price: 346.13, day: "-1.02", month: "-10.6", year: "+110.1", mktcap: "$4.22T", hist: [387.7,388.9,387.7,383,388.9,388.8,390.1,380.3,376.4,361.9,359,372.2,368.5,363.3,364.3,356.4,357.8,359.7,369.4,373.3,363.79,368.03,349.68,346.13] },
    { ticker: "MSFT",  name: "Microsoft",           price: 373.94, day: "+1.80", month: "-10.7", year: "+22.4",  mktcap: "$2.78T", hist: [417.4,421.1,419.1,418.6,416,412.7,427,450.2,460.5,441.3,427.3,428.1,416.7,411.7,403.4,397.4,390.3,390.7,399.8,393.8,378.91,379.40,367.34,373.94] },
    { ticker: "AMZN",  name: "Amazon",              price: 234.11, day: "+0.57", month: "-12.8", year: "+12.3",  mktcap: "$2.52T", hist: [259.3,265,268.5,266.3,265.3,271.9,274,270.6,261.3,256.5,250,253.8,246,245.2,244.2,238,241.5,238.6,246,246,237.5,244.39,232.79,234.11] },
    { ticker: "SPCX",  name: "SpaceX",              price: 156.11, day: "+0.98", month: "n/a",   year: "n/a",    mktcap: "$2.06T", hist: [192.5,201.8,191.82,174.90,154.60,156.11] },
    { ticker: "AVGO",  name: "Broadcom",            price: 380.15, day: "-3.06", month: "-8.2",  year: "+50.9",  mktcap: "$1.81T", hist: [411.1,417.8,414.6,414.1,422,421.9,426.6,446.8,460,481.6,479.2,418.9,385.7,396.6,392.2,372.1,385.6,382.1,393.9,376.7,392.9,411.35,392.13,380.15] },
    { ticker: "TSLA",  name: "Tesla",               price: 381.61, day: "-5.79", month: "-10.4", year: "+18.5",  mktcap: "$1.43T", hist: [404.1,417.3,417.9,426,433.6,440.4,442.1,435.8,415.9,423.7,423.7,418.5,391,409,396.7,381.6,399.2,406.4,411.2,404.7,396.38,400.49,405.05,381.61] },
    { ticker: "META",  name: "Meta Platforms",      price: 562.20, day: "-0.29", month: "-7.9",  year: "-17.6",  mktcap: "$1.43T", hist: [602.6,605.1,607.4,610.3,612.3,635.3,635.3,632.5,600.5,597.6,623,627.6,593,585.4,584.6,571,568.4,567,593.5,600.2,567.58,577.22,563.85,562.20] },
    { ticker: "BRK.B", name: "Berkshire Hathaway",  price: 492.81, day: "+0.84", month: "+1.3",  year: "+1.6",   mktcap: "$1.06T", hist: [480.5,480.9,480,486.4,483.6,479.9,477.4,474.5,470.3,471.5,475.4,478.6,488.1,487,487.8,483.7,485.8,489.3,495.5,495,491.28,489.46,488.69,492.81] },
    { ticker: "JPM",   name: "JPMorgan Chase",      price: 334.14, day: "+0.80", month: "+9.1",  year: "+21.5",  mktcap: "$895B", hist: [295.7,302,303,306.4,306.7,299.3,296.7,299.3,296.6,301,300.9,310.9,312.4,311.1,312.7,309.1,313.5,320.7,319.4,331.1,333.46,325.22,331.48,334.14] }
  ],

  /* ---------- COMMODITIES ---------- */
  /* Live, Wed Jun 24 AM — oil near a 3-month low as the US–Iran de-escalation unwinds the war-risk premium */
  commodities: [
    { name: "WTI Crude",   price: 72.59,   unit: "$/bbl",     day: "-0.84", month: "-22.7", ytd: "+18.1" },
    { name: "Brent Crude", price: 76.41,   unit: "$/bbl",     day: "-0.87", month: "-21.0", ytd: "+25.0" },
    { name: "Natural Gas", price: 3.14,    unit: "$/MMBtu",   day: "-0.12", month: "+4.4",  ytd: "-26.4" },
    { name: "Gold",        price: 4066.41, unit: "$/oz",      day: "-1.15", month: "-11.0", ytd: "-3.5" },
    { name: "Silver",      price: 61.23,   unit: "$/oz",      day: "-0.51", month: "-21.6", ytd: "-10.5" },
    { name: "Copper",      price: 6.11,    unit: "$/lb",      day: "-0.45", month: "-4.0",  ytd: "+7.6" },
    { name: "Wheat",       price: 584.28,  unit: "¢/bushel",  day: "-0.42", month: "-8.1",  ytd: "+15.3" }
  ],

  /* ---------- FINANCIAL NEWS ---------- */
  financialNews: [
    { category: "Macro", headline: "Tech-led selloff: Nasdaq sinks 2.2% Tuesday on a global chip rout",
      summary: "The Nasdaq Composite fell 2.21% to 25,587 and the S&P 500 lost 1.44%, while the Dow held roughly flat (−0.09%) as money rotated out of megacap tech; the VanEck Semiconductor ETF (SMH) tumbled 6.5% amid an Asian chip selloff and cooling AI sentiment.",
      source: "TheStreet", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-june-23-2026", date: "Jun 23, 2026" },

    { category: "Macro", headline: "US lifts Iranian oil sanctions under an interim deal; crude slides to a 3-month low",
      summary: "Treasury issued a 60-day license (through Aug 21) letting Iran sell crude and petrochemicals — potentially unfreezing ~67M barrels — and five tankers departed the Gulf of Oman; Brent fell toward $76 (WTI ~$72.6), its lowest in about three months.",
      source: "NPR", url: "https://www.npr.org/2026/06/23/nx-s1-5866621/u-s-lifts-sanctions-on-irans-oil-as-part-of-the-interim-agreement", date: "Jun 23, 2026" },

    { category: "Macro", headline: "BofA flips to calling for 75bp of Fed HIKES in 2026 as CPI hits 4.2%",
      summary: "After the June 17 hold (rates 3.50–3.75%; the 2026 dot lifted to 3.8%), BofA now expects three quarter-point hikes — September, October and December — citing a resilient labor market, a hawkish Warsh-led Fed, and May CPI at 4.2% on the oil shock.",
      source: "Fortune", url: "https://fortune.com/2026/06/22/fed-rate-hikes-outlook-sticky-inflation-kevin-warsh-job-growth-oil-prices/", date: "Jun 22, 2026" },

    { category: "Macro", headline: "Treasury yields fall on a flight to safety; ~68% odds of a September hike",
      summary: "The 10-year yield eased to ~4.48% Tuesday (from ~4.51% Monday) as the tech selloff and US–Iran de-escalation drove a safety bid, even as markets still price ~68% odds of a Fed rate hike by September.",
      source: "Federal Reserve (H.15)", url: "https://www.federalreserve.gov/releases/h15/", date: "Jun 23, 2026" },

    { category: "Earnings", headline: "FedEx beats on Q4 but a soft FY27 outlook sinks the stock ~6%",
      summary: "FedEx posted adjusted Q4 EPS of $6.31 (vs ~$5.92 est) on revenue of $25.0B, but guided FY2027 EPS to just $16.90–$18.10 (vs ~$19.86 consensus); shares fell ~6% after hours. It completed the Freight spin-off (a $4.1B dividend) and topped $1B in structural savings.",
      source: "Investing.com", url: "https://www.investing.com/news/stock-market-news/fedex-falls-4-as-fy2027-profit-forecast-misses-expectations-despite-q4-beat-4756490", date: "Jun 23, 2026" },

    { category: "Earnings", headline: "Micron reports after the close — record HBM margins in focus",
      summary: "Consensus sees fiscal Q3 revenue ~$34.5B and EPS ~$19.7 (with a record ~81% gross margin) as 2026 HBM capacity is reportedly sold out; the stock fell ~9% in Tuesday's premarket on the AI pullback even as BofA raised its target to $1,500.",
      source: "AlphaStreet", url: "https://news.alphastreet.com/micron-technology-q3-2026-earnings-preview-june-24-street-expects-19-72-eps/", date: "Jun 24, 2026" },

    { category: "M&A", headline: "Fox to acquire Roku for ~$22B in a landmark connected-TV deal",
      summary: "Roku holders get $160/share ($96 cash + 0.9693 Fox Class A shares), a ~$22B enterprise value and a 34% premium; Fox secured a $12B loan for the cash portion and targets ~$400M of synergies, closing 1H 2027.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/15/fox-to-buy-roku.html", date: "Jun 15, 2026" },

    { category: "M&A", headline: "Olin and Huntsman to merge — a ~$12B+ North American chemicals leader",
      summary: "An all-stock merger of equals (~$12.5B combined 2025 revenue): Huntsman holders receive 0.5476 Olin shares each, leaving Olin holders ~54.5% and Huntsman ~45.5%, targeting $400M+ in synergies.",
      source: "PR Newswire", url: "https://www.prnewswire.com/news-releases/olin-and-huntsman-announce-transformative-merger-of-equals-to-create-a-12-billion-integrated-north-american-chemicals-leader-302801469.html", date: "Jun 16, 2026" },

    { category: "M&A", headline: "Nuvei to acquire Payoneer for ~$2.75B",
      summary: "Payments group Nuvei agreed to buy cross-border platform Payoneer Global at $7.40/share (~$2.75B equity value), combining payment acceptance with Payoneer's cross-border payouts; close expected mid-2027.",
      source: "PR Newswire", url: "https://www.prnewswire.com/news-releases/nuvei-to-acquire-payoneer-for-2-75-billion-creating-a-leading-global-platform-for-local-and-cross-border-commerce-302800166.html", date: "Jun 15, 2026" },

    { category: "M&A", headline: "Altaris to take Simulations Plus private for ~$375M",
      summary: "PE firm Altaris agreed to acquire life-sciences modeling-software maker Simulations Plus for $18.50/share (~$375M) in cash — a 26% premium to the 60-day VWAP — combining it with portfolio company Chemical Computing Group.",
      source: "Business Wire", url: "https://www.businesswire.com/news/home/20260616126655/en/Simulations-Plus-to-Be-Acquired-by-Altaris-For-Approximately-$375-Million", date: "Jun 16, 2026" },

    { category: "IPO", headline: "Doncasters sets a ~$700M NYSE IPO, expected to price near the top",
      summary: "The UK aerospace superalloy-parts maker is offering 23.33M shares at $28–32 (~$4.2–4.4B market cap) for a June 25 NYSE debut under 'DPC'; Qatar's QIA agreed to a $75M private placement, with Jefferies and Morgan Stanley leading.",
      source: "Investing.com", url: "https://www.investing.com/news/stock-market-news/doncasters-group-ipo-expected-to-price-at-top-of-range-93CH-4756079", date: "Jun 22, 2026" },

    { category: "IPO", headline: "SpaceX stays volatile after its record debut",
      summary: "After the largest IPO ever (priced $135, opened $160.95 on June 12, +19%), SPCX fell ~16% on Monday for a third straight decline before steadying around $156 on Tuesday (52-week range $135–$225.64).",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/15/spacex-stock-record-ipo-debut.html", date: "Jun 23, 2026" },

    { category: "Capital Markets", headline: "Nvidia prices a record $25B bond — its largest-ever debt deal",
      summary: "Nvidia sold $25B across seven tranches (its first high-grade issuance since 2021, upsized on ~$85B of orders) to fund AI-infrastructure buildout, with the 30-year tranche pricing at just 65bp over Treasuries.",
      source: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-06-15/nvidia-kicks-off-first-high-grade-bond-offering-since-2021", date: "Jun 15, 2026" },

    { category: "Capital Markets", headline: "Quiet IG primary: ~$27B priced amid geopolitical headwinds",
      summary: "Investment-grade issuance ran ~$27B on a lighter calendar with orderbooks ~3.5x covered and concessions averaging just 1.7bps; 2026 gross IG supply is tracking ~$2.46T (+11.8% y/y, Barclays), including $300B+ of AI/data-center debt.",
      source: "PitchBook", url: "https://pitchbook.com/news/reports/june-18-2026-us-high-yield-bond-weekly-wrap", date: "Jun 18, 2026" },

    { category: "Earnings", headline: "Accenture beats and narrows guidance: revenue +6% to $18.7B",
      summary: "Accenture posted fiscal Q3 revenue of $18.7B (+6%) and EPS of $3.80 with a 17.0% operating margin — a closely-watched read on enterprise IT and AI-services demand.",
      source: "Accenture", url: "https://newsroom.accenture.com/content/3qfy26-earnings/accenture-reports-third-quarter-fiscal-2026-results.pdf", date: "Jun 18, 2026" },

    { category: "Macro", headline: "ECB–BoE divergence: ECB hikes to 2.25%, BoE holds at 3.75%",
      summary: "The ECB lifted its deposit rate 25bp to 2.25% on June 11 (first hike since 2023), citing Middle East-driven inflation, while the Bank of England held at 3.75% on June 17 on a 7–2 vote (two dissenters wanted a hike).",
      source: "ING", url: "https://think.ing.com/articles/ecb-after-press-conference-jun26-meeting/", date: "Jun 11, 2026" }
  ],

  /* ---------- VENTURE CAPITAL (GCC-weighted + big global) ---------- */
  ventureCapital: [
    { region: "GCC", headline: "CargoX (UAE) raises a $250M growth round led by BlueFive Capital",
      summary: "Autonomous-logistics player CargoX (led by ex-Talabat CEO Tomaso Rodriguez) raised $250M led by BlueFive Capital to scale last-, middle- and long-haul autonomous freight — one of the region's largest growth rounds of 2026.",
      source: "Arab News", url: "https://www.arabnews.com/node/2646163/business-economy", date: "Jun 2026" },

    { region: "GCC", headline: "CNTXT AI (UAE) raises a $60M Series A for sovereign AI infrastructure",
      summary: "UAE data-and-AI firm CNTXT AI closed a $60M Series A co-led by Abu Dhabi's AI71 and BlueFive Capital to deploy secure AI infrastructure for enterprise and government clients — the anchor deal in the latest MENA weekly wrap.",
      source: "Arab News", url: "https://www.arabnews.com/node/2647977/business-economy", date: "Jun 20, 2026" },

    { region: "GCC", headline: "Uber buys 12.5% of Careem Technologies for $100M",
      summary: "Uber acquired a 12.5% stake in Careem Technologies from e&, cutting e&'s ownership from 50.03% to 37.53% — a notable regional strategic recap as Careem's super-app arm is carved out.",
      source: "Arab News", url: "https://www.arabnews.com/node/2646163/business-economy", date: "Jun 2026" },

    { region: "GCC", headline: "du Ventures (UAE) launches a $50M corporate VC fund, managed by Shorooq",
      summary: "UAE telco du stood up a $50M corporate-venture fund — managed by Shorooq Partners — to back fintech, AI, cybersecurity, cloud, gaming and enterprise software across the UAE and the wider region.",
      source: "Arab News", url: "https://www.arabnews.com/node/2646163/business-economy", date: "Jun 2026" },

    { region: "GCC", headline: "Saudi Venture Capital backs Khwarizmi VC Fund 2",
      summary: "SVC committed (via its Investment in Funds program) to Khwarizmi Venture Capital Fund 2, a seed–Series A vehicle targeting GCC tech with ≥50% of capital earmarked for Saudi startups in fintech, e-commerce and applied AI.",
      source: "Wamda", url: "https://www.wamda.com/2026/06/saudi-venture-capital-backs-khwarizmi-venture-capital-fund-2", date: "Jun 10, 2026" },

    { region: "GCC", headline: "Sovra (MENA fintech) raises $2M+ pre-seed led by Pharsalus Capital",
      summary: "Digital-dollar fintech Sovra raised more than $2M in pre-seed led by Pharsalus Capital with regional and international angels; it lets users hold digital dollars, earn yield and pay via Visa/Mastercard.",
      source: "Arab News", url: "https://www.arabnews.com/node/2647977/business-economy", date: "Jun 20, 2026" },

    { region: "GCC", headline: "Jordan's ISSF commits $7M to Endeavor Catalyst V",
      summary: "Jordan's Innovative Startups and SMEs Fund committed $7M to Endeavor Catalyst's latest co-investment vehicle (Endeavor's $300M+ global fund), deepening the region's tie into global growth-stage co-investment.",
      source: "Arab News", url: "https://www.arabnews.com/node/2647977/business-economy", date: "Jun 20, 2026" },

    { region: "GCC", headline: "Pickappo (Saudi Arabia) raises $530K pre-seed for logistics tech",
      summary: "Saudi last-mile logistics platform Pickappo secured $530K in pre-seed from an angel investor and an investment fund to build out its delivery network.",
      source: "Arab News", url: "https://www.arabnews.com/node/2647977/business-economy", date: "Jun 20, 2026" },

    { region: "Global", headline: "Cadence raises $100M Series C at a ~$1.23B valuation",
      summary: "Clinical-AI chronic-care company Cadence closed a $100M Series C led by Spark Capital (with Thrive, General Catalyst, Coatue and B Capital), reaching a ~$1.23B valuation while serving 100k+ patients across 20+ health systems.",
      source: "Business Wire", url: "https://www.businesswire.com/news/home/20260623072271/en/Cadence-Raises-$100M-Series-C-Led-by-Spark-Capital-to-Automate-Chronic-Care", date: "Jun 23, 2026" },

    { region: "Global", headline: "Odyssey raises a $310M Series B at a $1.45B valuation",
      summary: "AI 'world-model' startup Odyssey raised $310M led by Natural Capital (with Amazon, AMD Ventures, EQT and Google Ventures) — the biggest venture round of the week — at a $1.45B valuation.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-cybersecurity-defense-startup-ai-odyssey-leads/", date: "Jun 2026" },

    { region: "Global", headline: "Ent.AI emerges from stealth with a $100M seed",
      summary: "AI-era cybersecurity-workspace startup Ent.AI launched with a $100M seed led by Decibel Partners, with Sequoia and IQT participating — an unusually large seed underscoring continued AI-security appetite.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-cybersecurity-defense-startup-ai-odyssey-leads/", date: "Jun 2026" },

    { region: "Global", headline: "Anthropic raises ~$65B at a ~$965B valuation",
      summary: "AI lab Anthropic raised a record ~$65B (Altimeter, Dragoneer, Greenoaks, Sequoia, Capital Group, Coatue, D1) at a ~$965B valuation — briefly the most valuable standalone AI startup.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/", date: "Jun 2026" }
  ],

  /* ---------- LEBANON ECONOMY ---------- */
  lebanonEconomy: [
    { label: "Lira / USD",         value: "~89,500",     sub: "Official band 85,500–89,500; parallel converged ~89,600 (Jun 2026)" },
    { label: "Inflation (y/y)",    value: "~19%",        sub: "May 2026 — eased from 20% in April" },
    { label: "BdL FX Reserves",    value: "~$11.63B",    sub: "Mid-June 2026 (+$185M in early June; excludes gold)" },
    { label: "Eurobonds",          value: "~26¢",        sub: "BLOM Bond Index 26.33 (week of Jun 18); in default since 2020" },
    { label: "IMF Program",        value: "Stalled",     sub: "No new program; gated on the bank-resolution & Gap laws" },
    { label: "Reconstruction",     value: "~$11B",       sub: "World Bank estimate (total war cost ~$14B)" },
    { label: "GDP Growth",         value: "+4.2% (2025)", sub: "World Bank revised up Jun 11; 2026 forecast withheld on war uncertainty" },
    { label: "Bank-System Losses", value: "~$80B",       sub: "Dec 2025 draft Gap Law (supersedes the old ~$72B); still unratified" }
  ],

  /* ---------- GEOPOLITICAL MAP (today's hotspots) ---------- */
  mapPoints: [
    { place: "Washington",        lat: 38.90, lng: -77.04, weight: 3, region: "US",          label: "Lebanon–Israel 5th round runs at the State Dept through Jun 25; 'pilot-zone' Israeli withdrawal on the table" },
    { place: "Beirut",            lat: 33.89, lng: 35.50,  weight: 3, region: "Lebanon",     label: "Ceasefire holding loosely; a Jun 23 Israeli strike near Nabatieh killed 2, which Hezbollah called a violation" },
    { place: "South Lebanon",     lat: 33.27, lng: 35.20,  weight: 2, region: "Lebanon",     label: "Strikes south of the Litani remain the flashpoint that nearly derailed the Iran deal" },
    { place: "Tehran",            lat: 35.69, lng: 51.39,  weight: 3, region: "Iran",        label: "A 60-day clock to a final nuclear deal; Iran says it 'did not negotiate' its nuclear program" },
    { place: "Strait of Hormuz",  lat: 26.57, lng: 56.25,  weight: 3, region: "Gulf",        label: "Reopened toll-free under the MoU; transit recovering but contested after Iran's Jun 20 closure threat" },
    { place: "Gulf of Oman",      lat: 24.50, lng: 58.50,  weight: 2, region: "Gulf",        label: "Tankers of Iranian crude departing after the US lifted oil sanctions (a 60-day license)" },
    { place: "Doha",              lat: 25.29, lng: 51.53,  weight: 2, region: "Gulf",        label: "Qatar co-mediates (with Pakistan) the US–Iran track and a Lebanon de-confliction cell" },
    { place: "Abu Dhabi",         lat: 24.45, lng: 54.38,  weight: 1, region: "Gulf",        label: "UAE deal flow stays strong — CargoX raises $250M; du launches a $50M VC fund" },
    { place: "Damascus",          lat: 33.51, lng: 36.29,  weight: 1, region: "Syria",       label: "A US-brokered Syria–Israel security deal reported near finalization (reviving the 1974 disengagement)" },
    { place: "Gaza",              lat: 31.50, lng: 34.47,  weight: 1, region: "Israel-Gaza", label: "The Oct-2025 truce holds but ~1,000 have been killed since; the humanitarian crisis deepens" }
  ],
  mapArcs: [
    { from: [38.90, -77.04], to: [33.89, 35.50] },
    { from: [38.90, -77.04], to: [35.69, 51.39] },
    { from: [35.69, 51.39],  to: [26.57, 56.25] },
    { from: [25.29, 51.53],  to: [33.89, 35.50] },
    { from: [35.69, 51.39],  to: [33.89, 35.50] }
  ],

  /* ---------- POLITICS ---------- */
  politics: {

    middleEast: [
      { region: "Lebanon", headline: "Israel strikes a Hezbollah cell near Nabatieh, killing 2; Hezbollah calls it a ceasefire violation",
        summary: "Despite the truce that took hold June 19, the IDF said on June 23 it struck an 'active Hezbollah cell' on the Ali al-Taher ridge near Nabatieh; Lebanese state media reported 2 killed. Hezbollah called it a 'clear violation' — the ceasefire is holding only loosely and continues to fray at the edges.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/19/israel-continues-attacks-on-lebanon-despite-agreeing-to-ceasefire", date: "Jun 23, 2026" },

      { region: "Lebanon", headline: "5th round of Lebanon–Israel talks opens in Washington; Israel presents 'pilot-zone' maps",
        summary: "The fifth round began at the State Department (security and political tracks over three days, Secretary Rubio overseeing). Israel presented maps for a 'model/pilot zone' — partly south of the Litani — from which its forces would withdraw as the Lebanese Army deploys under US supervision. No final agreement emerged from the June 23 session.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/23/what-israeli-and-lebanese-officials-are-saying-before-washington-talks", date: "Jun 23, 2026" },

      { region: "Lebanon", headline: "War toll has passed 4,000 dead; more than a million displaced",
        summary: "Lebanon's Health Ministry's last firm count (Jun 20) was 4,057 killed and 12,121 wounded since the war reignited March 2, with over a million displaced; sporadic strikes since the ceasefire mean the toll is still edging up.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/20/us-envoy-headed-for-switzerland-israeli-strikes-on-lebanon-threaten-talks", date: "Jun 20, 2026" },

      { region: "Lebanon", headline: "Reconstruction ~$11B as IMF talks stay stalled",
        summary: "Lebanon's recovery needs are pegged near $11B (the World Bank puts the total conflict cost at ~$14B). IMF negotiations remain stalled, with passage of the Banking Sector Recovery Law and amended bank-secrecy legislation seen as essential to unlock a deal; frozen deposits are still estimated near $82B.",
        source: "World Bank", url: "https://www.worldbank.org/ext/en/country/lebanon", date: "Jun 2026" },

      { region: "Iran", headline: "US Treasury issues a 60-day waiver lifting Iran oil sanctions",
        summary: "Treasury issued a broad 60-day authorization (through Aug 21) permitting the sale of Iranian crude and petrochemicals in dollars — potentially unfreezing ~67M barrels of stranded crude — fulfilling a condition of the June 17 MoU. Iran says it 'did not negotiate' its nuclear program, committing only to readmit IAEA inspectors.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/22/us-partially-lifts-iran-oil-sanctions-amid-encouraging-talks", date: "Jun 23, 2026" },

      { region: "Gulf", headline: "Strait of Hormuz transit recovering but contested; toll-free for 60 days",
        summary: "Under the MoU, Iran agreed to toll-free Hormuz transit for 60 days (and to clear mines within 30). Traffic remains below the prewar ~100+ ships/day and the status is contested — the IRGC re-declared closure June 20 over the Lebanon strikes — but CENTCOM and AIS data showed vessels still flowing (20 tankers transited June 19).",
        source: "CNBC", url: "https://www.cnbc.com/2026/06/19/iran-oil-tanker-traffic-strait-hormuz-gulf-vlcc.html", date: "Jun 23, 2026" },

      { region: "Israel-Gaza", headline: "Gaza truce holds but the humanitarian crisis persists; ~1,000 killed since",
        summary: "At a UN Security Council briefing, officials warned Gazans remain 'trapped in a humanitarian nightmare' — no hospital fully operational (WHO) and water a daily uncertainty for 1.1M children (UNICEF). Roughly 1,000 Palestinians have been killed since the ceasefire began.",
        source: "UN Press", url: "https://press.un.org/en/2026/sc16390.doc.htm", date: "Jun 2026" },

      { region: "Syria", headline: "Syria–Israel security deal reported near finalization",
        summary: "A US-brokered security deal between the al-Sharaa government and Israel is reported to be advancing — centered on reactivating the 1974 Disengagement Agreement and an Israeli pullback to pre-Dec 2024 lines, with a joint dispute-resolution mechanism. Damascus says it will not join the Abraham Accords absent guarantees on its territorial integrity.",
        source: "Kurdistan24", url: "https://www.kurdistan24.net/en/story/889716/israel-syria-move-toward-us-brokered-security-deal-diplomatic-ties", date: "Jun 2026" }
    ],

    us: [
      { headline: "Trump signs the interim Iran deal and waives oil sanctions — touting a win amid '14-point' criticism",
        summary: "Trump signed the agreement (Iran to dilute its highly-enriched-uranium stockpile) while waiving US oil sanctions, immediately letting Iran sell crude; VP Vance defended it, saying Treasury can waive sanctions without Congress. Critics across both parties panned the terms.",
        source: "PBS NewsHour", url: "https://www.pbs.org/newshour/world/israel-and-hezbollah-renew-ceasefire-after-u-s-and-iran-call-off-talks-over-fighting-in-lebanon", date: "Jun 23, 2026" },

      { headline: "Senate passes the Iran War Powers Resolution 50–48 — now cleared both chambers",
        summary: "The Senate adopted the resolution Tuesday directing Trump to remove US forces from hostilities with Iran, with four Republicans (Cassidy, Collins, Paul, Murkowski) joining most Democrats — a bipartisan rebuke that follows the House's 215–208 vote. Senator Cotton warned the oil relief hands Iran '$150–200M per day.'",
        source: "The Hill", url: "https://thehill.com/homenews/senate/5929430-trump-iran-deal-republican-backlash/", date: "Jun 23, 2026" },

      { headline: "BofA flips to calling for 75bp of Fed HIKES in 2026 as CPI hits 4.2%",
        summary: "Following the June 17 hold (rates 3.50–3.75%; the 2026 dot lifted to 3.8%), BofA now expects three quarter-point hikes — September, October and December — citing labor-market resilience and the hawkish Warsh-led Fed, with May CPI at 4.2% and 2026 PCE revised to 3.6%.",
        source: "Fortune", url: "https://fortune.com/2026/06/22/fed-rate-hikes-outlook-sticky-inflation-kevin-warsh-job-growth-oil-prices/", date: "Jun 22, 2026" },

      { headline: "Supreme Court rules Falun Gong members can't sue Cisco; blockbusters still pending",
        summary: "On June 23 the Court ruled in Cisco Systems v. Doe that Falun Gong members cannot sue Cisco over alleged complicity in their persecution. The marquee decisions — birthright citizenship, transgender sports, and whether the President can fire a Fed governor — remain pending as the term nears its ~June 30 close.",
        source: "SCOTUSblog", url: "https://www.scotusblog.com/2026/06/key-takeaways-from-a-jam-packed-order-list/", date: "Jun 23, 2026" },

      { headline: "Wall Street sells off as de-escalation and a hawkish Fed collide",
        summary: "US stocks fell for a second day (S&P −1.4%, Nasdaq −2.2% Tuesday) as easing Middle East risk pulled oil and energy lower while the hawkish-Fed repricing hit megacap tech; the dollar firmed and gold slid, with Friday's PCE print the next big test.",
        source: "TheStreet", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-june-23-2026", date: "Jun 23, 2026" }
    ]
  },

  /* ---------- SOURCES (footer credits) ---------- */
  sources: [
    { name: "Trading Economics", url: "https://tradingeconomics.com/" },
    { name: "stockanalysis.com", url: "https://stockanalysis.com/" },
    { name: "CNBC",              url: "https://www.cnbc.com/" },
    { name: "Al Jazeera",        url: "https://www.aljazeera.com/" },
    { name: "NPR",               url: "https://www.npr.org/" },
    { name: "The Hill",          url: "https://thehill.com/" },
    { name: "Arab News",         url: "https://www.arabnews.com/" },
    { name: "Crunchbase News",   url: "https://news.crunchbase.com/" }
  ]
};

/* ============================================================
   DAILY BRIEFING — DATA FILE
   ------------------------------------------------------------
   This file holds everything your dashboard displays.
   It is regenerated each time you run  /update-news  in Claude Code.
   You normally never edit this by hand.

   Last generated: June 18, 2026
   ============================================================ */

window.DASHBOARD_DATA = {

  dateLabel: "Thursday, June 18, 2026",
  lastUpdated: "June 18, 2026",
  asOfNote: "Stocks, indices & regional markets: Wed Jun 17 close · commodities, FX, rates & crypto: Jun 18 · US markets are closed Fri Jun 19 (Juneteenth).",
  drivingStory: "Markets sold off on a hawkish surprise from the Fed. In Kevin Warsh's debut, the FOMC held at 3.50–3.75% (12–0) but its new dot plot now signals a rate HIKE in 2026 — not the cuts markets expected — and Warsh scrapped forward guidance. The S&P fell 1.2% and the 2-year yield jumped ~16bp. Oil kept sliding (WTI ~$75) ahead of Friday's US–Iran signing in Geneva.",

  /* Short labels for the most recent trading sessions (oldest → newest), used as the index-chart x-axis & hover dates. NYSE calendar; ends at the latest US close. */
  histDates: ["May 18","May 19","May 20","May 21","May 22","May 26","May 27","May 28","May 29","Jun 1","Jun 2","Jun 3","Jun 4","Jun 5","Jun 8","Jun 9","Jun 10","Jun 11","Jun 12","Jun 15","Jun 16","Jun 17"],

  /* ---------- MARKETS ---------- */
  markets: {

    indices: [
      { name: "S&P 500",          level: 7420.10,  day: "-1.21", month: "+0.23", ytd: "+8.39", hist: [7354,7433,7446,7473,7519,7520,7564,7580,7600,7610,7554,7584,7384,7406,7387,7267,7394,7431,7554,7511,7420] },
      { name: "Nasdaq Composite", level: 26021.66, day: "-1.34", month: "+0.58", ytd: "+11.96", hist: [25871,26270,26293,26344,26656,26675,26917,26973,27087,27094,26854,26831,25709,25930,25679,25170,25810,25889,26684,26376,26022] },
      { name: "Nasdaq 100",       level: 29670.95, day: "-0.99", month: "+2.33", ytd: "+17.51", note: "The tech-heavy 100 largest non-financials." },
      { name: "Dow Jones",        level: 51492.55, day: "-0.98", month: "+4.31", ytd: "+7.13", hist: [49364,50009,50286,50580,50462,50644,50669,51032,51079,51308,50687,51562,50867,50786,50872,49919,50849,51202,51671,52000,51493] },
      { name: "Russell 2000",     level: 2917.98,  day: "-0.72", month: "+5.15", ytd: "+17.57", hist: [2747,2817,2843,2869,2921,2920,2937,2919,2906,2932,2894,2935,2834,2855,2867,2835,2921,2944,2965,2939,2918] },
      { name: "STOXX Europe 600", level: 639.31,   day: "+0.52", month: "+4.78", ytd: "+7.99", hist: [621,625,632,628,628,625,626,621,625,621,624,623,622,619,619,618,622,633,634,636,637,639] },
      { name: "FTSE 100",         level: 10504.00, day: "+0.10", month: "+1.75", ytd: "+5.77", hist: [10432,10443,10466,10491,10505,10426,10409,10339,10374,10332,10360,10368,10373,10227,10255,10304,10472,10431,10494,10478,10504] },
      { name: "Nikkei 225",       level: 69902.25, day: "+0.72", month: "+14.94", ytd: "+38.86", note: "Near record highs. Some data sites misreport YTD ~+80% (a base-date error) — true YTD is ~+39%.", hist: [64996,64999,64693,66330,66310,66934,66734,68402,67471,66588,63792,64025,65417,64179,64217,66020,68463,69318,68755,69980,69902] },
      { name: "Hang Seng",        level: 24312.16, day: "-1.70", month: "-5.31", ytd: "-5.14", hist: [25651,25387,25606,25599,25328,25006,25182,25398,26038,25633,25253,24962,24657,24566,24408,24249,24718,24843,24494,24312,24312] }
    ],

    rates: [
      { name: "US 10-Year Treasury", value: "4.45%",      change: "rose post-FOMC (~4.49% Jun 17 close)" },
      { name: "US 2-Year Treasury",  value: "4.17%",      change: "+0.14 pp on the hawkish dot plot" },
      { name: "Fed Funds (target)",  value: "3.50–3.75%", change: "Held 12–0; dots now signal a 2026 HIKE" }
    ],

    fx: [
      { name: "EUR/USD",            value: "1.1519", day: "+0.15" },
      { name: "USD/JPY",            value: "160.60", day: "-0.03" },
      { name: "GBP/USD",            value: "1.3310", day: "+0.13" },
      { name: "Dollar Index (DXY)", value: "100.27", day: "-0.13" }
    ],

    crypto: [
      { name: "Bitcoin",  price: 63915, day: "-2.8", month: "+16.9", year: "+39.3" },
      { name: "Ethereum", price: 1729,  day: "-3.5", month: "+18.9", year: "+31.6" }
    ]
  },

  /* ---------- REGIONAL MARKETS (GCC & Egypt) ---------- */
  regionalMarkets: [
    { name: "Saudi · TASI",        level: 11114.90, day: "-0.27", month: "+1.00", ytd: "+5.95" },
    { name: "Abu Dhabi · ADX",     level: 9996.20,  day: "+0.33", month: "+4.55", ytd: "+0.03" },
    { name: "Dubai · DFM",         level: 6115.97,  day: "+1.01", month: "+6.00", ytd: "+1.16" },
    { name: "Qatar · QE",          level: 10575.50, day: "+0.23", month: "+1.96", ytd: "-1.73" },
    { name: "Kuwait · All-Share",  level: 8814.22,  day: "-0.25", month: "+1.53", ytd: "-1.05" },
    { name: "Bahrain · All-Share", level: 2000.23,  day: "+0.42", month: "+4.19", ytd: "-3.21" },
    { name: "Oman · MSX 30",       level: 7633.50,  day: "+0.20", month: "-2.15", ytd: "+30.11" },
    { name: "Egypt · EGX 30",      level: 52621.84, day: "+1.10", month: "+1.18", ytd: "+25.80" }
  ],

  /* ---------- WEEK AHEAD (scheduled catalysts) ---------- */
  weekAhead: [
    { date: "Thu Jun 18", category: "Central Bank", event: "Bank of England rate decision", detail: "Noon London; consensus is a hold at 3.75% (all 65 economists in the Reuters poll), but a split vote with building hike risk." },
    { date: "Fri Jun 19", category: "Geopolitics", event: "US–Iran deal signing, Geneva", detail: "Formal signing of the war-ending / Strait of Hormuz deal. Lebanon clause is disputed — Israel says it isn't bound." },
    { date: "Fri Jun 19", category: "Econ", event: "US markets closed — Juneteenth", detail: "NYSE, Nasdaq and the bond market are shut for the holiday." },
    { date: "Mon Jun 22", category: "Central Bank", event: "China PBoC Loan Prime Rate", detail: "1-year and 5-year LPR settings." },
    { date: "Mon Jun 22", category: "Geopolitics", event: "Lebanon–Israel talks (week of)", detail: "Indirect talks tied to the US–Iran deal's Lebanon component; exact day uncertain." },
    { date: "Tue Jun 23", category: "Econ", event: "Global flash PMIs (US, Eurozone, UK)", detail: "S&P Global flash manufacturing & services — the week's first big activity read." },
    { date: "Tue Jun 23", category: "Earnings", event: "FedEx Q4 (after close)", detail: "Bellwether for global shipping and freight demand." },
    { date: "Wed Jun 24", category: "Earnings", event: "Micron FQ3 (after close)", detail: "Key AI / HBM-memory demand gauge." },
    { date: "Wed Jun 24", category: "Earnings", event: "Paychex & General Mills", detail: "SMB payrolls read-through (Paychex, pre-open) and a consumer-staples check." },
    { date: "Thu Jun 25", category: "Econ", event: "US final Q1 GDP, durable goods, jobless claims", detail: "Growth confirmation, a capex signal and a high-frequency labor read." },
    { date: "Fri Jun 26", category: "Econ", event: "US PCE inflation (May)", detail: "The Fed's preferred inflation gauge — the week's marquee data point after the hawkish dot plot." },
    { date: "Tue Jun 30", category: "Earnings", event: "Nike Q4 + US consumer confidence", detail: "Nike after the close; Conference Board confidence at 10am ET." }
  ],

  /* ---------- BIG STOCKS (largest by market cap) ---------- */
  /* Price & 1-day = Wed Jun 17 close · 1M / 1Y = trailing price return */
  stocks: [
    { ticker: "NVDA",  name: "Nvidia",              price: 204.65, day: "-1.33", month: "-7.95",  year: "+41.4",  mktcap: "$4.96T", hist: [220.6,223.5,219.5,215.3,214.9,212.6,214.3,211.1,224.4,222.8,214.8,218.7,205.1,208.6,208.2,200.4,204.9,205.2,212.5,207.4,204.65] },
    { ticker: "GOOGL", name: "Alphabet",            price: 363.79, day: "-2.55", month: "-8.35",  year: "+105.8", mktcap: "$4.44T", hist: [387.7,388.9,387.7,383,388.9,388.8,390.1,380.3,376.4,361.9,359,372.2,368.5,363.3,364.3,356.4,357.8,359.7,369.4,373.3,363.79] },
    { ticker: "AAPL",  name: "Apple",               price: 295.95, day: "-1.09", month: "-0.63",  year: "+49.2",  mktcap: "$4.35T", hist: [299,302.3,305,308.8,308.3,310.9,312.5,312.1,306.3,315.2,310.3,311.2,307.3,301.5,290.6,291.6,295.6,291.1,296.4,299.2,295.95] },
    { ticker: "MSFT",  name: "Microsoft",           price: 378.91, day: "-3.78", month: "-10.54", year: "-18.0",  mktcap: "$2.81T", hist: [417.4,421.1,419.1,418.6,416,412.7,427,450.2,460.5,441.3,427.3,428.1,416.7,411.7,403.4,397.4,390.3,390.7,399.8,393.8,378.91] },
    { ticker: "AMZN",  name: "Amazon",              price: 237.50, day: "-3.46", month: "-10.33", year: "+9.9",   mktcap: "$2.55T", hist: [259.3,265,268.5,266.3,265.3,271.9,274,270.6,261.3,256.5,250,253.8,246,245.2,244.2,238,241.5,238.6,246,246,237.5] },
    { ticker: "SPCX",  name: "SpaceX",              price: 191.82, day: "-4.95", month: "n/a",    year: "n/a",    mktcap: "$2.53T", hist: [192.5,201.8,191.82] },
    { ticker: "AVGO",  name: "Broadcom",            price: 392.90, day: "+4.30", month: "-6.61",  year: "+55.9",  mktcap: "$1.87T", hist: [411.1,417.8,414.6,414.1,422,421.9,426.6,446.8,460,481.6,479.2,418.9,385.7,396.6,392.2,372.1,385.6,382.1,393.9,376.7,392.9] },
    { ticker: "TSLA",  name: "Tesla",               price: 396.38, day: "-2.06", month: "-3.32",  year: "+20.4",  mktcap: "$1.49T", hist: [404.1,417.3,417.9,426,433.6,440.4,442.1,435.8,415.9,423.7,423.7,418.5,391,409,396.7,381.6,399.2,406.4,411.2,404.7,396.38] },
    { ticker: "META",  name: "Meta Platforms",      price: 567.58, day: "-5.43", month: "-7.14",  year: "-19.2",  mktcap: "$1.44T", hist: [602.6,605.1,607.4,610.3,612.3,635.3,635.3,632.5,600.5,597.6,623,627.6,593,585.4,584.6,571,568.4,567,593.5,600.2,567.58] },
    { ticker: "BRK.B", name: "Berkshire Hathaway",  price: 491.28, day: "-0.75", month: "+0.59",  year: "+0.2",   mktcap: "$1.06T", hist: [480.5,480.9,480,486.4,483.6,479.9,477.4,474.5,470.3,471.5,475.4,478.6,488.1,487,487.8,483.7,485.8,489.3,495.5,495,491.28] },
    { ticker: "JPM",   name: "JPMorgan Chase",      price: 333.46, day: "+0.71", month: "+10.88", year: "+23.3",  mktcap: "$890B", hist: [295.7,302,303,306.4,306.7,299.3,296.7,299.3,296.6,301,300.9,310.9,312.4,311.1,312.7,309.1,313.5,320.7,319.4,331.1,333.46] }
  ],

  /* ---------- COMMODITIES ---------- */
  commodities: [
    { name: "WTI Crude",   price: 74.69,   unit: "$/bbl",     day: "-2.73", month: "-2.95", ytd: "+29.78" },
    { name: "Brent Crude", price: 77.72,   unit: "$/bbl",     day: "-2.30", month: "-2.50", ytd: "+27.72" },
    { name: "Natural Gas", price: 3.14,    unit: "$/MMBtu",   day: "-0.30", month: "-1.22", ytd: "-13.01" },
    { name: "Gold",        price: 4319.90, unit: "$/oz",      day: "+1.50", month: "-3.74", ytd: "-0.06" },
    { name: "Silver",      price: 69.05,   unit: "$/oz",      day: "+1.85", month: "-6.10", ytd: "-1.82" },
    { name: "Copper",      price: 6.37,    unit: "$/lb",      day: "-1.68", month: "+1.09", ytd: "+12.36" },
    { name: "Wheat",       price: 611.50,  unit: "¢/bushel",  day: "0.00",  month: "-7.98", ytd: "+20.61" }
  ],

  /* ---------- FINANCIAL NEWS ---------- */
  financialNews: [
    { category: "Macro", headline: "Fed holds, but the dot plot flips to a 2026 HIKE in Warsh's debut",
      summary: "The FOMC voted 12–0 to hold at 3.50–3.75% for a fourth straight meeting, but its new projections shocked markets: 9 of 18 members now see at least one HIKE before year-end (median end-2026 rate 3.8%, up from 3.4%), with PCE inflation marked up to 3.6%. Cuts are effectively off the table for 2026.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/17/fed-interest-rate-decision-june-2026.html", date: "Jun 17, 2026" },

    { category: "Macro", headline: "Warsh scraps forward guidance and declines to submit his own dot",
      summary: "New Chair Kevin Warsh slashed the FOMC statement to ~130 words (from 341), dropped all easing-bias language, and declined to submit a rate projection — flagging a year-end review of Fed communications and stressing 'price stability' throughout the press conference.",
      source: "NPR", url: "https://www.npr.org/2026/06/17/nx-s1-5860084/fed-chief-warsh-first-fomc-meeting", date: "Jun 17, 2026" },

    { category: "Macro", headline: "Stocks sell off on the hawkish Fed; 2-year yield jumps ~16bp",
      summary: "Equities reversed an intraday record to close lower — S&P 500 -1.21% to 7,420, Dow -507 pts, Nasdaq -1.34% — while Treasuries sold off hard, the 2-year yield spiking ~16bp to ~4.17% as markets repriced to the steeper dot plot.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/17/stock-market-today-live-updates.html", date: "Jun 17, 2026" },

    { category: "Macro", headline: "Bank of England expected to hold at 3.75% on a split vote",
      summary: "The MPC is ~96% priced to hold Bank Rate at 3.75% (decision noon BST today), but the committee is split — Pill and Greene have signaled votes for an immediate hike — with markets seeing hike risk building from July.",
      source: "Bank of England / Reuters", url: "https://www.bankofengland.co.uk/monetary-policy/upcoming-mpc-dates", date: "Jun 18, 2026" },

    { category: "Macro", headline: "Oil slides toward $78 on US–Iran truce; IEA flags a glut",
      summary: "Brent fell for a fifth straight session toward $78 (lowest since March) on expectations the US–Iran deal reopens Iranian exports and the Strait of Hormuz; the IEA warned of a looming oversupply (+8 Mbpd by 2027 vs +2 Mbpd demand).",
      source: "TradingKey", url: "https://www.tradingkey.com/analysis/commodities/oil/", date: "Jun 17, 2026" },

    { category: "M&A", headline: "Olin to acquire Huntsman for ~$4.3B",
      summary: "Chlor-alkali producer Olin agreed to buy specialty-chemicals maker Huntsman in a deal valued at ~$4.27B, consolidating the North American chemicals sector.",
      source: "Inside Arbitrage", url: "https://www.insidearbitrage.com/category/new-merger-announcements/", date: "Jun 16, 2026" },

    { category: "M&A", headline: "Nuvei to acquire Payoneer for ~$2.75B",
      summary: "Cross-border payments platform Payoneer entered a merger agreement to be taken private by Nuvei in a ~$2.75B deal, extending payments-sector consolidation.",
      source: "Bloomberg", url: "https://www.insidearbitrage.com/category/new-merger-announcements/", date: "Jun 16, 2026" },

    { category: "M&A", headline: "Yum! Brands sells Pizza Hut for ~$2.7B",
      summary: "Yum! signed definitive agreements to divest Pizza Hut across two transactions totaling ~$2.7B, streamlining its portfolio around KFC and Taco Bell.",
      source: "Restaurant Dive", url: "https://www.restaurantdive.com/news/yum-brands-sells-pizza-hut-27-billion/807829/", date: "Jun 16, 2026" },

    { category: "M&A", headline: "Altaris to take Simulations Plus private for $375M",
      summary: "PE firm Altaris agreed to acquire pharma-software and AI-modeling firm Simulations Plus for roughly $375M.",
      source: "Inside Arbitrage", url: "https://www.insidearbitrage.com/category/new-merger-announcements/", date: "Jun 16, 2026" },

    { category: "Deal", headline: "ANV Group to buy auto-lending fintech Open Lending for ~$223M",
      summary: "ANV Group Holdings announced a merger agreement to acquire Open Lending in a deal valued at ~$222.6M.",
      source: "Inside Arbitrage", url: "https://www.insidearbitrage.com/category/new-merger-announcements/", date: "Jun 17, 2026" },

    { category: "Earnings", headline: "Jabil jumps 10% on an AI-driven guidance raise",
      summary: "Jabil reported FQ3 revenue of $8.8B and core EPS of $3.16, and lifted its FY26 AI-related revenue target to ~$13.6B (+50% y/y) and total FY26 revenue to ~$35B. Shares jumped over 10%.",
      source: "Investing.com", url: "https://www.investing.com/news/company-news/jabil-q3-fy2026-slides-ai-revenue-surges-outlook-raised-to-35b-93CH-4747595", date: "Jun 17, 2026" },

    { category: "IPO", headline: "SpaceX trades near a $1.77T valuation after the record IPO",
      summary: "After the largest IPO ever (555.6M shares at $135, ~$75B raised), SpaceX (Nasdaq: SPCX) debuted June 12 at +19%, hit a $225.64 high June 16, then slipped to ~$192 on the hawkish-Fed selloff — a market cap around $2.5T.",
      source: "TechCrunch", url: "https://techcrunch.com/2026/06/11/spacex-officially-prices-shares-at-135-in-the-largest-ipo-ever/", date: "Jun 12, 2026" },

    { category: "IPO", headline: "Kardigan and First Carolina price IPOs today",
      summary: "Cardiac biotech Kardigan plans to raise ~$350M (23.3M shares at $14–16) on Nasdaq, and community bank First Carolina Financial ~$83M on the NYSE — both debuting June 18.",
      source: "StockAnalysis", url: "https://stockanalysis.com/ipos/calendar/", date: "Jun 18, 2026" },

    { category: "Capital Markets", headline: "Investment-grade bond market runs hot — books ~3.5x covered",
      summary: "US high-grade issuance stayed robust with recent weekly supply ~$27B, orderbooks averaging ~3.5x oversubscribed and new-issue concessions of just ~1.7bp; spreads sit near multi-decade tights (~77bp), with AI/data-center debt a key 2026 driver.",
      source: "SIFMA", url: "https://www.sifma.org/research/statistics/us-corporate-bonds-statistics", date: "Jun 2026" },

    { category: "Capital Markets", headline: "EA's record $55B LBO races toward a June 30 close",
      summary: "The PIF / Silver Lake / Affinity $210/share, ~$55B take-private of Electronic Arts — the largest all-cash LBO ever, with ~$20B of debt committed by JPMorgan — nears its June 30 long-stop date pending final approvals.",
      source: "Tech Insider", url: "https://tech-insider.org/ea-goes-private-55-billion-buyout-2026/", date: "Jun 2026" },

    { category: "Earnings", headline: "Adobe, Oracle, Broadcom: AI keeps driving software earnings",
      summary: "The recent software season stayed AI-led — Oracle's backlog hit $638B (+363%), Broadcom's AI chip revenue topped $10B, and Adobe tripled AI-first ARR — though several names sold off as investors scrutinized the cost of the AI buildout.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/03/broadcom-avgo-earnings-report-q2-2026.html", date: "Jun 2026" }
  ],

  /* ---------- VENTURE CAPITAL (GCC-weighted + big global) ---------- */
  ventureCapital: [
    { region: "GCC", headline: "Saudi PIF's HUMAIN secures up to $1.2B for AI data centers",
      summary: "Saudi Arabia's National Infrastructure Fund and PIF-backed HUMAIN agreed a financing framework worth up to $1.2B to build as much as 250 MW of AI data-center capacity, part of the Kingdom's ~$100B AI compute push.",
      source: "Arab News", url: "https://www.arabnews.com/node/2630217/business-economy", date: "Jun 2026" },

    { region: "GCC", headline: "CargoX (UAE) raises $250M for autonomous logistics",
      summary: "UAE driverless-delivery startup CargoX raised $250M led by Abu Dhabi's BlueFive Capital ($15B AUM), with ex-Talabat CEO Tomaso Rodriguez as CEO and rollout planned across Abu Dhabi and Dubai.",
      source: "Wamda", url: "https://www.wamda.com/2026/06/cargox-secures-250-million-led-bluefive-capital-driverless-logistics-expansion", date: "Jun 2026" },

    { region: "GCC", headline: "Uber buys another 12.5% of Careem from e& for $100M",
      summary: "e& sold a further 12.5% of UAE super-app Careem to Uber for $100M cash, taking Uber toward control; e& retains 37.53%.",
      source: "The National", url: "https://www.thenationalnews.com/business/markets/2026/06/01/uber-acquires-controlling-stake-in-uaes-careem-for-100-million/", date: "Jun 2026" },

    { region: "GCC", headline: "Dubai's du launches a $50M corporate VC fund",
      summary: "Telecom du unveiled a $50M corporate venture fund ('du Ventures') managed by Shorooq, targeting fintech, AI, cybersecurity, cloud and gaming, with a significant share earmarked for UAE startups.",
      source: "Wamda", url: "https://www.wamda.com/2026/06/du-shorooq-partner-50-million-fund-regional-startups", date: "Jun 2026" },

    { region: "GCC", headline: "Khwarizmi Ventures launches a $70M+ Fund II for GCC startups",
      summary: "Riyadh's Khwarizmi Ventures held a $70M+ (SAR 270M) first close on its sector-agnostic Fund II for seed and Series A across the GCC, with Saudi Venture Capital (SVC) among the LPs.",
      source: "Wamda", url: "https://www.wamda.com/2026/05/khwarizmi-ventures-launches-fund-ii-70m-close-gcc-startups", date: "Jun 2026" },

    { region: "GCC", headline: "Anara Impact Capital reaches a $48M first close",
      summary: "MENA-focused impact VC Anara Impact Capital hit a $48M first close (toward $50M), backed by KfW, Dara Holdings and ISSF, investing in seed/Series A learning, wellbeing and climate startups.",
      source: "Wamda", url: "https://www.wamda.com/2026/06/anara-impact-capital-announces-48-million-close-mena-focused-fund", date: "Jun 2026" },

    { region: "GCC", headline: "Saudi fintech Stitch raises $25M — a16z's first GCC bet",
      summary: "Andreessen Horowitz led a $25M Series A into Riyadh's Stitch (its first Gulf investment), with Arbor Ventures, COTU, Raed Ventures and SVC joining. Stitch says it has processed $5B+ in transactions.",
      source: "Wamda", url: "https://www.wamda.com/2026/05/a16z-backs-saudi-fintech-stitch-gcc-deal", date: "Jun 2026" },

    { region: "GCC", headline: "UAE fintech Sovra raises $2M+ pre-seed, backed by Naguib Sawiris",
      summary: "Sovra, building a self-custodial global dollar account, raised a $2M+ pre-seed led by Pharsalus Capital, with angels including Ramp's Karim Atiyeh, Lean's Hisham Al-Falih and Egyptian billionaire Naguib Sawiris.",
      source: "Billionaires.Africa", url: "https://www.billionaires.africa/2026/06/17/egyptian-billionaire-naguib-sawiris-joins-the-2-million-pre-seed-round-of-uae-fintech-sovra-as-an-early-backer/", date: "Jun 2026" },

    { region: "GCC", headline: "UAE's CNTXT AI acquires Actualize for Arabic voice agents",
      summary: "UAE AI firm CNTXT AI acquired Actualize to add Arabic dialect-aware voice-AI agents; deal terms were undisclosed.",
      source: "Arab News", url: "https://www.arabnews.com/node/2646163/amp", date: "Jun 2026" },

    { region: "Global", headline: "AI IPO race: Anthropic ($965B) and OpenAI both file confidentially",
      summary: "Anthropic filed a confidential S-1 after a $65B raise that lifted its valuation to ~$965B — now the most valuable standalone AI startup — while OpenAI is also filing confidentially, targeting a ~$730–850B valuation; listings could come as early as Q3/Q4 2026.",
      source: "Fortune", url: "https://fortune.com/2026/06/01/anthropic-confidentially-files-ipo-965-billion-valuation/", date: "Jun 2026" },

    { region: "Global", headline: "Prometheus (Bezos-backed) raises a $12B Series B at $41B",
      summary: "Prometheus, the physical-AI company co-founded by Jeff Bezos and Vik Bajaj, raised a $12B Series B at a $41B valuation — one of the largest early-stage rounds on record.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/", date: "Jun 2026" },

    { region: "Global", headline: "Sequoia raising a ~$7B late-stage fund",
      summary: "Sequoia is reported to be raising roughly $7B for a new expansion (late-stage) fund focused on the US and Europe — about double its 2022 predecessor — as VC mega-funds return.",
      source: "TechCrunch", url: "https://techcrunch.com/2026/03/11/vc-mega-funds-are-back-with-general-catalyst-spark-rumored-to-be-raising-billions/", date: "Jun 2026" }
  ],

  /* ---------- LEBANON ECONOMY ---------- */
  lebanonEconomy: [
    { label: "Lira / USD",         value: "~89,500",     sub: "Official & parallel rate now converged (Jun 2026)" },
    { label: "Inflation (y/y)",    value: "20.0%",       sub: "April 2026 — accelerated from 17.3% prior" },
    { label: "BdL FX Reserves",    value: "~$11.9B",     sub: "Liquid reserves, end-Feb 2026" },
    { label: "Eurobonds",          value: "~13–16¢",     sub: "Deep distress; BLOM bond index ~26.6, ~62% yield" },
    { label: "IMF Program",        value: "Pre-program", sub: "'Gap Law' passed cabinet; no IMF deal yet — banks objecting" },
    { label: "GDP Growth",         value: "+4.0%",       sub: "2026 World Bank forecast (reform-contingent)" },
    { label: "Public Debt",        value: "155% of GDP", sub: "2025 (World Bank)" },
    { label: "Bank-System Losses", value: "~$70B",       sub: "The financial 'gap'; >$31B in Eurobond liabilities" }
  ],

  /* ---------- GEOPOLITICAL MAP (today's hotspots) ---------- */
  mapPoints: [
    { place: "Beirut",          lat: 33.89, lng: 35.50,  weight: 3, region: "Lebanon",     label: "Trump & Netanyahu clash over an Israeli withdrawal as fighting persists" },
    { place: "Geneva",          lat: 46.20, lng: 6.14,   weight: 3, region: "Iran",        label: "US–Iran peace deal signing, Jun 19" },
    { place: "Washington",      lat: 38.90, lng: -77.04, weight: 3, region: "US",          label: "Fed turns hawkish; Trump signs the Iran deal at the G7" },
    { place: "South Lebanon",   lat: 33.38, lng: 35.48,  weight: 2, region: "Lebanon",     label: "Battle for Ali al-Taher hill; ~28 killed in 24h" },
    { place: "Tehran",          lat: 35.69, lng: 51.39,  weight: 2, region: "Iran",        label: "War ending; ~$24B in assets to be unfrozen" },
    { place: "Gaza",            lat: 31.50, lng: 34.47,  weight: 2, region: "Israel-Gaza", label: "Ceasefire fraying; aid still far below target" },
    { place: "Strait of Hormuz",lat: 26.57, lng: 56.25,  weight: 2, region: "Iran",        label: "Blockade to lift; oil slides toward $75" },
    { place: "Riyadh",          lat: 24.71, lng: 46.68,  weight: 2, region: "Gulf",        label: "HUMAIN secures up to $1.2B for AI data centers" },
    { place: "Abu Dhabi",       lat: 24.45, lng: 54.38,  weight: 2, region: "Gulf",        label: "CargoX $250M; du launches a $50M VC fund" },
    { place: "Damascus",        lat: 33.51, lng: 36.29,  weight: 1, region: "Syria",       label: "Transitional justice advances; CW cache found" }
  ],
  mapArcs: [
    { from: [38.90, -77.04], to: [35.69, 51.39] },
    { from: [35.69, 51.39],  to: [33.89, 35.50] },
    { from: [38.90, -77.04], to: [46.20, 6.14] },
    { from: [35.69, 51.39],  to: [26.57, 56.25] }
  ],

  /* ---------- POLITICS ---------- */
  politics: {

    middleEast: [
      { region: "Lebanon", headline: "Trump and Netanyahu openly at odds over Israeli withdrawal from Lebanon",
        summary: "At his June 17 G7 press conference, Trump acknowledged friction with Netanyahu over Lebanon — saying the PM 'gets a little excited' and that he was 'not happy' with Israel's conduct — as the deal requires fighting in Lebanon to end.",
        source: "Times of Israel", url: "https://www.timesofisrael.com/liveblog-june-17-2026/", date: "Jun 17, 2026" },

      { region: "Lebanon", headline: "Israel says it won't withdraw from south Lebanon despite the Iran deal",
        summary: "Defense Minister Israel Katz said the IDF will remain in southern Lebanon 'despite all the existing pressures,' and ministers said Israel won't be bound by the US–Iran agreement — directly contradicting the deal's Lebanon provisions.",
        source: "Times of Israel", url: "https://www.timesofisrael.com/israel-vows-to-stay-in-south-lebanon-if-iran-strikes-well-hit-it-with-full-force/", date: "Jun 16, 2026" },

      { region: "Lebanon", headline: "Fighting continues in south Lebanon; ~28 killed in 24 hours",
        summary: "Israel tried to capture Ali al-Taher hill near Nabatieh on June 17, with Hezbollah claiming to repel it; Lebanon's health ministry reported at least 28 killed in the prior day (cumulative ~3,826), while the IDF said Hezbollah drones wounded five soldiers.",
        source: "Times of Israel", url: "https://www.timesofisrael.com/amid-us-iran-deal-idf-says-hezbollah-continues-attacking-troops-in-south-lebanon/", date: "Jun 17, 2026" },

      { region: "Lebanon", headline: "Lebanon's war toll mounts; reconstruction needs in the billions",
        summary: "Bank Audi projects 0% GDP growth in 2026 if the war continues; the World Bank estimates ~$14B in damage and losses (incl. ~$11B reconstruction), with over a million displaced and ~1.24M facing food insecurity.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/features/2026/5/22/lebanons-economy-struggles-under-renewed-war-and-global-fuel-crisis", date: "Jun 2026" },

      { region: "Iran", headline: "US–Iran deal set to be signed Friday, June 19 — explicitly covers Lebanon",
        summary: "The framework ends the ~4-month war with an 'immediate and permanent termination of operations on all fronts, including Lebanon,' a 60-day ceasefire, the Strait of Hormuz reopening, ~$24B in unfrozen assets, and 60-day nuclear talks. Trump reportedly signed at the G7 on June 17; the ceremony is set for June 19 (Geneva).",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/15/us-iran-to-sign-a-peace-deal-on-friday-what-we-know-so-far", date: "Jun 17, 2026" },

      { region: "Israel-Gaza", headline: "Gaza ceasefire holds on paper but keeps fraying",
        summary: "The October 2025 ceasefire is formally in place, but Israeli strikes have continued and second-phase talks remain stalled over Hamas disarmament, with aid running at roughly 36% of allocated trucks.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/5/pervasive-fear-grips-gaza-as-israeli-attacks-persist-despite-ceasefire", date: "Jun 2026" },

      { region: "Syria", headline: "Syria advances transitional justice as a hidden chemical-weapons cache is found",
        summary: "President al-Sharaa's interim government pushed transitional-justice efforts as inspectors uncovered a significant cache of previously undeclared chemical weapons, including rockets of the type used in the 2013 Ghouta attack.",
        source: "Security Council Report", url: "https://www.securitycouncilreport.org/monthly-forecast/2026-06/syria-92.php", date: "Jun 2026" }
    ],

    us: [
      { headline: "Fed holds rates but turns hawkish in Warsh's first meeting",
        summary: "The FOMC voted 12–0 to hold at 3.50–3.75%, but the new dot plot showed nine of 18 members projecting a 2026 hike (six see two), and the statement dropped its easing bias — a regime change in Fed messaging under new Chair Kevin Warsh.",
        source: "CNBC", url: "https://www.cnbc.com/2026/06/17/fed-interest-rate-decision-june-2026.html", date: "Jun 17, 2026" },

      { headline: "Trump signs the US–Iran agreement at the G7; touts Hormuz reopening",
        summary: "Trump said he signed the US–Iran memorandum while at the G7 in France, saying the Strait of Hormuz would open 'in full' within two days and the naval blockade would lift — the centerpiece of his week ahead of the formal June 19 ceremony.",
        source: "CNN", url: "https://www.cnn.com/2026/06/17/world/live-news/iran-war-g7-summit", date: "Jun 17, 2026" },

      { headline: "Supreme Court in the final stretch; major rulings expected",
        summary: "The Court is handing down end-of-term decisions, with pending cases on the Voting Rights Act, transgender athletes under Title IX, and executive power — including Trump's bid to remove Fed Governor Lisa Cook, which the Court has so far declined to allow.",
        source: "NPR", url: "https://www.npr.org/2026/06/09/nx-s1-5847967/supreme-court-major-cases-left-2026", date: "Jun 2026" },

      { headline: "G7 backs the Iran deal and pledges tougher Russia sanctions",
        summary: "At the G7 in France, leaders endorsed Trump's Iran agreement (Macron called it a 'very good deal') and pledged tougher sanctions on Russia alongside a joint communiqué backing Ukraine.",
        source: "NBC News", url: "https://www.nbcnews.com/politics/donald-trump/live-blog/live-updates-trump-g7-summit-iran-deal-russia-ukraine-war-iran-israel-rcna350404", date: "Jun 17, 2026" },

      { headline: "Senate advances nominations and a housing bill",
        summary: "The Senate invoked cloture (54–41) on Michelle Steel's nomination as Ambassador to South Korea and set June 18 votes on a federal-housing bill (H.R. 6644) and an EBRD nominee.",
        source: "U.S. Senate", url: "https://www.dailypress.senate.gov/wednesday-june-17-2026/", date: "Jun 17, 2026" }
    ]
  },

  /* ---------- SOURCES (footer credits) ---------- */
  sources: [
    { name: "Trading Economics", url: "https://tradingeconomics.com/" },
    { name: "stockanalysis.com", url: "https://stockanalysis.com/" },
    { name: "CNBC",              url: "https://www.cnbc.com/" },
    { name: "Al Jazeera",        url: "https://www.aljazeera.com/" },
    { name: "Wamda",             url: "https://www.wamda.com/" },
    { name: "Crunchbase News",   url: "https://news.crunchbase.com/" },
    { name: "Federal Reserve",   url: "https://www.federalreserve.gov/" }
  ]
};

/* ============================================================
   DAILY BRIEFING — DATA FILE
   ------------------------------------------------------------
   This file holds everything your dashboard displays.
   It is regenerated each time you run  /update-news  in Claude Code.
   You normally never edit this by hand.

   Last generated: June 21, 2026
   ============================================================ */

window.DASHBOARD_DATA = {

  dateLabel: "Sunday, June 21, 2026",
  lastUpdated: "June 21, 2026",
  updatedAt: "June 21, 2026, 8:30 AM (Beirut)",
  asOfNote: "Weekend — markets closed. US stocks & indices: Thu Jun 18 close (US shut Fri Jun 19, Juneteenth) · Europe/Japan: Fri Jun 19 · Gulf & Hong Kong: Thu Jun 18 · crypto: live (Jun 21). No new US trading session since Thursday.",
  drivingStory: "It's a quiet market weekend — US, European and Gulf exchanges are all closed, so prices are Friday's close (US figures are Thursday's, before the Juneteenth holiday). The action is geopolitical: an Israel–Hezbollah ceasefire took hold Friday but is already fraying (100+ strikes overnight; the war's toll has passed 4,000), and the US–Iran talks postponed from Geneva were reset for today in Switzerland. Crypto, which trades around the clock, edged up (Bitcoin ~$64k).",

  /* Short labels for the most recent trading sessions (oldest → newest), used as the index-chart x-axis & hover dates. NYSE calendar; ends at the latest US close. */
  histDates: ["May 18","May 19","May 20","May 21","May 22","May 26","May 27","May 28","May 29","Jun 1","Jun 2","Jun 3","Jun 4","Jun 5","Jun 8","Jun 9","Jun 10","Jun 11","Jun 12","Jun 15","Jun 16","Jun 17","Jun 18"],

  /* ---------- MARKETS ---------- */
  markets: {

    indices: [
      { name: "S&P 500",          level: 7500.58,  day: "+1.08", month: "+2.00", ytd: "+9.6", hist: [7354,7433,7446,7473,7519,7520,7564,7580,7600,7610,7554,7584,7384,7406,7387,7267,7394,7431,7554,7511,7420,7501] },
      { name: "Nasdaq Composite", level: 26517.93, day: "+1.91", month: "+2.50", ytd: "+14.1", hist: [25871,26270,26293,26344,26656,26675,26917,26973,27087,27094,26854,26831,25709,25930,25679,25170,25810,25889,26684,26376,26022,26518] },
      { name: "Nasdaq 100",       level: 30234.00, day: "+1.90", month: "+2.50", ytd: "+19.7", note: "Estimated from the Nasdaq Composite (Jun 18); a separate level wasn't published over the holiday/weekend." },
      { name: "Dow Jones",        level: 51564.70, day: "+0.14", month: "+4.50", ytd: "+7.3", hist: [49364,50009,50286,50580,50462,50644,50669,51032,51079,51308,50687,51562,50867,50786,50872,49919,50849,51202,51671,52000,51493,51565] },
      { name: "Russell 2000",     level: 2979.77,  day: "+2.12", month: "+8.50", ytd: "+20.1", hist: [2747,2817,2843,2869,2921,2920,2937,2919,2906,2932,2894,2935,2834,2855,2867,2835,2921,2944,2965,2939,2918,2980] },
      { name: "STOXX Europe 600", level: 636.00,   day: "-0.20", month: "+2.40", ytd: "+7.4", hist: [621,625,632,628,628,625,626,621,625,621,624,623,622,619,619,618,622,633,634,636,637,639] },
      { name: "FTSE 100",         level: 10363.27, day: "-0.35", month: "-0.66", ytd: "+2.9", hist: [10432,10443,10466,10491,10505,10426,10409,10339,10374,10332,10360,10368,10373,10227,10255,10304,10472,10431,10494,10478,10504,10406] },
      { name: "Nikkei 225",       level: 71250.06, day: "+0.28", month: "+9.60", ytd: "+41.5", note: "Record territory. Some data sites misreport YTD ~+80% (a base-date error) — true YTD is ~+41%.", hist: [64996,64999,64693,66330,66310,66934,66734,68402,67471,66588,63792,64025,65417,64179,64217,66020,68463,69318,68755,69980,69902,71053] },
      { name: "Hang Seng",        level: 23924.81, day: "-1.59", month: "-6.70", ytd: "-6.7", note: "Last close Thu Jun 18 — Hong Kong was shut Fri Jun 19 for the Dragon Boat Festival.", hist: [25651,25387,25606,25599,25328,25006,25182,25398,26038,25633,25253,24962,24657,24566,24408,24249,24718,24843,24494,24312,24312,23925] }
    ],

    rates: [
      { name: "US 10-Year Treasury", value: "4.45%",      change: "little changed (Thu Jun 18)" },
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
      { name: "Bitcoin",  price: 64220, day: "+0.9", month: "+17.2", year: "+38.0" },
      { name: "Ethereum", price: 1733,  day: "+0.8", month: "+18.8", year: "+28.6" }
    ]
  },

  /* ---------- REGIONAL MARKETS (GCC & Egypt) ---------- */
  /* Last full Gulf session = Thu Jun 18 (markets reopen Sunday) */
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
    { date: "Sun Jun 21", category: "Geopolitics", event: "US–Iran technical talks resume (Switzerland)", detail: "Rescheduled after the Geneva postponement; the test of whether the Jun 17 MoU converts to a lasting deal as Lebanon fighting flares." },
    { date: "Tue Jun 23", category: "Geopolitics", event: "Lebanon–Israel talks, 5th round (Washington)", detail: "US-brokered political & security tracks (Jun 23 & 25); Lebanon seeks a full Israeli withdrawal, army deployment and reconstruction." },
    { date: "Tue Jun 23", category: "Earnings", event: "FedEx Q4 (after close)", detail: "Bellwether for global shipping and freight demand." },
    { date: "Wed Jun 24", category: "Earnings", event: "Micron FQ3 (after close)", detail: "Key AI / HBM-memory demand gauge." },
    { date: "Wed Jun 24", category: "Earnings", event: "General Mills & Paychex", detail: "A consumer-staples read plus an SMB-payrolls signal (before open)." },
    { date: "Thu Jun 25", category: "Econ", event: "US final Q1 GDP + corporate profits", detail: "Third estimate; the 2nd estimate was revised to +1.6% (8:30am ET)." },
    { date: "Thu Jun 25", category: "Econ", event: "US durable goods (May) + jobless claims", detail: "A capex signal and a high-frequency labor read." },
    { date: "Thu Jun 25", category: "Central Bank", event: "Banxico (Mexico) rate decision", detail: "Consensus sees a ~50bp cut — a fourth straight." },
    { date: "Fri Jun 26", category: "Econ", event: "US PCE inflation (May) + income & spending", detail: "The Fed's preferred inflation gauge — the week's marquee data after the hawkish dot plot." },
    { date: "Tue Jun 30", category: "Earnings", event: "Nike Q4 (after close)", detail: "A read on the US consumer and Nike's turnaround." },
    { date: "Tue Jun 30", category: "Econ", event: "US consumer confidence (June) + Chicago PMI", detail: "Conference Board confidence and a regional activity gauge." }
  ],

  /* ---------- BIG STOCKS (largest by market cap) ---------- */
  /* Price & 1-day = Thu Jun 18 close (US shut Fri Jun 19 + weekend) · 1M / 1Y = trailing price return */
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
  /* Latest settles = Fri Jun 19 (futures closed for the weekend) */
  commodities: [
    { name: "WTI Crude",   price: 77.54,   unit: "$/bbl",     day: "+1.20", month: "-24.7", ytd: "+26.1" },
    { name: "Brent Crude", price: 80.57,   unit: "$/bbl",     day: "+0.90", month: "-25.6", ytd: "+31.8" },
    { name: "Natural Gas", price: 3.22,    unit: "$/MMBtu",   day: "-0.45", month: "+6.1",  ytd: "-24.5" },
    { name: "Gold",        price: 4151.05, unit: "$/oz",      day: "-1.40", month: "-6.5",  ytd: "-1.5" },
    { name: "Silver",      price: 64.54,   unit: "$/oz",      day: "-1.69", month: "-13.0", ytd: "-5.7" },
    { name: "Copper",      price: 6.32,    unit: "$/lb",      day: "-0.86", month: "-1.6",  ytd: "+11.3" },
    { name: "Wheat",       price: 605.75,  unit: "¢/bushel",  day: "-1.14", month: "n/a",   ytd: "+19.5" }
  ],

  /* ---------- FINANCIAL NEWS ---------- */
  financialNews: [
    { category: "Macro", headline: "Fed holds, but the dot plot flips to a 2026 HIKE in Warsh's debut",
      summary: "The FOMC held at 3.50–3.75% on June 17 (Kevin Warsh's first meeting), but the median 2026 dot rose to 3.8% (from 3.4%), erasing the prior cut — 9 of 18 members now see a hike this year, with year-end PCE inflation lifted to 3.6%.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/17/fed-interest-rate-decision-june-2026.html", date: "Jun 17, 2026" },

    { category: "Macro", headline: "Oil tumbled on the Hormuz reopening, then ticked back up Friday",
      summary: "Brent fell ~20% from its 2026 highs to ~$78 mid-week on the US–Iran framework to reopen the Strait of Hormuz, then edged up Friday (Brent ~$80.57, WTI ~$77.54) as renewed Lebanon strikes and Iran's call for mandatory Hormuz insurance reintroduced risk.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/19/oil-prices-wti-brent-crude-us-iran-deal-strait-hormuz-shipping-recovery.html", date: "Jun 19, 2026" },

    { category: "Macro", headline: "ECB raises rates 25bp, citing Middle East inflation",
      summary: "The ECB lifted its three key rates by 25bp — deposit to 2.25%, main refi to 2.40% — explicitly tying the move to Middle East-driven inflation pressure, even as the Fed and BoE turned hawkish.",
      source: "ECB", url: "https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260611~4d41bd5e83.en.html", date: "Jun 11, 2026" },

    { category: "Macro", headline: "Bank of England holds at 3.75% on a 7–2 vote",
      summary: "The BoE's MPC voted 7–2 to hold Bank Rate at 3.75% on June 17, with the two dissenters favoring a 25bp hike to 4.00% amid sticky UK inflation — a hawkish tilt mirroring the Fed.",
      source: "Bank of England", url: "https://www.bankofengland.co.uk/monetary-policy-summary-and-minutes/2026/june-2026", date: "Jun 17, 2026" },

    { category: "M&A", headline: "Fox to acquire Roku for ~$22B",
      summary: "Fox agreed to buy Roku at $160/share ($96 cash + 0.9693 Fox Class A shares), with Fox holders owning ~73% of the combined group; it targets ~$400M of run-rate synergies and the #3 US TV spot, closing H1 2027.",
      source: "PR Newswire / Fox", url: "https://www.prnewswire.com/news-releases/fox-corporation-to-acquire-roku-inc-302800220.html", date: "Jun 15, 2026" },

    { category: "M&A", headline: "Olin and Huntsman in a ~$2.4B all-stock merger of equals",
      summary: "Huntsman holders receive 0.5476 Olin shares each (Olin ~54.5% / Huntsman ~45.5%), forming a $12B+ North American chemicals leader targeting $400M+ synergies, with a 1H 2027 close.",
      source: "PR Newswire / Huntsman", url: "https://www.prnewswire.com/news-releases/olin-and-huntsman-announce-transformative-merger-of-equals-to-create-a-12-billion-integrated-north-american-chemicals-leader-302801469.html", date: "Jun 16, 2026" },

    { category: "M&A", headline: "Nuvei to acquire Payoneer for ~$2.75B",
      summary: "Payments group Nuvei agreed to buy cross-border platform Payoneer Global in a ~$2.75B deal, extending fintech consolidation.",
      source: "Inside Arbitrage", url: "https://www.insidearbitrage.com/category/new-merger-announcements/", date: "Jun 16, 2026" },

    { category: "IPO", headline: "SpaceX completes the largest IPO in history — $75B raised",
      summary: "SpaceX (Nasdaq: SPCX) priced at $135/share on June 11, selling 555.6M shares for a ~$75B raise (2x+ oversubscribed) at a $1.77T valuation, and closed its June 12 debut +19% at $160.95.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/12/spacex-ipo-spcx-live-updates.html", date: "Jun 12, 2026" },

    { category: "IPO", headline: "The IPO window reopens — heavy mid-June new-issue calendar",
      summary: "US pricings clustered in mid-June (14 on Jun 15, 15 on Jun 18), and Q1 2026 global IPOs raised $42.6B across 251 deals (+45% in proceeds y/y) — the busiest new-issue stretch in years.",
      source: "Renaissance Capital / IPOScoop", url: "https://www.iposcoop.com/current-year-pricings/", date: "Jun 18, 2026" },

    { category: "IPO", headline: "Fintech IPO pipeline builds behind SpaceX",
      summary: "Late-stage names are queuing for 2026 listings: Revolut (~$75B target, confidential S-1), Kraken (~$20B), Klarna (~$15B, NYSE) and Plaid (~$6.1B), with OpenAI and Anthropic also filing confidentially.",
      source: "Forge Global", url: "https://forgeglobal.com/insights/us-ipo-pipeline-2026/", date: "Jun 16, 2026" },

    { category: "Earnings", headline: "Accenture beats and raises: revenue +6% to $18.7B",
      summary: "Accenture posted fiscal Q3 revenue of $18.7B (+6%) and EPS up 9% to $3.80, with operating margin up 20bp to 17.0%; it raised FY local-currency growth guidance to 3–4% and returned $2.2B to shareholders.",
      source: "Accenture", url: "https://newsroom.accenture.com/content/3qfy26-earnings/accenture-reports-third-quarter-fiscal-2026-results.pdf", date: "Jun 18, 2026" },

    { category: "Earnings", headline: "Lennar Q2 EPS beats but homebuilder margins compress",
      summary: "Lennar reported Q2 EPS of $1.31 (vs $1.24 est) on revenue of $7.94B (down from $8.38B), as home-sales gross margin fell to 15.6% from 17.8% — a sign of a softening housing market under higher-for-longer rates.",
      source: "AlphaStreet", url: "https://news.alphastreet.com/lennar-q2-2026-deep-dive-eps-beats-by-5-6-revenue-down-5/", date: "Jun 18, 2026" },

    { category: "Earnings", headline: "Kroger Q1 beats: $46.1B revenue, e-commerce +19%",
      summary: "Kroger reported Q1 adjusted EPS of $1.58 on $46.1B revenue, with identical sales (ex-fuel) up 1.0% and e-commerce up ~19%, and held its FY26 adjusted EPS guidance.",
      source: "Kroger (SEC)", url: "https://www.sec.gov/Archives/edgar/data/0000056873/000110465926075395/tm2618219d1_ex99-1.htm", date: "Jun 19, 2026" },

    { category: "Capital Markets", headline: "Nvidia prices a $25B bond — its largest-ever debt deal",
      summary: "Nvidia sold $25B across seven tranches (its first high-grade issuance since 2021, upsized from ~$20B on ~$85B of orders, 3x+ covered), with the 30-year tranche pricing at just 65bp over Treasuries.",
      source: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-06-15/nvidia-kicks-off-first-high-grade-bond-offering-since-2021", date: "Jun 15, 2026" },

    { category: "Capital Markets", headline: "US Treasury reshapes 20-year settlement, plans liquidity buybacks",
      summary: "The Treasury said 20-year reopenings will now settle on the Friday of auction week and flagged up to $38B of off-the-run buybacks (plus up to $25B in the 1m–2y bucket) to support market liquidity.",
      source: "US Treasury", url: "https://home.treasury.gov/news/press-releases/sb0489", date: "Jun 18, 2026" },

    { category: "Macro", headline: "Stocks rallied and the dollar hit a 2026 high on Iran de-escalation",
      summary: "The S&P 500 rose ~1.1% to ~7,501 on June 18 (Nasdaq +1.9%) and the trade-weighted dollar hit a fresh 2026 high as short-term rate expectations firmed after the hawkish Fed and oil's drop.",
      source: "CNN Business", url: "https://www.cnn.com/2026/06/19/business/markets-oil-stocks-gas-strait-of-hormuz", date: "Jun 19, 2026" }
  ],

  /* ---------- VENTURE CAPITAL (GCC-weighted + big global) ---------- */
  ventureCapital: [
    { region: "GCC", headline: "CNTXT AI (UAE) raises a $60M Series A",
      summary: "UAE enterprise data-and-AI firm CNTXT AI closed a $60M Series A co-led by Abu Dhabi's AI71 and BlueFive Capital — the largest equity round in the latest MENA weekly wrap — to scale secure enterprise AI across the region.",
      source: "Arab News", url: "https://www.arabnews.com/node/2647977/business-economy", date: "Jun 20, 2026" },

    { region: "GCC", headline: "Saudi PIF's HUMAIN secures up to $1.2B for AI infrastructure",
      summary: "Saudi Arabia's National Infrastructure Fund and PIF-backed HUMAIN agreed a financing framework worth up to $1.2B to build as much as 250MW of AI data-center capacity; HUMAIN is also reported to be preparing a ~$10B AI venture fund.",
      source: "Arab News", url: "https://www.arabnews.com/node/2630217/business-economy", date: "Jun 2026" },

    { region: "GCC", headline: "Comfi (UAE) raises $65M pre-Series A for embedded finance",
      summary: "B2B embedded-finance platform Comfi raised $65M (equity + debt), with the equity led by Iliad Partners alongside Yango Ventures and Raw Ventures, to fund MENA expansion.",
      source: "Wamda", url: "https://www.wamda.com/2026/04/comfi-expands-mena-raising-65-million-pre-series", date: "Jun 2026" },

    { region: "GCC", headline: "TruKKer (UAE) lands a $300M securitization facility from ADCB",
      summary: "Gulf digital-freight network TruKKer arranged a trade-receivables securitization facility of up to $300M funded by Abu Dhabi Commercial Bank — one of the region's largest structured financings for a tech startup.",
      source: "Wamda", url: "https://www.wamda.com/2026/05/trukker-secures-300m-securitisation-facility-adcb", date: "May 2026" },

    { region: "GCC", headline: "Khwarizmi Ventures launches a $70M+ Fund II for GCC startups",
      summary: "Riyadh's Khwarizmi Ventures held a first close above SAR 270M (~$70M) on its sector-agnostic Fund II (anchored by Saudi Venture Capital), backing seed–Series A across the GCC with ≥50% to Saudi Arabia.",
      source: "Wamda", url: "https://www.wamda.com/2026/05/khwarizmi-ventures-launches-fund-ii-70m-close-gcc-startups", date: "May 2026" },

    { region: "GCC", headline: "Saudi fintech Stitch raises $25M — a16z's first GCC bet",
      summary: "Andreessen Horowitz led a $25M Series A into Stitch (a cloud-native banking OS) — its first-ever Gulf investment — with Arbor Ventures, COTU, Raed Ventures and SVC participating.",
      source: "Arab News", url: "https://www.arabnews.com/node/2643776/amp", date: "Jun 2026" },

    { region: "GCC", headline: "Algebra AI (UAE) raises $7M for enterprise AI transformation",
      summary: "UAE AI-transformation startup Algebra AI raised $7M led by Infinity Constellation, with BECO Capital, Silicon Badia and Waseel Investments — part of a May wrap where MENA funding rose 202% m/m to $454.7M.",
      source: "Arab News", url: "https://www.arabnews.com/node/2647069/amp", date: "Jun 2026" },

    { region: "GCC", headline: "Bahrain foodtech Lola closes a $3M seed",
      summary: "Bahrain-founded D2C foodtech platform Lola raised a $3M seed led by Vision Ventures, with Aljazira Capital, Seedra Ventures and Plus VC — a notable round for Bahrain's ecosystem.",
      source: "Wamda", url: "https://www.wamda.com/2026/04/lola-closes-3-million-seed-scale-gcc", date: "Jun 2026" },

    { region: "Global", headline: "Anthropic closes a $65B round at a ~$965B valuation",
      summary: "AI lab Anthropic raised a record ~$65B Series H (Altimeter, Dragoneer, Greenoaks, Sequoia, Capital Group, Coatue, D1), valuing it at ~$965B — now the most valuable standalone AI startup.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/", date: "Jun 2026" },

    { region: "Global", headline: "Ramp raises $750M at a $44B valuation",
      summary: "Spend-management fintech Ramp closed $750M — the week's single biggest round — led by Iconiq with GIC and Ontario Teachers', lifting its valuation to $44B.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/", date: "Jun 5, 2026" },

    { region: "Global", headline: "a16z raises a record $15B+; AUM nears ~$90B",
      summary: "Andreessen Horowitz raised $15B+ across its 2026 vehicles — the largest VC fundraise ever (~$3.4B earmarked for AI) — pushing AUM toward ~$90B; its crypto arm separately closed a $2.2B fund.",
      source: "TechCrunch", url: "https://techcrunch.com/2026/05/05/as-crypto-cools-a16zcrypto-raises-a-2-2b-fund/", date: "Jun 2026" }
  ],

  /* ---------- LEBANON ECONOMY ---------- */
  lebanonEconomy: [
    { label: "Lira / USD",         value: "~89,500",     sub: "Official peg; parallel ~90,300 (mid-Jun 2026)" },
    { label: "Inflation (y/y)",    value: "~20%",        sub: "April 2026 — up from ~11% in January" },
    { label: "BdL FX Reserves",    value: "~$11.6B",     sub: "Mid-June 2026 (+$185M in early June)" },
    { label: "Eurobonds",          value: "~25–27¢",     sub: "On the dollar; in default (latest firm quote Mar 2026)" },
    { label: "IMF Program",        value: "Stalled",     sub: "No Board-approved program; gated on reforms & disarmament" },
    { label: "Reconstruction",     value: "~$11B",       sub: "World Bank estimate; public revenues down ~40% in a month" },
    { label: "GDP Growth",         value: "+3.5% (2025)", sub: "First growth in ~8 years; 2026 likely back in contraction" },
    { label: "Bank-System Losses", value: "~$72B",       sub: "The 'gap'; Gap Law drafted Dec 2025, still unpassed" }
  ],

  /* ---------- GEOPOLITICAL MAP (today's hotspots) ---------- */
  mapPoints: [
    { place: "Beirut",          lat: 33.89, lng: 35.50,  weight: 3, region: "Lebanon",     label: "Ceasefire holds shakily after the deadliest day; war toll passes 4,000" },
    { place: "Switzerland",     lat: 46.00, lng: 8.40,   weight: 3, region: "Iran",        label: "US–Iran talks reset for today after the Geneva postponement" },
    { place: "Washington",      lat: 38.90, lng: -77.04, weight: 3, region: "US",          label: "Iran diplomacy hits a snag; Congress rebukes Trump on the war" },
    { place: "South Lebanon",   lat: 33.38, lng: 35.48,  weight: 2, region: "Lebanon",     label: "100+ strikes overnight; Hezbollah killed 4 Israeli soldiers near Nabatieh" },
    { place: "Tehran",          lat: 35.69, lng: 51.39,  weight: 2, region: "Iran",        label: "MoU signed electronically; Hormuz transits to need mandatory insurance" },
    { place: "Strait of Hormuz",lat: 26.57, lng: 56.25,  weight: 2, region: "Iran",        label: "Commercial traffic surging post-deal; oil ticked back up Friday" },
    { place: "Doha",            lat: 25.29, lng: 51.53,  weight: 2, region: "Gulf",        label: "Qatar (with the US) brokered the renewed Israel–Hezbollah ceasefire" },
    { place: "Abu Dhabi",       lat: 24.45, lng: 54.38,  weight: 2, region: "Gulf",        label: "CNTXT AI raises $60M; UAE deal flow stays strong" },
    { place: "Damascus",        lat: 33.51, lng: 36.29,  weight: 1, region: "Syria",       label: "Sharaa reshuffles cabinet; rockets fired into Israel; ISIS attack near Manbij" },
    { place: "Gaza",            lat: 31.50, lng: 34.47,  weight: 1, region: "Israel-Gaza", label: "Truce stalled six months in; ~77% face acute food insecurity" }
  ],
  mapArcs: [
    { from: [38.90, -77.04], to: [35.69, 51.39] },
    { from: [35.69, 51.39],  to: [33.89, 35.50] },
    { from: [38.90, -77.04], to: [46.00, 8.40] },
    { from: [35.69, 51.39],  to: [26.57, 56.25] },
    { from: [25.29, 51.53],  to: [33.89, 35.50] }
  ],

  /* ---------- POLITICS ---------- */
  politics: {

    middleEast: [
      { region: "Lebanon", headline: "Israel–Hezbollah ceasefire holds shakily after the deadliest day; early violations",
        summary: "A US/Qatar-brokered (Iranian-mediated) ceasefire took effect Friday at ~4pm local but immediately frayed — Al Jazeera reported 100+ Israeli airstrikes on the south since midnight, while Israel said Hezbollah fired 50+ projectiles overnight and Hezbollah said it targeted troops near Nabatieh.",
        source: "PBS NewsHour", url: "https://www.pbs.org/newshour/world/israel-and-hezbollah-renew-ceasefire-after-u-s-and-iran-call-off-talks-over-fighting-in-lebanon", date: "Jun 20, 2026" },

      { region: "Lebanon", headline: "Casualties spike — Friday the deadliest day; war toll tops 4,000",
        summary: "Lebanon's Health Ministry reported ~83 killed and 141 wounded on Friday (mostly the south), pushing the cumulative toll since March 2 to 4,057 dead and 12,121 wounded. Hezbollah killed four Israeli soldiers — including a lieutenant colonel — in a tank attack near Nabatieh; a fifth later died.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/20/us-envoy-headed-for-switzerland-israeli-strikes-on-lebanon-threaten-talks", date: "Jun 20, 2026" },

      { region: "Lebanon", headline: "Fifth round of direct Lebanon–Israel talks set for Washington (Jun 23 & 25)",
        summary: "Lebanon's Presidency confirmed a US-brokered fifth round of direct negotiations — split into political and security tracks — aiming to advance 'pilot zones' for exclusive Lebanese Army control. Hezbollah is excluded, which analysts say limits progress.",
        source: "Qatar News Agency", url: "https://qna.org.qa/en/News-Area/News/2026-6/11/lebanon-announces-fifth-round-of-direct-negotiations-with-israel-on-june-22", date: "Jun 2026" },

      { region: "Lebanon", headline: "Hezbollah disarmament gridlocked; reconstruction ~$11B with no IMF deal",
        summary: "Hezbollah insists Israel must halt attacks, withdraw and release prisoners — and reconstruction begin — before any disarmament. The economy is deteriorating (public revenues down ~40% in a month), reconstruction needs sit near $11B (World Bank), and an IMF program remains stalled.",
        source: "TIMEP", url: "https://timep.org/2026/06/16/no-bailout-in-sight-lebanons-economic-balancing-act/", date: "Jun 2026" },

      { region: "Iran", headline: "Geneva/Switzerland signing postponed; Sunday talks the next test",
        summary: "After the electronically-signed June 17–18 MoU (a 60-day window to negotiate the nuclear file, reopen Hormuz and resume oil sales), the in-person Switzerland phase was abruptly called off June 19 as Iran refused to attend while Israel kept striking Lebanon. Follow-up talks were reset for Sunday June 21 in Bürgenstock.",
        source: "NPR", url: "https://www.npr.org/2026/06/19/nx-s1-5863544/trump-us-iran-agreement", date: "Jun 20, 2026" },

      { region: "Israel-Gaza", headline: "Gaza ceasefire largely stalled six months in; aid still throttled",
        summary: "Six months after the October 2025 truce, the 20-point plan has stalled beyond its opening phase; ~77% of Gaza's population still faces acute food insecurity and only ~36% of allocated aid trucks (52,129 of 144,000) have entered since October.",
        source: "Al Jazeera", url: "https://jstreet.org/six-months-in-assessing-the-status-of-the-gaza-ceasefire/", date: "Jun 2026" },

      { region: "Syria", headline: "Syria's Sharaa reshuffles cabinet amid an Israel security-deal track and ISIS resurgence",
        summary: "President Ahmed al-Sharaa reshuffled ministers (removing his brother amid nepotism criticism) as Syria and Israel negotiate a security deal he's resisted turning into full normalization; rockets were fired from southern Syria into Israel and ISIS claimed a deadly attack near Manbij.",
        source: "Security Council Report", url: "https://www.securitycouncilreport.org/monthly-forecast/2026-06/syria-92.php", date: "Jun 2026" },

      { region: "Gulf", headline: "GCC welcomes the ceasefire but presses on Hormuz and Iran's missiles",
        summary: "Saudi Arabia welcomed the truce and urged full Hormuz reopening, Qatar called it 'an initial step toward de-escalation,' and the UAE — the sharpest — demanded unconditional Hormuz reopening and a plan for Iran's ballistic missiles. Commercial traffic through Hormuz is surging post-deal.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/4/8/gulf-arab-nations-react-to-iran-us-ceasefire-announcement", date: "Jun 2026" }
    ],

    us: [
      { headline: "Trump's US–Iran diplomacy hits its first snag as Switzerland talks collapse",
        summary: "The interim MoU signed June 17–18 set a 60-day clock, but the first in-person follow-up was scrapped June 19 when Iran declined to attend over Israel's Lebanon campaign and VP Vance postponed his trip. Talks were reset for Sunday June 21.",
        source: "CBS News", url: "https://www.cbsnews.com/live-updates/iran-war-trump-us-deal-strait-of-hormuz/", date: "Jun 20, 2026" },

      { headline: "Fed holds steady in Warsh's debut; cut outlook scrapped, hike now on the table",
        summary: "In Kevin Warsh's first meeting as Chair, the FOMC voted 12–0 to hold at 3.50–3.75% but removed its 2026 cut projection and signaled a possible hike (9 of 18 members), with PCE inflation projected at 3.6% on Middle East energy shocks — even as Trump pushes for cuts.",
        source: "CNBC", url: "https://www.cnbc.com/2026/06/17/fed-interest-rate-decision-june-2026.html", date: "Jun 17, 2026" },

      { headline: "Congress rebukes Trump on the Iran war via a War Powers Resolution",
        summary: "The House passed a War Powers Resolution 215–208 (four Republicans crossing over) directing Trump to end hostilities with Iran — the first time both chambers have done so — though it's largely symbolic and faces a likely veto. The Pentagon has sought a $200B supplemental.",
        source: "CNN", url: "https://www.cnn.com/2026/06/03/politics/house-iran-war-powers-vote", date: "Jun 2026" },

      { headline: "Supreme Court enters its final stretch with major rulings pending",
        summary: "With the term ending around June 30, the Court has already gutted remaining Voting Rights Act protections; still outstanding are birthright citizenship, FTC removal power, transgender school-sports bans, and campaign-finance limits.",
        source: "NPR", url: "https://www.npr.org/2026/06/09/nx-s1-5847967/supreme-court-major-cases-left-2026", date: "Jun 2026" },

      { headline: "Markets and gas prices ease on the Hormuz reopening — analysts urge caution",
        summary: "Stocks sat near records and US gas fell below $4/gallon as Hormuz traffic resumed (Brent ~$80.57, WTI ~$77.54 on June 19), but analysts warned markets may be underpricing the fragile 60-day window and the risk that the Lebanon fighting derails the US–Iran track.",
        source: "CNN Business", url: "https://www.cnn.com/2026/06/19/business/markets-oil-stocks-gas-strait-of-hormuz", date: "Jun 19, 2026" }
    ]
  },

  /* ---------- SOURCES (footer credits) ---------- */
  sources: [
    { name: "Trading Economics", url: "https://tradingeconomics.com/" },
    { name: "stockanalysis.com", url: "https://stockanalysis.com/" },
    { name: "CNBC",              url: "https://www.cnbc.com/" },
    { name: "Al Jazeera",        url: "https://www.aljazeera.com/" },
    { name: "PBS NewsHour",      url: "https://www.pbs.org/newshour/" },
    { name: "NPR",               url: "https://www.npr.org/" },
    { name: "Wamda",             url: "https://www.wamda.com/" },
    { name: "Crunchbase News",   url: "https://news.crunchbase.com/" }
  ]
};

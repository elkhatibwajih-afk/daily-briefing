/* ============================================================
   DAILY BRIEFING — DATA FILE
   ------------------------------------------------------------
   This file holds everything your dashboard displays.
   It is regenerated each time you run  /update-news  in Claude Code.
   You normally never edit this by hand.

   Last generated: June 22, 2026
   ============================================================ */

window.DASHBOARD_DATA = {

  dateLabel: "Monday, June 22, 2026",
  lastUpdated: "June 22, 2026",
  updatedAt: "June 22, 2026, 8:44 AM (Beirut)",
  asOfNote: "Monday, pre-US-open. US stocks & indices: Thu Jun 18 close (US shut Fri Jun 19 for Juneteenth; reopens this afternoon Beirut time). Europe: Fri Jun 19 close. Asia: trading Mon Jun 22 — Nikkei hit a fresh record, Hang Seng slid — but levels shown are last confirmed closes. Gulf: Sun Jun 21 close (UAE: Fri Jun 19). Commodities: Fri Jun 19 settles. Rates, FX & crypto: live Mon Jun 22 AM. No new US session since Thursday, so the index chart isn't extended today.",
  drivingStory: "US markets are still showing Thursday's close — they were shut Friday for Juneteenth and reopen this afternoon (Beirut time), with futures pointing lower as Iran–Hezbollah tensions flare again: Trump threatened fresh strikes over Hezbollah and Iran re-restricted the Strait of Hormuz Monday, sending oil whipsawing. Asia split — the Nikkei printed a new record while Hong Kong fell — and the Gulf reopened Sunday slightly softer. Crypto is roughly flat (Bitcoin ~$64k). The week's marquee events: Thursday's US PCE inflation print and the US-brokered Lebanon–Israel talks in Washington (Jun 23 & 25).",

  /* Short labels for the most recent trading sessions (oldest → newest), used as the index-chart x-axis & hover dates. NYSE calendar; ends at the latest US close (Thu Jun 18 — no US session Fri Jun 19 Juneteenth, then the weekend). */
  histDates: ["May 19","May 20","May 21","May 22","May 26","May 27","May 28","May 29","Jun 1","Jun 2","Jun 3","Jun 4","Jun 5","Jun 8","Jun 9","Jun 10","Jun 11","Jun 12","Jun 15","Jun 16","Jun 17","Jun 18"],

  /* ---------- MARKETS ---------- */
  markets: {

    indices: [
      { name: "S&P 500",          level: 7500.58,  day: "+1.08", month: "+2.00", ytd: "+9.6", note: "Thu Jun 18 close; US reopens Mon afternoon (futures pointed lower).", hist: [7354,7433,7446,7473,7519,7520,7564,7580,7600,7610,7554,7584,7384,7406,7387,7267,7394,7431,7554,7511,7420,7501] },
      { name: "Nasdaq Composite", level: 26517.93, day: "+1.91", month: "+2.50", ytd: "+14.1", hist: [25871,26270,26293,26344,26656,26675,26917,26973,27087,27094,26854,26831,25709,25930,25679,25170,25810,25889,26684,26376,26022,26518] },
      { name: "Nasdaq 100",       level: 30406.19, day: "+2.48", month: "+2.50", ytd: "+19.7", note: "Thu Jun 18 close." },
      { name: "Dow Jones",        level: 51564.70, day: "+0.14", month: "+4.50", ytd: "+7.3", hist: [49364,50009,50286,50580,50462,50644,50669,51032,51079,51308,50687,51562,50867,50786,50872,49919,50849,51202,51671,52000,51493,51565] },
      { name: "Russell 2000",     level: 2979.77,  day: "+2.12", month: "+8.50", ytd: "+20.1", hist: [2747,2817,2843,2869,2921,2920,2937,2919,2906,2932,2894,2935,2834,2855,2867,2835,2921,2944,2965,2939,2918,2980] },
      { name: "STOXX Europe 600", level: 636.00,   day: "-0.20", month: "+2.40", ytd: "+7.4", note: "Fri Jun 19 close (Europe pre-open Monday).", hist: [621,625,632,628,628,625,626,621,625,621,624,623,622,619,619,618,622,633,634,636,637,639] },
      { name: "FTSE 100",         level: 10363.27, day: "-0.35", month: "-0.66", ytd: "+2.9", note: "Fri Jun 19 close.", hist: [10432,10443,10466,10491,10505,10426,10409,10339,10374,10332,10360,10368,10373,10227,10255,10304,10472,10431,10494,10478,10504,10406] },
      { name: "Nikkei 225",       level: 71250.06, day: "+0.28", month: "+9.60", ytd: "+41.5", note: "Fri Jun 19 close; extended to a fresh record intraday Mon Jun 22 (~72,700). Some sites misreport YTD ~+80% (a base-date error) — true YTD ~+41%.", hist: [64996,64999,64693,66330,66310,66934,66734,68402,67471,66588,63792,64025,65417,64179,64217,66020,68463,69318,68755,69980,69902,71053] },
      { name: "Hang Seng",        level: 23924.81, day: "-1.59", month: "-6.70", ytd: "-6.7", note: "Thu Jun 18 close; slipping again intraday Mon Jun 22 (HK was shut Fri Jun 19 for Dragon Boat).", hist: [25651,25387,25606,25599,25328,25006,25182,25398,26038,25633,25253,24962,24657,24566,24408,24249,24718,24843,24494,24312,24312,23925] }
    ],

    rates: [
      { name: "US 10-Year Treasury", value: "4.49%",      change: "Cash market reopens Mon; up ~3bp on the hawkish-Fed bias" },
      { name: "US 2-Year Treasury",  value: "4.23%",      change: "Up ~5bp; most sensitive to the Jun 17 hawkish dot plot" },
      { name: "Fed Funds (target)",  value: "3.50–3.75%", change: "Held Jun 17 (Warsh's debut); dot plot now signals a 2026 HIKE" }
    ],

    fx: [
      { name: "EUR/USD",            value: "1.1457", day: "-0.12" },
      { name: "USD/JPY",            value: "161.60", day: "+0.20" },
      { name: "GBP/USD",            value: "1.3215", day: "-0.14" },
      { name: "Dollar Index (DXY)", value: "100.90", day: "+0.14" }
    ],

    crypto: [
      { name: "Bitcoin",  price: 64160, day: "-0.1", month: "+15.1", year: "+37.3" },
      { name: "Ethereum", price: 1735,  day: "+0.2", month: "+15.9", year: "+23.3" }
    ]
  },

  /* ---------- REGIONAL MARKETS (GCC & Egypt) ---------- */
  /* Latest closes: Saudi/Qatar/Kuwait/Oman/Egypt = Sun Jun 21 · UAE (ADX/DFM) = Fri Jun 19 · Bahrain = Thu Jun 18 */
  regionalMarkets: [
    { name: "Saudi · TASI",        level: 11076.67, day: "-0.40", month: "-0.01", ytd: "+5.58", note: "Sun Jun 21 close" },
    { name: "Abu Dhabi · ADX",     level: 10016.82, day: "-0.96", month: "+4.36", ytd: "+0.24", note: "Fri Jun 19 close" },
    { name: "Dubai · DFM",         level: 6163.50,  day: "-1.69", month: "+9.54", ytd: "+1.90", note: "Fri Jun 19 close" },
    { name: "Qatar · QE",          level: 10480.95, day: "-0.29", month: "-2.11", ytd: "-2.62", note: "Sun Jun 21 close" },
    { name: "Kuwait · All-Share",  level: 8759.75,  day: "-0.01", month: "-1.20", ytd: "-1.66", note: "Sun Jun 21 close" },
    { name: "Bahrain · All-Share", level: 2028.09,  day: "+0.60", month: "+5.32", ytd: "-1.86", note: "Thu Jun 18 close" },
    { name: "Oman · MSX 30",       level: 7489.17,  day: "-1.23", month: "-2.85", ytd: "+27.65" , note: "Sun Jun 21 close; +27.7% YTD (the ~+65% headline is the 1-year figure)" },
    { name: "Egypt · EGX 30",      level: 52679.45, day: "+0.11", month: "-0.34", ytd: "+25.94", note: "Sun Jun 21 close; +25.9% YTD (the ~+70% headline is the 1-year figure)" }
  ],

  /* ---------- WEEK AHEAD (scheduled catalysts) ---------- */
  weekAhead: [
    { date: "Mon Jun 22", category: "Geopolitics", event: "Lebanon–Israel talks open in Washington (military track)", detail: "5th round of US-brokered direct talks begins; agenda is the 'pilot zones' for exclusive Lebanese Army control and an Israeli withdrawal." },
    { date: "Mon Jun 22", category: "Geopolitics", event: "US–Iran technical talks continue", detail: "Follow-through from Sunday's Switzerland round; a 'High-Level Committee' and a 60-day roadmap were set up — but Iran re-restricted Hormuz Monday." },
    { date: "Tue Jun 23", category: "Geopolitics", event: "Lebanon–Israel talks — political track", detail: "Political negotiations begin in Washington (runs Jun 23 & 25); Hezbollah disarmament is a US precondition, and Hezbollah is excluded." },
    { date: "Tue Jun 23", category: "Earnings", event: "FedEx Q4 (after close)", detail: "First report fully post the Freight spin-off (effective Jun 1); a bellwether for global shipping. Consensus ~$5.91 EPS." },
    { date: "Wed Jun 24", category: "Earnings", event: "Micron FQ3 (after close)", detail: "Key AI / HBM-memory demand gauge — HBM reportedly sold out for 2026; stock up sharply YTD." },
    { date: "Wed Jun 24", category: "Earnings", event: "Paychex Q4", detail: "An SMB-payrolls read-through (consensus ~$1.31 EPS)." },
    { date: "Thu Jun 25", category: "Econ", event: "US PCE inflation (May) — the week's marquee print", detail: "The Fed's preferred inflation gauge; core PCE seen ~+0.1–0.2% m/m. Lands the same morning as GDP & durable goods." },
    { date: "Thu Jun 25", category: "Econ", event: "Final Q1 GDP + durable goods + jobless claims", detail: "Third GDP estimate (~+1.6% annualized), May durable goods, and weekly claims — all 8:30am ET." },
    { date: "Thu Jun 25", category: "Central Bank", event: "Banxico (Mexico) rate decision", detail: "After May's cut to 6.50% the bank signaled a pause — base case is a hold or at most a 25bp cut." },
    { date: "Thu Jun 25", category: "IPO", event: "Doncasters (NYSE: DPC) ~$700M IPO", detail: "Aerospace/defense superalloy-parts maker; 23.33M shares at $28–32 (~$4.3B market cap)." },
    { date: "Tue Jun 30", category: "Earnings", event: "Nike Q4 (after close)", detail: "A read on the US consumer and Nike's turnaround/inventory." },
    { date: "Tue Jun 30", category: "Geopolitics", event: "US Supreme Court term ends", detail: "Major rulings expected: birthright-citizenship order, transgender-athlete bans, and the president's power to fire agency heads." },
    { date: "Wed Jul 1", category: "Econ", event: "ISM Manufacturing (June)", detail: "Prior 54.0 (strongest since 2022); a gauge of factory activity into H2." },
    { date: "Thu Jul 2", category: "Econ", event: "June jobs report", detail: "Nonfarm payrolls released a day early ahead of the Jul 3–4 holiday (verify on the BLS schedule)." }
  ],

  /* ---------- BIG STOCKS (largest by market cap) ---------- */
  /* Price & 1-day = Thu Jun 18 close (US shut Fri Jun 19 + weekend; reopens Mon afternoon) · 1M / 1Y = trailing price return */
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
  /* Latest settles = Fri Jun 19 (futures closed for the weekend; reopened Sun evening — oil whipsawed Monday on conflicting Iran headlines) */
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
    { category: "Macro", headline: "Markets brace for a lower US open Monday as Iran tensions flare again",
      summary: "US futures pointed down (S&P ~-0.4%) into Monday's reopen after the long weekend, as Trump threatened renewed strikes over Hezbollah and Iran re-restricted the Strait of Hormuz; in Asia the Nikkei printed a fresh record while Hong Kong fell. US cash markets were shut Fri Jun 19 for Juneteenth.",
      source: "Trading Economics", url: "https://tradingeconomics.com/united-states/stock-market", date: "Jun 22, 2026" },

    { category: "Macro", headline: "Fed holds, but the dot plot flips to a 2026 HIKE in Warsh's debut",
      summary: "The FOMC held at 3.50–3.75% on June 17 (Kevin Warsh's first meeting), but the median 2026 dot rose to 3.8% (from 3.4%), erasing the prior cut — 9 of 18 members now see a hike this year, with year-end PCE inflation lifted to 3.6%.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/17/fed-interest-rate-decision-june-2026.html", date: "Jun 17, 2026" },

    { category: "Macro", headline: "Oil whipsaws: a ~20% drop on the Hormuz reopening, then back up on new restrictions",
      summary: "Brent fell ~20% from its 2026 highs to ~$79 mid-week on the US–Iran framework to reopen the Strait of Hormuz, settled Fri at $80.57, then swung again Monday as Iran re-imposed Hormuz restrictions (traffic reportedly down to ~5 vessels) — reintroducing a war-risk premium.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/19/oil-prices-wti-brent-crude-us-iran-deal-strait-hormuz-shipping-recovery.html", date: "Jun 19, 2026" },

    { category: "Macro", headline: "ECB–BoE divergence: ECB hikes to 2.25%, BoE holds at 3.75%",
      summary: "The ECB lifted its deposit rate 25bp to 2.25% on June 11 (first hike since 2023), citing Middle East-driven inflation, with Lagarde flagging a possible second hike; the Bank of England held at 3.75% on June 17 on a 7–2 vote (two dissenters wanted a hike) — a transatlantic split.",
      source: "ING", url: "https://think.ing.com/articles/ecb-after-press-conference-jun26-meeting/", date: "Jun 11, 2026" },

    { category: "M&A", headline: "Fox to acquire Roku for ~$22B in a landmark connected-TV deal",
      summary: "Fox agreed to buy Roku at $160/share (~60% cash / 40% Fox stock), a ~$22B enterprise value and a 34% premium; Fox holders would own ~73% of the combined group, which targets the #3 US TV spot, closing 1H 2027.",
      source: "Fox Business", url: "https://www.foxbusiness.com/markets/fox-corporation-announces-22b-acquisition-roku-landmark-streaming-live-tv-deal", date: "Jun 15, 2026" },

    { category: "M&A", headline: "Olin and Huntsman to merge — a ~$12B+ North American chemicals leader",
      summary: "An all-stock merger of equals (~$12.5B combined 2025 revenue): Huntsman holders receive 0.5476 Olin shares each, leaving Olin holders ~54.5% and Huntsman ~45.5%, targeting $400M+ in synergies with a 1H 2027 close.",
      source: "Yahoo Finance / PR Newswire", url: "https://finance.yahoo.com/markets/stocks/articles/olin-huntsman-merge-create-12-120300232.html", date: "Jun 16, 2026" },

    { category: "M&A", headline: "Nuvei to acquire Payoneer for ~$2.75B",
      summary: "Payments group Nuvei agreed to buy cross-border platform Payoneer Global in a ~$2.75B deal, extending fintech consolidation in B2B payments.",
      source: "Inside Arbitrage", url: "https://www.insidearbitrage.com/category/new-merger-announcements/", date: "Jun 16, 2026" },

    { category: "M&A", headline: "Altaris to take Simulations Plus private for ~$375M",
      summary: "PE firm Altaris agreed to acquire life-sciences modeling-software maker Simulations Plus for $18.50/share (~$375M) in cash — a 26% premium to the 60-day VWAP.",
      source: "SEC (8-K)", url: "https://www.sec.gov/Archives/edgar/data/0001023459/000102345926000020/pressreleasewithrespecttot.htm", date: "Jun 16, 2026" },

    { category: "IPO", headline: "SpaceX completes the largest IPO in history — $75B raised",
      summary: "SpaceX (Nasdaq: SPCX) priced at $135/share on June 11, selling 555.6M shares for a ~$75B raise at a ~$1.77T valuation, and closed its June 12 debut +19% at ~$161; the stock spiked to ~$226 on Jun 16 before pulling back.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/12/spacex-ipo-spcx-live-updates.html", date: "Jun 12, 2026" },

    { category: "IPO", headline: "Fintech IPO pipeline builds behind SpaceX — Revolut eyes a ~$75B Q4 listing",
      summary: "Revolut filed a confidential S-1 targeting a ~$75B IPO in Q4 2026 (reportedly choosing Nasdaq over London); the broader queue includes Kraken (~$20B), Klarna (~$15B) and Plaid (~$6.1B), with OpenAI and Anthropic also filing confidentially.",
      source: "Dealroom", url: "https://dealroom.net/blog/upcoming-recent-ipos", date: "Jun 2026" },

    { category: "Earnings", headline: "Accenture beats and narrows guidance: revenue +6% to $18.7B",
      summary: "Accenture posted fiscal Q3 revenue of $18.7B (+6%) and EPS of $3.80 with a 17.0% operating margin — a closely-watched read on enterprise IT and AI-services demand.",
      source: "Accenture", url: "https://newsroom.accenture.com/content/3qfy26-earnings/accenture-reports-third-quarter-fiscal-2026-results.pdf", date: "Jun 18, 2026" },

    { category: "Earnings", headline: "Kroger Q1 beats: $46.1B revenue, e-commerce +19%",
      summary: "Kroger reported Q1 adjusted EPS of $1.58 (GAAP $1.46) on $46.1B revenue, with identical sales (ex-fuel) up 1.0% and e-commerce up ~19%, holding its FY26 adjusted-EPS guidance.",
      source: "Kroger (SEC)", url: "https://www.sec.gov/Archives/edgar/data/0000056873/000110465926075395/tm2618219d1_ex99-1.htm", date: "Jun 18, 2026" },

    { category: "Earnings", headline: "Lennar Q2 EPS beats but homebuilder margins compress",
      summary: "Lennar reported Q2 EPS of $1.31 (vs $1.24 est) on revenue of $7.94B, as home-sales gross margin fell to 15.6% from 17.8% — a sign of a softening housing market under higher-for-longer rates.",
      source: "AlphaStreet", url: "https://news.alphastreet.com/lennar-q2-2026-deep-dive-eps-beats-by-5-6-revenue-down-5/", date: "Jun 18, 2026" },

    { category: "Capital Markets", headline: "Nvidia prices a record $25B bond — its largest-ever debt deal",
      summary: "Nvidia sold $25B across seven tranches (its first high-grade issuance since 2021, upsized on ~$85B of orders, 3x+ covered) to fund AI-infrastructure buildout, with the 30-year tranche pricing at just 65bp over Treasuries.",
      source: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-06-15/nvidia-kicks-off-first-high-grade-bond-offering-since-2021", date: "Jun 15, 2026" },

    { category: "Capital Markets", headline: "US Treasury reshapes 20-year settlement, plans liquidity buybacks",
      summary: "The Treasury said 20-year reopenings will now settle on the Friday of auction week and flagged up to $38B of off-the-run buybacks (plus up to $25B in the 1m–2y bucket) to support market liquidity.",
      source: "US Treasury", url: "https://home.treasury.gov/news/press-releases/sb0489", date: "Jun 18, 2026" },

    { category: "IPO", headline: "The IPO window stays open — heavy mid-June calendar, Doncasters next",
      summary: "US pricings clustered in mid-June and Q1 2026 global IPOs raised $42.6B across 251 deals (+45% in proceeds y/y); UK aerospace-parts maker Doncasters is set to price a ~$700M NYSE listing around June 25.",
      source: "Renaissance Capital / IPOScoop", url: "https://www.iposcoop.com/current-year-pricings/", date: "Jun 18, 2026" }
  ],

  /* ---------- VENTURE CAPITAL (GCC-weighted + big global) ---------- */
  ventureCapital: [
    { region: "GCC", headline: "CNTXT AI (UAE) closes a $60M Series A for sovereign AI infrastructure",
      summary: "UAE data-and-AI firm CNTXT AI raised a $60M Series A co-led by Abu Dhabi's AI71 and BlueFive Capital to deploy secure sovereign AI for enterprise and government clients — the largest equity round in the latest MENA weekly wrap (it also acquired Arabic voice-AI startup Actualize).",
      source: "Wamda", url: "https://www.wamda.com/2026/06/cntxt-ai-closes-60-million-series-deploy-secure-ai-infrastructure-worldwide", date: "Jun 18, 2026" },

    { region: "GCC", headline: "MENA startups raised $454.7M in May — up 202% month-on-month",
      summary: "Regional funding jumped 202% m/m (and 76% y/y) across 33 deals, though debt was ~66% of the total; the UAE led with $379M (driven by TruKKer's $300M securitization) and Saudi Arabia followed at $70M.",
      source: "Wamda", url: "https://www.wamda.com/2026/06/mena-startups-raise-4547-million-2026-led-debt-financing", date: "Jun 8, 2026" },

    { region: "GCC", headline: "Blnk (Egypt) raises $37.1M to expand consumer lending",
      summary: "Egyptian fintech Blnk secured $37.1M ($12.5M Series A equity + $24.6M local debt) led by Algebra Ventures, with SANAD Fund, Endeavor Catalyst and Emirates International Investment Company — funding a push into underserved consumer credit and a card programme.",
      source: "Wamda", url: "https://www.wamda.com/2026/06/blnk-secures-37-million-deepen-financial-inclusion-egypt", date: "Jun 8, 2026" },

    { region: "GCC", headline: "Anara Impact Capital reaches a $48M first close on a MENA fund",
      summary: "Anara hit a $48M first close (toward ~$50M) for its debut fund backing seed/Series A startups in learning, wellbeing and climate across MENA, with KfW, Dara Holdings and ISSF among the backers; Fadi Ghandour chairs the IC.",
      source: "Wamda", url: "https://www.wamda.com/2026/06/anara-impact-capital-announces-48-million-close-mena-focused-fund", date: "Jun 2026" },

    { region: "GCC", headline: "Saudi fintech Stitch raises $25M — a16z's first GCC bet",
      summary: "Andreessen Horowitz led a $25M Series A into Stitch (a cloud-native banking OS) — its first-ever Gulf investment — with Arbor Ventures, COTU, Raed Ventures and SVC participating.",
      source: "Arab News", url: "https://www.arabnews.com/node/2643776/amp", date: "Jun 2026" },

    { region: "GCC", headline: "WakeCap (Saudi Arabia) acquires AI planning startup Frontline",
      summary: "Saudi construction-tech firm WakeCap acquired Frontline, an AI project-planning platform, to build an end-to-end 'construction intelligence' stack — aimed at the Kingdom's ~$1T construction pipeline (deal value undisclosed).",
      source: "Wamda", url: "https://www.wamda.com/2026/06/wakecap-acquires-frontline-builds-end-end-construction-intelligence-platform", date: "Jun 2026" },

    { region: "GCC", headline: "Saudi PIF's HUMAIN secures up to $1.2B for AI data centres",
      summary: "PIF-owned HUMAIN signed a financing framework worth up to $1.2B with Saudi Arabia's National Infrastructure Fund to build as much as 250MW of hyperscale AI data-center capacity; HUMAIN is also reported to be preparing a ~$10B AI venture fund.",
      source: "Arab News", url: "https://www.arabnews.com/node/2630217/business-economy", date: "2026" },

    { region: "GCC", headline: "Zuvees (UAE) raises $1.6M toward a Series A for AI gifting",
      summary: "UAE AI-gifting platform Zuvees raised $1.6M from IvyCap Ventures as part of an ongoing Series A (~$3.3M raised so far, targeting a ~$6.6–8.8M close) to scale across the Middle East and expand its AI product.",
      source: "Wamda", url: "https://www.wamda.com/2026/06/zuvees-raises-fresh-capital-expand-middle-east-global-markets", date: "Jun 8, 2026" },

    { region: "Global", headline: "SpaceX completes a record $75B IPO at a ~$1.75T valuation",
      summary: "SpaceX priced the largest IPO ever — 555.6M shares at $135 ($75B raised) — and closed its Nasdaq debut up ~19% (~$161); having earlier absorbed xAI in an all-stock merger, Grok now sits inside the public company.",
      source: "NPR", url: "https://www.npr.org/2026/06/11/nx-s1-5853199/spacex-ipo-price-elon-musk", date: "Jun 12, 2026" },

    { region: "Global", headline: "Ramp raises $750M at a $44B valuation",
      summary: "Spend-management fintech Ramp closed $750M led by Iconiq with GIC and Ontario Teachers', lifting its valuation to $44B — among the largest global rounds of the month.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/", date: "Jun 5, 2026" },

    { region: "Global", headline: "Anthropic raises ~$65B at a ~$965B valuation",
      summary: "AI lab Anthropic raised a record ~$65B (Altimeter, Dragoneer, Greenoaks, Sequoia, Capital Group, Coatue, D1) at a ~$965B valuation — briefly the most valuable standalone AI startup.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/", date: "Jun 2026" },

    { region: "Global", headline: "a16z raises a record $15B+ across its 2026 funds",
      summary: "Andreessen Horowitz raised $15B+ across strategies (with ~$3.4B earmarked for AI) — its largest haul ever — and is reported to be eyeing an even larger growth-stage AI megafund.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/a16z-15b-new-funds-american-dynamism-ben-horowitz/", date: "2026" }
  ],

  /* ---------- LEBANON ECONOMY ---------- */
  lebanonEconomy: [
    { label: "Lira / USD",         value: "~89,500",     sub: "Official rate; parallel converged ~89,600 (mid-Jun 2026)" },
    { label: "Inflation (y/y)",    value: "~20%",        sub: "April 2026 — re-accelerating from ~17% in March" },
    { label: "BdL FX Reserves",    value: "~$11.63B",    sub: "Mid-June 2026 (+$185M in the first two weeks of June)" },
    { label: "Eurobonds",          value: "~25–27¢",     sub: "On the dollar; in default (last firm quote — not freshly re-quoted)" },
    { label: "IMF Program",        value: "Stalled",     sub: "Staff-level talks only; gated on bank-resolution & reforms" },
    { label: "Reconstruction",     value: "~$11B",       sub: "World Bank estimate after the 14-month war" },
    { label: "GDP Growth",         value: "+3.5% (2025)", sub: "First growth in ~8 years; the renewed 2026 war clouds the outlook" },
    { label: "Bank-System Losses", value: "~$72B",       sub: "The 'gap'; Gap Law approved in draft Dec 2025, still contested" }
  ],

  /* ---------- GEOPOLITICAL MAP (today's hotspots) ---------- */
  mapPoints: [
    { place: "Beirut",            lat: 33.89, lng: 35.50,  weight: 3, region: "Lebanon",     label: "Government readies for the Washington talks; ceasefire holds but fragile after a deadly weekend" },
    { place: "South Lebanon",     lat: 33.38, lng: 35.48,  weight: 3, region: "Lebanon",     label: "100+ Israeli strikes over the weekend; the 'pilot zones' for the Lebanese Army are the core dispute" },
    { place: "Washington",        lat: 38.90, lng: -77.04, weight: 3, region: "US",          label: "Hosts the Lebanon–Israel 5th round (Jun 23 & 25) plus parallel US–Iran diplomacy" },
    { place: "Bürgenstock, CH",   lat: 46.99, lng: 8.37,   weight: 3, region: "Iran",        label: "Sunday US–Iran round nearly collapsed over Trump's Hormuz threat; a 60-day roadmap was set" },
    { place: "Tehran",            lat: 35.69, lng: 51.39,  weight: 2, region: "Iran",        label: "Araghchi claims sanctions waivers & asset releases (unconfirmed by Washington)" },
    { place: "Strait of Hormuz",  lat: 26.57, lng: 56.25,  weight: 2, region: "Gulf",        label: "Iran re-restricts transit Monday (~5 vessels) citing ceasefire violations" },
    { place: "Doha",              lat: 25.29, lng: 51.53,  weight: 2, region: "Gulf",        label: "Qatar co-mediates the US–Iran talks and brokered the Israel–Hezbollah ceasefire" },
    { place: "Abu Dhabi",         lat: 24.45, lng: 54.38,  weight: 2, region: "Gulf",        label: "CNTXT AI raises $60M; UAE leads MENA deal flow" },
    { place: "Damascus",          lat: 33.51, lng: 36.29,  weight: 1, region: "Syria",       label: "A US-mediated Syria–Israel security pact reported 'close'; al-Sharaa resists full normalization" },
    { place: "Gaza",              lat: 31.50, lng: 34.47,  weight: 1, region: "Israel-Gaza", label: "The Oct-2025 truce holds but is badly eroded; aid still throttled" }
  ],
  mapArcs: [
    { from: [38.90, -77.04], to: [35.69, 51.39] },
    { from: [38.90, -77.04], to: [33.89, 35.50] },
    { from: [46.99, 8.37],   to: [35.69, 51.39] },
    { from: [25.29, 51.53],  to: [33.89, 35.50] },
    { from: [35.69, 51.39],  to: [33.89, 35.50] }
  ],

  /* ---------- POLITICS ---------- */
  politics: {

    middleEast: [
      { region: "Lebanon", headline: "Ceasefire frays into the weekend — 100+ strikes Saturday, fresh exchanges",
        summary: "The Israel–Hezbollah truce that took effect Friday at ~4pm holds but is badly strained: Al Jazeera counted 100+ Israeli strikes on the south since midnight Saturday (32+ killed that day), while Israel said Hezbollah fired 50+ projectiles and Hezbollah said it hit troops advancing near Nabatieh. Both sides accuse the other of 'blatant violations.'",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/20/us-envoy-headed-for-switzerland-israeli-strikes-on-lebanon-threaten-talks", date: "Jun 20, 2026" },

      { region: "Lebanon", headline: "War toll climbs to 4,057 dead / 12,121 wounded; Friday alone killed 83",
        summary: "Lebanon's Health Ministry put the cumulative toll since March 2 at 4,057 killed and 12,121 wounded, including 83 killed and 141 wounded on Friday after the ceasefire was announced — strikes continued past the truce hour. Hezbollah killed five Israeli soldiers in recent days, including in a tank attack near Nabatieh.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/20/us-envoy-headed-for-switzerland-israeli-strikes-on-lebanon-threaten-talks", date: "Jun 20, 2026" },

      { region: "Lebanon", headline: "5th round of direct Lebanon–Israel talks opens in Washington (Jun 23 & 25)",
        summary: "A US–Lebanon–Israel statement confirmed the next round of direct negotiations in Washington, split into political and military tracks, with both sides agreeing to 'swiftly advance' pilot zones under exclusive Lebanese Army control (Hezbollah excluded) and a paired Israeli withdrawal. Both reaffirmed 'no hostile intent.'",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/19/us-announces-new-round-of-israel-lebanon-talks-in-washington-next-week", date: "Jun 19, 2026" },

      { region: "Lebanon", headline: "Reconstruction need ~$11B; IMF still stalled; Hezbollah won't disarm under fire",
        summary: "The World Bank pegs recovery needs near $11B (with an initial $250M tranche of a $1B framework), while a new IMF program remains blocked pending reforms. A weakened Hezbollah reiterates it will not disarm 'as long as Israeli attacks continue' — keeping the disarmament debate at an impasse into the Washington talks.",
        source: "World Bank", url: "https://www.worldbank.org/en/news/press-release/2025/03/07/lebanon-s-recovery-and-reconstruction-needs-estimated-at-us-11-billion", date: "Jun 2026" },

      { region: "Iran", headline: "Sunday Switzerland talks happened — nearly collapsed over Trump's Hormuz threat",
        summary: "The first US–Iran session at Bürgenstock concluded Sunday: Iran briefly refused to continue after Trump warned 'you close it [Hormuz] and you won't have a country,' but the talks resumed. Mediators Qatar and Pakistan called the atmosphere 'constructive,' and the parties set up a 'High-Level Committee,' a 60-day roadmap and a Lebanon deconfliction cell. JD Vance led the US side; FM Araghchi led Iran's.",
        source: "NBC News", url: "https://www.nbcnews.com/world/iran/president-jd-vance-switzerland-iran-talks-trump-threatens-toll-rcna351033", date: "Jun 21, 2026" },

      { region: "Gulf", headline: "Iran re-restricts the Strait of Hormuz Monday; traffic collapses",
        summary: "On June 22 Iran announced fresh Hormuz restrictions, citing alleged ceasefire violations; ship traffic reportedly fell to about 5 vessels from 26 the prior day. Insurance rates had earlier spiked 4–6x and Brent topped $100 during the crisis — so the move quickly re-introduced an oil risk premium.",
        source: "Iran International", url: "https://www.iranintl.com/en/liveblog/202606208803", date: "Jun 22, 2026" },

      { region: "Syria", headline: "Syria–Israel security pact reported 'close'; al-Sharaa resists full normalization",
        summary: "A US-mediated Syria–Israel security deal is reportedly nearing completion around a 'joint fusion mechanism' for intelligence-sharing and de-escalation, though President Ahmed al-Sharaa balks at full normalization absent guarantees on territorial integrity and a Druze-integration deal in the south.",
        source: "Kurdistan24", url: "https://www.kurdistan24.net/en/story/889716/israel-syria-move-toward-us-brokered-security-deal-diplomatic-ties", date: "Jun 2026" },

      { region: "Israel-Gaza", headline: "Gaza's October-2025 truce holds but is badly eroded; aid throttled",
        summary: "Eight months on, the ceasefire technically holds but violations have mounted (hundreds killed since), and humanitarian access remains far below the 600-trucks/day target, with most of Gaza's population still facing acute food insecurity.",
        source: "Al Jazeera", url: "https://jstreet.org/six-months-in-assessing-the-status-of-the-gaza-ceasefire/", date: "Jun 2026" }
    ],

    us: [
      { headline: "Trump's Hormuz threat rattles the Sunday talks; he warns of renewed strikes over Hezbollah",
        summary: "Trump said he'd warned Iran overnight not to close Hormuz ('you won't have a country'), a statement aired mid-negotiation that briefly stalled the Bürgenstock talks, and separately threatened to 'hit Iran very hard again… only harder' if attacks on Israel and Lebanon continue. US and Iranian readouts diverged on Monday.",
        source: "NBC News", url: "https://www.nbcnews.com/world/iran/president-jd-vance-switzerland-iran-talks-trump-threatens-toll-rcna351033", date: "Jun 21, 2026" },

      { headline: "Fed holds in Warsh's debut; cut outlook scrapped, a hike now on the table",
        summary: "In Kevin Warsh's first meeting as Chair, the FOMC voted 12–0 to hold at 3.50–3.75% but removed its 2026 cut projection and signaled a possible hike (9 of 18 members), with PCE inflation projected at 3.6% on the Middle East energy shock — even as Trump pushes for cuts.",
        source: "NPR", url: "https://www.npr.org/2026/06/17/nx-s1-5860084/fed-chief-warsh-first-fomc-meeting", date: "Jun 17, 2026" },

      { headline: "House-passed Iran War Powers Resolution (215–208) stalls in the Senate",
        summary: "The House voted 215–208 on June 3 (four Republicans crossing over) to direct Trump to end hostilities with Iran — the first such vote — but it now sits in the Senate without the votes, and as a concurrent resolution its legal force is disputed. Largely symbolic pressure as the war enters its fourth month.",
        source: "NPR", url: "https://www.npr.org/2026/06/03/nx-s1-5845102/house-iran-war-powers-vote", date: "Jun 3, 2026" },

      { headline: "Supreme Court enters its final stretch with major rulings pending",
        summary: "With the term ending around June 30, decisions are still outstanding on birthright citizenship (the Court seemed likely to strike Trump's order), transgender school-sports bans (likely upheld), and whether the president can fire independent-agency heads (likely sided with the president), plus gun-rights cases.",
        source: "SCOTUSblog", url: "https://www.scotusblog.com/2026/06/the-most-important-cases-yet-to-be-decided/", date: "Jun 2026" },

      { headline: "Oil-driven inflation and Hormuz risk dominate the US economic picture",
        summary: "The renewed Hormuz restrictions keep a war-risk premium in oil — the through-line linking the Iran war, the Fed's hawkish turn and market jitters into the new week — with US stocks set to reopen lower Monday and Friday's PCE print the key test.",
        source: "CNN Business", url: "https://www.cnn.com/2026/06/19/business/markets-oil-stocks-gas-strait-of-hormuz", date: "Jun 19, 2026" }
    ]
  },

  /* ---------- SOURCES (footer credits) ---------- */
  sources: [
    { name: "Trading Economics", url: "https://tradingeconomics.com/" },
    { name: "stockanalysis.com", url: "https://stockanalysis.com/" },
    { name: "CNBC",              url: "https://www.cnbc.com/" },
    { name: "Al Jazeera",        url: "https://www.aljazeera.com/" },
    { name: "NBC News",          url: "https://www.nbcnews.com/" },
    { name: "NPR",               url: "https://www.npr.org/" },
    { name: "Wamda",             url: "https://www.wamda.com/" },
    { name: "Crunchbase News",   url: "https://news.crunchbase.com/" }
  ]
};

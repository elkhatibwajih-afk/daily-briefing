/* ============================================================
   DAILY BRIEFING — DATA FILE
   ------------------------------------------------------------
   This file holds everything your dashboard displays.
   It is regenerated each time you run  /update-news  in Claude Code.
   You normally never edit this by hand.

   Last generated: June 29, 2026
   ============================================================ */

window.DASHBOARD_DATA = {

  dateLabel: "Monday, June 29, 2026",
  lastUpdated: "June 29, 2026",
  updatedAt: "June 29, 2026, 8:32 AM (Beirut)",
  asOfNote: "Monday, pre-US-open. US stocks & indices: Fri Jun 26 close (the US reopens this afternoon Beirut time — no new session yet, so the chart is unchanged). Europe: Fri Jun 26. Asia: trading Mon Jun 29 — the Nikkei slipped further (~−0.7%) while Hong Kong bounced (~+1.9%); table shows Friday's levels. Gulf: Sun Jun 28 close (UAE trades Mon–Fri, so ADX/DFM are Fri Jun 26). Commodities, FX & crypto: live Mon Jun 29 AM; rates: Fri Jun 26.",
  drivingStory: "US futures are bouncing to start a holiday-shortened, jobs-report week (June payrolls land Thursday) as the Iran war-risk premium keeps draining — oil is steadying near ~4-month lows ahead of Sunday's OPEC+ meeting, and the dollar eased for a second session after Friday's in-line PCE. The weekend's big story is in Lebanon: the US-brokered framework deal signed Friday is already unraveling at home — Speaker Berri says it 'will not pass' and Hezbollah calls it 'null and void,' while President Aoun and PM Salam defend it as a first step to sovereignty. The ECB's Sintra forum opens today and the Supreme Court hands down major rulings later (after this snapshot), with markets still showing Friday's closes pre-US-open.",

  /* Short labels for the most recent trading sessions (oldest → newest), used as the index-chart x-axis & hover dates. NYSE calendar; ends at the latest US close (Fri Jun 26 — US reopens Mon afternoon Beirut time). */
  histDates: ["May 19","May 20","May 21","May 22","May 26","May 27","May 28","May 29","Jun 1","Jun 2","Jun 3","Jun 4","Jun 5","Jun 8","Jun 9","Jun 10","Jun 11","Jun 12","Jun 15","Jun 16","Jun 17","Jun 18","Jun 22","Jun 23","Jun 24","Jun 25","Jun 26"],

  /* ---------- MARKETS ---------- */
  markets: {

    indices: [
      { name: "S&P 500",          level: 7354.02,  day: "-0.05", month: "-2.2", ytd: "+7.4", note: "Fri Jun 26 close; futures point higher Monday on the US–Iran de-escalation.", hist: [7354,7433,7446,7473,7519,7520,7564,7580,7600,7610,7554,7584,7384,7406,7387,7267,7394,7431,7554,7511,7420,7501,7473,7365,7358,7357,7354] },
      { name: "Nasdaq Composite", level: 25297.62, day: "-0.24", month: "-5.1", ytd: "+8.8", hist: [25871,26270,26293,26344,26656,26675,26917,26973,27087,27094,26854,26831,25709,25930,25679,25170,25810,25889,26684,26376,26022,26518,26167,25587,25477,25359,25298] },
      { name: "Nasdaq 100",       level: 29118.24, day: "-1.09", month: "-3.0", ytd: "+15.3", note: "Fri Jun 26 close." },
      { name: "Dow Jones",        level: 51876.11, day: "-0.09", month: "+2.8", ytd: "+8.0", hist: [49364,50009,50286,50580,50462,50644,50669,51032,51079,51308,50687,51562,50867,50786,50872,49919,50849,51202,51671,52000,51493,51565,51713,51667,51849,51921,51876] },
      { name: "Russell 2000",     level: 3010.08,  day: "+0.07", month: "+3.0", ytd: "+21.3", note: "Crossed 3,000 for the first time (Jun 22).", hist: [2747,2817,2843,2869,2921,2920,2937,2919,2906,2932,2894,2935,2834,2855,2867,2835,2921,2944,2965,2939,2918,2980,3004,2975,2987,3008,3010] },
      { name: "STOXX Europe 600", level: 635.88,   day: "-0.68", month: "+1.2", ytd: "+7.8", note: "Fri Jun 26 close.", hist: [621,625,632,628,628,625,626,621,625,621,624,623,622,619,619,618,622,633,634,636,637,639,639,635,635,640,636] },
      { name: "FTSE 100",         level: 10508.02, day: "-0.21", month: "0.0", ytd: "+5.8", note: "Fri Jun 26 close.", hist: [10432,10443,10466,10491,10505,10426,10409,10339,10374,10332,10360,10368,10373,10227,10255,10304,10472,10431,10494,10478,10504,10406,10438,10429,10429,10530,10508] },
      { name: "Nikkei 225",       level: 69360.88, day: "-4.15", month: "+6.7", ytd: "+37.8", note: "Fri Jun 26 close; slipped further to ~68,850 on Mon Jun 29. Some sites misreport YTD ~+80% (a base-date error) — true YTD ~+38%.", hist: [64996,64999,64693,66330,66310,66934,66734,68402,67471,66588,63792,64025,65417,64179,64217,66020,68463,69318,68755,69980,69902,71053,72354,69582,69384,72366,69361] },
      { name: "Hang Seng",        level: 22671.86, day: "-1.76", month: "-10.5", ytd: "-11.6", note: "Fri Jun 26 close; bounced ~+1.9% intraday Mon Jun 29.", hist: [25651,25387,25606,25599,25328,25006,25182,25398,26038,25633,25253,24962,24657,24566,24408,24249,24718,24843,24494,24312,24312,23925,23769,23336,23090,23077,22672] }
    ],

    rates: [
      { name: "US 10-Year Treasury", value: "4.37%",      change: "At a ~7-week low after the in-line PCE; steady into Monday" },
      { name: "US 2-Year Treasury",  value: "4.10%",      change: "Front end firm on the hawkish-Fed bias (2s10s ~+27bp)" },
      { name: "Fed Funds (target)",  value: "3.50–3.75%", change: "Held Jun 17; markets near a coin-flip on a Sept HIKE (~44%)" }
    ],

    fx: [
      { name: "EUR/USD",            value: "1.1386", day: "+0.02" },
      { name: "USD/JPY",            value: "161.69", day: "-0.06" },
      { name: "GBP/USD",            value: "1.3203", day: "+0.04" },
      { name: "Dollar Index (DXY)", value: "101.30", day: "-0.06" }
    ],

    crypto: [
      { name: "Bitcoin",  price: 59300, day: "-1.4", month: "-19.0", year: "-44.0" },
      { name: "Ethereum", price: 1565,  day: "-0.5", month: "-21.0", year: "-35.0" }
    ]
  },

  /* ---------- REGIONAL MARKETS (GCC & Egypt) ---------- */
  /* Latest close: Saudi/Qatar/Kuwait/Oman/Egypt = Sun Jun 28 · UAE (ADX/DFM) = Fri Jun 26 (UAE trades Mon–Fri) · Bahrain = Jun 24 */
  regionalMarkets: [
    { name: "Saudi · TASI",        level: 10907.67, day: "-0.23", month: "-1.54", ytd: "+4.0", note: "Sun Jun 28 close" },
    { name: "Abu Dhabi · ADX",     level: 9880.00,  day: "-1.32", month: "+2.38", ytd: "-1.1", note: "Fri Jun 26 close" },
    { name: "Dubai · DFM",         level: 6018.00,  day: "-0.10", month: "-4.32", ytd: "-0.5", note: "Fri Jun 26 close" },
    { name: "Qatar · QE",          level: 10293.72, day: "+0.12", month: "-2.48", ytd: "-4.4", note: "Sun Jun 28 close" },
    { name: "Kuwait · All-Share",  level: 8693.82,  day: "+0.07", month: "-0.76", ytd: "-2.4", note: "Sun Jun 28 close" },
    { name: "Bahrain · All-Share", level: 2041.60,  day: "+0.26", month: "+3.16", ytd: "-1.21", note: "Last quote Jun 24" },
    { name: "Oman · MSX 30",       level: 7402.65,  day: "+1.18", month: "-4.57", ytd: "+26.2", note: "Sun Jun 28 close; +26% YTD (the ~+64% headline is the 1-year figure)" },
    { name: "Egypt · EGX 30",      level: 50344.37, day: "-2.14", month: "-4.75", ytd: "+20.4", note: "Sun Jun 28 close; +20% YTD (the ~+52% headline is the 1-year figure)" }
  ],

  /* ---------- WEEK AHEAD (scheduled catalysts) ---------- */
  weekAhead: [
    { date: "Mon Jun 29", category: "Geopolitics", event: "US Supreme Court opinion day (rulings later today)", detail: "Marquee cases still pending — birthright citizenship, firing Fed Governor Lisa Cook (Trump v. Cook), and transgender sports." },
    { date: "Mon Jun 29", category: "Central Bank", event: "ECB Sintra Forum opens (through Jul 1)", detail: "Lagarde hosts global central bankers; a key venue for rate signals in a hawkish-Fed week." },
    { date: "Tue Jun 30", category: "Econ", event: "US consumer confidence + Chicago PMI", detail: "Conference Board confidence and a regional manufacturing gauge for June (quarter/half-end)." },
    { date: "Tue Jun 30", category: "Earnings", event: "Nike Q4 (after close)", detail: "A low bar — consensus ~$0.12 EPS on ~$10.85B revenue; China and tariff drag in focus." },
    { date: "Tue Jun 30", category: "IPO", event: "Lime (Nasdaq: LIME) IPO pricing", detail: "Uber-backed e-scooter operator; $24–26/share for a ~$1.8B valuation (Uber an anchor buyer)." },
    { date: "Tue Jun 30", category: "IPO", event: "ITG + Sinda price (trade Wed Jul 1)", detail: "ITG (digital infra, ~$400M) and Sinda (a silver miner, ~$235M) crowd the pre-holiday window." },
    { date: "Wed Jul 1", category: "Econ", event: "ISM Manufacturing + ADP + JOLTS", detail: "A heavy data day — factory activity, private payrolls and job openings ahead of Thursday's jobs report." },
    { date: "Wed Jul 1", category: "Earnings", event: "General Mills Q4 (before open)", detail: "Fiscal Q4 + the FY27 guide; consensus ~$0.82 EPS." },
    { date: "Thu Jul 2", category: "Econ", event: "June jobs report (nonfarm payrolls)", detail: "The week's marquee print — pulled forward to Thursday (consensus ~172K) ahead of the holiday." },
    { date: "Thu Jul 2", category: "Econ", event: "ISM Services + factory orders", detail: "Moved up due to the holiday; a read on the larger services economy." },
    { date: "Thu Jul 3", category: "Geopolitics", event: "US markets close early", detail: "Stocks and bonds close early (~1pm ET) ahead of Independence Day." },
    { date: "Fri Jul 4", category: "Geopolitics", event: "US markets closed — Independence Day", detail: "Equities and bonds shut for the holiday." },
    { date: "Sun Jul 5", category: "Geopolitics", event: "OPEC+ ministerial (output for August)", detail: "The eight monthly-quota nations set August output as oil sits at ~4-month lows." },
    { date: "Tue Jul 8", category: "Geopolitics", event: "NATO summit, Ankara (Jul 7–8)", detail: "The 36th NATO summit; defense spending and Ukraine on the agenda." }
  ],

  /* ---------- BIG STOCKS (largest by market cap) ---------- */
  /* Price & 1-day = Fri Jun 26 close (carried forward — US reopens Mon afternoon) · 1M / 1Y = trailing price return */
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
  /* Live, Mon Jun 29 AM — oil bouncing slightly off ~4-month lows ahead of the Jul 5 OPEC+ meeting */
  commodities: [
    { name: "WTI Crude",   price: 69.83,   unit: "$/bbl",     day: "+0.87", month: "-24.2", ytd: "+13.7" },
    { name: "Brent Crude", price: 72.22,   unit: "$/bbl",     day: "+0.32", month: "-24.0", ytd: "+18.2" },
    { name: "Natural Gas", price: 3.28,    unit: "$/MMBtu",   day: "+0.04", month: "+3.2",  ytd: "-22.9" },
    { name: "Gold",        price: 4050.41, unit: "$/oz",      day: "-0.90", month: "-9.7",  ytd: "-3.9" },
    { name: "Silver",      price: 58.22,   unit: "$/oz",      day: "-0.96", month: "-22.2", ytd: "-14.9" },
    { name: "Copper",      price: 6.13,    unit: "$/lb",      day: "-0.26", month: "-6.1",  ytd: "+7.9" },
    { name: "Wheat",       price: 575.31,  unit: "¢/bushel",  day: "-0.51", month: "-5.5",  ytd: "+9.4" }
  ],

  /* ---------- FINANCIAL NEWS ---------- */
  financialNews: [
    { category: "Macro", headline: "US futures bounce to start a holiday-shortened, jobs-report week",
      summary: "S&P 500 futures rose ~0.6% Monday (with the VIX down) as the US–Iran de-escalation extended over the weekend — both sides reportedly agreeing to halt strikes and meet in Qatar — partly retracing last week's tech-led rout (Nasdaq −4.6%). Investors close out June, Q2 and H1 into Thursday's payrolls.",
      source: "Yahoo Finance", url: "https://finance.yahoo.com/markets/stocks/live/stock-market-today-monday-june-29-224230573.html", date: "Jun 29, 2026" },

    { category: "Macro", headline: "Oil bounces off ~4-month lows ahead of the Jul 5 OPEC+ meeting",
      summary: "WTI rose ~1% to ~$70 and Brent to ~$72 Monday, recovering from Friday's ~$68.9 print (the lowest since February) as Strait of Hormuz transits resumed; crude is still down ~24% on the month, with the eight OPEC+ producers meeting July 5 to set August output.",
      source: "Trading Economics", url: "https://tradingeconomics.com/commodity/crude-oil", date: "Jun 29, 2026" },

    { category: "Macro", headline: "Hawkish Fed after hot PCE — a September hike is now a coin-flip",
      summary: "May PCE hit a 3-year high (4.1% headline, 3.4% core) and the Fed has erased its 2026 cut signal; with 9 of 18 officials penciling a hike, CME FedWatch shows roughly even odds (~44%) of a September increase under Chair Kevin Warsh.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/17/fed-interest-rate-decision-june-2026.html", date: "Jun 25, 2026" },

    { category: "Macro", headline: "ECB Sintra forum opens; Lagarde hosts global central bankers",
      summary: "The ECB Forum on Central Banking runs June 29–July 1 in Sintra ('Shaping Europe's future'), with Lagarde's opening speech tonight — the week's key central-bank venue alongside US payrolls, with the ECB at 2.25% after its June hike.",
      source: "ECB", url: "https://www.ecb.europa.eu/press/conferences/html/20260629_ecb_forum_on_central_banking.en.html", date: "Jun 29, 2026" },

    { category: "Macro", headline: "Final Q1 GDP revised up to 2.1%; dollar near a 13-month high",
      summary: "The third estimate of Q1 GDP was lifted to a 2.1% annualized pace (from 1.6%) with claims falling, while the dollar held near a 13-month high and the 10-year yield eased to ~4.37% after the in-line PCE.",
      source: "The Globe and Mail", url: "https://www.theglobeandmail.com/business/article-us-pce-inflation-measure-tops-4-in-may-consumer-spending-strong/", date: "Jun 25, 2026" },

    { category: "M&A", headline: "Merck KGaA to buy Bio-Techne for $11.3B",
      summary: "German drugmaker Merck KGaA agreed to acquire US life-sciences firm Bio-Techne for $11.3B — its largest acquisition in over a decade — expanding in life-science tools and reagents.",
      source: "Pharmaphorum", url: "https://pharmaphorum.com/news/merck-buys-life-sciences-firm-bio-techne-113bn-deal", date: "Jun 25, 2026" },

    { category: "M&A", headline: "AbbVie to acquire Apogee Therapeutics for $10.9B",
      summary: "AbbVie will buy Apogee at $135.11/share in cash (~$10.9B) for its long-acting immunology/respiratory pipeline (atopic dermatitis, asthma) — the year's second-largest biotech buyout — closing Q3 2026.",
      source: "AbbVie", url: "https://news.abbvie.com/2026-06-22-AbbVie-to-Acquire-Apogee-Therapeutics,-Deepening-Immunology-Portfolio", date: "Jun 22, 2026" },

    { category: "M&A", headline: "2026 biotech/pharma M&A tops ~$123B as dealmaking booms",
      summary: "With Merck KGaA–Bio-Techne and AbbVie–Apogee, 2026 pharma/biotech M&A has now topped ~$123B year-to-date — a boom driven by large-cap drugmakers racing to refill pipelines ahead of patent cliffs.",
      source: "STAT News", url: "https://www.statnews.com/2026/06/22/pharma-biotech-ma-boom-2026-deals-total-123-billion/", date: "Jun 2026" },

    { category: "IPO", headline: "Doncasters closes up ~42% after a $1.06B IPO",
      summary: "The aerospace superalloy maker priced an upsized IPO at $33 (above range) on June 25, popped ~33% to $44 and closed up ~42% at $46.88, with total capital raised topping $1.06B including a Qatar Investment Authority placement.",
      source: "Bloomberg Law", url: "https://news.bloomberglaw.com/mergers-and-acquisitions/doncasters-gains-33-after-1-06-billion-ipo-private-placements", date: "Jun 25, 2026" },

    { category: "IPO", headline: "A busy pre-July-4 IPO window: Lime, ITG and Sinda price this week",
      summary: "Uber-backed Lime set terms for a Nasdaq listing (~$1.8B valuation, pricing this week), while ITG (~$400M, digital infra) and Sinda (~$235M, a silver miner) price Tuesday night to trade Wednesday — the busiest new-issue stretch before the holiday.",
      source: "IPOScoop", url: "https://www.iposcoop.com/the-ipo-buzz-itg-sinda-launch-ipos-to-price-next-week-ahead-of-july-4th-holiday/", date: "Jun 29, 2026" },

    { category: "IPO", headline: "SpaceX settles near $153; analysts split on the trillion-dollar debate",
      summary: "After the largest IPO ever (priced $135, ATH $225.64 on Jun 16), SPCX trades ~$153; CFRA initiated coverage at Sell ($115 target) while New Street started at $165 — a wide split on the valuation.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/12/spacex-ipo-spcx-live-updates.html", date: "Jun 29, 2026" },

    { category: "Earnings", headline: "Micron's blowout keeps lifting AI sentiment",
      summary: "Micron's ~15% jump after its June 24 record results (a ~$50B Q4 guide on sold-out HBM) is still reverberating, having lifted memory and AI-capex peers — a rare bright spot heading into a soft week for chips.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/25/micron-stock-3q-earnings-memory.html", date: "Jun 25, 2026" },

    { category: "Earnings", headline: "Nike Q4 preview (Jun 30) — a low bar with tariff drag",
      summary: "Consensus is just $0.12 EPS on ~$10.85B revenue (a ~2% decline) after estimates were cut ~45% in three months, with Greater China guided ~−20% and ~250bps of tariff drag — though a tariff-refund gain could surprise.",
      source: "AlphaStreet", url: "https://news.alphastreet.com/nike-q4-2026-earnings-preview-june-30-street-expects-0-12-eps/", date: "Jun 29, 2026" },

    { category: "M&A", headline: "Clearwater Analytics taken private for $8.4B",
      summary: "A Permira- and Warburg Pincus-led group (with Francisco Partners and Temasek) closed its $8.4B take-private of Clearwater at $24.55/share (~47% premium), backed by $3.5B of Goldman-led direct lending; the stock has delisted.",
      source: "Permira", url: "https://www.permira.com/news-and-insights/announcements/clearwater-analytics-completes-84-billion-take-private-acquisition-by-permira-and-warburg-pincus", date: "Jun 25, 2026" },

    { category: "Capital Markets", headline: "IG credit: record supply on AI/data-center debt",
      summary: "Investment-grade spreads sit near the tightest in ~25 years (~80–100bp) even as 2026 gross issuance is forecast at ~$2.46T (+11.8% y/y) — with JPMorgan projecting ~$1.5T of cumulative AI/data-center IG debt over five years.",
      source: "Charles Schwab", url: "https://www.schwab.com/learn/story/corporate-bond-outlook", date: "Jun 2026" },

    { category: "Capital Markets", headline: "7-year Treasury auction clears sharply lower at 3.79%",
      summary: "The $44B 7-year note auctioned at a high yield of 3.790% (down from 4.018% prior) with a 2.50 bid-to-cover — consistent with the week's flight to safety and falling yields.",
      source: "TreasuryDirect", url: "https://www.treasurydirect.gov/auctions/announcements-data-results/", date: "Jun 25, 2026" },

    { category: "IPO", headline: "SpaceX aftermath underscores a hot but choppy new-issue market",
      summary: "The reopened IPO window (SpaceX, Doncasters, Quantinuum) stayed busy even through last week's tech wobble, with the Lime/ITG/Sinda slate this week testing demand into the July 4 break.",
      source: "IPOScoop", url: "https://www.iposcoop.com/the-ipo-buzz-uber-backed-lime-lime-proposed-sets-174-million-deal-for-next-week/", date: "Jun 2026" }
  ],

  /* ---------- VENTURE CAPITAL (GCC-weighted + big global) ---------- */
  ventureCapital: [
    { region: "GCC", headline: "GCC private debt hit $4.1B in 2025, overtaking VC — Stride report",
      summary: "Structured private credit in the GCC reached $4.1B in 2025 (from ~$500M in 2024), surpassing the region's $3.3B of VC and making up over half of $7.4B in tracked funding; fintech took ~95%, led by Saudi names like Tamara ($2.4B) and Lendo ($740M).",
      source: "Arab News", url: "https://www.arabnews.com/node/2648888/business-economy", date: "Jun 28, 2026" },

    { region: "GCC", headline: "Qatar expands the QIA Fund-of-Funds to $3B and offers AI compute via 'Qai'",
      summary: "The Qatar Investment Authority added $2B (to $3B total) and five new managers across AI, fintech, blockchain and infrastructure (now 12), while QIA and Qatar Development Bank will provide compute from Qatar's new AI firm Qai to portfolio startups.",
      source: "QIA", url: "https://www.qia.qa/en/Newsroom/Pages/Qatar-Prime-Minister-and-Minister-of-Foreign-affairs-announces-expansion-of-QIAs-Fund-of-Funds-program-welcoming-new-global-VCs-to-Qatar.aspx", date: "Jun 2026" },

    { region: "GCC", headline: "Foodics (Saudi) fully acquires Greece's Norma AI",
      summary: "Saudi F&B-SaaS unicorn Foodics completed a full buyout of Greek hospitality-AI startup Norma AI (amount undisclosed), converting a 2025 minority stake into full ownership to build agentic restaurant-AI tools.",
      source: "Arab News", url: "https://www.arabnews.com/node/2648741/business-economy", date: "Jun 27, 2026" },

    { region: "GCC", headline: "CargoX (UAE) raises a $250M growth round led by BlueFive Capital",
      summary: "Autonomous-logistics player CargoX (led by ex-Talabat CEO Tomaso Rodriguez) raised $250M led by BlueFive Capital to scale autonomous freight — one of the region's largest growth rounds of 2026.",
      source: "Arab News", url: "https://www.arabnews.com/node/2646163/business-economy", date: "Jun 2026" },

    { region: "GCC", headline: "Sovra (UAE) raises a $2M+ pre-seed for digital-dollar accounts",
      summary: "Self-custodial stablecoin fintech Sovra raised $2M+ pre-seed led by Pharsalus Capital, with angels including Naguib Sawiris, Ramp co-founder Karim Atiyeh and 21Shares' Hany Rashwan, targeting MENA young professionals and the diaspora.",
      source: "Wamda", url: "https://www.wamda.com/2026/06/sovra-lands-2-million-pre-seed-led-pharsalus-capital", date: "Jun 2026" },

    { region: "GCC", headline: "Agenz (Morocco) closes an oversubscribed $5M seed for proptech data",
      summary: "Real-estate data and proptech platform Agenz raised an oversubscribed $5M seed led by Breega, Attijariwafa Ventures and Saviu Ventures to scale its property-valuation tools.",
      source: "Arab News", url: "https://www.arabnews.com/node/2648741/business-economy", date: "Jun 27, 2026" },

    { region: "GCC", headline: "Rentify (UAE) raises a $2M seed and launches 'Earn AI'",
      summary: "UAE proptech-fintech Rentify raised a $2M seed (taking total funding to ~$2.5M) and launched its Earn AI automated rental-revenue product with enterprise clients including Gargash Real Estate.",
      source: "Arab News", url: "https://www.arabnews.com/node/2648741/business-economy", date: "Jun 27, 2026" },

    { region: "GCC", headline: "Saudi Arabia leads MENA H1 2026 startup funding with $1.34B raised",
      summary: "First-half 2026 data shows Saudi Arabia topping regional startup funding at $1.34B, overtaking the UAE for the period — a marker of the Kingdom's deepening venture ecosystem.",
      source: "Wamda", url: "https://www.wamsaudi.com/news-articles/startup-wrap-saudi-arabia-leads-mena-startup-funding-h1-134bn-raised", date: "Jun 2026" },

    { region: "Global", headline: "General Intuition raises a $320M Series A at a $2.3B valuation",
      summary: "Spatial-AI startup General Intuition — which trains 'world models' on hundreds of millions of hours of gameplay — raised a $320M Series A led by Khosla Ventures, with General Catalyst, Jeff Bezos and Eric Schmidt, taking total funding to ~$454M.",
      source: "TechCrunch", url: "https://techcrunch.com/2026/06/25/general-intuitions-2-3b-bet-that-video-games-can-train-ai-agents-for-the-real-world/", date: "Jun 25, 2026" },

    { region: "Global", headline: "Baseten raises a $1.5B Series F at a $13B valuation",
      summary: "AI-inference platform Baseten closed a $1.5B Series F at a $13B valuation (its fourth raise in 18 months), led by Altimeter with Conviction, Spark, Sands and Wellington — the largest venture round of the week.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-marketing-robotics-baseten/", date: "Jun 26, 2026" },

    { region: "Global", headline: "AppsFlyer raises a $1B Series E at a $2.7B valuation",
      summary: "Mobile-marketing and data-analytics firm AppsFlyer raised a $1B Series E at a $2.7B valuation, with backing from Unity, Meta, Moloco and Google.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-marketing-robotics-baseten/", date: "Jun 26, 2026" },

    { region: "Global", headline: "Groq raises $650M for AI-inference chips",
      summary: "AI-inference chip company Groq raised $650M in growth funding (led by Infinitum and Disruptive) to scale against Nvidia in inference, roughly six months after an Nvidia-related acquihire.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-marketing-robotics-baseten/", date: "Jun 26, 2026" }
  ],

  /* ---------- LEBANON ECONOMY ---------- */
  lebanonEconomy: [
    { label: "Lira / USD",         value: "~89,500",     sub: "89,573 on Jun 26; effectively pegged at the official band" },
    { label: "Inflation (y/y)",    value: "~19%",        sub: "19.04% in May 2026 — eased from 20.02% in April" },
    { label: "BdL FX Reserves",    value: "~$11.63B",    sub: "Mid-June 2026 (+$185M in early June; excludes gold)" },
    { label: "Eurobonds",          value: "~26¢",        sub: "BLOM Bond Index 26.33 (week of Jun 18); in default since 2020" },
    { label: "IMF Program",        value: "Stalled",     sub: "Early-stage talks; the IMF flags a 2026 contraction risk from the war" },
    { label: "Reconstruction",     value: "~$11B",       sub: "World Bank estimate (total war cost ~$14B)" },
    { label: "GDP Growth",         value: "+3.5% (2025)", sub: "World Bank sees +4.0% for 2026 (reform-contingent); IMF more cautious" },
    { label: "Bank-System Losses", value: "~$80B",       sub: "The 'gap'; central to the stalled IMF deal" }
  ],

  /* ---------- GEOPOLITICAL MAP (today's hotspots) ---------- */
  mapPoints: [
    { place: "Washington",        lat: 38.90, lng: -77.04, weight: 3, region: "US",          label: "Brokered the Jun 26 Israel–Lebanon framework and the US–Iran 60-day roadmap" },
    { place: "Beirut",            lat: 33.89, lng: 35.50,  weight: 3, region: "Lebanon",     label: "Framework signed but unraveling at home — Berri says it 'will not pass'; Aoun & Salam defend it" },
    { place: "South Lebanon",     lat: 33.38, lng: 35.48,  weight: 3, region: "Lebanon",     label: "Ceasefire shaky — the IDF demolished a Hezbollah tunnel Jun 28; the toll is over 4,200" },
    { place: "Tehran",            lat: 35.69, lng: 51.39,  weight: 3, region: "Iran",        label: "60-day MoU holds, but the IAEA inspector-access dispute is unresolved" },
    { place: "Strait of Hormuz",  lat: 26.57, lng: 56.25,  weight: 3, region: "Gulf",        label: "Tanker traffic recovering (~4.8M bpd); oil bouncing off ~4-month lows" },
    { place: "Gulf of Oman",      lat: 24.50, lng: 58.50,  weight: 2, region: "Gulf",        label: "Tankers clearing stored Iranian crude to buyers under the 60-day waiver" },
    { place: "Doha",              lat: 25.29, lng: 51.53,  weight: 2, region: "Gulf",        label: "Qatar's mediation channel active — the US and Iran are set to meet in Qatar this week" },
    { place: "Riyadh",            lat: 24.71, lng: 46.68,  weight: 2, region: "Gulf",        label: "OPEC+ anchor — a Jul 5 meeting sets August output as oil sits near 4-month lows" },
    { place: "Damascus",          lat: 33.51, lng: 36.29,  weight: 1, region: "Syria",       label: "Damascus signals readiness to revive the 1974 Israel–Syria disengagement via US mediation" },
    { place: "Gaza",              lat: 31.50, lng: 34.47,  weight: 1, region: "Israel-Gaza", label: "The Oct-2025 truce holds but is fragile; aid access remains severely curtailed" }
  ],
  mapArcs: [
    { from: [38.90, -77.04], to: [33.89, 35.50] },
    { from: [38.90, -77.04], to: [35.69, 51.39] },
    { from: [35.69, 51.39],  to: [26.57, 56.25] },
    { from: [25.29, 51.53],  to: [35.69, 51.39] },
    { from: [33.89, 35.50],  to: [33.38, 35.48] }
  ],

  /* ---------- POLITICS ---------- */
  politics: {

    middleEast: [
      { region: "Lebanon", headline: "Speaker Berri declares the Israel–Lebanon framework 'will not pass'",
        summary: "Parliament Speaker and Hezbollah ally Nabih Berri said Monday the trilateral framework 'will not pass, and it will not be implemented in its current form,' calling it 'an agreement of dictates.' As he controls the parliamentary path, his rejection is a major blow to ratifying the Jun 26 Washington deal.",
        source: "L'Orient Today", url: "https://today.lorientlejour.com/article/1539618/nabih-berri-to-lolj-the-israel-lebanon-agreement-will-not-pass.html", date: "Jun 29, 2026" },

      { region: "Lebanon", headline: "Hezbollah calls the deal 'null and void'; protests in Dahiyeh",
        summary: "Hezbollah chief Naim Qassem declared the framework 'null and void' and 'a surrender of sovereignty,' saying it should be replaced by the US–Iran MoU; supporters protested in Beirut's southern suburbs over the weekend (blocking roads, with reported clashes), and an MP warned of possible 'internal conflict.'",
        source: "Al Jazeera", url: "https://www.aljazeera.com/features/2026/6/28/in-lebanon-framework-agreement-signed-with-israel-spurs-protest-criticism", date: "Jun 28, 2026" },

      { region: "Lebanon", headline: "Aoun and Salam defend the framework as a 'first step' to sovereignty",
        summary: "President Joseph Aoun called the deal 'the first step on the path towards Lebanon restoring its sovereignty,' vowing 'no more occupation,' and — in a call with Trump — urged Washington to press Israel to withdraw. PM Nawaf Salam said its primary aim is a full Israeli withdrawal, the return of the displaced, and reconstruction. The presidency-vs-Hezbollah split is now the central fault line.",
        source: "France 24", url: "https://www.france24.com/en/middle-east/20260629-middle-east-live-lebanon-rejects-us%E2%80%93israel-framework-hezbollah-asserts-right-to-self-defence", date: "Jun 29, 2026" },

      { region: "Lebanon", headline: "Ceasefire shaky — IDF demolishes a Hezbollah tunnel; toll over 4,200",
        summary: "The truce is holding only loosely: on Jun 28 the IDF published footage of demolishing a major Hezbollah tunnel under Majdal Zoun (a demolition the US had pressed it to postpone), and weekend reporting cited fresh casualties in the south. Lebanon's cumulative toll since March 2 is now reported above 4,200 killed (last firm count ~4,057 / 12,121).",
        source: "Naharnet", url: "https://www.naharnet.com/stories/en/320875-one-killed-2-wounded-as-israeli-forces-open-fire-on-civilians-in-nabatieh-al-fawqa", date: "Jun 28, 2026" },

      { region: "Iran", headline: "US–Iran roadmap holds but the IAEA-access dispute persists; Hormuz recovering",
        summary: "Trump insists Iran 'completely agreed' to IAEA visits while Tehran says there are 'no plans' for inspectors before a final deal, and Grossi says talks have 'barely initiated.' At sea, ~20 tankers (~35M barrels) have exited Hormuz since the deal and confirmed flows have risen to ~4.8M bpd, with the US and Iran set to meet again this week.",
        source: "PBS NewsHour", url: "https://www.pbs.org/newshour/world/dispute-over-nuclear-inspections-shows-how-u-s-and-iran-are-negotiating-in-public", date: "Jun 28, 2026" },

      { region: "Gulf", headline: "OPEC+ Eight meet July 5 as Hormuz shipping normalizes",
        summary: "The eight monthly-quota OPEC+ nations (Saudi Arabia, Russia, Iraq, Kuwait, Kazakhstan, Algeria, Oman + UAE) meet July 5 to set August output, with a ~188,000 bpd adjustment in play; the meeting lands as post-deal Hormuz shipping recovers and crude sits near 4-month lows.",
        source: "OPEC", url: "https://www.opec.org/pr-detail/604-7-june-2026.html", date: "Jun 2026" },

      { region: "Syria", headline: "Damascus signals readiness to revive the 1974 disengagement with Israel",
        summary: "Syrian FM al-Shaibani reiterated Damascus's 'aspiration to cooperate with the United States to return to the 1974 disengagement agreement,' with Syria–Israel talks held in Paris under US envoy Tom Barrack on a renewed Golan security arrangement; President al-Sharaa has reaffirmed the commitment, though no deal is signed.",
        source: "The National", url: "https://www.thenationalnews.com/news/mena/2026/01/07/whats-the-1974-disengagement-agreement-between-syria-and-israel/", date: "Jun 2026" },

      { region: "Israel-Gaza", headline: "Gaza ceasefire holds but is fragile; aid access severely curtailed",
        summary: "The US-backed truce (under UNSC Res. 2803) is intact but deteriorating — UN briefers warned Gazans remain 'trapped in a humanitarian nightmare,' with ~1,000 Palestinians killed since it began, daily meal deliveries down to ~678,000 (from 1.5M in March), and 330,000+ at risk of losing their main drinking-water source.",
        source: "UN Press", url: "https://press.un.org/en/2026/sc16390.doc.htm", date: "Jun 2026" }
    ],

    us: [
      { headline: "Supreme Court's marquee rulings still pending — decisions due this week",
        summary: "As of the weekend the Court had not ruled on birthright citizenship (Trump v. Barbara), firing Fed Governor Lisa Cook (Trump v. Cook), or the transgender-sports cases — all expected on the Jun 29–30 opinion days (after this snapshot). For context, on Jun 25 it handed Trump two immigration wins authored by Justice Alito.",
        source: "SCOTUSblog", url: "https://www.scotusblog.com/2026/06/major-decisions-ahead/", date: "Jun 27, 2026" },

      { headline: "Hawkish Fed after the hot PCE; jobs report Thursday, next FOMC Jul 29",
        summary: "May PCE hit 4.1% y/y (core 3.4%) and the Fed has erased its 2026 cut signal — 9 of 18 officials now pencil at least one hike, with year-end PCE projected at 3.6%. Markets have largely priced out 2026 easing ahead of Thursday's June jobs report.",
        source: "Morningstar", url: "https://www.morningstar.com/economy/may-pce-expected-show-rising-inflation", date: "Jun 25, 2026" },

      { headline: "ECB's Sintra forum opens — Lagarde hosts global central bankers",
        summary: "The ECB Forum on Central Banking runs Jun 29–Jul 1 in Sintra ('Shaping Europe's future'), with Lagarde hosting Monday and participants including the IMF's Tobias Adrian and the BoE's Sarah Breeden — a key venue for rate signals during a hawkish-Fed week.",
        source: "ECB", url: "https://www.ecb.europa.eu/press/conferences/html/20260629_ecb_forum_on_central_banking.en.html", date: "Jun 29, 2026" },

      { headline: "Treasury's 60-day Iran oil-sanctions waiver being implemented",
        summary: "OFAC's General License X (tied to the Jun 17 MoU) authorizes Iranian oil and petrochemical transactions in dollars through Aug 21; the Navy lifted its blockade Jun 18, and billions in Iranian oil revenue are unlocking as Hormuz traffic resumes, even as Trump and Tehran spar publicly over nuclear inspections.",
        source: "CNBC", url: "https://www.cnbc.com/2026/06/23/us-iran-oil-sanction-relief-strait-of-hormuz-peace-deal-.html", date: "Jun 23, 2026" },

      { headline: "Weekend politics: midterms maneuvering and an 'America First' fight",
        summary: "Weekend US coverage centered on Trump's continued efforts to reshape how the 2026 midterms are conducted amid fears of a Democratic takeover, and an internal battle over the future of 'America First' foreign policy — with no single dominant breaking event domestically.",
        source: "NPR", url: "https://www.npr.org/programs/weekend-edition-sunday/nx-s1-5840011/weekend-edition-sunday-for-june-28-2026", date: "Jun 28, 2026" }
    ]
  },

  /* ---------- SOURCES (footer credits) ---------- */
  sources: [
    { name: "Trading Economics", url: "https://tradingeconomics.com/" },
    { name: "stockanalysis.com", url: "https://stockanalysis.com/" },
    { name: "CNBC",              url: "https://www.cnbc.com/" },
    { name: "Al Jazeera",        url: "https://www.aljazeera.com/" },
    { name: "L'Orient Today",    url: "https://today.lorientlejour.com/" },
    { name: "Crunchbase News",   url: "https://news.crunchbase.com/" },
    { name: "Arab News",         url: "https://www.arabnews.com/" },
    { name: "SCOTUSblog",        url: "https://www.scotusblog.com/" }
  ]
};

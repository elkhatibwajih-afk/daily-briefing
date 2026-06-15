/* ============================================================
   DAILY BRIEFING — DATA FILE
   ------------------------------------------------------------
   This file holds everything your dashboard displays.
   It is regenerated each time you run  /update-news  in Claude Code.
   You normally never edit this by hand.

   Last generated: June 15, 2026
   ============================================================ */

window.DASHBOARD_DATA = {

  dateLabel: "Monday, June 15, 2026",
  lastUpdated: "June 15, 2026",
  asOfNote: "Indices, commodities, FX & rates: intraday Mon Jun 15 · Stocks: Fri Jun 12 close · Crypto: Jun 12",
  drivingStory: "A reported US–Iran agreement to end their ~4-month war (signing set for June 19 in Geneva) is driving everything: oil has tumbled ~5%, equities sit near record highs, and gold and crypto are rebounding. The Fed decides rates tomorrow (June 16–17) after hot 4.2% May inflation; the ECB just hiked for the first time in three years.",

  /* ---------- MARKETS ---------- */
  markets: {

    indices: [
      { name: "S&P 500",          level: 7519.16,  day: "+0.50", month: "+1.57", ytd: "+24.63" },
      { name: "Nasdaq Composite", level: 25888.84, day: "+0.31", month: "-1.30", ytd: "+11.40" },
      { name: "Nasdaq 100",       level: 30188.72, day: "+0.64", month: "+4.12", ytd: "+37.61", note: "The tech-heavy 100 largest non-financials — distinct from the broader Composite above." },
      { name: "Dow Jones",        level: 51614.73, day: "+0.70", month: "+3.88", ytd: "+21.40" },
      { name: "Russell 2000",     level: 2943.99,  day: "+0.79", month: "n/a",   ytd: "n/a" },
      { name: "STOXX Europe 600", level: 637.36,   day: "+0.66", month: "+4.46", ytd: "+16.54" },
      { name: "FTSE 100",         level: 10485.55, day: "+0.13", month: "+1.57", ytd: "+18.14" },
      { name: "Nikkei 225",       level: 69317.50, day: "+4.99", month: "+13.86", ytd: "+37.70", note: "Big risk-on rally. Some data sites misreport YTD near +80% (a base-date error) — the true YTD is about +38%." },
      { name: "Hang Seng",        level: 24849.00, day: "+0.50", month: "-3.22", ytd: "+3.28" }
    ],

    rates: [
      { name: "US 10-Year Treasury", value: "4.45%",      change: "-0.04 pp · falling" },
      { name: "US 2-Year Treasury",  value: "4.05%",      change: "-0.04 pp" },
      { name: "Fed Funds (target)",  value: "3.50–3.75%", change: "On hold · FOMC Jun 16–17" }
    ],

    fx: [
      { name: "EUR/USD",            value: "1.1605", day: "+0.32" },
      { name: "USD/JPY",            value: "160.14", day: "-0.06" },
      { name: "GBP/USD",            value: "1.3426", day: "+0.16" },
      { name: "Dollar Index (DXY)", value: "99.53",  day: "-0.22" }
    ],

    crypto: [
      { name: "Bitcoin",  price: 63553, day: "+3.4", month: "-22.2", year: "-41.5" },
      { name: "Ethereum", price: 1672,  day: "+3.2", month: "-28.5", year: "-39.7" }
    ]
  },

  /* ---------- BIG STOCKS (largest by market cap) ---------- */
  /* Price & 1-day = Fri Jun 12 close · 1M / 1Y = price return to Jun 12 */
  stocks: [
    { ticker: "NVDA",  name: "Nvidia",              price: 205.19, day: "+0.16", month: "-7.06",  year: "+43.7",  mktcap: "$4.97T" },
    { ticker: "GOOGL", name: "Alphabet",            price: 359.68, day: "+0.53", month: "-7.14",  year: "+102.8", mktcap: "$4.39T" },
    { ticker: "AAPL",  name: "Apple",               price: 291.13, day: "-1.52", month: "-1.24",  year: "+46.5",  mktcap: "$4.28T" },
    { ticker: "MSFT",  name: "Microsoft",           price: 390.74, day: "+0.10", month: "-4.18",  year: "-17.3",  mktcap: "$2.90T" },
    { ticker: "AMZN",  name: "Amazon",              price: 238.55, day: "-1.23", month: "-10.26", year: "+11.9",  mktcap: "$2.57T" },
    { ticker: "AVGO",  name: "Broadcom",            price: 382.07, day: "-0.91", month: "-8.88",  year: "+51.1",  mktcap: "$1.82T" },
    { ticker: "TSLA",  name: "Tesla",               price: 406.43, day: "+1.82", month: "-6.23",  year: "+24.5",  mktcap: "$1.53T" },
    { ticker: "META",  name: "Meta Platforms",      price: 566.98, day: "-0.16", month: "-5.97",  year: "-18.3",  mktcap: "$1.44T" },
    { ticker: "BRK.B", name: "Berkshire Hathaway",  price: 489.25, day: "+0.71", month: "+0.88",  year: "+0.2",   mktcap: "$1.05T" },
    { ticker: "JPM",   name: "JPMorgan Chase",      price: 320.72, day: "+2.31", month: "+5.20",  year: "+19.6",  mktcap: "$859B" }
  ],

  /* ---------- COMMODITIES ---------- */
  commodities: [
    { name: "WTI Crude",   price: 80.14,   unit: "$/bbl",     day: "-5.59", month: "-23.23", ytd: "+14.07" },
    { name: "Brent Crude", price: 82.81,   unit: "$/bbl",     day: "-5.18", month: "-26.13", ytd: "+13.08" },
    { name: "Natural Gas", price: 3.03,    unit: "$/MMBtu",   day: "-2.88", month: "+0.21",  ytd: "-19.15" },
    { name: "Gold",        price: 4336.77, unit: "$/oz",      day: "+2.72", month: "-5.04",  ytd: "+28.15" },
    { name: "Silver",      price: 70.76,   unit: "$/oz",      day: "+4.43", month: "-8.89",  ytd: "+94.83" },
    { name: "Copper",      price: 6.48,    unit: "$/lb",      day: "+0.77", month: "+3.32",  ytd: "+35.12" },
    { name: "Wheat",       price: 574.27,  unit: "¢/bushel",  day: "-1.75", month: "-13.58", ytd: "+7.04" }
  ],

  /* ---------- FINANCIAL NEWS ---------- */
  financialNews: [
    { category: "Macro", headline: "US May CPI hits 4.2% — hottest since 2023",
      summary: "Headline CPI rose 0.5% m/m and 4.2% y/y (up from 3.8%), driven by a 23.5% jump in energy as the Iran conflict spiked gasoline ~40%. Core held at 2.9%. Markets still see the Fed on hold June 17.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/10/cpi-inflation-report-may-2026.html", date: "Jun 10, 2026" },

    { category: "Macro", headline: "ECB hikes 25bp — first increase in three years",
      summary: "The ECB raised all three key rates by 25bp (deposit rate to 2.25%), effective June 17, citing Middle East war inflation. Staff now see 2026 inflation averaging 3.0%.",
      source: "CNBC / ECB", url: "https://www.cnbc.com/2026/06/11/ecb-hikes-interest-rates.html", date: "Jun 11, 2026" },

    { category: "Macro", headline: "Fed expected to hold at 3.50–3.75% on June 17",
      summary: "Markets price ~98–99% odds of no change at the June 16–17 FOMC amid the inflation surge and a firm labor market (4.3% unemployment). Rate-cut bets have collapsed.",
      source: "Federal Reserve / Kalshi", url: "https://kalshi.com/markets/kxfeddecision/fed-meeting/kxfeddecision-26jun", date: "Jun 2026" },

    { category: "Macro", headline: "May jobs blow past estimates: payrolls +172k",
      summary: "Nonfarm payrolls rose 172,000 vs ~80,000 expected; unemployment held at 4.3% and wages rose 3.4% y/y — the strongest hiring signal in months.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/05/jobs-report-may-2026.html", date: "Jun 5, 2026" },

    { category: "Macro", headline: "Oil tumbles ~4% as Trump signals an Iran deal",
      summary: "WTI fell toward ~$86 and Brent toward ~$89 after Trump said he expects to sign a deal to end the war and cancelled planned strikes. Brent had spiked near $120 during the conflict.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/11/brent-wti-oil-prices-us-launches-fresh-strikes-on-iran-.html", date: "Jun 11, 2026" },

    { category: "IPO", headline: "SpaceX completes largest IPO in history, pops 19%",
      summary: "SpaceX priced 555.6M shares at $135 (~$75B raised) and jumped 19% on debut (Nasdaq: SPCX), valuing it above $2 trillion — dwarfing Aramco's 2019 record. Reported demand topped $250B.",
      source: "NPR", url: "https://www.npr.org/2026/06/12/nx-s1-5855004/stock-ai-spacex-ipo-elon-musk", date: "Jun 11–12, 2026" },

    { category: "Earnings", headline: "Oracle: record Q4 beat, but shares fall 8–10%",
      summary: "Q4 revenue hit $19.2B (+21%), cloud infrastructure rose 93%, and RPO surged to $638B (+363%). Shares still dropped as investors scrutinized the cost of its AI buildout.",
      source: "Oracle / TIKR", url: "https://www.tikr.com/blog/oracle-stock-q4-2026-beats-estimates-as-oci-revenue-surges-93-year-over-year", date: "Jun 10, 2026" },

    { category: "Earnings", headline: "Broadcom posts record $22.2B revenue; AI chips +143%",
      summary: "Q2 revenue rose 48% to $22.2B with AI semiconductors up 143% to $10.8B; it guided Q3 AI revenue to ~$16B. Shares slipped despite the beat.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/03/broadcom-avgo-earnings-report-q2-2026.html", date: "Jun 3, 2026" },

    { category: "Earnings", headline: "Adobe: record $6.62B revenue, AI ARR triples — CFO exits",
      summary: "Adobe posted record revenue and tripled AI-first ARR above $500M, raising FY26 guidance. Shares fell ~5.5% after CFO Dan Durn's departure added to a C-suite shuffle.",
      source: "Adobe / Motley Fool", url: "https://www.fool.com/earnings/call-transcripts/2026/06/11/adobe-adbe-q2-2026-earnings-transcript/", date: "Jun 11, 2026" },

    { category: "M&A", headline: "French carriers strike €20.35B deal for Drahi's SFR",
      summary: "A Bouygues-led consortium (with Iliad/Free and Orange) agreed to buy SFR from Altice France for €20.35B, cutting France's mobile market from four operators to three. Closing potentially H2 2027, pending EU review.",
      source: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-06-08/billionaire-drahi-strikes-20-billion-deal-to-sell-france-s-sfr", date: "Jun 6–8, 2026" },

    { category: "M&A", headline: "Ingredion to buy Tate & Lyle in $3.6B all-cash deal",
      summary: "Ingredion offered 595p/share (~£2.7B equity, ~$5.0B enterprise value) — a 59% premium — targeting ~$130M of synergies by 2030. Expected to close H2 2027 via UK scheme of arrangement.",
      source: "Crain's", url: "https://www.chicagobusiness.com/manufacturing-logistics/ccb-tate-lyle-ingredion-buyout-20260608/", date: "Jun 8, 2026" },

    { category: "M&A", headline: "GameStop escalates toward hostile $56B bid for eBay",
      summary: "Ryan Cohen is signaling he'll appeal directly to eBay shareholders after the board rejected GameStop's ~$56B ($125/share) offer as 'neither credible nor attractive.' A sizeable funding gap remains.",
      source: "CNBC", url: "https://www.cnbc.com/2026/05/12/ebay-rejects-gamestops-takeover-ryan-cohen.html", date: "~Jun 8, 2026" },

    { category: "M&A", headline: "Paramount Skydance extends hostile WBD takeover deadline",
      summary: "David Ellison's Paramount Skydance extended its hostile bid for Warner Bros. Discovery, offering shareholders an extra $650M/quarter if the deal isn't completed by end-2026.",
      source: "Variety", url: "https://variety.com/2026/biz/news/paramount-skydance-pay-warner-bros-discovery-shareholders-deal-not-completed-end-of-2026-1236658043/", date: "Jun 2026" },

    { category: "M&A", headline: "Triton Partners buys Flender from Carlyle for ~€3B",
      summary: "Private-equity firm Triton agreed to acquire industrial drive-systems maker Flender from Carlyle at a deal value of ~€3B ($3.5B).",
      source: "Dealroom", url: "https://dealroom.net/blog/recent-m-a-deals", date: "~Jun 5, 2026" },

    { category: "Capital Markets", headline: "EA's $55B take-private races to June 30 close — largest LBO ever",
      summary: "The PIF / Silver Lake / Affinity Partners $210/share, ~$55B buyout of Electronic Arts nears its June 30 long-stop date, set to surpass 2007's TXU deal as the biggest leveraged buyout in history.",
      source: "Tech Insider", url: "https://tech-insider.org/ea-goes-private-55-billion-buyout-2026/", date: "Jun 2026" },

    { category: "Capital Markets", headline: "Inotiv files prepackaged Chapter 11",
      summary: "The drug-research (CRO) firm filed a prepackaged Chapter 11 with majority debtholder support, cutting ~$326M of funded debt via debt-to-equity swap while leaving trade creditors unimpaired.",
      source: "Davis Polk", url: "https://www.davispolk.com/experience/inotiv-prepackaged-chapter-11-filing-and-restructuring-support-agreement", date: "Jun 2, 2026" }
  ],

  /* ---------- POLITICS ---------- */
  politics: {

    middleEast: [
      { region: "Lebanon", headline: "Israel strikes Beirut's southern suburbs (Dahieh), killing at least 3",
        summary: "Israel struck Hezbollah targets in Dahieh, killing at least three — including a Hezbollah commander, per the IDF — in the first such strike in a week. Israel said it was a response to Hezbollah drone/projectile fire.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/14/israel-issues-forced-displacement-orders-for-29-towns-in-southern-lebanon", date: "Jun 14, 2026" },

      { region: "Lebanon", headline: "Israel orders 29 south Lebanon towns to evacuate",
        summary: "Israel issued forced-displacement orders for 29 locations in the Nabatieh and Sidon districts, telling residents to flee north of the Zahrani River amid deadly strikes. The UN has called such blanket orders unlawful.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/13/one-killed-as-israel-hits-south-lebanon-issues-forced-displacement-orders", date: "Jun 13, 2026" },

      { region: "Lebanon", headline: "US–Iran deal text includes a 'permanent termination' in Lebanon",
        summary: "The US–Iran framework (signing set for June 19 in Geneva) explicitly ends military operations 'on all fronts, including in Lebanon.' Trump publicly faulted Israel's June 14 Beirut strike and urged restraint to protect the deal.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/14/us-iran-ceasefire-deal-announced-trump-says-strait-of-hormuz-reopening", date: "Jun 14, 2026" },

      { region: "Lebanon", headline: "Hezbollah disarmament enters a disputed second phase",
        summary: "With phase one south of the Litani declared complete, the government allotted ~four months for phase two. Hezbollah refuses to disarm north of the Litani, while Israel insists full disarmament must precede any withdrawal.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/2/17/lebanon-says-four-months-needed-for-second-phase-of-hezbollah-disarmament", date: "Jun 2026" },

      { region: "Lebanon", headline: "Banking crisis and IMF program still deadlocked",
        summary: "Lebanese banks remain insolvent (~$72B of losses; the pound down ~98%) with the IMF program blocked by stalled reforms. The 2026 war is estimated to have added ~$11B in damage; PM Nawaf Salam points to a World Bank reconstruction loan.",
        source: "Middle East Institute", url: "https://mei.edu/publication/lebanons-monetary-crisis-and-future-central-bank/", date: "Jun 2026" },

      { region: "Lebanon", headline: "Parliamentary elections postponed amid the war",
        summary: "Elections originally set for May 10, 2026 were postponed due to the war with Israel, and reconstruction pledges for the south remain largely unmet, with border villages still in ruins.",
        source: "Wikipedia / Now Lebanon", url: "https://en.wikipedia.org/wiki/2026_Lebanese_general_election", date: "Jun 2026" },

      { region: "Iran", headline: "US and Iran reach deal to end ~4-month war; Strait of Hormuz to reopen",
        summary: "Mediated by Pakistan and Qatar, Washington and Tehran agreed to end the war that began with US–Israeli strikes in late February; signing is set for June 19 in Geneva, with the Hormuz blockade to be lifted.",
        source: "CNBC", url: "https://www.cnbc.com/2026/06/14/us-iran-war-peace-deal.html", date: "Jun 14, 2026" },

      { region: "Israel-Gaza", headline: "Gaza ceasefire fraying as Cairo talks resume",
        summary: "The October 2025 ceasefire is eroding: Israeli strikes killed at least 13 in early June as Egypt hosted renewed Hamas talks. Israel controls ~64% of Gaza (above the agreed ~53%) and aid is running at ~36% of allocated volume.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/7/israeli-army-kills-nine-in-gaza-as-mediators-renew-diplomacy-in-cairo", date: "Jun 7, 2026" }
    ],

    us: [
      { headline: "FISA Section 702 set to lapse after House blocks extension",
        summary: "The House failed (198–218) to pass a short-term extension of the warrantless foreign-surveillance authority, pushing it toward its first lapse since 2008. Democrats opposed renewal after Trump named ally Bill Pulte acting DNI.",
        source: "CNBC", url: "https://www.cnbc.com/2026/06/11/trump-pulte-fisa-congress-foreign-surveillance-program-expiration.html", date: "Jun 11, 2026" },

      { headline: "Trump brokers US–Iran war-ending deal",
        summary: "Trump announced the agreement to end the US–Iran war and reopen the Strait of Hormuz (signing June 19, Geneva), and criticized Israel's June 14 Beirut strike, urging restraint to preserve it.",
        source: "NBC News", url: "https://www.nbcnews.com/news/us-news/deal-reached-united-states-iran-war-rcna350039", date: "Jun 14, 2026" },

      { headline: "Fed research ties 2025 tariffs to inflation as PCE ticks up",
        summary: "Fed research found Trump's 2025 tariffs fully passed through to consumers, lifting core goods prices ~3.1%; PCE inflation rose to ~2.6% y/y. The Fed has held rates steady, citing above-target inflation.",
        source: "CBS News", url: "https://www.cbsnews.com/news/pce-report-today-inflation-june-federal-reserve/", date: "Jun 2026" },

      { headline: "Supreme Court issues end-of-term rulings; major immigration case pending",
        summary: "The Court handed down several June decisions, with a consequential ruling on whether expedited-removal authority extends to long-present immigrants expected by late June.",
        source: "CBS News", url: "https://www.cbsnews.com/news/supreme-court-major-cases-2026/", date: "Jun 2026" },

      { headline: "Former Senate GOP leader Mitch McConnell hospitalized",
        summary: "A spokesman said the Kentucky Republican and former Senate Majority Leader was admitted to a hospital; few details were released.",
        source: "NPR", url: "https://www.npr.org/sections/politics/", date: "~Jun 14, 2026" }
    ]
  },

  /* ---------- SOURCES (footer credits) ---------- */
  sources: [
    { name: "Trading Economics", url: "https://tradingeconomics.com/" },
    { name: "stockanalysis.com", url: "https://stockanalysis.com/" },
    { name: "CNBC",              url: "https://www.cnbc.com/" },
    { name: "Bloomberg",         url: "https://www.bloomberg.com/" },
    { name: "Al Jazeera",        url: "https://www.aljazeera.com/" },
    { name: "Yahoo Finance",     url: "https://finance.yahoo.com/" }
  ]
};

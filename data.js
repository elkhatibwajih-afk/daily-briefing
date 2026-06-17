/* ============================================================
   DAILY BRIEFING — DATA FILE
   ------------------------------------------------------------
   This file holds everything your dashboard displays.
   It is regenerated each time you run  /update-news  in Claude Code.
   You normally never edit this by hand.

   Last generated: June 17, 2026
   ============================================================ */

window.DASHBOARD_DATA = {

  dateLabel: "Wednesday, June 17, 2026",
  lastUpdated: "June 17, 2026",
  asOfNote: "Stocks & indices: Tue Jun 16 close · commodities, FX, rates & crypto: Jun 16–17 · the FOMC rate decision is due ~2pm ET today (Jun 17).",
  drivingStory: "All eyes on the Fed: Chair Kevin Warsh delivers his first rate decision today (~2pm ET) — a hold at 3.50–3.75% is near-certain, but markets expect a hawkish 'fewer cuts' dot plot. The Dow hit a record near 52,000 even as tech slipped, and oil kept sliding (WTI ~$75) ahead of Friday's US–Iran deal signing. Days after its record IPO, SpaceX agreed to buy Cursor-maker Anysphere for ~$60B.",

  /* ---------- MARKETS ---------- */
  markets: {

    indices: [
      { name: "S&P 500",          level: 7511.35,  day: "-0.57", month: "+1.40", ytd: "+9.70" },
      { name: "Nasdaq Composite", level: 26376.34, day: "-1.15", month: "+2.00", ytd: "+13.50" },
      { name: "Nasdaq 100",       level: 30107.50, day: "-1.89", month: "+1.00", ytd: "+13.00", note: "YTD approximate (exact year-end-2025 base unconfirmed)." },
      { name: "Dow Jones",        level: 51999.67, day: "+0.64", month: "+3.00", ytd: "+8.20", note: "Record close, just shy of 52,000." },
      { name: "Russell 2000",     level: 2939.19,  day: "-0.87", month: "+3.00", ytd: "+18.40" },
      { name: "STOXX Europe 600", level: 636.00,   day: "+0.64", month: "+4.00", ytd: "+7.40" },
      { name: "FTSE 100",         level: 10494.21, day: "+0.61", month: "+3.00", ytd: "+5.70" },
      { name: "Nikkei 225",       level: 69404.50, day: "+0.13", month: "+5.00", ytd: "+37.90", note: "Near record highs. Some data sites misreport YTD ~+80% (a base-date error) — true YTD is ~+38%." },
      { name: "Hang Seng",        level: 24354.00, day: "-0.57", month: "-2.00", ytd: "-5.00" }
    ],

    rates: [
      { name: "US 10-Year Treasury", value: "4.44%",      change: "easing into the decision (Jun 16 close ~4.47%)" },
      { name: "US 2-Year Treasury",  value: "4.05%",      change: "-0.02 pp vs prior day" },
      { name: "Fed Funds (target)",  value: "3.50–3.75%", change: "FOMC decision due today (Jun 17) — hold expected" }
    ],

    fx: [
      { name: "EUR/USD",            value: "1.1612", day: "+0.03" },
      { name: "USD/JPY",            value: "160.28", day: "-0.09" },
      { name: "GBP/USD",            value: "1.3430", day: "+0.02" },
      { name: "Dollar Index (DXY)", value: "99.51",  day: "-0.06" }
    ],

    crypto: [
      { name: "Bitcoin",  price: 66300, day: "+0.9", month: "-16.2", year: "-37.2" },
      { name: "Ethereum", price: 1795,  day: "+4.1", month: "-19.3", year: "-29.5" }
    ]
  },

  /* ---------- BIG STOCKS (largest by market cap) ---------- */
  /* Price & 1-day = Tue Jun 16 close · 1M / 1Y = trailing price return */
  stocks: [
    { ticker: "NVDA",  name: "Nvidia",              price: 207.41, day: "-2.37", month: "-7.9",  year: "+46.1",  mktcap: "$5.03T" },
    { ticker: "GOOGL", name: "Alphabet",            price: 373.25, day: "+1.06", month: "-5.9",  year: "+113.7", mktcap: "$4.56T" },
    { ticker: "AAPL",  name: "Apple",               price: 299.24, day: "+0.95", month: "-0.3",  year: "+52.3",  mktcap: "$4.39T" },
    { ticker: "MSFT",  name: "Microsoft",           price: 393.83, day: "-1.48", month: "-6.7",  year: "-17.1",  mktcap: "$2.93T" },
    { ticker: "SPCX",  name: "SpaceX",              price: 201.80, day: "+4.83", month: "n/a",   year: "n/a",    mktcap: "$2.65T" },
    { ticker: "AMZN",  name: "Amazon",              price: 246.00, day: "-0.01", month: "-6.9",  year: "+16.0",  mktcap: "$2.64T" },
    { ticker: "AVGO",  name: "Broadcom",            price: 376.71, day: "-4.37", month: "-11.4", year: "+51.5",  mktcap: "$1.79T" },
    { ticker: "META",  name: "Meta Platforms",      price: 600.21, day: "+1.13", month: "-2.3",  year: "-12.1",  mktcap: "$1.53T" },
    { ticker: "TSLA",  name: "Tesla",               price: 404.66, day: "-1.58", month: "-4.2",  year: "+24.4",  mktcap: "$1.52T" },
    { ticker: "BRK.B", name: "Berkshire Hathaway",  price: 494.95, day: "-0.12", month: "+2.5",  year: "+1.5",   mktcap: "$1.07T" },
    { ticker: "JPM",   name: "JPMorgan Chase",      price: 331.14, day: "+3.68", month: "+11.2", year: "+25.0",  mktcap: "$887B" }
  ],

  /* ---------- COMMODITIES ---------- */
  commodities: [
    { name: "WTI Crude",   price: 75.31,   unit: "$/bbl",     day: "-0.97", month: "-27.9", ytd: "-28.0" },
    { name: "Brent Crude", price: 78.24,   unit: "$/bbl",     day: "-0.91", month: "-30.2", ytd: "-30.3" },
    { name: "Natural Gas", price: 3.234,   unit: "$/MMBtu",   day: "-0.80", month: "+7.1",  ytd: "-12.3" },
    { name: "Gold",        price: 4349.47, unit: "$/oz",      day: "-0.11", month: "-5.3",  ytd: "+0.3" },
    { name: "Silver",      price: 70.36,   unit: "$/oz",      day: "+0.49", month: "-9.5",  ytd: "-1.7" },
    { name: "Copper",      price: 6.53,    unit: "$/lb",      day: "+0.76", month: "+3.7",  ytd: "+14.6" },
    { name: "Wheat",       price: 599.30,  unit: "¢/bushel",  day: "+0.60", month: "-9.7",  ytd: "+18.2" }
  ],

  /* ---------- FINANCIAL NEWS ---------- */
  financialNews: [
    { category: "Macro", headline: "Fed decides today: Warsh's first meeting, hawkish hold expected",
      summary: "The FOMC's decision lands ~2pm ET with markets pricing ~97% odds of no change to the 3.50–3.75% range. New Chair Kevin Warsh's first meeting is expected to bring a hawkish dot plot showing as little as one cut left in 2026 (specifics pending the official statement).",
      source: "StockTitan", url: "https://www.stocktitan.net/articles/fed-rate-decision-june-17-2026", date: "Jun 17, 2026" },

    { category: "Macro", headline: "May CPI ran hot at 4.2%, but core monthly cooled",
      summary: "Headline CPI rose to 4.2% y/y (hottest since April 2023), though core was just +0.2% m/m — below the +0.3% consensus — reinforcing the Fed's no-cut stance into today's decision.",
      source: "IndexBox", url: "https://www.indexbox.io/blog/fed-holds-rates-as-inflation-hits-42-warshs-first-fomc-press-conference-in-focus/", date: "Jun 2026" },

    { category: "Macro", headline: "Oil collapses ~5% as US–Iran near a deal to reopen Hormuz",
      summary: "Brent fell more than 5% to below $80 (WTI ~$75) — its lowest since March — as a tentative US–Iran deal, due to be signed Friday in Switzerland, raised hopes of restored Gulf supply and eased inflation fears.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/14/oil-price-iran-war-strait-hormuz-peace-deal.html", date: "Jun 16, 2026" },

    { category: "Macro", headline: "Dow hits record near 52,000 as tech lags ahead of the Fed",
      summary: "The Dow rose ~0.6% (~+329 pts) to a record close just shy of 52,000, helped by financials and lower oil, while the Nasdaq and S&P 500 slipped as tech weighed on the tape ahead of the rate decision.",
      source: "TheStreet", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-june-16-2026", date: "Jun 16, 2026" },

    { category: "Macro", headline: "Jobless claims climb to 262,000, above forecasts",
      summary: "Initial unemployment claims rose to 262,000 (vs ~249k expected) for the week ending June 10, with the 4-week average up to 246,750 — an early sign of labor-market softening.",
      source: "Trading Economics", url: "https://tradingeconomics.com/united-states/jobless-claims", date: "Jun 2026" },

    { category: "M&A", headline: "SpaceX to buy Cursor-maker Anysphere for ~$60B",
      summary: "Four days after its record IPO, SpaceX agreed to acquire Anysphere — maker of AI coding agent Cursor — in an all-stock deal valuing it at ~$60B, the largest-ever AI dev-tools acquisition. Cursor had passed $4B in annualized revenue; closing is expected Q3 2026.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/16/spacex-spcx-cursor-acquisition-ipo.html", date: "Jun 16, 2026" },

    { category: "M&A", headline: "Fox to acquire Roku for ~$22B",
      summary: "Fox agreed to buy Roku for $160/share in cash and stock — a ~$22B enterprise value and 34% premium — with Fox holders owning ~73% of the combined streaming and live-TV group. Fox shares fell ~11% on the news.",
      source: "Fox Business", url: "https://www.foxbusiness.com/markets/fox-corporation-announces-22b-acquisition-roku-landmark-streaming-live-tv-deal", date: "Jun 15, 2026" },

    { category: "M&A", headline: "Yum Brands sells Pizza Hut for $2.7B",
      summary: "Yum divested Pizza Hut in two deals: LongRange Capital buys the ex-China business for $1.5B and Yum China takes mainland China for $1.2B. Yum expects ~$2.3B net after-tax proceeds; both close in Q3.",
      source: "Restaurant Dive", url: "https://www.restaurantdive.com/news/yum-brands-sells-pizza-hut-27-billion/807829/", date: "Jun 16, 2026" },

    { category: "M&A", headline: "Olin and Huntsman to merge in $2.4B 'merger of equals'",
      summary: "The two chemicals makers will combine into OlinHuntsman, a $12B+ North American leader (Olin holders ~54.5%, Huntsman ~45.5%). The deal targets $400M+ in synergies and closes 1H 2027.",
      source: "Huntsman", url: "https://www.huntsman.com/news/media-releases/detail/626/olin-and-huntsman-announce-transformative-merger-of-equals", date: "Jun 16, 2026" },

    { category: "Deal", headline: "Eni sells 20% of Plenitude to Ares for ~€2B",
      summary: "Italy's Eni agreed to sell a 20% stake in its retail-and-renewables unit Plenitude to Ares Management for roughly €2B (~$2.3B), continuing its strategy of bringing outside capital into its green businesses.",
      source: "Reuters", url: "https://intellizence.com/insights/merger-and-acquisition/major-ma-deals-pharma-automotive-food-ingredients-biotech-and-medtech-led-the-weeks-biggest-announcements/", date: "Jun 2026" },

    { category: "Capital Markets", headline: "Nvidia prices $25B jumbo bond — first since 2021",
      summary: "Nvidia sold $25B of investment-grade bonds (upsized from ~$20B) after drawing as much as $85B of orders — over 3x covered — joining a wave of Big Tech 'AI capex' debt issuance.",
      source: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-06-15/nvidia-kicks-off-first-high-grade-bond-offering-since-2021", date: "Jun 15, 2026" },

    { category: "IPO", headline: "SpaceX trades above $2T after its record debut",
      summary: "SpaceX's IPO — the largest ever, raising ~$75B — priced at $135 and opened +19% on June 12, pushing its market cap above $2 trillion; continued strength has lifted it toward ~$2.65T, framing its Cursor acquisition.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/12/spacex-ipo-spcx-live-updates.html", date: "Jun 12, 2026" },

    { category: "IPO", headline: "Four IPOs priced June 16 as the pipeline stays active",
      summary: "Issuance continued after the holiday lull with ~4 pricings Tuesday, including Cantor Equity Partners VII raising ~$250M on Nasdaq; more listings are slated for June 18.",
      source: "StockTitan", url: "https://www.stocktitan.net/news/ipo.html", date: "Jun 16, 2026" },

    { category: "Earnings", headline: "Oracle posts record Q4 with a $638B backlog (+363%)",
      summary: "Oracle delivered record Q4 revenue of $19.2B (+21%) with cloud infrastructure up 93%, and backlog (RPO) exploded to $638B on AI demand — but shares fell ~7% as FY capex guidance jumped to ~$55.7B.",
      source: "Oracle", url: "https://www.oracle.com/news/announcement/q4fy26-earnings-release-2026-06-10/", date: "Jun 10, 2026" },

    { category: "Earnings", headline: "La-Z-Boy reports Q4 FY26 amid cautious demand",
      summary: "The furniture maker reported fiscal Q4 after Tuesday's close, with the Street looking for ~$0.82 EPS on ~$569M revenue as softer big-ticket consumer demand weighed on estimates.",
      source: "Benzinga", url: "https://www.benzinga.com/insights/earnings/26/06/53218092/earnings-scheduled-for-june-16-2026", date: "Jun 16, 2026" },

    { category: "Earnings", headline: "John Wiley & Sons closes its fiscal year with Q4 results",
      summary: "The publisher and education-services firm reported fiscal Q4, with consensus near $1.65 EPS on ~$450M revenue — a read on academic/enterprise spending and its AI-content licensing tailwind.",
      source: "Investing.com", url: "https://news.alphastreet.com/john-wiley-sons-q4-2026-earnings-preview-june-16-street-expects-1-65-eps/", date: "Jun 16, 2026" }
  ],

  /* ---------- VENTURE CAPITAL (GCC-weighted + big global) ---------- */
  ventureCapital: [
    { region: "GCC", headline: "Saudi PIF's HUMAIN preparing a ~$10B AI venture fund",
      summary: "PIF-backed HUMAIN is set to launch 'HUMAIN Ventures,' a ~$10B fund targeting AI startups across the US, Europe and Asia; it has already signed ~$23B of deals with Nvidia, AMD, AWS and Qualcomm.",
      source: "Arab News", url: "https://www.arabnews.com/node/2602454/business-economy", date: "Jun 2026" },

    { region: "GCC", headline: "Qatar's QIA triples its venture Fund-of-Funds to $3B",
      summary: "The Qatar Investment Authority expanded its venture Fund-of-Funds by $2B to $3B, committing to managers including Greycroft, Shorooq and Speedinvest (opening Doha offices), with priority on tech and healthcare plus subsidized AI compute.",
      source: "AGBI", url: "https://www.agbi.com/entrepreneurs/2026/02/qia-ups-startup-backing-with-2bn-funding-pool/", date: "Jun 2026" },

    { region: "GCC", headline: "CargoX (UAE) raises $250M for autonomous logistics",
      summary: "UAE driverless-logistics platform CargoX secured $250M led by Abu Dhabi's BlueFive Capital to scale its autonomous last/middle/long-haul network in Abu Dhabi and Dubai, with ex-Talabat CEO Tomaso Rodriguez as CEO.",
      source: "Wamda", url: "https://www.wamda.com/2026/06/cargox-secures-250-million-led-bluefive-capital-driverless-logistics-expansion", date: "Jun 2026" },

    { region: "GCC", headline: "Uber buys another 12.5% of Careem from e& for $100M",
      summary: "Uber paid telecom group e& $100M cash for a further 12.5% of UAE super-app Careem, moving toward control and cutting e&'s holding from 50.03% to 37.53%.",
      source: "The National", url: "https://www.thenationalnews.com/business/markets/2026/06/01/uber-acquires-controlling-stake-in-uaes-careem-for-100-million/", date: "Jun 2026" },

    { region: "GCC", headline: "Dubai's du launches a $50M corporate VC fund ('du Ventures')",
      summary: "Telecom operator du unveiled a $50M corporate venture fund managed by Shorooq, targeting fintech, AI, cybersecurity, cloud and gaming, with a significant share earmarked for UAE startups.",
      source: "Wamda", url: "https://www.wamda.com/2026/06/du-shorooq-partner-50-million-fund-regional-startups", date: "Jun 2026" },

    { region: "GCC", headline: "Saudi fintech Stitch raises $25M — a16z's first GCC bet",
      summary: "Andreessen Horowitz led a $25M Series A into Riyadh's Stitch (a cloud-native banking OS) — its first-ever Gulf investment — with Arbor Ventures, COTU, Raed Ventures and SVC joining. Stitch says it has processed $5B+ in six months.",
      source: "Wamda", url: "https://www.wamda.com/2026/05/a16z-backs-saudi-fintech-stitch-gcc-deal", date: "Jun 2026" },

    { region: "GCC", headline: "Khwarizmi Ventures launches a $70M+ Fund II for GCC startups",
      summary: "Saudi VC Khwarizmi Ventures held a first close above $70M on Fund II, targeting seed–Series A across the GCC (50%+ earmarked for Saudi Arabia), backed by Saudi Venture Capital (SVC).",
      source: "Wamda", url: "https://www.wamda.com/2026/05/khwarizmi-ventures-launches-fund-ii-70m-close-gcc-startups", date: "Jun 2026" },

    { region: "GCC", headline: "Hub71 report: Abu Dhabi startups raised $2.7B in 2025",
      summary: "Hub71's impact report showed portfolio startups raised AED 9.9B ($2.7B) and generated $1.5B of revenue in 2025; applications jumped 62% to 5,000+, with the ecosystem now ~390 companies.",
      source: "Arabian Business", url: "https://www.arabianbusiness.com/business/start-ups/abu-dhabi-startups-raise-2-7bn-as-hub71-ecosystem-grows-to-390-companies", date: "Jun 2026" },

    { region: "GCC", headline: "UAE's CNTXT AI acquires Actualize for Arabic voice agents",
      summary: "UAE data-and-AI firm CNTXT AI acquired Actualize — which builds dialect-aware Arabic voice agents — to bolster its 'Munsit' Arabic voice platform for Gulf governments and enterprises; terms were undisclosed.",
      source: "Wamda", url: "https://www.wamda.com/2026/06/uae-cntxt-ai-acquires-actualize-expand-enterprise-grade-arabic-ai-agents", date: "Jun 2026" },

    { region: "Global", headline: "Neura Robotics (Germany) raises ~$1.4B",
      summary: "German humanoid and cognitive-robotics company Neura Robotics landed roughly $1.4B — the largest global venture round of the week — underscoring the surge in robotics and 'physical AI'.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-biotech-healthcare-ninjaone-leads/", date: "Jun 2026" },

    { region: "Global", headline: "Ramp raises $750M at a $44B valuation",
      summary: "The spend-management software firm raised $750M led by Iconiq Capital, GIC and Ontario Teachers', lifting its valuation to $44B.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/", date: "Jun 2026" },

    { region: "Global", headline: "AI IPO era opens: Anthropic files to go public; OpenAI closes $122B round",
      summary: "Anthropic filed to go public (reported ~$965B valuation) while OpenAI closed a $122B round at an $852B valuation ahead of a planned late-2026 listing — the marquee global AI capital-markets story of the period.",
      source: "Crunchbase News", url: "https://news.crunchbase.com/venture/unicorn-valuation-escalation-ai-space-tech-robotics/", date: "Jun 2026" }
  ],

  /* ---------- POLITICS ---------- */
  politics: {

    middleEast: [
      { region: "Lebanon", headline: "Israel–Lebanon ceasefire renewed; Hezbollah rejects it",
        summary: "Israel and Lebanon agreed on June 4 to renew their shaky ceasefire and hold further talks toward a comprehensive deal, but Hezbollah chief Naim Qassem rejected it — calling a withdrawal under fire 'surrender' — and Israel struck again hours later.",
        source: "NPR", url: "https://www.npr.org/2026/06/04/g-s1-125942/israel-lebanon-ceasefire", date: "Jun 2026" },

      { region: "Lebanon", headline: "Lebanon front threatens to derail the US–Iran deal",
        summary: "Renewed Israel–Hezbollah fighting in southern Lebanon is seen as a potential spoiler for the broader US–Iran memorandum, which explicitly includes Lebanon; the south has faced intensified Israeli strikes since March.",
        source: "NBC News", url: "https://www.nbcnews.com/world/israel/us-iran-ceasefire-deal-memorandum-israel-netanyahu-hezbollah-lebanon-rcna350085", date: "Jun 2026" },

      { region: "Lebanon", headline: "Hezbollah disarmament enters a disputed phase two",
        summary: "The Lebanese army completed phase one south of the Litani — gaining operational control there for the first time in 40 years — and says phase two needs ~4 more months. Israel claims Hezbollah is rebuilding; UNIFIL says there is no evidence of that.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/2/17/lebanon-says-four-months-needed-for-second-phase-of-hezbollah-disarmament", date: "Jun 2026" },

      { region: "Lebanon", headline: "Lebanon–IMF talks stall over a depositor-recovery law",
        summary: "Lebanon's cabinet approved a draft law letting depositors reclaim up to $100,000 over four years, but the IMF says it cannot endorse the draft as presented and is seeking changes alongside amendments to the bank-resolution law.",
        source: "The National", url: "https://www.thenationalnews.com/business/economy/2026/02/13/imf-staff-holds-talks-with-lebanon-on-bank-restructuring-strategy/", date: "Jun 2026" },

      { region: "Lebanon", headline: "Salam sets out a reform and reconstruction agenda",
        summary: "PM Nawaf Salam outlined 2026 reforms, legislative elections, and channeling a newly approved World Bank loan toward reconstruction; authorities estimate rebuilding the south could exceed $10B, with ~100,000 people still displaced.",
        source: "AFP", url: "https://www.yahoo.com/news/articles/seeking-rebuild-state-lebanons-salam-081028148.html", date: "Jun 2026" },

      { region: "Iran", headline: "US–Iran peace deal to be signed Friday, June 19 in Geneva",
        summary: "The US and Iran reached a memorandum to end 100+ days of war; the signing (mediated by Qatar and Pakistan) calls for ending operations 'on all fronts, including Lebanon,' reopening the Strait of Hormuz, lifting the US blockade and releasing frozen Iranian assets.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/15/us-iran-to-sign-a-peace-deal-on-friday-what-we-know-so-far", date: "Jun 2026" },

      { region: "Israel-Gaza", headline: "Gaza ceasefire remains fragile eight months on",
        summary: "The October 2025 ceasefire is holding only loosely, with near-daily reported Israeli strikes; Gaza's health ministry puts the post-ceasefire toll past 970 and aid flows at ~36% of allocated trucks, as Cairo talks continue.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/9/palestine-weekly-wrap-israel-presses-deeper-into-gaza-as-cairo-talks-begin", date: "Jun 2026" },

      { region: "Syria", headline: "US and EU permanently repeal Syria sanctions",
        summary: "Following the December 2025 UN delisting of President Ahmed al-Sharaa and HTS, the US and EU terminated longstanding sanctions, with the US Treasury implementing a permanent repeal as the transition consolidates.",
        source: "PBS NewsHour", url: "https://www.pbs.org/newshour/world/syria-welcomes-permanent-repeal-of-sweeping-u-s-sanctions-imposed-during-assad-regime", date: "Jun 2026" }
    ],

    us: [
      { headline: "Fed holds rates at 3.50–3.75% — Warsh's first meeting",
        summary: "The FOMC is expected to hold its benchmark rate today (markets price ~97% odds) amid 4.2% inflation, with new Chair Kevin Warsh's first press conference at 2:30pm ET and a dot plot expected to remove the last projected 2026 cut.",
        source: "StockTitan", url: "https://www.stocktitan.net/articles/fed-rate-decision-june-17-2026", date: "Jun 17, 2026" },

      { headline: "Trump announces US–Iran deal to end the war and reopen Hormuz",
        summary: "Trump said the US and Iran reached a framework to end fighting, lift the naval blockade and reopen the Strait of Hormuz, with a signing set for June 19 in Geneva — his most significant foreign-policy move of the period.",
        source: "NBC News", url: "https://www.nbcnews.com/news/us-news/deal-reached-united-states-iran-war-rcna350039", date: "Jun 2026" },

      { headline: "Senate passes a $70B immigration-enforcement bill, 52–47",
        summary: "The Senate voted 52–47 to fund ICE and Border Patrol for three years after Democrats had blocked the money for months; the bill now heads to the House, expected to take it up next week.",
        source: "Federal News Network", url: "https://federalnewsnetwork.com/congress/2026/06/senate-in-overnight-session-as-republicans-debate-limits-on-1-8b-trump-settlement/", date: "Jun 2026" },

      { headline: "FISA Section 702 lapses as renewal stalls",
        summary: "The foreign-surveillance authority expired after Congress failed to extend it; Trump wants the SAVE America Act attached before signing a renewal, entangling the fight with disputes over intelligence leadership.",
        source: "NBC News", url: "https://www.nbcnews.com/politics/trump-administration/live-blog/trump-congress-fisa-doj-ufc-2026-primary-elections-dhs-live-updates-rcna349535", date: "Jun 2026" },

      { headline: "Trump to nominate Jay Clayton as DNI amid Pulte controversy",
        summary: "Trump said he will nominate Jay Clayton as Director of National Intelligence, after Democrats objected to his naming of FHFA Director Bill Pulte as acting intelligence chief.",
        source: "Federal News Network", url: "https://federalnewsnetwork.com/congress/2026/06/senate-in-overnight-session-as-republicans-debate-limits-on-1-8b-trump-settlement/", date: "Jun 2026" }
    ]
  },

  /* ---------- SOURCES (footer credits) ---------- */
  sources: [
    { name: "Trading Economics", url: "https://tradingeconomics.com/" },
    { name: "stockanalysis.com", url: "https://stockanalysis.com/" },
    { name: "CNBC",              url: "https://www.cnbc.com/" },
    { name: "Bloomberg",         url: "https://www.bloomberg.com/" },
    { name: "Al Jazeera",        url: "https://www.aljazeera.com/" },
    { name: "Wamda",             url: "https://www.wamda.com/" },
    { name: "Crunchbase News",   url: "https://news.crunchbase.com/" }
  ]
};

/* ============================================================
   DAILY BRIEFING — DATA FILE
   ------------------------------------------------------------
   This file holds everything your dashboard displays.
   It is regenerated each time you run  /update-news  in Claude Code.
   You normally never edit this by hand.

   Last generated: June 16, 2026
   ============================================================ */

window.DASHBOARD_DATA = {

  dateLabel: "Tuesday, June 16, 2026",
  lastUpdated: "June 16, 2026",
  asOfNote: "Indices & stocks: Mon Jun 15 close · Commodities, FX, rates & crypto: Jun 15–16 · Fed decision due Wed Jun 17",
  drivingStory: "Markets ripped higher Monday (S&P +1.7%, Nasdaq +3.1%) after the US and Iran agreed to end their war and reopen the Strait of Hormuz — sending oil to two-month lows. All eyes now turn to the Fed: Wednesday's rate decision is the first chaired by Kevin Warsh, with a hold at 3.50–3.75% widely expected despite hot 4.2% inflation. The US–Iran deal is set to be signed Friday in Geneva and explicitly covers Lebanon.",

  /* ---------- MARKETS ---------- */
  markets: {

    indices: [
      { name: "S&P 500",          level: 7554.29,  day: "+1.65", month: "n/a", ytd: "+10.36" },
      { name: "Nasdaq Composite", level: 26683.94, day: "+3.07", month: "n/a", ytd: "+14.81" },
      { name: "Nasdaq 100",       level: 30563.12, day: "+3.14", month: "n/a", ytd: "+21.04", note: "The tech-heavy 100 largest non-financials — distinct from the broader Composite above." },
      { name: "Dow Jones",        level: 51671.03, day: "+0.92", month: "n/a", ytd: "+7.51" },
      { name: "Russell 2000",     level: 2965.09,  day: "+0.72", month: "n/a", ytd: "+19.5", note: "YTD approximate (derived from 2025 close)." },
      { name: "STOXX Europe 600", level: 634.44,   day: "0.00",  month: "n/a", ytd: "+7.16" },
      { name: "FTSE 100",         level: 10430.62, day: "-0.39", month: "n/a", ytd: "n/a" },
      { name: "Nikkei 225",       level: 69317.50, day: "+5.00", month: "n/a", ytd: "+37.70", note: "At record highs on a weak yen. Some data sites misreport YTD near +80% (that is the 1-year change) — true YTD ≈ +38%." },
      { name: "Hang Seng",        level: 24447.00, day: "-1.59", month: "n/a", ytd: "n/a" }
    ],

    rates: [
      { name: "US 10-Year Treasury", value: "4.43%",      change: "Fell to ~1-month low on the peace deal" },
      { name: "US 2-Year Treasury",  value: "4.09%",      change: "Drifting lower into the Fed meeting" },
      { name: "Fed Funds (target)",  value: "3.50–3.75%", change: "Decision Wed Jun 17 (Warsh's 1st) · hold expected" }
    ],

    fx: [
      { name: "EUR/USD",            value: "1.1578", day: "-0.10" },
      { name: "USD/JPY",            value: "160.24", day: "-0.05" },
      { name: "GBP/USD",            value: "1.3400", day: "-0.11" },
      { name: "Dollar Index (DXY)", value: "99.74",  day: "+0.05" }
    ],

    crypto: [
      { name: "Bitcoin",  price: 66522, day: "+3.51", month: "-18.38", year: "-37.02" },
      { name: "Ethereum", price: 1785,  day: "+7.16", month: "-22.08", year: "-29.96" }
    ]
  },

  /* ---------- BIG STOCKS (largest by market cap) ---------- */
  /* Price & 1-day = Mon Jun 15 close · 1M / 1Y = trailing price return */
  stocks: [
    { ticker: "NVDA",  name: "Nvidia",              price: 212.45, day: "+3.54", month: "-5.71", year: "+49.64",  mktcap: "$5.15T" },
    { ticker: "GOOGL", name: "Alphabet",            price: 369.35, day: "+2.69", month: "-6.91", year: "+111.46", mktcap: "$4.51T" },
    { ticker: "AAPL",  name: "Apple",               price: 296.42, day: "+1.82", month: "-1.27", year: "+50.89",  mktcap: "$4.35T" },
    { ticker: "MSFT",  name: "Microsoft",           price: 399.76, day: "+2.31", month: "-5.25", year: "-15.83",  mktcap: "$2.97T" },
    { ticker: "AMZN",  name: "Amazon",              price: 246.02, day: "+3.13", month: "-6.86", year: "+15.99",  mktcap: "$2.65T" },
    { ticker: "SPCX",  name: "SpaceX",              price: 192.50, day: "+19.60", month: "n/a",  year: "n/a",     mktcap: "$2.52T" },
    { ticker: "AVGO",  name: "Broadcom",            price: 393.94, day: "+3.11", month: "-7.35", year: "+58.40",  mktcap: "$1.87T" },
    { ticker: "TSLA",  name: "Tesla",               price: 411.15, day: "+1.16", month: "-2.63", year: "+26.39",  mktcap: "$1.54T" },
    { ticker: "META",  name: "Meta Platforms",      price: 593.48, day: "+4.77", month: "-3.38", year: "-13.09",  mktcap: "$1.51T" },
    { ticker: "BRK.B", name: "Berkshire Hathaway",  price: 495.52, day: "+1.28", month: "+2.66", year: "+1.64",   mktcap: "$1.07T" },
    { ticker: "JPM",   name: "JPMorgan Chase",      price: 319.40, day: "-0.41", month: "+7.25", year: "+20.55",  mktcap: "$856B" }
  ],

  /* ---------- COMMODITIES ---------- */
  commodities: [
    { name: "WTI Crude",   price: 80.30,   unit: "$/bbl",     day: "-0.55", month: "-22.9", ytd: "+29.1" },
    { name: "Brent Crude", price: 82.59,   unit: "$/bbl",     day: "-0.70", month: "-26.2", ytd: "+35.7" },
    { name: "Natural Gas", price: 3.14,    unit: "$/MMBtu",   day: "-0.36", month: "+3.7",  ytd: "+3.6" },
    { name: "Gold",        price: 4327.02, unit: "$/oz",      day: "+0.40", month: "-5.25", ytd: "-0.3" },
    { name: "Silver",      price: 69.47,   unit: "$/oz",      day: "-0.73", month: "-10.0", ytd: "-1.4" },
    { name: "Copper",      price: 6.47,    unit: "$/lb",      day: "-0.40", month: "+3.1",  ytd: "n/a" },
    { name: "Wheat",       price: 583.96,  unit: "¢/bushel",  day: "-0.98", month: "-12.1", ytd: "+11.9" }
  ],

  /* ---------- FINANCIAL NEWS ---------- */
  financialNews: [
    { category: "Macro", headline: "US–Iran reach peace deal; Strait of Hormuz to reopen, oil drops ~5%",
      summary: "The US and Iran agreed to end the conflict and reopen the Strait of Hormuz (which carries ~20% of global oil), with the US lifting its naval blockade. WTI fell to near $80/bbl and Brent to ~$83. A formal signing is set for Friday in Geneva.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/14/oil-price-iran-war-strait-hormuz-peace-deal.html", date: "Jun 14, 2026" },

    { category: "Macro", headline: "Fed decides tomorrow — Warsh's first meeting as Chair; hold expected",
      summary: "The FOMC is ~99% expected to hold the funds rate at 3.50–3.75% in new Chair Kevin Warsh's first meeting (decision Wed Jun 17, 2pm ET, with updated projections). Markets expect a shift from an easing to a neutral bias.",
      source: "FXStreet", url: "https://www.fxstreet.com/analysis/kevin-warsh-opens-first-fed-meeting-june-16-with-rate-hold-expected-202606151326", date: "Jun 15, 2026" },

    { category: "M&A", headline: "Fox to acquire Roku for ~$22 billion",
      summary: "Fox Corp will buy Roku for $160/share ($96 cash + 0.9693 Fox shares), a ~$22B enterprise value and 34% premium; Fox holders would own ~73% of the combined streaming/live-TV group. Fox shares fell ~11% on the news. Close expected H1 2027.",
      source: "Fox Business", url: "https://www.foxbusiness.com/markets/fox-corporation-announces-22b-acquisition-roku-landmark-streaming-live-tv-deal", date: "Jun 15, 2026" },

    { category: "IPO", headline: "SpaceX completes largest IPO in history; stock +19% on debut",
      summary: "SpaceX (Nasdaq: SPCX) priced at $135 and closed its June 12 debut up 19% near $161, valuing the company above $2 trillion — the largest IPO ever, with a reported ~$75B headline raise. It added another ~5–6% in following sessions.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/12/spacex-ipo-spcx-live-updates.html", date: "Jun 12, 2026" },

    { category: "Macro", headline: "ECB delivers surprise 25bp hike — first increase since 2023",
      summary: "The ECB raised all three key rates by 25bp on June 11 (deposit rate to 2.25%), citing Middle East-driven inflation — its first hike since September 2023, reversing eight straight cuts. Effective June 17.",
      source: "ECB / Morningstar", url: "https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260319~3057739775.en.html", date: "Jun 11, 2026" },

    { category: "Macro", headline: "US May CPI runs hot at 4.2%; core at 2.9%",
      summary: "Headline CPI rose 0.5% m/m and 4.2% y/y in May (core +2.9% y/y, the highest since Sept 2025), driven by shelter and a Middle-East energy spike. The Bank of England is expected to hold at 4.25% on June 18.",
      source: "BLS / Trading Economics", url: "https://www.bls.gov/news.release/cpi.nr0.htm", date: "Jun 2026" },

    { category: "M&A", headline: "Nuvei to acquire Payoneer for $2.75 billion",
      summary: "Nuvei will buy Payoneer for $7.40/share in cash (~$2.75B equity; 10% premium). The combined payments group would generate ~$3B annual revenue and process over $500B in volume across 150+ countries. Close expected mid-2027.",
      source: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-06-15/nuvei-agrees-to-buy-payoneer-in-2-75-billion-payments-deal", date: "Jun 15, 2026" },

    { category: "M&A", headline: "American Express to buy TheFork from Tripadvisor for $700 million",
      summary: "Amex agreed to acquire European restaurant-booking platform TheFork (50,000+ restaurants in 11 countries) for $700M all-cash, building on its Resy and Tock deals. Tripadvisor rose ~12% premarket; close expected by end-2026.",
      source: "PR Newswire", url: "https://www.prnewswire.com/news-releases/tripadvisor-enters-into-agreement-to-sell-thefork-to-american-express-for-700-million-302799948.html", date: "Jun 15, 2026" },

    { category: "M&A", headline: "French telecom consortium to buy Drahi's SFR in €20.4B breakup",
      summary: "Bouygues (42%), Iliad/Free (31%) and Orange (27%) signed an MoU to acquire and split Altice France's SFR, valuing France's #2 mobile carrier at €20.4B including debt and cutting the market from four operators to three. Completion targeted H2 2027.",
      source: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-06-08/billionaire-drahi-strikes-20-billion-deal-to-sell-france-s-sfr", date: "Jun 6–8, 2026" },

    { category: "M&A", headline: "Ingredion to acquire Tate & Lyle for ~$3.6 billion",
      summary: "US ingredients maker Ingredion announced a recommended all-cash takeover of UK-listed Tate & Lyle valued at roughly $3.6B (equity), expanding its specialty food-ingredients portfolio.",
      source: "Inside Arbitrage", url: "https://www.insidearbitrage.com/category/new-merger-announcements/", date: "Jun 8, 2026" },

    { category: "IPO", headline: "Parabilis Medicines prices largest-ever biotech IPO at $670M",
      summary: "Cancer biotech Parabilis Medicines (Nasdaq: PBLS) raised $670M — the largest biotech IPO on record — and jumped more than 50% on day one, a bright spot in an otherwise mixed week for new listings.",
      source: "Renaissance Capital", url: "https://www.renaissancecapital.com/IPO-Center/News", date: "Jun 12, 2026" },

    { category: "IPO", headline: "OpenAI files confidentially for IPO",
      summary: "OpenAI submitted a confidential draft registration to the SEC; analysts speculate a public listing could come between September and November 2026.",
      source: "Crypto Briefing", url: "https://cryptobriefing.com/openai-confidential-ipo-filing-2026-2/", date: "Jun 8, 2026" },

    { category: "Capital Markets", headline: "JPMorgan launches $8B bond sale to fund record EA buyout",
      summary: "JPMorgan began an $8B bond sale (part of ~$20B debt financing) for the ~$55B+ Electronic Arts take-private by Saudi PIF, Silver Lake and Affinity Partners — the largest leveraged buyout in history.",
      source: "TheStreet", url: "https://www.thestreet.com/investing/jpmorgan-launches-8-billion-bond-sale-for-ea-buyout", date: "Jun 2026" },

    { category: "Macro", headline: "Equities rally hard on de-escalation; Nasdaq +3.1% Monday",
      summary: "The S&P 500 rose 1.65% and the Nasdaq surged 3.07% on June 15 on the Iran deal and falling oil; energy shares lagged on the crude selloff while Asian tech jumped. US markets are closed Friday June 19 for Juneteenth.",
      source: "CNBC", url: "https://www.cnbc.com/2026/06/14/stock-market-today-live-updates.html", date: "Jun 15, 2026" },

    { category: "Earnings", headline: "Victoria's Secret tops Q1 guidance — sales +15%",
      summary: "Victoria's Secret reported Q1 FY26 net sales up 15% to $1.56B, beating guidance, with adjusted operating income of $80M above plan.",
      source: "SEC filing", url: "https://www.sec.gov/Archives/edgar/data/0001856437/000185643726000011/ex991vsxyq12026earningsrel.htm", date: "Jun 2026" },

    { category: "Earnings", headline: "Guidewire Q3 FY26 beats; shares rise",
      summary: "Insurance-software maker Guidewire posted EPS of $0.82 (vs $0.74 expected) on revenue of $372.5M (vs $356M expected), sending shares higher.",
      source: "Investing.com", url: "https://www.investing.com/news/transcripts/earnings-call-transcript-guidewire-q3-2026-beats-estimates-stock-rises-93CH-4727681", date: "Jun 2026" }
  ],

  /* ---------- VENTURE CAPITAL (GCC-weighted + big global) ---------- */
  ventureCapital: [
    { region: "GCC", headline: "Stitch (Saudi) raises $25M Series A — a16z's first-ever GCC investment",
      summary: "Riyadh fintech Stitch, which builds a cloud-native core banking system (lending, cards, payments, ledgers), raised $25M led by Andreessen Horowitz — the firm's first direct investment in the Gulf. Arbor Ventures, COTU, Raed Ventures and SVC also joined.",
      source: "Arab News", url: "https://www.arabnews.com/node/2643775/amp", date: "Jun 2026" },

    { region: "GCC", headline: "CargoX (UAE) raises $250M for autonomous logistics",
      summary: "UAE driverless-delivery startup CargoX, led by ex-Talabat CEO Tomaso Rodriguez, raised $250M from a group led by BlueFive Capital — the largest MENA round of early June, covering last-, middle- and long-haul routes.",
      source: "Arab News", url: "https://www.arabnews.com/node/2646163/business-economy", date: "Jun 2026" },

    { region: "GCC", headline: "Saudi PIF's HUMAIN commits $3B to xAI and expands AI data centers",
      summary: "PIF-owned HUMAIN committed $3B to Elon Musk's xAI (Series E) and signed a framework of up to $1.2B with Saudi's National Infrastructure Fund for AI data-center capacity — a marker of Gulf sovereign money flowing into frontier AI.",
      source: "Data Centre Magazine", url: "https://datacentremagazine.com/news/humain-invests-us-3bn-in-xai-as-saudi-ai-data-centres-expand", date: "Jun 2026" },

    { region: "GCC", headline: "Trukker (UAE) raises $300M in debt financing",
      summary: "UAE trucking/logistics marketplace Trukker raised $300M in debt — nearly 80% of all UAE startup capital in May — helping push MENA's monthly total to $454.7M across 33 deals (+202% month-on-month).",
      source: "Wamda", url: "https://www.wamda.com/2026/06/mena-startups-raise-4547-million-2026-led-debt-financing", date: "May 2026" },

    { region: "GCC", headline: "Khwarizmi Ventures launches $70M+ Fund II for GCC startups",
      summary: "Saudi VC Khwarizmi Ventures held a first close above $70M on Fund II, targeting seed–Series A across the GCC (at least half earmarked for Saudi Arabia), backed by Saudi Venture Capital (SVC).",
      source: "Wamda", url: "https://www.wamda.com/2026/05/khwarizmi-ventures-launches-fund-ii-70m-close-gcc-startups", date: "May 2026" },

    { region: "GCC", headline: "Uber buys e&'s 12.5% stake in Careem for $100M",
      summary: "Telecom group e& agreed to sell its 12.5% stake in UAE-born super-app Careem Technologies to Uber for $100M, consolidating Uber's ownership of the business.",
      source: "Arab News", url: "https://www.arabnews.com/node/2646163/business-economy", date: "Jun 2026" },

    { region: "GCC", headline: "Arib (Saudi) raises $23.5M for digital lending",
      summary: "Saudi digital-financing marketplace Arib raised $23.5M led by Merak Capital to scale its digital-lending platform.",
      source: "Wamda", url: "https://www.wamda.com/2026/05/arib-targets-saudi-digital-lending-boom-23-5m-funding-round", date: "Jun 2026" },

    { region: "GCC", headline: "Anara Impact Capital reaches $48M first close for a MENA fund",
      summary: "MENA-focused impact VC Anara Impact Capital announced a $48M first close (target $50M), backing seed–Series A startups in learning, wellbeing and climate across the region.",
      source: "Wamda", url: "https://www.wamda.com/2026/06/anara-impact-capital-announces-48-million-close-mena-focused-fund", date: "Jun 2026" },

    { region: "GCC", headline: "SPARQ (Abu Dhabi) raises $8.5M seed for an AI game engine",
      summary: "Abu Dhabi startup SPARQ, building an AI-powered game engine, raised $8.5M in seed funding with participation from a16z's Scout Fund — part of a busy $258.5M MENA deal week.",
      source: "entARABI", url: "https://entarabi.com/en/2026/06/during-the-first-week-of-june-2026-startup-investments-reach-258-5-million/", date: "Jun 2026" },

    { region: "Global", headline: "Anthropic becomes the world's most valuable AI startup at $965B",
      summary: "Anthropic's mega-round valued it at $965B post-money, overtaking OpenAI as the most valuable private AI company (reported raise sizes vary; investors linked include Altimeter, Dragoneer, Greenoaks and Sequoia).",
      source: "Axios", url: "https://www.axios.com/2026/05/28/anthropic-ai-fundraising-openai", date: "May 2026" },

    { region: "Global", headline: "Mistral AI in talks to raise ~€3B at a ~€20B valuation",
      summary: "French AI champion Mistral is reportedly raising about €3B (~$3.5B) at a ~€20B valuation — nearly double its September 2025 round — partly to fund Paris-area data centers. Still early-stage talks, not yet closed.",
      source: "TechCrunch", url: "https://techcrunch.com/2026/06/12/mistral-is-rumored-to-be-raising-e3b-at-e20-valuation/", date: "Jun 2026" },

    { region: "Global", headline: "a16z crypto closes a $2.2B fund despite the downturn",
      summary: "Andreessen Horowitz's crypto arm raised a $2.2B fund even as the blockchain market cooled — one of the larger dedicated crypto vehicles of this cycle.",
      source: "TechCrunch", url: "https://techcrunch.com/2026/05/05/as-crypto-cools-a16zcrypto-raises-a-2-2b-fund/", date: "May 2026" }
  ],

  /* ---------- POLITICS ---------- */
  politics: {

    middleEast: [
      { region: "Lebanon", headline: "Lebanon welcomes US–Iran deal clause halting Israeli operations on its soil",
        summary: "President Joseph Aoun and Speaker Nabih Berri welcomed the US–Iran agreement and its clause for a permanent, immediate cessation of war on all fronts, including Lebanon. Aoun said Lebanon hopes it translates into practical steps toward stability and reconstruction.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/15/is-lebanon-included-country-hopeful-for-us-iran-ceasefire-despite-doubts", date: "Jun 15, 2026" },

      { region: "Lebanon", headline: "Fighting eases after the deal; 1.2 million displaced warned not to rush home",
        summary: "Cross-border fighting subsided after the US–Iran framework, but Lebanese authorities cautioned the roughly 1.2 million displaced against returning immediately given unresolved implementation questions. Lebanon reports nearly 3,800 killed over the Israeli offensive against Hezbollah.",
        source: "CBC / AP", url: "https://www.cbc.ca/news/world/lebanon-israel-iran-united-states-peace-deal-9.7235389", date: "Jun 15, 2026" },

      { region: "Lebanon", headline: "Israeli strikes kill three in Beirut's southern suburbs days before the deal",
        summary: "Israel struck the Dahiyeh area of Beirut on June 14, killing three and wounding at least seven, saying it hit a Hezbollah command center in response to fire on northern Israel. The escalation briefly cast doubt on the imminent signing.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/14/israel-issues-forced-displacement-orders-for-29-towns-in-southern-lebanon", date: "Jun 14, 2026" },

      { region: "Lebanon", headline: "Israel signals it will not withdraw from seized Lebanese land",
        summary: "As Lebanon's army proceeds with a phased plan to disarm Hezbollah (phase one south of the Litani reportedly complete), Israel's defense minister said troops would remain in southern Lebanon indefinitely and would not withdraw from land seized in Lebanon, Syria and Gaza — complicating the deal's Lebanon clause.",
        source: "The Hill / AP", url: "https://thehill.com/homenews/ap/ap-international/ap-defense-minister-says-israel-wont-withdraw-from-land-seized-in-lebanon-syria-and-gaza/", date: "Jun 15, 2026" },

      { region: "Lebanon", headline: "Pound holds near 90,300/USD, but banking reform still incomplete",
        summary: "The Lebanese pound remained broadly stable (~LBP 90,300/USD) under orthodox central-bank policy, but the IMF continues to seek exchange-rate unification, bank recapitalization and deficit cuts; a pending Financial Gap law is needed to enforce bank resolution. A World Bank $250M project underpins early reconstruction.",
        source: "The Media Line", url: "https://themedialine.org/life-lines/analysis-lebanons-pound-is-holding-its-economy-is-another-story/", date: "Mid-Jun 2026" },

      { region: "Iran", headline: "US–Iran framework to be signed June 19 in Geneva",
        summary: "Terms reportedly include ceasing hostilities on all fronts, reopening the Strait of Hormuz within 30 days, releasing ~$24B in frozen Iranian assets, suspending oil sanctions, and a 60-day window for a final nuclear agreement. Mediated by Pakistan and Qatar with Saudi and Turkish input.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/15/us-iran-to-sign-a-peace-deal-on-friday-what-we-know-so-far", date: "Jun 14–15, 2026" },

      { region: "Israel-Gaza", headline: "Gaza ceasefire frays as Israeli strikes resume",
        summary: "Israel launched airstrikes on Gaza early on June 16, targeting what it called Hamas military sites after incendiary balloons, amid tensions following a right-wing flag march in Jerusalem. The January 2025 ceasefire has held only loosely.",
        source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/5/pervasive-fear-grips-gaza-as-israeli-attacks-persist-despite-ceasefire", date: "Jun 15–16, 2026" },

      { region: "Syria", headline: "Syria's Sharaa backs Hezbollah disarmament amid a government reshuffle",
        summary: "Interim President Ahmed al-Sharaa, who reshuffled several ministers in May, reiterated support for Lebanon disarming Hezbollah and pledged to bar the group from operating in Syria.",
        source: "Security Council Report", url: "https://www.securitycouncilreport.org/monthly-forecast/2026-06/syria-92.php", date: "Early-mid Jun 2026" }
    ],

    us: [
      { headline: "Fed expected to hold rates at 3.50–3.75% (Warsh's first meeting)",
        summary: "The FOMC is widely expected to hold for a fourth straight meeting amid sticky inflation (May CPI ~4.2%) and unemployment near 4.4%. Focus is on the new dot plot and Chair Kevin Warsh's guidance on any 2026 cut. Decision Wed Jun 17.",
        source: "Kalshi / Mitrade", url: "https://www.mitrade.com/au/insights/others/cfd-trading/fed-interest-rate-decision-2026", date: "Jun 16–17, 2026" },

      { headline: "US–Iran war-ending deal heads to signing",
        summary: "The administration reached a framework to end the US–Iran war begun in late February, with signing set for June 19 in Geneva. The deal commits the US to pull forces back from around Iran and lift its naval blockade, and has drawn Israeli objections over its Lebanon provisions.",
        source: "NBC News", url: "https://www.nbcnews.com/news/us-news/deal-reached-united-states-iran-war-rcna350039", date: "Jun 14–15, 2026" },

      { headline: "Nationwide 'No Kings' protests on June 14",
        summary: "Large protests took place June 14 challenging the administration's use of the National Guard, tariffs and pardons, framed around the approaching 250th anniversary of US independence and constitutional questions over presidential power.",
        source: "NBC News", url: "https://www.nbcnews.com/trump-administration", date: "Jun 14, 2026" },

      { headline: "National Guard deployments contested in court (Newsom v. Trump)",
        summary: "The administration's deployment of the National Guard to California, Oregon and Illinois over governors' objections — plus federal agents in Minneapolis during an immigration crackdown — remains in litigation, testing federal authority over state forces.",
        source: "NBC News", url: "https://www.nbcnews.com/trump-administration", date: "Mid-Jun 2026" },

      { headline: "Supreme Court term-end rulings pending",
        summary: "Ahead of its early-July recess, the Court has yet to rule on major cases including the bid to end birthright citizenship, mail-in ballot deadlines, transgender sports under Title IX, and Second Amendment questions. In May it struck a Louisiana congressional map as a racial gerrymander (6-3).",
        source: "CBS News", url: "https://www.cbsnews.com/news/supreme-court-major-cases-2026/", date: "By Jul 4, 2026" }
    ]
  },

  /* ---------- SOURCES (footer credits) ---------- */
  sources: [
    { name: "CNBC",              url: "https://www.cnbc.com/" },
    { name: "Bloomberg",         url: "https://www.bloomberg.com/" },
    { name: "Al Jazeera",        url: "https://www.aljazeera.com/" },
    { name: "stockanalysis.com", url: "https://stockanalysis.com/" },
    { name: "Trading Economics", url: "https://tradingeconomics.com/" },
    { name: "Renaissance Capital", url: "https://www.renaissancecapital.com/" }
  ]
};

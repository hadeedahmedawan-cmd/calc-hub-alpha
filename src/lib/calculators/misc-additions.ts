import type { Calculator } from "./types";
import { fmt, money, n } from "./helpers";

export const miscAdditions: Calculator[] = [
  // ---- Business & Work ----
  {
    slug: "commission",
    name: "Commission Calculator",
    category: "Business & Work",
    priority: "Medium",
    description: "Calculate sales commission from a sale amount and commission rate.",
    fields: [
      { name: "sale", label: "Sale amount", unit: "$", default: 50000 },
      { name: "rate", label: "Commission rate", unit: "%", default: 6 },
    ],
    compute: (v) => {
      const sale = n(v.sale), rate = n(v.rate);
      const commission = sale * (rate / 100);
      return { rows: [["Commission earned", money(commission)], ["Net to seller after commission", money(sale - commission)]] };
    },
    content: {
      howItWorks: [
        "Flat-rate commission is straightforward: commission = sale amount × commission rate. This is the most common structure for real estate, retail sales, and many straightforward sales roles.",
        "This differs from markup or margin calculations, which are about pricing a product relative to its cost — commission is calculated on the total sale price itself, regardless of what the item cost to produce or acquire.",
        "Some roles use tiered commission structures instead, where the rate increases at higher sales volumes — this calculator covers the flat-rate case, the most common baseline structure.",
      ],
      example: "A $50,000 sale at a 6% commission rate earns $3,000 in commission.",
      faqs: [
        { q: "Is commission calculated before or after taxes?", a: "Commission is typically calculated on the gross sale price before taxes are applied, though specific contracts and industries can vary — check your own commission agreement for the exact base." },
        { q: "How do tiered commission structures differ from this?", a: "Tiered structures apply different rates to different portions of the sale (e.g., 5% on the first $20k, 8% beyond that) rather than one flat rate on the whole amount — this tool covers the simpler flat-rate case." },
        { q: "Does commission typically get taxed differently from a base salary?", a: "In the US, commission is often treated as supplemental wages and can be withheld at a different flat rate than regular pay, though the actual tax owed at year-end depends on total annual income." },
      ],
    },
  },
  {
    slug: "break-time-requirements",
    name: "Work Break Time Calculator",
    category: "Business & Work",
    priority: "Low",
    description: "Estimate typical rest and meal break entitlements based on hours worked in a shift.",
    fields: [{ name: "hours", label: "Hours worked in shift", default: 8 }],
    compute: (v) => {
      const hours = n(v.hours);
      let rest = 0, meal = 0;
      if (hours >= 3.5 && hours < 6) rest = 1;
      else if (hours >= 6 && hours <= 10) { rest = 2; meal = 1; }
      else if (hours > 10) { rest = 3; meal = 2; }
      return { rows: [["10-minute rest breaks", `${rest}`], ["30-minute meal breaks", `${meal}`]] };
    },
    content: {
      howItWorks: [
        "This follows a commonly referenced break structure (modeled on California's labor code, one of the most detailed and frequently cited in the US) that scales rest and meal breaks to shift length: no requirement under 3.5 hours, one rest break from 3.5-6 hours, a rest break plus a meal break from 6-10 hours, and more of both beyond 10 hours.",
        "Break requirements vary significantly by state and country — some US states have no state-level break mandate at all beyond federal wage-and-hour rules, while others closely regulate timing and duration.",
        "This tool gives a general, widely-used reference pattern, not a legal determination for your specific jurisdiction or employment situation.",
      ],
      example: "An 8-hour shift under this framework calls for two 10-minute rest breaks and one 30-minute meal break.",
      faqs: [
        { q: "Does federal US law require breaks?", a: "Federal law (the Fair Labor Standards Act) doesn't mandate rest or meal breaks at all — break requirements come from state law where they exist, which is why this varies so much by location." },
        { q: "Is this the actual law where I live?", a: "Possibly not — this reflects one commonly referenced state framework as a general pattern, not your specific jurisdiction's actual requirements. Check your state or country's labor department for the rules that actually apply to you." },
        { q: "Are breaks paid or unpaid under this model?", a: "Short rest breaks (around 10 minutes) are commonly paid, while longer meal breaks (around 30 minutes) are commonly unpaid — but this also varies by jurisdiction and should be confirmed against local rules." },
      ],
    },
  },
  {
    slug: "cost-per-hire",
    name: "Cost Per Hire Calculator",
    category: "Business & Work",
    priority: "Low",
    description: "Calculate the average recruiting cost per hire.",
    fields: [
      { name: "totalCost", label: "Total recruiting costs", unit: "$", default: 50000 },
      { name: "hires", label: "Number of hires", default: 10 },
    ],
    compute: (v) => {
      const cost = n(v.totalCost), hires = n(v.hires);
      return { rows: [["Cost per hire", money(cost / hires)]] };
    },
    content: {
      howItWorks: [
        "Cost per hire is total recruiting spend divided by the number of hires made in that period: CPH = total recruiting costs ÷ number of hires. This is the standard formula used in SHRM's widely-adopted cost-per-hire methodology.",
        "'Total recruiting costs' typically includes both internal costs (recruiter salaries, internal referral bonuses, HR technology) and external costs (job board postings, agency fees, advertising) for the period being measured.",
        "This metric is most useful tracked over time and compared against industry benchmarks for your sector and role type, rather than viewed as a single isolated number.",
      ],
      example: "$50,000 in total recruiting costs producing 10 hires gives a cost per hire of $5,000.",
      faqs: [
        { q: "What should be included in 'total recruiting costs'?", a: "The SHRM standard includes both internal costs (recruiter time, referral bonuses, HR systems) and external costs (job postings, agency fees, advertising, background checks) for the measurement period." },
        { q: "Does cost per hire vary a lot by role type?", a: "Significantly — executive and highly specialized technical roles typically cost far more per hire than high-volume entry-level positions, so comparing CPH across very different role types can be misleading." },
        { q: "Is a lower cost per hire always better?", a: "Not necessarily — an unusually low CPH can sometimes indicate under-investment in sourcing quality, which may show up later as higher turnover. It's one metric among several, not a standalone success measure." },
      ],
    },
  },
  {
    slug: "employee-turnover-rate",
    name: "Employee Turnover Rate Calculator",
    category: "Business & Work",
    priority: "Low",
    description: "Calculate employee turnover rate for a given period.",
    fields: [
      { name: "separations", label: "Employees who left during the period", default: 12 },
      { name: "avgEmployees", label: "Average number of employees during the period", default: 150 },
    ],
    compute: (v) => {
      const sep = n(v.separations), avg = n(v.avgEmployees);
      const rate = (sep / avg) * 100;
      return { rows: [["Turnover rate", `${fmt(rate, 2)}%`]] };
    },
    content: {
      howItWorks: [
        "Turnover rate divides the number of employees who left during a period by the average number of employees during that same period, expressed as a percentage: rate = separations ÷ average headcount × 100.",
        "Average headcount (rather than a single point-in-time count) smooths out the effect of hiring and departures happening throughout the period, giving a more representative denominator than a single snapshot.",
        "Turnover is usually tracked annually for external benchmarking, but can be calculated for any period — monthly or quarterly tracking often catches problems faster than waiting for a full year's number.",
      ],
      example: "12 employees leaving during a period with an average headcount of 150 gives a turnover rate of 8%.",
      faqs: [
        { q: "What's considered a 'good' turnover rate?", a: "It varies enormously by industry — retail and food service often see turnover well above 50% annually, while stable professional roles might target under 10%. Compare against your specific industry's benchmarks, not a universal number." },
        { q: "Should voluntary and involuntary departures be counted together?", a: "Many organizations track them separately, since voluntary turnover (people choosing to leave) and involuntary turnover (layoffs, terminations) usually signal very different things about the organization." },
        { q: "How do I calculate 'average employees' for the period?", a: "A common simple method: add the headcount at the start and end of the period, then divide by 2. More precise methods average headcount across each month within the period." },
      ],
    },
  },
  // ---- Auto & Travel ----
  {
    slug: "car-depreciation",
    name: "Car Depreciation Calculator",
    category: "Auto & Travel",
    priority: "High",
    description: "Estimate a vehicle's value over time using a declining annual depreciation rate.",
    fields: [
      { name: "price", label: "Purchase price", unit: "$", default: 30000 },
      { name: "years", label: "Years of ownership", default: 5 },
      { name: "rate", label: "Annual depreciation rate", unit: "%", default: 15, help: "New cars commonly average 15-20% per year; varies a lot by make and model" },
    ],
    compute: (v) => {
      const price = n(v.price), years = n(v.years), rate = n(v.rate);
      const value = price * Math.pow(1 - rate / 100, years);
      return { rows: [["Estimated value", money(value)], ["Total depreciation", money(price - value)]] };
    },
    content: {
      howItWorks: [
        "This uses a declining-balance model: each year, the vehicle loses a percentage of its current value (not its original price), so depreciation slows in dollar terms even at a constant percentage rate. Formula: Value = Price × (1 − rate)^years.",
        "Real-world depreciation isn't perfectly smooth — most vehicles lose a disproportionately large chunk of value in the first year (often 20%+) and then depreciate more gradually afterward, so a single flat annual rate is an approximation of that overall curve.",
        "Depreciation rates vary significantly by make, model, and even trim level — luxury vehicles and electric vehicles have historically depreciated faster than average, while certain trucks and off-road-oriented models often hold value better than average.",
      ],
      example: "A $30,000 car depreciating at 15% a year is worth roughly $13,311 after 5 years — a total loss of about $16,689.",
      faqs: [
        { q: "Is 15% a realistic depreciation rate?", a: "It's a reasonable average across many vehicle types, but actual rates commonly range from about 10% to 20%+ per year depending on the specific make and model — check resale-value data for your specific vehicle for a more precise number." },
        { q: "Why do cars lose so much value in the first year?", a: "The moment a car is driven off the lot it's classified as 'used,' which triggers an immediate value drop regardless of actual condition — separate from the ongoing wear-based depreciation that continues afterward." },
        { q: "Does mileage affect this calculation?", a: "Not directly in this simplified model — real depreciation is also influenced by mileage, condition, and market demand, which this straightforward percentage-based estimate doesn't separately account for." },
      ],
    },
  },
  {
    slug: "road-trip-splitter",
    name: "Road Trip Cost Splitter",
    category: "Auto & Travel",
    priority: "Low",
    description: "Split total road trip costs evenly among passengers.",
    fields: [
      { name: "totalCost", label: "Total trip cost", unit: "$", default: 240 },
      { name: "people", label: "Number of people splitting", default: 4 },
    ],
    compute: (v) => {
      const cost = n(v.totalCost), people = n(v.people);
      return { rows: [["Cost per person", money(cost / people)]] };
    },
    content: {
      howItWorks: [
        "A straightforward even split: cost per person = total trip cost ÷ number of people. Total cost can include fuel, tolls, parking, and any other shared trip expenses combined into one figure before splitting.",
        "This assumes an even split is the fair approach — for trips where people join or leave partway through, or where usage genuinely differs (one person driving their own car the whole way versus others only riding along part of the route), a straight even split may not feel fair even though it's the simplest to calculate.",
        "Pair this with the fuel cost calculator to get an accurate total fuel figure first, then add tolls and parking before splitting here.",
      ],
      example: "A $240 total trip cost split evenly among 4 people comes to $60 each.",
      faqs: [
        { q: "What if someone joins partway through the trip?", a: "Calculate a separate, prorated total for the portion of the trip they were actually along for, or simply agree on a fair adjustment — a straight even split assumes everyone shares the full trip equally." },
        { q: "Should the driver pay less since they're doing the driving?", a: "That's a matter of group preference, not a fixed rule — some groups treat driving as a contribution equivalent to a cash share, others split purely by cost. This calculator handles the even-split math; the fairness judgment is yours." },
        { q: "What costs should count toward the total?", a: "Commonly: fuel, tolls, and parking. Lodging and food are sometimes split separately since people's choices there often differ more than shared driving costs." },
      ],
    },
  },
  {
    slug: "parking-cost",
    name: "Parking Cost Calculator",
    category: "Auto & Travel",
    priority: "Low",
    description: "Calculate parking cost from an hourly rate, with an optional daily maximum cap.",
    fields: [
      { name: "rate", label: "Hourly rate", unit: "$", default: 3 },
      { name: "hours", label: "Hours parked", default: 5 },
      { name: "dailyMax", label: "Daily maximum (optional)", unit: "$", default: 25 },
    ],
    compute: (v) => {
      const rate = n(v.rate), hours = n(v.hours);
      const dailyMax = v.dailyMax ? n(v.dailyMax) : undefined;
      const raw = rate * hours;
      const cost = dailyMax !== undefined ? Math.min(raw, dailyMax) : raw;
      return { rows: [["Cost without cap", money(raw)], ["Cost you'll actually pay", money(cost)]] };
    },
    content: {
      howItWorks: [
        "Most metered and garage parking charges an hourly rate until it hits a daily maximum, whichever is lower: cost = min(hourly rate × hours, daily max). Without a cap entered, it's simply hourly rate × hours.",
        "The daily max exists specifically to protect against runaway costs on long stays — without it, an all-day parking session at an hourly rate could easily cost more than a flat day rate would.",
        "Rates and caps vary enormously by location — downtown urban garages and airport parking in particular often have steep hourly rates but a capped daily maximum that makes longer stays proportionally cheaper.",
      ],
      example: "At $3/hour for 10 hours with a $25 daily max: the raw hourly total would be $30, but the daily cap means you'd actually pay $25.",
      faqs: [
        { q: "Why enter both an hourly rate and a daily max?", a: "Because most real parking facilities use exactly this structure — you're charged hourly up to a point, then the daily cap takes over, so both numbers together give you the realistic final cost." },
        { q: "What if there's no daily maximum at this facility?", a: "Leave that field blank or at zero — the calculator will just apply the straight hourly rate with no cap." },
        { q: "Does this account for weekly or monthly parking rates?", a: "No — this covers single-visit hourly/daily parking. Weekly and monthly rates are typically flat fees set separately by the facility, not derived from the hourly rate." },
      ],
    },
  },
  // ---- Home, DIY & Construction ----
  {
    slug: "gravel-aggregate",
    name: "Gravel / Aggregate Calculator",
    category: "Home, DIY & Construction",
    priority: "Medium",
    description: "Estimate the volume and weight of gravel or aggregate needed for an area.",
    fields: [
      { name: "area", label: "Area to cover", unit: "sq ft", default: 200 },
      { name: "depth", label: "Depth", unit: "inches", default: 3 },
    ],
    compute: (v) => {
      const area = n(v.area), depth = n(v.depth);
      const cuFt = area * (depth / 12);
      const cuYd = cuFt / 27;
      const tons = cuYd * 1.4; // typical gravel density, ~1.4 tons per cubic yard
      return { rows: [["Volume needed", `${fmt(cuYd)} cu yd`], ["Approximate weight", `${fmt(tons)} tons`]] };
    },
    content: {
      howItWorks: [
        "Gravel and aggregate are sold and delivered by volume (cubic yards) or weight (tons), so this converts your project's area and desired depth into both. Formula: cubic yards = (area × depth in feet) ÷ 27, then weight ≈ cubic yards × 1.4 tons.",
        "1.4 tons per cubic yard is a typical density for standard crushed stone or gravel — actual density varies somewhat by material type (crushed granite, river rock, and pea gravel all differ slightly).",
        "This is the same underlying volume math as the site's concrete calculator, applied to a different material — useful for driveways, walkways, and drainage projects rather than poured concrete.",
      ],
      example: "A 200 sq ft area at 3 inches deep needs about 1.85 cubic yards, weighing roughly 2.59 tons of standard gravel.",
      faqs: [
        { q: "How deep should a gravel driveway layer be?", a: "A common range is 4-6 inches for a base layer plus a top layer, though exact recommendations vary by expected vehicle weight and local soil conditions — check with your gravel supplier for a project-specific recommendation." },
        { q: "Does gravel type change the weight estimate?", a: "Yes, somewhat — this uses a typical average density; denser materials like crushed granite can run slightly heavier per cubic yard than lighter materials like pea gravel." },
        { q: "Should I order extra beyond the calculated amount?", a: "A small buffer (5-10%) is common practice to account for compaction and uneven ground, similar to the buffer recommended for concrete orders." },
      ],
    },
  },
  {
    slug: "water-heater-sizing",
    name: "Water Heater Sizing Calculator",
    category: "Home, DIY & Construction",
    priority: "Low",
    description: "Get a general recommended water heater tank size based on household size.",
    fields: [{ name: "people", label: "Number of people in household", default: 4 }],
    compute: (v) => {
      const people = n(v.people);
      let range: string;
      if (people <= 1) range = "20-30 gallons";
      else if (people <= 2) range = "30-40 gallons";
      else if (people <= 3) range = "40-50 gallons";
      else if (people <= 4) range = "50-60 gallons";
      else range = "60-80 gallons";
      return { rows: [["Recommended tank size", range]] };
    },
    content: {
      howItWorks: [
        "This uses a commonly cited rule-of-thumb table matching household size to a recommended storage tank water heater size, based on typical simultaneous hot-water demand for that many people.",
        "The recommendation scales up with household size because more people generally means more overlapping hot-water use — showers, laundry, and dishwashing happening close together or at the same time.",
        "This assumes a standard tank-style water heater. Tankless (on-demand) water heaters are sized completely differently, by flow rate rather than storage volume, since they don't store hot water at all.",
      ],
      example: "A household of 4 people is generally recommended a 50-60 gallon storage tank water heater.",
      faqs: [
        { q: "Does this account for high-usage households?", a: "Not precisely — households with unusually heavy simultaneous hot water use (large soaking tubs, multiple showers running back to back) may want to size up from this general guideline." },
        { q: "What about tankless water heaters?", a: "Tankless units are sized by maximum flow rate (gallons per minute) they can heat on demand, not storage capacity — this calculator's guidance applies to traditional tank-style heaters only." },
        { q: "Does climate affect the right size?", a: "Indirectly — in colder climates, incoming water is colder, so a water heater has to work harder to reach the target temperature, which can effectively reduce a given tank's real-world capacity for back-to-back use." },
      ],
    },
  },
  {
    slug: "lumber-board-feet",
    name: "Lumber Board Feet Calculator",
    category: "Home, DIY & Construction",
    priority: "Low",
    description: "Calculate board feet of lumber from dimensions and quantity.",
    fields: [
      { name: "thickness", label: "Thickness", unit: "inches", default: 2 },
      { name: "width", label: "Width", unit: "inches", default: 6 },
      { name: "length", label: "Length", unit: "feet", default: 8 },
      { name: "quantity", label: "Number of pieces", default: 10 },
    ],
    compute: (v) => {
      const t = n(v.thickness), w = n(v.width), l = n(v.length), qty = n(v.quantity);
      const boardFeet = ((t * w * l) / 12) * qty;
      return { rows: [["Total board feet", `${fmt(boardFeet)} bd ft`], ["Board feet per piece", fmt(boardFeet / qty)]] };
    },
    content: {
      howItWorks: [
        "A board foot is a standard lumber volume unit: one board foot equals a piece 12 inches wide, 12 inches long, and 1 inch thick. Formula: board feet = (thickness in inches × width in inches × length in feet) ÷ 12, then multiplied by quantity for multiple pieces.",
        "Lumber, especially hardwood, is commonly priced per board foot rather than per linear foot, since board feet accounts for the actual volume of wood regardless of how it's cut — a thick, narrow board and a thin, wide board can contain the same board footage.",
        "Softwood dimensional lumber (like standard 2x4s at the hardware store) is more commonly priced per linear foot or per piece instead, so board feet calculations come up most often with hardwood or specialty lumber purchases.",
      ],
      example: "Ten pieces of 2\" × 6\" lumber, each 8 feet long: (2 × 6 × 8) ÷ 12 = 8 board feet per piece × 10 pieces = 80 board feet total.",
      faqs: [
        { q: "Why does thickness matter so much in this formula?", a: "Because board feet measures volume, not just surface area — a thicker board contains proportionally more wood for the same width and length, and the formula reflects that directly." },
        { q: "Are 'nominal' and 'actual' lumber dimensions the same?", a: "No — a nominal '2x6' is actually closer to 1.5\" × 5.5\" after milling and drying. For a precise board-foot calculation, use actual measured dimensions rather than the nominal size printed on the label." },
        { q: "Does this apply to plywood or sheet goods?", a: "Not typically — plywood and other sheet goods are usually priced per sheet or per square foot, not per board foot, since they're a different product category from dimensional lumber." },
      ],
    },
  },
];

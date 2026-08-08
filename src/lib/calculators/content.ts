import type { CalculatorContent } from "./types";

// Per-calculator SEO/help content. Worked examples use each calculator's default inputs
// and were verified against its actual compute() logic before being written into the copy.
export const CONTENT: Record<string, CalculatorContent> = {
  "mortgage": {
    howItWorks: [
      "Your monthly mortgage payment is amortized: it spreads your loan amount (home price minus down payment) evenly across every month of the term at a fixed interest rate.",
      "Each payment splits between principal and interest. Early payments are mostly interest; as the balance shrinks, more shifts to principal.",
      "This tool covers principal and interest only. Real bills usually add property taxes, homeowners insurance, and PMI through an escrow account.",
      "Refinancing resets this math from scratch on a new rate, term, and balance. It's usually worth it when rates drop at least 0.75-1% below your current rate, or when switching from a 30-year to a 15-year to build equity faster — run both scenarios through this calculator to compare.",
    ],
    example: "On a $400,000 home with $80,000 down (20%), 6.5% fixed, 30-year term: loan $320,000, monthly payment $2,022.62, total interest $408,142.36, total paid $728,142.36.",
    faqs: [
      { q: "Does this include taxes and insurance?", a: "No — principal and interest only. Add taxes, insurance, and PMI separately; they typically add several hundred dollars per month." },
      { q: "What down payment avoids PMI?", a: "20% on a conventional loan. Below that, PMI is required until you build enough equity to drop it." },
      { q: "15 vs 30 year term?", a: "30-year has lower monthly payment but nearly double the total interest. 15-year is a bigger monthly bite but pays off far sooner." },
      { q: "How much do rates matter?", a: "A lot — 1% on a $320k loan moves the monthly payment by over $200. Worth shopping aggressively." },
      { q: "Is it worth paying points to lower my rate?", a: "Only if you'll stay in the loan long enough to recoup the upfront cost. Divide the points cost by the monthly savings to find your break-even month, then compare that to how long you actually expect to hold the mortgage." },
    ],
  },
  "loan": {
    howItWorks: [
      "Personal/installment loans use the same amortization math as mortgages: fixed monthly payment of principal + interest, more interest early and more principal later.",
      "Monthly payment depends on amount, APR, and term. Shorter terms or higher payments cut total interest significantly.",
      "Lenders price personal loans by credit score, income, and debt-to-income ratio, so the APR you're quoted can vary widely between lenders for the identical loan amount and term — always compare at least two or three offers before signing.",
    ],
    example: "Borrowing $20,000 at 7% APR over 5 years: monthly payment $396.02, total interest $3,761.44, total repayment $23,761.44.",
    faqs: [
      { q: "APR vs interest rate?", a: "Nominal rate is raw cost; APR includes some fees and is the truer annual cost. Compare APR when shopping lenders." },
      { q: "Can I pay off early?", a: "Almost always yes — extra principal cuts future interest. Check for prepayment penalties first." },
      { q: "Longer term = smaller payment?", a: "Yes, but you pay more total interest. Balance monthly affordability against total cost." },
      { q: "What credit score do I need for a good rate?", a: "Rates tighten up meaningfully above 700, and the best offers usually start around 720-740+. Below 640, expect either higher APRs or the need for a co-signer." },
    ],
  },
  "emi": {
    howItWorks: [
      "EMI (Equated Monthly Installment) is the fixed monthly payment on most home, personal, and auto loans in India and much of Asia. Every month you pay the same amount, but the interest/principal split shifts over time.",
      "Formula: P × r × (1+r)^n / ((1+r)^n − 1), where r is monthly rate and n is total months. The calculator handles this automatically.",
      "A longer tenure lowers the EMI but raises total interest paid, exactly like Western amortized loans — the trade-off is identical, just the terminology differs by region.",
    ],
    example: "For a ₹5,00,000 loan at 9% p.a. over 60 months, EMI is ₹10,379.18, total interest is ₹1,22,750.66, and total repayment reaches ₹6,22,750.66.",
    faqs: [
      { q: "Is EMI the same as a monthly loan payment?", a: "It's identical math — 'EMI' is just the term used in India and Asia for the fixed monthly installment on an amortized loan." },
      { q: "Can I lower my EMI without extending tenure?", a: "Negotiate a lower interest rate, refinance, or make a lump-sum prepayment against principal so the remaining EMI is recalculated on a smaller balance." },
      { q: "Does EMI change with floating rates?", a: "For fixed-rate loans, no. For floating-rate loans, banks may either adjust the EMI or keep the EMI constant and change the tenure — check your loan terms." },
      { q: "What's a comfortable EMI-to-income ratio?", a: "Most lenders and financial planners suggest keeping total EMI obligations under 40% of monthly take-home pay, including any existing loans." },
    ],
  },
  "compound-interest": {
    howItWorks: [
      "Compound interest is interest earning interest. Each compounding period, interest earned is added to the principal, and the next period's interest is calculated on the new, larger balance.",
      "Formula: A = P(1 + r/n)^(nt). More frequent compounding produces a slightly higher end balance. Regular monthly contributions turbo-charge the effect.",
      "The gap between simple and compound growth looks small in year one and enormous by year twenty — this is why starting early matters more than the exact amount you start with.",
    ],
    example: "Investing $10,000 at 6% annual return compounded monthly for 10 years with no additional contributions grows to $18,193.97 — that's $8,193.97 in interest.",
    faqs: [
      { q: "Why does compound interest matter for retirement?", a: "Growth is exponential, not linear — the last decade before retirement often adds more in dollar terms than the first two decades combined." },
      { q: "What's the 'Rule of 72'?", a: "Divide 72 by your annual return rate to estimate the years it takes to double your money. At 6%, about 12 years; at 8%, about 9." },
      { q: "Does compounding frequency matter?", a: "Slightly. Monthly vs. annually adds only a fraction of a percent, but daily vs. yearly matters over 30+ years." },
      { q: "Is 6% a realistic long-term return?", a: "It's a conservative estimate for a diversified stock portfolio, which has historically averaged closer to 7-10% before inflation over multi-decade periods — 6% leaves some margin of safety." },
    ],
  },
  "simple-interest": {
    howItWorks: [
      "Simple interest ignores compounding. Interest is calculated once per period on the original principal only using I = P × R × T.",
      "Common in short-term loans, some auto financing, and treasury bills. Long-term products use compound interest instead.",
      "The key giveaway that a product uses simple interest: your interest cost stays exactly proportional to time, with no acceleration — twice the term means exactly twice the interest, nothing more.",
    ],
    example: "$1,000 principal at 5%/year for 3 years: interest = $1,000 × 0.05 × 3 = $150. Total repayment: $1,150.",
    faqs: [
      { q: "When is simple interest actually used?", a: "Short-term consumer loans, some auto financing, treasury bills, and back-of-envelope estimates." },
      { q: "Is simple interest better for the borrower?", a: "Yes, all else equal — but posted rates for simple-interest products are often higher to make up for it." },
      { q: "How do I tell if my loan uses simple or compound interest?", a: "Check your loan agreement's 'method of interest calculation' clause, or ask the lender directly — most auto loans and some personal loans use simple interest, while credit cards and mortgages compound." },
    ],
  },
  "paycheck": {
    howItWorks: [
      "Applies a single effective tax rate to gross annual salary and splits the result across your pay periods. Quick estimate — real paychecks stack federal, state, FICA, and often local taxes plus benefits deducted separately.",
      "Use it to sanity-check job offers or budget expected take-home. For exact numbers, refer to your latest pay stub.",
      "This is especially useful when comparing two job offers with different salaries and pay frequencies — converting both to the same per-paycheck basis makes the real difference obvious.",
    ],
    example: "A $75,000 salary at a 22% effective tax rate leaves $58,500 net. Biweekly (26 periods) = $2,250.00 per paycheck, with $16,500 withheld over the year.",
    faqs: [
      { q: "Why doesn't my real paycheck match?", a: "Real withholding stacks federal, FICA (7.65%), state, sometimes local tax, plus insurance and retirement. This tool collapses all into one rate." },
      { q: "What effective rate should I use?", a: "Rough US estimate: 20–25% middle earners, 25–32% higher earners including FICA. Divide last year's total tax by gross for personal accuracy." },
      { q: "Does pay frequency change my paycheck?", a: "Total annual pay is the same; per-check amount differs. Weekly = 52, biweekly = 26, semi-monthly = 24, monthly = 12." },
      { q: "Why do some months have three biweekly paychecks?", a: "Biweekly pay (every 14 days) produces 26 paychecks a year, which doesn't divide evenly into 12 months — so two months a year get an extra 'third' paycheck. Budget around the 26-paycheck annual total, not a fixed monthly amount." },
    ],
  },
  "take-home-pay": {
    howItWorks: [
      "Take-home is gross income minus taxes, retirement contributions, insurance premiums, and other deductions.",
      "US 401(k) contributions reduce taxable income, so real take-home is often slightly higher than a naive subtraction — this tool keeps math simple.",
      "This is the number that actually matters for budgeting — building a monthly budget around gross salary is one of the most common causes of people feeling like their money 'disappears.'",
    ],
    example: "$6,000/mo gross with 25% tax, 5% retirement, and $200 health premium: $6,000 − $1,500 − $300 − $200 = $4,000.00 per month.",
    faqs: [
      { q: "Should I count 401(k) as take-home?", a: "For cash-flow budgeting, treat as deduction; for net worth, they still count. It's your money, just locked into retirement." },
      { q: "What deductions do people forget?", a: "Health premiums, HSA/FSA, life insurance, disability, parking, transit. Add up pay-stub deductions once for the full picture." },
      { q: "Do bonuses affect take-home differently?", a: "US bonuses are often withheld at a flat 22–37% supplemental rate, over-withholding for most people. Difference comes back at tax time." },
      { q: "How often should I recheck this number?", a: "Any time your salary, tax withholding, benefits elections, or retirement contribution rate changes — open enrollment season is a common trigger since premiums often shift." },
    ],
  },
  "income-tax": {
    howItWorks: [
      "US federal income tax is progressive: each dollar you earn is taxed at the rate for its bracket, not one flat rate on total income. This walks your taxable income through 2024 single-filer brackets.",
      "Result is federal income tax only — Social Security, Medicare, state, and local taxes are all separate.",
      "A common misconception is that moving into a higher bracket taxes your entire income at the new rate — it doesn't. Only the portion of income that falls within that bracket is taxed at the higher rate, which is why effective rates always sit well below the top marginal bracket.",
    ],
    example: "On $80,000 taxable income (single filer, 2024): federal tax is $12,653.00, effective rate 15.82%, after-tax income $67,347.00.",
    faqs: [
      { q: "Marginal vs effective rate?", a: "Marginal is your last dollar's bracket (22% or 24% for middle earners). Effective is total tax divided by total income and always lower." },
      { q: "Does this account for deductions?", a: "No. Enter your taxable income (after standard or itemized deduction) for a realistic result." },
      { q: "Why is my real bill different?", a: "State tax, FICA, credits, retirement contributions, HSA, and many other factors change the real number. This is a first-pass estimate." },
      { q: "Does a raise ever leave me with less take-home pay?", a: "In the US federal system, no — because only the income within the new higher bracket is taxed at the higher rate, a raise can never reduce your after-tax income overall." },
    ],
  },
  "sales-tax": {
    howItWorks: [
      "Sales tax is a percentage added to the subtotal at checkout. Multiply subtotal by rate for tax, add for total.",
      "US rates vary widely by state, county, and sometimes city.",
      "Unlike income tax, sales tax is regressive by nature — it takes the same percentage regardless of income, which is why many states exempt necessities like groceries and medicine to soften the impact on lower earners.",
    ],
    example: "$100 subtotal at 8.25% = $8.25 tax, $108.25 total.",
    faqs: [
      { q: "How do I find my local rate?", a: "Check your state department of revenue website — most have a ZIP lookup for combined state + local rate." },
      { q: "Is sales tax charged on everything?", a: "No — many states exempt groceries, prescription drugs, and some clothing. Rules vary by state." },
      { q: "Do online purchases get taxed at my rate or the seller's?", a: "Since a 2018 Supreme Court ruling, most online retailers now collect tax based on the buyer's shipping address, not the seller's location — so use your own local rate for online estimates." },
    ],
  },
  "tip": {
    howItWorks: [
      "Multiply bill by desired tip percent, add to bill, divide by number of people if splitting.",
      "US customary is 15–20% for standard service, 20–25% for excellent. Tipping is smaller or optional in most of Europe and Asia.",
      "Splitting a bill evenly is simplest, but it can feel unfair if orders were very uneven — some groups prefer splitting the tip proportionally to what each person ordered instead.",
    ],
    example: "$50 bill × 18% = $9.00 tip → $59.00 total. Split between 2 people: $29.50 each.",
    faqs: [
      { q: "Tip on pre-tax or post-tax?", a: "Convention is pre-tax. Many people tip on the total for simplicity. On big bills it matters; on small ones it's cents." },
      { q: "Do I tip on delivery fees?", a: "The delivery fee usually goes to the platform, not the driver. Tip the driver separately — 15–20% of the food order is baseline." },
      { q: "Good tip on takeout?", a: "10% for takeout that involves prep and packing; nothing expected for simple counter service in many regions." },
      { q: "Is tipping customary outside the US?", a: "Rarely to the same degree. Many European countries have service charges built in or round up modestly; Japan often considers tipping unnecessary or even mildly rude. Check local norms before traveling." },
    ],
  },
  "roi": {
    howItWorks: [
      "ROI (return on investment) is a single percentage: (Final Value − Initial Cost) / Initial Cost.",
      "It doesn't account for time — a 50% return in 1 year is very different from 50% in 10 years — so pair with CAGR for longer holdings.",
      "ROI is a simple, unitless percentage, which makes it easy to compare very different kinds of investments — a rental property, a stock, or a small business — on the same scale, as long as you're consistent about what counts as cost and what counts as final value.",
    ],
    example: "$1,000 investment now worth $1,500: ROI = ($1,500 − $1,000) / $1,000 = 50.00%.",
    faqs: [
      { q: "What's a 'good' ROI?", a: "Depends on time and risk. Stock market averages ~10%/year long-term; short-term projects vary. Compare to risk-free rate and alternatives." },
      { q: "ROI vs CAGR?", a: "ROI is total percent gain. CAGR is annualized — the equivalent yearly return producing the same result." },
      { q: "Should I include fees and taxes in ROI?", a: "For a realistic picture, yes — subtract transaction fees, management fees, and any capital gains tax from the final value before calculating. Otherwise ROI overstates what you actually keep." },
    ],
  },
  "retirement": {
    howItWorks: [
      "Projected balance combines your current savings growing at the assumed return plus monthly contributions compounding on top over years to retirement.",
      "Small changes in assumed return move the final number a lot over 20–40 years — try a range (5%, 7%, 9%) to see the spread.",
      "This model assumes constant contributions and a constant return, which real life never delivers exactly — treat the result as a planning estimate to stress-test, not a guaranteed outcome.",
    ],
    example: "$20,000 saved, $500/month, 7% annual return, 30 years to retirement: projected balance ≈ $772,315.45.",
    faqs: [
      { q: "Is 7% return realistic?", a: "It's the rough long-term US stock market average. Actual results vary — historical does not guarantee future." },
      { q: "How much should I save?", a: "Rule of thumb: save 15% of gross income including employer match, starting early. Adjust upward if you started late." },
      { q: "Does inflation affect these numbers?", a: "Yes. This gives nominal dollars. For purchasing power, subtract expected inflation (~3%/yr) from the return." },
      { q: "What if I start saving later in life?", a: "You'll need a higher monthly contribution or a longer working period to reach the same target — run a few different monthly amounts through this calculator to see what closes the gap." },
    ],
  },
  "401k": {
    howItWorks: [
      "Balance grows from combined annual contributions (yours + employer match) compounding at assumed return over your working years.",
      "Assumes constant salary and contribution. Real salaries usually rise, so actual balances are often higher.",
      "Employer match formulas vary widely — some match dollar-for-dollar up to a cap, others match 50 cents on the dollar. Check your plan document for the exact formula rather than assuming a flat percentage.",
    ],
    example: "$70,000 salary, 8% employee + 4% employer match, 7% return, 25 years: ≈ $531,291.92.",
    faqs: [
      { q: "Should I always take the full employer match?", a: "Yes — it's a 100% immediate return on that portion. Not contributing enough to get the full match is leaving free money." },
      { q: "Traditional vs Roth 401(k)?", a: "Traditional: contributions reduce taxable income now, tax on withdrawal. Roth: after-tax now, tax-free later. Roth wins if you'll be in a higher bracket at retirement." },
      { q: "What's the 2024 contribution limit?", a: "$23,000 under 50, extra $7,500 catch-up at 50+. Employer match doesn't count toward your limit." },
      { q: "What happens to my 401(k) if I change jobs?", a: "You can typically roll it into your new employer's plan or an IRA without triggering taxes or penalties. Cashing it out early instead usually means a 10% penalty plus income tax on the full amount." },
    ],
  },
  "amortization": {
    howItWorks: [
      "An amortization schedule breaks each monthly payment into how much went to interest vs principal, plus the remaining balance.",
      "Early payments are heavily interest because interest accrues on the outstanding balance. As the balance drops, more goes to principal.",
      "Looking at a full schedule is the clearest way to see why extra payments early in a loan save so much more interest than the same extra payment made near the end — early dollars are fighting a much larger balance.",
    ],
    example: "$200,000 loan at 6% for 30 years: monthly payment $1,199.10. Year 1 interest $11,933.19, principal $2,456.02, ending balance $197,543.98.",
    faqs: [
      { q: "Why so little principal in year 1?", a: "Interest is calculated on the outstanding balance monthly. Balance is highest at the start, so interest eats most of the payment." },
      { q: "How do extra payments help?", a: "Every dollar of extra principal saves all future interest that dollar would have accrued — often several dollars over 30 years." },
      { q: "At what point does more go to principal than interest?", a: "On a 30-year loan around 6%, that crossover happens roughly halfway through the term — often surprising people who expect it much sooner." },
    ],
  },
  "car-loan": {
    howItWorks: [
      "Sale price minus down payment and trade-in equals amount financed; fixed monthly payment covers principal + interest over the term.",
      "Terms usually run 36–72 months. Longer cuts monthly payment but stretches interest and can leave you 'underwater' longer.",
      "Cars depreciate fast in the first few years, so a long loan term combined with a small down payment is the classic recipe for owing more than the car is worth — a real risk if you need to sell or the car is totaled.",
    ],
    example: "$30,000 car, $3,000 down, no trade-in, 7.5% APR, 5 years: finances $27,000, monthly payment $541.02, total interest $5,461.48.",
    faqs: [
      { q: "Should I take a longer term?", a: "Only if you can't afford the shorter one. Longer costs more overall and raises underwater risk." },
      { q: "Is dealership financing a good deal?", a: "Sometimes — especially manufacturer 0% APR promos. Otherwise, pre-approval from your credit union gives leverage and often a better rate." },
      { q: "Does the calculator include tax and fees?", a: "No — uses negotiated price. Add tax, title, registration, and fees if rolling them into the loan." },
      { q: "How much should I put down?", a: "20% or more meaningfully reduces the underwater-loan risk in the first year or two. Less than 10% down on a new car is a common way people end up owing more than the car is worth." },
    ],
  },
  "debt-payoff": {
    howItWorks: [
      "Given a balance, APR, and fixed monthly payment, calculates months to payoff and total interest paid.",
      "If your payment is less than the monthly interest accrual, the debt never pays off.",
      "This is worth checking before committing to a 'minimum payment' plan on any high-APR debt — some minimums are set just above the interest accrual, meaning payoff can take decades even though the balance looks like it's shrinking.",
    ],
    example: "$5,000 balance at 20% APR, $200/mo: pays off in 32.6 months (2.7 years). Total paid $6,521.71, of which $1,521.71 is interest.",
    faqs: [
      { q: "Fastest way to pay off multiple debts?", a: "Avalanche (highest APR first — saves most interest) or snowball (smallest balance first — momentum). Avalanche is mathematically optimal." },
      { q: "Does making more than the minimum help?", a: "Enormously — every extra dollar saves future interest. Even $25 extra per month can shave months off." },
      { q: "What if my payment barely covers interest?", a: "You'll pay off very slowly or never — try this calculator with a slightly higher payment to see how much a modest increase actually shortens the timeline." },
    ],
  },
  "credit-card-interest": {
    howItWorks: [
      "Credit card interest is calculated daily on the outstanding balance and compounded monthly. Small payments mean most goes to interest and the balance barely moves.",
      "This assumes a fixed monthly payment; real cards let you pay a percentage-based minimum that keeps you in debt for decades.",
      "Because interest compounds daily rather than monthly, credit card debt grows faster than an amortized loan of the same nominal APR — which is part of why it feels so much harder to pay down than a mortgage or car loan.",
    ],
    example: "$3,000 at 22% APR, $100/month: takes about 44 months and costs $1,395.30 in interest — nearly half the original balance again.",
    faqs: [
      { q: "Why is credit card debt so hard to pay off?", a: "High APRs (18–29%) plus low minimums (1–3%) mean minimums barely dent principal. Doubling or tripling dramatically speeds payoff." },
      { q: "Should I do a balance transfer?", a: "A 0% intro APR transfer helps if you pay it off before the intro ends. Watch for transfer fees (3–5%)." },
      { q: "Does paying twice a month help?", a: "Slightly — reduces average daily balance. Paying a larger total matters far more than splitting it." },
      { q: "Is it better to pay off one card or spread payments across several?", a: "Concentrate extra payments on the highest-APR card while paying minimums on the rest — this is the avalanche method and mathematically saves the most interest overall." },
    ],
  },
  "savings-goal": {
    howItWorks: [
      "Given target, current balance, expected annual return, and months available, calculates the monthly deposit needed.",
      "Higher returns mean smaller required deposits, but higher-return accounts carry more risk. For short-term goals (<3 yrs), a high-yield savings or CD is safer than stocks.",
      "Running this with a slightly lower return than you expect builds in a margin of safety — if the real return comes in higher, you finish early; if lower, you're not caught short.",
    ],
    example: "To reach $10,000 in 36 months, starting with $1,000 at 4% return: about $232.38 per month.",
    faqs: [
      { q: "Realistic savings return?", a: "Short-term: 4–5% in high-yield savings or CD (2024–26). Long-term (5+ yrs): 6–8% average in a diversified portfolio." },
      { q: "Multiple goals at once?", a: "Yes — separate 'buckets' keep each on track. Automate transfers on payday." },
      { q: "What if I can't afford the monthly amount this calculator suggests?", a: "Extend the timeline, lower the target, or split the difference — try a few combinations here rather than assuming the goal is out of reach." },
    ],
  },
  "investment-return": {
    howItWorks: [
      "CAGR (Compound Annual Growth Rate) is the constant annual return equivalent to your actual gain over multiple years.",
      "Formula: CAGR = (End/Start)^(1/years) − 1.",
      "CAGR is the standard way to compare two investments held for different lengths of time on equal footing — a 50% total gain over 3 years and a 50% total gain over 8 years represent very different annual performance once converted to CAGR.",
    ],
    example: "$1,000 → $1,500 over 3 years: CAGR = 14.47% — the equivalent constant yearly return.",
    faqs: [
      { q: "CAGR vs ROI?", a: "ROI is total percent gain (here 50%); CAGR is annualized (14.47%/yr). CAGR is fairer for comparing investments of different lengths." },
      { q: "Does CAGR hide volatility?", a: "Yes — it treats the journey as a straight line. Two investments with equal CAGRs can feel very different if one is stable and the other swings." },
      { q: "Can CAGR be negative?", a: "Yes — if the end value is lower than the start value, CAGR comes out negative, representing an average annual loss over the period." },
    ],
  },
  "inflation": {
    howItWorks: [
      "Inflation erodes purchasing power over time. Shows nominal future value (dollars needed to match today's power) and purchasing power of a future amount.",
      "US long-run average ~3%/year; individual years range from near 0% to over 8%.",
      "Inflation compounds just like interest does, which is why even a 'mild' 3% annual rate cuts purchasing power by more than half over a 25-year span — worth keeping in mind for any long-term financial plan.",
    ],
    example: "$1,000 today at 3% inflation over 20 years: nominal future value $1,806.11, or purchasing power of $553.68 in today's terms.",
    faqs: [
      { q: "Why does inflation matter for retirement?", a: "A $1M nominal retirement at 3% over 30 years is ~$412k in today's power. Plan long-term goals in real (inflation-adjusted) dollars." },
      { q: "How is inflation measured?", a: "US Bureau of Labor Statistics tracks CPI-U — a weighted basket of goods and services. Personal experience varies with spending." },
      { q: "Should I use 3% or a different rate for my own planning?", a: "3% is the long-run historical average, but some planners use 2.5-3.5% depending on how conservative they want to be — try both ends of that range to see how sensitive your plan is." },
    ],
  },
  "break-even": {
    howItWorks: [
      "Break-even units = Fixed Costs / (Price − Variable Cost per unit). The volume where total revenue exactly covers all costs — no profit, no loss.",
      "Anything sold beyond break-even is profit. Below it, fixed costs subsidize each unit.",
      "This number is one of the fastest sanity checks for a new product or business idea — if the break-even volume is clearly unrealistic for your market size, the pricing or cost structure needs rethinking before you launch, not after.",
    ],
    example: "$10,000 fixed cost, $25 price, $10 variable cost per unit: break-even = 10,000 / 15 = 666.67 units.",
    faqs: [
      { q: "Round up or down?", a: "Up — you can't sell a fraction of a unit. 666.67 means 667 units to fully cover costs." },
      { q: "How does break-even help pricing?", a: "It shows the minimum volume that makes a price viable. If unreachable, raise price, cut fixed costs, or lower variable cost." },
      { q: "What counts as a fixed vs variable cost?", a: "Fixed costs stay the same regardless of volume (rent, salaries, insurance). Variable costs scale with each unit sold (materials, packaging, per-unit shipping)." },
    ],
  },
  "currency-converter": {
    howItWorks: [
      "Live rates from open.er-api.com, updated at least once daily. Multiplies your source amount by the source→target rate.",
      "Bank and credit-card conversions typically differ by 1–3% from mid-market rates because of spreads and fees.",
      "Mid-market rates are the reference point banks and card networks price against, but almost nobody actually transacts at that exact rate — knowing the mid-market figure just lets you see how much a given provider's spread is really costing you.",
    ],
    example: "100 USD → EUR at a live mid-market rate around 0.875 gives roughly 87.55 EUR (exact figure updates with each request).",
    faqs: [
      { q: "Where do rates come from?", a: "open.er-api.com aggregates from central bank sources, updated at least daily. Mid-market (interbank), not retail." },
      { q: "Why does my bank give a worse rate?", a: "Banks add spread (1–3%) and sometimes flat foreign-transaction fees. Multi-currency neobanks often offer closer to mid-market." },
      { q: "Real-time enough for trading?", a: "No — updated on a delay. For trading use a broker's live feed. Good enough for planning." },
    ],
  },
  "discount": {
    howItWorks: [
      "Multiply original price by discount percent to get amount saved; subtract for sale price.",
      "Same math retailers use on price tags.",
      "This is also useful in reverse — if you know the sale price and discount percent but want the original price, divide the sale price by (1 − discount%) to check whether a 'was' price on a tag is accurate.",
    ],
    example: "$80 item at 25% off: save $80 × 25% = $20, sale price $60.00.",
    faqs: [
      { q: "Is 'up to 70% off' really 70% off?", a: "Rarely on everything — usually just the most-discounted single item. Most items on a sale are marked down less than the headline." },
      { q: "Stacking discounts?", a: "Multiply, don't add. 20% + extra 10% = 0.80 × 0.90 = 72% of original, or 28% total off — not 30%." },
      { q: "Does discount order matter when stacking?", a: "No — multiplying percentages is commutative, so 20% off then 10% off gives the identical final price as 10% off then 20% off." },
    ],
  },
  "vat": {
    howItWorks: [
      "VAT (Value Added Tax) is charged on goods and services in many countries. Add VAT to a net price or extract VAT from a gross price.",
      "Gross = Net × (1 + rate); Net = Gross / (1 + rate).",
      "A common mistake is applying the net formula (multiplying by the rate) when trying to extract VAT from a gross price — that overstates the VAT amount. Always divide by (1 + rate) first when working backward from a gross figure.",
    ],
    example: "£100 net at 20% VAT: VAT £20, gross £120. Extracting VAT from £120 gross gives back £20 VAT and £100 net.",
    faqs: [
      { q: "VAT vs sales tax?", a: "VAT is collected at every supply-chain stage (with credits for VAT already paid); sales tax only at final consumer sale. Consumer effect looks similar." },
      { q: "Include VAT in B2B pricing?", a: "B2B in VAT-registered transactions: usually excluding VAT. B2C: typically inclusive." },
      { q: "Do VAT rates vary by product?", a: "Yes — most countries apply reduced or zero rates to essentials like food, books, or children's clothing, alongside a standard rate for everything else." },
    ],
  },
  "profit-margin": {
    howItWorks: [
      "Profit = Revenue − Cost. Margin = Profit / Revenue. Markup = Profit / Cost. Different ratios — don't confuse them.",
      "50% margin corresponds to 100% markup. Retailers think markup; accountants think margin.",
      "Confusing the two is a common pricing mistake — setting a '50% markup' price gives you only a 33.3% margin, not 50%, because markup is calculated on cost while margin is calculated on the higher revenue figure.",
    ],
    example: "$100 revenue on $60 cost: $40 profit, 40.00% margin, 66.67% markup.",
    faqs: [
      { q: "Margin or markup — which matters?", a: "Margin for financial analysis — fraction of every sales dollar that is profit. Markup is useful when setting prices from cost." },
      { q: "Healthy margin?", a: "Wildly industry-dependent. Grocery: 1–3%. Software: 70%+. Restaurants: 3–5%. Compare to industry benchmarks." },
      { q: "Gross margin vs net margin?", a: "Gross margin only subtracts direct cost of goods sold. Net margin subtracts every expense — overhead, salaries, taxes, everything — and is always lower." },
    ],
  },
  "rent-affordability": {
    howItWorks: [
      "The 30% rule: spending more than 30% of gross monthly income on rent stretches your budget uncomfortably.",
      "Some frameworks use net income (lower cap). High-cost cities sometimes push 35–40% at the cost of thinner discretionary spending.",
      "This calculator gives a ceiling, not a target — plenty of financially healthy budgets land comfortably below 30%, especially for anyone prioritizing aggressive saving or carrying other significant monthly obligations.",
    ],
    example: "$5,000/month gross income: 30% rule caps rent at $1,500.00/month.",
    faqs: [
      { q: "Where does the 30% rule come from?", a: "Originated in US federal housing policy in the 1980s. It's a guideline, not a legal limit." },
      { q: "Include utilities in the 30%?", a: "Some versions do. If rent includes utilities, use as-is; if separate, budget 5–10% of income on top." },
      { q: "What if my income is variable?", a: "Use the 12-month average and be conservative. Lenders often require documented base income." },
      { q: "Is 30% always the right target?", a: "It's a general guideline, not a fixed rule — someone with low debt and no car payment can often comfortably manage more, while someone with significant other obligations may want to aim lower." },
    ],
  },
  "down-payment": {
    howItWorks: [
      "Multiply purchase price by down-payment percentage to see cash needed at closing.",
      "US benchmark: 20% avoids PMI on conventional loans. FHA allows 3.5%; VA and USDA allow 0% for eligible borrowers.",
      "The down payment isn't the only cash you'll need — closing costs, moving expenses, and an emergency buffer for the new home all add to the total upfront cost beyond just this number.",
    ],
    example: "$400,000 home at 20% down = $80,000.00 cash at closing.",
    faqs: [
      { q: "Do I need 20% down?", a: "No — FHA at 3.5%, some conventional at 3–5%, VA/USDA at 0%. Lower down usually means PMI and a higher monthly payment." },
      { q: "Budget for closing costs too?", a: "Yes — usually 2–5% of the loan amount: appraisal, inspection, title, prepaid taxes and insurance." },
      { q: "Is a bigger down payment always better?", a: "It lowers your monthly payment and avoids PMI, but tying up more cash reduces your emergency reserve — weigh the trade-off against your overall financial cushion, not just the mortgage math alone." },
    ],
  },
  "bmi": {
    howItWorks: [
      "BMI = weight (kg) / height² (m²). A population-level screening tool grouping adults into underweight, normal, overweight, and obese.",
      "Does not distinguish muscle from fat, so it misclassifies muscular athletes as overweight. Use waist-to-hip ratio or body-fat % for a nuanced individual picture.",
      "BMI was originally developed in the 1830s as a population statistics tool, not an individual diagnostic measure — that historical context is part of why health professionals increasingly treat it as one data point among several rather than a standalone verdict.",
    ],
    example: "175 cm, 70 kg adult: BMI = 70 / (1.75)² = 22.9 — Normal (18.5–24.9).",
    faqs: [
      { q: "BMI categories?", a: "<18.5 underweight, 18.5–24.9 normal, 25–29.9 overweight, ≥30 obese (WHO adult cutoffs)." },
      { q: "Is BMI accurate?", a: "For population screening, yes. For individuals — especially athletes, elderly, or Asian populations — it can mislead. Combine with waist for clarity." },
      { q: "How do I lower my BMI?", a: "Only two levers: lose weight or safely grow taller. Modest calorie deficit + strength training is the standard approach." },
      { q: "Does BMI apply the same way to children?", a: "No — children and teens use age- and sex-specific percentile charts instead of the fixed adult cutoffs, since body composition changes significantly during growth." },
    ],
  },
  "calorie": {
    howItWorks: [
      "Uses Mifflin-St Jeor to estimate BMR (calories at rest), then multiplies by an activity factor to estimate TDEE.",
      "Common targets: subtract 250–500 kcal/day for slow loss; add 200–500 for lean gain.",
      "TDEE is an estimate, not a lab-measured number — actual daily burn varies with sleep, stress, and non-exercise movement, so treat the result as a starting point to adjust from based on real-world results over a few weeks.",
    ],
    example: "30-year-old, 175 cm, 70 kg male, moderate activity: BMR 1,649 kcal, TDEE 2,556 kcal. -500 for loss (2,056); +300 for gain (2,856).",
    faqs: [
      { q: "Which equation is most accurate?", a: "Mifflin-St Jeor is the best simple formula for most adults. Katch-McArdle can be better if you know body-fat %." },
      { q: "How often should I recalculate?", a: "Every 5–10 lb (2–5 kg) weight change or when activity changes. Body adapts, so numbers drift." },
      { q: "Why am I not losing?", a: "Common causes: overestimated activity, underestimated portions, decreased NEAT (fidgeting). Track intake for a week." },
      { q: "What activity level should I select?", a: "Be conservative — most people overestimate their own activity level. If unsure between two options, pick the lower one and adjust after tracking actual results for two weeks." },
    ],
  },
  "bmr": {
    howItWorks: [
      "BMR is calories you'd burn lying in bed all day. Driven by lean body mass, age, and sex.",
      "Mifflin-St Jeor: 10×kg + 6.25×cm − 5×age + (5 male, −161 female).",
      "BMR naturally declines with age, largely because lean muscle mass tends to decrease over time unless actively maintained through resistance training — this is a big part of why calorie needs shift across decades even at a stable weight.",
    ],
    example: "30-year-old, 175 cm, 70 kg male: BMR = 700 + 1093.75 − 150 + 5 = 1,649 kcal/day.",
    faqs: [
      { q: "BMR vs TDEE?", a: "BMR is calories at rest. TDEE adds activity — walking, exercise, digestion — 1.2× to 1.9× BMR." },
      { q: "Can I raise my BMR?", a: "Modestly — muscle is metabolically active, so resistance training helps offset age-related BMR decline." },
      { q: "Why do two people the same weight have different BMR?", a: "Body composition matters more than total weight — someone with more muscle mass burns more calories at rest than someone the same weight with a higher fat percentage." },
    ],
  },
  "body-fat": {
    howItWorks: [
      "US Navy method uses tape-measured circumferences (neck, waist, hip for women) and height in a validated regression.",
      "Less accurate than DEXA but requires only a tape measure — great for tracking progress at home.",
      "Because it's based on circumference rather than direct tissue measurement, this method works best for tracking your own trend over weeks and months rather than comparing your exact number against someone else's.",
    ],
    example: "175 cm male, 40 cm neck, 85 cm waist: estimated body fat ≈ 15.4%.",
    faqs: [
      { q: "How accurate is the Navy method?", a: "Typically within ±3% of DEXA for average bodies; less accurate at extremes." },
      { q: "Healthy body fat range?", a: "Men 10–20% healthy, athletes 6–13%. Women 18–28% healthy, athletes 14–20%. Essential fat 3–5% men, 10–13% women." },
      { q: "Measure over clothes?", a: "Bare skin, tape snug but not compressing. Same time of day (ideally morning) for consistent tracking." },
      { q: "Why did my result change even though my weight didn't?", a: "Body fat percentage and total weight are different measurements — you can gain muscle and lose fat simultaneously, shifting body fat percentage while the scale stays flat." },
    ],
  },
  "ideal-weight": {
    howItWorks: [
      "Devine formula: 50 kg (men) or 45.5 kg (women) plus 2.3 kg per inch over 5 feet (60 in).",
      "Used in clinical medication dosing. Not a definitive personal target — muscular or larger-framed people can healthily weigh more.",
      "Several other formulas exist (Robinson, Miller, Hamwi) and each gives a slightly different number for the same height — the spread between them is a useful reminder that any single 'ideal weight' figure is an approximation, not a precise target.",
    ],
    example: "175 cm male (~68.9 in): 50 + 2.3 × (68.9 − 60) ≈ 70.5 kg (155.3 lb).",
    faqs: [
      { q: "Is Devine the best formula?", a: "Most cited in medical dosing. For a healthy range, BMI 18.5–24.9 for your height gives a wider, more realistic band." },
      { q: "Aim for exactly this weight?", a: "No — reference point, not a target. Frame size, muscle, and composition matter more." },
      { q: "Why do different formulas give different numbers?", a: "Each was derived from a different reference population and methodology decades apart — none is definitively 'correct,' which is exactly why doctors treat these as reference points rather than diagnostic targets." },
    ],
  },
  "macros": {
    howItWorks: [
      "Splits a daily calorie target into grams of protein, carbs, and fat. Protein and carbs = 4 kcal/g, fat = 9 kcal/g.",
      "Common splits: 30/40/30 balanced, 40/20/40 low-carb, 40/35/25 high-protein. Protein 1.6–2.2 g/kg supports muscle maintenance in a deficit.",
      "The specific ratio matters less than hitting your total calorie target consistently and getting enough protein — carb and fat ratios can flex quite a bit based on personal preference and still support the same overall goal.",
    ],
    example: "2,200 kcal balanced (30/40/30) = 165 g protein, 220 g carbs, 73 g fat.",
    faqs: [
      { q: "How much protein do I need?", a: "Sedentary ~0.8 g/kg. Active or in deficit: 1.6–2.2 g/kg. Elderly: higher end to preserve muscle." },
      { q: "Low-carb better for weight loss?", a: "Weight loss depends on calorie deficit, not carb ratio. Low-carb helps some people control appetite, but scale moves on calories." },
      { q: "Hit macros exactly?", a: "±10% is fine. Trends matter more than any single day." },
      { q: "Should I change my split for different goals?", a: "Higher protein generally helps during a calorie deficit to preserve muscle; higher carbs can support performance during intense training blocks. Adjust gradually rather than switching structure abruptly." },
    ],
  },
  "pregnancy-due-date": {
    howItWorks: [
      "Naegele's rule adds 280 days (40 weeks) to the first day of your last menstrual period.",
      "About 4% of babies arrive on the exact predicted date — most within a 2-week window on either side.",
      "This method assumes a standard 28-day cycle with ovulation on day 14 — it's a widely used starting estimate, but an early ultrasound dating scan is what clinicians rely on for a more precise date.",
    ],
    example: "LMP on January 1 → estimated due date around October 8 of the same year (280 days later).",
    faqs: [
      { q: "How accurate is Naegele's rule?", a: "Accurate for regular 28-day cycles. First-trimester ultrasound is more accurate and used to confirm." },
      { q: "What if my cycle is longer than 28 days?", a: "Add extra days. A 32-day cycle usually ovulates on day 18, shifting the due date about 4 days later." },
      { q: "When is a baby 'full term'?", a: "37 to 42 weeks. 39–40 is optimal." },
      { q: "Why did my doctor give me a different due date?", a: "Ultrasound measurements, especially in the first trimester, are generally considered more reliable than calendar-based estimates and often become the date of record once confirmed." },
    ],
  },
  "ovulation": {
    howItWorks: [
      "Ovulation typically occurs 14 days before the next period. Estimates ovulation day and the 5-day fertile window leading up to it.",
      "Sperm lives up to 5 days; the egg ~24 hours. Peak odds are the day before and day of ovulation.",
      "Calendar-based prediction assumes consistent cycle length, so accuracy drops noticeably for anyone with irregular cycles — tracking cycle length over a few months before relying on this estimate improves reliability.",
    ],
    example: "28-day cycle starting Jan 1: ovulation around Jan 15, fertile window Jan 10–15.",
    faqs: [
      { q: "How accurate is calendar-based prediction?", a: "Good for very regular cycles. Otherwise, LH ovulation kits or basal body temperature tracking are much more accurate." },
      { q: "Can I get pregnant outside the fertile window?", a: "Very unlikely but possible — cycle irregularity shifts timing. Use contraception if you're not trying to conceive." },
      { q: "Does stress affect ovulation timing?", a: "Yes — significant physical or emotional stress can delay or occasionally skip ovulation entirely, which is one of several reasons calendar predictions can be off even for typically regular cycles." },
    ],
  },
  "water-intake": {
    howItWorks: [
      "Rough rule: 35 ml per kg of body weight per day, plus ~12 ml per minute of exercise. Total needs include water from food and other drinks.",
      "Hot climate, altitude, breastfeeding, or fever raise needs. Pale-yellow urine is a better indicator than any formula.",
      "Roughly 20% of daily water intake typically comes from food rather than drinks, especially from fruits, vegetables, and soups — this estimate covers total fluid need, not just what you need to drink separately.",
    ],
    example: "70 kg person + 30 min exercise: 70 × 35 + 30 × 12 = 2,810 ml/day (~2.8 L, ~12 cups).",
    faqs: [
      { q: "Is '8 glasses a day' accurate?", a: "Rough baseline for average adults; underestimates for active or heavier people. Body-weight estimates are more personalized." },
      { q: "Does coffee count?", a: "Yes — despite mild diuretic effect, coffee and tea net-hydrate." },
      { q: "Can I drink too much?", a: "Rarely, but extreme overhydration can cause hyponatremia. Usually only at multiple liters per hour." },
      { q: "Do I need more water in hot weather?", a: "Yes — increased sweat losses in heat or at altitude can push needs up significantly beyond the baseline estimate, sometimes by a liter or more depending on exertion and conditions." },
    ],
  },
  "heart-rate-zones": {
    howItWorks: [
      "Max HR ≈ 220 − age (rough but widely used). Training zones are percentages of max, each targeting different adaptations.",
      "Z1–Z2: aerobic base and fat burn. Z3: tempo. Z4: threshold. Z5: VO2max — short intervals only.",
      "Most recreational training time should sit in Zone 2 — it's the least glamorous zone but builds the aerobic foundation that higher-intensity work depends on, which is why endurance coaches often push athletes to slow down, not speed up.",
    ],
    example: "30-year-old: max HR ≈ 190 bpm. Zone 2 (60–70%) = 114–133 bpm — sweet spot for aerobic base.",
    faqs: [
      { q: "Is 220 − age accurate?", a: "Within ~10 bpm for most; individual max can vary ±20. Lab or field max-effort test for precision." },
      { q: "Why train in Zone 2?", a: "Builds mitochondrial density and fat oxidation without recovery cost. Most endurance training happens here." },
      { q: "How often for Z4/Z5?", a: "1–2 sessions/week for non-elite athletes. More adds injury and burnout risk without proportional gains." },
      { q: "Why does my heart rate monitor disagree with this estimate?", a: "Wrist-based monitors and chest straps both have their own margins of error, and individual max heart rate genuinely varies from the population formula — treat the zones as a starting guide, then adjust to how effort actually feels." },
    ],
  },
  "pace": {
    howItWorks: [
      "Pace = time / distance. Convert to km/h by dividing 60 by min/km.",
      "Plan target race pace or check what pace your recent run works out to.",
      "Knowing your pace precisely matters most for race-day pacing strategy — starting even slightly faster than sustainable pace is one of the most common ways runners fade in the second half of a race.",
    ],
    example: "5 km in 25 min = 5:00 min/km, or 12.0 km/h.",
    faqs: [
      { q: "Good pace for a beginner?", a: "6:30–8:00 min/km is normal for easy runs. Focus on distance and consistency before speed." },
      { q: "Convert min/km to min/mile?", a: "Multiply by 1.609. So 5:00 min/km ≈ 8:03 min/mile." },
      { q: "Should my training pace match my race pace?", a: "No — most training runs should be noticeably slower than target race pace, with only a small portion of weekly volume at or near race effort." },
    ],
  },
  "one-rep-max": {
    howItWorks: [
      "Epley formula estimates 1RM from a lighter set: 1RM ≈ Weight × (1 + Reps/30).",
      "Most accurate for 2–10 reps. Above 10, endurance dominates and the estimate drifts high.",
      "Estimated 1RM is what most programming actually uses to set training percentages (like '80% of 1RM for 5 reps') — you rarely need to test a true maximal lift to train effectively.",
    ],
    example: "100 kg × 5 reps: 1RM ≈ 100 × (1 + 5/30) = 116.7 kg.",
    faqs: [
      { q: "Best 1RM formula?", a: "Epley and Brzycki are the most-used, both within a few kg in the 3–8 rep range." },
      { q: "Should I test true 1RM?", a: "Only if experienced with a spotter and fully warmed up. Estimated 1RM is enough for most programming." },
      { q: "Does this work the same for every lift?", a: "It's most reliable for compound barbell lifts like squat, bench, and deadlift — accuracy drops for exercises with more technical variability like Olympic lifts." },
    ],
  },
  "whr": {
    howItWorks: [
      "WHR = waist / hip circumference. Quick indicator of abdominal fat, which correlates with cardio risk better than BMI alone.",
      "Men: <0.90 low, 0.90–0.99 moderate, ≥1.0 high. Women: <0.80 low, 0.80–0.84 moderate, ≥0.85 high (WHO).",
      "Abdominal fat specifically is more metabolically active than fat stored elsewhere, which is the biological reason WHR tends to track cardiovascular risk more closely than total body weight or even BMI alone.",
    ],
    example: "Male, 85 cm waist / 95 cm hips: WHR = 0.89 — low-risk band.",
    faqs: [
      { q: "How do I measure waist correctly?", a: "Narrowest part between ribs and hips (usually at the navel). Stand relaxed, exhale normally, tape snug." },
      { q: "WHR vs BMI?", a: "For cardiovascular risk, WHR (and waist alone) predicts outcomes better. Both together give the fullest picture." },
      { q: "Does WHR change with weight loss?", a: "Yes, though abdominal fat often responds noticeably to sustained weight loss and consistent activity, sometimes shifting more visibly than overall body weight in early stages." },
    ],
  },
  "steps-to-calories": {
    howItWorks: [
      "Rough conversion: calories per step ≈ 0.00057 × body-weight kg. Actual burn varies with pace, incline, and stride.",
      "'10,000 steps' is not medical — it started as a 1960s Japanese pedometer marketing target. Studies show most benefit by ~7,000–8,000.",
      "Steps are a useful proxy for overall daily movement (NEAT), which research increasingly shows contributes meaningfully to total energy expenditure — often more than people expect relative to formal exercise sessions.",
    ],
    example: "10,000 steps × 70 kg ≈ 399 kcal.",
    faqs: [
      { q: "Why do trackers give different numbers?", a: "They use different formulas factoring heart rate, GPS pace, personal profile. Step-based single-input estimates are more approximate." },
      { q: "Is walking as good as running?", a: "Walking builds base fitness and burns real calories, just less per minute. Total energy expenditure matters more than intensity for weight loss." },
      { q: "Does incline change the calorie burn per step?", a: "Yes, meaningfully — walking uphill or on an incline treadmill burns notably more per step than flat ground, since more muscle work is required against gravity." },
    ],
  },
  "sleep-cycle": {
    howItWorks: [
      "Sleep cycles average 90 minutes and include light, deep, and REM stages. Waking at end of a cycle feels more refreshing than mid-cycle.",
      "This tool assumes ~14 min to fall asleep, then adds full 90-min cycles.",
      "REM sleep, associated with dreaming and memory consolidation, becomes proportionally longer in later cycles of the night — which is part of why cutting sleep short tends to disproportionately reduce REM even if total hours look only slightly reduced.",
    ],
    example: "Bedtime 23:00: ideal wakes ≈ 03:44 (3 cycles), 05:14 (4), 06:44 (5), 08:14 (6 = 9h).",
    faqs: [
      { q: "Is 90 min exactly right?", a: "Population average — individuals range 70–110. Experiment 10–20 min on either side of the suggestion." },
      { q: "How much sleep do I need?", a: "Most adults do best on 7–9 hours (5–6 cycles). Consistency of bedtime often matters more than exact duration." },
      { q: "Does an alarm mid-cycle really feel worse?", a: "Many people report grogginess (sleep inertia) when woken from deep sleep stages versus lighter stages near a cycle boundary, which is the reasoning behind timing wake-ups to cycle length." },
    ],
  },
  "celsius-fahrenheit": {
    howItWorks: [
      "°F = °C × 9/5 + 32. °C = (°F − 32) × 5/9.",
      "0 °C is water's freezing point (32 °F); 100 °C is boiling at sea level (212 °F).",
      "The US, along with a handful of other countries, remains one of the few places still using Fahrenheit for everyday weather and cooking, which is why this conversion comes up so often for travel, recipes, and international news.",
    ],
    example: "0 °C converts to 32.00 °F.",
    faqs: [
      { q: "Easy mental conversion?", a: "Double °C and add 30 gives a rough °F (accurate ~±3 in everyday ranges)." },
      { q: "At what temperature are C and F the same?", a: "−40 — this is the only point where the two scales meet." },
      { q: "What's normal body temperature in both scales?", a: "37°C (98.6°F) is the traditional reference, though normal individual body temperature actually varies in a range roughly a degree Fahrenheit either side of that." },
    ],
  },
  "meters-feet": {
    howItWorks: [
      "1 meter = 3.28084 feet. To convert feet to meters, multiply feet by 0.3048.",
      "Useful for height, room dimensions, and altitude conversions.",
      "Aircraft altitude is one notable exception to metric standardization — most of the world reports flight altitude in feet even in countries that use meters for everything else, a holdover from early aviation history.",
    ],
    example: "1 meter = 3.2808 feet.",
    faqs: [
      { q: "How tall am I in feet if I'm 180 cm?", a: "1.80 m × 3.2808 ≈ 5.91 ft, or roughly 5' 11\"." },
      { q: "Where is the meter used?", a: "Every country except the US, Liberia, and Myanmar officially uses meters." },
      { q: "Why isn't 1 meter exactly 3.3 feet?", a: "The meter and foot come from entirely different historical measurement systems that were never designed to align — the conversion factor is simply what results from defining both against the same physical standard." },
    ],
  },
  "feet-inches": {
    howItWorks: [
      "1 foot = 12 inches. Multiply feet by 12 to get inches.",
      "Useful for height and construction measurements in US customary units.",
      "Construction and carpentry in the US still rely heavily on feet-and-inches notation (like 5' 6\") rather than decimal feet, so converting cleanly between the two formats is a common practical need on top of the raw math.",
    ],
    example: "1 foot = 12 inches.",
    faqs: [
      { q: "Feet-and-inches to decimal feet?", a: "Divide the inches part by 12 and add. 5' 6\" = 5 + 6/12 = 5.5 ft." },
      { q: "Why 12 inches to a foot?", a: "Historical — 12 is highly divisible (2, 3, 4, 6), making fractions easy without a calculator." },
      { q: "Is a foot always exactly 12 inches everywhere?", a: "Yes — the international foot and inch have been standardized to this exact relationship since 1959, so there's no regional variation to worry about." },
    ],
  },
  "meters-inches": {
    howItWorks: [
      "1 meter = 39.3701 inches.",
      "Common in metric-to-imperial conversions for parts, materials, and screen sizes.",
      "This conversion shows up often in manufacturing and design work, where a product might be specified in metric by an international supplier but need to be checked against imperial tolerances or existing US-made components.",
    ],
    example: "1 meter = 39.3701 inches.",
    faqs: [
      { q: "How many inches in 2 meters?", a: "About 78.74 inches, or 6 ft 6.74 in." },
      { q: "Meters vs feet for TVs?", a: "TV sizes are always in inches regardless of country — this converter helps if you know the diagonal in metric." },
      { q: "Is this conversion exact or rounded?", a: "39.3701 is a rounded practical value; the exact conversion is 39.37007874... inches per meter, more precision than almost any real-world use case needs." },
    ],
  },
  "kg-lbs": {
    howItWorks: [
      "1 kilogram = 2.20462 pounds. Divide pounds by 2.20462 to get kilograms.",
      "Standard conversion for body weight and shipping.",
      "Airlines, gyms, and medical offices in the US often still use pounds even when everything else in a report is metric, making this one of the most frequently needed unit conversions for anyone moving between countries.",
    ],
    example: "1 kg = 2.2046 lb.",
    faqs: [
      { q: "Convert 70 kg to lb?", a: "70 × 2.20462 ≈ 154.32 lb." },
      { q: "Why is a pound 0.454 kg?", a: "The pound is defined internationally as exactly 0.45359237 kg since 1959." },
      { q: "Quick mental estimate?", a: "Multiply kg by 2.2 for a close approximation — accurate to within about half a pound for typical body-weight ranges." },
    ],
  },
  "miles-km": {
    howItWorks: [
      "1 mile = 1.60934 km. Divide km by 1.60934 to get miles.",
      "Used for road distances and speed limits.",
      "The UK is a notable in-between case — it went metric for most measures decades ago but kept miles for road signage and speed limits, which is a common source of confusion for visiting drivers.",
    ],
    example: "1 mile = 1.6093 km.",
    faqs: [
      { q: "Mental conversion?", a: "Multiply miles by 1.6, or km by 0.62 — accurate to within a few percent for everyday numbers." },
      { q: "Why do the US and UK still use miles?", a: "Historical inertia. UK road signs and speed limits remain in miles despite metric adoption elsewhere." },
      { q: "Which countries still use miles for road distances?", a: "Mainly the US, UK, and a small number of others like Liberia and Myanmar — nearly everywhere else uses kilometers on road signage." },
    ],
  },
  "speed-converter": {
    howItWorks: [
      "Converts between km/h, mph, m/s, and knots. Common factors: 1 mph ≈ 1.609 km/h; 1 m/s = 3.6 km/h; 1 knot ≈ 1.852 km/h.",
      "Knots are standard for aviation and shipping worldwide.",
      "Even countries that use km/h for road speeds typically switch to knots for maritime and aviation contexts, since a knot is tied to the geography of the globe (one nautical mile per hour) in a way that's useful for navigation.",
    ],
    example: "100 km/h ≈ 62.14 mph.",
    faqs: [
      { q: "Why use knots?", a: "Historically tied to a nautical mile (1 minute of latitude), which is more useful than miles for navigation." },
      { q: "Is m/s a standard speed unit?", a: "Yes — it's the SI unit for speed, used in scientific and engineering contexts." },
      { q: "How fast is 100 km/h in mph, roughly?", a: "About 62 mph — a useful benchmark since it's close to many US highway speed limits, making cross-checking speedometers between countries easier." },
    ],
  },
  "area-converter": {
    howItWorks: [
      "Converts between square feet, square meters, acres, hectares, and square miles.",
      "1 acre = 43,560 sq ft = 4,046.86 sq m. 1 hectare = 10,000 sq m ≈ 2.471 acres.",
      "Real estate listings often mix units depending on the country and property type — residential space in square feet or square meters, but land parcels in acres or hectares — so converting between them comes up often when comparing properties internationally.",
    ],
    example: "1,000 sq ft ≈ 92.90 sq m.",
    faqs: [
      { q: "Acres vs hectares?", a: "1 hectare ≈ 2.47 acres. Hectares are metric, common outside the US and UK for land measurement." },
      { q: "How big is 1 acre?", a: "About the size of an American football field without the end zones." },
      { q: "Why is a hectare exactly 10,000 square meters?", a: "It was deliberately defined that way as part of the metric system — a hectare is simply a 100m × 100m square, making it easy to reason about." },
    ],
  },
  "volume-converter": {
    howItWorks: [
      "Converts between liters, gallons (US), fluid ounces, milliliters, cups, and cubic units.",
      "1 US gallon = 3.7854 L. Note UK gallons (Imperial) are larger at 4.546 L.",
      "This US-vs-UK gallon difference is a frequent source of confusion for fuel efficiency comparisons — a car rated in 'miles per gallon' means something different depending on which gallon is being used, roughly a 20% swing.",
    ],
    example: "1 liter ≈ 0.2642 US gallons.",
    faqs: [
      { q: "US vs UK gallons?", a: "US gallon = 3.785 L; UK gallon = 4.546 L. Watch for this in recipes and fuel efficiency." },
      { q: "Cup sizes vary by country?", a: "Yes — US cup = 240 ml, metric cup = 250 ml, UK cup = 284 ml. Recipes usually specify one." },
      { q: "Why does this matter for baking?", a: "Because cup measurements vary by country, following a US recipe with a metric cup (or vice versa) can throw off ratios enough to matter, especially in precise baking — weighing ingredients in grams avoids the issue entirely." },
    ],
  },
  "pressure-converter": {
    howItWorks: [
      "Converts between bar, PSI, atm, Pa, and mmHg. Common: 1 bar ≈ 14.504 PSI; 1 atm = 1.01325 bar ≈ 14.696 PSI.",
      "PSI is common in US tire and hydraulic pressures; bar and atm in industrial contexts.",
      "Weather reports add another common unit to this mix — barometric pressure is often given in inches of mercury (inHg) in the US or hectopascals (hPa) elsewhere, both of which relate back to the same underlying pressure scale.",
    ],
    example: "1 bar ≈ 14.50 PSI.",
    faqs: [
      { q: "Tire pressure — bar or PSI?", a: "Both. US owners' manuals typically show PSI; European show bar. 32 PSI ≈ 2.2 bar." },
      { q: "What's 1 atmosphere?", a: "Standard atmospheric pressure at sea level: 101,325 Pa, 1.01325 bar, or 14.696 PSI." },
      { q: "Why do so many pressure units exist?", a: "Different fields standardized independently — meteorology, engineering, and automotive industries each settled on the unit most convenient for their instruments long before there was pressure to unify them." },
    ],
  },
  "energy-converter": {
    howItWorks: [
      "Converts between joules, calories, kilocalories, watt-hours, BTU, and kilojoules.",
      "1 kcal = 4.184 kJ ≈ 4,184 J. Food 'calories' are actually kilocalories (kcal).",
      "This distinction between calories and kilocalories is one of the more commonly misunderstood units in everyday use — nutrition labels use 'Calories' as shorthand for kilocalories, which can cause confusion when comparing against scientific or engineering energy figures.",
    ],
    example: "1,000 J ≈ 239.01 cal.",
    faqs: [
      { q: "Are food calories the same as science calories?", a: "No — 1 food 'Calorie' (capital C) = 1,000 scientific calories = 1 kilocalorie." },
      { q: "What's a BTU?", a: "British Thermal Unit — energy to raise 1 lb water by 1 °F. Common in HVAC. 1 BTU ≈ 1,055 J." },
      { q: "Why do electricity bills use kWh instead of joules?", a: "A kilowatt-hour is simply a more practically sized unit for household energy use — a joule is tiny by comparison, so kWh avoids working with unwieldy large numbers on a bill." },
    ],
  },
  "timezone-converter": {
    howItWorks: [
      "Converts a time in one timezone to another using IANA timezone data, accounting for daylight saving.",
      "Useful for scheduling calls or knowing what time it is where a colleague or family member lives.",
      "Daylight saving transitions don't happen on the same date everywhere, so the offset between two cities can actually shift by an hour for a week or two each spring and fall depending on when each region springs forward or falls back.",
    ],
    example: "14:30 in America/New_York = 19:30 in Europe/London (during BST — the offset differs when both are on standard or DST).",
    faqs: [
      { q: "Does it handle DST?", a: "Yes — IANA timezone data includes historical and current DST rules per region." },
      { q: "Why does the UK show 'GMT+1' in summer?", a: "British Summer Time (BST) is GMT + 1. GMT itself doesn't shift; the country switches zones seasonally." },
      { q: "Why do some countries not observe daylight saving at all?", a: "Regions near the equator see little seasonal daylight variation, so shifting clocks offers little benefit — many such countries, along with a growing number of others reconsidering the practice, stay on standard time year-round." },
    ],
  },
  "length-converter": {
    howItWorks: [
      "Converts between meters, feet, inches, kilometers, miles, yards, and centimeters. Base conversion factors: 1 m = 3.28084 ft; 1 mi = 1.60934 km.",
      "Covers most everyday length units in a single tool.",
      "Yards specifically remain common in a narrow set of contexts — American football fields, fabric shopping, and some UK road signage — even in countries that otherwise use metric for nearly everything else.",
    ],
    example: "1 meter = 3.28084 feet.",
    faqs: [
      { q: "Nautical mile vs mile?", a: "Nautical mile = 1,852 m (~1.15 statute miles). Used in aviation and shipping." },
      { q: "Furlongs and rods?", a: "Rare historical units: 1 furlong = 660 ft = 220 yd; 1 rod = 16.5 ft. Kept for horse racing distances." },
      { q: "What's the difference between a UK and US mile?", a: "None — the statute mile (1,609.34 m) is standardized identically in both countries; only the nautical mile, used at sea, is a different, longer unit." },
    ],
  },
  "weight-converter": {
    howItWorks: [
      "Converts between kilograms, pounds, ounces, grams, tonnes (metric tons), and short/long tons.",
      "1 kg = 2.20462 lb. 1 tonne = 1,000 kg. 1 short ton (US) = 2,000 lb ≈ 907.18 kg.",
      "Shipping and freight industries are where the short-ton vs long-ton vs metric-tonne distinction matters most in practice — a cargo manifest quoting 'tons' without specifying which kind can create a real discrepancy at scale.",
    ],
    example: "1 kg = 2.204624 lb.",
    faqs: [
      { q: "Ton vs tonne?", a: "Tonne is metric (1,000 kg). US short ton is 2,000 lb; UK long ton is 2,240 lb — always specify." },
      { q: "Weight vs mass?", a: "Physics: mass is intrinsic (kg); weight is force = mass × gravity (N). Everyday use conflates them." },
      { q: "Why does a UK 'stone' still show up for body weight?", a: "The stone (14 lb) remains a common informal unit for personal body weight in the UK and Ireland specifically, even though the country uses kilograms for most other measurements." },
    ],
  },
  "temperature-converter": {
    howItWorks: [
      "Converts between Celsius, Fahrenheit, and Kelvin.",
      "K = °C + 273.15. °F = °C × 9/5 + 32. Absolute zero = 0 K = −273.15 °C = −459.67 °F.",
      "Kelvin has no negative numbers by design, since it's anchored to absolute zero — the coldest physically possible temperature — rather than an arbitrary reference point like water's freezing point.",
    ],
    example: "25 °C = 77.00 °F.",
    faqs: [
      { q: "Why Kelvin?", a: "SI absolute scale — no negative values, starts at absolute zero. Standard in scientific and engineering work." },
      { q: "Rankine scale?", a: "Fahrenheit's absolute version, rare outside US engineering. 0 R = absolute zero." },
      { q: "Is a 'degree' Kelvin the same size as a degree Celsius?", a: "Yes — a one-degree change is identical in size on both scales; Kelvin just shifts the starting point to absolute zero instead of water's freezing point." },
    ],
  },
  "data-converter": {
    howItWorks: [
      "Converts between bytes, kilobytes, megabytes, gigabytes, and terabytes.",
      "Binary (1 KB = 1,024 B) vs decimal (1 kB = 1,000 B) — the calculator uses binary (1024).",
      "This binary-vs-decimal split traces back to computer memory being naturally organized in powers of two, while storage manufacturers market drives using the more familiar decimal system — the gap between the two grows larger the bigger the number, which is why it's most noticeable on large drives.",
    ],
    example: "1 GB = 1,024.00 MB (binary).",
    faqs: [
      { q: "Why is my hard drive smaller than advertised?", a: "Manufacturers use decimal GB (10^9). Operating systems often report in binary (2^30 = 1.074 × 10^9), so a '1 TB' drive shows as ~931 GiB." },
      { q: "Bits vs bytes?", a: "1 byte = 8 bits. Networks quote in bits/sec (Mbps); files usually in bytes (MB)." },
      { q: "What's the difference between GB and GiB?", a: "GiB (gibibyte) explicitly means the binary 1,024-based unit, while GB technically means the decimal 1,000-based one — the terms exist specifically to remove the ambiguity that causes the 'missing storage' confusion." },
    ],
  },
  "angle-converter": {
    howItWorks: [
      "Converts degrees ↔ radians. π radians = 180 degrees.",
      "Radians are natural units for calculus and trigonometry; degrees dominate everyday and engineering use.",
      "Most programming languages' built-in math functions (sin, cos, tan) expect radians, not degrees, which is a common source of bugs for anyone coding trigonometry without converting first.",
    ],
    example: "180° = π radians ≈ 3.141593 rad.",
    faqs: [
      { q: "When are radians used?", a: "Calculus, physics, and any equations involving derivatives of trig functions — the math is cleaner in radians." },
      { q: "Gradians?", a: "A less-common unit where 400 gradians = 360°. Used in surveying in some countries." },
      { q: "Why is a full circle 360 degrees?", a: "It traces back to ancient Babylonian base-60 mathematics and astronomy — 360 divides evenly by many numbers, which made it practical for calculations long before calculators existed." },
    ],
  },
  "fuel-converter": {
    howItWorks: [
      "Converts fuel efficiency between MPG (US or UK) and L/100km. They're inversely related.",
      "Formula: L/100km = 235.215 / MPG (US) or 282.481 / MPG (UK).",
      "Because MPG and L/100km move in opposite directions (higher MPG is better, lower L/100km is better), comparing efficiency improvements across the two systems isn't intuitive without converting to a common unit first.",
    ],
    example: "30 MPG (US) ≈ 7.84 L/100km.",
    faqs: [
      { q: "Why does the UK MPG differ?", a: "UK gallon (4.546 L) is larger than US (3.785 L), so UK MPG numbers are always higher for the same real efficiency." },
      { q: "Which format is easier to compare?", a: "L/100km scales linearly with fuel use — halving it halves fuel cost. MPG is inverted, so improvements are less intuitive." },
      { q: "Why do electric vehicles use a different efficiency unit?", a: "EVs typically report efficiency in miles/kWh or kWh/100km instead of MPG, since they consume electricity rather than liquid fuel — the two aren't directly comparable without a conversion factor." },
    ],
  },
  "age": {
    howItWorks: [
      "Calculates age in years, months, and days from a date of birth to today.",
      "Accounts for leap years so results match how ages are reported officially.",
      "The month-and-day breakdown is useful beyond curiosity — it's the same logic used for things like eligibility cutoffs, insurance age-banding, and legal age thresholds that sometimes hinge on the exact day, not just the year.",
    ],
    example: "Pick a birthdate; the tool returns years, months, and days since that date.",
    faqs: [
      { q: "Does it account for time zones?", a: "Uses your local browser date, so results reflect your current calendar day." },
      { q: "How is age in months calculated?", a: "Full months elapsed since the previous birthday; the remainder becomes days." },
      { q: "Why might my age in days differ from a quick 365 × years estimate?", a: "Leap years add roughly one extra day every four years, so a precise day count runs slightly ahead of a simple 365-per-year estimate the older you get." },
    ],
  },
  "percentage": {
    howItWorks: [
      "Solve common percentage questions: what is X% of Y, X is what % of Y, and X is Y% of what?",
      "Formula for 'X% of Y' = X ÷ 100 × Y.",
      "These three question types cover almost every real-world percentage problem — tips, discounts, grade calculations, growth rates — so recognizing which of the three you're actually asking is usually the hardest part, not the math itself.",
    ],
    example: "20% of 200 = 40.",
    faqs: [
      { q: "How do I calculate percent change?", a: "((New − Old) / Old) × 100 — use the dedicated Percentage Change tool." },
      { q: "Percentage points vs percent change?", a: "Percentage points is the raw subtraction (5% → 8% is 3 pp); percent change is the relative move ((8−5)/5 = 60%)." },
      { q: "Why do percentages sometimes add up to more than 100%?", a: "This usually happens with overlapping categories (someone counted in two groups) or rounding across many small percentages — worth double-checking the source data when it happens." },
    ],
  },
  "gpa": {
    howItWorks: [
      "Weighted average of grade points by credit hours. Enter each course as 'grade,credits' — one per line — and the tool converts grades to standard 4.0-scale points.",
      "A+ = 4.0, A = 4.0, A− = 3.7, B+ = 3.3, B = 3.0, B− = 2.7, and so on.",
      "Because GPA is a credit-weighted average, a 4-credit A pulls your overall GPA up more than a 1-credit A does — this is why dropping or adding a course can shift your GPA by very different amounts depending on its credit weight.",
    ],
    example: "For A,3 + B+,4 + A−,3 + B,3: GPA = 3.485 on 13 total credits.",
    faqs: [
      { q: "Does my school use +/− grades?", a: "US colleges are split; K-12 rarely uses them. Adjust rows to match your school's system." },
      { q: "How is a weighted GPA different?", a: "Weighted GPAs give bonus points for honors/AP courses. This tool computes unweighted 4.0 GPA." },
      { q: "How do I convert my GPA to a percentage?", a: "Rough conversion: US 4.0 ≈ 90–100%. Precise mapping depends on the school." },
      { q: "Does a failing grade still count toward my GPA?", a: "Yes, typically as 0.0 points for that course's credits — which is why a single F can drag down an otherwise strong GPA more than people expect, especially in a light course load." },
    ],
  },
  "date-diff": {
    howItWorks: [
      "Absolute days between two dates. Handy for age, project timelines, and countdown planning.",
      "Uses calendar days including start and end, or excluding — check your use case.",
      "This kind of raw day-count is the building block behind more complex date math — project deadlines, contract terms, and interest-accrual periods are all ultimately counted this same way before any business-day or holiday adjustments are layered on top.",
    ],
    example: "Pick two dates; tool returns the absolute number of days between them.",
    faqs: [
      { q: "Does it count both endpoints?", a: "Returns the difference — so Jan 1 to Jan 2 = 1 day." },
      { q: "How many days from birth to a given age?", a: "Multiply years by 365.25 to include leap-year averaging." },
      { q: "Does it handle dates across different years correctly?", a: "Yes — the calculation works on full calendar dates, so spans crossing year boundaries or multiple leap years are handled the same as any other date range." },
    ],
  },
  "days-until": {
    howItWorks: [
      "Counts calendar days from today until a future date.",
      "Useful for deadlines, exams, weddings, holidays, and countdowns.",
      "Because this counts every calendar day rather than just weekdays, it tends to overstate 'working time' remaining for deadline planning — worth mentally subtracting weekends if the countdown is for a work-related task.",
    ],
    example: "Pick a future date; result shows the number of days from today.",
    faqs: [
      { q: "Does it include weekends?", a: "Yes — counts every calendar day. For working days, use a workday calculator instead." },
      { q: "Can I count backward?", a: "Enter a past date and use the Date Difference tool for absolute value." },
      { q: "Does the count update automatically each day?", a: "Yes — since it's calculated against today's date each time you load the page, the result naturally counts down as the target date approaches." },
    ],
  },
  "random-number": {
    howItWorks: [
      "Generates uniformly-distributed random integers in the range [min, max].",
      "Runs in your browser using Math.random().",
      "Uniform distribution means every number in the range has an equal chance of being picked — useful for raffles, sampling, and games where fairness matters, as opposed to a weighted or biased selection.",
    ],
    example: "min=1, max=100, count=1: returns a single integer 1–100 (e.g. 18).",
    faqs: [
      { q: "Is this cryptographically secure?", a: "No — Math.random() is fine for games, draws, and sampling. Use crypto.getRandomValues() for security-critical needs." },
      { q: "Can I generate multiple numbers?", a: "Yes — set 'count' higher than 1 to get a list." },
      { q: "Can the same number repeat if I generate multiple at once?", a: "Yes by default, since each draw is independent — if you need unique numbers with no repeats, generate more than needed and remove duplicates, or ask for a range comfortably larger than your count." },
    ],
  },
  "password": {
    howItWorks: [
      "Generates strong passwords with a configurable length and character set.",
      "Runs entirely in-browser — nothing is transmitted or stored.",
      "A longer password with a smaller character set is often still stronger than a short one with every character type enabled — length is generally the single biggest factor in how hard a password is to crack.",
    ],
    example: "Set length and toggles for uppercase, lowercase, numbers, and symbols to produce a random secure password.",
    faqs: [
      { q: "Is this safe to use?", a: "Yes — generation happens locally with your browser's crypto random source. Nothing leaves your device." },
      { q: "What's a good password length?", a: "16+ characters with mixed types is a strong baseline. Length matters more than complexity for entropy." },
      { q: "Should I use a password manager?", a: "Yes — even the strongest passwords are only useful if unique per account. A manager stores them all encrypted." },
      { q: "Why avoid reusing the same strong password everywhere?", a: "If one site suffers a data breach, a reused password exposes every other account using it — unique passwords per site contain the damage to just the one breached service." },
    ],
  },
  "countdown-timer": {
    howItWorks: [
      "A countdown to any date and time you set. Updates live in the browser.",
      "Handy for deadlines, launches, birthdays, or celebrations.",
      "The countdown recalculates from your device's clock each time the page updates, so it stays accurate even if you leave the tab open for hours or come back to it the next day.",
    ],
    example: "Pick a target date and time; the timer shows days, hours, minutes, and seconds remaining.",
    faqs: [
      { q: "Does it work offline?", a: "Once the page has loaded, yes — everything runs in your browser." },
      { q: "Can I share the countdown?", a: "Right now the target is only set locally. Bookmark the page after entering your date to return to it." },
      { q: "What happens when the countdown reaches zero?", a: "The display updates to show the target time has passed rather than continuing to count into negative numbers, so it's clear at a glance the event has arrived." },
    ],
  },
  "stopwatch": {
    howItWorks: [
      "Millisecond-precision stopwatch running in your browser with start, pause, lap, and reset.",
      "No login, no ads-in-the-way — just click and time.",
      "Lap timing works by recording a snapshot of the running total at each click, rather than restarting the clock, so your cumulative time keeps running accurately across every lap.",
    ],
    example: "Click Start; the display counts up. Lap records split times; Reset zeroes it out.",
    faqs: [
      { q: "How accurate is it?", a: "Uses performance.now() for sub-millisecond precision. Real accuracy is limited by browser scheduling — a few ms on a busy page is normal." },
      { q: "Does it keep running if I switch tabs?", a: "Yes — the clock keeps ticking. Browsers can throttle background tabs, but final elapsed time is calculated correctly." },
      { q: "Is this precise enough for competitive timing?", a: "For casual and practice use, yes — but for anything requiring certified precision (official race timing, for example), dedicated hardware timing systems remain the standard." },
    ],
  },
  "qr-code": {
    howItWorks: [
      "Generates a QR code from any text, URL, or contact info. Rendered in-browser as SVG.",
      "Great for sharing links, WiFi credentials, or app downloads.",
      "QR codes use built-in error correction, meaning a portion of the code can be damaged, obscured by a logo, or printed poorly and still scan correctly — that redundancy is part of the original design specification, not a lucky side effect.",
    ],
    example: "Enter a URL and the tool renders a scannable QR code you can screenshot or download.",
    faqs: [
      { q: "What's the max QR code capacity?", a: "Depends on error correction — up to ~4,296 alphanumeric characters. Long text produces dense codes that are harder to scan." },
      { q: "Can QR codes contain viruses?", a: "The code itself just encodes text — but the URL it points to can be malicious. Preview the URL before opening." },
      { q: "Do QR codes expire?", a: "The code itself never expires since it's just encoded text, but if it points to a URL, that link can break or be taken down independently of the code." },
    ],
  },
  "word-counter": {
    howItWorks: [
      "Counts characters (with and without spaces), words, sentences, and estimates reading time at ~200 wpm.",
      "Runs entirely in your browser.",
      "This is commonly used against a hard limit — a tweet, an essay word count, or an SEO meta description — so having live counts update as you type is more useful than a one-time check after finishing.",
    ],
    example: "Empty text returns zeros. Paste any content to get instant counts.",
    faqs: [
      { q: "What counts as a 'word'?", a: "Runs of non-whitespace separated by spaces or punctuation. Numbers and hyphenated compounds count as one word." },
      { q: "How is reading time calculated?", a: "Assumes ~200 words per minute — average adult silent reading pace. Actual speed varies with content difficulty." },
      { q: "Does pasting formatted text (like from Word) affect the count?", a: "The tool counts the visible text content, not formatting markup, so pasting from a word processor shouldn't inflate the count — though stray extra spaces from formatting can occasionally add a word or two." },
    ],
  },
  "roman-numeral": {
    howItWorks: [
      "Converts between Roman numerals and Arabic numbers.",
      "Roman numerals use I, V, X, L, C, D, M with subtractive notation (IV = 4, IX = 9).",
      "The subtractive notation (writing a smaller numeral before a larger one to mean subtraction) wasn't standard in ancient Rome — it became the convention centuries later, which is why some historical inscriptions show 4 as IIII rather than IV.",
    ],
    example: "1994 → MCMXCIV. Break it down: M (1000) + CM (900) + XC (90) + IV (4).",
    faqs: [
      { q: "What's the largest Roman numeral?", a: "Classical Roman numerals only go up to 3,999 (MMMCMXCIX). Larger values use vinculum notation." },
      { q: "Why do we still use Roman numerals?", a: "Book chapters, movie sequels, clock faces, and monarch numbering." },
      { q: "Is there a Roman numeral for zero?", a: "No — the Roman numeral system has no symbol for zero, since the concept of zero as a number wasn't part of the system when it was developed." },
    ],
  },
  "weighted-grade": {
    howItWorks: [
      "Weighted average where each grade contributes proportionally to its weight percentage. Total weights should add to 100.",
      "Enter each item as 'grade,weight' — one per line.",
      "This differs from a simple average in an important way — a heavily-weighted final exam can outweigh several smaller assignments combined, so knowing your weights matters as much as knowing your scores when deciding where to focus study time.",
    ],
    example: "For 85,30 + 92,30 + 78,40: weighted average = (85×30 + 92×30 + 78×40) / 100 = 84.30%.",
    faqs: [
      { q: "Do weights have to add to 100?", a: "They should for a percent-weighted average. The tool normalizes if they don't, but check your grading policy." },
      { q: "Can I include a not-yet-taken exam?", a: "Enter your target grade for the missing item to see the overall result if you hit that target." },
      { q: "How do I find the minimum score I need on a final?", a: "Plug in your target overall grade and solve backward, or try a few different scores for the missing item until the weighted result matches your goal." },
    ],
  },
  "timecard": {
    howItWorks: [
      "Calculates hours worked between clock-in and clock-out (crossing midnight if needed), subtracts unpaid break minutes, and multiplies by hourly rate for total pay.",
      "Useful for freelancers, contractors, or checking your paycheck against your timesheet.",
      "Unpaid break time is subtracted before the pay calculation, not after — this matters for shifts with multiple short breaks, since even a few minutes here and there can add up to a meaningful difference in a week's total pay.",
    ],
    example: "09:00–17:30 with 30 min break at $20/hr: 8.00 hours worked, $160.00 pay.",
    faqs: [
      { q: "Does it handle overnight shifts?", a: "Yes — enter a clock-out earlier than clock-in and it counts the crossing-midnight hours." },
      { q: "What about overtime multipliers?", a: "This uses a flat rate. For 1.5× overtime, use the Employee Overtime tool." },
      { q: "Should paid breaks be entered as break minutes?", a: "No — only enter unpaid break time here. Paid breaks are already included in your clock-in to clock-out span and shouldn't be subtracted." },
    ],
  },
  "meeting-planner": {
    howItWorks: [
      "Given a time in a base timezone and a list of other timezones, shows the local time in each — including day-of-week for cross-date meetings.",
      "Uses IANA timezone data with correct DST handling.",
      "Cross-date meetings are the trickiest part to plan manually — a 9am call on the US East Coast can already be the next calendar day in parts of Asia, which is easy to miscalculate by hand but handled automatically here.",
    ],
    example: "10:00 in New York converts automatically to each timezone you add — for example, roughly 15:00 in London, 23:00 in Tokyo, and 00:00 the next day in Sydney, depending on current DST status in each region.",
    faqs: [
      { q: "Does it show day-of-week?", a: "Yes — cross-date meetings (e.g. late US → early Asia) are clearly labeled." },
      { q: "Can I add many timezones?", a: "Enter them comma-separated as IANA names — no strict limit." },
      { q: "Why does the same meeting time shift by an hour some weeks?", a: "Because different countries switch to and from daylight saving on different dates, the offset between two timezones can temporarily change for a few weeks each spring and fall." },
    ],
  },
  "fraction": {
    howItWorks: [
      "Add, subtract, multiply, or divide two fractions and get the result in reduced form plus decimal.",
      "Uses GCD reduction to always return the simplest form.",
      "Addition and subtraction require a common denominator first, while multiplication and division work directly on numerators and denominators — this is why fraction arithmetic feels less uniform than working with plain decimals.",
    ],
    example: "1/2 + 1/3 = 5/6 (≈ 0.833333).",
    faqs: [
      { q: "What if the result is negative?", a: "The sign stays with the numerator (e.g. −1/2). Fully reduced." },
      { q: "Mixed numbers?", a: "Convert to improper first — 1 1/2 = 3/2 — then enter as 3/2." },
      { q: "Why reduce to simplest form instead of leaving it as-is?", a: "An unreduced fraction like 4/8 is mathematically identical to 1/2, but simplest form is the conventional way to report an answer and makes it easier to compare against other fractions at a glance." },
    ],
  },
  "ratio": {
    howItWorks: [
      "Solves proportions of the form A:B = C:?. Cross-multiply: ? = (B × C) / A.",
      "Common in scaling recipes, mixing ratios, and comparing proportions.",
      "Ratios and fractions describe the same underlying relationship in different notation, which is why any ratio problem can also be solved by setting up an equivalent fraction equation — pick whichever form is more intuitive for the situation.",
    ],
    example: "3:4 = 9:?  →  ? = 4 × 9 / 3 = 12.",
    faqs: [
      { q: "Ratio vs fraction?", a: "A ratio compares two quantities (3:4); a fraction expresses one over another (3/4). Same math." },
      { q: "Scaling a recipe?", a: "Yes — for double batch of any ingredient with a 3:4 ratio, keep both sides scaled proportionally." },
      { q: "How do I simplify a ratio to its lowest terms?", a: "Divide both sides by their greatest common divisor, exactly like reducing a fraction — 8:12 simplifies to 2:3 by dividing both by 4." },
    ],
  },
  "square-root": {
    howItWorks: [
      "Returns the principal (non-negative) square root of a non-negative real number.",
      "Uses IEEE-754 double precision, accurate to about 15 significant digits.",
      "Every positive number technically has two square roots, one positive and one negative, but 'the' square root by convention refers to the positive (principal) one — which is what this tool returns.",
    ],
    example: "√2 ≈ 1.41421356.",
    faqs: [
      { q: "What about negative numbers?", a: "Square roots of negatives are complex numbers (imaginary unit i). This tool only handles reals." },
      { q: "How to estimate √ without a calculator?", a: "Find the nearest perfect squares. √50 is between √49 (7) and √64 (8), closer to 7." },
      { q: "Is √2 a repeating decimal?", a: "No — it's irrational, meaning its decimal expansion goes on forever without repeating. This calculator shows it rounded to double-precision accuracy, not the exact infinite value." },
    ],
  },
  "percentage-change": {
    howItWorks: [
      "Percent change = (New − Old) / Old × 100. Negative means a decrease, positive an increase.",
      "Distinct from percentage-point change and from absolute difference.",
      "A common mistake is applying percent change symmetrically — a 50% increase followed by a 50% decrease does not return you to the original number, since each percentage is calculated against a different base value.",
    ],
    example: "Old 100, New 125: (125 − 100) / 100 × 100 = 25.0000%.",
    faqs: [
      { q: "Percent change vs percentage points?", a: "Percent change is relative (25% here); percentage points is subtraction of percentages (5% to 8% = 3 pp)." },
      { q: "Can percent change exceed 100%?", a: "Yes — a doubling is +100%; tripling is +200%. Decreases are capped at −100%." },
      { q: "Why doesn't a 50% gain then 50% loss break even?", a: "The gain is calculated on the smaller starting number, but the loss is calculated on the larger post-gain number — so the dollar loss ends up bigger than the dollar gain, leaving you below where you started." },
    ],
  },
  "scientific": {
    howItWorks: [
      "A full expression-based calculator supporting +, −, ×, ÷, exponents, roots, log/ln, trig, factorial, and constants.",
      "Runs entirely in the browser — no data leaves your device.",
      "Expression-based input means you can type a full calculation in one line rather than pressing operator buttons step by step, which is faster for anyone comfortable with standard math notation.",
    ],
    example: "Type an expression like sin(30) + sqrt(9) and press = for the result.",
    faqs: [
      { q: "Does trig use degrees or radians?", a: "Toggle between degrees (default for everyday use) and radians (for calculus contexts)." },
      { q: "Can it store variables?", a: "Basic Ans-style recall of the last result. For more complex work, use a spreadsheet or programming REPL." },
      { q: "Does it respect standard order of operations?", a: "Yes — parentheses, exponents, multiplication/division, then addition/subtraction are evaluated in the conventional order, so expressions can be typed naturally without extra grouping." },
    ],
  },
  "average": {
    howItWorks: [
      "Arithmetic mean: sum of values divided by count.",
      "Best when data is symmetric and roughly bell-shaped. Skewed distributions are better summarized by median.",
      "A single extreme outlier can pull the mean noticeably in its direction, which is why 'average income' headlines often look higher than what most people actually earn — the median is usually the more representative figure for skewed data like income or home prices.",
    ],
    example: "Numbers: 10, 20, 30, 40. Mean = 100 / 4 = 25.000000.",
    faqs: [
      { q: "Mean vs median?", a: "Mean is affected by outliers; median (middle value) is robust. For income data, median is preferred." },
      { q: "Weighted mean?", a: "Use the Weighted Grade tool for values with unequal importance." },
      { q: "When should I use the mean instead of the median?", a: "The mean works well for roughly symmetric data without extreme outliers — test scores or measurement data, for example — where every value should count equally toward the summary." },
    ],
  },
  "median-mode": {
    howItWorks: [
      "Median is the middle value (average of two middle values for even count). Mode is the most frequent value.",
      "Both are more robust than the mean when data has outliers or clusters.",
      "Unlike the mean, the median isn't affected at all by how extreme an outlier is — a data set's median stays the same whether the highest value is 100 or 100,000, as long as it remains the highest value.",
    ],
    example: "1,2,2,3,4: sorted median = 2, mode = 2 (occurs twice).",
    faqs: [
      { q: "Can there be multiple modes?", a: "Yes — bimodal or multimodal distributions. The tool returns all modes with the same top frequency." },
      { q: "What if all values are unique?", a: "Every value is technically a mode; conventionally we say 'no mode'." },
      { q: "Why is median preferred for reporting home prices?", a: "A handful of very expensive homes can drag the average sale price up substantially, while the median reflects the true 'middle of the market' price a typical buyer would encounter." },
    ],
  },
  "std-dev": {
    howItWorks: [
      "Standard deviation measures spread around the mean. Sample (s) divides by n−1; population (σ) divides by n.",
      "Larger σ = more spread. About 68% of a normal distribution lies within 1σ of the mean.",
      "The n−1 adjustment for sample standard deviation (Bessel's correction) exists because a sample tends to slightly underestimate the true population spread — dividing by a smaller number corrects for that bias.",
    ],
    example: "5,7,3,7,10,2: mean 5.67, σ (pop) 2.69, s (sample) 2.94.",
    faqs: [
      { q: "Sample vs population — which do I want?", a: "Sample (s) if your data is a sample of a larger population — usually the answer. Population (σ) only if you have the entire population." },
      { q: "Variance vs std dev?", a: "Variance = σ². Std dev is variance's square root, which has the same units as the data — usually more interpretable." },
      { q: "What does a standard deviation of 0 mean?", a: "Every value in the data set is identical — there's no spread at all around the mean." },
    ],
  },
  "quadratic": {
    howItWorks: [
      "Solves ax² + bx + c = 0 using the quadratic formula: x = (−b ± √(b² − 4ac)) / (2a).",
      "Discriminant b² − 4ac reveals the nature of the roots: positive → two real roots, zero → one repeated real root, negative → two complex.",
      "Graphically, the roots are where the parabola y = ax² + bx + c crosses the x-axis — a negative discriminant means the parabola never touches the x-axis at all, which is why the roots become complex rather than real.",
    ],
    example: "1x² − 3x + 2 = 0: x₁ = 2, x₂ = 1.",
    faqs: [
      { q: "What if the discriminant is negative?", a: "Roots are complex conjugates. The tool reports them as a ± bi." },
      { q: "Can a be zero?", a: "Then it's not quadratic — it's linear (bx + c = 0). Solve as x = −c/b." },
      { q: "Why does the formula have a ± sign?", a: "Because a quadratic can have up to two distinct solutions — the plus and minus versions of the square root term each give one of the two roots." },
    ],
  },
  "prime": {
    howItWorks: [
      "A prime number is a natural number > 1 with no divisors other than 1 and itself. Test by trying divisors up to √n.",
      "The first primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.",
      "Only needing to check divisors up to √n rather than all the way to n itself is what makes this test fast — if n had a factor larger than √n, it would necessarily have a matching factor smaller than √n too, so checking beyond that point is redundant.",
    ],
    example: "97 is prime — no divisor from 2 to 9 divides it evenly (√97 ≈ 9.85).",
    faqs: [
      { q: "Is 1 prime?", a: "No, by modern convention. Primes are defined as > 1." },
      { q: "Largest known prime?", a: "Mersenne prime 2^82,589,933 − 1, discovered 2018 — over 24 million digits." },
      { q: "Why do primes matter for encryption?", a: "Modern encryption relies on the fact that multiplying two large primes together is easy, but factoring the huge result back into its original primes is computationally very hard — that asymmetry is the security foundation of systems like RSA." },
    ],
  },
  "lcm-gcd": {
    howItWorks: [
      "GCD (greatest common divisor) is the largest integer that divides both. LCM (least common multiple) is the smallest positive integer both divide.",
      "Related: LCM(a,b) × GCD(a,b) = |a × b|.",
      "The Euclidean algorithm computes GCD efficiently by repeated division rather than checking every possible divisor, making it fast even for very large numbers — this is the same core algorithm used internally by most calculators and programming languages.",
    ],
    example: "GCD(12, 18) = 6. LCM(12, 18) = 36.",
    faqs: [
      { q: "Where is GCD used?", a: "Reducing fractions to simplest form, cryptography (Euclidean algorithm), and scheduling repeating events." },
      { q: "Where is LCM used?", a: "Adding fractions with unlike denominators; finding when two cyclical events align." },
      { q: "What's the GCD of two prime numbers?", a: "Always 1, since two distinct primes share no common factors other than 1 — this special case is called being 'coprime.'" },
    ],
  },
  "exponent": {
    howItWorks: [
      "Computes a^n for real base and exponent.",
      "Negative exponents are reciprocals (a^-n = 1/a^n); fractional exponents are roots (a^(1/n) = ⁿ√a).",
      "Exponents grow numbers far faster than multiplication once the base is above 1, which is the core reason compound interest, population growth, and viral spread all eventually outpace naive linear predictions.",
    ],
    example: "2^10 = 1024.",
    faqs: [
      { q: "Zero to the zero?", a: "Conventionally 1 in combinatorics and computing (and this tool). Sometimes left undefined in pure math." },
      { q: "Very large exponents?", a: "Result may overflow to Infinity (>~1.8 × 10^308 in double precision)." },
      { q: "What does a fractional exponent like 8^(2/3) mean?", a: "Split it into a root and a power: take the cube root of 8 (which is 2), then square that result, giving 4." },
    ],
  },
  "logarithm": {
    howItWorks: [
      "log_b(x) is the exponent y such that b^y = x. Any-base log = ln(x) / ln(b).",
      "Common bases: 10 (common log), e ≈ 2.718 (natural log).",
      "Logarithms are the inverse operation of exponentiation, the same way subtraction inverts addition — which is exactly why they're the standard tool for solving equations where the unknown sits in the exponent.",
    ],
    example: "log₁₀(1000) = 3, because 10³ = 1000.",
    faqs: [
      { q: "When is natural log used?", a: "Calculus, growth/decay problems, and continuous compounding — the base e makes derivatives clean." },
      { q: "Log of a negative?", a: "Undefined in real numbers; complex in general. This tool expects positive arguments." },
      { q: "Why is base-2 log used in computing?", a: "Because computers work in binary, log base 2 directly answers questions like 'how many bits are needed to represent this number,' making it the natural choice in that field." },
    ],
  },
  "matrix": {
    howItWorks: [
      "Adds or multiplies two 2×2 matrices. Enter each row separated by ';', values by ','.",
      "Add: element-wise. Multiply: row × column dot products.",
      "Matrices are the standard way to represent linear transformations — rotations, scaling, and more — which is why matrix multiplication shows up constantly in computer graphics, 3D game engines, and machine learning.",
    ],
    example: "[1,2;3,4] × [5,6;7,8] = [19,22;43,50].",
    faqs: [
      { q: "Matrix multiplication order matters?", a: "Yes — A × B ≠ B × A in general. Matrix multiplication is non-commutative." },
      { q: "Larger matrices?", a: "This tool handles 2×2 only. For larger, use a spreadsheet or Python/numpy." },
      { q: "Can every 2×2 matrix be multiplied by another?", a: "Only if the dimensions are compatible — for two 2×2 matrices this is always true, but in general the number of columns in the first matrix must match the number of rows in the second." },
    ],
  },
  "base-converter": {
    howItWorks: [
      "Converts a number between arbitrary bases (2–36). Common: binary (2), octal (8), decimal (10), hex (16).",
      "Digits beyond 9 use letters A–Z, standard convention.",
      "Binary and hexadecimal are the two bases that matter most in computing — binary because it maps directly to how hardware stores bits, and hex because it's a compact, human-readable shorthand for binary, with each hex digit representing exactly four bits.",
    ],
    example: "255 in base 10 = FF in base 16.",
    faqs: [
      { q: "Why hex for colors?", a: "Two hex digits map to 0–255 exactly, one byte each for R, G, B — compact and unambiguous." },
      { q: "What's base 36?", a: "Uses 0–9 and A–Z, sometimes used to compress numeric IDs into shorter strings." },
      { q: "Why is binary base 2 fundamental to computers?", a: "Digital circuits are built from switches with two states (on/off), which maps naturally onto binary's two digits — every other base a computer displays to you is ultimately converted from binary under the hood." },
    ],
  },
  "cups-to-grams": {
    howItWorks: [
      "Converts US cups to grams for common baking ingredients — flour, sugar, butter, etc. Weight depends on ingredient density, so 1 cup of flour ≠ 1 cup of sugar.",
      "For accuracy, weigh ingredients on a kitchen scale.",
      "Professional bakers weigh nearly everything rather than measuring by volume specifically because of this density problem — a scale removes the guesswork of how tightly an ingredient was packed into the cup.",
    ],
    example: "1 cup of flour ≈ 125 g. Other ingredients vary — pick from the dropdown.",
    faqs: [
      { q: "Why do the same 'cup' weights differ online?", a: "Density of packed vs sifted, and different flour brands vary. Weighing is always more consistent than measuring by volume." },
      { q: "US cups vs metric cups?", a: "US = 240 ml, metric = 250 ml, UK = 284 ml. This tool uses US cups." },
      { q: "Does it matter if I scoop or spoon flour into the cup?", a: "Yes, noticeably — scooping directly from the bag packs the flour more densely than spooning it in loosely, which can add up to 20-25% more flour by weight for the same cup measurement." },
    ],
  },
  "recipe-scaler": {
    howItWorks: [
      "Scales any ingredient amount by the ratio of desired to original servings.",
      "Note: cooking times don't scale linearly — a double batch takes longer than 2×.",
      "Pan size is another thing that doesn't scale simply — doubling a recipe often means the batter or dough no longer fits standard bakeware, so check pan capacity before assuming a straight multiplication works end to end.",
    ],
    example: "Recipe for 4 servings, scale to 6, ingredient 200 g: 200 × (6/4) = 300.00.",
    faqs: [
      { q: "Do I scale seasoning proportionally?", a: "Start with a smaller ratio (~75%) for salt, spices, and hot elements. Adjust to taste." },
      { q: "Does baking scale up cleanly?", a: "Trickier than cooking — chemistry-heavy recipes (breads, cakes) can misbehave. Best to run the original recipe multiple times." },
      { q: "What about leavening agents like baking soda?", a: "These often don't scale linearly either — doubling a recipe rarely means doubling the baking soda or powder exactly, since too much can affect texture and flavor." },
    ],
  },
  "oven-temp": {
    howItWorks: [
      "Converts between Fahrenheit, Celsius, and UK gas marks.",
      "Common: 350 °F = 177 °C = gas mark 4 (moderate).",
      "Recipe temperatures are one of the most common places US and international measurement systems collide, since a recipe written for one system rarely converts to a clean round number in the other.",
    ],
    example: "350 °F = 177 °C = gas mark 4.",
    faqs: [
      { q: "Fan/convection vs conventional?", a: "Fan ovens typically run ~20 °C (35 °F) hotter than a conventional oven at the same dial setting. Reduce the recipe temp accordingly." },
      { q: "Why does the UK use gas marks?", a: "Historical: many older UK ovens have a gas dial with marks 1–9 instead of a temperature dial." },
      { q: "Is oven thermostat accuracy reliable?", a: "Not always — many home ovens run 10-25°F off their displayed setting, so an oven thermometer is worth using if a recipe's exact temperature really matters." },
    ],
  },
  "baking-measure": {
    howItWorks: [
      "Converts between US baking measures: cups, tablespoons, teaspoons, and milliliters.",
      "1 cup = 16 tbsp = 48 tsp = 236.588 mL.",
      "These ratios are exact by US customary definition, which is why converting between cups, tablespoons, and teaspoons is more reliable than converting cups of an ingredient to grams — the volume relationships never change, even though weight-per-cup does.",
    ],
    example: "1 US cup ≈ 15.997 tbsp (16 rounded).",
    faqs: [
      { q: "How many tsp in a tbsp?", a: "3 teaspoons in one tablespoon." },
      { q: "Are US and UK tablespoons the same?", a: "Close but not identical: US tbsp ≈ 14.79 mL, UK tbsp = 15 mL, Australian = 20 mL. Rarely enough to ruin a recipe." },
      { q: "What's a 'dash' or a 'pinch' in precise measurements?", a: "These are informal, imprecise terms — a pinch is generally taken to mean about 1/16 teaspoon and a dash slightly more, but neither is standardized the way cups and tablespoons are." },
    ],
  },
  "cooking-time": {
    howItWorks: [
      "Estimates roasting time for meat based on weight-per-pound rules of thumb.",
      "This is a starting point — always use a meat thermometer to check internal temperature for doneness and safety.",
      "Weight-based estimates assume a fairly standard roast shape and starting temperature — a very cold roast straight from the fridge, or an oddly shaped cut, can shift actual cooking time meaningfully from the estimate.",
    ],
    example: "5 lb roast × 20 min/lb = 100 minutes.",
    faqs: [
      { q: "Safe internal temps?", a: "USDA: poultry 165 °F; ground meat 160 °F; whole cuts of beef/pork 145 °F + 3 min rest." },
      { q: "Does convection change the time?", a: "Yes — reduce by ~25% or drop temp by ~25 °F. Check earlier than the calculator suggests." },
      { q: "Why rest meat after cooking?", a: "Resting lets juices redistribute through the meat rather than spilling out when cut, and internal temperature typically continues rising a few degrees during the rest — both improve the final result." },
    ],
  },
  "pour-calc": {
    howItWorks: [
      "How many servings you get from a bottle: total volume ÷ serving size.",
      "Standard wine pour is 150 mL (5 oz); a 750 mL bottle gives 5 pours.",
      "This is a standard party-planning calculation — knowing servings per bottle is the first step to figuring out how many bottles to buy for a given guest count and event length.",
    ],
    example: "750 mL bottle at 150 mL per pour = 5.0 servings.",
    faqs: [
      { q: "Standard drink pour sizes?", a: "Wine 5 oz (150 mL), beer 12 oz (355 mL), spirit shot 1.5 oz (44 mL)." },
      { q: "How many glasses in a magnum?", a: "1.5 L magnum ÷ 150 mL = 10 pours." },
      { q: "How much wine should I buy for a party?", a: "A common rule of thumb is about half a bottle per guest for a few hours of moderate drinking — adjust up for longer events or down if food and other drinks are also served." },
    ],
  },
  "paint-coverage": {
    howItWorks: [
      "Gallons needed = (sq ft × coats) / coverage rate per gallon. Typical coverage 300–400 sq ft/gal for smooth walls.",
      "Round up to the nearest whole gallon and account for touch-ups.",
      "Coverage rate varies more than people expect based on wall texture and paint type — a textured or porous surface can soak up noticeably more paint per square foot than a smooth, previously painted wall.",
    ],
    example: "400 sq ft × 2 coats ÷ 350 sq ft/gal = 2.29 gallons — buy 3 to have a touch-up reserve.",
    faqs: [
      { q: "What coverage rate should I use?", a: "Smooth interior walls: 350–400. Textured or first coat on new drywall: 250–300. Check the can." },
      { q: "Do I need a primer?", a: "Yes over bare drywall, previous dark colors, or stained surfaces. Primer coverage is separate." },
      { q: "Should I subtract doors and windows from the area?", a: "For a single door or window, usually not worth the trouble — but for a room with several large windows or doors, subtracting them gives a meaningfully more accurate paint estimate." },
    ],
  },
  "tile": {
    howItWorks: [
      "Tiles needed = (area in sq ft ÷ tile size in sq ft) plus 10% waste for cuts and breakage.",
      "For complex layouts or diagonal patterns, allow 15–20% waste.",
      "The waste allowance exists because tiles at the edges of a room almost always need to be cut to fit, and cut pieces are rarely usable elsewhere — a larger tile size or an irregularly shaped room both tend to increase the waste percentage.",
    ],
    example: "100 sq ft with 1 sq ft tiles = 100 + 10% = 111 tiles.",
    faqs: [
      { q: "How much waste for a diagonal pattern?", a: "15–20% — more cuts mean more offcuts." },
      { q: "Round up per box?", a: "Yes — buy whole boxes and keep spares for future repairs." },
      { q: "Should I buy tiles from the same production batch?", a: "Yes when possible — tile color and shade can vary subtly between manufacturing batches (called a 'lot' or 'dye lot'), which can be noticeable once installed if mixed." },
    ],
  },
  "concrete": {
    howItWorks: [
      "Volume = Length × Width × Thickness. Converted to cubic yards (US standard for concrete orders).",
      "1 cubic yard = 27 cubic feet. Order 5–10% extra for spillage and uneven ground.",
      "Ready-mix suppliers price and deliver by the cubic yard, not the cubic foot, which is why converting the raw volume calculation into yards matters for actually placing an order, not just for the math itself.",
    ],
    example: "10 ft × 10 ft × 4 in thick = 100 × 0.333 = 33.3 cu ft = 1.23 cu yd.",
    faqs: [
      { q: "Order a full truck?", a: "Small pours (<1 cu yd) often use bagged mix. Larger pours: ready-mix trucks minimum ~1 cu yd, often 3+ minimum." },
      { q: "Depth for a driveway?", a: "4 in for cars, 6 in for trucks or heavy vehicles. Check local codes." },
      { q: "Why order extra beyond the calculated volume?", a: "Uneven subgrade, minor spillage, and formwork imperfections routinely eat into the exact calculated volume — a 5-10% buffer avoids running short mid-pour, which is far more costly than having a small amount left over." },
    ],
  },
  "flooring": {
    howItWorks: [
      "Boxes needed = (room sq ft × 1.10 for waste) ÷ sq ft per box.",
      "Larger rooms or planks needing rip cuts may push waste to 12–15%.",
      "Flooring is usually sold in fixed-coverage boxes, so the final number always rounds up to a whole box — buying exactly the calculated square footage without the waste allowance is one of the most common reasons a flooring job runs short mid-install.",
    ],
    example: "200 sq ft room ÷ 22 sq ft/box × 1.10 = 11 boxes.",
    faqs: [
      { q: "Do I need to acclimate flooring?", a: "Solid hardwood: yes, 3–7 days in the room. Engineered and vinyl: usually 24–48 hours. Follow manufacturer specs." },
      { q: "Round up?", a: "Always up. Leftover boxes are useful for future repairs." },
      { q: "Does room shape affect waste percentage?", a: "Yes — narrow rooms, lots of doorways, or diagonal layouts all increase the number of cut pieces, which pushes the realistic waste allowance toward the higher end of the range." },
    ],
  },
  "wallpaper": {
    howItWorks: [
      "Rolls needed = (perimeter × wall height ÷ usable sq ft per roll) rounded up.",
      "Standard American double roll is 56 sq ft usable; single 27. Patterns with large repeats need more.",
      "Roll batch numbers matter here too — like tile, wallpaper can show subtle color variation between production runs, so buying all rolls from the same batch avoids a visible mismatch partway across a wall.",
    ],
    example: "40 ft perimeter × 8 ft height = 320 sq ft ÷ 56 sq ft/roll ≈ 6, plus 1 for pattern match = 7 rolls.",
    faqs: [
      { q: "What's a pattern match?", a: "Adjacent strips must line up horizontally — larger repeats waste more material." },
      { q: "Do I include doors and windows?", a: "Small openings: don't subtract (leaves room for error). Large openings: subtract the area from total." },
      { q: "Should I buy extra beyond the calculated amount?", a: "Yes — an extra roll is generally worth having on hand for future repairs, since matching wallpaper years later from a discontinued print or different dye lot can be difficult or impossible." },
    ],
  },
  "square-footage": {
    howItWorks: [
      "Length × Width for rectangular rooms. Break L-shaped rooms into rectangles and sum.",
      "Useful for flooring, paint, tile, real-estate listings, and property tax.",
      "This same rectangle-and-sum approach scales up to entire floor plans, not just single rooms — it's the basic building block behind most home square footage figures you see in listings.",
    ],
    example: "12 × 10 ft = 120.00 sq ft.",
    faqs: [
      { q: "Include closets?", a: "Usually yes for materials estimates; check your local real-estate convention for listings." },
      { q: "Irregular rooms?", a: "Divide into rectangles and triangles, calculate each, sum." },
      { q: "Why do listed square footage figures sometimes differ for the same house?", a: "Different appraisers and agents sometimes include or exclude areas like basements, garages, or covered porches differently — there's more regional variation in convention than most buyers expect." },
    ],
  },
  "roofing": {
    howItWorks: [
      "A roofing 'square' is 100 sq ft. Roofing materials are ordered by the square.",
      "Add ~10% waste for cuts, hips, and valleys. Steeper pitches raise waste.",
      "The pitch factor exists because a sloped roof surface is always larger than its flat footprint on the ground — the steeper the slope, the more the actual surface area exceeds what a simple footprint measurement would suggest.",
    ],
    example: "2,000 sq ft roof area ≈ 22 squares (includes waste).",
    faqs: [
      { q: "How do I know my roof area?", a: "Multiply footprint by a pitch factor: 4/12 pitch ≈ 1.054×; 8/12 ≈ 1.202×; 12/12 ≈ 1.414×." },
      { q: "How many bundles of shingles per square?", a: "Standard 3-tab: 3 bundles per square. Architectural: 3–4." },
      { q: "What does a roof pitch like '6/12' mean?", a: "It means the roof rises 6 inches vertically for every 12 inches of horizontal run — the higher the first number, the steeper the roof." },
    ],
  },
  "fence": {
    howItWorks: [
      "Posts = (fence length ÷ post spacing) + 1 corner post. Panels = fence length ÷ post spacing.",
      "8 ft spacing is common for privacy fences; 6 ft for chain link.",
      "Post spacing is a structural decision, not just a material-quantity one — closer spacing adds strength and wind resistance but increases both post count and labor, which is why it varies by fence type and local wind conditions.",
    ],
    example: "100 ft fence at 8 ft spacing: 14 posts (13 spans + 1 end + 1 buffer), 13 panels.",
    faqs: [
      { q: "Do I need gate posts?", a: "Yes — heavier duty for gates. Budget separately." },
      { q: "How deep should posts be?", a: "1/3 of post height below grade, in concrete. For a 6 ft fence, that's a 2–3 ft hole." },
      { q: "Should I check property lines before installing a fence?", a: "Yes — a survey or clear property line confirmation is worth doing first, since a fence built even slightly over a boundary can create real disputes with neighbors later." },
    ],
  },
  "mulch": {
    howItWorks: [
      "Cubic yards = (sq ft × depth in inches) ÷ 324.",
      "3 inches is typical for weed suppression and moisture retention; 4+ for high-traffic beds.",
      "Too much mulch piled against a plant stem or tree trunk can actually trap moisture against the bark and promote rot, so depth recommendations aren't just about coverage — they're also about not overdoing it.",
    ],
    example: "200 sq ft × 3 in = 600 ÷ 324 = 1.85 cu yd.",
    faqs: [
      { q: "Bulk vs bagged?", a: "Bulk (yards) is usually 30–50% cheaper per volume, delivered. Bags are easier for small jobs." },
      { q: "How often to reapply?", a: "Top up 1–2 in each spring as mulch decomposes." },
      { q: "Why does the divisor use 324 specifically?", a: "It comes from converting inches of depth over a square-foot area into cubic yards — 1 cubic yard covers 324 square feet at exactly 1 inch of depth, so the formula scales from that baseline." },
    ],
  },
  "fuel-cost": {
    howItWorks: [
      "Fuel cost for a trip = (miles ÷ MPG) × price per gallon.",
      "Simple, no adjustments for terrain or driving style — those can move the number ±10–20%.",
      "This is a useful baseline for comparing trip costs across different vehicles or routes, even though the real number will drift somewhat with traffic, elevation changes, and how aggressively you drive.",
    ],
    example: "300 miles ÷ 28 MPG × $3.50/gal = $37.50.",
    faqs: [
      { q: "Highway or city MPG?", a: "Use the closer number to your trip. Combined works for mixed routes." },
      { q: "Include tolls?", a: "No — this is fuel only. Add tolls separately for total trip cost." },
      { q: "How much does highway speed affect fuel cost?", a: "Meaningfully — aerodynamic drag increases sharply above about 65 mph, so a trip driven faster can burn noticeably more fuel per mile than the same trip at a moderate highway speed." },
    ],
  },
  "gas-mileage": {
    howItWorks: [
      "MPG = miles driven ÷ gallons used. Fill up, drive, fill up again to measure.",
      "Track over several tanks for a reliable average — one tank can be skewed by conditions.",
      "A single tank can be thrown off by short trips, cold weather, or heavy traffic, all of which lower real-world MPG temporarily — averaging several fill-ups smooths out these one-off effects into a more representative number.",
    ],
    example: "300 miles on 10 gallons = 30.00 MPG.",
    faqs: [
      { q: "Why is my MPG lower than the EPA sticker?", a: "EPA numbers assume steady speed and moderate conditions. Real-world driving (traffic, weather, cargo) can drop MPG 10–20%." },
      { q: "Best speed for MPG?", a: "Most cars are most efficient at 45–65 mph. Above 65, aerodynamic drag rises steeply." },
      { q: "Does tire pressure affect MPG?", a: "Yes — underinflated tires increase rolling resistance and can measurably reduce fuel economy, which is why checking tire pressure is a standard fuel-saving tip." },
    ],
  },
  "car-payoff": {
    howItWorks: [
      "Same math as any amortized loan: given balance, APR, and monthly payment, solve for months to zero.",
      "If your payment is less than the monthly interest, the loan never pays off.",
      "This is the same underlying formula used across every loan calculator on this site — mortgages, personal loans, and car loans all pay off according to identical amortization math, just with different typical rates and terms.",
    ],
    example: "$15,000 balance at 6% APR, $350/mo: about 48.4 months to payoff.",
    faqs: [
      { q: "Should I pay off early?", a: "Depends on interest rate. High-rate loans (>6%) usually worth paying down. Low-rate loans (<3%) — might be better to invest the extra." },
      { q: "Are there prepayment penalties?", a: "Most modern US auto loans have none — check your loan agreement to be sure." },
      { q: "How much does an extra $50/month actually help?", a: "On a typical car loan, adding even a modest amount to the monthly payment can shave several months off the payoff timeline and save real money in interest — try a couple of amounts here to compare." },
    ],
  },
  "tire-size": {
    howItWorks: [
      "Parses a tire spec like 225/45R17 into diameter and circumference.",
      "225 = section width mm, 45 = aspect ratio (%), R = radial, 17 = wheel diameter inches.",
      "Circumference matters beyond speedometer accuracy — it also affects gearing feel and, on all-wheel-drive vehicles, mismatched tire circumferences across axles can strain the drivetrain, which is why tire replacement guidance is stricter for AWD cars.",
    ],
    example: "225/45R17: overall diameter 634.3 mm (24.97 in), circumference 1,992.7 mm.",
    faqs: [
      { q: "Why does tire size matter for speedometer?", a: "Bigger diameter → speedo reads slower than actual speed. Changing tire size changes odometer readings too." },
      { q: "Load and speed rating?", a: "Numbers after size (e.g. 91V) indicate max load and speed. Replace only with equal or higher rated tires." },
      { q: "Can I mix different tire sizes on one car?", a: "Generally not recommended, and often unsafe on AWD vehicles specifically — even a small circumference difference between tires can cause drivetrain wear over time." },
    ],
  },
  "travel-time": {
    howItWorks: [
      "Time = Distance ÷ Speed. This tool converts to hours and minutes.",
      "Assumes constant speed — real trips include stops, traffic, and speed variation.",
      "Treat the result as a floor, not a guarantee — real driving time is almost always somewhat longer once traffic, rest stops, and speed variation are factored in, especially on longer trips.",
    ],
    example: "300 miles at 60 mph = 5h 0m.",
    faqs: [
      { q: "Include stops?", a: "Add 10–15 minutes per 2–3 hours for restroom and fuel. This tool is pure driving time." },
      { q: "Speed varies on the trip?", a: "Use average — total distance / total time. This is a rough planning estimate." },
      { q: "Is a GPS app's estimate more accurate than this?", a: "Usually yes for a specific route, since it factors in real road types, speed limits, and sometimes live traffic — this calculator is best for quick back-of-envelope planning before you have a specific route." },
    ],
  },
  "flight-time": {
    howItWorks: [
      "Time = Distance ÷ Speed. Aviation uses nautical miles and knots by convention.",
      "This is pure cruise-time; add ~30 min for taxi, takeoff, climb, and descent for a real flight.",
      "Wind has an outsized effect on flight time compared to driving, since cruise altitudes often have consistently strong winds — a flight with a strong tailwind can genuinely land significantly earlier than the same route against a headwind.",
    ],
    example: "2000 nautical miles at 500 knots = 3h 29m cruise.",
    faqs: [
      { q: "Nautical mile vs statute mile?", a: "Nautical mile = 1.15 statute miles. Aviation standard because it maps to 1 minute of latitude." },
      { q: "Add taxi/climb?", a: "Yes — real block times are typically 30–60 min longer than pure cruise. Winds also matter (headwind slows, tailwind speeds)." },
      { q: "Why do flights in one direction take longer than the return?", a: "Jet stream winds at cruise altitude typically blow west to east, so eastbound flights often get a tailwind boost while westbound flights fight a headwind — this is a real, physical effect, not scheduling padding." },
    ],
  },
  "jet-lag": {
    howItWorks: [
      "Rough rule: 1 day of recovery per timezone crossed, worse for eastward travel.",
      "Individual variation is huge. Sleep discipline, sunlight exposure, and hydration all matter.",
      "Eastward travel is harder on the body than westward for most people because it requires advancing your internal clock, which is generally more difficult than delaying it — this is a well-documented asymmetry in circadian rhythm research.",
    ],
    example: "6 timezones crossed ≈ 6 days of full recovery.",
    faqs: [
      { q: "How can I reduce jet lag?", a: "Adjust sleep schedule 2–3 days before, get morning sunlight at destination, hydrate, avoid alcohol in-flight." },
      { q: "Eastward vs westward?", a: "Eastward is harder — you're shortening your day, fighting circadian rhythm. Westward extends the day and usually feels easier." },
      { q: "Does age affect how badly jet lag hits?", a: "Many people find recovery gets slower with age, though individual variation is large enough that trip prep and destination light exposure often matter more than age alone." },
    ],
  },
  "freelance-rate": {
    howItWorks: [
      "Annual income goal ÷ (working weeks × billable hours per week) = required hourly rate.",
      "Billable hours are usually 60–70% of worked hours; the rest is admin, marketing, and unpaid work.",
      "New freelancers often set rates based only on take-home salary target, forgetting the overhead a traditional employer normally absorbs — which is why building in a buffer for taxes, benefits, and non-billable time matters so much here.",
    ],
    example: "$100,000 goal ÷ (46 wks × 25 hrs) = $86.96/hour.",
    faqs: [
      { q: "How many billable hours per week is realistic?", a: "25–30 is a common sustainable target. Full 40 billable rarely lasts long-term." },
      { q: "Should I add taxes and benefits?", a: "Yes — freelancers cover self-employment tax, health insurance, retirement. Add ~30% to a target salary before dividing." },
      { q: "How often should I revisit my rate?", a: "At least annually, or sooner if your skills, demand, or cost of living shift meaningfully — rates that felt right a year or two ago often fall behind without a periodic review." },
    ],
  },
  "invoice-total": {
    howItWorks: [
      "Subtotal minus discount, plus tax on the discounted amount = grand total.",
      "Standard invoice math.",
      "Getting the discount-then-tax order right matters for the final number — applying tax before the discount instead of after produces a different (and incorrect) total, which is a surprisingly common invoicing mistake.",
    ],
    example: "$1,000 subtotal, 8% tax, 0 discount = $1,000 × 1.08 = $1,080.00.",
    faqs: [
      { q: "Tax on the discount?", a: "Standard is tax on the post-discount amount. Confirm your jurisdiction's rules." },
      { q: "Include shipping in taxable base?", a: "Depends on state — many US states tax shipping if it's not separately stated as a distinct fee." },
      { q: "Should I round each line item or just the final total?", a: "Rounding only the final total is generally more accurate and standard practice — rounding every individual line first can compound small errors across a multi-item invoice." },
    ],
  },
  "markup": {
    howItWorks: [
      "Selling price = cost × (1 + markup%). Markup is different from margin — 60% markup is not 60% margin.",
      "60% markup on $40 = $64 sale price; margin on that sale = $24/$64 ≈ 37.5%.",
      "This gap between markup and margin percentages widens as the markup gets larger, which is why relying on markup alone can make a pricing strategy look more profitable on paper than the actual margin delivers.",
    ],
    example: "$40 cost × (1 + 60%) = $64.00 selling price.",
    faqs: [
      { q: "Markup vs margin?", a: "Markup is profit as a % of cost; margin is profit as a % of selling price. Higher markups always give lower margins for the same profit." },
      { q: "Standard retail markup?", a: "Wildly variable: grocery 5–15%, clothing 100–300%, jewelry 200–500%. Depends on turnover and category norms." },
      { q: "What markup do I need for a 50% margin?", a: "100% markup — a common point of confusion, since it's tempting to assume a 50% markup gives a 50% margin, but the two only converge at zero." },
    ],
  },
  "break-even-point": {
    howItWorks: [
      "Break-even revenue = Fixed Costs ÷ Contribution Margin %. Contribution margin is what's left after variable costs.",
      "This is the revenue level where you're neither profiting nor losing money.",
      "Contribution margin percentage is the key lever here — improving it, either by raising prices or cutting variable cost per sale, lowers the break-even revenue needed just as much as cutting fixed costs does.",
    ],
    example: "$10,000 fixed costs ÷ 40% contribution margin = $25,000.00 in revenue to break even.",
    faqs: [
      { q: "Revenue-based vs unit-based break-even?", a: "Both are useful. Units give a sales target; revenue gives a dollar target. Same underlying math." },
      { q: "What raises break-even?", a: "Higher fixed costs, lower contribution margin. Cutting fixed costs is often the fastest path down." },
      { q: "How is this different from the plain Break-Even calculator?", a: "This version works from a contribution margin percentage directly, which is convenient when you know your overall margin but not a precise per-unit price and cost breakdown." },
    ],
  },
  "overtime": {
    howItWorks: [
      "US FLSA typical rule: hours over 40/week are paid at 1.5× (time-and-a-half). This tool applies that to your hourly rate.",
      "Some states or jobs have different rules — always check your specific policy.",
      "A few states go further than federal law, requiring daily overtime after a certain number of hours in a single day regardless of the weekly total — worth checking local rules if this applies to you.",
    ],
    example: "$22/hr × 40 regular = $880. 8 overtime hours × $33 = $264. Total: $1,144.00.",
    faqs: [
      { q: "Are salaried employees eligible for overtime?", a: "Depends on FLSA exemption status. Non-exempt hourly and some salaried employees qualify; exempt executives, professionals, and admins usually don't." },
      { q: "Weekend or holiday premiums?", a: "Not required by federal law unless total weekly hours exceed 40. Company policy or union contracts may add extra premiums." },
      { q: "Does overtime pay affect my tax bracket?", a: "Overtime is taxed the same as regular wages — a larger paycheck may be withheld at a higher rate temporarily, but your actual annual tax bracket is based on total yearly income, not any single paycheck." },
    ],
  },
  "business-loan": {
    howItWorks: [
      "Same amortization math as a personal loan. Small business loans typically run 3–10 years.",
      "SBA loans, term loans, and equipment financing all follow this basic math with different rates and terms.",
      "Rates and terms for business loans vary far more than consumer loans, largely because lenders price in business-specific risk factors like time in operation, revenue stability, and industry — shopping multiple lenders matters even more here.",
    ],
    example: "$50,000 at 8% APR over 5 years: monthly payment $1,013.82.",
    faqs: [
      { q: "Are business loan interest payments deductible?", a: "Yes — business loan interest is generally tax-deductible as an operating expense. Consult a CPA for specifics." },
      { q: "Should I take fixed or variable rate?", a: "Fixed is predictable — easier for cash-flow planning. Variable can be cheaper initially but risks rising with rates." },
      { q: "What affects the rate a lender offers?", a: "Time in business, revenue history, credit score, and collateral all factor in — newer businesses with limited history typically face higher rates or need a personal guarantee." },
    ],
  },
  "dog-years": {
    howItWorks: [
      "Dog age in human years depends on size and breed, but a simple approximation: first year = 15 human, second = 9 more, then 4–5 per year after.",
      "Small dogs age slower than large dogs after middle age.",
      "Veterinary science has moved away from the old flat '×7' rule toward this front-loaded model because dogs mature to adulthood in just one to two years — the early years pack in far more biological aging than a simple multiplier would suggest.",
    ],
    example: "5-year-old dog ≈ 15 + 9 + 3×5 = 57 human years (rough small/medium approximation).",
    faqs: [
      { q: "Is '1 dog year = 7 human years' accurate?", a: "No — it's a shortcut that overstates in the first two years and understates in old age. Puppy year one is closer to 15." },
      { q: "Does breed matter?", a: "Yes — great danes and other giant breeds age faster; tiny breeds like chihuahuas live longer." },
      { q: "At what age is a dog considered a senior?", a: "This varies by size — large breeds are often considered senior around 6-7 years old, while small breeds may not reach that stage until 10 or later, reflecting their generally longer lifespans." },
    ],
  },
  "cat-years": {
    howItWorks: [
      "Cats age fast early: year 1 ≈ 15 human, year 2 ≈ +9, then ~4 per year after.",
      "Indoor cats generally live longer than outdoor cats and reach older equivalent 'human' ages.",
      "Unlike dogs, cat aging doesn't vary much by breed size — most domestic cat breeds follow a broadly similar aging curve, making this estimate more universally applicable across breeds than the dog equivalent.",
    ],
    example: "5-year-old cat ≈ 15 + 9 + 3×4 = 36 human years.",
    faqs: [
      { q: "Longest-lived cat?", a: "Creme Puff, verified at 38 years — that's over 160 in human equivalents." },
      { q: "When is a cat 'senior'?", a: "Around age 10–11 in real years, roughly 55+ in human equivalent." },
      { q: "Why do indoor cats tend to live longer?", a: "Reduced exposure to traffic, predators, disease, and fights with other animals is the main driver — indoor cats commonly live several years longer on average than cats that spend significant time outdoors." },
    ],
  },
  "shoe-size": {
    howItWorks: [
      "Converts between US, UK, and EU sizing systems. Roughly: EU = US + 33, UK = US − 1 (men's).",
      "Women's sizing offsets differently — always check brand-specific guides.",
      "Shoe sizing was never standardized globally the way some other measurements were, which is why the conversion factors are approximate rather than exact — brand-to-brand variation within the same stated size is common enough that trying on a specific model is still the most reliable check.",
    ],
    example: "US Men 9 ≈ UK 8 ≈ EU 42.",
    faqs: [
      { q: "Are men's and women's sizes different?", a: "Yes — US women's is roughly 1.5 sizes larger than men's for the same physical foot length." },
      { q: "How do I measure my foot at home?", a: "Trace your foot on paper, measure heel to longest toe. Compare to a size chart for your target brand." },
      { q: "Should kids' shoe sizes be measured differently?", a: "Yes — children's sizing uses its own separate scale from adult sizing in most systems, and since kids' feet grow quickly, checking length every few months matters more than relying on a size number alone." },
    ],
  },
  "pizza-size": {
    howItWorks: [
      "Pizza area grows with the square of the diameter, so a 16\" pizza is nearly double the area of a 12\", not one-third larger.",
      "Compare cost per square inch to find the best deal.",
      "This is a real-world example of why linear intuition fails for area comparisons — people routinely underestimate how much more pizza a modest diameter increase actually delivers, which is exactly why upsizing at a pizzeria is usually the better value.",
    ],
    example: "12\" pizza area ≈ 113 in²; 16\" pizza area ≈ 201 in² — the 16\" is 1.78× larger.",
    faqs: [
      { q: "Why does the big pizza feel like such a good deal?", a: "Because area scales as diameter², a small size bump is a big area bump. A 20% larger diameter = 44% more pizza." },
      { q: "How many people does a large feed?", a: "Rough rule: 3 slices per adult. A 16\" pizza (8 slices) feeds about 2–3." },
      { q: "Does this area math apply to other round foods too?", a: "Yes — the same diameter-squared relationship applies to any circular item, from cakes to skillets, so the same 'bigger is a better deal than it looks' logic holds generally." },
    ],
  },
  "love-compat": {
    howItWorks: [
      "A pseudo-random 'compatibility' score derived from the letter values of two names. It's entertainment, not science.",
      "Same inputs always produce the same number — deterministic.",
      "The calculation works like a simple hash function, turning the letters of two names into a repeatable number — which is why it's consistent every time you enter the same pair, but has no connection to real relationship compatibility research.",
    ],
    example: "'Alex' + 'Sam' → 26% ❤ (result stable across runs).",
    faqs: [
      { q: "Is this real?", a: "No — it's a fun toy. Real compatibility has nothing to do with letter values." },
      { q: "Why the same result every time?", a: "The hash is deterministic. Change the spelling to change the number." },
      { q: "What actually predicts relationship compatibility?", a: "Relationship researchers point to things like communication patterns, shared values, and conflict resolution style — nothing that can be reduced to a name-based formula like this one, which exists purely for fun." },
    ],
  },
  "birthday-countdown": {
    howItWorks: [
      "Days from today until the next occurrence of your birthday (this year or next).",
      "Helpful for planning parties or making a wish.",
      "The countdown automatically rolls over to next year's date once your birthday has passed for the current year, so it always points forward to the next actual occurrence rather than showing a negative or past count.",
    ],
    example: "Pick a birth date; result shows days until the next birthday.",
    faqs: [
      { q: "Does it count today?", a: "If today is the birthday, it counts as 0. Otherwise the next occurrence." },
      { q: "Leap-year birthdays?", a: "Feb 29 usually rounds to Feb 28 or Mar 1 in non-leap years — the tool picks Feb 28 by default." },
      { q: "Can I use this to count down to any date, not just a birthday?", a: "This tool is specifically built around the yearly-recurring birthday logic — for a one-time future date, the Days Until or Countdown Timer calculators are the better fit." },
    ],
  },
  "zodiac": {
    howItWorks: [
      "Returns the Western zodiac sign based on birth date using standard tropical astrology cutoffs.",
      "12 signs, each covering about 30 days of the calendar.",
      "This tool reflects tropical astrology's cultural tradition rather than a scientifically validated system — sign cutoffs are based on a fixed calendar convention, not on the actual current position of constellations, which have shifted over centuries.",
    ],
    example: "Pick a birth date; result names your Western zodiac sign (e.g. Leo, Virgo).",
    faqs: [
      { q: "What about Chinese zodiac?", a: "This tool uses Western tropical astrology only. Chinese zodiac uses a 12-year animal cycle instead." },
      { q: "What if I'm born on a cusp?", a: "Cusp days (near sign boundaries) can vary by astrology tradition. Different sources may give different answers by a day." },
      { q: "Is there scientific evidence for astrology?", a: "No — astrology is a cultural and historical tradition, not a scientifically validated predictive system; this tool exists for entertainment and tradition rather than making any factual claim." },
    ],
  },
  "numerology": {
    howItWorks: [
      "Life-path number is calculated by summing all digits of a birthdate (or numeric letter values of a name) and reducing to a single digit.",
      "Entertainment/tradition — no scientific basis.",
      "Like the zodiac tool, this reflects a long-standing cultural tradition rather than anything empirically tested — the appeal is more about reflection and pattern-finding than prediction.",
    ],
    example: "'Ada Lovelace' → life-path 9.",
    faqs: [
      { q: "Which numerology system?", a: "This uses Pythagorean (Western) letter values 1–9. Chaldean systems use different mappings." },
      { q: "What do master numbers mean?", a: "11, 22, and 33 are traditionally kept un-reduced. This tool reduces to a single digit by default." },
      { q: "Does numerology have any scientific backing?", a: "No — like astrology, it's a cultural and symbolic tradition rather than an evidence-based system, and this tool is offered purely for entertainment." },
    ],
  },
  "bac": {
    howItWorks: [
      "Widmark formula estimates blood-alcohol content from body weight, biological sex, drinks consumed, and hours since first drink.",
      "Rough estimate only. Actual BAC depends on food, medications, individual metabolism, and drink strength.",
      "Because so many personal factors affect real BAC, this estimate should never be used to decide whether it's safe to drive — the only reliable way to know your actual BAC is a breathalyzer or blood test, and the only guaranteed-safe choice after drinking is not driving at all.",
    ],
    example: "175 lb male, 3 standard drinks, 2 hours since first drink: estimated BAC 0.100% — above the US 0.08% legal limit.",
    faqs: [
      { q: "What's a 'standard drink'?", a: "US: 14 g pure alcohol = 12 oz beer @ 5%, 5 oz wine @ 12%, or 1.5 oz spirits @ 40%." },
      { q: "Is this legally accurate?", a: "No — it's an estimate. Individual metabolism, medications, food, and drink strength all shift the real number. Never rely on BAC estimates to decide to drive." },
      { q: "How long until my BAC is 0?", a: "Alcohol clears at ~0.015%/hr on average. A 0.10% BAC needs ~6–7 hours to fully clear." },
    ],
  },
};

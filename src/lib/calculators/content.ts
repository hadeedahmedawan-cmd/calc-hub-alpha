import type { CalculatorContent } from "./types";

// Per-calculator SEO/help content. Worked examples use each calculator's default inputs
// and were verified against its actual compute() logic before being written into the copy.
export const CONTENT: Record<string, CalculatorContent> = {
  "mortgage": {
    howItWorks: [
      "Your monthly mortgage payment is amortized: it spreads your loan amount (home price minus down payment) evenly across every month of the term at a fixed interest rate.",
      "Each payment splits between principal and interest. Early payments are mostly interest; as the balance shrinks, more shifts to principal.",
      "This tool covers principal and interest only. Real bills usually add property taxes, homeowners insurance, and PMI through an escrow account.",
    ],
    example: "On a $400,000 home with $80,000 down (20%), 6.5% fixed, 30-year term: loan $320,000, monthly payment $2,022.62, total interest $408,142.36, total paid $728,142.36.",
    faqs: [
      { q: "Does this include taxes and insurance?", a: "No — principal and interest only. Add taxes, insurance, and PMI separately; they typically add several hundred dollars per month." },
      { q: "What down payment avoids PMI?", a: "20% on a conventional loan. Below that, PMI is required until you build enough equity to drop it." },
      { q: "15 vs 30 year term?", a: "30-year has lower monthly payment but nearly double the total interest. 15-year is a bigger monthly bite but pays off far sooner." },
      { q: "How much do rates matter?", a: "A lot — 1% on a $320k loan moves the monthly payment by over $200. Worth shopping aggressively." },
    ],
  },
  "loan": {
    howItWorks: [
      "Personal/installment loans use the same amortization math as mortgages: fixed monthly payment of principal + interest, more interest early and more principal later.",
      "Monthly payment depends on amount, APR, and term. Shorter terms or higher payments cut total interest significantly.",
    ],
    example: "Borrowing $20,000 at 7% APR over 5 years: monthly payment $396.02, total interest $3,761.44, total repayment $23,761.44.",
    faqs: [
      { q: "APR vs interest rate?", a: "Nominal rate is raw cost; APR includes some fees and is the truer annual cost. Compare APR when shopping lenders." },
      { q: "Can I pay off early?", a: "Almost always yes — extra principal cuts future interest. Check for prepayment penalties first." },
      { q: "Longer term = smaller payment?", a: "Yes, but you pay more total interest. Balance monthly affordability against total cost." },
    ],
  },
  "emi": {
    howItWorks: [
      "EMI (Equated Monthly Installment) is the fixed monthly payment on most home, personal, and auto loans in India and much of Asia. Every month you pay the same amount, but the interest/principal split shifts over time.",
      "Formula: P × r × (1+r)^n / ((1+r)^n − 1), where r is monthly rate and n is total months. The calculator handles this automatically.",
    ],
    example: "For a ₹5,00,000 loan at 9% p.a. over 60 months, EMI is ₹10,379.18, total interest is ₹1,22,750.66, and total repayment reaches ₹6,22,750.66.",
    faqs: [
      { q: "Is EMI the same as a monthly loan payment?", a: "It's identical math — 'EMI' is just the term used in India and Asia for the fixed monthly installment on an amortized loan." },
      { q: "Can I lower my EMI without extending tenure?", a: "Negotiate a lower interest rate, refinance, or make a lump-sum prepayment against principal so the remaining EMI is recalculated on a smaller balance." },
      { q: "Does EMI change with floating rates?", a: "For fixed-rate loans, no. For floating-rate loans, banks may either adjust the EMI or keep the EMI constant and change the tenure — check your loan terms." },
    ],
  },
  "compound-interest": {
    howItWorks: [
      "Compound interest is interest earning interest. Each compounding period, interest earned is added to the principal, and the next period's interest is calculated on the new, larger balance.",
      "Formula: A = P(1 + r/n)^(nt). More frequent compounding produces a slightly higher end balance. Regular monthly contributions turbo-charge the effect.",
    ],
    example: "Investing $10,000 at 6% annual return compounded monthly for 10 years with no additional contributions grows to $18,193.97 — that's $8,193.97 in interest.",
    faqs: [
      { q: "Why does compound interest matter for retirement?", a: "Growth is exponential, not linear — the last decade before retirement often adds more in dollar terms than the first two decades combined." },
      { q: "What's the 'Rule of 72'?", a: "Divide 72 by your annual return rate to estimate the years it takes to double your money. At 6%, about 12 years; at 8%, about 9." },
      { q: "Does compounding frequency matter?", a: "Slightly. Monthly vs. annually adds only a fraction of a percent, but daily vs. yearly matters over 30+ years." },
    ],
  },
  "simple-interest": {
    howItWorks: [
      "Simple interest ignores compounding. Interest is calculated once per period on the original principal only using I = P × R × T.",
      "Common in short-term loans, some auto financing, and treasury bills. Long-term products use compound interest instead.",
    ],
    example: "$1,000 principal at 5%/year for 3 years: interest = $1,000 × 0.05 × 3 = $150. Total repayment: $1,150.",
    faqs: [
      { q: "When is simple interest actually used?", a: "Short-term consumer loans, some auto financing, treasury bills, and back-of-envelope estimates." },
      { q: "Is simple interest better for the borrower?", a: "Yes, all else equal — but posted rates for simple-interest products are often higher to make up for it." },
    ],
  },
  "paycheck": {
    howItWorks: [
      "Applies a single effective tax rate to gross annual salary and splits the result across your pay periods. Quick estimate — real paychecks stack federal, state, FICA, and often local taxes plus benefits deducted separately.",
      "Use it to sanity-check job offers or budget expected take-home. For exact numbers, refer to your latest pay stub.",
    ],
    example: "A $75,000 salary at a 22% effective tax rate leaves $58,500 net. Biweekly (26 periods) = $2,250.00 per paycheck, with $16,500 withheld over the year.",
    faqs: [
      { q: "Why doesn't my real paycheck match?", a: "Real withholding stacks federal, FICA (7.65%), state, sometimes local tax, plus insurance and retirement. This tool collapses all into one rate." },
      { q: "What effective rate should I use?", a: "Rough US estimate: 20–25% middle earners, 25–32% higher earners including FICA. Divide last year's total tax by gross for personal accuracy." },
      { q: "Does pay frequency change my paycheck?", a: "Total annual pay is the same; per-check amount differs. Weekly = 52, biweekly = 26, semi-monthly = 24, monthly = 12." },
    ],
  },
  "take-home-pay": {
    howItWorks: [
      "Take-home is gross income minus taxes, retirement contributions, insurance premiums, and other deductions.",
      "US 401(k) contributions reduce taxable income, so real take-home is often slightly higher than a naive subtraction — this tool keeps math simple.",
    ],
    example: "$6,000/mo gross with 25% tax, 5% retirement, and $200 health premium: $6,000 − $1,500 − $300 − $200 = $4,000.00 per month.",
    faqs: [
      { q: "Should I count 401(k) as take-home?", a: "For cash-flow budgeting, treat as deduction; for net worth, they still count. It's your money, just locked into retirement." },
      { q: "What deductions do people forget?", a: "Health premiums, HSA/FSA, life insurance, disability, parking, transit. Add up pay-stub deductions once for the full picture." },
      { q: "Do bonuses affect take-home differently?", a: "US bonuses are often withheld at a flat 22–37% supplemental rate, over-withholding for most people. Difference comes back at tax time." },
    ],
  },
  "income-tax": {
    howItWorks: [
      "US federal income tax is progressive: each dollar you earn is taxed at the rate for its bracket, not one flat rate on total income. This walks your taxable income through 2024 single-filer brackets.",
      "Result is federal income tax only — Social Security, Medicare, state, and local taxes are all separate.",
    ],
    example: "On $80,000 taxable income (single filer, 2024): federal tax is $12,653.00, effective rate 15.82%, after-tax income $67,347.00.",
    faqs: [
      { q: "Marginal vs effective rate?", a: "Marginal is your last dollar's bracket (22% or 24% for middle earners). Effective is total tax divided by total income and always lower." },
      { q: "Does this account for deductions?", a: "No. Enter your taxable income (after standard or itemized deduction) for a realistic result." },
      { q: "Why is my real bill different?", a: "State tax, FICA, credits, retirement contributions, HSA, and many other factors change the real number. This is a first-pass estimate." },
    ],
  },
  "sales-tax": {
    howItWorks: [
      "Sales tax is a percentage added to the subtotal at checkout. Multiply subtotal by rate for tax, add for total.",
      "US rates vary widely by state, county, and sometimes city.",
    ],
    example: "$100 subtotal at 8.25% = $8.25 tax, $108.25 total.",
    faqs: [
      { q: "How do I find my local rate?", a: "Check your state department of revenue website — most have a ZIP lookup for combined state + local rate." },
      { q: "Is sales tax charged on everything?", a: "No — many states exempt groceries, prescription drugs, and some clothing. Rules vary by state." },
    ],
  },
  "tip": {
    howItWorks: [
      "Multiply bill by desired tip percent, add to bill, divide by number of people if splitting.",
      "US customary is 15–20% for standard service, 20–25% for excellent. Tipping is smaller or optional in most of Europe and Asia.",
    ],
    example: "$50 bill × 18% = $9.00 tip → $59.00 total. Split between 2 people: $29.50 each.",
    faqs: [
      { q: "Tip on pre-tax or post-tax?", a: "Convention is pre-tax. Many people tip on the total for simplicity. On big bills it matters; on small ones it's cents." },
      { q: "Do I tip on delivery fees?", a: "The delivery fee usually goes to the platform, not the driver. Tip the driver separately — 15–20% of the food order is baseline." },
      { q: "Good tip on takeout?", a: "10% for takeout that involves prep and packing; nothing expected for simple counter service in many regions." },
    ],
  },
  "roi": {
    howItWorks: [
      "ROI (return on investment) is a single percentage: (Final Value − Initial Cost) / Initial Cost.",
      "It doesn't account for time — a 50% return in 1 year is very different from 50% in 10 years — so pair with CAGR for longer holdings.",
    ],
    example: "$1,000 investment now worth $1,500: ROI = ($1,500 − $1,000) / $1,000 = 50.00%.",
    faqs: [
      { q: "What's a 'good' ROI?", a: "Depends on time and risk. Stock market averages ~10%/year long-term; short-term projects vary. Compare to risk-free rate and alternatives." },
      { q: "ROI vs CAGR?", a: "ROI is total percent gain. CAGR is annualized — the equivalent yearly return producing the same result." },
    ],
  },
  "retirement": {
    howItWorks: [
      "Projected balance combines your current savings growing at the assumed return plus monthly contributions compounding on top over years to retirement.",
      "Small changes in assumed return move the final number a lot over 20–40 years — try a range (5%, 7%, 9%) to see the spread.",
    ],
    example: "$20,000 saved, $500/month, 7% annual return, 30 years to retirement: projected balance ≈ $772,315.45.",
    faqs: [
      { q: "Is 7% return realistic?", a: "It's the rough long-term US stock market average. Actual results vary — historical does not guarantee future." },
      { q: "How much should I save?", a: "Rule of thumb: save 15% of gross income including employer match, starting early. Adjust upward if you started late." },
      { q: "Does inflation affect these numbers?", a: "Yes. This gives nominal dollars. For purchasing power, subtract expected inflation (~3%/yr) from the return." },
    ],
  },
  "401k": {
    howItWorks: [
      "Balance grows from combined annual contributions (yours + employer match) compounding at assumed return over your working years.",
      "Assumes constant salary and contribution. Real salaries usually rise, so actual balances are often higher.",
    ],
    example: "$70,000 salary, 8% employee + 4% employer match, 7% return, 25 years: ≈ $531,291.92.",
    faqs: [
      { q: "Should I always take the full employer match?", a: "Yes — it's a 100% immediate return on that portion. Not contributing enough to get the full match is leaving free money." },
      { q: "Traditional vs Roth 401(k)?", a: "Traditional: contributions reduce taxable income now, tax on withdrawal. Roth: after-tax now, tax-free later. Roth wins if you'll be in a higher bracket at retirement." },
      { q: "What's the 2024 contribution limit?", a: "$23,000 under 50, extra $7,500 catch-up at 50+. Employer match doesn't count toward your limit." },
    ],
  },
  "amortization": {
    howItWorks: [
      "An amortization schedule breaks each monthly payment into how much went to interest vs principal, plus the remaining balance.",
      "Early payments are heavily interest because interest accrues on the outstanding balance. As the balance drops, more goes to principal.",
    ],
    example: "$200,000 loan at 6% for 30 years: monthly payment $1,199.10. Year 1 interest $11,933.19, principal $2,456.02, ending balance $197,543.98.",
    faqs: [
      { q: "Why so little principal in year 1?", a: "Interest is calculated on the outstanding balance monthly. Balance is highest at the start, so interest eats most of the payment." },
      { q: "How do extra payments help?", a: "Every dollar of extra principal saves all future interest that dollar would have accrued — often several dollars over 30 years." },
    ],
  },
  "car-loan": {
    howItWorks: [
      "Sale price minus down payment and trade-in equals amount financed; fixed monthly payment covers principal + interest over the term.",
      "Terms usually run 36–72 months. Longer cuts monthly payment but stretches interest and can leave you 'underwater' longer.",
    ],
    example: "$30,000 car, $3,000 down, no trade-in, 7.5% APR, 5 years: finances $27,000, monthly payment $541.02, total interest $5,461.48.",
    faqs: [
      { q: "Should I take a longer term?", a: "Only if you can't afford the shorter one. Longer costs more overall and raises underwater risk." },
      { q: "Is dealership financing a good deal?", a: "Sometimes — especially manufacturer 0% APR promos. Otherwise, pre-approval from your credit union gives leverage and often a better rate." },
      { q: "Does the calculator include tax and fees?", a: "No — uses negotiated price. Add tax, title, registration, and fees if rolling them into the loan." },
    ],
  },
  "debt-payoff": {
    howItWorks: [
      "Given a balance, APR, and fixed monthly payment, calculates months to payoff and total interest paid.",
      "If your payment is less than the monthly interest accrual, the debt never pays off.",
    ],
    example: "$5,000 balance at 20% APR, $200/mo: pays off in 32.6 months (2.7 years). Total paid $6,521.71, of which $1,521.71 is interest.",
    faqs: [
      { q: "Fastest way to pay off multiple debts?", a: "Avalanche (highest APR first — saves most interest) or snowball (smallest balance first — momentum). Avalanche is mathematically optimal." },
      { q: "Does making more than the minimum help?", a: "Enormously — every extra dollar saves future interest. Even $25 extra per month can shave months off." },
    ],
  },
  "credit-card-interest": {
    howItWorks: [
      "Credit card interest is calculated daily on the outstanding balance and compounded monthly. Small payments mean most goes to interest and the balance barely moves.",
      "This assumes a fixed monthly payment; real cards let you pay a percentage-based minimum that keeps you in debt for decades.",
    ],
    example: "$3,000 at 22% APR, $100/month: takes about 44 months and costs $1,395.30 in interest — nearly half the original balance again.",
    faqs: [
      { q: "Why is credit card debt so hard to pay off?", a: "High APRs (18–29%) plus low minimums (1–3%) mean minimums barely dent principal. Doubling or tripling dramatically speeds payoff." },
      { q: "Should I do a balance transfer?", a: "A 0% intro APR transfer helps if you pay it off before the intro ends. Watch for transfer fees (3–5%)." },
      { q: "Does paying twice a month help?", a: "Slightly — reduces average daily balance. Paying a larger total matters far more than splitting it." },
    ],
  },
  "savings-goal": {
    howItWorks: [
      "Given target, current balance, expected annual return, and months available, calculates the monthly deposit needed.",
      "Higher returns mean smaller required deposits, but higher-return accounts carry more risk. For short-term goals (<3 yrs), a high-yield savings or CD is safer than stocks.",
    ],
    example: "To reach $10,000 in 36 months, starting with $1,000 at 4% return: about $232.38 per month.",
    faqs: [
      { q: "Realistic savings return?", a: "Short-term: 4–5% in high-yield savings or CD (2024–26). Long-term (5+ yrs): 6–8% average in a diversified portfolio." },
      { q: "Multiple goals at once?", a: "Yes — separate 'buckets' keep each on track. Automate transfers on payday." },
    ],
  },
  "investment-return": {
    howItWorks: [
      "CAGR (Compound Annual Growth Rate) is the constant annual return equivalent to your actual gain over multiple years.",
      "Formula: CAGR = (End/Start)^(1/years) − 1.",
    ],
    example: "$1,000 → $1,500 over 3 years: CAGR = 14.47% — the equivalent constant yearly return.",
    faqs: [
      { q: "CAGR vs ROI?", a: "ROI is total percent gain (here 50%); CAGR is annualized (14.47%/yr). CAGR is fairer for comparing investments of different lengths." },
      { q: "Does CAGR hide volatility?", a: "Yes — it treats the journey as a straight line. Two investments with equal CAGRs can feel very different if one is stable and the other swings." },
    ],
  },
  "inflation": {
    howItWorks: [
      "Inflation erodes purchasing power over time. Shows nominal future value (dollars needed to match today's power) and purchasing power of a future amount.",
      "US long-run average ~3%/year; individual years range from near 0% to over 8%.",
    ],
    example: "$1,000 today at 3% inflation over 20 years: nominal future value $1,806.11, or purchasing power of $553.68 in today's terms.",
    faqs: [
      { q: "Why does inflation matter for retirement?", a: "A $1M nominal retirement at 3% over 30 years is ~$412k in today's power. Plan long-term goals in real (inflation-adjusted) dollars." },
      { q: "How is inflation measured?", a: "US Bureau of Labor Statistics tracks CPI-U — a weighted basket of goods and services. Personal experience varies with spending." },
    ],
  },
  "break-even": {
    howItWorks: [
      "Break-even units = Fixed Costs / (Price − Variable Cost per unit). The volume where total revenue exactly covers all costs — no profit, no loss.",
      "Anything sold beyond break-even is profit. Below it, fixed costs subsidize each unit.",
    ],
    example: "$10,000 fixed cost, $25 price, $10 variable cost per unit: break-even = 10,000 / 15 = 666.67 units.",
    faqs: [
      { q: "Round up or down?", a: "Up — you can't sell a fraction of a unit. 666.67 means 667 units to fully cover costs." },
      { q: "How does break-even help pricing?", a: "It shows the minimum volume that makes a price viable. If unreachable, raise price, cut fixed costs, or lower variable cost." },
    ],
  },
  "currency-converter": {
    howItWorks: [
      "Live rates from open.er-api.com, updated at least once daily. Multiplies your source amount by the source→target rate.",
      "Bank and credit-card conversions typically differ by 1–3% from mid-market rates because of spreads and fees.",
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
    ],
    example: "$80 item at 25% off: save $80 × 25% = $20, sale price $60.00.",
    faqs: [
      { q: "Is 'up to 70% off' really 70% off?", a: "Rarely on everything — usually just the most-discounted single item. Most items on a sale are marked down less than the headline." },
      { q: "Stacking discounts?", a: "Multiply, don't add. 20% + extra 10% = 0.80 × 0.90 = 72% of original, or 28% total off — not 30%." },
    ],
  },
  "vat": {
    howItWorks: [
      "VAT (Value Added Tax) is charged on goods and services in many countries. Add VAT to a net price or extract VAT from a gross price.",
      "Gross = Net × (1 + rate); Net = Gross / (1 + rate).",
    ],
    example: "£100 net at 20% VAT: VAT £20, gross £120. Extracting VAT from £120 gross gives back £20 VAT and £100 net.",
    faqs: [
      { q: "VAT vs sales tax?", a: "VAT is collected at every supply-chain stage (with credits for VAT already paid); sales tax only at final consumer sale. Consumer effect looks similar." },
      { q: "Include VAT in B2B pricing?", a: "B2B in VAT-registered transactions: usually excluding VAT. B2C: typically inclusive." },
    ],
  },
  "profit-margin": {
    howItWorks: [
      "Profit = Revenue − Cost. Margin = Profit / Revenue. Markup = Profit / Cost. Different ratios — don't confuse them.",
      "50% margin corresponds to 100% markup. Retailers think markup; accountants think margin.",
    ],
    example: "$100 revenue on $60 cost: $40 profit, 40.00% margin, 66.67% markup.",
    faqs: [
      { q: "Margin or markup — which matters?", a: "Margin for financial analysis — fraction of every sales dollar that is profit. Markup is useful when setting prices from cost." },
      { q: "Healthy margin?", a: "Wildly industry-dependent. Grocery: 1–3%. Software: 70%+. Restaurants: 3–5%. Compare to industry benchmarks." },
    ],
  },
  "rent-affordability": {
    howItWorks: [
      "The 30% rule: spending more than 30% of gross monthly income on rent stretches your budget uncomfortably.",
      "Some frameworks use net income (lower cap). High-cost cities sometimes push 35–40% at the cost of thinner discretionary spending.",
    ],
    example: "$5,000/month gross income: 30% rule caps rent at $1,500.00/month.",
    faqs: [
      { q: "Where does the 30% rule come from?", a: "Originated in US federal housing policy in the 1980s. It's a guideline, not a legal limit." },
      { q: "Include utilities in the 30%?", a: "Some versions do. If rent includes utilities, use as-is; if separate, budget 5–10% of income on top." },
      { q: "What if my income is variable?", a: "Use the 12-month average and be conservative. Lenders often require documented base income." },
    ],
  },
  "down-payment": {
    howItWorks: [
      "Multiply purchase price by down-payment percentage to see cash needed at closing.",
      "US benchmark: 20% avoids PMI on conventional loans. FHA allows 3.5%; VA and USDA allow 0% for eligible borrowers.",
    ],
    example: "$400,000 home at 20% down = $80,000.00 cash at closing.",
    faqs: [
      { q: "Do I need 20% down?", a: "No — FHA at 3.5%, some conventional at 3–5%, VA/USDA at 0%. Lower down usually means PMI and a higher monthly payment." },
      { q: "Budget for closing costs too?", a: "Yes — usually 2–5% of the loan amount: appraisal, inspection, title, prepaid taxes and insurance." },
    ],
  },
  "bmi": {
    howItWorks: [
      "BMI = weight (kg) / height² (m²). A population-level screening tool grouping adults into underweight, normal, overweight, and obese.",
      "Does not distinguish muscle from fat, so it misclassifies muscular athletes as overweight. Use waist-to-hip ratio or body-fat % for a nuanced individual picture.",
    ],
    example: "175 cm, 70 kg adult: BMI = 70 / (1.75)² = 22.9 — Normal (18.5–24.9).",
    faqs: [
      { q: "BMI categories?", a: "<18.5 underweight, 18.5–24.9 normal, 25–29.9 overweight, ≥30 obese (WHO adult cutoffs)." },
      { q: "Is BMI accurate?", a: "For population screening, yes. For individuals — especially athletes, elderly, or Asian populations — it can mislead. Combine with waist for clarity." },
      { q: "How do I lower my BMI?", a: "Only two levers: lose weight or safely grow taller. Modest calorie deficit + strength training is the standard approach." },
    ],
  },
  "calorie": {
    howItWorks: [
      "Uses Mifflin-St Jeor to estimate BMR (calories at rest), then multiplies by an activity factor to estimate TDEE.",
      "Common targets: subtract 250–500 kcal/day for slow loss; add 200–500 for lean gain.",
    ],
    example: "30-year-old, 175 cm, 70 kg male, moderate activity: BMR 1,649 kcal, TDEE 2,556 kcal. -500 for loss (2,056); +300 for gain (2,856).",
    faqs: [
      { q: "Which equation is most accurate?", a: "Mifflin-St Jeor is the best simple formula for most adults. Katch-McArdle can be better if you know body-fat %." },
      { q: "How often should I recalculate?", a: "Every 5–10 lb (2–5 kg) weight change or when activity changes. Body adapts, so numbers drift." },
      { q: "Why am I not losing?", a: "Common causes: overestimated activity, underestimated portions, decreased NEAT (fidgeting). Track intake for a week." },
    ],
  },
  "bmr": {
    howItWorks: [
      "BMR is calories you'd burn lying in bed all day. Driven by lean body mass, age, and sex.",
      "Mifflin-St Jeor: 10×kg + 6.25×cm − 5×age + (5 male, −161 female).",
    ],
    example: "30-year-old, 175 cm, 70 kg male: BMR = 700 + 1093.75 − 150 + 5 = 1,649 kcal/day.",
    faqs: [
      { q: "BMR vs TDEE?", a: "BMR is calories at rest. TDEE adds activity — walking, exercise, digestion — 1.2× to 1.9× BMR." },
      { q: "Can I raise my BMR?", a: "Modestly — muscle is metabolically active, so resistance training helps offset age-related BMR decline." },
    ],
  },
  "body-fat": {
    howItWorks: [
      "US Navy method uses tape-measured circumferences (neck, waist, hip for women) and height in a validated regression.",
      "Less accurate than DEXA but requires only a tape measure — great for tracking progress at home.",
    ],
    example: "175 cm male, 40 cm neck, 85 cm waist: estimated body fat ≈ 15.4%.",
    faqs: [
      { q: "How accurate is the Navy method?", a: "Typically within ±3% of DEXA for average bodies; less accurate at extremes." },
      { q: "Healthy body fat range?", a: "Men 10–20% healthy, athletes 6–13%. Women 18–28% healthy, athletes 14–20%. Essential fat 3–5% men, 10–13% women." },
      { q: "Measure over clothes?", a: "Bare skin, tape snug but not compressing. Same time of day (ideally morning) for consistent tracking." },
    ],
  },
  "ideal-weight": {
    howItWorks: [
      "Devine formula: 50 kg (men) or 45.5 kg (women) plus 2.3 kg per inch over 5 feet (60 in).",
      "Used in clinical medication dosing. Not a definitive personal target — muscular or larger-framed people can healthily weigh more.",
    ],
    example: "175 cm male (~68.9 in): 50 + 2.3 × (68.9 − 60) ≈ 70.5 kg (155.3 lb).",
    faqs: [
      { q: "Is Devine the best formula?", a: "Most cited in medical dosing. For a healthy range, BMI 18.5–24.9 for your height gives a wider, more realistic band." },
      { q: "Aim for exactly this weight?", a: "No — reference point, not a target. Frame size, muscle, and composition matter more." },
    ],
  },
  "macros": {
    howItWorks: [
      "Splits a daily calorie target into grams of protein, carbs, and fat. Protein and carbs = 4 kcal/g, fat = 9 kcal/g.",
      "Common splits: 30/40/30 balanced, 40/20/40 low-carb, 40/35/25 high-protein. Protein 1.6–2.2 g/kg supports muscle maintenance in a deficit.",
    ],
    example: "2,200 kcal balanced (30/40/30) = 165 g protein, 220 g carbs, 73 g fat.",
    faqs: [
      { q: "How much protein do I need?", a: "Sedentary ~0.8 g/kg. Active or in deficit: 1.6–2.2 g/kg. Elderly: higher end to preserve muscle." },
      { q: "Low-carb better for weight loss?", a: "Weight loss depends on calorie deficit, not carb ratio. Low-carb helps some people control appetite, but scale moves on calories." },
      { q: "Hit macros exactly?", a: "±10% is fine. Trends matter more than any single day." },
    ],
  },
  "pregnancy-due-date": {
    howItWorks: [
      "Naegele's rule adds 280 days (40 weeks) to the first day of your last menstrual period.",
      "About 4% of babies arrive on the exact predicted date — most within a 2-week window on either side.",
    ],
    example: "LMP on January 1 → estimated due date around October 8 of the same year (280 days later).",
    faqs: [
      { q: "How accurate is Naegele's rule?", a: "Accurate for regular 28-day cycles. First-trimester ultrasound is more accurate and used to confirm." },
      { q: "What if my cycle is longer than 28 days?", a: "Add extra days. A 32-day cycle usually ovulates on day 18, shifting the due date about 4 days later." },
      { q: "When is a baby 'full term'?", a: "37 to 42 weeks. 39–40 is optimal." },
    ],
  },
  "ovulation": {
    howItWorks: [
      "Ovulation typically occurs 14 days before the next period. Estimates ovulation day and the 5-day fertile window leading up to it.",
      "Sperm lives up to 5 days; the egg ~24 hours. Peak odds are the day before and day of ovulation.",
    ],
    example: "28-day cycle starting Jan 1: ovulation around Jan 15, fertile window Jan 10–15.",
    faqs: [
      { q: "How accurate is calendar-based prediction?", a: "Good for very regular cycles. Otherwise, LH ovulation kits or basal body temperature tracking are much more accurate." },
      { q: "Can I get pregnant outside the fertile window?", a: "Very unlikely but possible — cycle irregularity shifts timing. Use contraception if you're not trying to conceive." },
    ],
  },
  "water-intake": {
    howItWorks: [
      "Rough rule: 35 ml per kg of body weight per day, plus ~12 ml per minute of exercise. Total needs include water from food and other drinks.",
      "Hot climate, altitude, breastfeeding, or fever raise needs. Pale-yellow urine is a better indicator than any formula.",
    ],
    example: "70 kg person + 30 min exercise: 70 × 35 + 30 × 12 = 2,810 ml/day (~2.8 L, ~12 cups).",
    faqs: [
      { q: "Is '8 glasses a day' accurate?", a: "Rough baseline for average adults; underestimates for active or heavier people. Body-weight estimates are more personalized." },
      { q: "Does coffee count?", a: "Yes — despite mild diuretic effect, coffee and tea net-hydrate." },
      { q: "Can I drink too much?", a: "Rarely, but extreme overhydration can cause hyponatremia. Usually only at multiple liters per hour." },
    ],
  },
  "heart-rate-zones": {
    howItWorks: [
      "Max HR ≈ 220 − age (rough but widely used). Training zones are percentages of max, each targeting different adaptations.",
      "Z1–Z2: aerobic base and fat burn. Z3: tempo. Z4: threshold. Z5: VO2max — short intervals only.",
    ],
    example: "30-year-old: max HR ≈ 190 bpm. Zone 2 (60–70%) = 114–133 bpm — sweet spot for aerobic base.",
    faqs: [
      { q: "Is 220 − age accurate?", a: "Within ~10 bpm for most; individual max can vary ±20. Lab or field max-effort test for precision." },
      { q: "Why train in Zone 2?", a: "Builds mitochondrial density and fat oxidation without recovery cost. Most endurance training happens here." },
      { q: "How often for Z4/Z5?", a: "1–2 sessions/week for non-elite athletes. More adds injury and burnout risk without proportional gains." },
    ],
  },
  "pace": {
    howItWorks: [
      "Pace = time / distance. Convert to km/h by dividing 60 by min/km.",
      "Plan target race pace or check what pace your recent run works out to.",
    ],
    example: "5 km in 25 min = 5:00 min/km, or 12.0 km/h.",
    faqs: [
      { q: "Good pace for a beginner?", a: "6:30–8:00 min/km is normal for easy runs. Focus on distance and consistency before speed." },
      { q: "Convert min/km to min/mile?", a: "Multiply by 1.609. So 5:00 min/km ≈ 8:03 min/mile." },
    ],
  },
  "one-rep-max": {
    howItWorks: [
      "Epley formula estimates 1RM from a lighter set: 1RM ≈ Weight × (1 + Reps/30).",
      "Most accurate for 2–10 reps. Above 10, endurance dominates and the estimate drifts high.",
    ],
    example: "100 kg × 5 reps: 1RM ≈ 100 × (1 + 5/30) = 116.7 kg.",
    faqs: [
      { q: "Best 1RM formula?", a: "Epley and Brzycki are the most-used, both within a few kg in the 3–8 rep range." },
      { q: "Should I test true 1RM?", a: "Only if experienced with a spotter and fully warmed up. Estimated 1RM is enough for most programming." },
    ],
  },
  "whr": {
    howItWorks: [
      "WHR = waist / hip circumference. Quick indicator of abdominal fat, which correlates with cardio risk better than BMI alone.",
      "Men: <0.90 low, 0.90–0.99 moderate, ≥1.0 high. Women: <0.80 low, 0.80–0.84 moderate, ≥0.85 high (WHO).",
    ],
    example: "Male, 85 cm waist / 95 cm hips: WHR = 0.89 — low-risk band.",
    faqs: [
      { q: "How do I measure waist correctly?", a: "Narrowest part between ribs and hips (usually at the navel). Stand relaxed, exhale normally, tape snug." },
      { q: "WHR vs BMI?", a: "For cardiovascular risk, WHR (and waist alone) predicts outcomes better. Both together give the fullest picture." },
    ],
  },
  "steps-to-calories": {
    howItWorks: [
      "Rough conversion: calories per step ≈ 0.00057 × body-weight kg. Actual burn varies with pace, incline, and stride.",
      "'10,000 steps' is not medical — it started as a 1960s Japanese pedometer marketing target. Studies show most benefit by ~7,000–8,000.",
    ],
    example: "10,000 steps × 70 kg ≈ 399 kcal.",
    faqs: [
      { q: "Why do trackers give different numbers?", a: "They use different formulas factoring heart rate, GPS pace, personal profile. Step-based single-input estimates are more approximate." },
      { q: "Is walking as good as running?", a: "Walking builds base fitness and burns real calories, just less per minute. Total energy expenditure matters more than intensity for weight loss." },
    ],
  },
  "sleep-cycle": {
    howItWorks: [
      "Sleep cycles average 90 minutes and include light, deep, and REM stages. Waking at end of a cycle feels more refreshing than mid-cycle.",
      "This tool assumes ~14 min to fall asleep, then adds full 90-min cycles.",
    ],
    example: "Bedtime 23:00: ideal wakes ≈ 03:44 (3 cycles), 05:14 (4), 06:44 (5), 08:14 (6 = 9h).",
    faqs: [
      { q: "Is 90 min exactly right?", a: "Population average — individuals range 70–110. Experiment 10–20 min on either side of the suggestion." },
      { q: "How much sleep do I need?", a: "Most adults do best on 7–9 hours (5–6 cycles). Consistency of bedtime often matters more than exact duration." },
    ],
  },
  "celsius-fahrenheit": {
    howItWorks: [
      "°F = °C × 9/5 + 32. °C = (°F − 32) × 5/9.",
      "0 °C is water's freezing point (32 °F); 100 °C is boiling at sea level (212 °F).",
    ],
    example: "0 °C converts to 32.00 °F.",
    faqs: [
      { q: "Easy mental conversion?", a: "Double °C and add 30 gives a rough °F (accurate ~±3 in everyday ranges)." },
      { q: "At what temperature are C and F the same?", a: "−40 — this is the only point where the two scales meet." },
    ],
  },
  "meters-feet": {
    howItWorks: [
      "1 meter = 3.28084 feet. To convert feet to meters, multiply feet by 0.3048.",
      "Useful for height, room dimensions, and altitude conversions.",
    ],
    example: "1 meter = 3.2808 feet.",
    faqs: [
      { q: "How tall am I in feet if I'm 180 cm?", a: "1.80 m × 3.2808 ≈ 5.91 ft, or roughly 5' 11\"." },
      { q: "Where is the meter used?", a: "Every country except the US, Liberia, and Myanmar officially uses meters." },
    ],
  },
  "feet-inches": {
    howItWorks: [
      "1 foot = 12 inches. Multiply feet by 12 to get inches.",
      "Useful for height and construction measurements in US customary units.",
    ],
    example: "1 foot = 12 inches.",
    faqs: [
      { q: "Feet-and-inches to decimal feet?", a: "Divide the inches part by 12 and add. 5' 6\" = 5 + 6/12 = 5.5 ft." },
      { q: "Why 12 inches to a foot?", a: "Historical — 12 is highly divisible (2, 3, 4, 6), making fractions easy without a calculator." },
    ],
  },
  "meters-inches": {
    howItWorks: [
      "1 meter = 39.3701 inches.",
      "Common in metric-to-imperial conversions for parts, materials, and screen sizes.",
    ],
    example: "1 meter = 39.3701 inches.",
    faqs: [
      { q: "How many inches in 2 meters?", a: "About 78.74 inches, or 6 ft 6.74 in." },
      { q: "Meters vs feet for TVs?", a: "TV sizes are always in inches regardless of country — this converter helps if you know the diagonal in metric." },
    ],
  },
  "kg-lbs": {
    howItWorks: [
      "1 kilogram = 2.20462 pounds. Divide pounds by 2.20462 to get kilograms.",
      "Standard conversion for body weight and shipping.",
    ],
    example: "1 kg = 2.2046 lb.",
    faqs: [
      { q: "Convert 70 kg to lb?", a: "70 × 2.20462 ≈ 154.32 lb." },
      { q: "Why is a pound 0.454 kg?", a: "The pound is defined internationally as exactly 0.45359237 kg since 1959." },
    ],
  },
  "miles-km": {
    howItWorks: [
      "1 mile = 1.60934 km. Divide km by 1.60934 to get miles.",
      "Used for road distances and speed limits.",
    ],
    example: "1 mile = 1.6093 km.",
    faqs: [
      { q: "Mental conversion?", a: "Multiply miles by 1.6, or km by 0.62 — accurate to within a few percent for everyday numbers." },
      { q: "Why do the US and UK still use miles?", a: "Historical inertia. UK road signs and speed limits remain in miles despite metric adoption elsewhere." },
    ],
  },
  "speed-converter": {
    howItWorks: [
      "Converts between km/h, mph, m/s, and knots. Common factors: 1 mph ≈ 1.609 km/h; 1 m/s = 3.6 km/h; 1 knot ≈ 1.852 km/h.",
      "Knots are standard for aviation and shipping worldwide.",
    ],
    example: "100 km/h ≈ 62.14 mph.",
    faqs: [
      { q: "Why use knots?", a: "Historically tied to a nautical mile (1 minute of latitude), which is more useful than miles for navigation." },
      { q: "Is m/s a standard speed unit?", a: "Yes — it's the SI unit for speed, used in scientific and engineering contexts." },
    ],
  },
  "area-converter": {
    howItWorks: [
      "Converts between square feet, square meters, acres, hectares, and square miles.",
      "1 acre = 43,560 sq ft = 4,046.86 sq m. 1 hectare = 10,000 sq m ≈ 2.471 acres.",
    ],
    example: "1,000 sq ft ≈ 92.90 sq m.",
    faqs: [
      { q: "Acres vs hectares?", a: "1 hectare ≈ 2.47 acres. Hectares are metric, common outside the US and UK for land measurement." },
      { q: "How big is 1 acre?", a: "About the size of an American football field without the end zones." },
    ],
  },
  "volume-converter": {
    howItWorks: [
      "Converts between liters, gallons (US), fluid ounces, milliliters, cups, and cubic units.",
      "1 US gallon = 3.7854 L. Note UK gallons (Imperial) are larger at 4.546 L.",
    ],
    example: "1 liter ≈ 0.2642 US gallons.",
    faqs: [
      { q: "US vs UK gallons?", a: "US gallon = 3.785 L; UK gallon = 4.546 L. Watch for this in recipes and fuel efficiency." },
      { q: "Cup sizes vary by country?", a: "Yes — US cup = 240 ml, metric cup = 250 ml, UK cup = 284 ml. Recipes usually specify one." },
    ],
  },
  "pressure-converter": {
    howItWorks: [
      "Converts between bar, PSI, atm, Pa, and mmHg. Common: 1 bar ≈ 14.504 PSI; 1 atm = 1.01325 bar ≈ 14.696 PSI.",
      "PSI is common in US tire and hydraulic pressures; bar and atm in industrial contexts.",
    ],
    example: "1 bar ≈ 14.50 PSI.",
    faqs: [
      { q: "Tire pressure — bar or PSI?", a: "Both. US owners' manuals typically show PSI; European show bar. 32 PSI ≈ 2.2 bar." },
      { q: "What's 1 atmosphere?", a: "Standard atmospheric pressure at sea level: 101,325 Pa, 1.01325 bar, or 14.696 PSI." },
    ],
  },
  "energy-converter": {
    howItWorks: [
      "Converts between joules, calories, kilocalories, watt-hours, BTU, and kilojoules.",
      "1 kcal = 4.184 kJ ≈ 4,184 J. Food 'calories' are actually kilocalories (kcal).",
    ],
    example: "1,000 J ≈ 239.01 cal.",
    faqs: [
      { q: "Are food calories the same as science calories?", a: "No — 1 food 'Calorie' (capital C) = 1,000 scientific calories = 1 kilocalorie." },
      { q: "What's a BTU?", a: "British Thermal Unit — energy to raise 1 lb water by 1 °F. Common in HVAC. 1 BTU ≈ 1,055 J." },
    ],
  },
  "timezone-converter": {
    howItWorks: [
      "Converts a time in one timezone to another using IANA timezone data, accounting for daylight saving.",
      "Useful for scheduling calls or knowing what time it is where a colleague or family member lives.",
    ],
    example: "14:30 in America/New_York = 19:30 in Europe/London (during BST — the offset differs when both are on standard or DST).",
    faqs: [
      { q: "Does it handle DST?", a: "Yes — IANA timezone data includes historical and current DST rules per region." },
      { q: "Why does the UK show 'GMT+1' in summer?", a: "British Summer Time (BST) is GMT + 1. GMT itself doesn't shift; the country switches zones seasonally." },
    ],
  },
  "length-converter": {
    howItWorks: [
      "Converts between meters, feet, inches, kilometers, miles, yards, and centimeters. Base conversion factors: 1 m = 3.28084 ft; 1 mi = 1.60934 km.",
      "Covers most everyday length units in a single tool.",
    ],
    example: "1 meter = 3.28084 feet.",
    faqs: [
      { q: "Nautical mile vs mile?", a: "Nautical mile = 1,852 m (~1.15 statute miles). Used in aviation and shipping." },
      { q: "Furlongs and rods?", a: "Rare historical units: 1 furlong = 660 ft = 220 yd; 1 rod = 16.5 ft. Kept for horse racing distances." },
    ],
  },
  "weight-converter": {
    howItWorks: [
      "Converts between kilograms, pounds, ounces, grams, tonnes (metric tons), and short/long tons.",
      "1 kg = 2.20462 lb. 1 tonne = 1,000 kg. 1 short ton (US) = 2,000 lb ≈ 907.18 kg.",
    ],
    example: "1 kg = 2.204624 lb.",
    faqs: [
      { q: "Ton vs tonne?", a: "Tonne is metric (1,000 kg). US short ton is 2,000 lb; UK long ton is 2,240 lb — always specify." },
      { q: "Weight vs mass?", a: "Physics: mass is intrinsic (kg); weight is force = mass × gravity (N). Everyday use conflates them." },
    ],
  },
  "temperature-converter": {
    howItWorks: [
      "Converts between Celsius, Fahrenheit, and Kelvin.",
      "K = °C + 273.15. °F = °C × 9/5 + 32. Absolute zero = 0 K = −273.15 °C = −459.67 °F.",
    ],
    example: "25 °C = 77.00 °F.",
    faqs: [
      { q: "Why Kelvin?", a: "SI absolute scale — no negative values, starts at absolute zero. Standard in scientific and engineering work." },
      { q: "Rankine scale?", a: "Fahrenheit's absolute version, rare outside US engineering. 0 R = absolute zero." },
    ],
  },
  "data-converter": {
    howItWorks: [
      "Converts between bytes, kilobytes, megabytes, gigabytes, and terabytes.",
      "Binary (1 KB = 1,024 B) vs decimal (1 kB = 1,000 B) — the calculator uses binary (1024).",
    ],
    example: "1 GB = 1,024.00 MB (binary).",
    faqs: [
      { q: "Why is my hard drive smaller than advertised?", a: "Manufacturers use decimal GB (10^9). Operating systems often report in binary (2^30 = 1.074 × 10^9), so a '1 TB' drive shows as ~931 GiB." },
      { q: "Bits vs bytes?", a: "1 byte = 8 bits. Networks quote in bits/sec (Mbps); files usually in bytes (MB)." },
    ],
  },
  "angle-converter": {
    howItWorks: [
      "Converts degrees ↔ radians. π radians = 180 degrees.",
      "Radians are natural units for calculus and trigonometry; degrees dominate everyday and engineering use.",
    ],
    example: "180° = π radians ≈ 3.141593 rad.",
    faqs: [
      { q: "When are radians used?", a: "Calculus, physics, and any equations involving derivatives of trig functions — the math is cleaner in radians." },
      { q: "Gradians?", a: "A less-common unit where 400 gradians = 360°. Used in surveying in some countries." },
    ],
  },
  "fuel-converter": {
    howItWorks: [
      "Converts fuel efficiency between MPG (US or UK) and L/100km. They're inversely related.",
      "Formula: L/100km = 235.215 / MPG (US) or 282.481 / MPG (UK).",
    ],
    example: "30 MPG (US) ≈ 7.84 L/100km.",
    faqs: [
      { q: "Why does the UK MPG differ?", a: "UK gallon (4.546 L) is larger than US (3.785 L), so UK MPG numbers are always higher for the same real efficiency." },
      { q: "Which format is easier to compare?", a: "L/100km scales linearly with fuel use — halving it halves fuel cost. MPG is inverted, so improvements are less intuitive." },
    ],
  },
  "age": {
    howItWorks: [
      "Calculates age in years, months, and days from a date of birth to today.",
      "Accounts for leap years so results match how ages are reported officially.",
    ],
    example: "Pick a birthdate; the tool returns years, months, and days since that date.",
    faqs: [
      { q: "Does it account for time zones?", a: "Uses your local browser date, so results reflect your current calendar day." },
      { q: "How is age in months calculated?", a: "Full months elapsed since the previous birthday; the remainder becomes days." },
    ],
  },
  "percentage": {
    howItWorks: [
      "Solve common percentage questions: what is X% of Y, X is what % of Y, and X is Y% of what?",
      "Formula for 'X% of Y' = X ÷ 100 × Y.",
    ],
    example: "20% of 200 = 40.",
    faqs: [
      { q: "How do I calculate percent change?", a: "((New − Old) / Old) × 100 — use the dedicated Percentage Change tool." },
      { q: "Percentage points vs percent change?", a: "Percentage points is the raw subtraction (5% → 8% is 3 pp); percent change is the relative move ((8−5)/5 = 60%)." },
    ],
  },
  "gpa": {
    howItWorks: [
      "Weighted average of grade points by credit hours. Enter each course as 'grade,credits' — one per line — and the tool converts grades to standard 4.0-scale points.",
      "A+ = 4.0, A = 4.0, A− = 3.7, B+ = 3.3, B = 3.0, B− = 2.7, and so on.",
    ],
    example: "For A,3 + B+,4 + A−,3 + B,3: GPA = 3.485 on 13 total credits.",
    faqs: [
      { q: "Does my school use +/− grades?", a: "US colleges are split; K-12 rarely uses them. Adjust rows to match your school's system." },
      { q: "How is a weighted GPA different?", a: "Weighted GPAs give bonus points for honors/AP courses. This tool computes unweighted 4.0 GPA." },
      { q: "How do I convert my GPA to a percentage?", a: "Rough conversion: US 4.0 ≈ 90–100%. Precise mapping depends on the school." },
    ],
  },
  "date-diff": {
    howItWorks: [
      "Absolute days between two dates. Handy for age, project timelines, and countdown planning.",
      "Uses calendar days including start and end, or excluding — check your use case.",
    ],
    example: "Pick two dates; tool returns the absolute number of days between them.",
    faqs: [
      { q: "Does it count both endpoints?", a: "Returns the difference — so Jan 1 to Jan 2 = 1 day." },
      { q: "How many days from birth to a given age?", a: "Multiply years by 365.25 to include leap-year averaging." },
    ],
  },
  "days-until": {
    howItWorks: [
      "Counts calendar days from today until a future date.",
      "Useful for deadlines, exams, weddings, holidays, and countdowns.",
    ],
    example: "Pick a future date; result shows the number of days from today.",
    faqs: [
      { q: "Does it include weekends?", a: "Yes — counts every calendar day. For working days, use a workday calculator instead." },
      { q: "Can I count backward?", a: "Enter a past date and use the Date Difference tool for absolute value." },
    ],
  },
  "random-number": {
    howItWorks: [
      "Generates uniformly-distributed random integers in the range [min, max].",
      "Runs in your browser using Math.random().",
    ],
    example: "min=1, max=100, count=1: returns a single integer 1–100 (e.g. 18).",
    faqs: [
      { q: "Is this cryptographically secure?", a: "No — Math.random() is fine for games, draws, and sampling. Use crypto.getRandomValues() for security-critical needs." },
      { q: "Can I generate multiple numbers?", a: "Yes — set 'count' higher than 1 to get a list." },
    ],
  },
  "password": {
    howItWorks: [
      "Generates strong passwords with a configurable length and character set.",
      "Runs entirely in-browser — nothing is transmitted or stored.",
    ],
    example: "Set length and toggles for uppercase, lowercase, numbers, and symbols to produce a random secure password.",
    faqs: [
      { q: "Is this safe to use?", a: "Yes — generation happens locally with your browser's crypto random source. Nothing leaves your device." },
      { q: "What's a good password length?", a: "16+ characters with mixed types is a strong baseline. Length matters more than complexity for entropy." },
      { q: "Should I use a password manager?", a: "Yes — even the strongest passwords are only useful if unique per account. A manager stores them all encrypted." },
    ],
  },
  "countdown-timer": {
    howItWorks: [
      "A countdown to any date and time you set. Updates live in the browser.",
      "Handy for deadlines, launches, birthdays, or celebrations.",
    ],
    example: "Pick a target date and time; the timer shows days, hours, minutes, and seconds remaining.",
    faqs: [
      { q: "Does it work offline?", a: "Once the page has loaded, yes — everything runs in your browser." },
      { q: "Can I share the countdown?", a: "Right now the target is only set locally. Bookmark the page after entering your date to return to it." },
    ],
  },
  "stopwatch": {
    howItWorks: [
      "Millisecond-precision stopwatch running in your browser with start, pause, lap, and reset.",
      "No login, no ads-in-the-way — just click and time.",
    ],
    example: "Click Start; the display counts up. Lap records split times; Reset zeroes it out.",
    faqs: [
      { q: "How accurate is it?", a: "Uses performance.now() for sub-millisecond precision. Real accuracy is limited by browser scheduling — a few ms on a busy page is normal." },
      { q: "Does it keep running if I switch tabs?", a: "Yes — the clock keeps ticking. Browsers can throttle background tabs, but final elapsed time is calculated correctly." },
    ],
  },
  "qr-code": {
    howItWorks: [
      "Generates a QR code from any text, URL, or contact info. Rendered in-browser as SVG.",
      "Great for sharing links, WiFi credentials, or app downloads.",
    ],
    example: "Enter a URL and the tool renders a scannable QR code you can screenshot or download.",
    faqs: [
      { q: "What's the max QR code capacity?", a: "Depends on error correction — up to ~4,296 alphanumeric characters. Long text produces dense codes that are harder to scan." },
      { q: "Can QR codes contain viruses?", a: "The code itself just encodes text — but the URL it points to can be malicious. Preview the URL before opening." },
    ],
  },
  "word-counter": {
    howItWorks: [
      "Counts characters (with and without spaces), words, sentences, and estimates reading time at ~200 wpm.",
      "Runs entirely in your browser.",
    ],
    example: "Empty text returns zeros. Paste any content to get instant counts.",
    faqs: [
      { q: "What counts as a 'word'?", a: "Runs of non-whitespace separated by spaces or punctuation. Numbers and hyphenated compounds count as one word." },
      { q: "How is reading time calculated?", a: "Assumes ~200 words per minute — average adult silent reading pace. Actual speed varies with content difficulty." },
    ],
  },
  "roman-numeral": {
    howItWorks: [
      "Converts between Roman numerals and Arabic numbers.",
      "Roman numerals use I, V, X, L, C, D, M with subtractive notation (IV = 4, IX = 9).",
    ],
    example: "1994 → MCMXCIV. Break it down: M (1000) + CM (900) + XC (90) + IV (4).",
    faqs: [
      { q: "What's the largest Roman numeral?", a: "Classical Roman numerals only go up to 3,999 (MMMCMXCIX). Larger values use vinculum notation." },
      { q: "Why do we still use Roman numerals?", a: "Book chapters, movie sequels, clock faces, and monarch numbering." },
    ],
  },
  "weighted-grade": {
    howItWorks: [
      "Weighted average where each grade contributes proportionally to its weight percentage. Total weights should add to 100.",
      "Enter each item as 'grade,weight' — one per line.",
    ],
    example: "For 85,30 + 92,30 + 78,40: weighted average = (85×30 + 92×30 + 78×40) / 100 = 84.30%.",
    faqs: [
      { q: "Do weights have to add to 100?", a: "They should for a percent-weighted average. The tool normalizes if they don't, but check your grading policy." },
      { q: "Can I include a not-yet-taken exam?", a: "Enter your target grade for the missing item to see the overall result if you hit that target." },
    ],
  },
  "timecard": {
    howItWorks: [
      "Calculates hours worked between clock-in and clock-out (crossing midnight if needed), subtracts unpaid break minutes, and multiplies by hourly rate for total pay.",
      "Useful for freelancers, contractors, or checking your paycheck against your timesheet.",
    ],
    example: "09:00–17:30 with 30 min break at $20/hr: 8.00 hours worked, $160.00 pay.",
    faqs: [
      { q: "Does it handle overnight shifts?", a: "Yes — enter a clock-out earlier than clock-in and it counts the crossing-midnight hours." },
      { q: "What about overtime multipliers?", a: "This uses a flat rate. For 1.5× overtime, use the Employee Overtime tool." },
    ],
  },
  "meeting-planner": {
    howItWorks: [
      "Given a time in a base timezone and a list of other timezones, shows the local time in each — including day-of-week for cross-date meetings.",
      "Uses IANA timezone data with correct DST handling.",
    ],
    example: "10:00 America/New_York (EDT) = 06:00 America/New_York in EDT? No wait — result shows 11:00 London, 19:00 Tokyo, 20:00 Sydney depending on current DST status.",
    faqs: [
      { q: "Does it show day-of-week?", a: "Yes — cross-date meetings (e.g. late US → early Asia) are clearly labeled." },
      { q: "Can I add many timezones?", a: "Enter them comma-separated as IANA names — no strict limit." },
    ],
  },
  "fraction": {
    howItWorks: [
      "Add, subtract, multiply, or divide two fractions and get the result in reduced form plus decimal.",
      "Uses GCD reduction to always return the simplest form.",
    ],
    example: "1/2 + 1/3 = 5/6 (≈ 0.833333).",
    faqs: [
      { q: "What if the result is negative?", a: "The sign stays with the numerator (e.g. −1/2). Fully reduced." },
      { q: "Mixed numbers?", a: "Convert to improper first — 1 1/2 = 3/2 — then enter as 3/2." },
    ],
  },
  "ratio": {
    howItWorks: [
      "Solves proportions of the form A:B = C:?. Cross-multiply: ? = (B × C) / A.",
      "Common in scaling recipes, mixing ratios, and comparing proportions.",
    ],
    example: "3:4 = 9:?  →  ? = 4 × 9 / 3 = 12.",
    faqs: [
      { q: "Ratio vs fraction?", a: "A ratio compares two quantities (3:4); a fraction expresses one over another (3/4). Same math." },
      { q: "Scaling a recipe?", a: "Yes — for double batch of any ingredient with a 3:4 ratio, keep both sides scaled proportionally." },
    ],
  },
  "square-root": {
    howItWorks: [
      "Returns the principal (non-negative) square root of a non-negative real number.",
      "Uses IEEE-754 double precision, accurate to about 15 significant digits.",
    ],
    example: "√2 ≈ 1.41421356.",
    faqs: [
      { q: "What about negative numbers?", a: "Square roots of negatives are complex numbers (imaginary unit i). This tool only handles reals." },
      { q: "How to estimate √ without a calculator?", a: "Find the nearest perfect squares. √50 is between √49 (7) and √64 (8), closer to 7." },
    ],
  },
  "percentage-change": {
    howItWorks: [
      "Percent change = (New − Old) / Old × 100. Negative means a decrease, positive an increase.",
      "Distinct from percentage-point change and from absolute difference.",
    ],
    example: "Old 100, New 125: (125 − 100) / 100 × 100 = 25.0000%.",
    faqs: [
      { q: "Percent change vs percentage points?", a: "Percent change is relative (25% here); percentage points is subtraction of percentages (5% to 8% = 3 pp)." },
      { q: "Can percent change exceed 100%?", a: "Yes — a doubling is +100%; tripling is +200%. Decreases are capped at −100%." },
    ],
  },
  "scientific": {
    howItWorks: [
      "A full expression-based calculator supporting +, −, ×, ÷, exponents, roots, log/ln, trig, factorial, and constants.",
      "Runs entirely in the browser — no data leaves your device.",
    ],
    example: "Type an expression like sin(30) + sqrt(9) and press = for the result.",
    faqs: [
      { q: "Does trig use degrees or radians?", a: "Toggle between degrees (default for everyday use) and radians (for calculus contexts)." },
      { q: "Can it store variables?", a: "Basic Ans-style recall of the last result. For more complex work, use a spreadsheet or programming REPL." },
    ],
  },
  "average": {
    howItWorks: [
      "Arithmetic mean: sum of values divided by count.",
      "Best when data is symmetric and roughly bell-shaped. Skewed distributions are better summarized by median.",
    ],
    example: "Numbers: 10, 20, 30, 40. Mean = 100 / 4 = 25.000000.",
    faqs: [
      { q: "Mean vs median?", a: "Mean is affected by outliers; median (middle value) is robust. For income data, median is preferred." },
      { q: "Weighted mean?", a: "Use the Weighted Grade tool for values with unequal importance." },
    ],
  },
  "median-mode": {
    howItWorks: [
      "Median is the middle value (average of two middle values for even count). Mode is the most frequent value.",
      "Both are more robust than the mean when data has outliers or clusters.",
    ],
    example: "1,2,2,3,4: sorted median = 2, mode = 2 (occurs twice).",
    faqs: [
      { q: "Can there be multiple modes?", a: "Yes — bimodal or multimodal distributions. The tool returns all modes with the same top frequency." },
      { q: "What if all values are unique?", a: "Every value is technically a mode; conventionally we say 'no mode'." },
    ],
  },
  "std-dev": {
    howItWorks: [
      "Standard deviation measures spread around the mean. Sample (s) divides by n−1; population (σ) divides by n.",
      "Larger σ = more spread. About 68% of a normal distribution lies within 1σ of the mean.",
    ],
    example: "5,7,3,7,10,2: mean 5.67, σ (pop) 2.69, s (sample) 2.94.",
    faqs: [
      { q: "Sample vs population — which do I want?", a: "Sample (s) if your data is a sample of a larger population — usually the answer. Population (σ) only if you have the entire population." },
      { q: "Variance vs std dev?", a: "Variance = σ². Std dev is variance's square root, which has the same units as the data — usually more interpretable." },
    ],
  },
  "quadratic": {
    howItWorks: [
      "Solves ax² + bx + c = 0 using the quadratic formula: x = (−b ± √(b² − 4ac)) / (2a).",
      "Discriminant b² − 4ac reveals the nature of the roots: positive → two real roots, zero → one repeated real root, negative → two complex.",
    ],
    example: "1x² − 3x + 2 = 0: x₁ = 2, x₂ = 1.",
    faqs: [
      { q: "What if the discriminant is negative?", a: "Roots are complex conjugates. The tool reports them as a ± bi." },
      { q: "Can a be zero?", a: "Then it's not quadratic — it's linear (bx + c = 0). Solve as x = −c/b." },
    ],
  },
  "prime": {
    howItWorks: [
      "A prime number is a natural number > 1 with no divisors other than 1 and itself. Test by trying divisors up to √n.",
      "The first primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.",
    ],
    example: "97 is prime — no divisor from 2 to 9 divides it evenly (√97 ≈ 9.85).",
    faqs: [
      { q: "Is 1 prime?", a: "No, by modern convention. Primes are defined as > 1." },
      { q: "Largest known prime?", a: "Mersenne prime 2^82,589,933 − 1, discovered 2018 — over 24 million digits." },
    ],
  },
  "lcm-gcd": {
    howItWorks: [
      "GCD (greatest common divisor) is the largest integer that divides both. LCM (least common multiple) is the smallest positive integer both divide.",
      "Related: LCM(a,b) × GCD(a,b) = |a × b|.",
    ],
    example: "GCD(12, 18) = 6. LCM(12, 18) = 36.",
    faqs: [
      { q: "Where is GCD used?", a: "Reducing fractions to simplest form, cryptography (Euclidean algorithm), and scheduling repeating events." },
      { q: "Where is LCM used?", a: "Adding fractions with unlike denominators; finding when two cyclical events align." },
    ],
  },
  "exponent": {
    howItWorks: [
      "Computes a^n for real base and exponent.",
      "Negative exponents are reciprocals (a^-n = 1/a^n); fractional exponents are roots (a^(1/n) = ⁿ√a).",
    ],
    example: "2^10 = 1024.",
    faqs: [
      { q: "Zero to the zero?", a: "Conventionally 1 in combinatorics and computing (and this tool). Sometimes left undefined in pure math." },
      { q: "Very large exponents?", a: "Result may overflow to Infinity (>~1.8 × 10^308 in double precision)." },
    ],
  },
  "logarithm": {
    howItWorks: [
      "log_b(x) is the exponent y such that b^y = x. Any-base log = ln(x) / ln(b).",
      "Common bases: 10 (common log), e ≈ 2.718 (natural log).",
    ],
    example: "log₁₀(1000) = 3, because 10³ = 1000.",
    faqs: [
      { q: "When is natural log used?", a: "Calculus, growth/decay problems, and continuous compounding — the base e makes derivatives clean." },
      { q: "Log of a negative?", a: "Undefined in real numbers; complex in general. This tool expects positive arguments." },
    ],
  },
  "matrix": {
    howItWorks: [
      "Adds or multiplies two 2×2 matrices. Enter each row separated by ';', values by ','.",
      "Add: element-wise. Multiply: row × column dot products.",
    ],
    example: "[1,2;3,4] × [5,6;7,8] = [19,22;43,50].",
    faqs: [
      { q: "Matrix multiplication order matters?", a: "Yes — A × B ≠ B × A in general. Matrix multiplication is non-commutative." },
      { q: "Larger matrices?", a: "This tool handles 2×2 only. For larger, use a spreadsheet or Python/numpy." },
    ],
  },
  "base-converter": {
    howItWorks: [
      "Converts a number between arbitrary bases (2–36). Common: binary (2), octal (8), decimal (10), hex (16).",
      "Digits beyond 9 use letters A–Z, standard convention.",
    ],
    example: "255 in base 10 = FF in base 16.",
    faqs: [
      { q: "Why hex for colors?", a: "Two hex digits map to 0–255 exactly, one byte each for R, G, B — compact and unambiguous." },
      { q: "What's base 36?", a: "Uses 0–9 and A–Z, sometimes used to compress numeric IDs into shorter strings." },
    ],
  },
  "cups-to-grams": {
    howItWorks: [
      "Converts US cups to grams for common baking ingredients — flour, sugar, butter, etc. Weight depends on ingredient density, so 1 cup of flour ≠ 1 cup of sugar.",
      "For accuracy, weigh ingredients on a kitchen scale.",
    ],
    example: "1 cup of flour ≈ 125 g. Other ingredients vary — pick from the dropdown.",
    faqs: [
      { q: "Why do the same 'cup' weights differ online?", a: "Density of packed vs sifted, and different flour brands vary. Weighing is always more consistent than measuring by volume." },
      { q: "US cups vs metric cups?", a: "US = 240 ml, metric = 250 ml, UK = 284 ml. This tool uses US cups." },
    ],
  },
  "recipe-scaler": {
    howItWorks: [
      "Scales any ingredient amount by the ratio of desired to original servings.",
      "Note: cooking times don't scale linearly — a double batch takes longer than 2×.",
    ],
    example: "Recipe for 4 servings, scale to 6, ingredient 200 g: 200 × (6/4) = 300.00.",
    faqs: [
      { q: "Do I scale seasoning proportionally?", a: "Start with a smaller ratio (~75%) for salt, spices, and hot elements. Adjust to taste." },
      { q: "Does baking scale up cleanly?", a: "Trickier than cooking — chemistry-heavy recipes (breads, cakes) can misbehave. Best to run the original recipe multiple times." },
    ],
  },
  "oven-temp": {
    howItWorks: [
      "Converts between Fahrenheit, Celsius, and UK gas marks.",
      "Common: 350 °F = 177 °C = gas mark 4 (moderate).",
    ],
    example: "350 °F = 177 °C = gas mark 4.",
    faqs: [
      { q: "Fan/convection vs conventional?", a: "Fan ovens typically run ~20 °C (35 °F) hotter than a conventional oven at the same dial setting. Reduce the recipe temp accordingly." },
      { q: "Why does the UK use gas marks?", a: "Historical: many older UK ovens have a gas dial with marks 1–9 instead of a temperature dial." },
    ],
  },
  "baking-measure": {
    howItWorks: [
      "Converts between US baking measures: cups, tablespoons, teaspoons, and milliliters.",
      "1 cup = 16 tbsp = 48 tsp = 236.588 mL.",
    ],
    example: "1 US cup ≈ 15.997 tbsp (16 rounded).",
    faqs: [
      { q: "How many tsp in a tbsp?", a: "3 teaspoons in one tablespoon." },
      { q: "Are US and UK tablespoons the same?", a: "Close but not identical: US tbsp ≈ 14.79 mL, UK tbsp = 15 mL, Australian = 20 mL. Rarely enough to ruin a recipe." },
    ],
  },
  "cooking-time": {
    howItWorks: [
      "Estimates roasting time for meat based on weight-per-pound rules of thumb.",
      "This is a starting point — always use a meat thermometer to check internal temperature for doneness and safety.",
    ],
    example: "5 lb roast × 20 min/lb = 100 minutes.",
    faqs: [
      { q: "Safe internal temps?", a: "USDA: poultry 165 °F; ground meat 160 °F; whole cuts of beef/pork 145 °F + 3 min rest." },
      { q: "Does convection change the time?", a: "Yes — reduce by ~25% or drop temp by ~25 °F. Check earlier than the calculator suggests." },
    ],
  },
  "pour-calc": {
    howItWorks: [
      "How many servings you get from a bottle: total volume ÷ serving size.",
      "Standard wine pour is 150 mL (5 oz); a 750 mL bottle gives 5 pours.",
    ],
    example: "750 mL bottle at 150 mL per pour = 5.0 servings.",
    faqs: [
      { q: "Standard drink pour sizes?", a: "Wine 5 oz (150 mL), beer 12 oz (355 mL), spirit shot 1.5 oz (44 mL)." },
      { q: "How many glasses in a magnum?", a: "1.5 L magnum ÷ 150 mL = 10 pours." },
    ],
  },
  "paint-coverage": {
    howItWorks: [
      "Gallons needed = (sq ft × coats) / coverage rate per gallon. Typical coverage 300–400 sq ft/gal for smooth walls.",
      "Round up to the nearest whole gallon and account for touch-ups.",
    ],
    example: "400 sq ft × 2 coats ÷ 350 sq ft/gal = 2.29 gallons — buy 3 to have a touch-up reserve.",
    faqs: [
      { q: "What coverage rate should I use?", a: "Smooth interior walls: 350–400. Textured or first coat on new drywall: 250–300. Check the can." },
      { q: "Do I need a primer?", a: "Yes over bare drywall, previous dark colors, or stained surfaces. Primer coverage is separate." },
    ],
  },
  "tile": {
    howItWorks: [
      "Tiles needed = (area in sq ft ÷ tile size in sq ft) plus 10% waste for cuts and breakage.",
      "For complex layouts or diagonal patterns, allow 15–20% waste.",
    ],
    example: "100 sq ft with 1 sq ft tiles = 100 + 10% = 111 tiles.",
    faqs: [
      { q: "How much waste for a diagonal pattern?", a: "15–20% — more cuts mean more offcuts." },
      { q: "Round up per box?", a: "Yes — buy whole boxes and keep spares for future repairs." },
    ],
  },
  "concrete": {
    howItWorks: [
      "Volume = Length × Width × Thickness. Converted to cubic yards (US standard for concrete orders).",
      "1 cubic yard = 27 cubic feet. Order 5–10% extra for spillage and uneven ground.",
    ],
    example: "10 ft × 10 ft × 4 in thick = 100 × 0.333 = 33.3 cu ft = 1.23 cu yd.",
    faqs: [
      { q: "Order a full truck?", a: "Small pours (<1 cu yd) often use bagged mix. Larger pours: ready-mix trucks minimum ~1 cu yd, often 3+ minimum." },
      { q: "Depth for a driveway?", a: "4 in for cars, 6 in for trucks or heavy vehicles. Check local codes." },
    ],
  },
  "flooring": {
    howItWorks: [
      "Boxes needed = (room sq ft × 1.10 for waste) ÷ sq ft per box.",
      "Larger rooms or planks needing rip cuts may push waste to 12–15%.",
    ],
    example: "200 sq ft room ÷ 22 sq ft/box × 1.10 = 11 boxes.",
    faqs: [
      { q: "Do I need to acclimate flooring?", a: "Solid hardwood: yes, 3–7 days in the room. Engineered and vinyl: usually 24–48 hours. Follow manufacturer specs." },
      { q: "Round up?", a: "Always up. Leftover boxes are useful for future repairs." },
    ],
  },
  "wallpaper": {
    howItWorks: [
      "Rolls needed = (perimeter × wall height ÷ usable sq ft per roll) rounded up.",
      "Standard American double roll is 56 sq ft usable; single 27. Patterns with large repeats need more.",
    ],
    example: "40 ft perimeter × 8 ft height = 320 sq ft ÷ 56 sq ft/roll ≈ 6, plus 1 for pattern match = 7 rolls.",
    faqs: [
      { q: "What's a pattern match?", a: "Adjacent strips must line up horizontally — larger repeats waste more material." },
      { q: "Do I include doors and windows?", a: "Small openings: don't subtract (leaves room for error). Large openings: subtract the area from total." },
    ],
  },
  "square-footage": {
    howItWorks: [
      "Length × Width for rectangular rooms. Break L-shaped rooms into rectangles and sum.",
      "Useful for flooring, paint, tile, real-estate listings, and property tax.",
    ],
    example: "12 × 10 ft = 120.00 sq ft.",
    faqs: [
      { q: "Include closets?", a: "Usually yes for materials estimates; check your local real-estate convention for listings." },
      { q: "Irregular rooms?", a: "Divide into rectangles and triangles, calculate each, sum." },
    ],
  },
  "roofing": {
    howItWorks: [
      "A roofing 'square' is 100 sq ft. Roofing materials are ordered by the square.",
      "Add ~10% waste for cuts, hips, and valleys. Steeper pitches raise waste.",
    ],
    example: "2,000 sq ft roof area ≈ 22 squares (includes waste).",
    faqs: [
      { q: "How do I know my roof area?", a: "Multiply footprint by a pitch factor: 4/12 pitch ≈ 1.054×; 8/12 ≈ 1.202×; 12/12 ≈ 1.414×." },
      { q: "How many bundles of shingles per square?", a: "Standard 3-tab: 3 bundles per square. Architectural: 3–4." },
    ],
  },
  "fence": {
    howItWorks: [
      "Posts = (fence length ÷ post spacing) + 1 corner post. Panels = fence length ÷ post spacing.",
      "8 ft spacing is common for privacy fences; 6 ft for chain link.",
    ],
    example: "100 ft fence at 8 ft spacing: 14 posts (13 spans + 1 end + 1 buffer), 13 panels.",
    faqs: [
      { q: "Do I need gate posts?", a: "Yes — heavier duty for gates. Budget separately." },
      { q: "How deep should posts be?", a: "1/3 of post height below grade, in concrete. For a 6 ft fence, that's a 2–3 ft hole." },
    ],
  },
  "mulch": {
    howItWorks: [
      "Cubic yards = (sq ft × depth in inches) ÷ 324.",
      "3 inches is typical for weed suppression and moisture retention; 4+ for high-traffic beds.",
    ],
    example: "200 sq ft × 3 in = 600 ÷ 324 = 1.85 cu yd.",
    faqs: [
      { q: "Bulk vs bagged?", a: "Bulk (yards) is usually 30–50% cheaper per volume, delivered. Bags are easier for small jobs." },
      { q: "How often to reapply?", a: "Top up 1–2 in each spring as mulch decomposes." },
    ],
  },
  "fuel-cost": {
    howItWorks: [
      "Fuel cost for a trip = (miles ÷ MPG) × price per gallon.",
      "Simple, no adjustments for terrain or driving style — those can move the number ±10–20%.",
    ],
    example: "300 miles ÷ 28 MPG × $3.50/gal = $37.50.",
    faqs: [
      { q: "Highway or city MPG?", a: "Use the closer number to your trip. Combined works for mixed routes." },
      { q: "Include tolls?", a: "No — this is fuel only. Add tolls separately for total trip cost." },
    ],
  },
  "gas-mileage": {
    howItWorks: [
      "MPG = miles driven ÷ gallons used. Fill up, drive, fill up again to measure.",
      "Track over several tanks for a reliable average — one tank can be skewed by conditions.",
    ],
    example: "300 miles on 10 gallons = 30.00 MPG.",
    faqs: [
      { q: "Why is my MPG lower than the EPA sticker?", a: "EPA numbers assume steady speed and moderate conditions. Real-world driving (traffic, weather, cargo) can drop MPG 10–20%." },
      { q: "Best speed for MPG?", a: "Most cars are most efficient at 45–65 mph. Above 65, aerodynamic drag rises steeply." },
    ],
  },
  "car-payoff": {
    howItWorks: [
      "Same math as any amortized loan: given balance, APR, and monthly payment, solve for months to zero.",
      "If your payment is less than the monthly interest, the loan never pays off.",
    ],
    example: "$15,000 balance at 6% APR, $350/mo: about 48.4 months to payoff.",
    faqs: [
      { q: "Should I pay off early?", a: "Depends on interest rate. High-rate loans (>6%) usually worth paying down. Low-rate loans (<3%) — might be better to invest the extra." },
      { q: "Are there prepayment penalties?", a: "Most modern US auto loans have none — check your loan agreement to be sure." },
    ],
  },
  "tire-size": {
    howItWorks: [
      "Parses a tire spec like 225/45R17 into diameter and circumference.",
      "225 = section width mm, 45 = aspect ratio (%), R = radial, 17 = wheel diameter inches.",
    ],
    example: "225/45R17: overall diameter 634.3 mm (24.97 in), circumference 1,992.7 mm.",
    faqs: [
      { q: "Why does tire size matter for speedometer?", a: "Bigger diameter → speedo reads slower than actual speed. Changing tire size changes odometer readings too." },
      { q: "Load and speed rating?", a: "Numbers after size (e.g. 91V) indicate max load and speed. Replace only with equal or higher rated tires." },
    ],
  },
  "travel-time": {
    howItWorks: [
      "Time = Distance ÷ Speed. This tool converts to hours and minutes.",
      "Assumes constant speed — real trips include stops, traffic, and speed variation.",
    ],
    example: "300 miles at 60 mph = 5h 0m.",
    faqs: [
      { q: "Include stops?", a: "Add 10–15 minutes per 2–3 hours for restroom and fuel. This tool is pure driving time." },
      { q: "Speed varies on the trip?", a: "Use average — total distance / total time. This is a rough planning estimate." },
    ],
  },
  "flight-time": {
    howItWorks: [
      "Time = Distance ÷ Speed. Aviation uses nautical miles and knots by convention.",
      "This is pure cruise-time; add ~30 min for taxi, takeoff, climb, and descent for a real flight.",
    ],
    example: "2000 nautical miles at 500 knots = 3h 29m cruise.",
    faqs: [
      { q: "Nautical mile vs statute mile?", a: "Nautical mile = 1.15 statute miles. Aviation standard because it maps to 1 minute of latitude." },
      { q: "Add taxi/climb?", a: "Yes — real block times are typically 30–60 min longer than pure cruise. Winds also matter (headwind slows, tailwind speeds)." },
    ],
  },
  "jet-lag": {
    howItWorks: [
      "Rough rule: 1 day of recovery per timezone crossed, worse for eastward travel.",
      "Individual variation is huge. Sleep discipline, sunlight exposure, and hydration all matter.",
    ],
    example: "6 timezones crossed ≈ 6 days of full recovery.",
    faqs: [
      { q: "How can I reduce jet lag?", a: "Adjust sleep schedule 2–3 days before, get morning sunlight at destination, hydrate, avoid alcohol in-flight." },
      { q: "Eastward vs westward?", a: "Eastward is harder — you're shortening your day, fighting circadian rhythm. Westward extends the day and usually feels easier." },
    ],
  },
  "freelance-rate": {
    howItWorks: [
      "Annual income goal ÷ (working weeks × billable hours per week) = required hourly rate.",
      "Billable hours are usually 60–70% of worked hours; the rest is admin, marketing, and unpaid work.",
    ],
    example: "$100,000 goal ÷ (46 wks × 25 hrs) = $86.96/hour.",
    faqs: [
      { q: "How many billable hours per week is realistic?", a: "25–30 is a common sustainable target. Full 40 billable rarely lasts long-term." },
      { q: "Should I add taxes and benefits?", a: "Yes — freelancers cover self-employment tax, health insurance, retirement. Add ~30% to a target salary before dividing." },
    ],
  },
  "invoice-total": {
    howItWorks: [
      "Subtotal minus discount, plus tax on the discounted amount = grand total.",
      "Standard invoice math.",
    ],
    example: "$1,000 subtotal, 8% tax, 0 discount = $1,000 × 1.08 = $1,080.00.",
    faqs: [
      { q: "Tax on the discount?", a: "Standard is tax on the post-discount amount. Confirm your jurisdiction's rules." },
      { q: "Include shipping in taxable base?", a: "Depends on state — many US states tax shipping if it's not separately stated as a distinct fee." },
    ],
  },
  "markup": {
    howItWorks: [
      "Selling price = cost × (1 + markup%). Markup is different from margin — 60% markup is not 60% margin.",
      "60% markup on $40 = $64 sale price; margin on that sale = $24/$64 ≈ 37.5%.",
    ],
    example: "$40 cost × (1 + 60%) = $64.00 selling price.",
    faqs: [
      { q: "Markup vs margin?", a: "Markup is profit as a % of cost; margin is profit as a % of selling price. Higher markups always give lower margins for the same profit." },
      { q: "Standard retail markup?", a: "Wildly variable: grocery 5–15%, clothing 100–300%, jewelry 200–500%. Depends on turnover and category norms." },
    ],
  },
  "break-even-point": {
    howItWorks: [
      "Break-even revenue = Fixed Costs ÷ Contribution Margin %. Contribution margin is what's left after variable costs.",
      "This is the revenue level where you're neither profiting nor losing money.",
    ],
    example: "$10,000 fixed costs ÷ 40% contribution margin = $25,000.00 in revenue to break even.",
    faqs: [
      { q: "Revenue-based vs unit-based break-even?", a: "Both are useful. Units give a sales target; revenue gives a dollar target. Same underlying math." },
      { q: "What raises break-even?", a: "Higher fixed costs, lower contribution margin. Cutting fixed costs is often the fastest path down." },
    ],
  },
  "overtime": {
    howItWorks: [
      "US FLSA typical rule: hours over 40/week are paid at 1.5× (time-and-a-half). This tool applies that to your hourly rate.",
      "Some states or jobs have different rules — always check your specific policy.",
    ],
    example: "$22/hr × 40 regular = $880. 8 overtime hours × $33 = $264. Total: $1,144.00.",
    faqs: [
      { q: "Are salaried employees eligible for overtime?", a: "Depends on FLSA exemption status. Non-exempt hourly and some salaried employees qualify; exempt executives, professionals, and admins usually don't." },
      { q: "Weekend or holiday premiums?", a: "Not required by federal law unless total weekly hours exceed 40. Company policy or union contracts may add extra premiums." },
    ],
  },
  "business-loan": {
    howItWorks: [
      "Same amortization math as a personal loan. Small business loans typically run 3–10 years.",
      "SBA loans, term loans, and equipment financing all follow this basic math with different rates and terms.",
    ],
    example: "$50,000 at 8% APR over 5 years: monthly payment $1,013.82.",
    faqs: [
      { q: "Are business loan interest payments deductible?", a: "Yes — business loan interest is generally tax-deductible as an operating expense. Consult a CPA for specifics." },
      { q: "Should I take fixed or variable rate?", a: "Fixed is predictable — easier for cash-flow planning. Variable can be cheaper initially but risks rising with rates." },
    ],
  },
  "dog-years": {
    howItWorks: [
      "Dog age in human years depends on size and breed, but a simple approximation: first year = 15 human, second = 9 more, then 4–5 per year after.",
      "Small dogs age slower than large dogs after middle age.",
    ],
    example: "5-year-old dog ≈ 15 + 9 + 3×5 = 57 human years (rough small/medium approximation).",
    faqs: [
      { q: "Is '1 dog year = 7 human years' accurate?", a: "No — it's a shortcut that overstates in the first two years and understates in old age. Puppy year one is closer to 15." },
      { q: "Does breed matter?", a: "Yes — great danes and other giant breeds age faster; tiny breeds like chihuahuas live longer." },
    ],
  },
  "cat-years": {
    howItWorks: [
      "Cats age fast early: year 1 ≈ 15 human, year 2 ≈ +9, then ~4 per year after.",
      "Indoor cats generally live longer than outdoor cats and reach older equivalent 'human' ages.",
    ],
    example: "5-year-old cat ≈ 15 + 9 + 3×4 = 36 human years.",
    faqs: [
      { q: "Longest-lived cat?", a: "Creme Puff, verified at 38 years — that's over 160 in human equivalents." },
      { q: "When is a cat 'senior'?", a: "Around age 10–11 in real years, roughly 55+ in human equivalent." },
    ],
  },
  "shoe-size": {
    howItWorks: [
      "Converts between US, UK, and EU sizing systems. Roughly: EU = US + 33, UK = US − 1 (men's).",
      "Women's sizing offsets differently — always check brand-specific guides.",
    ],
    example: "US Men 9 ≈ UK 8 ≈ EU 42.",
    faqs: [
      { q: "Are men's and women's sizes different?", a: "Yes — US women's is roughly 1.5 sizes larger than men's for the same physical foot length." },
      { q: "How do I measure my foot at home?", a: "Trace your foot on paper, measure heel to longest toe. Compare to a size chart for your target brand." },
    ],
  },
  "pizza-size": {
    howItWorks: [
      "Pizza area grows with the square of the diameter, so a 16\" pizza is nearly double the area of a 12\", not one-third larger.",
      "Compare cost per square inch to find the best deal.",
    ],
    example: "12\" pizza area ≈ 113 in²; 16\" pizza area ≈ 201 in² — the 16\" is 1.78× larger.",
    faqs: [
      { q: "Why does the big pizza feel like such a good deal?", a: "Because area scales as diameter², a small size bump is a big area bump. A 20% larger diameter = 44% more pizza." },
      { q: "How many people does a large feed?", a: "Rough rule: 3 slices per adult. A 16\" pizza (8 slices) feeds about 2–3." },
    ],
  },
  "love-compat": {
    howItWorks: [
      "A pseudo-random 'compatibility' score derived from the letter values of two names. It's entertainment, not science.",
      "Same inputs always produce the same number — deterministic.",
    ],
    example: "'Alex' + 'Sam' → 26% ❤ (result stable across runs).",
    faqs: [
      { q: "Is this real?", a: "No — it's a fun toy. Real compatibility has nothing to do with letter values." },
      { q: "Why the same result every time?", a: "The hash is deterministic. Change the spelling to change the number." },
    ],
  },
  "birthday-countdown": {
    howItWorks: [
      "Days from today until the next occurrence of your birthday (this year or next).",
      "Helpful for planning parties or making a wish.",
    ],
    example: "Pick a birth date; result shows days until the next birthday.",
    faqs: [
      { q: "Does it count today?", a: "If today is the birthday, it counts as 0. Otherwise the next occurrence." },
      { q: "Leap-year birthdays?", a: "Feb 29 usually rounds to Feb 28 or Mar 1 in non-leap years — the tool picks Feb 28 by default." },
    ],
  },
  "zodiac": {
    howItWorks: [
      "Returns the Western zodiac sign based on birth date using standard tropical astrology cutoffs.",
      "12 signs, each covering about 30 days of the calendar.",
    ],
    example: "Pick a birth date; result names your Western zodiac sign (e.g. Leo, Virgo).",
    faqs: [
      { q: "What about Chinese zodiac?", a: "This tool uses Western tropical astrology only. Chinese zodiac uses a 12-year animal cycle instead." },
      { q: "What if I'm born on a cusp?", a: "Cusp days (near sign boundaries) can vary by astrology tradition. Different sources may give different answers by a day." },
    ],
  },
  "numerology": {
    howItWorks: [
      "Life-path number is calculated by summing all digits of a birthdate (or numeric letter values of a name) and reducing to a single digit.",
      "Entertainment/tradition — no scientific basis.",
    ],
    example: "'Ada Lovelace' → life-path 9.",
    faqs: [
      { q: "Which numerology system?", a: "This uses Pythagorean (Western) letter values 1–9. Chaldean systems use different mappings." },
      { q: "What do master numbers mean?", a: "11, 22, and 33 are traditionally kept un-reduced. This tool reduces to a single digit by default." },
    ],
  },
  "bac": {
    howItWorks: [
      "Widmark formula estimates blood-alcohol content from body weight, biological sex, drinks consumed, and hours since first drink.",
      "Rough estimate only. Actual BAC depends on food, medications, individual metabolism, and drink strength.",
    ],
    example: "175 lb male, 3 standard drinks, 2 hours since first drink: estimated BAC 0.100% — above the US 0.08% legal limit.",
    faqs: [
      { q: "What's a 'standard drink'?", a: "US: 14 g pure alcohol = 12 oz beer @ 5%, 5 oz wine @ 12%, or 1.5 oz spirits @ 40%." },
      { q: "Is this legally accurate?", a: "No — it's an estimate. Individual metabolism, medications, food, and drink strength all shift the real number. Never rely on BAC estimates to decide to drive." },
      { q: "How long until my BAC is 0?", a: "Alcohol clears at ~0.015%/hr on average. A 0.10% BAC needs ~6–7 hours to fully clear." },
    ],
  },
};
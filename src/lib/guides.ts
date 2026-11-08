// Long-form guides. Inline links to calculators use {{calc:slug|link text}}.
// Every figure quoted in these guides was computed, not estimated by eye.

export interface GuideSection {
  heading?: string;
  paragraphs: string[];
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: GuideSection[];
  related: string[];
  disclaimer: string;
  updated: string; // ISO year-month, shown as "Month YYYY"
  readMinutes: number;
}

export const GUIDES: Guide[] = [
  {
    slug: "how-compound-interest-works",
    title: "How Compound Interest Actually Works, With Real Numbers",
    description:
      "Compound interest is easy to explain and hard to feel. What $10,000 and $200 a month turn into over 10, 20 and 30 years, and why the early years look so unimpressive.",
    intro:
      "Most people can explain compound interest in one sentence and still underestimate what it does. The sentence is easy: you earn interest on your interest. The part that doesn't register is how long it takes before that sentence starts to matter.",
    sections: [
      {
        heading: "Start with $10,000 at 7%",
        paragraphs: [
          `Say you put $10,000 into something that grows 7% a year and you never touch it. After year one you have $10,700. In year two you earn 7% of $10,700, not of the original $10,000, so the gain is $749 instead of $700. That extra $49 is interest earned on interest, and it is the whole mechanism.`,
          `Compare that with simple interest, where you only ever earn 7% of the original $10,000, which is $700 a year. After 10 years simple interest leaves you with $17,000 and compounding leaves you with $19,671.51. After 20 years it is $24,000 against $38,696.84. After 30 years it is $31,000 against $76,122.55. You can check any of these in the {{calc:compound-interest|compound interest calculator}}. The figures here assume the interest is added once a year.`,
        ],
      },
      {
        heading: "Why the first decade feels underwhelming",
        paragraphs: [
          `Look at the 10-year numbers again. Compounding is ahead by $2,671.51, which is real money but hardly life-changing, and it's easy to decide the whole idea is overhyped. Then look at year 30, where the compounded balance is more than double the simple one. The curve is shallow for a long time and then it isn't. Most of the growth in a 30-year balance happens in the last ten years, because that is when the balance being multiplied is large.`,
          `It also explains why a few points of return matter more than they sound. The same $10,000 over 30 years becomes $32,433.98 at 4%, $76,122.55 at 7% and $174,494.02 at 10%. Three percentage points in either direction changes the end result by tens of thousands of dollars.`,
        ],
      },
      {
        heading: "The rule of 72",
        paragraphs: [
          `There's a quick way to estimate this without a calculator. Divide 72 by the annual return and you get the number of years it takes money to double. At 7%, 72 ÷ 7 is about 10.3 years. The exact figure is 10.24 years, so the shortcut is close. It drifts when rates are very high or very low, and it works best somewhere between about 6% and 10%.`,
          `It runs backwards too. If you need money to double in 6 years, you need roughly 12% a year, and that tells you something about how realistic the goal is.`,
        ],
      },
      {
        heading: "Time beats amount",
        paragraphs: [
          `The example that tends to change minds uses monthly saving instead of a lump sum. Put $200 a month into the same 7% account. After 10 years you'd have about $34,617. After 20 years, $104,185. After 30 years, $243,994, of which you contributed $72,000 yourself. The other $171,994 is growth.`,
          `Now picture two people. One saves $200 a month for 30 years. The other waits ten years and then saves the same $200 for 20 years. The second person pays in $24,000 less and finishes with $139,809 less. A ten-year head start outweighs almost anything you could do later by picking a slightly better investment. You can try your own numbers in the {{calc:savings-goal|savings goal calculator}}, or run a full projection with the {{calc:retirement|retirement calculator}}.`,
        ],
      },
      {
        heading: "The same math works against you",
        paragraphs: [
          `Compounding doesn't care which side of the transaction you're on. A credit card balance charged around 20% or more compounds the same way, which is why minimum payments barely move the balance. To see how long a card balance really lasts, the {{calc:credit-card-interest|credit card interest calculator}} will show you.`,
        ],
      },
      {
        heading: "What these numbers leave out",
        paragraphs: [
          `Everything above assumes a steady, guaranteed return, and nothing is steady or guaranteed. Real investments rise and fall, and a bad stretch early on can matter a great deal. The figures also ignore fees, taxes and inflation, all of which reduce what the money can actually buy. Treat the examples as a way to understand how the mechanism behaves, not as a forecast of what your own account will do.`,
        ],
      },
    ],
    related: ["compound-interest", "savings-goal", "retirement", "credit-card-interest", "investment-return"],
    disclaimer:
      "This guide is general education, not financial advice. For decisions involving real money, check your own situation with a licensed financial adviser.",
    updated: "2026-11",
    readMinutes: 5,
  },
  {
    slug: "bmi-explained",
    title: "BMI Explained: What the Number Can and Can't Tell You",
    description:
      "BMI is a quick ratio of weight to height, nothing more. Where it came from, how to read it, who it misleads, and what to look at alongside it.",
    intro:
      "Body mass index is probably the most quoted health number that most people don't really understand. It takes about ten seconds to work out, which is both why it's everywhere and why it gets trusted more than it should.",
    sections: [
      {
        heading: "How it's calculated",
        paragraphs: [
          `BMI is your weight divided by your height squared. In metric units that's kilograms divided by meters squared, so 70 kg at 175 cm works out to 70 ÷ 1.75² = 22.9. In pounds and inches the formula is 703 times your weight divided by your height squared: 180 lb at 5'9" (69 inches) is 703 × 180 ÷ 69² = 26.6. The {{calc:bmi|BMI calculator}} on this site does the arithmetic for you.`,
          `The World Health Organization's adult categories are below 18.5 for underweight, 18.5 to 24.9 for normal weight, 25 to 29.9 for overweight, and 30 or above for obesity. So that 26.6 lands in the overweight range and the 22.9 in the normal range.`,
        ],
      },
      {
        heading: "Where it came from",
        paragraphs: [
          `The formula comes from Adolphe Quetelet, a Belgian mathematician who was interested in describing averages across whole populations in the 1830s and 1840s. He wasn't trying to diagnose anyone. The name "body mass index" only arrived in 1972, when the physiologist Ancel Keys used it in a paper comparing ways to estimate body fatness in large groups. It caught on because it was cheap and needed nothing more than a scale and a tape measure.`,
          `That history matters. BMI was built to describe groups of people, and for that job it works reasonably well. It's a weaker tool when you point it at one individual.`,
        ],
      },
      {
        heading: "What it misses",
        paragraphs: [
          `BMI can't tell muscle from fat. A muscular person can land in the overweight range with very little body fat, and an older person who has lost muscle can land in the normal range while carrying more fat than the number suggests. It also says nothing about where the fat is stored, and fat around the abdomen is linked to more health risk than fat on the hips or thighs.`,
          `Age, sex and ethnicity matter too. Health risks can start rising at lower BMIs for people of South and East Asian descent, which is why some health bodies suggest lower cutoffs for those groups. For children and teenagers the adult categories don't apply at all. Pediatricians compare a child's BMI with growth charts for their age and sex.`,
        ],
      },
      {
        heading: "What to look at alongside it",
        paragraphs: [
          `Waist measurements cover the biggest blind spot. The {{calc:waist-to-height-ratio|waist-to-height ratio}} compares your waist with your height, with 0.5 (a waist half your height) as the common reference point, and the {{calc:whr|waist-to-hip ratio}} looks at fat distribution from another angle. {{calc:body-fat|Body fat estimates}} get closer to what BMI is trying to stand in for, though home methods are rough.`,
          `None of these replace measurements a clinician can take, such as blood pressure, blood sugar and cholesterol. Those say more about your health than any ratio of weight to height does.`,
        ],
      },
      {
        heading: "Using the number sensibly",
        paragraphs: [
          `Treat BMI as a first screen. If it falls outside the normal range, that's a reason for a conversation, not a verdict. If it falls inside the normal range, that doesn't prove everything is fine either. The useful question is what a doctor, who can see your whole picture, makes of it. If you're looking at weight targets, the {{calc:ideal-weight|ideal weight calculator}} gives formula-based ranges, and they carry the same limits.`,
        ],
      },
    ],
    related: ["bmi", "waist-to-height-ratio", "whr", "body-fat", "ideal-weight"],
    disclaimer:
      "This guide is general information, not medical advice. For questions about your own health or weight, talk to a doctor or registered dietitian.",
    updated: "2026-11",
    readMinutes: 4,
  },
  {
    slug: "reading-your-paycheck",
    title: "Reading Your Paycheck: Where the Money Goes Before You See It",
    description:
      "A line-by-line walk through a $75,000 salary: what comes out for payroll taxes, a 401(k) and federal income tax, and why your deposit is smaller than the offer letter.",
    intro:
      "An offer letter quotes an annual salary. Your bank account sees something noticeably smaller, every two weeks. The gap isn't a mistake, but the reasons are scattered across a pay stub in abbreviations that don't explain themselves.",
    sections: [
      {
        heading: "Start with gross pay",
        paragraphs: [
          `Take a $75,000 salary paid every two weeks, which is 26 paychecks a year. Gross pay per check is $75,000 ÷ 26 = $2,884.62. Everything that follows comes out of that figure. If you're paid twice a month instead, it's 24 checks and a slightly larger gross amount each time, though the annual totals work out the same.`,
        ],
      },
      {
        heading: "Payroll taxes come first and don't bend",
        paragraphs: [
          `Social Security takes 6.2% of your pay, which is $178.85 on this check. Medicare takes 1.45%, another $41.83. Together that's the 7.65% you'll see labeled FICA, $220.67 here. These percentages don't depend on your filing status or your W-4. Social Security stops applying once your earnings pass an annual cap that the Social Security Administration adjusts each year, which most people never reach. Your employer pays a matching amount on top, and it never appears on your stub.`,
        ],
      },
      {
        heading: "Your 401(k) lowers income tax, not payroll tax",
        paragraphs: [
          `Say you put 5% into a traditional 401(k). That's $144.23 per check. It reduces the income your federal income tax is calculated on, but Social Security and Medicare are still taken from the full gross amount, so the $220.67 above doesn't shrink. A Roth 401(k) works the other way around: it doesn't lower your income tax now, in exchange for tax-free withdrawals later. The {{calc:401k|401(k) calculator}} shows what these contributions add up to over time.`,
        ],
      },
      {
        heading: "Federal income tax is the part that varies",
        paragraphs: [
          `This is the line people can least predict, because it depends on your W-4 and on everything else in your tax situation. As a rough illustration, assume a single filer taking the 2026 standard deduction of $16,100. Start with $75,000, subtract the $3,750 you put into the 401(k) over the year and the $16,100 deduction, and you have about $55,150 of taxable income. Run that through the 2026 brackets and the federal tax comes to about $6,845 for the year, or roughly $263.27 per paycheck. The {{calc:income-tax|income tax calculator}} will do the same for your own taxable income.`,
        ],
      },
      {
        heading: "Putting it together",
        paragraphs: [
          `Gross pay of $2,884.62, minus $220.67 for Social Security and Medicare, minus $144.23 for the 401(k), minus $263.27 for federal income tax, leaves about $2,256.44 per paycheck. That's roughly 78% of gross. Health insurance premiums, state and local income tax and any other deductions come out of that as well, so a real take-home figure is often lower, sometimes by a few hundred dollars a month. The {{calc:paycheck|paycheck calculator}} and the {{calc:take-home-pay|take-home pay calculator}} let you plug in your own deductions.`,
        ],
      },
      {
        heading: "Withholding isn't the same as what you owe",
        paragraphs: [
          `What your employer withholds is an estimate built from your W-4. At tax time it's compared with what you actually owe, and the difference becomes your refund or your bill. A large refund means you lent the government money, interest-free, all year. A bill means too little was withheld. If either one surprises you, updating your W-4 is how you fix it.`,
        ],
      },
      {
        heading: "Two months a year feel richer",
        paragraphs: [
          `Biweekly pay means 26 checks, but there are only 12 months, so two months each year contain three paychecks. Budget from the 26-check total rather than from a three-check month, or you'll end up planning around money that doesn't arrive every month.`,
        ],
      },
    ],
    related: ["paycheck", "take-home-pay", "income-tax", "401k", "tip"],
    disclaimer:
      "This is an illustration, not tax advice. Your own paycheck depends on your W-4, your state, your benefits and other factors.",
    updated: "2026-11",
    readMinutes: 5,
  },
];

// The mortgage guide is a hand-built page, so it is listed here only for the index.
export const STATIC_GUIDES = [
  {
    href: "/guides/mortgage-vs-rent",
    title: "Mortgage vs. Rent: The Real Monthly Math",
    description:
      "Buying and renting aren't as different on paper as people assume. What actually changes month to month, and the costs that never show up in either number.",
    readMinutes: 4,
  },
];

export const GUIDE_BY_SLUG: Record<string, Guide> = Object.fromEntries(GUIDES.map((g) => [g.slug, g]));

export function formatUpdated(iso: string): string {
  const [y, m] = iso.split("-").map(Number);
  const names = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return `${names[(m || 1) - 1]} ${y}`;
}

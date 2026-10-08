import type { Calculator } from "./types";
import { fmt, money, n, round } from "./helpers";

const cat = "Engineering";

const COLOR_NAMES = ["Black", "Brown", "Red", "Orange", "Yellow", "Green", "Blue", "Violet", "Gray", "White"];

function decode4Band(R: number) {
  let exp = Math.floor(Math.log10(R)) - 1;
  let mantissa = Math.round(R / Math.pow(10, exp));
  if (mantissa >= 100) {
    mantissa = Math.round(mantissa / 10);
    exp += 1;
  }
  const d1 = Math.floor(mantissa / 10);
  const d2 = mantissa % 10;
  const band3 = exp >= 0 ? COLOR_NAMES[exp] : exp === -1 ? "Gold" : exp === -2 ? "Silver" : "—";
  return { band1: COLOR_NAMES[d1], band2: COLOR_NAMES[d2], band3, value: (d1 * 10 + d2) * Math.pow(10, exp) };
}

const AWG_CIRCULAR_MILS: Record<string, number> = {
  "14": 4107, "12": 6530, "10": 10380, "8": 16510, "6": 26240, "4": 41740, "2": 66360,
};

// Simplified NEC 60°C copper ampacity column, common residential/light-commercial gauges.
const AMPACITY_TABLE: [string, number][] = [
  ["14", 15], ["12", 20], ["10", 30], ["8", 40], ["6", 55], ["4", 70], ["2", 95],
];

const INSULATION_R_PER_INCH: Record<string, number> = {
  fiberglass: 3.2,
  "sprayfoam-closed": 6.5,
  "sprayfoam-open": 3.7,
  "rigid-xps": 5.0,
  "rigid-polyiso": 6.0,
};

export const engineering: Calculator[] = [
  {
    slug: "ohms-law",
    name: "Ohm's Law Calculator",
    category: cat,
    priority: "High",
    description: "Calculate resistance and power from voltage and current.",
    fields: [
      { name: "voltage", label: "Voltage", unit: "V", default: 12 },
      { name: "current", label: "Current", unit: "A", default: 2 },
    ],
    compute: (v) => {
      const V = n(v.voltage), I = n(v.current);
      const R = V / I, P = V * I;
      return { rows: [["Resistance", `${fmt(R)} Ω`], ["Power", `${fmt(P)} W`]] };
    },
    content: {
      howItWorks: [
        "Ohm's Law states V = I × R — voltage equals current times resistance. Given any two values, the third is derived directly, and power (P = V × I) follows from the same two inputs.",
        "This is the single most foundational relationship in electrical work, used everywhere from circuit design to diagnosing why a device is drawing more current than expected.",
        "A common mix-up is confusing which two values you actually have. If you measured across a component with a multimeter, you likely have voltage and current directly — resistance and power both fall out from there without needing to measure them separately.",
      ],
      example: "At 12V and 2A: resistance is 12 ÷ 2 = 6Ω, and power is 12 × 2 = 24W.",
      faqs: [
        { q: "What if I only know resistance and current?", a: "Voltage = I × R. Rearrange the formula for whichever value is missing — the relationship holds regardless of which two you start with." },
        { q: "Why does resistance heat up components?", a: "Power dissipated as heat is P = I²R — current squared times resistance. This is why higher resistance in a wire (especially with high current) generates more heat, a key consideration in wire gauge selection." },
        { q: "Does Ohm's Law apply to AC circuits the same way?", a: "For purely resistive AC loads, yes. For circuits with capacitors or inductors, impedance (which includes reactance) replaces simple resistance, and the math becomes more involved." },
      ],
    },
  },
  {
    slug: "resistor-color-code",
    name: "Resistor Color Code Calculator",
    category: cat,
    priority: "Medium",
    description: "Find the color bands for a given resistor value (4-band standard).",
    fields: [{ name: "resistance", label: "Resistance value", unit: "Ω", default: 4700 }],
    compute: (v) => {
      const R = n(v.resistance);
      if (R <= 0) throw new Error("Enter a positive resistance value");
      const { band1, band2, band3, value } = decode4Band(R);
      return {
        rows: [
          ["Band 1 (1st digit)", band1],
          ["Band 2 (2nd digit)", band2],
          ["Band 3 (multiplier)", band3],
          ["Nearest standard value", `${fmt(value, 0)} Ω`],
        ],
      };
    },
    content: {
      howItWorks: [
        "4-band resistors encode value using two significant-digit bands and a multiplier band, each color representing a digit 0-9 (Black=0 through White=9), with the multiplier band representing a power of ten.",
        "A 5th band, when present, indicates tolerance (Brown=±1%, Red=±2%, Gold=±5%, Silver=±10%) and isn't part of the value itself.",
        "This tool works backward from a target resistance to the color sequence — useful when selecting a resistor to order or verifying you grabbed the right one from a mixed bin.",
      ],
      example: "4,700Ω decodes to Yellow-Violet-Red — 4, 7, then ×100 (10²) — a standard, commonly stocked value.",
      faqs: [
        { q: "How do I read the bands on the resistor itself?", a: "Orient the resistor with the tolerance band (usually gold or silver, and often set slightly apart) on the right, then read left to right." },
        { q: "What if my resistor has 5 or 6 bands?", a: "5-band resistors add a third significant digit for tighter-tolerance parts; 6-band adds a temperature coefficient. This tool covers the standard 4-band case, the most common in general electronics." },
        { q: "Why do calculated values sometimes round oddly?", a: "Resistors are manufactured in standardized value series (E12, E24, etc.), not arbitrary numbers — the nearest standard value shown here reflects what's actually available to buy." },
      ],
    },
  },
  {
    slug: "voltage-drop",
    name: "Voltage Drop Calculator",
    category: cat,
    priority: "High",
    description: "Estimate voltage drop across a copper wire run based on current, length, and gauge.",
    fields: [
      { name: "current", label: "Current", unit: "A", default: 20 },
      { name: "length", label: "One-way wire length", unit: "ft", default: 100 },
      { name: "gauge", label: "Wire gauge (AWG)", type: "select", default: "12", options: [
        { value: "14", label: "14 AWG" }, { value: "12", label: "12 AWG" }, { value: "10", label: "10 AWG" },
        { value: "8", label: "8 AWG" }, { value: "6", label: "6 AWG" }, { value: "4", label: "4 AWG" }, { value: "2", label: "2 AWG" },
      ] },
    ],
    compute: (v) => {
      const I = n(v.current), L = n(v.length), gauge = v.gauge ?? "12";
      const CM = AWG_CIRCULAR_MILS[gauge];
      const K = 12.9; // ohm-circular-mil/ft, copper at ~75°C
      const drop = (2 * K * I * L) / CM;
      return { rows: [["Voltage drop", `${fmt(drop)} V`], ["Circuit length used", `${L * 2} ft (round trip)`]] };
    },
    content: {
      howItWorks: [
        "Voltage drop occurs because every real wire has resistance, and that resistance eats a small amount of voltage proportional to current and distance. Formula: Vdrop = 2 × K × I × L ÷ CM, where K is copper's resistivity constant (12.9), L is one-way length, and CM is the wire's circular-mil area.",
        "The '2×' accounts for the full circuit — current travels out and back, so both directions of wire contribute resistance.",
        "This matters most on long runs and high-current circuits — a garage sub-panel, a well pump, or an EV charger circuit are common places where an undersized gauge causes a real, measurable drop.",
      ],
      example: "20A over a 100ft one-way run on 12 AWG copper: voltage drop ≈ 7.90V — potentially significant on a 120V circuit.",
      faqs: [
        { q: "What's an acceptable voltage drop?", a: "The NEC recommends keeping voltage drop under 3% for branch circuits and 5% total from source to farthest outlet — beyond that, equipment can underperform or overheat." },
        { q: "Does wire temperature rating matter here?", a: "Yes, slightly — resistivity increases with temperature. This calculator uses a standard mid-range value; very hot or cold installations will vary a little from the estimate." },
        { q: "What's the fix if drop is too high?", a: "Use a thicker gauge (lower AWG number) or shorten the run. Doubling wire cross-sectional area roughly halves voltage drop for the same current and length." },
      ],
    },
  },
  {
    slug: "wire-ampacity",
    name: "Wire Gauge / Ampacity Calculator",
    category: cat,
    priority: "Medium",
    description: "Find the minimum recommended copper wire gauge for a given current.",
    fields: [{ name: "current", label: "Circuit current", unit: "A", default: 18 }],
    compute: (v) => {
      const I = n(v.current);
      const match = AMPACITY_TABLE.find(([, amps]) => amps >= I);
      if (!match) return { rows: [["Result", "Exceeds standard residential gauges — consult an electrician"]] };
      return { rows: [["Minimum gauge", `${match[0]} AWG`], ["Rated ampacity", `${match[1]} A`]] };
    },
    content: {
      howItWorks: [
        "Ampacity is the maximum current a wire gauge can safely carry continuously without overheating. This uses the simplified 60°C copper column from the NEC ampacity tables, covering common residential and light-commercial gauges.",
        "Thicker wire (lower AWG number) has more copper cross-section and can safely carry more current — the relationship is inverse to the gauge number.",
        "Real installations also factor in conduit fill, ambient temperature, and run length (see the voltage drop calculator for that last one) — this tool gives the baseline ampacity match, not a full code-compliance check.",
      ],
      example: "An 18A circuit needs at minimum 12 AWG wire, rated for 20A — the next size up from 14 AWG's 15A rating.",
      faqs: [
        { q: "Why not just use the exact-rated gauge?", a: "Breakers and continuous loads typically require sizing above the bare minimum — a 20A breaker commonly pairs with 12 AWG, not wire rated for exactly 20A with no margin." },
        { q: "Does this apply to aluminum wiring too?", a: "No — aluminum has different ampacity ratings than copper for the same gauge, generally lower. This table is copper-specific." },
        { q: "Is this a substitute for an electrician's sizing?", a: "No — this gives a standard baseline reference. Actual code compliance depends on conduit fill, ambient temperature, run length, and local code, which a licensed electrician accounts for." },
      ],
    },
  },
  {
    slug: "horsepower-torque",
    name: "Horsepower ↔ Torque Calculator",
    category: cat,
    priority: "Medium",
    description: "Convert torque and RPM into horsepower.",
    fields: [
      { name: "torque", label: "Torque", unit: "lb-ft", default: 300 },
      { name: "rpm", label: "Engine speed", unit: "RPM", default: 3000 },
    ],
    compute: (v) => {
      const T = n(v.torque), rpm = n(v.rpm);
      const hp = (T * rpm) / 5252;
      return { rows: [["Horsepower", `${fmt(hp, 1)} HP`]] };
    },
    content: {
      howItWorks: [
        "Horsepower and torque are related through engine speed: HP = Torque (lb-ft) × RPM ÷ 5252. The constant 5252 comes from the definition of a horsepower in terms of foot-pounds per minute.",
        "This is why torque and horsepower curves always cross at exactly 5252 RPM on a dyno chart — below that RPM, torque is numerically higher than horsepower; above it, horsepower overtakes torque.",
        "Torque describes rotational force directly; horsepower describes the rate of doing work — an engine can have high torque but modest horsepower if it doesn't rev high, or vice versa.",
      ],
      example: "300 lb-ft of torque at 3,000 RPM produces 300 × 3000 ÷ 5252 ≈ 171.4 horsepower.",
      faqs: [
        { q: "Why do the curves cross at exactly 5252 RPM?", a: "It's a mathematical consequence of the formula's constant, not a property of any specific engine — at RPM = 5252, torque and horsepower are always numerically equal regardless of the engine." },
        { q: "Which number matters more for towing?", a: "Torque, generally — it's the twisting force that gets a heavy load moving from a stop, which is why diesel trucks are tuned for high torque at low RPM." },
        { q: "Which matters more for top speed?", a: "Horsepower, since it reflects sustained power output at higher RPM, which is what overcomes aerodynamic drag at speed." },
      ],
    },
  },
  {
    slug: "concrete-mix-ratio",
    name: "Concrete Mix Ratio Calculator",
    category: cat,
    priority: "Medium",
    description: "Calculate cement, sand, and aggregate quantities for a target concrete volume and mix ratio.",
    fields: [
      { name: "volume", label: "Total concrete volume needed", unit: "cu ft", default: 27 },
      { name: "ratio", label: "Mix ratio", type: "select", default: "1-2-4", options: [
        { value: "1-1-2", label: "1:1:2 (high strength)" },
        { value: "1-1.5-3", label: "1:1.5:3 (standard structural)" },
        { value: "1-2-4", label: "1:2:4 (general purpose)" },
      ] },
    ],
    compute: (v) => {
      const vol = n(v.volume);
      const [c, s, a] = (v.ratio ?? "1-2-4").split("-").map(Number);
      const total = c + s + a;
      const cementVol = (vol * c) / total;
      const sandVol = (vol * s) / total;
      const aggVol = (vol * a) / total;
      const bags = cementVol / 1.226; // 1 bag (94lb/42.6kg) ≈ 1.226 cu ft
      return {
        rows: [
          ["Cement", `${fmt(cementVol)} cu ft (≈ ${fmt(bags, 1)} bags)`],
          ["Sand", `${fmt(sandVol)} cu ft`],
          ["Aggregate", `${fmt(aggVol)} cu ft`],
        ],
      };
    },
    content: {
      howItWorks: [
        "A concrete mix ratio expresses the proportion of cement to sand to coarse aggregate by volume — a 1:2:4 mix means for every 1 part cement, use 2 parts sand and 4 parts aggregate.",
        "This is different from a pure volume calculator (which tells you how much total concrete you need for a slab): this tool tells you how to split that total volume into raw material quantities to mix it yourself.",
        "The ratio you choose affects strength — richer mixes (more cement relative to aggregate, like 1:1:2) cost more but cure stronger, appropriate for structural elements rather than a garden path.",
      ],
      example: "27 cu ft of concrete at a 1:2:4 ratio splits into 3.86 cu ft cement (about 3.1 bags), 7.71 cu ft sand, and 15.43 cu ft aggregate.",
      faqs: [
        { q: "Which ratio should I use for a driveway?", a: "1:2:4 (general purpose) is standard for driveways and sidewalks. Reserve 1:1:2 for structural work like footings or load-bearing elements." },
        { q: "Does this account for water?", a: "No — water-to-cement ratio is a separate consideration, typically around 0.4-0.6 by weight of cement, and affects workability and final strength independently of the aggregate ratio." },
        { q: "How much does a standard bag of cement weigh?", a: "In the US, a standard bag is 94 lb (42.6 kg) and occupies roughly 1.226 cubic feet loose — that conversion is what this calculator uses to estimate bag count." },
      ],
    },
  },
  {
    slug: "capacitor-energy",
    name: "Capacitor Energy Calculator",
    category: cat,
    priority: "Low",
    description: "Calculate the energy stored in a charged capacitor.",
    fields: [
      { name: "capacitance", label: "Capacitance", unit: "µF", default: 1000 },
      { name: "voltage", label: "Voltage", unit: "V", default: 12 },
    ],
    compute: (v) => {
      const C = n(v.capacitance) / 1e6, V = n(v.voltage);
      const E = 0.5 * C * V * V;
      return { rows: [["Stored energy", `${fmt(E, 4)} J`]] };
    },
    content: {
      howItWorks: [
        "Energy stored in a capacitor is E = ½CV², where C is capacitance in farads and V is voltage. Since capacitance is usually specified in microfarads, this tool converts internally before applying the formula.",
        "The relationship is quadratic in voltage — doubling voltage across the same capacitor quadruples the stored energy, not just doubles it.",
        "This matters practically in power-supply design, camera flash circuits, and anywhere a capacitor is used to deliver a quick burst of energy rather than sustained current.",
      ],
      example: "A 1,000µF capacitor charged to 12V stores 0.5 × 0.001 × 12² = 0.072 joules.",
      faqs: [
        { q: "Why does voltage matter so much more than capacitance here?", a: "Because voltage is squared in the formula while capacitance is linear — for the same percentage increase, raising voltage has a much bigger effect on stored energy than raising capacitance." },
        { q: "Is this the same as the power a capacitor can deliver?", a: "No — this is total stored energy, not power. Power depends on how quickly that energy is released, which relates to the circuit's resistance and discharge time, not capacitance alone." },
        { q: "Why do capacitors feel warm after charging?", a: "Some energy during charging is lost as heat in the circuit's resistance rather than stored — the ½CV² figure represents energy successfully stored, not total energy drawn from the source." },
      ],
    },
  },
  {
    slug: "power-factor",
    name: "Power Factor Calculator",
    category: cat,
    priority: "Low",
    description: "Calculate power factor from real power and apparent power.",
    fields: [
      { name: "realPower", label: "Real power", unit: "kW", default: 8 },
      { name: "apparentPower", label: "Apparent power", unit: "kVA", default: 10 },
    ],
    compute: (v) => {
      const kW = n(v.realPower), kVA = n(v.apparentPower);
      const pf = kW / kVA;
      return { rows: [["Power factor", fmt(pf, 3)], ["As percentage", `${fmt(pf * 100, 1)}%`]] };
    },
    content: {
      howItWorks: [
        "Power factor is the ratio of real power (the power actually doing useful work, in kW) to apparent power (the total power the system supplies, in kVA). A power factor of 1.0 means all supplied power is being used effectively.",
        "Formula: PF = Real Power ÷ Apparent Power. The difference between the two is reactive power, which flows back and forth in the system without doing useful work but still takes up capacity.",
        "Low power factor is a real cost issue for commercial and industrial electricity customers — many utilities charge penalties below a threshold like 0.9, since it means the utility has to supply more current for the same useful output.",
      ],
      example: "A facility drawing 8kW of real power with 10kVA of apparent power has a power factor of 0.8, or 80%.",
      faqs: [
        { q: "What causes low power factor?", a: "Inductive loads — motors, transformers, fluorescent ballasts — are the most common cause, since they draw reactive current in addition to real current." },
        { q: "How is low power factor fixed?", a: "Power factor correction capacitors are commonly installed to offset inductive reactance, bringing the ratio closer to 1.0 and often reducing utility penalty charges." },
        { q: "Does power factor affect residential electric bills?", a: "Rarely directly — most residential meters don't bill for it. It's primarily a commercial and industrial billing consideration where usage is large enough to matter to the utility." },
      ],
    },
  },
  {
    slug: "gear-ratio",
    name: "Gear Ratio Calculator",
    category: cat,
    priority: "Low",
    description: "Calculate gear ratio and speed change from tooth counts.",
    fields: [
      { name: "driver", label: "Driver gear teeth", default: 12 },
      { name: "driven", label: "Driven gear teeth", default: 36 },
    ],
    compute: (v) => {
      const d1 = n(v.driver), d2 = n(v.driven);
      const ratio = d2 / d1;
      return {
        rows: [
          ["Gear ratio", `${fmt(ratio, 2)}:1`],
          ["Effect", ratio > 1 ? "Reduces speed, increases torque" : ratio < 1 ? "Increases speed, reduces torque" : "No change (1:1)"],
        ],
      };
    },
    content: {
      howItWorks: [
        "Gear ratio compares the number of teeth on the driven gear to the driver gear: ratio = driven teeth ÷ driver teeth. This ratio determines both the speed change and the torque change between the two gears — and the two always move in opposite directions.",
        "A ratio greater than 1:1 means the output shaft turns slower than the input but with more torque (a mechanical advantage). A ratio less than 1:1 does the reverse — faster output, less torque.",
        "This same relationship applies whether you're looking at bicycle gearing, a car's differential, or an industrial gearbox — the tooth-count math is identical.",
      ],
      example: "A 12-tooth driver gear turning a 36-tooth driven gear gives a 3:1 ratio — the driven gear turns 3 times slower, with roughly 3 times the torque.",
      faqs: [
        { q: "Why can't you get more torque without losing speed?", a: "Energy is conserved in an ideal gear system (minus friction losses) — power = torque × speed stays roughly constant, so a gear trading speed for torque is just redistributing the same power differently." },
        { q: "How does this apply to multi-stage gearboxes?", a: "Multiply the ratios of each stage together — a 3:1 first stage followed by a 2:1 second stage gives a combined 6:1 overall ratio." },
        { q: "Does gear ratio affect rotation direction?", a: "A single pair of external gears reverses rotation direction between driver and driven. Adding an idler gear or using an internal gear can preserve the original direction instead." },
      ],
    },
  },
  {
    slug: "electricity-cost",
    name: "Electricity Cost Calculator",
    category: cat,
    priority: "High",
    description: "Estimate how much it costs to run an appliance based on wattage, usage time, and electricity rate.",
    fields: [
      { name: "watts", label: "Appliance power", unit: "W", default: 100 },
      { name: "hours", label: "Hours used per day", default: 5 },
      { name: "rate", label: "Electricity rate", unit: "$/kWh", default: 0.15 },
    ],
    compute: (v) => {
      const W = n(v.watts), h = n(v.hours), rate = n(v.rate);
      const kwhDay = (W * h) / 1000;
      return {
        rows: [
          ["Daily cost", money(kwhDay * rate)],
          ["Monthly cost (30 days)", money(kwhDay * rate * 30)],
          ["Annual cost", money(kwhDay * rate * 365)],
        ],
      };
    },
    content: {
      howItWorks: [
        "Convert appliance wattage and daily usage hours into kilowatt-hours (kWh) — the unit your utility actually bills — then multiply by your rate per kWh. Formula: kWh/day = Watts × Hours ÷ 1000.",
        "This works for any device with a listed wattage: check the appliance label, its manual, or a plug-in power meter for an accurate reading rather than guessing.",
        "Standby power (devices left plugged in but 'off') is often overlooked in this kind of estimate — many electronics still draw a few watts continuously, which adds up over a full year even though it feels negligible day to day.",
      ],
      example: "A 100W device run 5 hours a day at $0.15/kWh costs $0.075/day, $2.25/month, and $27.38/year.",
      faqs: [
        { q: "Where do I find my electricity rate?", a: "Check a recent utility bill — it's usually listed as a per-kWh rate, sometimes with time-of-use variations (peak vs. off-peak pricing)." },
        { q: "Does this work for high-power appliances like AC units?", a: "Yes — just use the appliance's running wattage, though large motors like AC compressors also draw a brief higher surge on startup that this simple estimate doesn't capture." },
        { q: "Why does my actual bill not match this estimate exactly?", a: "Multiple devices, standby draw, seasonal usage changes, and tiered or time-of-use utility rates all add variables beyond a single-appliance estimate." },
      ],
    },
  },
  {
    slug: "solar-panel-output",
    name: "Solar Panel Output Estimator",
    category: cat,
    priority: "Medium",
    description: "Estimate daily and monthly energy output from a solar panel system.",
    fields: [
      { name: "panelWatts", label: "Panel wattage (each)", unit: "W", default: 400 },
      { name: "numPanels", label: "Number of panels", default: 10 },
      { name: "sunHours", label: "Average peak sun hours/day", default: 5 },
      { name: "efficiency", label: "System efficiency", unit: "%", default: 80, help: "Accounts for inverter and wiring losses — 75-85% is typical" },
    ],
    compute: (v) => {
      const W = n(v.panelWatts), num = n(v.numPanels), sun = n(v.sunHours), eff = n(v.efficiency);
      const dailyKwh = (W * num * sun * (eff / 100)) / 1000;
      return {
        rows: [
          ["Estimated daily output", `${fmt(dailyKwh)} kWh`],
          ["Estimated monthly output", `${fmt(dailyKwh * 30)} kWh`],
        ],
      };
    },
    content: {
      howItWorks: [
        "Solar output depends on total panel wattage, how many peak-equivalent sun hours your location gets per day (not total daylight hours — a specific measure of usable solar intensity), and system efficiency losses from inverters and wiring.",
        "Formula: Daily kWh = Total Panel Watts × Sun Hours × Efficiency% ÷ 1000.",
        "'Peak sun hours' is the key variable most people get wrong — it's not the same as hours of daylight. A location might have 12 hours of daylight but only 5 peak sun hours, since it accounts for the sun's actual intensity through the day, not just whether it's up.",
      ],
      example: "Ten 400W panels with 5 peak sun hours and 80% system efficiency: 400 × 10 × 5 × 0.8 ÷ 1000 = 16 kWh per day.",
      faqs: [
        { q: "How do I find peak sun hours for my location?", a: "NREL's PVWatts tool and similar solar resource maps provide location-specific peak sun hour averages, which vary significantly by latitude and climate." },
        { q: "Why use 80% efficiency instead of 100%?", a: "Real systems lose some energy to inverter conversion, wiring resistance, panel temperature effects, and dust or shading — 75-85% is a realistic range for a well-installed system." },
        { q: "Does this account for seasonal variation?", a: "No — this gives a single estimate based on the sun-hours figure you enter. Actual output varies month to month; use a seasonal average or run the calculation for different seasons separately for a fuller picture." },
      ],
    },
  },
  {
    slug: "battery-life",
    name: "Battery Life Calculator",
    category: cat,
    priority: "Medium",
    description: "Estimate how long a battery will last under a given current draw.",
    fields: [
      { name: "capacity", label: "Battery capacity", unit: "mAh", default: 3000 },
      { name: "draw", label: "Device current draw", unit: "mA", default: 200 },
    ],
    compute: (v) => {
      const mah = n(v.capacity), ma = n(v.draw);
      const hours = mah / ma;
      return { rows: [["Estimated runtime", `${fmt(hours, 1)} hours`]] };
    },
    content: {
      howItWorks: [
        "Battery runtime is simply capacity divided by draw: Hours = mAh ÷ mA. A 3000mAh battery powering a device that draws 200mA continuously should theoretically last 15 hours.",
        "Real-world runtime is usually somewhat shorter than this ideal number, since battery efficiency drops as it discharges and most devices don't draw a perfectly constant current throughout use.",
        "This same math applies whether you're estimating a phone battery, a power bank, or a small electronics project — the relationship is universal to any device with a milliamp-hour-rated battery.",
      ],
      example: "A 3,000mAh battery under a steady 200mA draw gives an estimated 15 hours of runtime.",
      faqs: [
        { q: "Why does my device last less than the calculated estimate?", a: "Current draw usually isn't constant — screen brightness, radio use, and background processes on a phone, for example, all vary draw throughout use, and batteries also lose some capacity as they age." },
        { q: "What's the difference between mAh and Wh?", a: "mAh is capacity at a specific voltage; Wh (watt-hours) is a voltage-independent energy measure. To compare batteries at different voltages fairly, convert to Wh: Wh = mAh × V ÷ 1000." },
        { q: "Does temperature affect battery life?", a: "Yes, significantly for lithium batteries — cold temperatures in particular can noticeably reduce usable capacity compared to room-temperature performance." },
      ],
    },
  },
  {
    slug: "decibel",
    name: "Decibel (dB) Calculator",
    category: cat,
    priority: "Low",
    description: "Calculate the decibel difference between two power levels.",
    fields: [
      { name: "p1", label: "Measured power", unit: "W", default: 2 },
      { name: "p2", label: "Reference power", unit: "W", default: 1 },
    ],
    compute: (v) => {
      const p1 = n(v.p1), p2 = n(v.p2);
      const db = 10 * Math.log10(p1 / p2);
      return { rows: [["Decibel difference", `${fmt(db, 2)} dB`]] };
    },
    content: {
      howItWorks: [
        "The decibel is a logarithmic unit comparing two power levels: dB = 10 × log₁₀(P1 ÷ P2). Because it's logarithmic, decibels compress a huge range of real-world power ratios into manageable numbers.",
        "A 3dB increase roughly doubles power; a 10dB increase means 10 times the power — this non-linear scale is why decibels can feel unintuitive at first.",
        "This power-ratio form is standard for comparing signal strengths, amplifier gain, and power levels in electronics and acoustics — a separate amplitude-based formula (using 20× instead of 10×) applies when comparing voltage or sound pressure directly rather than power.",
      ],
      example: "Comparing 2W to a 1W reference: 10 × log₁₀(2) ≈ 3.01 dB — the well-known 'doubling equals about 3dB' benchmark.",
      faqs: [
        { q: "Why do some decibel formulas use 20 instead of 10?", a: "The 10× form applies to power ratios; the 20× form applies to amplitude ratios like voltage or sound pressure, since power is proportional to amplitude squared — the extra factor of 2 accounts for that relationship." },
        { q: "Can dB be negative?", a: "Yes — if the measured power is lower than the reference, the ratio is less than 1, and log₁₀ of a number under 1 is negative, indicating a power decrease rather than increase." },
        { q: "Is decibel a fixed unit like watts or volts?", a: "No — dB is always a ratio between two values. A dB figure alone is meaningless without knowing what it's being compared against, whether stated explicitly or implied by convention." },
      ],
    },
  },
  {
    slug: "insulation-r-value",
    name: "Insulation R-Value Calculator",
    category: cat,
    priority: "Low",
    description: "Calculate total R-value from insulation material and thickness.",
    fields: [
      { name: "material", label: "Insulation type", type: "select", default: "fiberglass", options: [
        { value: "fiberglass", label: "Fiberglass batt" },
        { value: "sprayfoam-closed", label: "Spray foam (closed-cell)" },
        { value: "sprayfoam-open", label: "Spray foam (open-cell)" },
        { value: "rigid-xps", label: "Rigid foam board (XPS)" },
        { value: "rigid-polyiso", label: "Rigid foam board (polyiso)" },
      ] },
      { name: "thickness", label: "Thickness", unit: "inches", default: 6 },
    ],
    compute: (v) => {
      const material = v.material ?? "fiberglass";
      const thickness = n(v.thickness);
      const rPerInch = INSULATION_R_PER_INCH[material];
      const total = rPerInch * thickness;
      return { rows: [["R-value per inch", `R-${fmt(rPerInch, 1)}`], ["Total R-value", `R-${fmt(total, 1)}`]] };
    },
    content: {
      howItWorks: [
        "R-value measures resistance to heat flow — higher means better insulation. Each material has a standard R-value per inch of thickness, and total R-value is simply that figure multiplied by how thick the installed layer is.",
        "Different insulation types vary meaningfully in R-value per inch: closed-cell spray foam is roughly twice as effective per inch as standard fiberglass batting, which is why it's often chosen for tight spaces where thickness is limited.",
        "Building codes specify minimum total R-values by climate zone and location in the home (attic, walls, floor) — this tool tells you what a given material and thickness achieves, not what your specific code requires.",
      ],
      example: "6 inches of standard fiberglass batting (R-3.2 per inch) gives a total of R-19.2 — close to the common R-19 batt rating sold at that thickness.",
      faqs: [
        { q: "Why do spray foam and fiberglass differ so much per inch?", a: "Closed-cell spray foam has a denser cell structure and often includes gases with lower thermal conductivity than plain air, which fiberglass batting traps loosely — the physical structure of the material itself is what drives the difference." },
        { q: "Do R-values simply add when stacking layers?", a: "Yes — R-values of different layers in the same wall or roof assembly add together in series, so two R-13 layers give a combined R-26." },
        { q: "Does compressing fiberglass insulation change its R-value?", a: "Yes, negatively — compressing batting reduces the trapped air pockets that provide insulation, lowering the effective R-value below its rated figure for that thickness." },
      ],
    },
  },
];

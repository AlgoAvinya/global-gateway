export interface CountryInfo {
  code: string;
  name: string;
  flag: string;
  lat: number;
  lng: number;
  tagline: string;
  highlights: string[];
  programs: string[];
  perks: string[];
}

export const COUNTRIES: CountryInfo[] = [
  {
    code: "DE",
    name: "Germany",
    flag: "🇩🇪",
    lat: 51.1657,
    lng: 10.4515,
    tagline: "Tuition-free education and the world's #4 healthcare system.",
    highlights: [
      "No tuition fees at most public universities",
      "Strong demand for nurses, engineers and IT",
      "18-month job search visa after studies",
      "PR pathway after 21–33 months of work",
    ],
    programs: ["MS Engineering & CS", "Ausbildung (Paid Training)", "Nursing Jobs", "MBA"],
    perks: ["Earn 8–10× Indian salaries", "Free healthcare", "Family reunification"],
  },
  {
    code: "UK",
    name: "United Kingdom",
    flag: "🇬🇧",
    lat: 55.3781,
    lng: -3.4360,
    tagline: "World-class universities with 2-year Graduate Route visa.",
    highlights: [
      "1-year Master's programs",
      "Direct admission to partner universities",
      "Graduate Route visa for 2 years",
      "Globally recognised degrees",
    ],
    programs: ["MSc Management", "Data Analytics", "Cyber Security", "Healthcare"],
    perks: ["Scholarships available", "Part-time work allowed", "Strong alumni network"],
  },
  {
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    lat: 39.8283,
    lng: -98.5795,
    tagline: "Top-ranked universities and unmatched career opportunities.",
    highlights: [
      "MS programs of 1.5–2 years",
      "STEM OPT extension up to 3 years",
      "World leading research labs",
      "Diverse scholarship options",
    ],
    programs: ["MS in CS", "Data Science / AI", "Cyber Security", "MBA / MIS"],
    perks: ["High starting salaries", "Global brand value", "Innovation hub"],
  },
  {
    code: "CA",
    name: "Canada",
    flag: "🇨🇦",
    lat: 56.1304,
    lng: -106.3468,
    tagline: "Friendly immigration and a clear PR pathway.",
    highlights: [
      "Post-graduation work permit up to 3 years",
      "Express Entry PR pathway",
      "Affordable Master's & PG diplomas",
      "Welcoming, multicultural society",
    ],
    programs: ["Engineering & CS", "MBA / Public Health", "Project Management", "Supply Chain"],
    perks: ["Spouse work permit", "Universal healthcare", "Strong job market"],
  },
  {
    code: "AU",
    name: "Australia",
    flag: "🇦🇺",
    lat: -25.2744,
    lng: 133.7751,
    tagline: "High quality of life and strong post-study work rights.",
    highlights: [
      "2–4 year post-study work visa",
      "Top 100 universities",
      "Demand for IT, nursing and accounting",
      "Pathway to PR",
    ],
    programs: ["IT / CS", "Engineering", "Data Science", "Nursing & Accounting"],
    perks: ["Excellent lifestyle", "Safe & multicultural", "Spouse work rights"],
  },
  {
    code: "IE",
    name: "Ireland",
    flag: "🇮🇪",
    lat: 53.4129,
    lng: -8.2439,
    tagline: "Europe's tech hub with English-taught programs.",
    highlights: [
      "Stay-back visa up to 2 years",
      "Home to Google, Meta, Apple EU HQs",
      "1-year Master's programs",
      "Affordable EU tuition",
    ],
    programs: ["MSc Computing", "Data Analytics", "Business", "Pharma & Biotech"],
    perks: ["Friendly visa policies", "Strong Indian community", "EU access"],
  },
  {
    code: "EU",
    name: "Europe (EU)",
    flag: "🇪🇺",
    lat: 47.0,
    lng: 15.0,
    tagline: "Affordable Master's across France, Netherlands, Sweden and more.",
    highlights: [
      "Low or zero tuition in many countries",
      "Scholarship-friendly",
      "Schengen mobility",
      "Strong industry-academia links",
    ],
    programs: ["Engineering & Tech", "Data Science", "MBA", "Health Sciences"],
    perks: ["1–3 yr post-study work", "Diverse cultures", "Pathway to EU PR"],
  },
  {
    code: "NZ",
    name: "New Zealand",
    flag: "🇳🇿",
    lat: -40.9006,
    lng: 174.8860,
    tagline: "Beautiful landscapes and a balanced student life.",
    highlights: [
      "Up to 3-year post-study work visa",
      "High-quality British-style education",
      "Demand for IT and healthcare",
      "Easy PR pathway",
    ],
    programs: ["Engineering & IT", "Applied Management", "Public Health", "Agriculture"],
    perks: ["Spouse work rights", "Safe & peaceful", "Work-life balance"],
  },
];

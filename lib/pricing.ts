/**
 * Single source of truth for the publicly listed prices of Ronan SAT paid
 * products. Keep these in sync with the in-app upgrade page and the CREEM
 * product catalogue — payment providers check that the site shows the same
 * prices customers are charged.
 */

export const UPGRADE_URL = "https://learn.ronansat.com/auth";

export type Plan = {
  id: string;
  name: string;
  duration: string;
  /** Regular list price in USD, exactly as charged at checkout. */
  price: string;
  /** Rough per-month equivalent, for comparison only. */
  perMonth?: string;
  highlight?: boolean;
  note?: string;
};

export const FREE_PLAN = {
  name: "Free",
  price: "$0",
  duration: "forever",
  blurb:
    "Create an account and start practising straight away. No card, no trial timer.",
  features: [
    "Full-length and sectional Digital SAT practice tests",
    "Question bank access with answer explanations",
    "Core performance analytics and score trends",
    "Vocab builder, error log, forum and leaderboards (with limits)",
  ],
};

export const ADVANCED_PLANS: Plan[] = [
  {
    id: "advanced-7d",
    name: "Advanced",
    duration: "7 days",
    price: "$5.99",
    note: "Best for a final week of cramming before test day.",
  },
  {
    id: "advanced-1m",
    name: "Advanced",
    duration: "1 month",
    price: "$15.99",
    perMonth: "$15.99 / month",
    highlight: true,
    note: "Most popular. Rolling access for a full study month.",
  },
  {
    id: "advanced-3m",
    name: "Advanced",
    duration: "3 months",
    price: "$30.99",
    perMonth: "≈ $10.33 / month",
    note: "Covers a normal prep cycle from diagnostic to test day.",
  },
  {
    id: "advanced-8m",
    name: "Advanced",
    duration: "8 months",
    price: "$55.99",
    perMonth: "≈ $7.00 / month",
    note: "Best value. Enough runway for two or three sittings.",
  },
];

export const ADVANCED_FEATURES = [
  "17,000+ high-quality, real SAT & IELTS questions",
  "Unlock every latest exam",
  "In-depth analytics: test behaviour, mistake analysis, progress trends",
  "Unlock closed adaptive tests to re-practise anytime",
  "More Ask Rob energy every day (both Fast and Extended)",
  "Unlimited Error Log entries",
  "Unlimited vocab words and vocab lists",
  "No limit on the number of signed-in devices",
];

export const PRICING_DISCLOSURE = [
  "Prices are shown in USD and cover the full access period stated on each plan.",
  "Students in Vietnam are billed in VND; the local price is shown before payment.",
  "Promotional discounts run from time to time. When a promotion is live, the discounted price is shown on the upgrade page and at checkout.",
];

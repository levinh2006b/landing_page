"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, CreditCard, Sparkles } from "lucide-react";
import {
  ADVANCED_FEATURES,
  ADVANCED_PLANS,
  FREE_PLAN,
  PRICING_DISCLOSURE,
  UPGRADE_URL,
} from "@/lib/pricing";

export default function PricingSection({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  return (
    <section id="pricing" className="py-32 px-6 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#DBE8FB] border-2 border-[#0f0e0e] px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-wider brutal-shadow-sm rotate-[-2deg] mb-6">
            <CreditCard className="w-4 h-4" />
            Pricing
          </div>
          <Heading className="text-5xl md:text-7xl font-display font-black uppercase tracking-tight text-balance">
            Free to start.{" "}
            <span
              className="text-[#BCCE75] text-outline"
              style={{ WebkitTextStroke: "2px #0f0e0e" }}
            >
              Cheap
            </span>{" "}
            to go all in.
          </Heading>
          <p className="mt-8 text-xl md:text-2xl font-medium text-[#0f0e0e]/80 text-balance">
            Every plan unlocks the same Advanced toolkit. Pick the length that
            matches your test date.
          </p>
        </div>

        {/* Free plan */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white border-4 border-[#0f0e0e] rounded-[2rem] brutal-shadow p-8 md:p-10 flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between"
        >
          <div className="lg:max-w-md">
            <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight">
              {FREE_PLAN.name}
            </h3>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display font-black text-6xl tracking-tighter">
                {FREE_PLAN.price}
              </span>
              <span className="font-bold text-lg text-[#0f0e0e]/60">
                {FREE_PLAN.duration}
              </span>
            </div>
            <p className="mt-4 text-lg font-medium text-[#0f0e0e]/80">
              {FREE_PLAN.blurb}
            </p>
            <Link href={UPGRADE_URL} className="group relative inline-block mt-8">
              <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
              <div className="relative flex items-center justify-center gap-2 bg-white border-4 border-[#0f0e0e] px-7 py-4 rounded-2xl text-lg font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                Create a free account
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 lg:max-w-xl w-full">
            {FREE_PLAN.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 font-medium">
                <Check className="w-5 h-5 shrink-0 mt-0.5 text-[#0f0e0e]" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Advanced plans */}
        <div className="mt-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h3 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">
              Advanced
            </h3>
            <p className="font-bold text-sm uppercase tracking-wide text-[#0f0e0e]/60">
              One price, full access for the whole period
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANCED_PLANS.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative border-4 border-[#0f0e0e] rounded-3xl brutal-shadow p-7 flex flex-col ${
                  plan.highlight ? "bg-[#BCCE75]" : "bg-white"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-4 left-6 inline-flex items-center gap-1.5 bg-[#0f0e0e] text-[#f4efe6] px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    Most popular
                  </span>
                )}
                <span className="font-bold text-sm uppercase tracking-widest text-[#0f0e0e]/60">
                  {plan.duration}
                </span>
                <div className="mt-3 font-display font-black text-5xl tracking-tighter">
                  {plan.price}
                </div>
                <div className="mt-1 font-bold text-sm text-[#0f0e0e]/60 min-h-5">
                  {plan.perMonth ?? "\u00A0"}
                </div>
                {plan.note && (
                  <p className="mt-4 text-sm font-medium text-[#0f0e0e]/75">
                    {plan.note}
                  </p>
                )}
                <Link
                  href={UPGRADE_URL}
                  className="group relative block mt-auto pt-8"
                >
                  <span className="absolute left-0 right-0 bottom-0 top-8 bg-[#0f0e0e] rounded-xl translate-x-1.5 translate-y-1.5 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                  <span
                    className={`relative flex items-center justify-center gap-2 border-4 border-[#0f0e0e] px-5 py-3.5 rounded-xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 ${
                      plan.highlight ? "bg-white" : "bg-[#BCCE75]"
                    }`}
                  >
                    Buy now
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What Advanced unlocks */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#0f0e0e] text-[#f4efe6] border-4 border-[#0f0e0e] rounded-[2rem] p-8 md:p-12"
        >
          <h4 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight">
            Every Advanced plan includes
          </h4>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {ADVANCED_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3 font-medium text-lg">
                <Check className="w-6 h-6 shrink-0 mt-0.5 text-[#BCCE75]" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Live classes pricing pointer */}
        <div className="mt-12 bg-[#FBE1D3] border-4 border-[#0f0e0e] rounded-[2rem] brutal-shadow p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight">
              Live classes &amp; tutoring
            </h4>
            <p className="mt-3 text-lg font-medium text-[#0f0e0e]/80">
              Live, expert-led cohorts are priced per course and depend on the
              programme and cohort length. Course fees are quoted in full before
              enrolment — message us and we&apos;ll send the current price list.
            </p>
          </div>
          <Link href="/classes" className="group relative inline-block shrink-0">
            <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
            <div className="relative flex items-center justify-center gap-2 bg-white border-4 border-[#0f0e0e] px-7 py-4 rounded-2xl text-lg font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
              See classes
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        <ul className="mt-10 space-y-2 text-sm font-medium text-[#0f0e0e]/60 max-w-3xl">
          {PRICING_DISCLOSURE.map((line) => (
            <li key={line}>{line}</li>
          ))}
          <li>
            See our{" "}
            <Link href="/terms" className="underline decoration-2 underline-offset-2">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline decoration-2 underline-offset-2">
              Privacy Policy
            </Link>{" "}
            for billing and refund terms.
          </li>
        </ul>
      </div>
    </section>
  );
}

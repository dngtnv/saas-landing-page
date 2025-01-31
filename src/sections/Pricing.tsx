"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-desc mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={twMerge(
                "card",
                tier.inverse === true && "bg-black text-white",
              )}
            >
              <div className="flex justify-between">
                <h3
                  className={twMerge(
                    "text-lg font-bold text-black/50",
                    tier.inverse === true && "text-white/50",
                  )}
                >
                  {tier.title}
                </h3>
                {tier.popular === true && (
                  <div className="inline-flex rounded-xl border border-white/20 px-4 py-1.5 text-sm">
                    <motion.span
                      className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DFF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF)] bg-clip-text font-medium text-transparent [background-size:200%]"
                      animate={{
                        backgroundPositionX: "-100%",
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        repeatType: "loop",
                        ease: "linear",
                      }}
                    >
                      Most Popular
                    </motion.span>
                  </div>
                )}
              </div>
              <div className="my-[30px] flex items-baseline gap-1">
                <span className="text-4xl font-bold leading-none tracking-tighter">
                  ${tier.monthlyPrice}
                </span>
                <span
                  className={twMerge(
                    "text-base font-bold leading-6 tracking-tight text-black/50",
                    tier.inverse === true && "text-white/50",
                  )}
                >
                  /month
                </span>
              </div>
              <button
                className={twMerge(
                  "btn btn-primary w-full",
                  tier.inverse === true && "bg-white text-black",
                )}
              >
                {tier.buttonText}
              </button>
              <ul className="mt-8 flex flex-col gap-5">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4 text-sm">
                    <CheckIcon className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

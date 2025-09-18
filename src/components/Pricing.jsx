import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { TEXTS } from "../consts/index.js";

const Pricing = () => {
  const { language } = useLanguage();
  const texts = TEXTS[language];
  const [billingPeriod, setBillingPeriod] = useState("1month");
  const [selectedPlan, setSelectedPlan] = useState("economy");

  // WhatsApp contact number
  const whatsappNumber = "+201550043269";

  // Function to generate WhatsApp message with plan details
  const generateWhatsAppMessage = (
    planKey,
    planName,
    price,
    currency,
    period
  ) => {
    const message =
      language === "en"
        ? `Hi! I'm interested in the ${planName} plan. Price: ${price} ${currency} ${period}. Can you provide more details?`
        : `مرحباً! أنا مهتم بخطة ${planName}. السعر: ${price} ${currency} ${period}. هل يمكنك تقديم المزيد من التفاصيل؟`;

    return encodeURIComponent(message);
  };

  // Function to handle WhatsApp click
  const handleWhatsAppClick = (planKey) => {
    const plan = plans[planKey];
    const priceData = plan.prices[billingPeriod];
    const message = generateWhatsAppMessage(
      planKey,
      plan.name,
      priceData.price,
      priceData.currency,
      priceData.period
    );

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  // Get localized data from constants
  const billingOptions = texts.billingOptions.map((option) => ({
    key: option.key,
    label: language === "en" ? option.labelEn : option.labelAr,
  }));

  const planOptions = texts.planOptions.map((option) => ({
    key: option.key,
    label: language === "en" ? option.labelEn : option.labelAr,
  }));

  // Transform pricing plans for easier use
  const plans = Object.keys(texts.pricingPlans).reduce((acc, key) => {
    const plan = texts.pricingPlans[key];
    acc[key] = {
      name: language === "en" ? plan.nameEn : plan.nameAr,
      subtitle: language === "en" ? plan.subtitleEn : plan.subtitleAr,
      prices: plan.prices,
      features: language === "en" ? plan.featuresEn : plan.featuresAr,
      buttonText: language === "en" ? plan.buttonTextEn : plan.buttonTextAr,
      paymentMethod:
        language === "en" ? plan.paymentMethodEn : plan.paymentMethodAr,
      paymentDetails: plan.paymentDetailsEn || plan.paymentDetailsAr,
    };
    return acc;
  }, {});

  return (
    <section
      id="pricing"
      className=" text-dark dark:text-light py-20 border-b-2 border-dark/10 dark:border-light/10 "
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-dark/70 dark:text-light/70 mb-2">
            {language === "en"
              ? texts.pricingSection.titleEn
              : texts.pricingSection.titleAr}
          </p>
          <h2 className="font-hahmlet text-4xl md:text-5xl font-bold mb-4">
            {language === "en"
              ? texts.pricingSection.headingEn
              : texts.pricingSection.headingAr}
          </h2>
          {/* <p className="text-dark/80 dark:text-light/80 max-w-2xl mx-auto mb-8">
            {language === "en"
              ? texts.pricingSection.subtitleEn
              : texts.pricingSection.subtitleAr}
          </p> */}
          <p className="text-dark/80 dark:text-light/80 max-w-2xl mx-auto mb-8">
            {language === "en"
              ? "after payment sent a screenshot to whatsapp to get the plan"
              : "بعد الدفع أرسل لقطة شاشة على الواتساب للحصول على الخطة"}
          </p>

          {/* Billing Period Toggle */}
          <div className="flex justify-center mb-6">
            <div className="bg-black/10 dark:bg-white/10 rounded-lg p-1 flex">
              {billingOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => setBillingPeriod(option.key)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    billingPeriod === option.key
                      ? "bg-white dark:bg-white text-black"
                      : "text-dark/70 dark:text-light/70 hover:text-dark dark:hover:text-light"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Plan Toggle */}
          <div className="flex justify-center lg:hidden mb-8">
            <div className="bg-black/10 dark:bg-white/10 rounded-lg p-1 flex flex-wrap gap-1">
              {planOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => setSelectedPlan(option.key)}
                  className={`px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 ${
                    selectedPlan === option.key
                      ? "bg-white dark:bg-white text-black"
                      : "text-dark/70 dark:text-light/70 hover:text-dark dark:hover:text-light"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Pricing Cards */}
        <div className="hidden lg:grid grid-cols-3 gap-8 ">
          {Object.entries(plans).map(([key, plan]) => (
            <div
              key={key}
              className=" flex flex-col item-center justify-between h-full border border-black/20 dark:border-white/20 rounded-lg p-6 bg-white/70 dark:bg-white/5 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <h3 className="font-hahmlet text-xl font-bold mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-dark/60 dark:text-light/60 mb-3">
                  {plan.subtitle}
                </p>
                <div className="mb-2">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-4xl font-bold">
                      {plan.prices[billingPeriod].price}
                    </span>
                    <span className="text-dark/70 dark:text-light/70 text-lg">
                      {plan.prices[billingPeriod].currency}
                    </span>
                  </div>
                  <span className="text-dark/70 dark:text-light/70">
                    {plan.prices[billingPeriod].period}
                  </span>
                </div>
                {plan.prices[billingPeriod].originalPrice && (
                  <div className="mb-2">
                    <span className="text-sm text-dark/50 dark:text-light/50 line-through">
                      {plan.prices[billingPeriod].originalPrice}{" "}
                      {plan.prices[billingPeriod].currency}
                    </span>
                  </div>
                )}
                {plan.prices[billingPeriod].bonusEn && (
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                    {language === "en"
                      ? plan.prices[billingPeriod].bonusEn
                      : plan.prices[billingPeriod].bonusAr}
                  </p>
                )}
              </div>

              <div className="space-y-2 mb-6">
                <h3></h3>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-dark/80 dark:text-light/80">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Payment Details Section */}
              <div className="flex item-center justify-end flex-col">
                <div
                  className="mb-4 p-4 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-600 dark:from-blue-600 dark:via-cyan-600 dark:to-teal-700 rounded-xl cursor-pointer hover:from-blue-600 hover:via-cyan-600 hover:to-teal-700 dark:hover:from-blue-700 dark:hover:via-cyan-700 dark:hover:to-teal-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg border border-white/20"
                  onClick={() => {
                    if (key === "elite") {
                      // PayPal payment link
                      window.open(
                        `https://www.paypal.me/ahmedgad370`,
                        "_blank"
                      );
                    } else {
                      window.open(
                        `https://ipn.eg/S/ahmedgad722003a/instapay/97PpKT`,
                        "_blank"
                      );
                    }
                  }}
                >
                  <div className="text-center">
                    <div className="mb-3">
                      <div className="w-12 h-12 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-3">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                          />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">
                      {plan.paymentMethod}
                    </h4>
                    {plan.paymentDetails && (
                      <p className="text-xs text-white/90 font-mono bg-white/10 px-3 py-1 rounded-full mb-2">
                        {plan.paymentDetails}
                      </p>
                    )}
                    <p className="text-xs text-white/80 font-medium">
                      {language === "en" ? "Click to pay" : "اضغط للدفع"}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsAppClick(key)}
                  className="w-full bg-gradient-to-r from-green-400 to-lime-400 text-black font-bold py-3 px-6 rounded-lg hover:from-green-500 hover:to-lime-500 transition-all duration-200 transform hover:scale-105"
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Single Card */}
        <div className="lg:hidden w-full  flex item-center justify-center">
          {(() => {
            const plan = plans[selectedPlan];
            return (
              <div className="w-full md:w-1/2 border border-black/20 dark:border-white/20 rounded-lg p-6 bg-white/70 dark:bg-white/5 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <h3 className="font-hahmlet text-xl font-bold mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-dark/60 dark:text-light/60 mb-3">
                    {plan.subtitle}
                  </p>
                  <div className="mb-2">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-4xl font-bold">
                        {plan.prices[billingPeriod].price}
                      </span>
                      <span className="text-dark/70 dark:text-light/70 text-lg">
                        {plan.prices[billingPeriod].currency}
                      </span>
                    </div>
                    <span className="text-dark/70 dark:text-light/70">
                      {plan.prices[billingPeriod].period}
                    </span>
                  </div>
                  {plan.prices[billingPeriod].originalPrice && (
                    <div className="mb-2">
                      <span className="text-sm text-dark/50 dark:text-light/50 line-through">
                        {plan.prices[billingPeriod].originalPrice}{" "}
                        {plan.prices[billingPeriod].currency}
                      </span>
                    </div>
                  )}
                  {plan.prices[billingPeriod].bonus && (
                    <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                      {plan.prices[billingPeriod].bonus}
                    </p>
                  )}
                </div>

                <div className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-dark/80 dark:text-light/80">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Payment Details Section */}
                <div
                  className="mb-4 p-4 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-600 dark:from-blue-600 dark:via-cyan-600 dark:to-teal-700 rounded-xl cursor-pointer hover:from-blue-600 hover:via-cyan-600 hover:to-teal-700 dark:hover:from-blue-700 dark:hover:via-cyan-700 dark:hover:to-teal-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg border border-white/20"
                  onClick={() => {
                    if (selectedPlan === "elite") {
                      const paypalLink = "https://www.paypal.me/ahmedgad370";

                      window.open(paypalLink, "_blank");
                    } else {
                      // InstaPay - redirect to WhatsApp with payment message
                      window.open(
                        `https://ipn.eg/S/ahmedgad722003a/instapay/97PpKT`,
                        "_blank"
                      );
                    }
                  }}
                >
                  <div className="text-center">
                    <div className="mb-3">
                      <div className="w-12 h-12 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-3">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                          />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">
                      {plan.paymentMethod}
                    </h4>
                    {plan.paymentDetails && (
                      <p className="text-xs text-white/90 font-mono bg-white/10 px-3 py-1 rounded-full mb-2">
                        {plan.paymentDetails}
                      </p>
                    )}
                    <p className="text-xs text-white/80 font-medium">
                      {language === "en" ? "Click to pay" : "اضغط للدفع"}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsAppClick(selectedPlan)}
                  className="w-full bg-gradient-to-r from-green-400 to-lime-400 text-black font-bold py-3 px-6 rounded-lg hover:from-green-500 hover:to-lime-500 transition-all duration-200 transform hover:scale-105"
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

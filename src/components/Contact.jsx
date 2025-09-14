import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { TEXTS } from "../consts/index.js";

const Contact = () => {
  const { language } = useLanguage();
  const texts = TEXTS[language];
  return (
    <section id="contact" className="text-dark dark:text-light py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-12  text-center">
          {texts.contactMethods.map(
            ({ key, title, description, href, linkText, Icon, aria }) => (
              <div key={key}>
                <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center ">
                  <Icon className="text-4xl" />
                </div>
                <h3 className="font-hahmlet text-3xl tracking-wide mb-3">
                  {title}
                </h3>
                <p className="text-dark/85 dark:text-light/85 leading-relaxed max-w-xs mx-auto mb-4">
                  {description}
                </p>
                <a
                  href={href}
                  aria-label={aria}
                  className="underline underline-offset-4 hover:text-neutral-200"
                >
                  {linkText}
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

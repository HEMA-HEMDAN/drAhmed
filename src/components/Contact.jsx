import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";

const CONTACT_METHODS = [
  {
    key: "email",
    title: "EMAIL",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
    href: "mailto:trainer@fitwithahmed.com",
    linkText: "trainer@fitwithahmed.com",
    Icon: MdOutlineEmail,
    aria: "Send email",
  },
  {
    key: "chat",
    title: "LIVE CHAT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
    href: "#start-chat",
    linkText: "Start new chat",
    Icon: BsChatDots,
    aria: "Start live chat",
  },
  {
    key: "phone",
    title: "PHONE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
    href: "tel:+15550000000",
    linkText: "+1 (555) 000-0000",
    Icon: FiPhone,
    aria: "Call phone number",
  },
];

const Contact = () => {
  return (
    <section className="text-dark bg-light dark:text-light dark:bg-dark py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {CONTACT_METHODS.map(({ key, title, description, href, linkText, Icon, aria }) => (
            <div key={key}>
              <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center ">
                <Icon className="text-4xl" />
              </div>
              <h3 className="font-hahmlet text-3xl tracking-wide mb-3">{title}</h3>
              <p className="text-dark/85 dark:text-light/85 leading-relaxed max-w-xs mx-auto mb-4">{description}</p>
              <a href={href} aria-label={aria} className="underline underline-offset-4 hover:text-neutral-200">
                {linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;



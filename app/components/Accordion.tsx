"use client";

import React, { useState } from 'react';

interface AccordionProps {
    title: string;
    children: string;
}

const AccordionItem = ({ title, children }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='flex-col justify-between items-center px-24 2xl:w-1/2 2xl:m-auto w-screen pb-2'>
            <h2>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex items-center bg-off-black justify-between w-full p-5 text-lg text-white border border-dark-grey ${isOpen ? 'rounded-t-3xl' : 'rounded-3xl'}`}
                >
                    <span>{title}</span>
                    <svg
                        className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            </h2>
            {isOpen && <div className="px-10 py-6 rounded-b-3xl border-t-0 border border-dark-grey">{children}</div>}
        </div>
    );
};

function Accordion() {
    return (
        <div className='rounded-3xl'>
            <div className='flex-col text-center w-screen pt-16 pb-4 px-24'>
                <p className='text-s text-lime uppercase bold-font'>FAQs</p>
            </div>
            <AccordionItem title="How can I get started with using the dashboard?">Getting started with our dashboard is simple! Once you sign up and log in, you&apos;ll be guided through an onboarding process that includes setting up your account, configuring preferences, and exploring key features. We also offer tutorials and helpful resources to ensure you&apos;re up and running in no time.
            </AccordionItem>
            <AccordionItem title="What features are available on the dashboard?">
                Our dashboard includes a wide range of features such as real-time data tracking, customizable reports, user activity monitoring, task management, and integration with third-party apps. You can also customize your dashboard layout and access detailed analytics to optimize your workflow.
            </AccordionItem>
            <AccordionItem title="Can I customize the dashboard layout?">
                Yes, the dashboard is fully customizable. You can move, resize, and organize widgets to suit your needs. You can also choose from different themes to adjust the visual appearance and enhance your user experience.
            </AccordionItem>
            <AccordionItem title="How do I integrate third-party apps with the dashboard?">
                To integrate third-party apps, navigate to the &quot;Integrations&quot; section in the settings menu. From there, you&apos;ll be able to choose from a variety of supported apps, authenticate your account, and configure the integration according to your preferences.
            </AccordionItem>
            <AccordionItem title="Is the data stored on the dashboard secure?">
                Absolutely! We prioritize your security. All data is encrypted using industry-standard protocols, and we regularly update our security measures to protect your information. Additionally, we offer two-factor authentication for extra security.
            </AccordionItem>
            <AccordionItem title="Can I access the dashboard on mobile devices?">
                Yes, our dashboard is fully responsive and accessible on both mobile phones and tablets. You can download our app for iOS or Android for a more streamlined mobile experience, or access the dashboard directly through your mobile browser.
            </AccordionItem>
        </div>
    );
}

export default Accordion;

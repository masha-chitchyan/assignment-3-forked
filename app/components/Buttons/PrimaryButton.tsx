"use client";

import React, { useState, useEffect } from 'react';

interface PrimaryButtonProps {
  label: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    if (email) {
      setIsSubmitted(true);
    } else {
      alert('Please enter a valid email.');
    }
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setIsSubmitted(false);
    setEmail('');
  };

  // Disable scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={togglePopup}
        className="px-6 py-4 bg-lime rounded-full font-weight-bolder text-black hover:bg-lime-hover text-base bold-font"
      >
        {label}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-off-black bg-opacity-50 flex items-center justify-center z-[9999]">
          <div className="flex-col bg-off-black pt-4 px-8 pb-8 rounded-3xl max-w-md border border-dark-grey justify-end">

            {!isSubmitted ? (
              <>
                <h2 className="text-xl mb-4 text-center">
                  Please enter your email below, and we will send you early access details!
                </h2>

                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Your email address"
                  className="border text-black border-dark-grey bg-white py-4 px-6 rounded-full w-full h-44px mb-4"
                />

                <button
                  onClick={handleSubmit}
                  className="px-6 py-4 bg-lime rounded-full font-weight-bolder text-black w-full hover:bg-lime-hover text-base bold-font"
                >
                  Submit
                </button>
              </>
            ) : (
              <div className="text-gwhite text-xl text-center mb-4">
                Success! You&apos;ll receive the setup instructions shortly. Thank you for being with us!
              </div>
            )}

            <button
              onClick={togglePopup}
              className="flex gap-2 justify-center items-center text-white px-6 py-4 mt-4 rounded-full w-full border border-dark-grey hover:bg-white-10"
            >
              <img src="/images/X.svg" alt="close" />
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrimaryButton;

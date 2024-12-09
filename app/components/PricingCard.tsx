import React from "react";
import CallToAction from "./CallToAction";

function PricingCard() {
    return (
        <div className="2xl:h-[100vh]">
            <div className="flex-col text-center pt-2 2xl:pt-0">
            <p className='text-s text-lime uppercase bold-font'>Pricing</p>
            <h2 className='text-3xl light-font pb-4 pt-2'>Pricing made simple, tailored for you</h2>
            </div>
            <div className="flex gap-4 items-center justify-center 2xl:h-[40vh] 2xl:px-80 xl:px-24 lg:px-16 md:px-12 sm:px-12">
                <div className="flex flex-col p-6 max-w-lg text-center bg-white-10 rounded-3xl border border-dark-grey">
                    <h3 className="mb-4 2xl:text-2xl md:text-xl sm:text-xl text-lime bold-font">Starter</h3>
                    <p className="font-light text-white sm:text-lg ">Best option for personal use or for smaller scale projects</p>
                    <div className="flex justify-center items-baseline my-8">
                        <span className="mr-2 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-4xl text-lime font-extrabold">$29</span>
                        <span className="text-gray-500">/month</span>
                    </div>

                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 fill-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" ></path></svg>
                            <span>Individual configuration</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 fill-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" ></path></svg>
                            <span>No setup, or hidden fees</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 fill-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" ></path></svg>
                            <span>Team size: <span className="font-semibold">1 developer </span> </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 fill-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" ></path></svg>
                            <span>Premium support: <span className="font-semibold">6 months</span> </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 fill-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" ></path></svg>
                            <span>Free updates: <span className="font-semibold">6 months</span></span>
                        </li>
                    </ul>
                    <button className='px-6 py-4 bg-black rounded-full font-weight-bolder text-white hover:bg-dark-grey text-base bold-font'>Get started</button>
                </div>


                <div className="flex flex-col p-6 max-w-lg text-center text-black bg-lime-hover rounded-3xl bg-[url('/images/Ellipse.svg')]">
                    <h3 className="mb-4 2xl:text-2xl md:text-xl sm:text-xl bold-font">Company</h3>
                    <p className="font-light text-dark-gray sm:text-lg ">Relevant for multiple users, extended & premium support.</p>
                    <div className="flex justify-center items-baseline my-8">
                        <span className="mr-2 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-4xl font-extrabold">$99</span>
                        <span className="text-gray-500">/month</span>
                    </div>

                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" ></path></svg>
                            <span>Individual configuration</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" ></path></svg>
                            <span>No setup, or hidden fees</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" ></path></svg>
                            <span>Team size: <span className="font-semibold">10 developers </span> </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" ></path></svg>
                            <span>Premium support: <span className="font-semibold">24 months</span> </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" ></path></svg>
                            <span>Free updates: <span className="font-semibold">24 months</span></span>
                        </li>
                    </ul>
                    <button className='px-6 py-4 bg-black rounded-full font-weight-bolder text-white hover:bg-dark-grey text-base bold-font'>Get started</button>
                </div>
            </div>
            <CallToAction heroText={"Build Stronger Connections, Faster"} paragraph={"The product will officially launch in March, 2025. Enjoy exclusive early access now"} />
        </div>
    )
}

export default PricingCard;
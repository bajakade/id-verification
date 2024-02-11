'use client';

import { info } from "./mock-data";

export const BodySection = () => {
    // const {t} = useTranslation();
    return (
        <section className="bg-gray-200 min-h-screen">
            <div className="container mx-auto py-8 px-4">
                <div className="flex">
                    {/* Left Column - List */}
                    <div className="w-1/5 pr-4">
                        <ul>
                        <li className="flex items-center mb-4">
                            <input type="radio" id="option1" name="options" className="mr-2" />
                            <label htmlFor="option1">Option 1</label>
                        </li>
                        <li className="flex items-center mb-4">
                            <input type="radio" id="option2" name="options" className="mr-2" />
                            <label htmlFor="option2">Option 2</label>
                        </li>
                        {/* Add more list items as needed */}
                        </ul>
                    </div>
                    {/* Right Column */}
                    <div className="w-4/5">
                        <h2 className="text-2xl font-semibold mb-2">John Doe</h2>
                        <p className="text-gray-700 mb-6">BVN 1234567890</p>
                        {/* Two-column section */}
                        <div className="flex bg-white w-full p-10">
                        {/* Left Column - Passport photo */}
                        <div className="w-1/4 pr-4">
                            <img src="/passport.png" alt="Passport" className="w-4/5" />
                        </div>
                        {/* Right Column */}
                        <div className="w-3/4 rounded">
                            {/* Row 1 */}
                            <div className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">Identity Response</h3>
                            <div className="border-b border-gray-300 w-full mb-4"></div>
                            <div className="flex mb-8">
                                <div className="w-1/3 pr-4">
                                    <h4 className="text-gray-700 mb-2">Bank Verification Number</h4>
                                    <p className="font-semibold">1234567890</p>
                                </div>
                                <div className="w-1/3 pr-4">
                                    <h4 className="text-gray-700 mb-2">Verification Type</h4>
                                    <p className="font-semibold">BVN</p>
                                </div>
                                <div className="w-1/3">
                                    <h4 className="text-gray-700 mb-2">Verification Status</h4>
                                    <p className="font-semibold">Verified</p>
                                </div>
                            </div>
                        </div>
                            {/* Row 2 */}
                        <div className="mb-4">
                        <h3 className="text-xl text-gray-700 mb-2">Personal details</h3>
                        <div className="border-b border-gray-300 w-full mb-4"></div>
                        <div className="grid grid-rows-4 grid-flow-col gap-4">
                            {Object.entries(info).map(([key, value]) => (
                                <div key={key}>
                                    <h4 className="text-gray-700 mb-2">{key}</h4>
                                    <p className="font-semibold ">{value}</p>
                                </div>
                            ))}
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}
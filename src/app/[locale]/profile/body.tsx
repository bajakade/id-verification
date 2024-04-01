import { id, info } from "./mock-data";

import { services } from "@/constants";

export default function BodySection ({t}: {t: any}){
    return (
        <section className="bg-gray-200 min-h-screen lg:mx-32">
            <div className="container mx-auto py-8 px-4">
                <div className="lg:flex">
                    {/* Left Column - List */}
                    <div className="w-full  md:w-1/5 md:pr-4">
                        <ul>
                            {services.map(s => (
                            <li className="flex items-center mb-4" key={s.shortName}>
                                <input type="radio" id={s.shortName} name="options" className="mr-2" />
                                <label htmlFor="option1">{s.title}</label>
                            </li>
                            ))}
                        </ul>
                    </div>
                    {/* Right Column */}
                    <div className="w-full lg:w-4/5">
                        <h2 className="text-2xl font-semibold mb-2">{info.name}</h2>
                        <p className="text-gray-700 mb-6">{`${id.type} ${id.bvn}`}</p>
                        {/* Two-column section */}
                        <div className="lg:flex bg-white w-full p-10 rounded-lg">
                            {/* Left Column - Passport photo */}
                            <div className="lg:w-1/4">
                                <img src="/passport.png" alt="Passport" className="xs:w-1/2 sm:m-auto xs:p-4 lg:w-4/5"/>
                            </div>
                            {/* Right Column */}
                            <div className="w-3/4">
                                <div className="mb-4">
                                <h3 className="text-xl font-semibold mb-2">{t('Profile.identity.title')}</h3>
                                <div className="border-b border-gray-300 w-full mb-4"></div>
                                <div className="flex mb-8">
                                    <div className="w-1/3 pr-4">
                                        <h4 className="text-gray-700 mb-2">{t('Profile.identity.bvn')}</h4>
                                        <p className="font-semibold">{id.bvn}</p>
                                    </div>
                                    <div className="w-1/3 pr-4">
                                        <h4 className="text-gray-700 mb-2">{t('Profile.identity.type')}</h4>
                                        <p className="font-semibold">{id.type}</p>
                                    </div>
                                    <div className="w-1/3">
                                        <h4 className="text-gray-700 mb-2">{t('Profile.identity.status')}</h4>
                                        <p className="font-semibold">{id.status}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl text-gray-700 mb-2">{t('Profile.details.title')}</h3>
                                <div className="border-b border-gray-300 w-full mb-4"></div>
                                <div className="grid grid-rows-6 grid-flow-col gap-4">
                                    {Object.entries(info).map(([key, value]) => (
                                        <div key={key}>
                                            <h4 className="text-gray-700 mb-2">{t(`Profile.details.${key}`)}</h4>
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
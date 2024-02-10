import { FaCertificate, FaIdBadge, FaIdCard, FaRegUserCircle, FaUserCheck } from "react-icons/fa"
import { ReactElement, cloneElement } from "react";

import { FaPhoneFlip } from "react-icons/fa6"
import { Icon } from "@/types";
import { IconType } from "react-icons"

const icons = {
    id: <FaIdBadge />,
    user: <FaUserCheck />,
    reg: <FaRegUserCircle  />,
    phone: <FaPhoneFlip />,
    card: <FaIdCard />,
    cert: <FaCertificate />
}

interface Props {
    [key: string]: any;
  }
  
  function createIcon<P extends Props>(
    component: ReactElement<P>,
    additionalProps: {color: string, className: string}
  ): ReactElement<P> {
    // Clone the component and merge additional props
    return cloneElement(component, { ...component.props, ...additionalProps });
  }

export default function About ({title, introduction, services}: {
        title: string,
        introduction: string,
        services: Array<any>
    }) {
    return (
        <div className="flex-1 mr-4 pt-44">
          {/* Welcome Message */}
          <h2 className="text-5xl font-bold text-white text-center">{title}</h2>
          {/* Description */}
          <p className="text-white text-2xl mt-2 mb-20 text-center">{introduction}</p>
          {/* Grid of Boxes */}
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
           {services.map(service => (
                <div key={service.shortName} className="bg-white bg-opacity-30 p-4 h-30 w-30 rounded-md items-center justify-center">
                    {/* Icon */}
                    {createIcon<IconType>(icons[service.icon as Icon], {className: "w-12 h-8 mx-auto", color: 'white'})}
                    {/* Text Description */}
                    <p className="text-xs text-white text-center mt-2">{service.shortName}</p>
                </div>
           ))}
          </div>
        </div>
    )
}
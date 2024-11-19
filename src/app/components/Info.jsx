"use client";
import React from "react";
import { PackageOpen, CalendarCheck, Route, Plane } from "lucide-react";
// import { FaRegCalendarCheck } from "react-icons/fa6";
function Info() {
  return (
    <div className="h-full py-40 px-20 flex gap-4">
      <div className="w-[45%]">
        <p className="text-5xl font-bold text-textcolor">
          What Make Us Different
        </p>
        <p className="text-gray-400 mt-4">
          We pride ourselves on providing the best transport and shipping
          services available allover the world. Our skilled personnel, utilising
          communications, tracking and processing software, combined with
          decades of experience! Through integrated supply chain solutions,
          Equita drives sustainable competitive advantages to some of
          Australia’s largest companies.
        </p>
      </div>
      {/* <div className="w-2/3 flex flex-wrap gap-y-8 ">
        <Div
          //   Icon="/images/open-box.png"
          Icon={PackageOpen}
          title="Safe Packing"
          desc="International supply chains involves challenging regulations."
        />
        <Div
          //   Icon="/images/calendar2.png"
          Icon={CalendarCheck}
          title="In Time Delivery"
          desc="International supply chains involves challenging regulations."
        />
        <Div
          //   Icon="/images/location-icon.png"
          Icon={Route}
          title="Ship Everywhere"
          desc="International supply chains involves challenging regulations."
        />
        <Div
          //   Icon="/images/airplane1.png"
          Icon={Plane}
          title="Fastest Shipping"
          desc="International supply chains involves challenging regulations."
        />
      </div> */}
      <div className="w-2/3 flex flex-wrap gap-y-8 ">
        <Div
          Icon="/images/Sales.png"
          // Icon={PackageOpen}
          title="Sales & Marketing Prowess"
          desc="International supply chains involves challenging regulations."
        />
        <Div
          Icon="/images/Excellence.png"
          // Icon={CalendarCheck}
          title="Operational Excellence"
          desc="International supply chains involves challenging regulations."
        />
        <Div
          Icon="/images/Customer.png"
          // Icon={Route}
          title="Superior Customer Service"
          desc="International supply chains involves challenging regulations."
        />
        <Div
          Icon="/images/Network.png"
          // Icon={Plane}
          title="Strong Network"
          desc="International supply chains involves challenging regulations."
        />
      </div>
    </div>
  );
}

function Div({ Icon, title, desc }) {
  return (
    <div className="flex gap-4 w-1/2 ">
      <div>
        <img src={Icon} className="w-28 h-20" />
        {/* <Icon className="w-12 h-12 text-primary" /> */}
      </div>
      <div>
        <p className="text-lg font-bold text-textcolor">{title}</p>
        <p className="text-gray-400">{desc}</p>
      </div>
    </div>
  );
}

export default Info;

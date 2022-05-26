import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
const BusinessSummary = () => {
  return (
    <div>
      <h2 className="text-5xl text-red-400 text-center mt-12">
        Business Summary
      </h2>
      <div className="stats stats-vertical lg:stats-horizontal shadow gap-3 my-12">
        <div className="stat p-12 bg-red-200">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-2xl">Served Customers</div>
          <div className="stat-value">100+ </div>
        </div>

        <div className="stat p-12 bg-orange-200 ">
          <div className="stat-figure text-primary text-3xl">
            <GiTakeMyMoney />
          </div>
          <div className="stat-title text-2xl">Annual Revenue</div>
          <div className="stat-value">120M+</div>
          <div className="stat-desc"></div>
        </div>

        <div className="stat p-12 bg-red-200">
          <div className="stat-figure text-red-400 text-3xl">
            <HiOutlineUserGroup />
          </div>
          <div className="stat-title text-2xl">Review</div>
          <div className="stat-value">33k</div>
        </div>
        <div className="stat p-12 bg-orange-200">
          <div className="stat-figure text-violet-500 text-3xl">
            <FaTools />
          </div>
          <div className="stat-title text-2xl"> Tools</div>
          <div className="stat-value">50+</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;

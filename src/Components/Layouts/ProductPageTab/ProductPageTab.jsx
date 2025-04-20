import React, { useState } from 'react';

const ProductPageTab = () => {
   const [activeTab, setActiveTab] = useState("Detail");

   const tabData = [
     { name: "Detail", content: "This is the content for the Detail tab." },
     { name: "Specifications", content: "This is the content for the Specifications tab." },
     { name: "Vendor", content: "This is the content for the Vendor tab." },
     { name: "Reviews", content: "This is the content for the Reviews tab." },
   ];
   return (
<div className="tabs-box bg-white">
      {/* Tab Navigation */}
      <div className="flex space-x-4 bg-white">
        {tabData.map((tab) => (
          <label key={tab.name}>
            <input
              type="radio"
              name="unique_tab_group_1" // Unique name for this tab group
              className="hidden" // Hide the radio input
              checked={activeTab === tab.name}
              onChange={() => setActiveTab(tab.name)}
            />
            <span
              className={`px-[30px] py-[10px] rounded-md ${
                activeTab === tab.name
                  ? "bg-[#5CAF90]  text-white "
                  : "t-hue-dark border border-[#EEEEEE] hover:text-[#5CAF90]"
              }`}
            >
              {tab.name}
            </span>
          </label>
        ))}
      </div>

      {/* Tab Content */}
      {tabData.map((tab) => (
        <div
          key={tab.name}
          className={`tab-content border border-[#EEEEEE] p-6 mt-4 rounded-md ${
            activeTab === tab.name ? "block" : "hidden"
          }`}
        >
          {tab.content}
        </div>
      ))}
    </div>
   );
};

export default ProductPageTab;

// className={`px-[30px] py-[10px] rounded-md ${
//    activeTab === tab.name
//      ? "bg-[#5CAF90]  text-white "
//      : "text-gray-600 hover:text-[#5CAF90]"
//  }`}
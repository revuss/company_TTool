import React, { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <div className="flex flex-col justify-center h-full items-center w-full overflow-hidden">
      <div className="flex border-[4px] h-[10%] rounded-lg border-gray-800 w-full justify-center bg-gray-800 text-white">
        <div className="relative flex w-full border-[4px] rounded-lg border-gray-800 bg-gray-800 text-white overflow-hidden">
          <div
            className="absolute top-0 bottom-0 bg-green-600 rounded-md transition-transform duration-300 ease-in-out"
            style={{
              width: `${100 / tabs.length}%`,
              transform: `translateX(${activeTab * 100}%)`,
            }}
          ></div>

          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              className={`py-2 px-4 flex-1 text-center relative font-semibold transition-colors duration-300 ${
                activeTab === index ? "text-white" : "text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`tab-content p-2 mt-2 overflow-y-auto w-full h-full bg-white border border-gray-200 rounded-lg transform transition-transform duration-300 ease-out ${
          isAnimating
            ? "translate-y-[20vh] opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default Tabs;

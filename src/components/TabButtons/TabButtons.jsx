import "./TabButtons.scss";
import React from "react";

const TabButtons = ({ activeTab, setActiveTab }) => {
    
    const tabs = [
        "Project Information",
        "Languages Used",
        "Future Scope",
    ];

  return (
    <div className="tab__header">
        <ul className="tab-list">
            {tabs.map((tab, index) => (
            <li
            key={index}
            className={`tab__button ${activeTab === tab ? "selected" : ""}`}
            onClick={() => setActiveTab(tab)}>
            {tab}
            </li>
            
        ))}
        </ul>
    </div>
  );
};

export default TabButtons;

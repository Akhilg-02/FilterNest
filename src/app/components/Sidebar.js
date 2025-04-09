"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";


const sections = [
  "idealFor",
  "occasion",
  "work",
  "fabric",
  "segment",
  "suitableFor",
  "rawMaterials",
  "pattern",
];

const options = {
  idealFor: ["All", "Men", "Women", "Kids"],
  occasion: ["All"],
  work: ["All"],
  fabric: ["All"],
  segment: ["All"],
  suitableFor: ["All"],
  rawMaterials: ["All"],
  pattern: ["All"],
};

export default function Sidebar({
  activeFilters,
  onFilterChange,
  showFilters,
}) {
  const [expanded, setExpanded] = useState(() => {
    const initial = {};
    sections.forEach((key) => (initial[key] = true));
    return initial;
  });

  const toggleSection = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!showFilters) return null;

  return (
    <aside className={`sidebar ${showFilters ? "active" : ""}`}>
      <div className="filter-section">
        <label>
          <input
            type="checkbox"
            checked={activeFilters.customizable}
            onChange={(e) => onFilterChange("customizable", e.target.checked)}
          />
          CUSTOMIZABLE
        </label>
      </div>

      {sections.map((key) => (
        <div key={key} className="filter-section">
          <div className="filter-title" onClick={() => toggleSection(key)}>
            <span>{key.replace(/([A-Z])/g, " $1").toUpperCase()}</span>
            {expanded[key] ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </div>

        {expanded[key] && (
            <div className="filter-options">
              {options[key].map((opt) => (
                <label key={opt}>
                  <input
                    type="radio"
                    name={key}
                    checked={activeFilters[key] === opt}
                    onChange={() => onFilterChange(key, opt)}
                  />
                  {opt === "Kids" ? "Baby & Kids" : opt}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}

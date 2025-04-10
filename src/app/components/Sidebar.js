"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
          <span style={{ fontWeight: "bold" }}>&nbsp;&nbsp;CUSTOMIZABLE</span>
        </label>
      </div>

      {sections.map((key) => (
        <div key={key} className="filter-section">
          {key === "idealFor" ? (
            <>
              <div
                className="filter-title"
                onClick={() => toggleSection(key)}
                style={{ cursor: "pointer" }}
              >
                <span>{key.replace(/([A-Z])/g, " $1").toUpperCase()}</span>
                {expanded[key] ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </div>

              {expanded[key] ? (
                <div className="filter-options">
                  <label className="filter-option">
                    <span onClick={() => onFilterChange("idealFor", "All")}>
                      All
                    </span>
                  </label>
                  <button
                    className="unselect-btn"
                    onClick={() => onFilterChange("idealFor", "All")}
                  >
                    Unselect all
                  </button>

                  {options[key]
                    .filter((opt) => opt !== "All")
                    .map((opt) => (
                      <label key={opt} className="filter-option">
                        <input
                          type="checkbox"
                          checked={activeFilters[key]?.includes(opt)}
                          onChange={() => onFilterChange(key, opt)}
                        />
                        <span>{opt === "Kids" ? "Baby & Kids" : opt}</span>
                      </label>
                    ))}
                </div>
              ) : (
                <div>
                  <span>All</span>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="filter-title">
                <span>{key.replace(/([A-Z])/g, " $1").toUpperCase()}</span>
                <span>
                  <ChevronDown size={16} />
                </span>
              </div>
              <div>
                <span>All</span>
              </div>
            </>
          )}
        </div>
      ))}
    </aside>
  );
}

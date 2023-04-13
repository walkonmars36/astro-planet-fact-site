import { useState } from "preact/hooks";

const MobileBtns = ({ activeTab, name }) => {
  const [tab, setTab] = useState(activeTab);

  function changeActiveTab(tab) {
    setTab(tab);
  }

  const activeStyle = {
    borderBottomColor: `var(--${name.toLowerCase()}-color)`,
  };

  return (
    <section className="page__buttons-mob">
      <button
        className={`page__buttons-mob--item ${
          tab === "overview" ? "active" : ""
        }`}
        style={tab === "overview" ? activeStyle : {}}
        onClick={() => changeActiveTab("overview")}
      >
        Overview
      </button>
      <button
        className={`page__buttons-mob--item ${
          tab === "Structure" ? "active" : ""
        }`}
        style={tab === "Structure" ? activeStyle : {}}
        onClick={() => changeActiveTab("Structure")}
      >
        Structure
      </button>
      <button
        className={`page__buttons-mob--item ${
          tab === "Surface" ? "active" : ""
        }`}
        style={tab === "Surface" ? activeStyle : {}}
        onClick={() => changeActiveTab("Surface")}
      >
        Surface
      </button>
    </section>
  );
};

export default MobileBtns;

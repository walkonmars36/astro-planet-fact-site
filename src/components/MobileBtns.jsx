const MobileBtns = ({ name, tab, changeActiveTab }) => {
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
          tab === "structure" ? "active" : ""
        }`}
        style={tab === "structure" ? activeStyle : {}}
        onClick={() => changeActiveTab("structure")}
      >
        Structure
      </button>
      <button
        className={`page__buttons-mob--item ${
          tab === "surface" ? "active" : ""
        }`}
        style={tab === "surface" ? activeStyle : {}}
        onClick={() => changeActiveTab("surface")}
      >
        Surface
      </button>
    </section>
  );
};

export default MobileBtns;

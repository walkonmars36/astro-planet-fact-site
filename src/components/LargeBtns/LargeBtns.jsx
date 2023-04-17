import "./LargeBtns.scss";

const LargeBtns = ({ name, tab, changeActiveTab }) => {
  const activeStyle = {
    background: `var(--${name.toLowerCase()}-color)`,
  };

  return (
    <section className="page__buttons-large">
      <button
        className={`page__buttons-large--item ${
          tab === "overview" ? "active" : ""
        }`}
        style={tab === "overview" ? activeStyle : {}}
        onClick={() => changeActiveTab("overview")}
      >
        <span>01</span>
        Overview
      </button>
      <button
        className={`page__buttons-large--item ${
          tab === "structure" ? "active" : ""
        }`}
        style={tab === "structure" ? activeStyle : {}}
        onClick={() => changeActiveTab("structure")}
      >
        <span>02</span>
        Internal Structure
      </button>
      <button
        className={`page__buttons-large--item ${
          tab === "surface" ? "active" : ""
        }`}
        style={tab === "surface" ? activeStyle : {}}
        onClick={() => changeActiveTab("surface")}
      >
        <span>03</span>
        Surface Geology
      </button>
    </section>
  );
};

export default LargeBtns;

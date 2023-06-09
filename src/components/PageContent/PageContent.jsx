import { useState } from "preact/hooks";
import "./PageContent.scss";
import MobileBtns from "../MobileBtns/MobileBtns";
import LargeBtns from "../LargeBtns/LargeBtns";

const PageContent = ({ name, images, overview, structure, geology }) => {
  const [tab, setTab] = useState("overview");

  function changeActiveTab(currentTab) {
    setTab(currentTab);
  }

  function currentImage() {
    return tab === "structure" ? images.internal : images.planet;
  }

  function currentContent() {
    return tab === "overview"
      ? overview
      : tab === "structure"
      ? structure
      : geology;
  }

  return (
    <div class="page">
      <MobileBtns name={name} tab={tab} changeActiveTab={changeActiveTab} />
      <div class="planet__img-container">
        <img
          class={`planet__img planet__img--${name}`}
          src={currentImage()}
          alt={`The planet ${name}`}
        />
        {tab === "surface" && (
          <img
            class="planet__img--surface"
            src={images.geology}
            alt={`The surface of ${name}`}
          />
        )}
      </div>

      <div className="page__larger-screens">
        <article class="page__content">
          <h1 class="page__title">{name}</h1>
          <p class="page__text">{currentContent().content}</p>
          <small class="wiki-link">
            Source : <a href={currentContent().source}>Wikipedia</a>
          </small>
        </article>
        <LargeBtns name={name} tab={tab} changeActiveTab={changeActiveTab} />
      </div>
    </div>
  );
};

export default PageContent;

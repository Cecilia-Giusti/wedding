import LegendeItem from "./LegendeItem";
import { useState } from "react";

interface legendesInt {
  name: string;
  text: string;
}

interface sectionRepererInt {
  title: string;
  img: string;
  direction: string;
  legendes: Array<legendesInt>;
}
//
const SectionReperer = ({
  title,
  img,
  direction,
  legendes,
}: sectionRepererInt) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = () => {
    setIsZoomed(!isZoomed);
    if (!isZoomed) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const className =
    direction === "right" ? "article-reperer-right" : "article-reperer-left";

  return (
    <article className={className}>
      <div className={`${className}-container`}>
        <h4 className={`${className}-title`}>{title}</h4>
        <div className={`${className}-content`}>
          <img
            src={img}
            alt={`Lieu de ${title}`}
            className={
              isZoomed ? `${className}-img zoomed` : `${className}-img`
            }
            onClick={handleClick}
          />
          <div className={`${className}-text`}>
            <p className={`${className}-legende`}>Légende</p>
            <ul>
              {legendes.map((legende, id) => {
                switch (legende.name) {
                  case "adresse":
                    return (
                      <LegendeItem
                        icone='fa-solid fa-location-dot'
                        text={legende.text}
                        key={id}
                      />
                    );
                  case "parking":
                    return (
                      <LegendeItem
                        icone='fa-solid fa-square-parking'
                        text={legende.text}
                        key={id}
                      />
                    );

                  case "cocktail":
                    return (
                      <LegendeItem
                        icone='fa-solid fa-champagne-glasses'
                        text={legende.text}
                        key={id}
                      />
                    );

                  case "repas":
                    return (
                      <LegendeItem
                        icone='fa-solid fa-utensils'
                        text={legende.text}
                        key={id}
                      />
                    );

                  default:
                    return <li></li>;
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SectionReperer;

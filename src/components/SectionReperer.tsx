import LegendeItem from "./LegendeItem";

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

const SectionReperer = ({
  title,
  img,
  direction,
  legendes,
}: sectionRepererInt) => {
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
            className={`${className}-img`}
          />
          <div className={`${className}-text`}>
            <p className={`${className}-legende`}>Légende</p>
            <ul>
              {legendes.map((legende) => {
                switch (legende.name) {
                  case "adresse":
                    return (
                      <LegendeItem
                        icone='fa-solid fa-location-dot'
                        text={legende.text}
                      />
                    );
                  case "parking":
                    return (
                      <LegendeItem
                        icone='fa-solid fa-square-parking'
                        text={legende.text}
                      />
                    );

                  case "cocktail":
                    return (
                      <LegendeItem
                        icone='fa-solid fa-champagne-glasses'
                        text={legende.text}
                      />
                    );

                  case "repas":
                    return (
                      <LegendeItem
                        icone='fa-solid fa-utensils'
                        text={legende.text}
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

import BandeauPartie from "../components/BandeauPartie";
import ProgrammeCard from "../components/ProgrammeCard";
import SectionReperer from "../components/SectionReperer";
import TripColumn from "../components/TripColumn";
import data from "../data/database.json";

const Organisation = () => {
  return (
    <main className='organisation'>
      <section className='organisation-main'>
        <img
          src='./assets/images/text-orga.png'
          className='organisation-main-img'
          alt='L organisation'
        />
      </section>
      <BandeauPartie text='Programme' />
      <section className='organisation-programme'>
        <ul className='organisation-programme-list'>
          {data.programmes.map((item) => {
            return (
              <li className='organisation-programme-item' key={item.id}>
                <ProgrammeCard
                  img={item.img}
                  hour={item.hours}
                  text={item.text}
                  name={item.name}
                  textPlus={item.textPlus}
                />
              </li>
            );
          })}
        </ul>
      </section>
      <BandeauPartie text='Se repérer' />
      {data.reperer.map((item) => {
        return (
          <section className='organisation-reperer' key={item.id}>
            <SectionReperer
              title={item.title}
              direction={item.direction}
              img={item.img}
              legendes={item.legende}
            />
          </section>
        );
      })}
      <BandeauPartie text='Préparer son voyage' />
      <section className='organisation-voyage'>
        {data.voyage.map((item) => {
          return (
            <div>
              <TripColumn />
            </div>
          );
        })}

        <div>
          <h4>Petits conseils</h4>
          <h5>En avion : </h5>
          <ul>
            {data.tips.plane.map((tips) => {
              return <li>{tips}</li>;
            })}
          </ul>
          <h5>En bateau : </h5>
          <ul>
            {data.tips.boat.map((tips) => {
              return <li>{tips}</li>;
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Organisation;

import BandeauPartie from "../components/BandeauPartie";
import ProgrammeCard from "../components/ProgrammeCard";
import SectionReperer from "../components/SectionReperer";
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
              legendes={item.legendes}
            />
          </section>
        );
      })}
    </main>
  );
};

export default Organisation;

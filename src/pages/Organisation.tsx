import { useState } from "react";
import BandeauPartie from "../components/BandeauPartie";
import ProgrammeCard from "../components/ProgrammeCard";
import SectionReperer from "../components/SectionReperer";
import TripColumn from "../components/TripColumn";
import data from "../data/database.json";

const Organisation = () => {
  const [isZoomed, setIsZoomed] = useState(false);
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
      <BandeauPartie text='Préparer son voyage' />
      <section className='organisation-voyage'>
        <div className='organisation-voyage-content'>
          {data.voyage.map((item) => {
            return (
              <TripColumn
                id={item.id}
                title={item.title}
                items={item.items}
                key={item.id}
              />
            );
          })}
        </div>
        <div className='organisation-tips'>
          <h6 className='organisation-tips-title'>Petits conseils</h6>
          <p className='organisation-tips-subtitle'>En avion : </p>
          <ul className='organisation-tips-list'>
            {data.tips.plane.map((tips, id) => {
              return (
                <li className='organisation-tips-item' key={id}>
                  {tips}
                </li>
              );
            })}
          </ul>
          <p className='organisation-tips-subtitle'>En bateau : </p>
          <ul>
            {data.tips.boat.map((tips, id) => {
              return (
                <li className='organisation-tips-item' key={id}>
                  {tips}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Organisation;

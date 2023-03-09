import BandeauPartie from "../components/BandeauPartie";
import TripColumn from "../components/TripColumn";
import data from "../data/database.json";

const More = () => {
  return (
    <main className='more'>
      <section className='more-main'>
        <img
          src='./assets/images/more-text.png'
          className='more-img'
          alt='Les plus'
        />
      </section>
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

export default More;

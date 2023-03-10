interface HomeInt {
  screenWidth: number;
}

const Home = ({ screenWidth }: HomeInt) => {
  return (
    <main className='home'>
      <div className='home-img'>
        <img src='./assets/images/name.png' alt='alexandre et cecilia' />
      </div>
      <div className='home-content'>
        {screenWidth < 540 ? (
          <p className='home-date'>
            {" "}
            VENDREDI VINGT-ET-UN JUILLET <br /> DEUX MILLE VINGT-TROIS
          </p>
        ) : (
          <p className='home-date'>
            VENDREDI VINGT-ET-UN JUILLET | DEUX MILLE VINGT-TROIS
          </p>
        )}
      </div>
    </main>
  );
};

export default Home;

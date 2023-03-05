const History = () => {
  return (
    <main className='history'>
      <section className='history-main'>
        {" "}
        <div className='history-main-img'>
          <img src='./assets/images/notrehistoire.png' alt='Notre histoire' />
        </div>
      </section>
      <section className='history-container'>
        <div className='history-container-images'>
          <div className='history-container-images-1'>
            <img
              src='./assets/images/photo1.jpg'
              alt='Nous à la plage'
              className='history-container-image1'
            />
          </div>
          <div className='history-container-images-2-3'>
            <img src='./assets/images/photo2.jpg' alt='Nous à la pêche' />
            <img src='./assets/images/photo3.jpg' alt='Nous sur le pont' />
          </div>
        </div>
        <div className='history-container-text'>
          <p className='history-container-paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus arcu. Aenean auctor ante eget ante pulvinar, vel molestie
            velit porttitor. Nullam bibendum enim eu sapien efficitur, euismod
            congue dolor dapibus. Sed vitae enim eu magna pellentesque
            consequat. Etiam eu magna sit amet nulla suscipit efficitur.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Suspendisse interdum sem at lacinia
            bibendum. Nullam tincidunt risus in eros lobortis, sed luctus ex
            vehicula. Donec at aliquam ante. Sed euismod orci nec magna dapibus
            congue. Aliquam id urna eu dolor vestibulum interdum. Vivamus
            consectetur ullamcorper nibh, eu tempus orci bibendum in. Vivamus
            venenatis blandit augue sit amet bibendum. Sed sed ipsum euismod,
            finibus velit eu, ultrices tellus.
          </p>
        </div>
      </section>
    </main>
  );
};

export default History;

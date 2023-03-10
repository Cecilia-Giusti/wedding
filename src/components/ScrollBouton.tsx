interface scrollBoutonInt {
  isVisible: boolean;
}

const ScrollBouton = ({ isVisible }: scrollBoutonInt) => {
  const buttonUp = document.querySelector("#up");

  if (buttonUp) {
    buttonUp.addEventListener("touchstart", (event) => {
      event.preventDefault();
      scrollToTop();
    });
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          id='up'
          className='btn-scroll-up'
          aria-label='to up'
          onClick={() => scrollToTop()}>
          <i className='fa-solid fa-chevron-up'></i>
        </button>
      )}
    </>
  );
};

export default ScrollBouton;

interface programmeCardInt {
  img: string;
  hour: string;
  text: string;
  name: string;
  textPlus?: string;
}

const ProgrammeCard = ({
  img,
  hour,
  text,
  name,
  textPlus,
}: programmeCardInt) => {
  return (
    <div className='organisation-programme-card'>
      <div className='organisation-programme-card-img'>
        <img src={img} alt={name} />
      </div>
      <p className='organisation-programme-card-text'>{hour}</p>
      <p className='organisation-programme-card-text'>{text}</p>
      <p className='organisation-programme-card-text'>{textPlus}</p>
    </div>
  );
};

export default ProgrammeCard;

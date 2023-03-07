interface legendeItemInt {
  icone: string;
  text: string;
}
const LegendeItem = ({ icone, text }: legendeItemInt) => {
  return (
    <li>
      <i className={icone}></i>
      <p>{text}</p>
    </li>
  );
};

export default LegendeItem;

interface itemsInt {
  id: number;
  name: string;
  time: string;
  tips?: string;
}

interface TripColumnInt {
  id: number;
  title: string;
  items: Array<itemsInt>;
}

const TripColumn = ({ id, title, items }: TripColumnInt) => {
  return (
    <article className='article-voyage'>
      <h5 className='article-voyage-title'>
        {title} <br />
        (Haute-Corse)
      </h5>
      <ul className='article-voyage-list'>
        {items.map((item) => {
          return (
            <li className='article-voyage-item' key={item.id}>
              {id === 1 ? (
                <i className='fa-solid fa-plane'></i>
              ) : (
                <i className='fa-solid fa-anchor'></i>
              )}
              <div className='article-voyage-item-text'>
                <p className='article-voyage-item-name'>{item.name}</p>
                <p className='article-voyage-item-time'>{item.time}</p>
                {item.tips && (
                  <p className='article-voyage-item-tips'>{item.tips}</p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default TripColumn;

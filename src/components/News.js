/**
 * Компонент новостей
*/

function News(props) {
  return <div className='news'>
    {props.children}
  </div>;
}

function NewsList() {
    return (
      <div className="news_blocks">
        <News>
          <p className="news__block">Новость №1</p>
        </News>
        <News>
          <p className="news__block">Новость №2</p>
        </News>
        <News>
          <p className="news__block">Новость №3</p>
        </News>
      </div>
    );
  }
  
  export default NewsList;
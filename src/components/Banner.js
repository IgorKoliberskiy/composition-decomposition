/**
 * Компонент баннера 
 */

function Banner(props) {
  const { img } = props;
  return (
    <img
      className='banner'
      src={img}
      alt=''
      style={{ width: '200px' }}
    />
  );
}
export default Banner;
/**
 * Компонент виджетов
 */

function Widget({ title, ...props }) {
  return (
    <div className='widget'>
        <h5>{title}</h5>
        {props.children}
    </div>
  );
}

function Widgets() {
  return (
    <div className='widgets'>
      <Widget title='widget-title'>
        <div className='widget-block'>Виджет №1</div>
      </Widget>
      <Widget title='widget-title'>
        <div className='widget-block'>Виджет №2</div>
      </Widget>
      <Widget title='widget-title'>
        <div className='widget-block'>Виджет №3</div>
      </Widget>
    </div>
  );
}
  
export default Widgets; 
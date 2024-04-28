export default function Header(props) {

  return (
    <>
        <div className='header'>
            <div className="left">
              <button className="reset button" onClick={props.againFunct}>Заново</button>
            </div>
            <div className="right">
                <p>от 10 до 25 человек</p>
            </div>
        </div>
        <div className="title"><h2>Группировка команд</h2></div>
    </>
  )
}

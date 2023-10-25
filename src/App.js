import { useState } from 'react';

function Square() {
  //value storest he value and setValue is a function that can be used to change the value,
  // null passsed to useState as the initial value for this state variable.
  // value === null;
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }
  return (
    <button className="square" onClick={handleClick}>{value}</button>);
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div >
       <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
       </div >
    </>
    
  );
}

// export makes this functon accessible outside the file
// default tells the other file that this is the main function in this file

import { useState } from "react";


function Square() {

  const [value, setValue] = useState(null);

  function handleClick(){
    setValue('X');
  }
  return <button className="square" onClick={handleClick}>{value}</button>;
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square  />
        <Square  />
        <Square  />
      </div>
      <div className="board-row">
        <Square  />
        <Square  />
        <Square  />
      </div>
      <div className="board-row">
        <Square  />
        <Square  />
        <Square  />
      </div>
    </>
  );
}
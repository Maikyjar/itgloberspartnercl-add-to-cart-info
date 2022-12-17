import React from "react";


const Totalizers = ({total, items}: any) => {
  const { id, name, value} = total;
  console.log("los valores recibidos son",id, name, value);

  return (
    <div>
      <p>Tenemos {items.length} items en tu compra</p>
      <p>Total: ${value /100}</p>
    </div>
  )
}

export default Totalizers

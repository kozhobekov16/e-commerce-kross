import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppConext'
import check from '../../assets/images/check.svg'
import checked from '../../assets/images/checked.svg'
const Kross = ({ item }) => {
  const [add, setAdd] = useState(check)
  function addToCart(product) {
    setAdd(!add)
    setCart([...cart, product])
  }
  const { setCart, cart } = useContext(AppContext)
  return (
    <div>
      <img
        src={add ? check : checked}
        onClick={() => addToCart(item)}
        alt="check" />
      <div>
        {item.name}
      </div>
      <p>
        {item.price}
      </p>
      <img src={item.img} alt="s" />
    </div>
  )
}

export default Kross
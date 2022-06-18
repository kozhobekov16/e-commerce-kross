import React, { useContext } from 'react'
import { AppContext } from '../../AppConext'
import smile from '../../assets/images/smile.svg'
const BasketPage = () => {
  const { cart, setCart } = useContext(AppContext)
  const removeProduct = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }
  return (
    <div>
      {cart.length ? (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {cart.map(item => (
            <div key={item.id}>
              <h1>{item.name}</h1>
              <p>{item.price}</p>
              <img src={item.img} alt="img" />
              <button onClick={() => removeProduct(item.id)}>-</button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <img src={smile} alt="" />
          <h1>У вас нет заказов :(</h1>
        </div>
      )}
    </div>

  )
}

export default BasketPage
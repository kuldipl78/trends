import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalAmount = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )
      const countItems = cartList.length
      return (
        <div className="summery-Container">
          <div className="items-element">
            <h1 className="heading">
              Order Total <span className="amount">RS {totalAmount}/-</span>
            </h1>
            <p className="para">
              <span>{countItems}</span> items in cart
            </p>
            <button type="button" className="check-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

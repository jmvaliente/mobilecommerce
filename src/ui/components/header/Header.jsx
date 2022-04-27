import { Link } from 'react-router-dom'

const Header = ({ itemsCart }) => {
  return (
    <nav className='navbar is-light' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          MobilEcommerce
        </Link>
      </div>
      <div className='navbar-end'>
        <a className='navbar-item'>
          Items added: {itemsCart ? itemsCart.length : 0}
        </a>
      </div>

    </nav>
  )
}

export default Header

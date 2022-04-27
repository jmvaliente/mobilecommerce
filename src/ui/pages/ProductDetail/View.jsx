import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../components/image/Image'
import Actions from '../../components/actions/Actions'
import Description from '../../components/description/Description'

const ProductDetail = ({ mobileDetail, addMobileCart, selectMobile, setSelectMobile, setItemsCart }) => {
  const { imgUrl, colors, internalMemory, model, id } = mobileDetail
  return (
    <div className='container is-widescreen mt-5'>
      <nav className='breadcrumb' aria-label='breadcrumbs'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to={`/${id}`}>{model}</Link></li>
        </ul>
      </nav>
      <div className='tile is-ancestor'>
        <div className='tile is-6 is-parent'>
          <div className='tile is-child box'>
            <Image imgUrl={imgUrl} />
          </div>
        </div>
        <div className='tile is-vertical is-parent'>
          <div className='tile is-child box'>
            <Description mobileDetail={mobileDetail} />
          </div>
          <div className='tile is-child box'>
            <Actions
              colors={colors}
              internalMemory={internalMemory}
              addMobileCart={addMobileCart}
              selectMobile={selectMobile}
              setSelectMobile={setSelectMobile}
              setItemsCart={setItemsCart}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

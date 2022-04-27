import React from 'react'
import Image from '../../components/image/Image'
import Actions from '../../components/actions/Actions'
import Description from '../../components/description/Description'

const ProductDetail = ({ mobileDetail }) => {
  const { imgUrl } = mobileDetail
  return (
    <div className='container is-widescreen'>
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
            <Actions />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

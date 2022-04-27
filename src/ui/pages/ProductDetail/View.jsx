import React from 'react'
import Image from '../../components/image/Image'
import Actions from '../../components/actions/Actions'
import Description from '../../components/description/Description'

const ProductDetail = () => {
  return (
    <div className='container is-widescreen'>
      <div class='tile is-ancestor'>
        <div class='tile is-6 is-parent'>
          <div class='tile is-child box'>
            <Image />
          </div>
        </div>
        <div class='tile is-vertical is-parent'>
          <div class='tile is-child box'>
            <Description />
          </div>
          <div class='tile is-child box'>
            <Actions />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

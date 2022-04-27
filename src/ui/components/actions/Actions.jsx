import { useState } from 'react'
import { addCartMobile } from '../../../services/service'

const Actions = ({ colors = [], internalMemory = [], id }) => {
  const [selectMobile, setSelectMobile] = useState({
    id,
    colorCode: '0',
    storageCode: '0'
  })

  const handleChange = (key, value) => {
    setSelectMobile({ ...selectMobile, [key]: value.toString() })
  }

  const handleSubmit = async () => {
    return await addCartMobile(selectMobile)
      .then((result) => {
        result.count ? console.log(result) : Error('Error')
      })
      .catch(error => Error(error))
  }

  return (
    <div className='columns is-multiline is-mobile'>
      <div className='column is-one-quarter'>
        <strong>Color</strong>
      </div>
      <div className='column is-one-quarter'>
        <div className='select'>
          <ul>
            <select onChange={(event) => handleChange('colorCode', event.target.selectedIndex)}>
              {colors.map(color => <option key={color}>{color}</option>)}
            </select>
          </ul>
        </div>
      </div>
      <div className='column is-one-quarter'>
        <strong>Memory</strong>
      </div>
      <div className='column is-one-quarter'>
        <div className='select'>
          <ul>
            <select onChange={(event) => handleChange('storageCode', event.target.selectedIndex)}>
              {internalMemory.map(memory => <option key={memory}>{memory}</option>)}
            </select>
          </ul>
        </div>
      </div>
      <div className='column' onClick={() => handleSubmit()}>
        <button className='button is-large is-success'>Add to cart</button>
      </div>
    </div>
  )
}

export default Actions

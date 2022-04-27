import { Link } from 'react-router-dom'

const Actions = ({ colors = [], internalMemory = [], addMobileCart, selectMobile, setSelectMobile }) => {
  const handleChange = (key, value) => {
    setSelectMobile({ ...selectMobile, [key]: value.toString() })
  }

  const handleSubmit = async () => {
    addMobileCart()
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

      <div className='column is-half' onClick={() => handleSubmit()}>
        <button className='button mt-4'>Add to cart</button>
        <Link to='/'>
          <button className='button m-4 is-right'>Go Home</button>
        </Link>
      </div>
    </div>
  )
}

export default Actions

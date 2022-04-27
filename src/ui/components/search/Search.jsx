const Search = ({ setSearch }) => {
  const handleChange = (value) => {
    setSearch(value)
  }

  return (
    <div className='m-4'>
      <div className='level-right'>
        <div className='level-item'>
          <div className='field has-addons'>
            <p className='control'>
              <input className='input' onChange={(event) => handleChange(event.target.value)} type='text' placeholder='Find Devices' />
            </p>
          </div>
        </div>
        <div className='level-item' />
        <div className='level-item' />
      </div>
    </div>
  )
}

export default Search

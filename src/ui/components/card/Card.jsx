const Card = () => {
  return (
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-4by3'>
          <img src='https://front-test-api.herokuapp.com/images/xyPoqGJxYR4Nn3yVGQcfI.jpg' alt='Iconia Tab 10 A3-A40' />
        </figure>
      </div>
      <div className='card-content'>
        <div className='media'>
          <div className='media-left' />
          <div className='media-content'>
            <p className='title is-4'>Acer</p>
            <p className='subtitle is-10'>Iconia Tab 10 A3-A40</p>
            <p className='subtitle is-6'>230</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

const Card = ({ mobile }) => {
  const { imgUrl, model, price, brand } = mobile
  return (
    <div className='section'>
      <section className='columns is-centered'>
        <div className='card'>
          <figure className='image'>
            <img className='image is-128x128' src={imgUrl} alt={model} />

          </figure>

          <div className='card-content'>
            <div className='media'>
              <div className='media-left' />
              <div className='media-content'>
                <p className='title is-4'>{brand}</p>
                <p className='subtitle is-10'>Model: {model}</p>
                <p className='subtitle is-6'>Price: {price || 'Price on request'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Card

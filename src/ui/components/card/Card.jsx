const Card = ({ mobile }) => {
  const { imgUrl, model, price, brand } = mobile
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-image'>
          <figure className='image is-4by3'>
            <img src={imgUrl} alt={model} />
          </figure>
        </div>
        <div className='card-content'>
          <div className='media'>
            <div className='media-left' />
            <div className='media-content'>
              <p className='title is-4'>{brand}</p>
              <p className='subtitle is-10'>{model}</p>
              <p className='subtitle is-6'>{price || 'Sin Stock'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

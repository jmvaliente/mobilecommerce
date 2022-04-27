const Image = ({ imgUrl }) => {
  return (
    <figure className='image is-square'>
      <img src={imgUrl || 'https://bulma.io/images/placeholders/256x256.png'} />
    </figure>
  )
}

export default Image

const Description = ({ mobileDetail }) => {
  console.log(mobileDetail)
  const { brand, model, price, cpu, ram, os, displayResolution, battery, primaryCamera, secondaryCamera, dimensions, weight } = mobileDetail
  return (
    <div class='content'>
      <h2>Details</h2>
      <ul>
        <li><strong>Brand:</strong> {brand}</li>
        <li><strong>Model:</strong> {model}</li>
        <li><strong>Price:</strong>{price}</li>
        <li><strong>cpu:</strong> {cpu}</li>
        <li><strong>ram:</strong> {ram}</li>
        <li><strong>OS:</strong> {os}</li>
        <li><strong>Display Resolution:</strong> {displayResolution}</li>
        <li><strong>Battery:</strong>{battery}</li>
        <li><strong>Main Camera:</strong> {primaryCamera}</li>
        <li><strong>Second Camera:</strong>{secondaryCamera}</li>
        <li><strong>Dimensions:</strong> {dimensions}</li>
        <li><strong>weight:</strong>{weight}</li>
      </ul>
    </div>
  )
}

export default Description

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMobileDetail, addCartMobile } from '../../../services/service'

const enhance = View => {
  const ProductDetail = () => {
    const { id } = useParams()
    const [mobileDetail, setMobileDetail] = useState({})
    const [selectMobile, setSelectMobile] = useState({
      id,
      colorCode: '0',
      storageCode: '0'
    })

    useEffect(() => {
      const fetchMobileDetailData = async () => {
        const data = await getMobileDetail(id)
        setMobileDetail(data)
      }
      fetchMobileDetailData()
    }, [])

    const addMobileCart = async () => {
      return await addCartMobile(selectMobile)
        .then((result) => {
          result.count ? console.log(result) : Error('Error')
        })
        .catch(error => Error(error))
    }
    return (
      <View
        mobileDetail={mobileDetail}
        addMobileCart={addMobileCart}
        selectMobile={selectMobile}
        setSelectMobile={setSelectMobile}
      />
    )
  }
  return ProductDetail
}

export default enhance

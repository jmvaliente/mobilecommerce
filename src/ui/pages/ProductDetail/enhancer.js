import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMobileDetail } from '../../../services/service'

const enhance = View => {
  const ProductDetail = () => {
    const { id } = useParams()
    const [mobileDetail, setMobileDetail] = useState({})
    useEffect(() => {
      const fetchMobileDetailData = async () => {
        const data = await getMobileDetail(id)
        setMobileDetail(data)
      }
      fetchMobileDetailData()
    }, [])
    return <View mobileDetail={mobileDetail} />
  }
  return ProductDetail
}

export default enhance

import { useState, useEffect } from 'react'
import { getMobileList } from '../../../services/service'
const enhance = View => {
  const Home = () => {
    const [mobileList, setMobileList] = useState([])
    useEffect(() => {
      const fetchMobileData = async () => {
        const data = await getMobileList()
        const listGropup = data.map((mobile, idx) => {
          return idx % 4 === 0 ? data.slice(idx, idx + 4) : null
        }).filter(gropup => gropup)
        setMobileList(listGropup)
      }
      fetchMobileData()
    }, [])

    return <View mobileList={mobileList} />
  }
  return Home
}

export default enhance

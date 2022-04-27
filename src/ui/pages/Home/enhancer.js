import { useState, useEffect } from 'react'
import { getMobileList } from '../../../services/service'
import { listGroup } from '../../utils/listGroup'
const enhance = View => {
  const Home = () => {
    const [mobileList, setMobileList] = useState([])
    useEffect(() => {
      const fetchMobileData = async () => {
        const data = await getMobileList()
        const listGropup = listGroup(data, 4)
        setMobileList(listGropup)
      }
      fetchMobileData()
    }, [])

    return <View mobileList={mobileList} />
  }
  return Home
}

export default enhance

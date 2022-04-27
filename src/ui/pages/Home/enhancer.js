import { useState, useEffect } from 'react'
import { getMobileList } from '../../../services/service'
import { listGroup } from '../../utils/listGroup'
import { mobileFilter } from '../../utils/search'
const enhance = View => {
  const Home = () => {
    const [mobileList, setMobileList] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
      const fetchMobileData = async () => {
        const data = await getMobileList()
        const mobileDataFilter = mobileFilter(data, search)
        const listGropup = listGroup(mobileDataFilter, 4)
        setMobileList(listGropup)
      }
      fetchMobileData()
    }, [search])

    return <View mobileList={mobileList} setSearch={setSearch} />
  }
  return Home
}

export default enhance

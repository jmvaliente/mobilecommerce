import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/card/Card'
import Search from '../../components/search/Search'

const Home = ({ mobileList, setSearch }) => {
  return (
    <div className='container'>
      <Search setSearch={setSearch} />
      {mobileList.map((groupList, idx) => {
        return (
          <div key={idx} className='tile is-ancestor'>
            {groupList.map(mobile => {
              return (
                <div key={mobile.id} className='tile is-parent'>
                  <Link to={`/${mobile.id}`}>
                    <Card mobile={mobile} />
                  </Link>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Home

import React from 'react'

import Card from '../../components/card/Card'
import Search from '../../components/search/Search'

const Home = ({ mobileList }) => {
  return (
    <>
      <Search />
      {mobileList.map((groupList, idx) => {
        return (
          <div key={idx} className='tile is-ancestor'>
            {groupList.map(mobile => {
              return (
                <div key={mobile.id} className='tile is-parent'>
                  <Card mobile={mobile} />
                </div>
              )
            })}
          </div>
        )
      })}
    </>
  )
}

export default Home

import React from 'react'
import TopCard from '~/card/topCard/TopCard'

const HomePart4 = () => {
  return (
    <div className='col c-4 m-4 l-4'>
        <div className='narbar_top'>
            <p>Top</p>
        </div>
        <div className='narbar_top-movies'>
            <TopCard />
            <TopCard />
            <TopCard />
        </div>
    </div>
  )
}

export default HomePart4
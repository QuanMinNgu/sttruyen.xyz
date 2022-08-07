import React from 'react'
import TopCard from '~/card/topCard/TopCard'

const HomePart4 = () => {
  return (
    <div className='homePart4_container'>
        <div className='narbar_top'>
            <p>Top</p>
        </div>
        <div className='narbar_top-movies'>
            <TopCard />
            <TopCard />
            <TopCard />
        </div>
        <div className='narbar_top-favor'>
            <p>Nổi Bật</p>
        </div>
        <div className='narbar_top-movies'>
            <TopCard />
            <TopCard />
            <TopCard />
            <TopCard />
            <TopCard />
            <TopCard />
            <TopCard />
        </div>
    </div>
  )
}

export default HomePart4
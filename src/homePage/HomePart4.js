import React from 'react'
import TopCard from '~/card/topCard/TopCard'

const HomePart4 = ({topProducts,outStandingProducts}) => {
  return (
    <div className='homePart4_container'>
        <div className='narbar_top'>
            <p>Top</p>
        </div>
        <div className='narbar_top-movies'>
            {topProducts?.map(item => 
                <TopCard key={item?._id + 'topMan'} item={item}/>
            )}
        </div>
        <div className='narbar_top-favor'>
            <p>Nổi Bật</p>
        </div>
        <div className='narbar_top-movies'>
            {outStandingProducts?.map(item =>
            <TopCard key={item?._id + 'outStanding'} item={item}/>
            )}
        </div>
    </div>
  )
}

export default HomePart4
import React from 'react'
import Banner from '../Components/Banner/Banner'
import RowPost from '../Components/RowPost/RowPost'
import { crime, originals, sci_fi, thriller } from '../urls'

function Home() {
  return (
    <div>
      
        <div className="home">
        <Banner></Banner>
        <RowPost title='Originals' url={originals} isBig />
        <RowPost title='Sci-Fi & Fantasy' url={sci_fi} />
        <RowPost title='Crime' url={crime} />
        <RowPost title='Thriller' url={thriller} />
      </div>
    </div>
  )
}

export default Home
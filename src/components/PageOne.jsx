import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Date from './Date'
import TitlePic from './TitlePic'
import Passage from './Passage'

function PageOne({dates, titleAndPic, articles}) {
  return (
    <div className='page1'>
      <Header />
      <NavBar />
      <Date dates={dates}/>
      <TitlePic titleAndPic={titleAndPic} />
      <Passage articles={articles} />
    </div>
  )
}

export default PageOne
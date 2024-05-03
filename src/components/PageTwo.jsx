import React from 'react'
import Date from './Date'
import TitlePic from './TitlePic'
import Passage from './Passage'

function PageTwo({dates, titleAndPic, articles}) {
  return (
    <div className='page2'>
      <Date dates={dates}/>
      <TitlePic titleAndPic={titleAndPic} />
      <Passage articles={articles} />
      </div>

  )
}

export default PageTwo
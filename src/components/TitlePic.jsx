import React from 'react'

function TitlePic({titleAndPic}) {
  return (
    <div className='TP'>
     <h3 className='TAdjust'>{titleAndPic.title}</h3>
      <img src={titleAndPic.picture} alt={titleAndPic.title} className='IMGAdjust' />
    </div>
  )
}

export default TitlePic
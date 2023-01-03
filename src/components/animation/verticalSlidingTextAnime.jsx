import React from 'react'

import "./anime.css"
const verticalSlidingTextAnime = ({list}) => {
  return (
    <div className="i-title">
            <div className="i-title-wrapper" >
                {list?.map((e,index)=>{
                    return (
                        <div className="i-title-item" key={index}>{e}</div>
                    )
                })}
            </div>
          </div>
  )
}

export default verticalSlidingTextAnime
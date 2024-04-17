import React from 'react'

export const CustomModal = ({heading, title, description,className}) => {
  return (
    <div className="customModal">
        {heading ?
          <div>
            {heading}
          </div> : null}
        <div className="customModal__title">{ title }</div>
        <div>{ description }</div>
    </div>
  )
}

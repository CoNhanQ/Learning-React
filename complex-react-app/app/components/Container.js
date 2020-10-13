import React, { useEffect } from "react"

function ComponentName(props) {
  return (
    <div className={"container py-md-5 " + (props.wide ? '' : 'container--narrow')}>
      {props.children}
    </div>
  )
}

export default ComponentName
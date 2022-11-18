import React from 'react'

function Details(props) {
  console.log(props)
  return <>
    {
     props.data.map((e)=>{
        return <div>
          <div>{e.name}</div>
          <div>{e.email}</div>
          <div>{e.mobile}</div><br></br>
        </div>
      })
    }
  </>
}

export default Details
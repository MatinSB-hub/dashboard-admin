import React, { useEffect } from 'react'

function useLogger(name,value) {
  return (
    useEffect(()=>console.log("name:",name),[value])
  )
}

export default useLogger
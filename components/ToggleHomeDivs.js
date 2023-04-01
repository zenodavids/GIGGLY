import React, { useState, useEffect } from 'react'
import HomeDivs from './HomeDivs'
import client from '../public/customer.png'
import worker from '../public/workers.png'

const ToggleHomeDivs = () => {
  const [showDiv1, setShowDiv1] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowDiv1((prevState) => !prevState)
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      {showDiv1 ? (
        <HomeDivs
          icon={client}
          plan='Need assistance?'
          desc='Work With Trusted Experts.'
        />
      ) : (
        <HomeDivs
          icon={worker}
          plan='In Search Of Gigs?'
          desc='Find Your Next Gig Here.'
        />
      )}
    </>
  )
}

export default ToggleHomeDivs

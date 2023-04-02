import React, { useState, useEffect } from 'react'
import { FaSun, FaCloudSun, FaCloudMoon } from 'react-icons/fa'

const Greeting = (props) => {
  const [timeOfDay, setTimeOfDay] = useState('')
  const [icon, setIcon] = useState(null)

  const customStyling = {
    color: props.color,
    fontSize: `${props.size}px`,
    textAlign: props.position,
  }

  useEffect(() => {
    const time = new Date().getHours()
    if (time >= 5 && time < 12) {
      setTimeOfDay(<span>Good Morning</span>)
      setIcon(<FaSun />)
    } else if (time >= 12 && time < 18) {
      setTimeOfDay(<span>Good Afternoon</span>)
      setIcon(<FaCloudSun className='text-[#FCE570]' />)
    } else {
      setTimeOfDay(<span>Good Evening</span>)
      setIcon(<FaCloudMoon />)
    }
  }, [])

  return (
    <h1 style={customStyling} className='text-sm flex items-center'>
      {timeOfDay}{' '}
      <span className='text-2xl'>
        {'  '}
        {icon}
      </span>
    </h1>
  )
}

export default Greeting

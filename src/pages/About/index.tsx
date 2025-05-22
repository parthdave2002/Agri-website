import React, { useEffect } from 'react'

const AboutSection = () => {

  useEffect(() =>{
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  },[])

  return (
    <div>AboutSection</div>
  )
}

export default AboutSection
import React, { useEffect } from 'react'

const ContactusSection = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])

  return (
    <div>ContactusSection</div>
  )
}

export default ContactusSection
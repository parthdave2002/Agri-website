import React, { useEffect } from 'react'

const ProductSection = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])

  return (
    <div>ProductSection</div>
  )
}

export default ProductSection
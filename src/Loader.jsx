import React from 'react'
import loading from './loading.gif'
import './loader.css';

const Loader = () => {
  return (
    <div className='loaderC'><img src={loading} alt="loading"/></div>
  )
}

export default Loader
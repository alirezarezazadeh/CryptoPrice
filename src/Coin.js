import React from 'react'
import './Coin.scss'
import { span } from 'react-bootstrap';

const Coin = ({ name, image, symbol, price, priceChange }) => {
  return (
    <div className='coin-container'>
        <div className='coin-row'>
        <div className='coin'>
            <img src={image} alt="crypto"/>
            <h1>{name}</h1>
            <p className='coin-symbol'>{symbol}</p>
        </div>

        <div className='coin-data'>
            <p className='coin-price'>${price}</p>
            {priceChange < 0 ? (
            <span class="badge bg-danger coin-percent-red">{priceChange.toFixed(2)}%</span>
            ) : (
            <span class="badge bg-success coin-percent-green">+{priceChange.toFixed(2)}%</span>
            )}
        </div>
        </div>
    </div>
  )
}

export default Coin

import { useEffect, useState } from 'react';
import './App.Scss';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import Coin from './Coin';

const App = () => {

  const [ coins, setCoins ] = useState([])
  const [ search, setSearch ] = useState('')
  const currDate = new Date().toLocaleDateString()

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
      console.log(res.data)
    })
    .catch(error => console.log(error))
  },[])

  const handleChange = e => {
    setSearch(e.target.value) 
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

      return (
          <div  className= "main">
            <div className='search'>
            <Form className='form mt-5 w-25 mx-auto'>
            <label className='mb-2' >Crypto Price</label>
            <input type="text" class="form-control" placeholder="Search" onChange={handleChange} />
            </Form>
            </div>
            {filteredCoins.map(coin => {
              return (
                <Coin 
                key={coin.id} 
                name={coin.name} 
                image={coin.image} 
                symbol={coin.symbol}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                />
              )
            })}
          </div>
      )

}

export default App;

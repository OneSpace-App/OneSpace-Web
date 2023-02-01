import axios from 'axios'
import {React, useState} from 'react'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
function TradePlatform() {
    const initialState = {
        userId: '',
        daoCoin: ''
    }
    const handleSubmit = async (e) => {
        // e.preventDefault()
        // const { userId, daoCoins } = data
        // const remitter = cookies.get('userId');
        // const { res:{message}} = await axios.post('http://localhost:8080/transfer', { remitter, userId, daoCoins });
        // console.log(message);

    }
    const [data, setdata] = useState(initialState)
    const handleChange = (e) => {
        setdata({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    
  return (
      <form onSubmit={e => handleSubmit(e)}>
          <label >Wallet Address </label><br />
          <input type="text" name='userId' onChange={e=>handleChange(e)}/>
          <label >Daocoins </label><br />
          <input type="text" name='daoCoins' onChange={e=>handleChange(e)}/>
          <input type="submit" />
     </form>
  )
}

export default TradePlatform
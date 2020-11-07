import React, { useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import Home from './screens/Home'
import Checkout from './screens/Checkout'
import Login from './screens/Login'
import Payment from './screens/Payment'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe(
  "pk_test_51HkXL5JBW8VKN7AOkUt4La3oA0WCej6zxc5CVToRx81hOg7zh8SVSLoX2cpEKhl5huDEWL9qKjDiU4l1pAd9O07j002LP0HTHb"
)

function App() {
  const [ {}, dispatch ] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log('The User is >>>', authUser);

      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

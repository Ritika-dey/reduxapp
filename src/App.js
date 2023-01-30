import React from 'react'
import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import {incNum, decNum} from './actions/index'

// usedespatch is trigering the action
function App() {
  const myState = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <>
      <div className='container'>
        <h1>Counter app using React + Redux</h1>
        <div className='quantity'>
          <a className='quantity__minus' title='decrement' onClick={() => {dispatch(decNum())}}><span>-</span></a>
          <input name='quantity' type="text" className='quantity__input' value={myState} />
          <a className='quantity__plus' title='increment' onClick={() => {dispatch(incNum(5))}}><span>+</span></a>
        </div>
      </div>
    </>
  )
}

export default App
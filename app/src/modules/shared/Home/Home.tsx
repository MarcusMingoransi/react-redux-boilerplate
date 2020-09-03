import React, { useState, lazy, Suspense } from 'react'
import './Home.css'
import { useSelector, useDispatch } from 'react-redux'
import { CLICK_ADD, CLICK_SUB } from "../../../store/types"

import { useTranslation } from 'react-i18next'

const Button = lazy(() => import('../../../shared/components/Button'))

const Home = () => {

  const counterReducer = useSelector((state: any) => state.counterReducer)
  const themeReducer = useSelector((state: any) => state.themeReducer)
  console.log('themeReducer', themeReducer)
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)

  const [shared] = useTranslation()
  const { t, i18n } = useTranslation('home')

  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback="Loading">
          <Button text="Click to Subtract" onClick={ () => dispatch({type: CLICK_SUB, counter: count}) } />
          <input type="number" onChange={(e) => setCount(Number(e.target.value))} value={count}/>
          <Button text="Click to ADD" onClick={ () => dispatch({type: CLICK_ADD, counter: count}) } />
          <h1>{ counterReducer }</h1>
          <p>{shared('title')}</p>
          <p>{t('someText')}</p>
        </Suspense>
      </header>
    </div>
  )
}

export default Home

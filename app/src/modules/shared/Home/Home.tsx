import React, { useState, lazy, Suspense } from 'react'
import './Home.css'
import { useSelector, useDispatch } from 'react-redux'
import { CLICK_ADD, CLICK_SUB, CLICK_SET_THEME } from "../../../store/types"

import { useTranslation } from 'react-i18next'
import { Text, Box, Grommet } from 'grommet'

import { customTheme, darkTheme } from "../../../shared/Theme";

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
      <Grommet theme={themeReducer}>
        <Box background={ {color: "light-1"} }>
          <Text color="dark-1">Component Text</Text>
          <p>Texto tag P</p>
          <Button text="Set Dark Theme" onClick={ () => dispatch({type: CLICK_SET_THEME, theme: darkTheme}) } />
          <Button text="Set Custom Theme" onClick={ () => dispatch({type: CLICK_SET_THEME, theme: customTheme}) } />
        </Box>
      </Grommet>
    </div>
  )
}

export default Home

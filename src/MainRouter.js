import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FirstNameGenerator from './components/FirstNameGenerator'
import StoryStarter from './components/StoryStarter'
import MusicInspo from './components/MusicInspo'
import FictionalCharacter from './components/FictionalCharacters'
import Navbar from './components/Navbar'
import Home from './components/Home'
import FictionalCharacters from './components/FictionalCharacters'

const MainRouter = () => {

  return(
    <div>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path="/firstnamegen" component={FirstNameGenerator} />
      <Route exact path="/storystarter" component={StoryStarter} />
      <Route exact path="/musicinspo" component={MusicInspo} />
      <Route exact path="/ficchar" component={FictionalCharacters} />
    </Switch>
    </div>
    
  )
}

export default MainRouter
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FirstNameGenerator from './components/FirstNameGenerator'
import StoryStarter from './components/StoryStarter'
import MusicInspo from './components/MusicInspo'
import Navbar from './components/Navbar'
import Home from './components/Home'
import FictionalCharacters from './components/FictionalCharacters'
import Fandoms from './components/Fandoms'
import RandomImage from './components/RandomImage'
import Superpowers from './components/Superpowers'
import WeirdFacts from './components/WeirdFacts'
import Phobias from './components/Phobias'
import Ailments from './components/Ailments'
import Journal from './components/Journal'

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
      <Route exact path="/fandoms" component={Fandoms} />
      <Route exact path="/ranimg" component={RandomImage} />
      <Route exact path="/superpower" component={Superpowers} />
      <Route exact path="/weirdfacts" component={WeirdFacts} />
      <Route exact path="/phobias" component={Phobias} />
      <Route exact path="/ailments" component={Ailments} />
      <Route exact path="/journal" component={Journal} />
    </Switch>
    </div>
    
  )
}

export default MainRouter
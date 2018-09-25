import React from 'react';
import {Scene, Router, ActionConst, Stack, Modal, Tabs, Actions} from 'react-native-router-flux';

//Home scene
import Home from '../modules/home/scenes/Home';
import ChecklistBoard from '../modules/home/scenes/ChecklistBoard';
import Checklist from '../modules/home/scenes/Checklist';
import Result from '../modules/home/scenes/Result';
import History from '../modules/home/scenes/History';

//support component
import NavButton from '../components/NavButton';

//Import Store, actions
import store from '../redux/store'
import * as c from '../config/constants'

import {color, navTitleStyle} from "../styles/theme";

export default class extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Modal>
          <Scene key="root" hideNavBar
            navigationBarStyle={{backgroundColor: "#fff"}}
            titleStyle={navTitleStyle}
            backButtonTintColor={color.black}>
            <Stack key="Main" initial={true}>
              <Scene key="Home" 
                component={Home}
                hideNavBar={true}
                initial={true} 
                type={ActionConst.REPLACE}/>
              <Scene key="ChecklistBoard"
                component={ChecklistBoard} 
                hideNavBar={true}
                navigationBarStyle={{backgroundColor: "#fff"}}
                titleStyle={navTitleStyle}/>
              <Scene key="Checklist"
                component={Checklist}
                hideNavBar={true}
                titleStyle={navTitleStyle}/>
              <Scene key="Result"
                component={Result}
                hideNavBar={true}
                titleStyle={navTitleStyle}/>
              <Scene key="History"
                component={History}
                hideNavBar={true}
                titleStyle={navTitleStyle}/>
            </Stack>
          </Scene>
        </Modal>
      </Router>
      )
  }
}
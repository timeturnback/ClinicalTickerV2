import React from 'react';
import {Scene, Router, ActionConst, Stack, Modal, Tabs, Actions} from 'react-native-router-flux';

//Home scene
import Home from '../modules/home/scenes/Home';

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

  renderCloseButton(props) {
    return (
      <NavButton onPress={Actions.pop}
        name={"md-close"}
        type={"ionicon"}
        color={color.black}/>
      )
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
              title="Home" 
              hideNavBar={true}
              initial={true} 
              type={ActionConst.REPLACE}/>
            </Stack>
          </Scene>
        </Modal>
      </Router>
      )
  }
}
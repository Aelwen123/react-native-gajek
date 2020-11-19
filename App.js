import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Auth from './pages/Auth';
import Loading from './pages/Loading';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard'
import Pay from './pages/Pay';
import SelectMerchant from './pages/SelectMerchant'
import SecurityPage from './pages/SecurityPage'

class App extends Component{
  render(){
    return(
      <Router>
        <Scene key="root">
          <Scene key="loading" component={Loading} initial = {true} hideNavBar={true}></Scene>
          <Scene key="auth" component={Auth} hideNavBar={true}></Scene>
          <Scene key="signin" component={SignIn} hideNavBar={true}></Scene>
          <Scene key="signup" component={SignUp} hideNavBar={true}></Scene>
          <Scene key="dashboard" component={Dashboard} hideNavBar={true}></Scene>
          <Scene key="pay" component={Pay} hideNavBar={true}></Scene>
          <Scene key="merchantlist" component={SelectMerchant} hideNavBar={true}></Scene>
          <Scene key="securitypage" component={SecurityPage} hideNavBar={true}></Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;

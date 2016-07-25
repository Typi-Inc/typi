import React, { Component } from 'react';
import { store } from './store'
import {actionFactory} from './actionFactory'
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { TabViewAnimated, TabViewPage, TabBarTop } from 'react-native-tab-view';
import TabBar from './dummy/tabBar';
import TopNavIOS from './navigation/topNavIOS';
import ScrollableTabBar from './dummy/scrollableTabBar';
import { Provider } from 'rx-state'

// console.log(actionFactory,'jere alksdj flkj')
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import MainInput from './input/mainInput'
// state$.subscribe(state=>console.log(state.toJS()))
export default class App extends Component {
  render() {
    return (
      <Provider store={store} actionFactory={actionFactory}>
        <TopNavIOS/>
      </Provider>
    );
  }
}
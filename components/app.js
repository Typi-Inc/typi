import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { TabViewAnimated, TabViewPage, TabBarTop } from 'react-native-tab-view';
import TabBar from './dummy/tabBar';
import NavIOS from './navigation/navIOS';
import ScrollableTabBar from './dummy/scrollableTabBar';
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
import state$ from './rx-state/state'
// state$.subscribe(state=>console.log(state.toJS()))
export default class App extends Component {
  render() {
    return (
     <NavIOS/>
    );
  }
}
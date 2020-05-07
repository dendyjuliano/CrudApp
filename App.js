import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Routes from './components/Routes';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

class App extends Component {
  render() {

    const state = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={state}>
        <NavigationContainer>
          <Routes></Routes>
        </NavigationContainer>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})

export default App;

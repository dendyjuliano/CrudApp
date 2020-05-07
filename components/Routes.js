import React, { Component } from 'react'

import Blogs from './Blogs';
import Post from './Post';
import Edit from './Edit';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

const MainTabScren = () => {
    return (
        <Tab.Navigator
            initialRouteName="Blogs"
            activeColor="#fff"

        >
            <Tab.Screen
                name="Blogs"
                component={BlogStackScreen}
                options={{
                    tabBarLabel: 'Blogs',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Post"
                component={Post}
                options={{
                    tabBarLabel: 'Post',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-notifications" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const BlogStackScreen = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#0652DD'
            },
            headerTintColor: '#fff',
        }}>
            <Stack.Screen name="Blogs" component={Blogs} options={{
                title: 'Blogs',
            }} />
            <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
    )
}

export default MainTabScren
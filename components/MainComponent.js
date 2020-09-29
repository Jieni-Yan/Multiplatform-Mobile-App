import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Dishdetail from './DishdetailComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const MenuNavigator = createStackNavigator();
const HomeNavigator = createStackNavigator();
const MainNavigator = createDrawerNavigator();
const ContactNavigator = createStackNavigator();
const AboutNavigator = createStackNavigator();

function MenuNavigatorScreen() {
    return (
        <MenuNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: "#fff"
                }
            }}>
            <MenuNavigator.Screen
                name="Menu"
                component={Menu}
            />
            <MenuNavigator.Screen
                name="Dishdetail"
                component={Dishdetail}
                options={{ headerTitle: "Dish Detail" }}
            />

        </MenuNavigator.Navigator>
    )
}

function HomeNavigatorScreen() {
    return (
        <HomeNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: "#fff"
                }
            }}>
            <HomeNavigator.Screen
                name="Home"
                component={Home}
            />

        </HomeNavigator.Navigator>
    )
}

function ContactNavigatorScreen() {
    return (
        <ContactNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: "#fff"
                }
            }}>
            <ContactNavigator.Screen
                name="Contact"
                component={Contact}
            />

        </ContactNavigator.Navigator>
    )
}

function AboutNavigatorScreen() {
    return (
        <AboutNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: "#fff"
                }
            }}>
            <AboutNavigator.Screen
                name="About"
                component={About}
            />

        </AboutNavigator.Navigator>
    )
}

function MainNavigatorScreen() {
    return (
        <MainNavigator.Navigator
            drawerStyle={{
                backgroundColor: '#C9DFE7',
                width: 240,
            }}
            initialRouteName="Home"
        >
            <MainNavigator.Screen
                name="Home"
                component={HomeNavigatorScreen}
                options={{ title: 'Home', drawerLabel: 'Home' }}
            />
            <MainNavigator.Screen
                name="Menu"
                component={MenuNavigatorScreen}
                options={{ title: 'Menu', drawerLabel: 'Menu' }}
            />
            <MainNavigator.Screen
                name="Contact"
                component={ContactNavigatorScreen}
                options={{ title: 'Contact', drawerLabel: 'Contact' }}
            />
            <MainNavigator.Screen
                name="About"
                component={AboutNavigatorScreen}
                options={{ title: 'About', drawerLabel: 'About' }}
            />
        </MainNavigator.Navigator>
    );
}

class Main extends Component {

    render() {

        return (
            <NavigationContainer>
                <MainNavigatorScreen />
            </NavigationContainer>
        );
    }
}

export default Main;
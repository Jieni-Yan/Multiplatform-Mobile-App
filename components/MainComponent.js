import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Dishdetail from './DishdetailComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem, DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import { View, Platform, Image, StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';

const MenuNavigator = createStackNavigator();
const HomeNavigator = createStackNavigator();
const MainNavigator = createDrawerNavigator();
const ContactNavigator = createStackNavigator();
const AboutNavigator = createStackNavigator();

function MenuNavigatorScreen() {
    return (
        <MenuNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: "#fff"
                }
            })}>
            <MenuNavigator.Screen
                name="Menu"
                component={Menu}
                options={({ navigation }) => ({
                    headerLeft: () => (<Icon name='menu' size={24}
                        color="white" onPress={() => navigation.toggleDrawer()} />
                    )
                })}
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
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: "#fff"
                },
                headerLeft: () => (<Icon name='menu' size={24}
                    color="white" onPress={() => navigation.toggleDrawer()} />
                )
            })}>
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
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: "#fff"
                },
                headerLeft: () => (<Icon name='menu' size={24}
                    color="white" onPress={() => navigation.toggleDrawer()} />
                )
            })}>
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
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: "#fff"
                },
                headerLeft: () => (<Icon name='menu' size={24}
                    color="white" onPress={() => navigation.toggleDrawer()} />
                )
            })}>
            <AboutNavigator.Screen
                name="About"
                component={About}
            />

        </AboutNavigator.Navigator>
    )
}

const CustomDrawerContentComponent = (props) => (
    <DrawerContentScrollView>
        <SafeAreaView style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
                <View style={{ flex: 1 }}>
                    <Image source={require('./images/logo.png')}
                        style={styles.drawerImage} />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
        </SafeAreaView>
    </DrawerContentScrollView>
);

function MainNavigatorScreen() {
    return (
        <MainNavigator.Navigator
            drawerStyle={{
                backgroundColor: '#D1C1E9',
                width: 240
            }}
            drawerContent={CustomDrawerContentComponent}
            initialRouteName="Home"
        >
            <MainNavigator.Screen
                name="Home"
                component={HomeNavigatorScreen}
                options={{
                    title: 'Home', drawerLabel: 'Home', drawerIcon: ({ tinColor }) => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            size={24}
                            color={tinColor}
                        />
                    )
                }}
            />
            <MainNavigator.Screen
                name="Menu"
                component={MenuNavigatorScreen}
                options={{
                    title: 'Menu', drawerLabel: 'Menu', drawerIcon: ({ tinColor }) => (
                        <Icon
                            name='list'
                            type='font-awesome'
                            size={24}
                            color={tinColor}
                        />
                    )
                }}
            />
            <MainNavigator.Screen
                name="Contact"
                component={ContactNavigatorScreen}
                options={{
                    title: 'Contact Us', drawerLabel: 'Contact Us', drawerIcon: ({ tinColor }) => (
                        <Icon
                            name='address-card'
                            type='font-awesome'
                            size={22}
                            color={tinColor}
                        />
                    )
                }}
            />
            <MainNavigator.Screen
                name="About"
                component={AboutNavigatorScreen}
                options={{
                    title: 'About', drawerLabel: 'About', drawerIcon: ({ tinColor }) => (
                        <Icon
                            name='info-circle'
                            type='font-awesome'
                            size={24}
                            color={tinColor}
                        />
                    )
                }}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});

export default Main;
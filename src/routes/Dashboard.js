import React from 'react';
import PropTypes from 'prop-types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

function TabBarIcon({ color, name }) {
  return <Icon name={name} size={20} color={color} />;
}

export default function DashboardRoutes() {
  return (
    <Navigator
      screenOptions={{ unmountOnBlur: true }}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#7d40e7',
        inactiveTintColor: '#999',
        labelStyle: {
          fontSize: 14,
        },
        style: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: (props) => <TabBarIcon {...props} name="menu" />,
        }}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: (props) => (
            <TabBarIcon {...props} name="account-circle" />
          ),
        }}
      />
    </Navigator>
  );
}

TabBarIcon.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

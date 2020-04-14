import React from 'react';
// import PropTypes from 'prop-types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '~/pages/Dashboard';

const { Navigator, Screen } = createBottomTabNavigator();

// function TabBarIcon({ color, name }) {
//   return <Icon name={name} size={20} color={color} />;
// }

export default function DashboardRoutes() {
  return (
    <Navigator
      screenOptions={{ unmountOnBlur: true }}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#7d40e7',
        inactiveTintColor: '#999',
        style: {
          backgroundColor: '#fff',
          borderTopColor: 'rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Entregas',
        }}
      />
    </Navigator>
  );
}

// TabBarIcon.propTypes = {
//   color: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };

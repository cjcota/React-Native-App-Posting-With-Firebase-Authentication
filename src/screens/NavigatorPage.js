import React from 'react';
import { StyleSheet } from 'react-native';
import { Constants } from 'expo';
import LoginScreen from './LoginScreen';
import FilterTab from './FilterTab';
import FeedTab from './FeedTab';
import SettingsTab from './SettingsTab';
import Signup from './SignupScreen';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { fetchStudents } from './api';
// This is the stack navigator portion
// const StudentTab = createStackNavigator(
//   {
//     ClassListScreen: ClassListScreen,
//     AttendenceScreen: AttendenceScreen,
//     AddStudentScreen: AddStudentScreen,
//   },
//   {
//     initialRouteName: 'ClassListScreen',
//     navigationOptions: {
//       headerTintColor: '#a41034',
//       headerStyle: {
//         backgroundColor: 'lightskyblue',
//       },
//     },
//   }
// );
// This is the tabe navigator portion
const FeedTabStack = createStackNavigator(
  {
    Feed: FeedTab,
  },
  {
    initialRouteName: 'Feed',
    navigationOptions: {
      headerTintColor: '#a41034',
      headerStyle: {
        backgroundColor: 'lightskyblue',
      },
    },
  }
);
const MainNavigator = createBottomTabNavigator(
  {
    Feed: FeedTabStack,
    Filter: FilterTab,
    Settings: SettingsTab,
  },
  {
    initialRouteName: 'Feed',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Feed') {
          iconName = 'ios-apps';
        } else if (routeName === 'Filter') {
          iconName = 'ios-search';
        }
        else if (routeName === 'Settings') {
          iconName = 'ios-menu';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={35} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#03C04A',
      inactiveTintColor: 'gray',
    },
  }
);
const LoginSwitch = createSwitchNavigator(
  {
    Login: LoginScreen,
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Login',
  }
);
const RegisterSwitch = createSwitchNavigator(
  {
    Register: Signup,
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Register',
  }
);
// This is the switch navigator portion
const AppNavigator = createSwitchNavigator(
  {
    Login: LoginSwitch,
    Register: RegisterSwitch,
  },
  {
    initialRouteName: 'Register',
  }
);

const NavigatorPage = createAppContainer(AppNavigator);
export default NavigatorPage;

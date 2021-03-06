import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings200005Navigator from '../features/Settings200005/navigator';
import UserProfile199998Navigator from '../features/UserProfile199998/navigator';
import Settings199997Navigator from '../features/Settings199997/navigator';
import Settings199995Navigator from '../features/Settings199995/navigator';
import SignIn2199993Navigator from '../features/SignIn2199993/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings200005: { screen: Settings200005Navigator },
UserProfile199998: { screen: UserProfile199998Navigator },
Settings199997: { screen: Settings199997Navigator },
Settings199995: { screen: Settings199995Navigator },
SignIn2199993: { screen: SignIn2199993Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

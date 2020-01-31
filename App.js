import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import ColorScreen from './src/screens/ColorScreen';

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentsScreen,
		List: ListScreen,
		Image: ImageScreen,
		Color: ColorScreen
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: 'App'
		}
	}
);

export default createAppContainer(navigator);
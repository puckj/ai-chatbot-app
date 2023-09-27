import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import { RootStackParamList } from './@types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={HomeScreen} name='HomeScreen' />
            <Stack.Screen component={ChatScreen} name='ChatScreen' />
        </Stack.Navigator>
    )
}

export default RootStack
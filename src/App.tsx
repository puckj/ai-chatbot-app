import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import RootStack from './navigation/RootStack';

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
registerRootComponent(App);

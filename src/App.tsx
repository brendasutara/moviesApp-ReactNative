import '../gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { View, Text } from 'react-native'
import { Navigation } from './presentation/navigation/Navigation'

export const App = () => {
  return (
    <NavigationContainer>
      <Text>Movies App Brenda</Text>
      <Navigation />
    </NavigationContainer>
  )
}

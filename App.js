import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
        <RestaurantDetail />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

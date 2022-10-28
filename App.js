import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import RootNavigation from './navigation'
import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
        <RootNavigation />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

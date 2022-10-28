import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import RootNavigation from './navigation'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
        <RootNavigation />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

import {AuthProvider} from './src/contexts/AuthContext';
import MainContainer from './src/components/MainContainer';
import Signup from './src/components/Signup';
import {View} from 'react-native';
export default function App() {
  return (
    <AuthProvider>
      <View style={{position: 'absolute', top: 25, right: 1, zIndex: 50, margin: 0, padding: 0}}>
        <Signup />
      </View>
      <MainContainer />
    </AuthProvider>
  );
}

import {StyleSheet, Text, View, Button} from 'react-native';
import {useAuth} from '../contexts/AuthContext';

export default function Signup() {
  const {anonSignup} = useAuth();

  return <Button title='sign in' onPress={() => anonSignup()} />;
}

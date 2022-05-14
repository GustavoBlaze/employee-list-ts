import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import NewEmployee from './src/pages/new-employee';
import ListEmployees from './src/pages/list-employees';
export default function App() {
  return (
    <ListEmployees/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

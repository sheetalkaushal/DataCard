import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Routes } from './src/Navigations/Routes';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
    <Routes/>
   </Provider>
  );
}


import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { login } from './api/user.service';
import { creatUser } from './api/user.service';
import React from 'react';
import MainNav from './navigation/mainNav';

export default function App() {

  return (
    <MainNav />
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

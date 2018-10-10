import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>Acuris - mobile app</Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    flex: 1,
    maxHeight: '10%',
    backgroundColor: '#000',
    justifyContent: 'center'
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    paddingLeft: 10
  }
})

export default Header

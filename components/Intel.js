import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const IntelListItem = props => (
  <View style={styles.intelItem}>
    <Text style={{ justifyContent: 'center' }}>
      <Text style={styles.intelProduct}>
        {props.product}
        {'  '}
      </Text>
      <Text style={styles.intelDate}>{props.date}</Text>
    </Text>
    <View>
      <Button
        style={styles.intelTitle}
        title={props.title}
        onPress={() => props.navigation.navigate('IntelViewer', { ...props })}
      >
        {'\n'}
        {props.title}
        {'\n'}
      </Button>
    </View>
    <Text>
      <Text style={styles.intelProduct}>
        {props.location}
        {'  '}
      </Text>
      <Text style={styles.intelDate}>{props.tag}</Text>
    </Text>
  </View>
)

const styles = StyleSheet.create({
  intelItem: {
    flex: 1,
    height: '100%',
    backgroundColor: '#e8e8e8',
    justifyContent: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  intelProduct: {
    flex: 1,
    fontSize: 10,
    fontWeight: 'bold',
    width: 25
  },
  intelTitle: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 14,
    alignItems: 'flex-start'
  },
  intelDate: {
    fontWeight: 'normal',
    marginLeft: 10,
    flex: 1,
    fontSize: 10,
    alignItems: 'center'
  }
})

export default IntelListItem

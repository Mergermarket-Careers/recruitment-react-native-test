import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import Header from '../components/Header'

export default class Home extends React.Component {
  render() {
    const {
      product,
      date,
      title,
      content,
      location,
      tag
    } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView style={styles.intelItem}>
          <Text>
            <Text style={styles.intelProduct}>
              {product}
              {'  '}
            </Text>
            <Text style={styles.intelDate}>{date}</Text>
          </Text>
          <View>
            <Text style={styles.intelTitle}>{title}</Text>
          </View>
          <Text>
            <Text style={styles.intelProduct}>
              {location}
              {'  '}
            </Text>
            <Text style={styles.intelDate}>{tag}</Text>
          </Text>
          <Text>
            {'\n'}
            {content}
          </Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    height: '100%'
  },
  intelItem: {
    flex: 1,
    height: '100%',
    backgroundColor: '#e8e8e8',
    padding: 10
  },
  intelProduct: {
    flex: 1,
    fontSize: 10,
    fontWeight: 'bold'
  },
  intelTitle: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 14
  },
  intelDate: {
    fontWeight: 'normal',
    marginLeft: 10,
    flex: 1,
    fontSize: 10,
    alignItems: 'center'
  }
})

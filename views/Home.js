import React from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  FlatList,
} from 'react-native'
import Header from '../components/Header'
import IntelListItem from '../components/Intel'
import data from '../data/'

// const newIntel = {
//   key: '17',
//   product: 'Debtwire',
//   title: 'New test intel',
//   content: 'This intel shold appear after the refresh of the intel happens',
//   location: 'United Kingdom',
//   tag: 'React Native, refresh, Intel, Test',
//   date: '10/10/2018'
// }

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false,
      intels: data
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <FlatList
            data={this.state.intels.reverse()}
            renderItem={({ item }) => (
              <IntelListItem {...item} navigation={this.props.navigation} />
            )}
          />
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
  }
})

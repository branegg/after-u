import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, StatusBar, TextInput, ImageBackground, ScrollView } from 'react-native';

import Colors from '../constants/Colors';
import HeaderBack from '../components/HeaderBack';
import Button from '../components/Button';
import Header from '../components/Header';

import firebase from 'firebase';
import moment from 'moment';

class PastCleansScreen extends React.Component {
  state = {
    password: true,
    cleanings: []
  };

  componentDidMount() {
    console.ignoredYellowBox = ['Setting a timer'];

    const uid = firebase.auth().currentUser.uid;
    const ref = firebase.database().ref('cleanings');
    let cleanings = [];
    ref
      .orderByChild('user')
      .equalTo(uid)
      .on('value', snapshot => {
        snapshot.val() == null &&
          this.setState({ cleanings: null }, () => {
            return false;
          });

        cleanings = [];
        snapshot.forEach(child => {
          firebase
            .database()
            .ref(`cleaners/${child.val().cleaner}`)
            .once('value')
            .then(snapshot => {
              cleanings.push([child.key, child.val(), snapshot.val()]);
              this.setState({ cleanings });
            });
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Header title='PAST CLEANS' navigation={this.props.navigation} noBackButton={true} />
        <ScrollView style={styles.wrapperView} contentContainerStyle={styles.wrapper}>
          {/* <View style={styles.item}>
                        <Text style={styles.street}>Stablewskiego 47/4</Text>
                        <View style={styles.details}>
                            <Text style={styles.date}>Monday, 24.06.2019</Text>
                            <Text style={styles.time}>08:00 – 12:30</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.itemLeft}>
                            <Text style={styles.street}>Piękna 47a</Text>
                            <Button
                                style={[styles.detailsButton, { borderColor: Colors.yellow }]}
                                textStyle={[styles.detailsButtonText, { color: Colors.yellow }]}
                                title="REVIEW"
                                onPress={() => {
                                    this.props.navigation.navigate("Review", {
                                        key,
                                        cleaning,
                                        cleaner
                                    });
                                }}
                            />
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.date}>Tuesday, 25.06.2019</Text>
                            <Text style={styles.time}>17:30 – 22:30</Text>
                        </View>
                    </View> */}
          {this.state.cleanings == null ? (
            <View style={styles.noCleanings}>
              <Text style={styles.noCleaningsTextBig}>HI THERE!</Text>
              <Image source={require('./../assets/images/personWithBg.png')} style={styles.noCleaningsImage} />
              <Text style={styles.noCleaningsText}>You can order your first{'\n'}cleaning with the button below</Text>
            </View>
          ) : this.state.cleanings.length > 0 ? (
            this.state.cleanings.map(child => {
              let key = child[0];
              let cleaning = child[1];
              let cleaner = child[2];

              return (
                <View key={key} style={styles.item}>
                  <View style={styles.itemLeft}>
                    <Text style={styles.street}>{cleaning.address}</Text>
                    <Button
                      style={[styles.detailsButton, { borderColor: Colors.yellow }]}
                      textStyle={[styles.detailsButtonText, { color: Colors.yellow }]}
                      title='REVIEW'
                      onPress={() => {
                        this.props.navigation.navigate('Review', {
                          key,
                          cleaning,
                          cleaner
                        });
                      }}
                    />
                  </View>
                  <View style={styles.details}>
                    <Text style={styles.date}>
                      {moment(cleaning.date0).format('dddd')}, {moment(cleaning.date0).format('DD.MM.YYYY')}
                    </Text>
                    <Text style={styles.time}>{cleaning.hour0}</Text>
                  </View>
                </View>
              );
            })
          ) : (
            <Image style={styles.spinner} source={require('./../assets/images/spinner.gif')} />
          )}
        </ScrollView>
      </View>
    );
  }
}

PastCleansScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  wrapper: {
    width: '100%',
    alignItems: 'center'
  },
  wrapperView: {
    width: '100%'
  },
  item: {
    width: '100%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: Colors.blue
  },
  itemLeft: {
    alignItems: 'flex-start'
  },
  street: {
    fontFamily: 'futura-medium',
    fontSize: 16,
    color: Colors.blue,
    marginBottom: 5
  },
  details: {
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  date: {
    fontFamily: 'futura-book',
    fontSize: 16,
    color: Colors.gray,
    marginBottom: 5
  },
  time: {
    fontFamily: 'futura-demi',
    fontSize: 24,
    color: Colors.blue
  },
  detailsButton: {
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderWidth: 2,
    borderRadius: 10
  },
  detailsButtonText: {
    fontFamily: 'futura-demi',
    fontSize: 12
  },
  spinner: {
    marginTop: 100
  }
});

export default PastCleansScreen;

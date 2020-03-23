import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, StatusBar, TextInput, ImageBackground, ScrollView } from 'react-native';

import Modal from 'react-native-modal';
import Colors from '../constants/Colors';
import HeaderBack from '../components/HeaderBack';
import Button from '../components/Button';
import Header from '../components/Header';

import firebase from 'firebase';
import moment from 'moment';

//"Setting a timer" warning fix
import { YellowBox } from 'react-native';
import _ from 'lodash';
YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

class MyCleaningsScreen extends React.Component {
  state = {
    password: true,
    isModalVisible: false,
    stars: 0,
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
    let starsImageUrl = require('./../assets/images/stars.png');

    if (this.state.stars == 1) {
      starsImageUrl = require('./../assets/images/stars1.png');
    } else if (this.state.stars == 2) {
      starsImageUrl = require('./../assets/images/stars2.png');
    } else if (this.state.stars == 3) {
      starsImageUrl = require('./../assets/images/stars3.png');
    } else if (this.state.stars == 4) {
      starsImageUrl = require('./../assets/images/stars4.png');
    } else if (this.state.stars == 5) {
      starsImageUrl = require('./../assets/images/stars5.png');
    }

    return (
      <View style={styles.container}>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modalBackground}>
            <View style={styles.modal}>
              <Image source={require('./../assets/images/eugene.png')} style={styles.modalPhoto} />
              <Text style={styles.modalHeader}>HOW WOULD YOU RATE{'\n'}EUGENE?</Text>
              <Text style={styles.modalText}>
                He cleaned your apartment on <Text style={styles.modalTextBold}>tuesday</Text>
              </Text>
              <ImageBackground source={starsImageUrl} style={styles.stars} imageStyle={styles.starsImage}>
                <TouchableOpacity
                  style={styles.fakeStar}
                  onPress={() => {
                    this.setState({ stars: 1 });
                  }}
                />
                <TouchableOpacity
                  style={styles.fakeStar}
                  onPress={() => {
                    this.setState({ stars: 2 });
                  }}
                />
                <TouchableOpacity
                  style={styles.fakeStar}
                  onPress={() => {
                    this.setState({ stars: 3 });
                  }}
                />
                <TouchableOpacity
                  style={styles.fakeStar}
                  onPress={() => {
                    this.setState({ stars: 4 });
                  }}
                />
                <TouchableOpacity
                  style={styles.fakeStar}
                  onPress={() => {
                    this.setState({ stars: 5 });
                  }}
                />
              </ImageBackground>
              <Button
                title='SKIP'
                style={styles.modalButton}
                textStyle={styles.modalButtonText}
                onPress={() => {
                  this.setState({ isModalVisible: false });
                }}
              />
            </View>
          </View>
        </Modal>
        <StatusBar barStyle='light-content' />
        <Header title='MY CLEANINGS' navigation={this.props.navigation} noBackButton={true} />
        <ScrollView style={styles.wrapperView} contentContainerStyle={styles.wrapper}>
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
                  <Image source={{ uri: cleaner.photo }} style={styles.photo} />
                  <View style={styles.details}>
                    <View style={styles.detailsTop}>
                      <View style={styles.detailsLeft}>
                        <Text style={styles.name}>{cleaner.firstName}</Text>
                        <Text style={styles.street}>{cleaning.address}</Text>
                      </View>
                      <View style={styles.detailsRight}>
                        <Text style={styles.date}>{cleaning.date0}</Text>
                        <Text style={styles.hour}>{cleaning.hour0}</Text>
                      </View>
                    </View>
                    <View style={styles.detailsBottom}>
                      {/* <Button
                                                style={[
                                                    styles.detailsButton,
                                                    { borderColor: Colors.yellow }
                                                ]}
                                                textStyle={[
                                                    styles.detailsButtonText,
                                                    { color: Colors.yellow }
                                                ]}
                                                title="REVIEW"
                                                onPress={() => {
                                                    this.props.navigation.navigate("Review", {
                                                        key,
                                                        cleaning,
                                                        cleaner
                                                    });
                                                }}
                                            /> */}
                      <Button
                        style={[styles.detailsButton, { borderColor: Colors.blue }]}
                        textStyle={[styles.detailsButtonText, { color: Colors.blue }]}
                        title='DETAILS'
                        onPress={() => {
                          this.props.navigation.navigate('CleaningDetails', { key, cleaning, cleaner });
                        }}
                      />
                      <Button
                        style={[styles.detailsButton, { borderColor: Colors.red }]}
                        textStyle={[styles.detailsButtonText, { color: Colors.red }]}
                        title='CANCEL'
                        onPress={() => {
                          console.log();
                          this.props.navigation.navigate('CancelCleaningOne', { child });
                        }}
                      />
                    </View>
                  </View>
                </View>
              );
            })
          ) : (
            <Image style={styles.spinner} source={require('./../assets/images/spinner.gif')} />
          )}
        </ScrollView>
        <View style={styles.buttonWrapper}>
          <Button style={styles.button} textStyle={styles.buttonText} onPress={() => this.props.navigation.navigate('ChooseService')} title='ORDER CLEANING' />
        </View>
      </View>
    );
  }
}

MyCleaningsScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    width: '95%',
    backgroundColor: Colors.white,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: Colors.blue,
    alignItems: 'center',
    paddingVertical: 20
  },
  noCleanings: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40
  },
  noCleaningsText: {
    fontFamily: 'futura-book',
    fontSize: 16,
    color: Colors.blue,
    marginTop: 20,
    textAlign: 'center'
  },
  noCleaningsTextBig: {
    fontFamily: 'futura-demi',
    fontSize: 50,
    color: Colors.blue,
    marginBottom: 20,
    textAlign: 'center'
  },
  noCleaningsImage: {
    width: '70%',
    height: 200,
    resizeMode: 'contain'
  },
  modalPhoto: {
    width: 118,
    height: 103,
    resizeMode: 'contain',
    marginBottom: 20
  },
  modalHeader: {
    fontFamily: 'futura-demi',
    fontSize: 28,
    color: Colors.blue,
    textAlign: 'center',
    marginBottom: 20
  },
  modalText: {
    fontFamily: 'futura-book',
    fontSize: 20,
    color: Colors.blue
  },
  spinner: {
    marginTop: 100
  },
  stars: {
    width: 320,
    height: 54,
    marginVertical: 20,
    flexDirection: 'row'
  },
  starsImage: {
    width: '100%',
    resizeMode: 'contain'
  },
  fakeStar: {
    width: '20%',
    height: '100%'
  },
  modalButton: {
    paddingVertical: 7,
    paddingHorizontal: 70,
    borderWidth: 2,
    borderColor: Colors.blue,
    borderRadius: 10
  },
  modalButtonText: {
    fontFamily: 'futura-demi',
    fontSize: 16,
    color: Colors.blue
  },
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
    paddingHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: Colors.blue
  },
  photo: {
    width: 76,
    height: 66,
    resizeMode: 'contain',
    marginRight: 15
  },
  details: {
    flex: 1
  },
  detailsTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16
  },
  detailsLeft: {},
  name: {
    fontFamily: 'futura-demi',
    fontSize: 20,
    color: Colors.gray,
    marginBottom: 5
  },
  street: {
    fontFamily: 'futura-book',
    fontSize: 14,
    color: Colors.gray
  },
  detailsRight: {
    textAlign: 'right',
    position: 'absolute',
    right: 0
  },
  date: {
    fontFamily: 'futura-demi',
    fontSize: 20,
    color: Colors.blue,
    textAlign: 'right',
    marginBottom: 5
  },
  hour: {
    fontFamily: 'futura-book',
    fontSize: 14,
    color: Colors.blue,
    textAlign: 'right'
  },
  detailsBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  detailsButton: {
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 7
  },
  detailsButtonText: {
    fontFamily: 'futura-demi',
    fontSize: 12
  },
  buttonWrapper: {
    height: 123,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(52, 158, 216, 0.9)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    backgroundColor: Colors.white
  },
  buttonText: {
    color: Colors.blue,
    fontFamily: 'futura-demi',
    fontSize: 16
  }
});

export default MyCleaningsScreen;

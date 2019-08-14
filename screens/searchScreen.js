import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TextInput
} from 'react-native';

export default class SearchScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      'location': 'Boston,US',
    }
  }

  static navigationOptions = {
    title: 'Weather Search'
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/bg.jpg')}
          style={{ width: '100%', height: '100%'}}
          >
            <View style={styles.formContainer}>
              <Text style={styles.formLabel}>Search a City</Text>
              <TextInput
                style={styles.inputForm}
                value={this.state.location}
                onChangeText={(text) => this.setState({ 'location' : text })}
              />
              <View style={{ width: '100%', marginTop: 50 }}>
                <Button
                  title="Get Weather"
                  onPress={() => navigate('Data', {
                    'location': this.state.location
                    }
                  )}
                  // data is referencing the data key within the createStackNavigator in app.js
                />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    width: '80%',
    paddingLeft: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  formLabel: {
    fontSize: 30,
    alignSelf: 'stretch',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    paddingBottom: 5,
    marginBottom: 5,
  },
  inputForm: {
    alignSelf: 'stretch',
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    paddingBottom: 5,
    marginBottom: 15,
    color: 'white',
    fontSize: 22,
    textAlign: 'center'
  },
  button: {
    marginTop: 15,
  }
});

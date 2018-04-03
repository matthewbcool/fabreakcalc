import React from 'react';
import { View, Image, Text, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import Container from '../components/Container';
import LogoContainer from '../components/LogoContainer';
import { Button } from 'react-native-elements';
import ButtonContainer from '../components/ButtonContainer';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  _navigateToCalc = () => {
    this.props.navigation.navigate('Calc');
  };
  
  _navigateToDisplay = () => {
    this.props.navigation.navigate('Display')
  }
  
  render() {
    return (
      <Container>

        <LogoContainer> 
          <Image
            source={require('../assets/images/temp.png')}
          />
          <Text style={styles.textStyle}>Break Calc</Text>
          
        </LogoContainer>

        <ButtonContainer>
          <Button
          backgroundColor='#1767ef'
          onPress={this._navigateToCalc}
          style={{width: 220}}
          icon={{name: 'access-time'}}
          large
          raised
          title='Calculate Breaks' 
          />
          <Button
          backgroundColor='#1767ef'
          onPress={this._navigateToDisplay}
          style={{width: 220}}
          icon={{name: 'list'}}
          large
          raised
          title='Display Breaks    ' 
          />
        </ButtonContainer>
        <View style={styles.LinksContentStyle}>
          <Text>About</Text>
          <Text>Feedback</Text>
        </View>
 

      </Container>
    )
  }    
}

const styles = {
  textStyle: {
    color: '#000',
    fontSize: 45
  },
  LinksContentStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 225,
    marginTop: 20,
  },
}
import React from 'react';
import { View, Text, TouchableOpacity, Picker } from 'react-native';
import Container from '../components/Container';
import {Button, ButtonGroup } from 'react-native-elements';
import LabelAndTimeContainer from '../components/LabelAndPickContainer/LabelAndTimeContainer';
import DateTimePicker from 'react-native-modal-datetime-picker';
import LabelAndPicker from '../components/LabelAndPickContainer/LabelAndPicker';


const START_TIME_LABEL = 'Breaks Start Time:';
const LAND_TIME_LABEL = 'Landing Time:';
const LAST_SERVICE_LABEL = 'Time for Last Service:';
const BREAK_NUM_LABEL = 'Number of Breaks:';
let startTime = '0 : 00'; 
let landTime = '0 : 00';

export default class CalcScreen extends React.Component {
  static navigationOptions = {
    title: 'Calculate Breaks',
  };

  constructor () {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }


  state = {
    isLandTimePickerVisible: false,
    isStartTimePickerVisible: false,
    breakNumber: '3',
  };

 

  _showStartTimePicker = () => this.setState({ isStartTimePickerVisible: true });

  _showLandTimePicker = () => this.setState({ isLandTimePickerVisible: true });

  _hideStartTimePicker = () => this.setState({ isStartTimePickerVisible: false });

  _hideLandTimePicker = () => this.setState({ isLandTimePickerVisible: false });

  _handleStartTimePicked = (date) => {
   console.log("yup, thats a " + date)
    this._hideStartTimePicker();
  };

  _handleLandTimePicked = (date) => {
    console.log(date)
    this._hideLandTimePicker();
  }


  render() {
    const buttons = ['None', '5 Minutes', '10 Minutes']
    const { selectedIndex } = this.state
    return (
      <Container>

        <LabelAndTimeContainer
        label={START_TIME_LABEL}
        displayTime={startTime}
        showSpinner={this._showStartTimePicker}
        />

         <DateTimePicker
          isVisible={this.state.isStartTimePickerVisible}
          onConfirm={this._handleStartTimePicked}
          onCancel={this._hideStartTimePicker}
          mode='time'
          datePickerModeAndroid='spinner'
          is24Hour={true}
        />
        
        <LabelAndTimeContainer
        label={LAND_TIME_LABEL}
        displayTime={landTime}
        showSpinner={this._showLandTimePicker} 
        />

        <DateTimePicker
          isVisible={this.state.isLandTimePickerVisible}
          onConfirm={this._handleLandTimePicked}
          onCancel={this._hideLandTimePicker}
          mode='time'
          datePickerModeAndroid='spinner'
          is24Hour={true}
        />
        <LabelAndPicker label={LAST_SERVICE_LABEL}>
        <Picker
            selectedValue={this.state.breakNumber}
            onValueChange={breakNumber => this.setState({ breakNumber })}
            style={{ width: 180,}}
            mode="dropdown">
            <Picker.Item textAlign='center' label="1 Hour 30 minutes" value="replace with moment value" />
            <Picker.Item label="2 Hours" value="replace with moment value" />
          </Picker>           
        </LabelAndPicker>  


        <LabelAndPicker label={BREAK_NUM_LABEL}>
          <Picker
            selectedValue={this.state.breakNumber}
            onValueChange={breakNumber => this.setState({ breakNumber })}
            style={{ width: 50,}}
            mode="dropdown">
            <Picker.Item label="3" value="3" />
            <Picker.Item label="2" value="2" />
          </Picker> 
        </LabelAndPicker>

        <Text style={{fontSize: 20, marginTop: 10, marginBottom: 5}}>Interval Between Break</Text>

        <ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      selectedTextStyle={{color: '#fff'}}
      buttons={buttons}
      underlayColor='#1767ef'
      selectedButtonStyle={style={backgroundColor: '#1767ef', height: 60}}
        />  

      <Button 
        large
        raised
        title='Calculate'
        backgroundColor='#1767ef'
        containerViewStyle= {{marginTop: 30, width: 250}}
      />

      </Container>
    );
  }
}
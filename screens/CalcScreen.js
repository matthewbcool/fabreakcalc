import React from 'react';
import { View, Text, TouchableOpacity, Picker } from 'react-native';
import { connect } from 'react-redux';
import Container from '../components/Container';
import { Button, ButtonGroup } from 'react-native-elements';
import LabelAndTimeContainer from '../components/LabelAndPickContainer/LabelAndTimeContainer';
import DateTimePicker from 'react-native-modal-datetime-picker';
import LabelAndPicker from '../components/LabelAndPickContainer/LabelAndPicker';
import { breakStartTime, landingTime, intervalSelection, lastServiceSelection, calculateBreaks } from '../actions/timeCalcActions';
import store from '../config/store';
import moment from 'moment';

 

const START_TIME_LABEL = 'Breaks Start Time:';
const LAND_TIME_LABEL = 'Landing Time:';
const LAST_SERVICE_LABEL = 'Time for Last Service:';

const getStartTime = () => {
  let currentState = store.getState();
  return currentState.calctimes.startTime;
}

const getLandTime = () => {
  let currentState = store.getState();
  return currentState.calctimes.landTime;
}
const getFollowOn = () => {
  let currentState = store.getState();
  if (currentState.calctimes.lastServiceTimeSelect === 0 || currentState.calctimes.lastServiceTimeSelect === '0') {
    return 75;
  } else if (currentState.calctimes.lastServiceTimeSelect === 1 || currentState.calctimes.lastServiceTimeSelect === '1' ) {
    return 90;
  } else if (currentState.calctimes.lastServiceTimeSelect === 2 || currentState.calctimes.lastServiceTimeSelect === '2') {
    return 105;
  } else {
    console.log("something went wrong with the lastservicetime");
  }
}

const getInterval = () => {
  let currentState = store.getState();
  if (currentState.calctimes.selectedIndex === '0' || currentState.calctimes.selectedIndex === 0){
    return 0;
  } else if (currentState.calctimes.selectedIndex === '1' || currentState.calctimes.selectedIndex === 1) {
    return 5;
  } else if (currentState.calctimes.selectedIndex === '2' || currentState.calctimes.selectedIndex === 2) {
    return 10;
  } else {
    console.log('something is wrong with the intervals')
  }
}

const timeDiff = (landTime, startTime) => {
  let totalMinutes = landTime.diff(startTime, 'minutes');
   if (totalMinutes < 0) {
     return totalMinutes + 1440;
   } else {
     return totalMinutes;
   }
}
const getBreakTime = (timeDifference, interval, lastServe) => {
  return (timeDifference - (interval*3) - lastServe)/3;
} 

const buildBreakPoint = (lastTimeBuilt, minutesPerBreak) => {
  let timeToBuild = moment(lastTimeBuilt, ('HH:mm'));
  timeToBuild = timeToBuild.clone().add(minutesPerBreak, 'minutes');
  timeToBuild = timeToBuild.format('HH:mm');
  return timeToBuild;
}


const addIntervalToEnd = (intervalMinutes, breakEndTime) => {
 let nextBreakStart = moment(breakEndTime.toString(), 'HH:mm'); 
 nextBreakStart = nextBreakStart.clone().add(intervalMinutes, 'minutes');
 nextBreakStart = nextBreakStart.format('HH:mm');
 return nextBreakStart;
}

const produceTimePerBreakText = (minutesPerBreak) => {
  let hours = Math.floor(minutesPerBreak/60);
  let minutes = (minutesPerBreak - (hours * 60)).toFixed();
  
  return 'Time Per Break: ' + hours + ' hours ' + minutes + ' minutes';
}


class CalcScreen extends React.Component {
  static navigationOptions = {
    title: 'Calculate Breaks',
  };

  constructor () {
    super()
    this.state = {
      selectedIndex: 1,
      lastServeTimeSelect: '1',
      isStartTimePickerVisible: false,
      isLandTimePickerVisible: false,
    };
    this.updateIndex = this.updateIndex.bind(this);
  };
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
    this.props.dispatch(intervalSelection(selectedIndex));
  }
 

  _showStartTimePicker = () => this.setState({ isStartTimePickerVisible: true });

  _showLandTimePicker = () => this.setState({ isLandTimePickerVisible: true });

  _hideStartTimePicker = () => this.setState({ isStartTimePickerVisible: false });

  _hideLandTimePicker = () => this.setState({ isLandTimePickerVisible: false });

  _handleStartTimePicked = (date) => {
    this.props.dispatch(breakStartTime(date));
    this._hideStartTimePicker();
  };

  _handleLandTimePicked = (date) => {
    this.props.dispatch(landingTime(date))
    this._hideLandTimePicker();
  };

  _handleLastServiceChange = lastServeTimeSelect => {
    this.setState({ lastServeTimeSelect });
    this.props.dispatch(lastServiceSelection(lastServeTimeSelect));
  };



  _calculateToDisplay = (state, twoBreakStart, threeBreakStart, oneBreakEnd, twoBreakEnd, threeBreakEnd, timePerBreak, followOnStart) => {
    let startTime = moment(getStartTime(), 'HH:mm');
    let landTime = moment(getLandTime(), 'HH:mm');
    let followOnMinutes = getFollowOn();
    let intervalMinutes = getInterval();
    totalMinutes = timeDiff(landTime, startTime);
    if (totalMinutes >= 0 && totalMinutes < 70) {
      return displayErrorMsg = true;
    } else {
    let minutesPerBreak = getBreakTime(totalMinutes, intervalMinutes, followOnMinutes);
    oneBreakEnd = buildBreakPoint(startTime, minutesPerBreak);
    twoBreakStart = addIntervalToEnd(intervalMinutes, oneBreakEnd);
    twoBreakEnd = buildBreakPoint(twoBreakStart, minutesPerBreak);
    threeBreakStart = addIntervalToEnd(intervalMinutes, twoBreakEnd);
    threeBreakEnd = buildBreakPoint(threeBreakStart, minutesPerBreak);
    followOnStart = addIntervalToEnd(intervalMinutes, threeBreakEnd);
    timePerBreak = produceTimePerBreakText(minutesPerBreak);
    this.props.navigation.navigate('Display');
    this.props.dispatch(calculateBreaks(twoBreakStart, threeBreakStart, twoBreakEnd, oneBreakEnd, threeBreakEnd, timePerBreak, followOnStart));
    }
  };


  render() {
    const buttons = ['None', '5 Minutes', '10 Minutes']
    const { selectedIndex } = this.state
    return (
      <Container>
       <TouchableOpacity onPress={this._showStartTimePicker} >
        <LabelAndTimeContainer
        label={START_TIME_LABEL}
        displayTime={this.props.startTime}
        />
       </TouchableOpacity>

         <DateTimePicker
          isVisible={this.state.isStartTimePickerVisible}
          onConfirm={this._handleStartTimePicked}
          onCancel={this._hideStartTimePicker}
          mode='time'
          datePickerModeAndroid='spinner'
          is24Hour={true}
        ></DateTimePicker>

        <TouchableOpacity onPress={this._showLandTimePicker} >
         <LabelAndTimeContainer
        label={LAND_TIME_LABEL}
        displayTime={this.props.landTime}
        />
        </TouchableOpacity>

        <DateTimePicker
          isVisible={this.state.isLandTimePickerVisible}
          onConfirm={this._handleLandTimePicked}
          onCancel={this._hideLandTimePicker}
          mode='time'
          datePickerModeAndroid='spinner'
          is24Hour={true}
        ></DateTimePicker>
       
        <LabelAndPicker label={LAST_SERVICE_LABEL}>
        <Picker
            selectedValue={this.state.lastServeTimeSelect}
            onValueChange={this._handleLastServiceChange}
            style={{ width: 180,}}
            mode="dropdown">
            <Picker.Item textAlign='center' label="1hr 15min" value="0" />
            <Picker.Item label="1 hr 30min" value="1" />
            <Picker.Item label="1 hr 45min" value="2" />
          </Picker>           
        </LabelAndPicker>  


        <Text style={styles.buttonGroupText}>Interval Between Break</Text>

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
        containerViewStyle= {styles.buttonStyle}
        onPress={this._calculateToDisplay}
      />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const startTime = state.calctimes.startTime;
  const landTime = state.calctimes.landTime;
  return {
    startTime,
    landTime,
  };
};


export default connect(mapStateToProps)(CalcScreen);

const styles = {
  buttonGroupText: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonStyle: {
    marginTop: 10,
    width: 280
  }
}
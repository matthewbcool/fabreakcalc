import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import LabelAndPicker from '../components/LabelAndPickContainer/LabelAndPicker';
import Container from '../components/Container';
import DisplayTime from '../components/DisplayTime';
import { connect } from 'react-redux';

const START_TIME_LABEL_ONE = '1st Break Start:';
const START_TIME_LABEL_TWO = '2nd Break Start:';
const START_TIME_LABEL_THREE = '3rd Break Start:';

const END_TIME_LABEL_ONE = '1st Break Ends:';
const END_TIME_LABEL_TWO = '2nd Break Ends:';
const END_TIME_LABEL_THREE = '3rd Break Ends:';

const FOLLOW_LABEL = 'Follow On Service:';
const LANDING_LABEL = 'Landing Time:'

const dummyTime = '11 : 05';

let deviceWidth = Dimensions.get('window').width;


class DisplayScreen extends React.Component {
  static navigationOptions = {
    title: 'Breaks',
  };

  render() {
    return (
      <Container> 
        <DisplayTime startTimeLabel={START_TIME_LABEL_ONE} endTimeLabel={END_TIME_LABEL_ONE} startTime={this.props.startTime} endTime={this.props.oneBreakEnd} />
        <View style={styles.horizontalRule}></View>
        <DisplayTime startTimeLabel={START_TIME_LABEL_TWO} endTimeLabel={END_TIME_LABEL_TWO} startTime={this.props.twoBreakStart} endTime={this.props.twoBreakEnd} />
        <View style={styles.horizontalRule}></View> 
        <DisplayTime startTimeLabel={START_TIME_LABEL_THREE} endTimeLabel={END_TIME_LABEL_THREE} startTime={this.props.threeBreakStart} endTime={this.props.threeBreakEnd} /> 
        <View style={styles.horizontalRule}></View>
        
        <View style={styles.flexLabels}>
          <LabelAndPicker label={FOLLOW_LABEL}><Text style={styles.textSize}>{this.props.followOnStart}</Text></LabelAndPicker>
          <LabelAndPicker label={LANDING_LABEL}><Text style={styles.textSize}>{this.props.landTime}</Text></LabelAndPicker>
        </View>
        <Text style={styles.breakTimeText}>{this.props.timePerBreak}</Text>     
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const startTime = state.calctimes.startTime;
  const landTime = state.calctimes.landTime;
  const oneBreakEnd = state.calctimes.oneBreakEnd;
  const twoBreakStart = state.calctimes.twoBreakStart;
  const twoBreakEnd = state.calctimes.twoBreakEnd;
  const threeBreakStart = state.calctimes.threeBreakStart;
  const threeBreakEnd = state.calctimes.threeBreakEnd;
  const followOnStart = state.calctimes.followOnStart;
  const timePerBreak = state.calctimes.timePerBreak;

  return {
    startTime,
    landTime,
    oneBreakEnd,
    twoBreakStart,
    twoBreakEnd,
    threeBreakStart,
    threeBreakEnd,
    followOnStart,
    timePerBreak,
  };
};

export default connect(mapStateToProps)(DisplayScreen);

const styles = {
  horizontalRule: {
    width: deviceWidth,
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  flexLabels: {

  },
  textSize: {
    fontSize: 23,
  },

  breakTimeText: {
    fontSize: 20,
    color: '#1767ef',
    marginBottom: 15,
    fontWeight: '600',
  }
}

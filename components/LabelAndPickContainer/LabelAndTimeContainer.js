import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import  styles  from './styles';


const LabelAndTimeContainer = ({ label, displayTime, }) => {
    return (
      <View style={styles.labelTimeContainer}>
          <Text style={styles.labelText}>
           {label}
          </Text>
              <Text style={styles.timeText}> 
                  {displayTime}
              </Text>
      </View>
    );
};

export default LabelAndTimeContainer;
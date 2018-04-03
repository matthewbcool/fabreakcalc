import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import  styles  from './styles';


const LabelAndTimeContainer = ({ label, displayTime, showSpinner }) => {
    return (
      <View style={styles.labelTimeContainer}>
          <Text style={styles.labelText}>
           {label}
          </Text>
          <TouchableOpacity onPress={showSpinner}>
              <Text style={styles.timeText}> 
                  {displayTime}
              </Text>
          </TouchableOpacity>   
      </View>
    );
};

export default LabelAndTimeContainer;
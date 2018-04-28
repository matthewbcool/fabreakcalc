import React from 'react';
import { View, Text } from 'react-native';


const DisplayTime = ({startTimeLabel, endTimeLabel, startTime, endTime}) => {
    return (
    <View style={styles.containerRow}>
        <View style={styles.rowView}>
            <View style={styles.columnView}>
                <Text style={styles.labelText}>
                    {startTimeLabel}
                </Text> 
                <View style={styles.timeDisplayBuffer} />   
                <Text style={styles.timeText}>
                    {startTime}
                </Text>
            </View>
            <View style={styles.bufferContainerMid} />
            <View style={styles.columnView}>    
                <Text style={styles.labelText}>
                    {endTimeLabel}
                </Text>
                <View style={styles.timeDisplayBuffer} />
                <Text style={styles.timeText}>
                    {endTime}
                </Text>
            </View>              
        </View>       
    </View>
    )
}

export default DisplayTime;

const styles = {
    containerRow: {
        flex: 2,
    },
    rowView: {
        flex: 3,
        flexDirection: 'row',
    },
    columnView: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    bufferContainerMid: {
        width: 50,
    },
    timeDisplayBuffer: {
      
    },
    labelText: {
        fontSize: 22,
        marginTop: 5
    },
    timeText: {
        fontSize: 28,
        fontWeight: '600'
    },
}
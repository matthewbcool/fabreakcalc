import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const LabelAndPicker = ({label, children}) => (
    <View style={styles.labelPickContainer}>
        <Text style={styles.labelText}>{label} </Text>
    { children }
    </View>    
);

export default LabelAndPicker;
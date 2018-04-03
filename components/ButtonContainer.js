import React from 'react';
import { View } from 'react-native';

const ButtonContainer = ({children}) => {
    return (
        <View style={styles.ButtonContainerStyle}>
            { children }
        </View>    
    );
};

styles = {
    ButtonContainerStyle: {
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 200,
        marginTop: 40,
    },
};

export default ButtonContainer;
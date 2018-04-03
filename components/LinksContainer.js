import React from 'react';
import { View } from 'react-native';

const LinksContainer = ({children}) => {
    return (
        <View style={styles.LinksContentStyle}>
            { children }
        </View>
    );    
};

styles = {
    LinksContentStyle: {
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 200,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#00f',
    },
};

export default LinksContainer;
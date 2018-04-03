import React from 'react';
import { View } from 'react-native';

const LogoContainer = ({children}) => {
    return (
      <View style={styles.SubContainerStyle}>
        {children}
      </View>
    );
};

const styles = {
    SubContainerStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 0,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 40,
      backgroundColor: '#fff'
    },
};

export default LogoContainer;
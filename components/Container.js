import React from 'react';
import { View, Text } from 'react-native';

const Container = ({children}) => {
    return (
     <View style={styles.containerStyle}>
       {children}
     </View>
    );
};

const styles = {
    containerStyle: {
      flex: 1,
      alignItems: 'center', 
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      backgroundColor: '#fff'
    },
};

export default Container;






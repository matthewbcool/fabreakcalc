import { StyleSheet, Dimensions } from 'react-native';

let deviceWidth = Dimensions.get('window').width;

const styles = {
    labelTimeContainer: { 
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: deviceWidth,
      height: 70,
      paddingRight: 30,
      paddingLeft: 30,
      marginTop: 15,
      marginBottom: 10,
    },
    labelPickContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: 30,
      paddingLeft: 30,
      width: deviceWidth,
      height: 70,
      marginTop: 10,
      marginBottom: 10,

    },
    labelText: {
        fontSize: 24,
        fontWeight: '400', 
    },
    timeText: {
        fontSize: 25,
    },
};

export default styles;
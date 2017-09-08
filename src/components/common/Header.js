import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
  return (
      <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
      </View>
  );
};

const styles = {
    viewStyle: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        elevation: 4
        /*paddingTop: 15*/
    },
    textStyle: {
        fontSize: 20
    }

};

export { Header };

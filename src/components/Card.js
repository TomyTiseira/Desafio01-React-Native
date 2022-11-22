import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const Card = ({children, newStyle}) => {
  return (
    <View style={{...styles.containerItem, ...newStyle}}>{children}</View>
  );
}

export default Card;

const styles = StyleSheet.create({
    containerItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary,
        width: 225,
        height: 100,
        paddingBottom: 5,
        marginTop: 10,
    },
});
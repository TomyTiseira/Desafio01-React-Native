import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Header = ({title, newStyles}) => {
  return (
    <View style={styles.header}>
      <Text style={{...styles.headerTitle, ...newStyles}}>{title}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 90,
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 30,
    },
});
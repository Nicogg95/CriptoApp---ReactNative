import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

const Header = () => {
  return (
    <>
      <Text style={styles.encabezado}>
          Criptomonedas
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
    encabezado:{
        paddingTop: Platform.OS === 'ios' ? 50 : 20,
        fontFamily: 'Lato-Black',
        backgroundColor: '#5E49E2',
        textAlign: 'center',
        paddingBottom: 20,
        fontSize: 25,
        textTransform: 'uppercase',
        color: '#FFF',
        marginBottom: 30,
    },
});

export default Header;

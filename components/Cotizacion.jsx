/* eslint-disable comma-dangle */
/* eslint-disable semi */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Cotizacion = ({cotizacion}) => {

  if(Object.keys(cotizacion).length === 0) {return null}

  return (
    <>
      <View style={styles.contenedor}>
        <Text style={styles.texto}>
          <Text style={[styles.span, styles.precio]}>
           {cotizacion.PRICE}
          </Text>
        </Text>

        <Text style={styles.texto}>
          Precio mas alto del dia:  {''}
          <Text style={styles.span}>
           {cotizacion.HIGHDAY}
          </Text>
        </Text>

        <Text style={styles.texto}>
          Precio mas bajo del dia:  {''}
          <Text style={styles.span}>
           {cotizacion.LOWDAY}
          </Text>
        </Text>

        <Text style={styles.texto}>
          Variacion de las ultimas 24 hs:  {''}
          <Text style={styles.span}>
            {cotizacion.CHANGEPCT24HOUR}%
          </Text>
        </Text>

        <Text style={styles.texto}>
          Ultima actualizacion: {''}
          <Text style={styles.span}>
            {cotizacion.LASTUPDATE}
          </Text>
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  contenedor:{
    margin: 30,
    gap: 20,
    marginHorizontal: 'auto',
    backgroundColor: '#5E49E2',
    padding: 25,
    borderRadius: 30,
  },
  texto:{
    color: 'white',
    fontSize: 18,
    fontFamily: 'Lato-Regular',
  },
  span: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  precio:{
    fontSize: 30,
    fontWeight: '900',
  }
});

export default Cotizacion;

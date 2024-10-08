/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-trailing-spaces */
import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cotizacion from './components/Cotizacion';

const App = () => {

  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [consultaAPI, setConsultaAPI] = useState(false);
  const [cotizacion, setCotizacion] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(()=>{
      
    const cotizar = async() => {

      if(consultaAPI){

        try {
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
          const {data} = await axios(url);
          setCotizacion(data.DISPLAY[criptomoneda][moneda]);
          setCargando(true);

          setTimeout(() => {
            setCargando(false);
          }, 2000);

        } catch (error) {
          console.log(error);
        }
      }
    };
    setConsultaAPI(false);
 
    cotizar();

  }, [consultaAPI]);

  // const spinner = 

  return (
    <>
      <ScrollView>
        <Header />
        <Image 
          style={styles.imagen}
          source={require('./assets/img/cryptomonedas.png')}
        />
        <View>
          <Formulario 
            setCriptomoneda={setCriptomoneda}
            setMoneda={setMoneda}
            moneda={moneda}
            criptomoneda={criptomoneda}
            setConsultaAPI={setConsultaAPI}
          />
        </View>
        {cargando ? 
          <ActivityIndicator 
            style={styles.spinner}
            size={'large'}/>
          : 
          <Cotizacion cotizacion={cotizacion}/>
        }
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
  },
  spinner: {
    marginVertical: 30,
  },
});

export default App;

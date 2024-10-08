/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

const Formulario = ({setCriptomoneda, criptomoneda, setMoneda, moneda,setConsultaAPI}) => {

    const [criptomonedas, setCriptomonedas] = useState([]);

    useEffect(()=>{

        const consultarAPI = async() =>{

            try {
                const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
                const {data} = await axios.get(url);
                setCriptomonedas(data.Data);
            } catch(error){
                console.log(error);
            }
        };

        consultarAPI();

    }, []);

    const handleCotizar = () =>{

        if(!criptomoneda || !moneda){

            Alert.alert(
                'Debes completas ambos campos',
                '',
                [{Text: 'Ok'}]
            );
            return;
        }

        setConsultaAPI(true);

    };

  return (
    <>
        <View>
            <Text style={styles.label}>
                Monedas
            </Text>
            <Picker
                onValueChange={e => setMoneda(e)}
                selectedValue={moneda}>
                <Picker.Item value={''} label="--Seleccionar--" />
                <Picker.Item value={'USD'} label="Dolar Estadounidense" />
                <Picker.Item value={'MXN'} label="Peso Mexicano" />
                <Picker.Item value={'GBP'} label="Libra Esterlina" />
                <Picker.Item value={'ARS'} label="Peso Argentino" />
                <Picker.Item value={'EUR'} label="Euro" />
            </Picker>
            <Text style={styles.label}>
                Criptomonedas
            </Text>
            <Picker
                onValueChange={e => setCriptomoneda(e)}
                selectedValue={criptomoneda}
                itemStyle={{height: 20}}>
                <Picker.Item value={''}
                label="--Seleccionar--" />
                {criptomonedas?.map(cripto => {

                    const {Id, Name, FullName} = cripto?.CoinInfo;

                    return(
                    <Picker.Item key={Id}
                        value={Name}
                        label={FullName}
                    />);
                })}
            </Picker>

            <TouchableHighlight
                style={styles.btnCotizar}
                onPress={()=>handleCotizar()}>
                <Text style={styles.txtCotizar}>
                    Cotizar
                </Text>
            </TouchableHighlight>

        </View>
    </>
  );
};

const styles = StyleSheet.create({
    label:{
        fontFamily: 'Lato-Black',
        backgroundColor: '#5E49E2',
        marginVertical: 20,
        paddingVertical: 10,
        textAlign: 'center',
        fontSize: 20,
        textTransform: 'uppercase',
    },
    btnCotizar: {
        backgroundColor: '#5E49E2',
        padding: 20,
        marginTop: 30,
        width: '50%',
        marginHorizontal: 'auto',
        borderRadius: 30,
    },
    txtCotizar: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        textAlign: 'center',
    },
});

export default Formulario;

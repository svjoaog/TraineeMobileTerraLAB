/* src/Screens/Home/index.js */
//importando as dependências necessárias
import React, { useState } from 'react';
import MapView from 'react-native-maps';
import useLocation from '../hooks/mapHooks';
import MapViewDirections from 'react-native-maps-directions';	//biblioteca necessária para utilização das rotas
import { markers } from '../utils/Markers';	//objeto markers com os marcadores e suas informações
import MarkerImpl from '../components/MarkerImpl';	//marcadores implementados no tópico anterior

export default function HomeScreen({ navigation }) {
  	const [latitude, setLatitude] = useState(-20.398259);	//posições padrão
  	const [longitude, setLongitude] = useState(-43.507726);	//posições padrão
  	const [mapMarkers, setMapMarkers] = useState(markers);		//guardando os marcadores estáticos 

	const [localDirection, setLocalDirection] = useState(null);	//vamos utilizar este estado para guardar o local que será o ponto final da rota
 	const { coords, errorMsg } = useLocation();     //utilizando código que criamos anteriormente para localização do usuário

	  function handleRegionChanged(region) {
    		setLatitude(region.latitude);
    		setLongitude(region.longitude);
 	 }	//utilizamos esta função para guardar a posição atual do usuário


	return (
    <MapView
              showsUserLocation={true}
              showsMyLocationButton={false}
              toolbarEnabled={false}
              	  onRegionChangeComplete={handleRegionChanged}	//armazenamos a posição atual do usuário sempre que ele mudar sua localização
              style={{
                height: '100%',
                width: '100%',
                position: 'absolute',
              }}
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.195,
                longitudeDelta: 0.1921,
                ...coords           
              }}
            >

{
                  mapMarkers.map((_marker) => {		//percorrendo os marcadores para mostrarmos cada um deles no mapa
                    return (
                      <MarkerImpl
                        key={_marker._id}	//enviando o id do marcador
                        mark={_marker}	//enviando informações do marcador para ser renderizado
                        onPress={() => setLocalDirection(_marker)}		//essa função será essencial para a criação da rota, já que ela vai guardar na variável localDirection a  posição final da nossa rota.
                      />
                    )
                  })
              }


                  <MapViewDirections
                    strokeWidth={3}		//tamanho da linha que vai demarcar a rota no mapa
                    strokeColor="red"	//cor da linha
                    origin={coords}		//a posição do usuário
                    destination={localDirection}	//o local final da rota
                    apikey={"AIzaSyCb0-NRZqfetVlQmt0_DM2OueWVFDk0kOM"}	//sua api key
                    mode="DRIVING"	//determinando o tipo de transporte utilizado para calcular a rota da melhor forma
                  />
    
        </MapView>
	)
}
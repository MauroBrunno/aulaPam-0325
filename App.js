import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/components/cabecalho';
import Botao from './src/components/botao';

export default function App() {
  return (
    <View>
      <Cabecalho/>
      <Botao
        logo="md-game-controller-sharp"
        texto="Jogos"
        cor='darkorange'
      />
      
    </View>
  );
}

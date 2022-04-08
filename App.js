import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/components/cabecalho';
import Botao from './src/components/botao';

export default function App() {
  return (
    <View>
      <Cabecalho/>
      <Botao
        Logo="md-game-controller-sharp"
        texto="Jogos"
        cor='darkorange'

        Logo2="book"
        texto2="Livros"
        cor2="red"
      />
      <Botao
        Logo="calculator-sharp"
        texto="Aplicativos"
        cor='blue'

        Logo2="play"
        texto2="Filmes"
        cor2="red"
      />
        <Botao
        Logo="bar-chart"
        texto="Em Alta"
        cor='gray'

        Logo2="apps"
        texto2="Categorias"
        cor2="red"
      />
    </View>
  );
}

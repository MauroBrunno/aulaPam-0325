import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/components/cabecalho';
import Botao from './src/components/botao';
import Jogos from './src/components/jogos';
import Jogos2 from './src/components/jogos2';
import Dados from './src/dados/jogos';
import Dados2 from './src/dados2/jogos2';

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
        cor2='green'
      />
      <Botao
        Logo="calculator-sharp"
        texto="Aplicativos"
        cor='blue'

        Logo2="play"
        texto2="Filmes"
        cor2='red'
      />
        <Botao
        Logo="bar-chart"
        texto="Em Alta"
        cor='gray'

        Logo2="apps"
        texto2="Categorias"
        cor2='purple'
      />

      <FlatList
        horizontal = {true}
        data = {Dados}
        keyExtractor = {(item) => item.id}
        renderItem = { ({item}) => (
        
        <Jogos
          titulo = {item.nome}
          imagem = {item.imagem}
          valor = {item.valor}
          />
        )}
      />

  <FlatList
        horizontal = {true}
        data = {Dados2}
        keyExtractor = {(item) => item.id}
        renderItem = { ({item}) => (
        
        <Jogos2
          titulo2 = {item.nome}
          imagem = {item.imagem}
          valor2 = {item.valor}
          />
        )}
      />

    
    </View>
  );
}

import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ComponentePai from './components/componentePai';
import { produtos } from './mocks/produtos';
import { produto } from './interfaces/produtos';
import Card from './components/card';

const ProdutoComponent = ({ produto }: { produto: produto }) => (
  <Card key={produto.id} header={produto.produto} footer={produto.valor} body={produto.departamento} />
);

export default function App() {
  return (
    <View style={styles.container}>
      <ComponentePai />
      <FlatList
      data={produtos}
      renderItem={({ item }) => <ProdutoComponent produto={item} />}
      keyExtractor={(produto) => produto.id.toString()}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

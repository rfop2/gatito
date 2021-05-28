import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  informacao: {
    padding: 24
  },
  nome: {
    color: '#ffa500',
    fontWeight: 'bold',
    fontSize: 16,
  },
  calculo: {
    color: '#333',
    fontSize: 14,
    marginVertical: 8,
  },
  preco: {
    color: '#c100ba',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  divisor: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ababb3',
  },
  carrinho: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  valor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  descricao: {
    color: '#333',
    fontSize: 16,
    marginRight: 8,
  },
  quantidade: {
    width: 42,
  }
});

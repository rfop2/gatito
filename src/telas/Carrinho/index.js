import React from 'react';
import { FlatList} from 'react-native';
import StatusCarrinho from '../../componentes/statusCarrinho';
import TelaPadrao from '../../componentes/telaPadrao/index';
import Item from './item';

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "Não de banho no seu gato. Mas se precisar nos damos!!!",
        quantidade: 1
    },
    {
        id: 2,
        nome: "Vacina",
        preco: 89.9,
        descricao: "Uma dose da vacina V4. Seu gato precisa de duas",
        quantidade: 2
    },
    {
        id: 3,
        nome: "Vacina Antirábica",
        preco: 99.9,
        descricao: "Uma dose da vacina anti rábica. Seu gato precisa de uma por ano.",
        quantidade: 1
    }
]

export default function Carrinho(){
    const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade),0);

    return <TelaPadrao>
        <StatusCarrinho total={total}/>
                <FlatList 
                    data={servicos}
                    renderItem={({item}) => <Item {...item}/>}
                    keyExtractor={({id}) => String(id)}
                />
        </TelaPadrao>
       
    
    
}
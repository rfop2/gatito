import React from 'react';
import { FlatList, SafeAreaView, StatusBar} from 'react-native';
import Item from './item';
const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "Não de banho no seu gato. Mas se precisar nos damos!!!"
    },
    {
        id: 2,
        nome: "Vacina",
        preco: 89.9,
        descricao: "Uma dose da vacina V4. Seu gato precisa de duas"
    },
    {
        id: 3,
        nome: "Vacina Antirábica",
        preco: 99.9,
        descricao: "Uma dose da vacina anti rábica. Seu gato precisa de uma por ano."
    }
]

export default function Servicos(){
    return <SafeAreaView>
        <StatusBar/>
        <FlatList 
            data={servicos}
            renderItem={({item}) => <Item {...item}/>}
            keyExtractor={({id}) => String(id)}
        />
    </SafeAreaView> 
    
    
}
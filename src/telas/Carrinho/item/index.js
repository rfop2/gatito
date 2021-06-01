import React, { useState } from 'react';

import { Text, View } from 'react-native';

import CampoInteiro from '../../../componentes/Camposinteiros';

import estilosItem from './estilosItem';

import Botao from '../../../componentes/Botao/index';

export default function Item({nome, preco, descricao, quantidade : quantidadeInicial}){
        const [quantidade, setQuantidade] = useState(quantidadeInicial);
        const [total, setTotal] = useState(preco * quantidadeInicial);
        const [expandir, setExpandir] = useState(false);

        const atualizaQuantidadeTotal = (novaQuantidade) => {
            setQuantidade(novaQuantidade);
            calculaTotal(novaQuantidade);
        }

        const calculaTotal = (quantidade) => {
            setTotal(quantidade * preco);
        }

       
        return <> 
        <View style={estilosItem.informacao}>
            <Text style={estilosItem.nome}>{nome}</Text>
            <Text style={estilosItem.descricao}>{descricao}</Text>
            <Text style={estilosItem.preco}>{
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(preco)
                }
                </Text>
        </View>
        <View style={estilosItem.carrinho}>
            <View>
                <View style={estilosItem.valor}>
                    <Text style={estilosItem.descricao}>Quantidade: </Text>
                    <CampoInteiro estilos={estilosItem.quantidade} valor={quantidade} acao={atualizaQuantidadeTotal}/>
                </View>
                <View style={estilosItem.valor}>
                    <Text style={estilosItem.descricao}>Total:</Text>
                    <Text style={estilosItem.preco}>{ Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(total)}</Text>
                </View>
            </View>
            <Botao valor="Remover do Carrinho" acao="{() => {}}"></Botao>
        </View>
        <View style={estilosItem.divisor}></View>
    </>
}
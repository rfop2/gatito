import React, { useState } from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import CampoInteiro from '../../../componentes/Camposinteiros';

import estilosItem from '../estilosItem';

import Botao from '../../../componentes/Botao/index';

export default function Item({nome, preco, descricao}){
        const [quantidade, setQuantidade] = useState(1);
        const [total, setTotal] = useState(preco);
        const [expandir, setExpandir] = useState(false);

        const atualizaQuantidadeTotal = (novaQuantidade) => {
            setQuantidade(novaQuantidade);
            calculaTotal(novaQuantidade);
        }

        const calculaTotal = (quantidade) => {
            setTotal(quantidade * preco);
        }

        const inverteExpandir = () => {
            setExpandir(!expandir);

            atualizaQuantidadeTotal(1);
        }
        return <> 
        <TouchableOpacity style={estilosItem.informacao} onPress={inverteExpandir}>
            <Text style={estilosItem.nome}>{nome}</Text>
            <Text style={estilosItem.descricao}>{descricao}</Text>
            <Text style={estilosItem.preco}>{
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(preco)
                }
                </Text>
        </TouchableOpacity>
        {expandir && 
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
                <Botao valor="Adicionar" acao="{() => {}}"></Botao>
            </View>
        }
        <View style={estilosItem.divisor}></View>
    </>
}
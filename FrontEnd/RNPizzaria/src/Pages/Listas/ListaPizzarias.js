import React, { Component } from "react";
import { Text, Image, StyleSheet, View, AsyncStorage, FlatList } from "react-native";
import api from '../../Services/api';

class ListaPizzarias extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require("../../assets/img/list.png")}
                style={styles.tabNavigatorIconHome}
            />
        )
    };

    constructor(props) {
        super(props);
        this.state = {
            Lista: []
        };
    }
    componentDidMount() {
        this.carregarPizzarias();
    }

    carregarPizzarias = async () => {
        const value = await AsyncStorage.getItem("userToken");
        const resposta = await api.get("/pizzarias", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + value
            }
        });
        const dadosDaApi = resposta.data;
        this.setState({ Lista: dadosDaApi });
        console.warn(this.state.Lista)
    };
    

    render() {
        return (
            <View style={styles.main}>
                {/* Cabecalho - header */}
                <View style={styles.mainHeader}>
                    <View style={styles.mainHeaderRow}>
                        <Text style={styles.mainHeaderText}>{"Lista de Pizzarias".toUpperCase()}</Text>
                    </View>
                    <View style={styles.mainHeaderLine} />
                    <View style={styles.mainBody}>
                        <FlatList
                            contentContainerStyle={styles.mainBodyConteudo}
                            data={this.state.Lista}
                            keyExtractor={item => item.idpizzaria}
                            renderItem={this.renderizaItem}
                        />
                    </View>
                </View>
            </View>
        );
    }
    renderizaItem = ({ item }) => (
        <View style={styles.flatItemLinha}>
          <View style={styles.flatItemContainer}>
            <Text style={styles.flatItemData}>Nome: {item.nome}</Text>
            <Text style={styles.flatItemData}>Funcionamento: {item.horarioFuncionamento}</Text>
            <Text style={styles.flatItemData}>Endereço: {item.localizacao}</Text>
            <Text style={styles.flatItemData}>Vegan: {item.vegan}</Text>
            <Text style={styles.flatItemData}>Categoria: {item.categoria}</Text>
            <Text style={styles.flatItemData}>Telefone: {item.telefone}</Text>
          </View>
        </View>
      );
}

export default ListaPizzarias;
const styles = StyleSheet.create({
    tabNavigatorIconHome: {
        width: 25,
        height: 25,
        // tintColor: "purple"
        tintColor: "#FFFFFF"
    },
    // conteúdo da main
    main: {
        flex: 1,
        backgroundColor: "#F1F1F1"
    },
    // cabecalho
    mainHeaderRow: {
        flexDirection: "row"
    },
    mainHeader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    // imagem do cabeçalho
    mainHeaderImg: {
        width: 22,
        height: 22,
        tintColor: "#cccccc",
        marginRight: -9,
        marginTop: -9
    },
    // texto do cabecalho
    mainHeaderText: {
        marginTop:10,
        fontSize: 16,
        letterSpacing: 5,
        color: "#999999",
        fontFamily: "OpenSans-Regular"
    },
    // linha de separacao do cabecalho
    mainHeaderLine: {
        width: 170,
        paddingTop: 10,
        borderBottomColor: "#999999",
        borderBottomWidth: 0.9
    },
    // corpo do texto
    mainBody: {
        // backgroundColor: "#999999",
        flex: 4,
        width:"100%"
    },
    // conteúdo da lista
    mainBodyConteudo: {
        paddingTop: 30,
        paddingRight: 50,
        paddingLeft: 50
    },
    // dados do evento de cada item da linha
    flatItemLinha: {
        borderBottomWidth: 0.9,
        borderBottomColor: "gray"
    },
    flatItemContainer: {
        flex: 7,
        marginTop: 5
    },
    flatItemTitulo: {
        fontSize: 14,
        color: "#333",
        fontFamily: "OpenSans-Light"
    },
    flatItemData: {
        fontSize: 10,
        color: "#999",
        lineHeight: 24
    }
});


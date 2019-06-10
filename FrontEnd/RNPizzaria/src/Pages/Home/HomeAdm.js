import React, { Component } from 'react';
import { Text, View, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

class HomeAdm extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../../assets/img/home.png")}
        style={styles.tabNavigatorIconHome}
      />
    )
  };

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.mainHeader}>
          <View style={styles.mainHeaderRow}>
            <Image
              source={require("../../assets/img/home.png")}
              style={styles.mainHeaderImg}
            />

            <Text style={styles.mainHeaderText}>{"Suas Permissões".toUpperCase()}</Text>
          </View>
          <View style={styles.mainHeaderLine} />
        </View>
        <View style={styles.mainBody}>
          <View style={styles.flatItemLinha}>
            <View style={styles.flatItemContainer}>
              <FlatList
                contentContainerStyle={styles.mainBodyConteudo}
                data={[
                  { key: 'Listar Pizzarias' },
                  { key: 'Cadastrar Pizzaria' }
                ]}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Text style={styles.flatItemLinha}>{item.key}</Text>}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default HomeAdm;

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
    flex: 4
  },
  // conteúdo da lista
  mainBodyConteudo: {
    paddingTop: 30,
    paddingRight: 50,
    paddingLeft: 50
  },
  // dados do evento de cada item da linha
  flatItemLinha: {
    flexDirection: "row",
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
  },
  flatItemImg: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  flatItemImgIcon: {
    width: 22,
    height: 22,
    tintColor: "#B727FF"
  },
  btnLogin: {
    height: 38,
    shadowColor: "rgba(0,0,0, 0.4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 3, // Android
    width: 240,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  }
});
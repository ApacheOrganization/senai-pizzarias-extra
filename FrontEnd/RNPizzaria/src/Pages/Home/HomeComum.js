import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, FlatList } from 'react-native';

class HomeComum extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../../assets/img/home.png")}
        style={styles.tabNavigatorIconHome}
      />
    )
  };
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.cabecalho}>
          <View style={styles.linhaCabecalho}>
            <Text style={styles.titulo}>{"Suas Permissões".toUpperCase()}</Text>
          </View>
          <View style={styles.linhaSolida} />
        </View>
        <View style={styles.corpo}>
          <View style={styles.linha}>
            <View style={styles.conteiner}>
              <FlatList
                contentContainerStyle={styles.conteudoCorpo}
                data={[
                  { key: 'Listar Pizzarias' },
                  { key: 'Cadastrar Pizzaria' }
                ]}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Text style={styles.linha}>{item.key}</Text>}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default HomeComum;

const styles = StyleSheet.create({
  tabNavigatorIconHome: {
    width: 25,
    height: 25,
    tintColor: "#FFFFFF"
  },
  main: {
    flex: 1,
    backgroundColor: "#F1F1F1"
  },
  linhaCabecalho: {
    flexDirection: "row"
  },
  cabecalho: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titulo: {
    fontSize: 16,
    letterSpacing: 5,
    color: "#999999",
    fontFamily: "OpenSans-Regular"
  },
  linhaSolida: {
    width: 170,
    paddingTop: 10,
    borderBottomColor: "#999999",
    borderBottomWidth: 0.9
  },
  corpo: {
    flex: 4
  },
  conteudoCorpo: {
    paddingTop: 30,
    paddingRight: 50,
    paddingLeft: 50
  },
  linha: {
    flexDirection: "row",
    borderBottomWidth: 0.9,
    borderBottomColor: "gray"
  },
  conteiner: {
    flex: 7,
    marginTop: 5
  }
});
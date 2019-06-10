import React, { Component } from 'react';
import { StyleSheet, Text, Image, TextInput, View, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import api from '../../Services/api'

class CadastrarPizzaria extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../../assets/img/add.png")}
        style={styles.tabNavigatorIconHome}
      />
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      localizacao: '',
      horarioFuncionamento: '',
      cnpj: '',
      vegan: '',
      idCategoria: '',
      telefone: ''
    }
  }

  _cadastrar = async () => {

    if (this.state.nome == null || this.state.nome == '') {
      Alert.alert(
        "Erro",
        "Informe um nome",
        [
          { text: "Later", onPress: () => console.log("later pressed") },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    } else {
      if (this.state.localizacao == null || this.state.localizacao == '') {
        Alert.alert(
          "Erro",
          "Informe uma localizacao",
          [
            { text: "Later", onPress: () => console.log("later pressed") },
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
      } else {
        if (this.state.horarioFuncionamento == null || this.state.horarioFuncionamento == '') {
          Alert.alert(
            "Erro",
            "Informe uma horario de Funcionamento",
            [
              { text: "Later", onPress: () => console.log("later pressed") },
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
        } else {
          if (this.state.cnpj == null || this.state.cnpj == '' || this.state.cnpj.length > 14 || this.state.cnpj.length < 14) {
            Alert.alert(
              "Erro",
              "Informe um cnpj válido",
              [
                { text: "Later", onPress: () => console.log("later pressed") },
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ],
              { cancelable: false }
            );
          } else {

            if (this.state.vegan == null || this.state.vegan == '' || this.state.vegan !== 'true' || this.state.vegan !== 'false' ) {
              Alert.alert(
                "Erro",
                "Informe se possui produto vegan",
                [
                  { text: "Later", onPress: () => console.log("later pressed") },
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );
            } else {
              if (this.state.idCategoria == null || this.state.idCategoria == '' || this.state.idCategoria > 3) {
                Alert.alert(
                  "Erro",
                  "Informe um id da Categoria válido",
                  [
                    { text: "Later", onPress: () => console.log("later pressed") },
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ],
                  { cancelable: false }
                );
              } else {
                  if (this.state.telefone == null || this.state.telefone == '') {
                    Alert.alert(
                      "Erro",
                      "Informe um telefine válido",
                      [
                        { text: "Later", onPress: () => console.log("later pressed") },
                        {
                          text: "Cancel",
                          onPress: () => console.log("Cancel Pressed"),
                          style: "cancel"
                        },
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                      ],
                      { cancelable: false }
                    );
                  } else {

                    const value = await AsyncStorage.getItem("userToken");

                    await api.post("/pizzarias", {
                        localizacao: this.state.localizacao,
                        nome: this.state.nome,
                        horarioFuncionamento: this.state.horarioFuncionamento,
                        cnpj: this.state.cnpj,
                        vegan: this.state.vegan,
                        idCategoria: this.state.idCategoria,
                        telefone: this.state.telefone
                    }, {
                        headers: {
                          "Content-Type": "application/json",
                          "Authorization": "Bearer " + value
                        },


                      });
                    Alert.alert(
                      "Parabéns",
                      "Você Cadastrou uma Pizzaria",
                      [
                        { text: "Later", onPress: () => console.log("later pressed") },
                        {
                          text: "Cancel",
                          onPress: () => console.log("Cancel Pressed"),
                          style: "cancel"
                        },
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                      ],
                      { cancelable: false }
                    );
                    this.props.navigation.navigate("AdministradorStack");
                  }
                
              }
            }
          }
        }
      }
    }

  }


  render() {
    return (
      <View>
        <View style={styles.cabecalho}>
          <Text style={styles.titulo}>Cadastrar Pizzaria</Text>
          <View style={styles.linhaTitulo} />
        </View>
        <View style={styles.body}>
          <TextInput style={styles.input}
            autoCapitalize="none"
            returnKeyType="next"
            placeholder='Nome'
            onChangeText={nome => this.setState({ nome })}
            placeholderTextColor='rgb(161, 162, 163)' />

            <TextInput style={styles.input}
              autoCapitalize="none"
              returnKeyType="next"
              placeholder='localização'
              onChangeText={localizacao => this.setState({ localizacao })}
              placeholderTextColor='rgb(161, 162, 163)' />

            <TextInput style={styles.input}
              autoCapitalize="none"
              returnKeyType="next"
              placeholder='Horaro de funcionamento'
              onChangeText={horarioFuncionamento => this.setState({ horarioFuncionamento })}
              placeholderTextColor='rgb(161, 162, 163)' />

            <TextInput style={styles.input}
              autoCapitalize="none"
              returnKeyType="next"
              placeholder='CNPJ(até 14 dígitos)'
              onChangeText={cnpj => this.setState({ cnpj })}
              placeholderTextColor='rgb(161, 162, 163)' />

            <TextInput style={styles.input}
              autoCapitalize="none"
              returnKeyType="next"
              placeholder='vegan? (true ou false)'
              onChangeText={vegan => this.setState({ vegan })}
              placeholderTextColor='rgb(161, 162, 163)' />

            <TextInput style={styles.input}
              autoCapitalize="none"
              returnKeyType="next"
              placeholder='Id da categoria (até 3))'
              onChangeText={idCategoria => this.setState({ idCategoria })}
              placeholderTextColor='rgb(161, 162, 163)' />

            <TextInput style={styles.input}
              autoCapitalize="none"
              returnKeyType="next"
              placeholder='Telefone'
              onChangeText={telefone => this.setState({ telefone })}
              placeholderTextColor='rgb(161, 162, 163)' />

            <TouchableOpacity style={styles.buttonContainer}
              onPress={this._cadastrar}
            >
              <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default CadastrarPizzaria;


const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabNavigatorIconHome: {
    width: 25,
    height: 25,
    // tintColor: "purple"
    tintColor: "#FFFFFF"
  },
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: 'black',
    width: 376
  },
  buttonContainer: {
    backgroundColor: 'yellow',
    paddingVertical: 15,
    width: 376,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '700'
  },
  titulo: {
    fontSize: 16,
    letterSpacing: 1
  },
  cabecalho: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30
  },

  linhaTitulo: {
    width: 100,
    borderBottomColor: "#999999",
    borderBottomWidth: 0.9,
    marginBottom: 8,
    marginTop: 2
  }
});
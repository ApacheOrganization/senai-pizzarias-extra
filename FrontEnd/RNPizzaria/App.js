import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, TextInput, View, ImageBackground, TouchableOpacity, Image, Alert } from 'react-native';
import api from './src/Services/api';
import jwt from "jwt-decode";
import { createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';


import HomeAdm from './src/Pages/Home/HomeAdm';
import HomeComum from './src/Pages/Home/HomeComum';
import ListaPizzarias from './src/Pages/Listas/ListaPizzarias'
import CadastrarPizzaria from './src/Pages/Cadastro/CadastrarPizzaria'

class App extends Component {

  render() {
    return (
      <AppContainer />
    )
  }
}
export default App;

class TelaInicial extends Component {

  constructor(props) {
    super(props);
    this.state = { email: '', senha: '' };
  }


  login = async () => {
    if (this.state.email == '') {
      Alert.alert(
        "Erro",
        "Informe um email",
        [

          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    } else {

      if (this.state.senha == '') {
        Alert.alert(
          "Erro",
          "Informe sua senha",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
      } else {
        const resposta = await api.post("/login", {
          email: this.state.email,
          senha: this.state.senha
        });
        const token = resposta.data.token;
        await AsyncStorage.setItem("userToken", token);
        if (jwt(token).permissao == 'Admin') {
          this.props.navigation.navigate('Home - Administrador')
        }
        if (jwt(token).permissao == 'Comum') {
          this.props.navigation.navigate('Home - Comum')
        }
      }
    }
  };



  render() {
    return (
      <ImageBackground
        source={require("./src/assets/img/login.png")}
        style={StyleSheet.absoluteFillObject}
      >
        <View style={styles.overlay} />
        <View style={styles.main}>
          <Image
            source={require("./src/assets/img/loginIcon.png")}
            style={styles.imagem}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#FFFFFF"
            underlineColorAndroid="#FFFFFF"
            required
            onChangeText={email => this.setState({ email })}
            defaultValue='gandolf@admin.com'
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#FFFFFF"
            password="true"
            underlineColorAndroid="#FFFFFF"
            onChangeText={senha => this.setState({ senha })}
            defaultValue='132'
          />
          <TouchableOpacity
            style={styles.botao}
            onPress={this.login}
          >
            <Text style={styles.textoBotao}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

const ComumStack = createBottomTabNavigator(
  {
    'Home - Comum': HomeComum,
    'Lista Pizzarias': ListaPizzarias

  },
  {
    initialRouteName: "Home - Comum",
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      inactiveBackgroundColor: "#E15353",
      activeBackgroundColor: "#FD0F17",
      activeTintColor: "#060505",
      inactiveTintColor: "#060505",
      style: {
        height: 50
      }
    }
  });

const AdministradorStack = createBottomTabNavigator(
  {
    'Home - Administrador': HomeAdm,
    'Listar Pizzarias': ListaPizzarias,
    'Cadastrar Pizzaria': CadastrarPizzaria

  },
  {
    initialRouteName: "Home - Administrador",
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      inactiveBackgroundColor: "#E15353",
      activeBackgroundColor: "#FD0F17",
      activeTintColor: "#060505",
      inactiveTintColor: "#060505",
      style: {
        height: 50
      }
    }
  });





const AppSwitchNavigator = createSwitchNavigator({
  'Tela inicial': { screen: TelaInicial },
  'Home - Administrador': { screen: AdministradorStack },
  'Home - Comum': { screen: ComumStack }
})

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#FD0F17"
  },
  main: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  imagem: {
    tintColor: "#FFFFFF",
    height: 100,
    width: 90,
    margin: 10
  },
  botao: {
    height: 38,
    width: 240,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    justifyContent: "center",
    borderRadius: 20,
    elevation: 5,
    shadowColor: "rgba(0,0,0, 0.4)", 
    shadowRadius: 1, 
    shadowOffset: { height: 1, width: 1 }, 
    shadowOpacity: 1,
  },
  textoBotao: {
    fontSize: 10,
    color: "#FD0F17",
    letterSpacing: 2,
    fontFamily: "OpenSans-Light",
  },
  input: {
    width: 240,
    marginBottom: 10,
    color: 'white',
    fontSize: 10,
  }
});

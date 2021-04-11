import { StatusBar } from "expo-status-bar";

import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Switch,
  TouchableOpacity,
  Alert,
} from "react-native";

import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";

import Header from "./src/components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      periodo: "",
      turno: "",
      curso: "",
      sexo: "",
      bolsa: false,
      idade: "",
      valor: 0,
      infoStatus: false,
      sexos: [
        { key: 1, sexo: "Feminino" },
        { key: 2, sexo: "Masculino" },
      ],
      cursos: [
        { key: 1, nome: "Nutrição", valor: 800, periodo: 4 },
        { key: 2, nome: "Administração", valor: 980, periodo: 8 },
        { key: 3, nome: "Sistemas de informação", valor: 1080, periodo: 8 },
      ],
      turnos: [
        { key: 1, turno: "Diurno" },
        { key: 2, turno: "Noturno" },
      ],
    };
    this.validar = this.validar.bind(this);
  }
  validar() {
    if (
      this.state.nome &&
      this.state.periodo &&
      this.state.turno &&
      this.state.curso &&
      this.state.sexo &&
      this.state.idade &&
      this.state.valor > 0
    ) {
      Alert.alert("Dados salvos com sucesso");
      this.setState({ infoStatus: true });
    } else {
      Alert.alert("Todos os dados são obrigatórios");
    }
  }
  render() {
    let QtdPeriodos = [];
    let nomePeriodo = this.state.curso ? this.state.curso : "";
    for (let i = 0; i < this.state.cursos.length; i++) {
      if (this.state.cursos[i]) {
        for (let p = 0; p < this.state.cursos[i].periodo; p++) {
          if (this.state.cursos[i].nome == nomePeriodo) {
            QtdPeriodos.push({ periodo: p + 1 });
          }
        }
      }
    }
    
    let sexo = this.state.sexos.map((value, key) => {
      return <Picker.Item key={key} value={value.sexo} label={value.sexo} />;
    });

    let curso = this.state.cursos.map((value, key) => {
      return <Picker.Item key={key} value={value.nome} label={value.nome} />;
    });
    
    let periodo = QtdPeriodos.map((value, key) => {
      return (
        <Picker.Item
          key={key}
          value={value.periodo}
          label={value.periodo.toString()}
        />
      );
    });
    
    let turno = this.state.turnos.map((value, key) => {
      return <Picker.Item key={key} value={value.turno} label={value.turno} />;
    });

    return (
      <SafeAreaView style={style.container}>
        <StatusBar style="light" />
        <Header />
        <ScrollView>
        <View style={style.body}>
            {this.state.infoStatus ? (
              <View style={style.detalhes}>
                <Text style={style.titulo}>
                  Informações inseridas:
                </Text>
                  <View style={style.campo}>
                    <Text style={style.nomeCampo}>Nome:</Text>
                    <Text style={style.dado}>{this.state.nome}</Text>
                  </View>
                  <View style={style.campo}>
                    <Text style={style.nomeCampo}>Idade:</Text>
                    <Text style={style.dado}>{this.state.idade}</Text>
                  </View>
                  <View style={style.campo}>
                    <Text style={style.nomeCampo}>Sexo:</Text>
                    <Text style={style.dado}>{this.state.sexo}</Text>
                  </View>
                  <View style={style.campo}>
                    <Text style={style.nomeCampo}>Curso:</Text>
                    <Text style={style.dado}>{this.state.curso}</Text>
                  </View>
                  <View>
                    <View style={style.campo}>
                      <Text style={style.nomeCampo}>Período:</Text>
                      <Text style={style.dado}>
                        {this.state.periodo}
                      </Text>
                    </View>
                    <View style={style.campo}>
                      <Text style={style.nomeCampo}>Turno:</Text>
                      <Text style={style.dado}>{this.state.turno}</Text>
                    </View>
                  </View>
                  <View style={style.campo}>
                    <Text style={style.nomeCampo}>Renda:</Text>
                    <Text style={style.dado}>
                      R${this.state.valor.toFixed()}
                    </Text>
                  </View>
                  <View style={style.campo}>
                    <Text style={style.nomeCampo}>Bolsista:</Text>
                    <Text style={style.dado}>
                      {this.state.bolsa ? "Sim" : "Não"}
                    </Text>
                  </View>
                </View>
            ) : (
              <View>
              </View>
            )}
            <View>
              <Text style={style.titulo}>
                Selecione os parâmentros:
              </Text>
              <View>
                <TextInput
                  style={style.input}
                  placeholder={"Digite o nome"}
                  onChangeText={(nome) => this.setState({ nome: nome })}
                  value={this.state.infoStatus ? "" : this.state.nome}
                />
                </View>
                <View>
                <TextInput
                  style={style.input}
                  placeholder={"Digite a idade"}
                  maxLength={2}
                  keyboardType="decimal-pad"
                  value={this.state.infoStatus ? "" : this.state.idade}
                  onChangeText={(idade) => this.setState({ idade: idade })}
                />
                </View>
                <View style={style.picker}>
                  <Picker
                    onValueChange={(sexo) => this.setState({ sexo: sexo })}
                    style={{ height: 50, width: 320 }}
                    selectedValue={this.state.infoStatus ? "" : this.state.sexo}
                  >
                    <Picker.Item value={""} label={"Selecione o sexo"} />
                    {sexo}
                  </Picker>
                </View>
                <View style={style.picker}>
                  <Picker
                    onValueChange={(curso) => this.setState({ curso: curso })}
                    style={{ height: 50, width: 320 }}
                    selectedValue={
                      this.state.infoStatus ? "" : this.state.curso
                    }
                  >
                    <Picker.Item value={""} label={"Selecione o curso"} />
                    {curso}
                  </Picker>
                </View>
                <View style={style.picker}>
                  <Picker
                    onValueChange={(periodo) =>
                      this.setState({ periodo: periodo })
                    }
                    style={{ height: 50, width: 320 }}
                    selectedValue={
                      this.state.infoStatus ? "" : this.state.periodo
                    }
                  >
                    <Picker.Item value={""} label={"Selecione o período"} />
                    {periodo}
                  </Picker>
                </View>
                <View style={style.picker}>
                  <Picker
                    onValueChange={(turno) => this.setState({ turno: turno })}
                    style={{ height: 50, width: 320 }}
                    selectedValue={
                      this.state.infoStatus ? "" : this.state.turno
                    }
                  >
                    <Picker.Item value={""} label={"Selecione o turno"} />
                    {turno}
                  </Picker>
                </View>
                <View style={{ marginTop: "2%" }}>
                  <Text>Selecione a renda:</Text>
                  <Slider
                    minimumValue={0}
                    maximumValue={50000}
                    minimumTrackTintColor="blue"
                    thumbTintColor="blue"
                    onValueChange={(valor) => this.setState({ valor: valor })}
                    value={this.state.valor}
                  />
                  <Text style={style.valor}>
                    R${this.state.valor.toFixed(0)}
                  </Text>
                </View>
                <View style={style.switch}>
                  <Text>Já ganhou bolsa?</Text>
                  <View>
                    <Switch
                      value={this.state.bolsa}
                      onValueChange={(switchValue) =>
                        this.setState({ bolsa: switchValue })
                      }
                      thumbColor="blue"
                    />
                  </View>
                </View>
                <TouchableOpacity
                  style={style.buttonSalvar}
                  onPress={() => this.validar()}
                >
                  <Text style={style.textButton}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  body: {
    flex: 1,
    margin: "5%",
  },
  input: {
    padding: "1%",
    borderColor: "black",
    borderWidth: 1,
    marginTop: "3%",
    borderRadius: 6,
  },
  buttonSalvar: {
    backgroundColor: "blue",
    borderRadius: 4,
    padding: "3%",
  },
  textButton: {
    textAlign: "center",
    color: "white",
  },
  switch: {
    marginTop: "2%",
    alignItems: "flex-start",
  },
  picker: {
    borderColor: "black",
    borderWidth: 1,
    marginTop: "3%",
    borderRadius: 6,
  },
  titulo: {
    fontSize: 20,
  },
  detalhes: {
    flex: 1,
  },
  campo: {
    flexDirection: "row",
  },
  nomeCampo: {
    fontWeight: "bold",
  },
  valor: {
    textAlign: "center", 
    fontWeight: "bold"
  },
  dado: {
    marginLeft: 5,
  }
});

export default App;

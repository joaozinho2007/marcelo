import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import axios from "axios";

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      // Substitua a URL abaixo pela URL de sua API Flask
      const apiUrl = "https://sua-api-flask/exemplo";

      const response = await axios.get(apiUrl);
      const responseData = response.data;

      // Atualize o estado 'data' com os dados obtidos da API
      this.setState({ data: responseData });
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
    /*Escreva o código para buscar dados de sua API Flask.
     Armazene os dados obtidos em um estado chamado data*/

     
  };

  renderItems = ({ item, index }) => {
    var num = index % 4;

    return (
      <TouchableOpacity
        style={[
          { backgroundColor: this.selectColor(index), opacity: 0.7 },
          styles.cardContainer,
        ]}
        onPress={() => {
          this.props.navigation.navigate("Star", { name: item.name });
        }}
      >
        <Image
          source={
            num == 0
              ? require("../assets/star1.png")
              : num == 1
              ? require("../assets/star2.png")
              : num == 2
              ? require("../assets/star3.png")
              : num == 3
              ? require("../assets/star4.png")
              : null
          }
          style={{ width: 50, height: 50 }}
        />
        <Text style={styles.cardTitle}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  keyExtractor = (item, index) => index.toString();

  /*esta função seleciona uma cor para os cartões na flatlist*/
  selectColor = (index) => {
    var color = ["#fbffd5", "#ffefff", "#ede5ff", "#eafff4"];
    var num = index % 4;
    return color[num];
  };

  render() {
    const { data } = this.state;
    return (
      <ImageBackground
        source={require("../assets/bg_image.jpg")}
        style={{ flex: 1 }}
      >
        <SafeAreaView
          style={{
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          }}
        />
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Estrelas</Text>
        </View>
        {data.length > 0 ? (
          <View style={styles.upperContainer}>
            <FlatList
              numColumns={3}
              data={data}
              renderItem={this.renderItems}
              keyExtractor={this.keyExtractor}
            />
          </View>
        ) : <Text style={styles.headerTitle}>Carregando...</Text>}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  headerContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: RFValue(28),
    fontWeight: "bold",
  },
  upperContainer: {
    flex: 0.9,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: RFValue(12),
    textAlign: "center",
    color: "navy",
  },
  cardContainer: {
    borderWidth: 0,
    borderRadius: 20,
    margin: RFValue(10),
    width: RFValue(100),
    height: RFValue(100),
    alignItems: "center",
    justifyContent: "center",
  },
});

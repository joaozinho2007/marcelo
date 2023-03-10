import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      super(props);
      this.state = {
        fontsLoaded: false,
        isEnabled: false,
        light_theme: true,
        name: ""
      };
      toggleSwitch()
      {
        const previous_state = this.state.isEnabled;
        const theme = !this.state.isEnable ? "dark" : "light";
        var updates = {};
        updates[
          "/users/" + firebase.auth().currentUser.uid + "/current_theme"
        ] = theme;
        firebase
        .database()
        .ref()
        .update(updates);
        this.setState({ isEnable: !previous_state, ligth_theme: previous_state});
      }
     async_loadFontAsync(); {
      awaitFont.loadAsync(customFonts);
      this.setState({fontsLoaded: true});
     }

     this.componentDidMount(); {
      this._loadFontsAsync();
      this.fetchUser();
     }

     asyncfetchUser(); {
      let theme, name, image;
      awaitfirebase
      .database()
      .ref("/users/" + firebase.auth().currentUser.uid)
      .on("value", function (snapshot){
        theme = snapshot.val().current_theme;
        name = `${snapshot.val().firts_name} ${snapshot.val().last_name}`;
      });
      this.setState({
        ligth_theme: theme === "ligth" ? true : false,
        isEnabled: theme === "ligth" ? false : true,
        name: name
      });
     }

      SplashScreen.hideAsync();
      return (
        <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.iconImage}
            ></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>App Narração de Histórias</Text>
          </View>
        </View>
        <View style={styles.screenContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require("../assets/profile_img.png")}
              style={styles.profileImage}
            ></Image>
            <Text style={styles.nameText}>{this.state.name}</Text>
          </View>
          <View style={styles.themeContainer}>
            <Text style={styles.themeText}>Tema escuro</Text>
            <Switch
              style={{
                transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
              }}
              trackColor={{ false: "#767577", true: "white" }}
              thumbColor={this.state.isEnabled ? "#ee8249" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => this.toggleSwitch()}
              value={this.state.isEnabled}
            />
          </View>
          <View style={{ flex: 0.3 }} />
        </View>
        <View style={{ flex: 0.08 }} />
      </View>
    );
  }
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});


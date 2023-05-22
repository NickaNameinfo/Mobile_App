import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
import { formStyles } from "../../assets/style/fromStyle";
import { styles } from "../../assets/style/style";

function Login({ navigation }) {
  return (
    <View style={styles.flex}>
      <ImageBackground
        // source={{ uri: "https://kavalarnalantn.in/images/Banner.png" }}
        resizeMode="repeat"
        style={styles.backImage}
      >
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.center}>
              <Image
                style={styles.image}
                source={{
                  uri: "https://ibss.co.in/Tamilnadupolice4/images/logos/logo.png",
                }}
              />
              <Text style={styles.titleText}>Employee Login</Text>
            </View>
            <TextInput
              label="Email Id"
              style={styles.inputBox}
              underlineColor="transparent"
              mode="outlined"
            />
            <TextInput
              label="Password"
              secureTextEntry
              style={styles.inputBox}
              underlineColor="transparent"
              mode="outlined"
            />
            <View style={formStyles.flexRow}>
              <Text
                variant="titleSmall"
                style={styles.textRght}
                onPress={() => navigation.navigate("ForgetPassword")}
              >
                Forget Password
              </Text>
              <Text
                variant="titleSmall"
                style={styles.textRght}
                onPress={() => navigation.navigate("Register")}
              >
                Register
              </Text>
            </View>
            <View style={styles.center}>
              <Button
                mode="outlined"
                style={styles.button}
                onPress={() => navigation.navigate("Dashboard")}
              >
                Login
              </Button>
            </View>
          </Card.Content>
        </Card>
      </ImageBackground>
    </View>
  );
}
export default Login;

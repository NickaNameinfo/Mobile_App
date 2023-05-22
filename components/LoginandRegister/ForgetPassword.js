import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
import { styles } from "../../assets/style/style";

function ForgetPassword({ navigation }) {
  return (
    <View style={styles.flex}>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
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
            </View>
            <TextInput
              label="Mobile Number"
              style={styles.inputBox}
              keyboardType="numeric"
              underlineColor="transparent"
              mode="outlined"
            />
            <View style={styles.center}>
              <Button
                mode="outlined"
                style={styles.button}
                onPress={() => navigation.navigate("Login")}
              >
                Send OTP
              </Button>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text variant="titleSmall" style={{ marginTop: 10 }}>
                  Back
                </Text>
              </TouchableOpacity>
            </View>
          </Card.Content>
        </Card>
      </ImageBackground>
    </View>
  );
}
export default ForgetPassword;

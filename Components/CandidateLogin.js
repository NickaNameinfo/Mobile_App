import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  Button,
  Pressable,
} from "react-native";

import { formStyles } from ".././assets/style/fromStyle";
import { styles } from ".././assets/style/style";

function CandidateLogin({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#212761",
      }}
    >
      <View style={styles.card}>
        <View>
          <View style={styles.center}>
            <Image
              style={styles.image}
              source={require("../assets/logo.png")}
            />
            <Text style={styles.titleText}>Candidate Login</Text>
          </View>
          <TextInput
            label="Email Id"
            style={styles.inputBox}
            underlineColor="transparent"
            placeholder="Enter your Username"
            mode="outlined"
          />
          <TextInput
            label="Password"
            secureTextEntry
            style={styles.inputBox}
            underlineColor="transparent"
            placeholder="Enter your Password"
            mode="outlined"
          />
          <View style={formStyles.flexRow}>
            <Text
              variant="titleSmall"
              style={styles.forgetText}
              onPress={() => navigation.navigate("ForgetUsername")}
            >
              Forget UserName?
            </Text>
            <Text
              variant="titleSmall"
              style={styles.forgetText}
              onPress={() => navigation.navigate("ForgetPassword")}
            >
              Forget Password?
            </Text>
          </View>
          <View style={styles.center}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("ApplyJob")}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
export default CandidateLogin;

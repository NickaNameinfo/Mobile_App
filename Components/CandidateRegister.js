import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { styles } from ".././assets/style/style";

function CandidateRegister({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#212761",
      }}
    >
      <ImageBackground
        // source={{ uri: "https://kavalarnalantn.in/images/Banner.png" }}
        resizeMode="repeat"
        style={styles.backImage}
      >
        <ScrollView>
          <View style={styles.card}>
            <View>
              <View style={styles.center}>
                <Image
                  style={styles.image}
                  source={require("../assets/logo.png")}
                />
                <Text style={styles.titleText}>Candidate Registration</Text>
              </View>

              <TextInput
                label="Enter Name"
                placeholder="Enter Name"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Enter Initail"
                placeholder="Enter Initail"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Enter Mobile Number"
                placeholder="Enter Mobile Number"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                placeholder="Enter Email-Id"
                label="Enter Email-Id"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Enter Aadhar number"
                placeholder="Enter Aadhar number"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="UserName"
                placeholder="UserName"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Password"
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Confirm Password"
                placeholder="Confirm Password"
                secureTextEntry
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <View style={styles.center}>
                <Pressable
                  style={styles.button}
                  onPress={() => navigation.navigate("Dashboard")}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default CandidateRegister;

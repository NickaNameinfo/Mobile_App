import React from "react";
import { View, Text, ImageBackground, Image, ScrollView } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
import { styles } from "../../../assets/style/style";

function EmployementExForm({ navigation }) {
  return (
    <View style={styles.flex}>
      <ImageBackground
        // source={{ uri: "https://kavalarnalantn.in/images/Banner.png" }}
        resizeMode="repeat"
        style={styles.backImage}
      >
        <ScrollView>
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.center}>
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://ibss.co.in/Tamilnadupolice4/images/logos/logo.png",
                  }}
                />
                <Text style={styles.titleText}>Candidate Registeration</Text>
              </View>

              <TextInput
                label="Name of the Employee"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Status of the Employee"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Enter GPF / CPS / PPO No"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Department"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Rank"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Police Grade Number"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Unit Name"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="City / District"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Date Of Birth"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Date Of Enlistment"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Gender"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Mobile No"
                keyboardType="numeric"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Wards / Spouse of"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Name of the Family Member with Relation"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="User Name"
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
              <TextInput
                label="Confirm Password"
                secureTextEntry
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <View style={styles.center}>
                <Button
                  mode="outlined"
                  style={styles.button}
                  onPress={() => navigation.navigate("HomePage")}
                >
                  Register
                </Button>
              </View>
            </Card.Content>
          </Card>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default EmployementExForm;

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
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

function CandidateRegister({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      canNameInit: "",
      mobileNo: "",
      emailId: "",
      aadhaarNo: "",
      userName: "",
      password: "",
      conPassword: "",
      CandidateName: "Mobile",
    },
  });

  const onSubmit = async (data) => {
    console.log(data, "resssssssssssresssssssssss");
    try {
      const response = await axios.post(
        "https://nodebackend.kavalarnalantn.in:5000/son_Register/register",
        data
      );
      const jsonData = response.data;
      console.log(JSON.stringify(jsonData.data), "resssssssssss");
      navigation.navigate("HomePage");
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <View style={styles.flex}>
      <ImageBackground
        resizeMode="repeat"
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#212761",
        }}
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
              <View
                style={{
                  backgroundColor: "#ffffff3b",
                  padding: 10,
                  borderRadius: 5,
                }}
              >
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      label="Enter Name"
                      placeholder="Enter Name"
                      style={styles.inputBox}
                      underlineColor="transparent"
                      mode="outlined"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="fullName"
                />
                {errors.fullName && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}

                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      label="Enter Initial"
                      placeholder="Enter Initial"
                      style={styles.inputBox}
                      underlineColor="transparent"
                      mode="outlined"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="canNameInit"
                />
                {errors.canNameInit && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      label="Enter mobile No"
                      placeholder="Enter mobile No"
                      style={styles.inputBox}
                      underlineColor="transparent"
                      mode="outlined"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="mobileNo"
                />
                {errors.mobileNo && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}

                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      label="Enter E-mail id"
                      placeholder="Enter E-mail id"
                      style={styles.inputBox}
                      underlineColor="transparent"
                      mode="outlined"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="emailId"
                />
                {errors.emailId && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}

                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      label="Enter Aadhaar No"
                      placeholder="Enter Aadhaar No"
                      style={styles.inputBox}
                      underlineColor="transparent"
                      mode="outlined"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="aadhaarNo"
                />
                {errors.aadhaarNo && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}

                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      label="Enter User Name"
                      placeholder="Enter User Name"
                      style={styles.inputBox}
                      underlineColor="transparent"
                      mode="outlined"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="userName"
                />
                {errors.userName && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}

                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      label="Enter Password"
                      placeholder="Enter Password"
                      style={styles.inputBox}
                      underlineColor="transparent"
                      mode="outlined"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="password"
                />
                {errors.password && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}

                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      label="Confirm Password."
                      placeholder="Confirm Password."
                      style={styles.inputBox}
                      underlineColor="transparent"
                      mode="outlined"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="conPassword"
                />
                {errors.conPassword && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}
              </View>
              <View style={styles.center}>
                <Pressable
                  style={styles.button}
                  onPress={handleSubmit(onSubmit)}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </Pressable>
                <Text
                  variant="titleSmall"
                  style={{
                    color: "white",
                    fontWeight: "700",
                    fontSize: 14,
                    marginLeft: 10,
                    textAlign: "center",
                  }}
                  onPress={() => navigation.navigate("Login")}
                >
                  Back
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default CandidateRegister;

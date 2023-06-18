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

function CandidateRegister({ navigation, route }) {
  const { apiData } = route.params;
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
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
      CandidateName: apiData?.data?.userName,
    },
  });
  const password = watch("password");
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://nodebackend.kavalarnalantn.in:5000/son_Register/register",
        data
      );
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
                    pattern: /^\d{0,10}$/
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
                      keyboardType="numeric"
                    />
                  )}
                  name="mobileNo"
                />
                {errors.mobileNo && (
                  <Text style={styles.errorMessage}>Maximum of 10 digits</Text>
                )}

                <Controller
                  control={control}
                  rules={{
                    required: true,
                    pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
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
                  <Text style={styles.errorMessage}>Please check your email id</Text>
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
                      keyboardType="numeric"
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
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/
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
                <Text style={styles.errorMessage}>Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character, and must be at least 8 characters long.</Text>
                )}

                <Controller
                  control={control}
                  rules={{
                    required: true,
                    validate: (value) => value === password || 'Passwords do not match.'
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
                  <Text style={styles.errorMessage}>Passwords do not match.</Text>
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

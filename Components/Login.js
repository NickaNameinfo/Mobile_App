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
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

function Login({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data, "resssssssssssresssssssssss");
    try {
      const response = await axios.post(
        "https://nodebackend.kavalarnalantn.in:5000/user_Register/authenticate",
        data
      );
      const jsonData = response.data;
      console.log(JSON.stringify(jsonData.data), "resssssssssss");
      navigation.navigate("CandidateRegister");
    } catch (error) {
      console.log("Error:", error);
    }
  };
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
          <View style={styles.logoStyle}>
            <Image
              style={styles.image}
              source={require("../assets/logo.png")}
            />
            <Text style={styles.titleText}>Employee Login</Text>
          </View>

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Email Id"
                style={styles.inputBox}
                underlineColor="transparent"
                placeholder="Enter your Username"
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
                label="Password"
                secureTextEntry
                style={styles.inputBox}
                underlineColor="transparent"
                placeholder="Enter your Password"
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
            <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
          </View>
          <View>
            <Text variant="titleSmall" style={styles.signup}>
              Don't have an account?
            </Text>
            <Text
              style={{
                color: "white",
                fontWeight: "700",
                fontSize: 14,
                marginLeft: 10,
                textAlign: "center",
              }}
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </Text>
          </View>
        </View>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
}
export default Login;

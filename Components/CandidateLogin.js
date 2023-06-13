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

function CandidateLogin({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      emailId: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);

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
        </View>
      </View>
    </View>
  );
}
export default CandidateLogin;

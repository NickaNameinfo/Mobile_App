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

function CompanyRegister({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      companyName: "",
      contractName: "",
      phoneNo: "",
      EmailId: "",
      panNo: "",
      gstDoc: "",
      userName: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data, "fdgsdgfsdfg");

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
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Enter Company Name"
                    placeholder="Enter Company Name"
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="companyName"
              />
              {errors.companyName && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Enter contact person"
                    placeholder="Enter contact person"
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="contractName"
              />
              {errors.contractName && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Enter Mobile No"
                    placeholder="Enter Mobile No"
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="phoneNo"
              />
              {errors.phoneNo && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Enter email-id"
                    placeholder="Enter email-id"
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="EmailId"
              />
              {errors.EmailId && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Enter GST / PAN No."
                    placeholder="Enter GST / PAN No."
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="panNopanNo"
              />
              {errors.panNo && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Upload GST Document"
                    placeholder="Upload GST Document"
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="gstDoc"
              />
              {errors.gstDoc && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Enter User Nmae"
                    placeholder="Enter User Nmae"
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

              <View style={styles.center}>
                <Pressable
                  style={styles.button}
                  onPress={handleSubmit(onSubmit)}
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
export default CompanyRegister;

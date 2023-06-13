import React, { useEffect, useState } from "react";
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
import axios from "axios";
import SelectDropdown from "react-native-select-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";

function Register({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      empName: "",
      empStatus: "",
      gpfcpd: "",
      ppocps: "",
      rand: "",
      department: "",
      District: "",
      dob: "",
      doe: "",
      dopr: "",
      dod: "",
      gender: "",
      mobileNo: "",
      gno: "",
      policePersonnel: "",
      familyMember: "",
      unitName: "",
      userName: "",
      password: "",
      conformpass: "",
    },
  });

  const itemsStatus = ["Serving", "Retired", "Deceased"];
  const itemsGender = ["Male", "Female", "Transgender"];

  const itemsWards = [
    "Police Personnel",
    "Ministerial Staff",
    "Fire & Rescue Services",
    "Prison & Correctional Services",
  ];

  const itemsRelation = ["Brother", "Sister", "Spouse", "Son", "Daughter"];

  const itemsDepartment = [
    "Police Personnel",
    "Ministerial Staff",
    "Fire & Rescue Services",
    "Prison & Correctional Services",
    "Others",
  ];
  const itemsRank = [
    "Additional Director General of Police",
    "Additional Superintendent of Police",
    "Administrative Officer",
    "Assistant",
    "Assistant Commandant",
    "Assistant Director",
    "Assistant Manager",
    "Automobile Engineer",
    "Band Master",
    "Barber",
    "Batteryman",
    "Binder",
    "Blacksmith",
    "Chargemen",
    "Chief Manager",
    "Chief Reporter",
    "Chief Administrative Officer",
    "Cleaner",
    "Commandant",
    "Cook",
    "Data Entry Assistant",
    "Data Entry Operator",
    "Deputy Commandant",
    "Deputy Director",
    "Deputy Inspector General of Police",
    "Deputy Superintendent of Police",
    "Dhoby",
    "Director General of Police",
    "Dog Boy",
    "Duffadar",
    "Electrician / Fitter / Foreman / Hammerman / Helper",
    "Gardener",
    "Grade I PC",
    "Grade II PC",
  ];
  const itemsCity = [
    "Ariyalur",
    "Avadi Commissionerate",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Coimbatore City",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kancheepuram",
    "Kanniyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Madurai City",
    "Mayiladuthurai",
    "Nagapattinam",
    "Namakkal",
    "The Nilgiris",
    "Perambalur",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Salem city",
    "Sivagangai",
    "Tambaram comimissionerate",
    "Thanjavur",
    "Theni",
    "Tirupattur",
    "Thoothukudi",
    "Tirunelveli",
    "Tirunelveli City",
    "Tiruppur",
    "Tiruppur City",
    "Thiruvallur",
    "Tiruvannamalai",
    "Thiruvarur",
    "Tiruchirappalli",
    "Tiruchirappalli City",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
  ];

  const onSubmit = async (data) => {
    console.log(data, "resssssssssssresssssssssss");
    try {
      const response = await axios.post(
        "https://nodebackend.kavalarnalantn.in:5000/user_Register/register",
        data
      );
      const jsonData = response.data;
      console.log(JSON.stringify(jsonData.data), "resssssssssss");
      navigation.navigate("Login");
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
            <View style={styles.center}>
              <Image
                style={styles.image}
                source={require("../assets/logo.png")}
              />
              <Text style={styles.titleText}>Employee Registration</Text>
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
                    label="Name of the Employee"
                    placeholder="Name of the Employee"
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="empName"
              />
              {errors.empName && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <SelectDropdown
                    data={itemsStatus}
                    onSelect={onChange}
                    defaultButtonText="Select Employee Status"
                    buttonStyle={styles.DropDownPicker}
                    search={true}
                    renderDropdownIcon={() => (
                      <AntDesign name="down" size={16} color="black" />
                    )}
                    buttonTextStyle={styles.dropDownText}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
                name="empStatus"
              />
              {errors.status && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Enter GPF / CPS / PPO No"
                    placeholder="Enter GPF / CPS / PPO No"
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="gpfcpd"
              />
              {errors.gpfcpsNo && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <SelectDropdown
                    data={itemsDepartment}
                    onSelect={onChange}
                    defaultButtonText="Select Department"
                    buttonStyle={styles.DropDownPicker}
                    search={true}
                    renderDropdownIcon={() => (
                      <AntDesign name="down" size={16} color="black" />
                    )}
                    buttonTextStyle={styles.dropDownText}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
                name="policePersonnel"
              />
              {errors.policePersonnel && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <SelectDropdown
                    data={itemsRank}
                    onSelect={onChange}
                    defaultButtonText="Select Rank"
                    buttonStyle={styles.DropDownPicker}
                    search={true}
                    renderDropdownIcon={() => (
                      <AntDesign name="down" size={16} color="black" />
                    )}
                    buttonTextStyle={styles.dropDownText}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
                name="rand"
              />
              {errors.rand && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Police Grade Number"
                    placeholder="Police Grade Number"
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="gno"
              />
              {errors.gno && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Unit Name"
                    placeholder="Unit Name"
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="unitName"
              />
              {errors.unitName && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <SelectDropdown
                    data={itemsCity}
                    onSelect={onChange}
                    defaultButtonText="Select City / District"
                    buttonStyle={styles.DropDownPicker}
                    search={true}
                    renderDropdownIcon={() => (
                      <AntDesign name="down" size={16} color="black" />
                    )}
                    buttonTextStyle={styles.dropDownText}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
                name="District"
              />
              {errors.District && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Date Of Birth"
                    placeholder="Date Of Birth"
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="dob"
              />
              {errors.dob && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Date Of Enlistment"
                    placeholder="Date Of Enlistment"
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="doe"
              />
              {errors.doe && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <SelectDropdown
                    data={itemsGender}
                    onSelect={onChange}
                    defaultButtonText="Select Gender"
                    buttonStyle={styles.DropDownPicker}
                    search={true}
                    renderDropdownIcon={() => (
                      <AntDesign name="down" size={16} color="black" />
                    )}
                    buttonTextStyle={styles.dropDownText}
                  />
                )}
                name="gender"
              />
              {errors.gender && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Mobile No"
                    placeholder="Mobile No"
                    keyboardType="numeric"
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
                    label="Name of the Family Member with Relation"
                    placeholder="Name of the Family Member with Relation"
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="familyMember"
              />
              {errors.realation && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="User Name"
                    placeholder="User Name"
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
                    label="Password"
                    placeholder="Password"
                    secureTextEntry
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
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    secureTextEntry
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="conformpass"
              />
              {errors.conformpass && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

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
                  Login
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default Register;

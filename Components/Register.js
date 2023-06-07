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

function Register({ navigation }) {
  const [open, setOpen] = useState({
    status: false,
    gender: false,
    wards: false,
    department: false,
    rank: false,
    city: false,
    relation: false,
  });
  const [formValue, setFormValue] = useState({
    status: null,
    gender: null,
    wards: null,
    relation: null,
    department: null,
    rank: null,
    city: null,
    empName: null,
    gpfcpsNo: null,
    gradNumber: null,
    unitName: null,
    doe: null,
    Enlistment: null,
    mobileNo: null,
    userName: null,
    password: null,
    confirmPassword: null,
  });
  console.log(formValue, "formValueformValue");
  const itemsStatus = ["Serving", "Retired", "Deceased"];
  // const [itemsStatus, setItemsStatus] = useState([
  //   { label: "Serving", value: "Serving" },
  //   { label: "Retired", value: "Retired" },
  //   { label: "Deceased", value: "Deceased" },
  // ]);

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

  const handleDropDownOpen = (name, value) => {
    setOpen((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDropDownValue = (name, value) => {
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://nodebackend.kavalarnalantn.in:5000/user_Register/register",
        {
          method: "POST",
          data: formValue,
        }
      );
      const jsonData = await response.json();
      console.log(JSON.stringify(jsonData.data), "resssssssssss");
      navigation.navigate("Login");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('https://nodebackend.kavalarnalantn.in:5000/job_fair/getjobFair'); // Replace with your API endpoint
  //     console.log(response.data, "dadadfaasdf"); // Process the response data
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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
              <TextInput
                label="Name of the Employee"
                placeholder="Name of the Employee"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
                onChangeText={(value) => handleDropDownValue("empName", value)}
              />
              <SelectDropdown
                data={itemsStatus}
                onSelect={(selectedItem, index) => {
                  handleDropDownValue("status", selectedItem);
                }}
                defaultButtonText="Select Employee Status"
                buttonStyle={styles.DropDownPicker}
                search={true}
                renderDropdownIcon={() => (
                  <AntDesign name="down" size={16} color="black" />
                )}
                buttonTextStyle={styles.dropDownText}
              />
              <TextInput
                label="Enter GPF / CPS / PPO No"
                placeholder="Enter GPF / CPS / PPO No"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
                onChangeText={(value) => handleDropDownValue("gpfcpsNo", value)}
              />
              <SelectDropdown
                data={itemsDepartment}
                onSelect={(selectedItem, index) => {
                  handleDropDownValue("department", selectedItem);
                }}
                defaultButtonText="Select Department"
                buttonStyle={styles.DropDownPicker}
                search={true}
                renderDropdownIcon={() => (
                  <AntDesign name="down" size={16} color="black" />
                )}
                buttonTextStyle={styles.dropDownText}
              />
              <SelectDropdown
                data={itemsRank}
                onSelect={(selectedItem, index) => {
                  handleDropDownValue("rank", selectedItem);
                }}
                defaultButtonText="Select Rank"
                buttonStyle={styles.DropDownPicker}
                search={true}
                renderDropdownIcon={() => (
                  <AntDesign name="down" size={16} color="black" />
                )}
                buttonTextStyle={styles.dropDownText}
              />
              <TextInput
                label="Police Grade Number"
                placeholder="Police Grade Number"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
                onChangeText={(value) =>
                  handleDropDownValue("gradNumber", value)
                }
              />
              <TextInput
                label="Unit Name"
                placeholder="Unit Name"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
                onChangeText={(value) => handleDropDownValue("unitName", value)}
              />
              <SelectDropdown
                data={itemsCity}
                onSelect={(selectedItem, index) => {
                  handleDropDownValue("city", selectedItem);
                }}
                defaultButtonText="Select City / District"
                buttonStyle={styles.DropDownPicker}
                search={true}
                renderDropdownIcon={() => (
                  <AntDesign name="down" size={16} color="black" />
                )}
                buttonTextStyle={styles.dropDownText}
              />
              <TextInput
                label="Date Of Birth"
                placeholder="Date Of Birth"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
                onChangeText={(value) => handleDropDownValue("dob", value)}
              />
              <TextInput
                label="Date Of Enlistment"
                placeholder="Date Of Enlistment"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
                onChangeText={(value) => handleDropDownValue("doe", value)}
              />

              <SelectDropdown
                data={itemsGender}
                onSelect={(selectedItem, index) => {
                  handleDropDownValue("gender", selectedItem);
                }}
                defaultButtonText="Select Gender"
                buttonStyle={styles.DropDownPicker}
                search={true}
                renderDropdownIcon={() => (
                  <AntDesign name="down" size={16} color="black" />
                )}
                buttonTextStyle={styles.dropDownText}
              />
              <TextInput
                label="Mobile No"
                placeholder="Mobile No"
                keyboardType="numeric"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
                onChangeText={(value) => handleDropDownValue("mobileNo", value)}
              />
              <SelectDropdown
                data={itemsWards}
                onSelect={(selectedItem, index) => {
                  handleDropDownValue("wards", selectedItem);
                }}
                defaultButtonText="Select Wards / Spouse of"
                buttonStyle={styles.DropDownPicker}
                search={true}
                renderDropdownIcon={() => (
                  <AntDesign name="down" size={16} color="black" />
                )}
                buttonTextStyle={styles.dropDownText}
              />
              <TextInput
                label="Name of the Family Member with Relation"
                placeholder="Name of the Family Member with Relation"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
                onChangeText={(value) =>
                  handleDropDownValue("realation", value)
                }
              />
              <SelectDropdown
                data={itemsRelation}
                onSelect={(selectedItem, index) => {
                  handleDropDownValue("relation", selectedItem);
                }}
                defaultButtonText="Select Relation"
                buttonStyle={styles.DropDownPicker}
                search={true}
                renderDropdownIcon={() => (
                  <AntDesign name="down" size={16} color="black" />
                )}
                buttonTextStyle={styles.dropDownText}
              />
              <TextInput
                label="User Name"
                placeholder="User Name"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
                onChangeText={(value) => handleDropDownValue("userName", value)}
              />
              <TextInput
                label="Password"
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
                onChangeText={(value) => handleDropDownValue("password", value)}
              />
              <TextInput
                label="Confirm Password"
                placeholder="Confirm Password"
                secureTextEntry
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
                onChangeText={(value) =>
                  handleDropDownValue("confirmPassword", value)
                }
              />
              <View style={styles.center}>
                <Pressable style={styles.button} onPress={() => handleSubmit()}>
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

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
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";

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
  const [itemsStatus, setItemsStatus] = useState([
    { label: "Serving", value: "Serving" },
    { label: "Retired", value: "Retired" },
    { label: "Deceased", value: "Deceased" },
  ]);

  const [itemsGender, setItemsGender] = useState([
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Transgender", value: "Transgender" },
  ]);

  const [itemsWards, setItemsWards] = useState([
    { label: "Police Personnel", value: "Police Personnel" },
    { label: "Ministerial Staff", value: "Ministerial Staff" },
    { label: "Fire & Rescue Services", value: "Fire & Rescue Services" },
    {
      label: "Prison & Correctional Services",
      value: "Prison & Correctional Services",
    },
  ]);

  const [itemsRelation, setItemsRelation] = useState([
    { label: "Brother", value: "Brother" },
    { label: "Sister", value: "Sister" },
    { label: "Spouse", value: "Spouse" },
    { label: "Son", value: "Son" },
    { label: "Daughter", value: "Daughter" },
  ]);

  const [itemsDepartment, setItemsDepartment] = useState([
    { label: "Police Personnel", value: "Police Personnel" },
    { label: "Ministerial Staff", value: "Ministerial Staff" },
    {
      label: "Fire &amp; Rescue Services",
      value: "Fire &amp; Rescue Services",
    },
    {
      label: "Prison &amp; Correctional Services",
      value: "Prison &amp; Correctional Services",
    },
    { label: "Others", value: "Others" },
  ]);
  const [itemsRank, setItemsRank] = useState([
    {
      label: "Additional Director General of Police",
      value: "Additional Director General of Police",
    },
    {
      label: "Additional Superintendent of Police",
      value: "Additional Superintendent of Police",
    },
    { label: "Administrative Officer", value: "Administrative Officer" },
    { label: "Assistant", value: "Assistant" },
    { label: "Assistant Commandant", value: "Assistant Commandant" },
    { label: "Assistant Director", value: "Assistant Director" },
    { label: "Assistant Manager", value: "Assistant Manager" },
    { label: "Automobile Engineer", value: "Automobile Engineer" },
    { label: "Band Master", value: "Band Master" },
    { label: "Barber", value: "Barber" },
    { label: "Batteryman", value: "Batteryman" },
    { label: "Binder", value: "Binder" },
    { label: "Blacksmith", value: "Blacksmith" },
    { label: "Chargemen", value: "Chargemen" },
    { label: "Chief Manager", value: "Chief Manager" },
    { label: "Chief Reporter", value: "Chief Reporter" },
    {
      label: "Chief Administrative Officer",
      value: "Chief Administrative Officer",
    },
    { label: "Cleaner", value: "Cleaner" },
    { label: "Commandant", value: "Commandant" },
    { label: "Cook", value: "Cook" },
    { label: "Data Entry Assistant", value: "Data Entry Assistant" },
    { label: "Data Entry Operator", value: "Deceased" },
    { label: "Deputy Commandant", value: "Deputy Commandant" },
    { label: "Deputy Director", value: "Deputy Director" },
    { label: "Deputy Inspector General of Police", value: "Deceased" },
    {
      label: "Deputy Superintendent of Police",
      value: "Deputy Superintendent of Police",
    },
    { label: "Dhoby", value: "Dhoby" },
    {
      label: "Director General of Police",
      value: "Director General of Police",
    },
    { label: "Dog Boy", value: "Dog Boy" },
    { label: "Duffadar", value: "Duffadar" },
    { label: "Duffadar", value: "Duffadar" },
    {
      label: "Electrician / Fitter / Foreman / Hammerman / Helper",
      value: "Electrician / Fitter / Foreman / Hammerman / Helper",
    },
    { label: "Gardener", value: "Gardener" },
    { label: "Grade I PC", value: "Grade I PC" },
    { label: "Grade II PC", value: "Grade II PC" },
  ]);
  const [itemsCity, setItemsCity] = useState([
    { label: "Ariyalur", value: "Ariyalur" },
    { label: "Avadi Commissionerate", value: "Avadi Commissionerate" },
    { label: "Chengalpattu", value: "Chengalpattu" },
    { label: "Chennai", value: "Chennai" },
    { label: "Coimbatore", value: "Coimbatore" },
    { label: "Coimbatore City", value: "Coimbatore City" },
    { label: "Cuddalore", value: "Cuddalore" },
    { label: "Dharmapuri", value: "Dharmapuri" },
    { label: "Dindigul", value: "Dindigul" },
    { label: "Erode", value: "Erode" },
    { label: "Kallakurichi", value: "Kallakurichi" },
    { label: "Kancheepuram", value: "Kancheepuram" },
    { label: "Kanniyakumari", value: "Kanniyakumari" },
    { label: "Karur", value: "Karur" },
    { label: "Krishnagiri", value: "Krishnagiri" },
    { label: "Madurai", value: "Madurai" },
    { label: "Madurai City", value: "Madurai City" },
    { label: "Mayiladuthurai", value: "Mayiladuthurai" },
    { label: "Nagapattinam", value: "Nagapattinam" },
    { label: "Namakkal", value: "Namakkal" },
    { label: "The Nilgiris", value: "The Nilgiris" },
    { label: "Perambalur", value: "Pudukkottai" },
    { label: "Ramanathapuram", value: "Ramanathapuram" },
    { label: "Ranipet", value: "Ranipet" },
    { label: "Salem", value: "Salem" },
    { label: "Salem city", value: "Salem city" },
    { label: "Sivagangai", value: "Sivagangai" },
    { label: "Tambaram comimissionerate", value: "Tambaram comimissionerate" },
    { label: "Thanjavur", value: "Thanjavur" },
    { label: "Theni", value: "Theni" },
    { label: "Tirupattur", value: "Tirupattur" },
    { label: "Thoothukudi", value: "Thoothukudi" },
    { label: "Tirunelveli", value: "Tirunelveli" },
    { label: "Tirunelveli City", value: "Tirunelveli City" },
    { label: "Tiruppur", value: "Tiruppur" },
    { label: "Tiruppur City", value: "Tiruppur City" },
    { label: "Thiruvallur", value: "Thiruvallur" },
    { label: "Tiruvannamalai", value: "Tiruvannamalai" },
    { label: "Thiruvarur", value: "Thiruvarur" },
    { label: "Tiruchirappalli", value: "Tiruchirappalli" },
    { label: "Tiruchirappalli City", value: "Tiruchirappalli City" },
    { label: "Vellore", value: "Vellore" },
    { label: "Viluppuram", value: "Viluppuram" },
    { label: "Virudhunagar", value: "Virudhunagar" },
  ]);

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
              <DropDownPicker
                open={open.status}
                value={formValue.status}
                items={itemsStatus}
                setOpen={(value) => handleDropDownOpen("status", value)}
                onSelectItem={(value) =>
                  handleDropDownValue("status", value.value)
                }
                setItems={setItemsStatus}
                theme="LIGHT"
                multiple={false}
                style={styles.DropDownPicker}
                placeholder="Select Status"
              />
              <TextInput
                label="Enter GPF / CPS / PPO No"
                placeholder="Enter GPF / CPS / PPO No"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
                onChangeText={(value) => handleDropDownValue("gpfcpsNo", value)}
              />
              <DropDownPicker
                open={open.department}
                value={formValue.department}
                items={itemsDepartment}
                setOpen={(value) => handleDropDownOpen("department", value)}
                onSelectItem={(value) =>
                  handleDropDownValue("department", value.value)
                }
                setItems={setItemsDepartment}
                theme="LIGHT"
                multiple={false}
                style={styles.DropDownPicker}
                placeholder="Select Department"
              />
              <DropDownPicker
                open={open.rank}
                value={formValue.rank}
                items={itemsRank}
                setOpen={(value) => handleDropDownOpen("rank", value)}
                onSelectItem={(value) =>
                  handleDropDownValue("rank", value.value)
                }
                setItems={setItemsRank}
                theme="LIGHT"
                multiple={false}
                style={styles.DropDownPicker}
                placeholder="Select Rank"
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

              <DropDownPicker
                open={open.city}
                value={formValue.city}
                items={itemsCity}
                setOpen={(value) => handleDropDownOpen("city", value)}
                onSelectItem={(value) =>
                  handleDropDownValue("city", value.value)
                }
                setItems={setItemsCity}
                theme="LIGHT"
                multiple={false}
                style={styles.DropDownPicker}
                placeholder="Select City / District"
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
              <DropDownPicker
                open={open.gender}
                value={formValue.gender}
                items={itemsGender}
                setOpen={(value) => handleDropDownOpen("gender", value)}
                onSelectItem={(value) =>
                  handleDropDownValue("gender", value.value)
                }
                setItems={setItemsGender}
                theme="LIGHT"
                multiple={false}
                style={styles.DropDownPicker}
                placeholder="SelectGender"
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
              <DropDownPicker
                open={open.wards}
                value={formValue.wards}
                items={itemsWards}
                setOpen={(value) => handleDropDownOpen("wards", value)}
                onSelectItem={(value) =>
                  handleDropDownValue("wards", value.value)
                }
                setItems={setItemsWards}
                theme="LIGHT"
                multiple={false}
                style={styles.DropDownPicker}
                placeholder="Select Wards / Spouse of"
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
              <DropDownPicker
                open={open.relation}
                value={formValue.relation}
                items={itemsRelation}
                setOpen={(value) => handleDropDownOpen("relation", value)}
                onSelectItem={(value) =>
                  handleDropDownValue("relation", value.value)
                }
                setItems={setItemsRelation}
                theme="LIGHT"
                multiple={false}
                style={styles.DropDownPicker}
                placeholder="Select Relation"
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

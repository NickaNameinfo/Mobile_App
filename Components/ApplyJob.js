import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { formStyles } from ".././assets/style/fromStyle";
import { styles } from ".././assets/style/style";
import { useForm, Controller } from "react-hook-form";

function ApplyJob({ navigation }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState(["", "", "", ""]);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      empName: '',
      empNameInit: '',
      relEmp: '',
      empStatus: '',
      policePersonnel: '', //missing
      ...(!itemsId && {
        spouseCertificate: '',
      }),
      dob: '',
      ranks: '', //missing
      gpfcpsNumber: '',
      // ploliceGradeNnumber: ploliceGradeNnumber,
      stationUnit: '',
      workingDistrict: '',
      lastDistrict: '',
      policeMobilePhone: '',
      CandidateNname: '',
      CandidateNnameInit: '',
      gender: '',
      dobDate: '',
      email1: '',
      phone1: '',
      address1: '',
      address2: '',
      address3: '',
      CityDistrict: '',
      state1: '',
      pincode: '',
      aadharNumber: '',
      myCheckboxes: '',
      perference1: '',
      preference2: preference2,
      preference3: preference3,
      otherPreferred: otherPreferred,
      workPreference1: workPreference1,
      workPreference2: workPreference2,
      workPreference3: workPreference3,
      skills: skills,
      ...(!itemsId && {
        candPhoto: file2,
      }),
      ...(!itemsId && {
        resume: file3,
      }),
      Qualification: Qualification,
      studied: studied,
      Board: Board,
      pass10: `${thmon10}/${thyear10}`,
      Percentage: Percentage,
      Board12: Board12,
      Passing: `${thmon12}/${thyear12}`,
      Percentage12: Percentage12,
      course: course,
      Passingiti: `${itimon}/${itiyear}`,
      Percentageiti: Percentageiti,
      courseDip: courseDip,
      PassingDip: `${dipmon}/${dipyear}`,
      PercentageDip: PercentageDip,
      GraduationDg: GraduationDg,
      Institute: Institute,
      Subject: Subject,
      Passinghigi: `${undmon}/${undyear}`,
      Percentagehigi: Percentagehigi,
      Degreename: Degreename,
      University: University,
      MajorSubject: MajorSubject,
      Percentageunder: Percentageunder,
      passedYear: `${pgmon}/${pgyear}`,
      Universityphd: Universityphd,
      Subjectphd: Subjectphd,
      Passingphd: `${phdmon}/${phdyear}`,
      Percentagephd: Percentagephd,
      BoardBelow: BoardBelow,
      below10thpass: `${belowmon}/${belowyear}`,
      belowPercentage: belowPercentage,
      Pursuing: Pursuing,
      UniversityOther: UniversityOther,
      SubjectOther: SubjectOther,
      detailsdeg: detailsdeg,
      Employment: Employment,
      experience: experience,
      CompanyName: CompanyName,
      Designation: Designation,
      Workingplz: Workingplz,
      fromDate: fromDate,
      toDate: toDate,
      companyDet: companyDet,
      userName: SonName,
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
      <View style={styles.center}>
        <Image style={styles.image} source={require("../assets/logo.png")} />
        <Text style={styles.titleText}>Job Apply</Text>
      </View>
      <View style={formStyles.alignItemCenter}>
        <View style={formStyles.steperWidth}>
          <View style={formStyles.alignItemCenter}>
            <View style={formStyles.steperBorder} />
          </View>
          <View style={formStyles.steperCountList}>
            {steps.map((placeholder, i) => (
              <View key={i} style={formStyles.steperlistWidth}>
                {i > currentStep && i != currentStep /* Not selected */ && (
                  <View style={formStyles.steperunChecked}>
                    <Text style={{ fontSize: 15, color: "#ee5e30" }}>
                      {i + 1}
                    </Text>
                  </View>
                )}
                {i < currentStep /* Checked */ && (
                  <View style={formStyles.stepeChecked}>
                    <Ionicons name="md-checkmark" size={20} color="#fff" />
                  </View>
                )}
                {i == currentStep /* Selected */ && (
                  <View style={formStyles.stepSelected}>
                    <Text style={{ fontSize: 13, color: "#ffffff" }}>
                      {i + 1}
                    </Text>
                  </View>
                )}
                <Text style={{ fontSize: 12 }}>{placeholder}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.card}>
          {currentStep == 0 && (
            <View>
              <Text style={styles.cardHeader}>Personal Details</Text>

              <TextInput
                placeholder="Employee Name"
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Relationship to the Employee"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Status of Employee "
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Wards / Spouse of "
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Wards/Spouse Certificate"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Date Of Birth "
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Rank "
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="GPF/CPS/PPO Number *
                "
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Police Station / Unit *
                "
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Mobile Number *
                "
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Candidate's Name (Initial at end) *
                "
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Gender "
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Date Of Birth *
                "
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Email"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Mobile Number *"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Mobile Number *"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Address Line 2 *
                "
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Address Line 3 *
                "
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="City/District *
                "
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="State "
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Pincode "
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Aadhar Number *
                "
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
            </View>
          )}
          {currentStep == 1 && (
            <View>
              <Text style={styles.cardHeader}>Qualification Details</Text>

              <TextInput
                placeholder="Frist Name"
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Last Name"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Email Id"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Phone Number"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
            </View>
          )}
          {currentStep == 2 && (
            <View>
              <Text style={styles.cardHeader}>Preference Details</Text>

              <TextInput
                placeholder="Frist Name"
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Last Name"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Email Id"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Phone Number"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
            </View>
          )}
          {currentStep == 3 && (
            <View>
              <Text style={styles.cardHeader}>Professional Experience</Text>

              <TextInput
                placeholder="Frist Name"
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Last Name"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Email Id"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Phone Number"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                mode="outlined"
              />
            </View>
          )}
          <View style={formStyles.flexRow}>
            {currentStep > 0 ? (
              <TouchableOpacity
                style={formStyles.prevStep}
                onPress={() => {
                  if (currentStep > 0) {
                    setCurrentStep(currentStep - 1);
                  }
                }}
              >
                <Text style={formStyles.buttonText}>Back #</Text>
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity
              style={formStyles.signOut}
              onPress={() => navigation.navigate("HomePage")}
            >
              <Text style={formStyles.buttonText}>SingOut #</Text>
            </TouchableOpacity>
            {currentStep + 1 < steps.length /* add other conditions here */ && (
              <TouchableOpacity
                style={formStyles.nextStep}
                onPress={() => {
                  if (currentStep + 1 < steps.length) {
                    setCurrentStep(currentStep + 1);
                  }
                }}
              >
                <Text style={formStyles.buttonText}>Next</Text>
              </TouchableOpacity>
            )}
            {currentStep + 1 ==
              steps.length /* add other conditions here */ && (
              <TouchableOpacity
                style={formStyles.nextStep}
                onPress={() => navigation.navigate("ViewJob")}
              >
                <Text style={formStyles.buttonText}>Finish #</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default ApplyJob;

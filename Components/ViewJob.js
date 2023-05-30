import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { formStyles } from ".././assets/style/fromStyle";
import { styles } from ".././assets/style/style";

const ViewJob = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState(["", "", "", ""]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#212761",
      }}
    >
      <View style={styles.center}>
        <Image
          style={styles.image}
          source={require("../assets/logo.png")}
        />
        <Text style={styles.titleText}>Applied Job</Text>
      </View>
      <View style={formStyles.alignItemCenter}>
        <View style={formStyles.steperWidth}>
          <View style={formStyles.alignItemCenter}>
            <View style={formStyles.steperBorder} />
          </View>
          <View style={formStyles.steperCountList}>
            {steps.map((label, i) => (
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
                <Text style={{ fontSize: 12 }}>{label}</Text>
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

              <Text style={styles.Details}>Employee Name (Initial at end)</Text>
              <Text style={styles.DetailsData}>test</Text>

              <Text style={styles.Details}>Relationship to the Employee</Text>
              <Text style={styles.DetailsData}>Brother</Text>

              <Text style={styles.Details}>Wards / Spouse of</Text>
              <Text style={styles.DetailsData}>test</Text>

              <Text style={styles.Details}>Wards/Spouse Certificate</Text>
              <Text style={styles.DetailsData}>test</Text>

              <Text style={styles.Details}>Date Of Birth</Text>
              <Text style={styles.DetailsData}>test</Text>

              <Text style={styles.Details}>Rank</Text>
              <Text style={styles.DetailsData}>test</Text>

              <Text style={styles.Details}>GPF/CPS/PPO Number</Text>
              <Text style={styles.DetailsData}>test</Text>

              <Text style={styles.Details}>GPF/CPS/PPO Number</Text>
              <Text style={styles.DetailsData}>test</Text>

              <Text style={styles.Details}>Mobile Number</Text>
              <Text style={styles.DetailsData}>test</Text>
            </View>
          )}
          {currentStep == 1 && (
            <View>
              <Text style={styles.cardHeader}>Qualification Details</Text>
              <Text style={styles.Details}>placeholder</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>placeholder</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>placeholder</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>placeholder</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>placeholder</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>placeholder</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>placeholder</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>placeholder</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>placeholder</Text>
              <Text style={styles.DetailsData}>Data</Text>
            </View>
          )}
          {currentStep == 2 && (
            <View>
              <Text style={styles.cardHeader}>Preference Details</Text>
              <Text style={styles.Details}>placeholder</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>placeholder</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>placeholder</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>placeholder</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>placeholder</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>placeholder</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>placeholder</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>placeholder</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>placeholder</Text>
              <Text style={styles.DetailsData}>Data</Text>
            </View>
          )}
          {currentStep == 3 && (
            <View>
              <Text style={styles.cardHeader}>
                Employee Name (Initial at end)
              </Text>
              <Text style={styles.Details}>Relationship to the Employee</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>Relationship to the Employee</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>Wards / Spouse of</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>Wards/Spouse Certificate</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>Date Of Birth</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>Rank</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>GPF/CPS/PPO Number</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>GPF/CPS/PPO Number</Text>
              <Text style={styles.DetailsData}>Data</Text>

              <Text style={styles.Details}>Mobile Number</Text>
              <Text style={styles.DetailsData}>Data</Text>
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
              style={formStyles.nextStep}
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
                onPress={() => navigation.navigate("ApplyJob")}
              >
                <Text style={formStyles.buttonText}>Edit #</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewJob;

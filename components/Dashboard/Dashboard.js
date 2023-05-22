import React from "react";
import { grid } from "../../assets/style/gridStyle";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { Col, Row } from "../../assets/style/rowAndColumn";
import { styles } from "../../assets/style/style";

function Dashboard({ navigation }) {
  return (
    <View style={[styles.flex]}>
      <ImageBackground
        // source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.backImage}
      >
        <View style={grid.app}>
          <Row>
            <Col numRows={2}>
              <TouchableOpacity
                onPress={() => navigation.navigate("EmployementExForm")}
              >
                <Card.Content style={styles.dashBoradCard}>
                  <View>
                    <Text variant="displayLarge" style={styles.cardText}>
                      Employment Exchange
                    </Text>
                  </View>
                </Card.Content>
              </TouchableOpacity>
            </Col>
            <Col numRows={2}>
              <TouchableOpacity
                onPress={() => navigation.navigate("EmploymentEx")}
              >
                <Card.Content style={styles.dashBoradCard}>
                  <View>
                    <Text
                      variant="displayLarge"
                      style={styles.cardText}
                      onPress={() => navigation.navigate("Dashboard")}
                    >
                      Tamilnadu Police Benevolent Fund
                    </Text>
                  </View>
                </Card.Content>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row>
            <Col numRows={2}>
              <TouchableOpacity
                onPress={() => navigation.navigate("EmploymentEx")}
              >
                <Card.Content style={styles.dashBoradCard}>
                  <View>
                    <Text
                      variant="displayLarge"
                      style={styles.cardText}
                      onPress={() => navigation.navigate("Dashboard")}
                    >
                      New Health Insurance Scheme
                    </Text>
                  </View>
                </Card.Content>
              </TouchableOpacity>
            </Col>
            <Col numRows={2}>
              <TouchableOpacity
                onPress={() => navigation.navigate("EmploymentEx")}
              >
                <Card.Content style={styles.dashBoradCard}>
                  <View>
                    <Text
                      variant="displayLarge"
                      style={styles.cardText}
                      onPress={() => navigation.navigate("Dashboard")}
                    >
                      Educational Scholarship
                    </Text>
                  </View>
                </Card.Content>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row>
            <Col numRows={2}>
              <TouchableOpacity
                onPress={() => navigation.navigate("EmploymentEx")}
              >
                <Card.Content style={styles.dashBoradCard}>
                  <View>
                    <Text
                      variant="displayLarge"
                      style={styles.cardText}
                      onPress={() => navigation.navigate("Dashboard")}
                    >
                      Compassinate Ground Appointment
                    </Text>
                  </View>
                </Card.Content>
              </TouchableOpacity>
            </Col>
            <Col numRows={2}>
              <TouchableOpacity
                onPress={() => navigation.navigate("EmploymentEx")}
              >
                <Card.Content style={styles.dashBoradCard}>
                  <View>
                    <Text
                      variant="displayLarge"
                      style={styles.cardText}
                      onPress={() => navigation.navigate("Dashboard")}
                    >
                      Tamilnadu Police Welfare Canteen
                    </Text>
                  </View>
                </Card.Content>
              </TouchableOpacity>
            </Col>
          </Row>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Dashboard;

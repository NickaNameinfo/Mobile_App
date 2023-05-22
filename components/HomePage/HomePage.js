import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import { grid } from "../../assets/style/gridStyle";
import { styles } from "../../assets/style/style";
import { Col, Row } from "../../assets/style/rowAndColumn";

function HomePage({ navigation }) {
  return (
    <View style={styles.flex}>
      <ImageBackground
        source={{
          uri: "https://ibss.co.in/Tamilnadupolice4/images/logos/logo.png",
        }}
        resizeMode="contain"
        style={styles.backImage}
      >
        <View style={grid.app}>
          <Row>
            <Col numRows={1}>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Card.Content style={styles.dashBoradCard}>
                  <View>
                    <Text variant="displayLarge" style={styles.cardText}>
                      REGISTER / LOGIN
                    </Text>
                  </View>
                </Card.Content>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row>
            <Col numRows={2}>
              <TouchableOpacity
                onPress={() => navigation.navigate("EmploymentExRegister")}
              >
                <Card.Content style={styles.dashBoradCard}>
                  <View>
                    <Text variant="displayLarge" style={styles.cardText}>
                      CANDIDATE LOGIN
                    </Text>
                  </View>
                </Card.Content>
              </TouchableOpacity>
            </Col>
            <Col numRows={2}>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Card.Content style={styles.dashBoradCard}>
                  <View>
                    <Text variant="displayLarge" style={styles.cardText}>
                      COMPANY LOGIN
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
export default HomePage;

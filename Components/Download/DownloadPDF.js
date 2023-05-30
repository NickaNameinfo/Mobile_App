import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { styles } from "../../assets/style/style";
import Footer from "../Footer";

function DownloadPDF({ route }) {
  const { link } = route.params;

  return (
    <View>
      <ScrollView>
        <View style={styles.homeStyles}>
          <View style={styles.HomeHeader}>
            <View style={styles.homeTitle}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "#212761" }}
              >
                Go To Official Site
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.pdfOptions}>
              {link.map((items) => {
                return (
                  <TouchableOpacity onPress={() => Linking.openURL(items.link)}>
                    <View style={styles.dashBoradCard}>
                      <View>
                        <Text style={styles.cardText}>{items.name}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
export default DownloadPDF;

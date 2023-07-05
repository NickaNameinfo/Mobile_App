import React, { useEffect, useState } from "react";
import { View, Button, Platform, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = ({ onGetDateValue, onOpenDatePicker }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  useEffect(() => {
    if (onOpenDatePicker) {
      setShowPicker(true);
    }
  }, [onOpenDatePicker]);

  useEffect(() => {
    onGetDateValue(selectedDate);
  }, [selectedDate]);

  const closePicker = () => {
    setShowPicker(false);
  };

  const handleDateChange = (event, selected) => {
    if (Platform.OS === "android") {
      closePicker(); // Close the picker immediately on Android
    }

    if (selected) {
      setSelectedDate(selected);
    }
  };

  return (
    <View style={styles.container}>
      {showPicker && onOpenDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DatePicker;

import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Dropdown } from 'react-native-element-dropdown';

const LandingPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Dummy data for doctors
  const doctors = [
    { id: 1, name: 'Dr. John Doe', specialization: 'Cardiologist' },
    { id: 2, name: 'Dr. Jane Smith', specialization: 'Dermatologist' },
    { id: 3, name: 'Dr. Alice Johnson', specialization: 'Pediatrician' },
  ];

  // Dummy data for dropdown
  const dropdownData = [
    { label: 'General Checkup', value: 'general' },
    { label: 'Dental Appointment', value: 'dental' },
    { label: 'Eye Checkup', value: 'eye' },
    { label: 'Emergency', value: 'emergency' },
  ];

  // Render carousel item
  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Text style={styles.doctorName}>{item.name}</Text>
      <Text style={styles.doctorSpecialization}>{item.specialization}</Text>
      <Text style={styles.availableText}>Available for Appointment</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <Text style={styles.header}>Book an Appointment</Text>

      {/* Swipable Carousel for Doctors */}
      <View style={styles.carouselContainer}>
        <Carousel
          data={doctors}
          renderItem={renderCarouselItem}
          sliderWidth={300}
          itemWidth={250}
          layout={'default'}
        />
      </View>

      {/* Dropdown for Appointment Options */}
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={dropdownData}
        labelField="label"
        valueField="value"
        placeholder="Select Appointment Type"
        value={selectedOption}
        onChange={(item) => setSelectedOption(item.value)}
      />

      {/* Additional Content */}
      <ScrollView style={styles.additionalContent}>
        <Text style={styles.sectionTitle}>Why Choose Us?</Text>
        <Text style={styles.sectionText}>
          We provide the best healthcare services with experienced doctors and state-of-the-art facilities.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  carouselContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  carouselItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  doctorSpecialization: {
    fontSize: 16,
    color: '#555',
  },
  availableText: {
    fontSize: 14,
    color: 'green',
    marginTop: 10,
  },
  dropdown: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#555',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  additionalContent: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#555',
  },
});

export default LandingPage;
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { formStyles } from '../../../assets/style/fromStyle';
import { styles } from '../../../assets/style/style';
import { Card, TextInput, Button } from 'react-native-paper';

const EmploymentView = ({ navigation }) => {
    const [currentStep, setCurrentStep] = useState(0)
    const [steps, setSteps] = useState(['', '', '', ''])
    return (
        <View style={formStyles.flexColumn}>
            <ImageBackground source={require('../../../assets/background.png')} resizeMode="cover" style={styles.backImage}>
                <View style={formStyles.alignItemCenter}>
                    <View style={formStyles.steperWidth}>
                        <View style={formStyles.alignItemCenter}>
                            <View style={formStyles.steperBorder} />
                        </View>
                        <View style={formStyles.steperCountList}>
                            {steps.map((label, i) =>
                                <View key={i} style={formStyles.steperlistWidth}>
                                    {i > currentStep && i != currentStep && /* Not selected */
                                        <View style={formStyles.steperunChecked}>
                                            <Text style={{ fontSize: 15, color: '#ee5e30' }}>{i + 1}</Text>
                                        </View>
                                    }
                                    {i < currentStep && /* Checked */
                                        <View style={formStyles.stepeChecked}>
                                            <Ionicons name="md-checkmark" size={20} color="#fff" />
                                        </View>
                                    }
                                    {i == currentStep && /* Selected */
                                        <View style={formStyles.stepSelected}>
                                            <Text style={{ fontSize: 13, color: '#ffffff' }}>{i + 1}</Text>
                                        </View>
                                    }
                                    <Text style={{ fontSize: 12 }}>{label}</Text>
                                </View>
                            )}
                        </View>
                    </View>
                </View>

                <View>
                    {currentStep == 0 &&
                        <View>
                            <Card style={styles.Registercard}>
                                <Text style={styles.cardHeader}>Step 1</Text>
                                <ScrollView>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                </ScrollView>
                            </Card>
                        </View>
                    }
                    {currentStep == 1 &&
                        <View>
                            <Card style={styles.Registercard}>
                                <Text style={styles.cardHeader}>Step 2</Text>
                                <ScrollView>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                </ScrollView>
                            </Card>
                        </View>
                    }
                    {currentStep == 2 &&
                        <View>
                            <Card style={styles.Registercard}>
                                <Text style={styles.cardHeader}>Step 2</Text>
                                <ScrollView>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                </ScrollView>
                            </Card>
                        </View>
                    }
                    {currentStep == 3 &&
                        <View>
                            <Card style={styles.Registercard}>
                                <Text style={styles.cardHeader}>Step 2</Text>
                                <ScrollView>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <Text style={styles.Details}>Display Large</Text>
                                        <Text style={styles.DetailsData}>Display Medium</Text>
                                    </Card.Content>
                                </ScrollView>
                            </Card>
                        </View>
                    }
                    <View style={formStyles.flexRow}>
                        {currentStep > 0 ?
                            <TouchableOpacity style={formStyles.prevStep} onPress={() => {
                                if (currentStep > 0) {
                                    setCurrentStep(currentStep - 1);
                                }
                            }}>
                                <Text style={formStyles.buttonText}>Back</Text>
                            </TouchableOpacity>
                            : <Text> </Text>
                        }
                        
                        <TouchableOpacity style={formStyles.nextStep} onPress={() => navigation.navigate('Login')}>
                            <Text style={formStyles.buttonText}>SingOut</Text>
                        </TouchableOpacity>

                        {(currentStep + 1) < steps.length /* add other conditions here */ &&
                            <TouchableOpacity style={formStyles.nextStep} onPress={() => {
                                if ((currentStep + 1) < steps.length) {

                                    setCurrentStep(currentStep + 1);
                                }
                            }}>
                                <Text style={formStyles.buttonText}>Next</Text>
                            </TouchableOpacity>
                        }
                        {(currentStep + 1) == steps.length /* add other conditions here */ &&
                            <TouchableOpacity style={formStyles.nextStep} onPress={() => navigation.navigate('EmploymentExRegister')}>
                                <Text style={formStyles.buttonText}>Edit</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default EmploymentView
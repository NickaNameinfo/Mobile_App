import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { grid } from '../../../assets/style/gridStyle';
import { Col, Row } from '../../../assets/style/rowAndColumn';
import { styles } from '../../../assets/style/style';

function EmploymentEx({ navigation }) {
    return (
        <View style={[styles.flex]}>
            <ImageBackground source={require('../../../assets/background.png')} resizeMode="cover" style={styles.backImage}>
                <View style={grid.app}>
                    <Row>
                        <Col numRows={2}>
                            <TouchableOpacity onPress={() => navigation.navigate('EmploymentExRegister')}>
                                <Card.Content style={styles.dashBoradCard}>
                                    <View>
                                        <Text variant="displayLarge" style={styles.cardText}>Job Fair</Text>
                                    </View>
                                </Card.Content>
                            </TouchableOpacity>
                        </Col>
                        <Col numRows={2}>
                            <TouchableOpacity onPress={() => navigation.navigate('EmploymentExRegister')}>
                                <Card.Content style={styles.dashBoradCard}>
                                    <View>
                                        <Text variant="displayLarge" style={styles.cardText} onPress={() => navigation.navigate('EmploymentExRegister')}>Job opportunity</Text>
                                    </View>
                                </Card.Content>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                    <Row>
                        <Col numRows={2}>
                            <TouchableOpacity onPress={() => navigation.navigate('EmploymentExRegister')}>
                                <Card.Content style={styles.dashBoradCard}>
                                    <View>
                                        <Text variant="displayLarge" style={styles.cardText} onPress={() => navigation.navigate('EmploymentExRegister')}>Skill development</Text>
                                    </View>
                                </Card.Content>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                </View>
            </ImageBackground>
        </View>
    )
}

export default EmploymentEx

import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Button, Icon, ProgressBar, Searchbar } from 'react-native-paper';
import ComBar from '../Components/Bar';
import { useState } from 'react';
import { Card } from '@rneui/themed';

export default function HomeScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [seeMore, setSeeMore] = useState(true);
    return (

        <View style={styles.home} >
            <Searchbar
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', paddingRight: 20 }}>
                <Text style={{ fontSize: 30 }}>Your pet</Text>
                {!seeMore || <Text onPress={() => setSeeMore(!seeMore)} style={{ fontSize: 18 }}>See more</Text>}
                {seeMore || <Text onPress={() => setSeeMore(!seeMore)} style={{ fontSize: 18 }}>Hide</Text>}
            </View>

            {seeMore || <ScrollView>
                <View style={styles.container}>

                    <Card containerStyle={styles.cardContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
                            <View>
                                <Card.Image
                                    style={{ padding: 0, width: 50, height: 50, borderRadius: 50 }}
                                    source={{
                                        uri:
                                            'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                                    }}
                                />
                                <Card.Title style={{ marginBottom: 10 }}>Dog</Card.Title>
                            </View>
                            <View style={{ width: "auto", marginRight: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginBottom: 10 }} >
                                        Heal condition
                                    </Text>
                                    <View style={{ width: "50%", }}>
                                        <ProgressBar style={{ borderRadius: 50, height: 20, backgroundColor: '#D9D9D9' }} progress={0.5} color={"#0d99ff"} />

                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginBottom: 10 }} >
                                        Feeding
                                    </Text>
                                    <View style={{ width: "50%", }}>
                                        <ProgressBar style={{ borderRadius: 50, height: 20, backgroundColor: '#D9D9D9' }} progress={0.5} color={"#0d99ff"} />

                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginBottom: 10 }} >
                                        Playing
                                    </Text>
                                    <View style={{ width: "50%", backgroundColor: "#D9D9D9", borderRadius: 50 }}>
                                        <View style={{ width: "50%", }}>
                                            <ProgressBar style={{ borderRadius: 50, height: 20, backgroundColor: '#D9D9D9' }} progress={0.3} color={"#0d99ff"} />

                                        </View>
                                    </View>
                                </View>


                            </View>
                        </View>
                    </Card>
                    <Card containerStyle={styles.cardContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
                            <View>
                                <Card.Image
                                    style={{ padding: 0, width: 50, height: 50, borderRadius: 50 }}
                                    source={{
                                        uri:
                                            'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                                    }}
                                />
                                <Card.Title style={{ marginBottom: 10 }}>Dog</Card.Title>
                            </View>
                            <View style={{ width: "auto", marginRight: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginBottom: 10 }} >
                                        Heal condition
                                    </Text>
                                    <View style={{ width: "50%", }}>
                                        <ProgressBar style={{ borderRadius: 50, height: 20, backgroundColor: '#D9D9D9' }} progress={0.25} color={"#0d99ff"} />

                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginBottom: 10 }} >
                                        Feeding
                                    </Text>
                                    <View style={{ width: "50%", }}>
                                        <ProgressBar style={{ borderRadius: 50, height: 20, backgroundColor: '#D9D9D9' }} progress={0.25} color={"#0d99ff"} />

                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginBottom: 10 }} >
                                        Playing
                                    </Text>
                                    <View style={{ width: "50%", backgroundColor: "#D9D9D9", borderRadius: 50 }}>
                                        <View style={{ width: "50%", }}>
                                            <ProgressBar style={{ borderRadius: 50, height: 20, backgroundColor: '#D9D9D9' }} progress={0.13} color={"#0d99ff"} />
                                        </View>
                                    </View>
                                </View>


                            </View>
                        </View>
                    </Card>
                    <Card containerStyle={styles.cardContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
                            <View>
                                <Card.Image
                                    style={{ padding: 0, width: 50, height: 50, borderRadius: 50 }}
                                    source={{
                                        uri:
                                            'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                                    }}
                                />
                                <Card.Title style={{ marginBottom: 10 }}>Dog</Card.Title>
                            </View>
                            <View style={{ width: "auto", marginRight: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginBottom: 10 }} >
                                        Heal condition
                                    </Text>
                                    <View style={{ width: "50%", }}>
                                        <ProgressBar style={{ borderRadius: 50, height: 20, backgroundColor: '#D9D9D9' }} progress={0.5} color={"#0d99ff"} />

                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginBottom: 10 }} >
                                        Feeding
                                    </Text>
                                    <View style={{ width: "50%", }}>
                                        <ProgressBar style={{ borderRadius: 50, height: 20, backgroundColor: '#D9D9D9' }} progress={0.5} color={"#0d99ff"} />

                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginBottom: 10 }} >
                                        Playing
                                    </Text>
                                    <View style={{ width: "50%", backgroundColor: "#D9D9D9", borderRadius: 50 }}>
                                        <View style={{ width: "50%", }}>
                                            <ProgressBar style={{ borderRadius: 50, height: 20, backgroundColor: '#D9D9D9' }} progress={0.3} color={"#0d99ff"} />

                                        </View>
                                    </View>
                                </View>


                            </View>
                        </View>
                    </Card>
                    <Card containerStyle={styles.cardContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
                            <View>
                                <Card.Image
                                    style={{ padding: 0, width: 50, height: 50, borderRadius: 50 }}
                                    source={{
                                        uri:
                                            'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                                    }}
                                />
                                <Card.Title style={{ marginBottom: 10 }}>Dog</Card.Title>
                            </View>
                            <View style={{ width: "auto", marginRight: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginBottom: 10 }} >
                                        Heal condition
                                    </Text>
                                    <View style={{ width: "50%", }}>
                                        <ProgressBar style={{ borderRadius: 50, height: 20, backgroundColor: '#D9D9D9' }} progress={0.5} color={"#0d99ff"} />

                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginBottom: 10 }} >
                                        Feeding
                                    </Text>
                                    <View style={{ width: "50%", }}>
                                        <ProgressBar style={{ borderRadius: 50, height: 20, backgroundColor: '#D9D9D9' }} progress={0.5} color={"#0d99ff"} />

                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginBottom: 10 }} >
                                        Playing
                                    </Text>
                                    <View style={{ width: "50%", backgroundColor: "#D9D9D9", borderRadius: 50 }}>
                                        <View style={{ width: "50%", }}>
                                            <ProgressBar style={{ borderRadius: 50, height: 20, backgroundColor: '#D9D9D9' }} progress={0.3} color={"#0d99ff"} />

                                        </View>
                                    </View>
                                </View>


                            </View>
                        </View>
                    </Card>
                    <Card containerStyle={styles.cardContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
                            <View>
                                <Card.Image
                                    style={{ padding: 0, width: 50, height: 50, borderRadius: 50 }}
                                    source={{
                                        uri:
                                            'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                                    }}
                                />
                                <Card.Title style={{ marginBottom: 10 }}>Dog</Card.Title>
                            </View>
                            <View style={{ width: "auto", marginRight: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginBottom: 10 }} >
                                        Heal condition
                                    </Text>
                                    <View style={{ width: "50%", }}>
                                        <ProgressBar style={{ borderRadius: 50, height: 20, backgroundColor: '#D9D9D9' }} progress={0.5} color={"#0d99ff"} />

                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginBottom: 10 }} >
                                        Feeding
                                    </Text>
                                    <View style={{ width: "50%", }}>
                                        <ProgressBar style={{ borderRadius: 50, height: 20, backgroundColor: '#D9D9D9' }} progress={0.5} color={"#0d99ff"} />

                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginBottom: 10 }} >
                                        Playing
                                    </Text>
                                    <View style={{ width: "50%", backgroundColor: "#D9D9D9", borderRadius: 50 }}>
                                        <View style={{ width: "50%", }}>
                                            <ProgressBar style={{ borderRadius: 50, height: 20, backgroundColor: '#D9D9D9' }} progress={0.3} color={"#0d99ff"} />

                                        </View>
                                    </View>
                                </View>


                            </View>
                        </View>
                    </Card>


                    <View style={{ height: 100 }}></View>
                </View>
            </ScrollView>}

            {!seeMore || <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{
                    flexDirection: 'row', paddingBottom: 10
                }}>
                    <Card containerStyle={{
                        borderRadius: 15, elevation: 5, // Tăng độ nâng để tạo bóng mờ (Android)
                        shadowColor: 'rgba(0, 0, 2, 2.2)', // Màu của bóng
                        shadowOffset: { width: 0, height: 2 }, // Kích thước và hướng của bóng
                        shadowOpacity: 0.8, // Độ đậm của bóng
                        shadowRadius: 4,
                        width: 120
                    }}>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Card.Image
                                style={{ padding: 0, width: 50, height: 50, borderRadius: 50 }}
                                source={{
                                    uri:
                                        'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                                }}
                            />
                            <Card.Title style={{ marginBottom: 10 }}>Dongo</Card.Title>
                        </View>
                    </Card>
                    <Card containerStyle={{
                        borderRadius: 15, elevation: 5, // Tăng độ nâng để tạo bóng mờ (Android)
                        shadowColor: 'rgba(0, 0, 2, 2.2)', // Màu của bóng
                        shadowOffset: { width: 0, height: 2 }, // Kích thước và hướng của bóng
                        shadowOpacity: 0.8, // Độ đậm của bóng
                        shadowRadius: 4,
                        width: 120
                    }}>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Card.Image
                                style={{ padding: 0, width: 50, height: 50, borderRadius: 50 }}
                                source={{
                                    uri:
                                        'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                                }}
                            />
                            <Card.Title style={{ marginBottom: 10 }}>Dongo</Card.Title>
                        </View>
                    </Card><Card containerStyle={{
                        borderRadius: 15, elevation: 5, // Tăng độ nâng để tạo bóng mờ (Android)
                        shadowColor: 'rgba(0, 0, 2, 2.2)', // Màu của bóng
                        shadowOffset: { width: 0, height: 2 }, // Kích thước và hướng của bóng
                        shadowOpacity: 0.8, // Độ đậm của bóng
                        shadowRadius: 4,
                        width: 120
                    }}>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Card.Image
                                style={{ padding: 0, width: 50, height: 50, borderRadius: 50 }}
                                source={{
                                    uri:
                                        'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                                }}
                            />
                            <Card.Title style={{ marginBottom: 10 }}>Dongo</Card.Title>
                        </View>
                    </Card>
                </View>
            </ScrollView>}

            <Text style={{ fontSize: 30 }}>Service for pet</Text>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: "center", alignItems: "center" }}>

                <Card containerStyle={styles.cardContainer2}>
                    <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: '#fff' }}>Appointment</Text>
                    </View>
                </Card>
                <Card containerStyle={styles.cardContainer2}>
                    <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: '#fff' }}>Vaccination</Text>
                    </View>
                </Card>
                <Card containerStyle={styles.cardContainer2}>
                    <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: '#fff' }}>Grooming</Text>
                    </View>
                </Card>
                <Card containerStyle={styles.cardContainer2}>
                    <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: '#fff' }}>Hotel</Text>
                    </View>
                </Card>


            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    home: {
        fontSize: "10px",
        paddingTop: 28,
        paddingHorizontal: 18,
    },
    container: {
        flex: 1,
    },
    fonts: {
        marginBottom: 8,
    },
    inside: {
        height: 20,
        backgroundColor: 'tomato', // Màu xanh lá cây
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
    cardContainer: {
        margin: 16,
        padding: 16,
        borderRadius: 15,
        elevation: 5, // Tăng độ nâng để tạo bóng mờ (Android)
        shadowColor: 'rgba(0, 0, 1, 1.2)', // Màu của bóng
        shadowOffset: { width: 0, height: 2 }, // Kích thước và hướng của bóng
        shadowOpacity: 0.8, // Độ đậm của bóng
        shadowRadius: 4, // Bán kính của bóng
    },
    upperSection: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    lowerSection: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    cardContainer2: {
        borderRadius: 16,
        backgroundColor: '#484B61',
        paddingVertical: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        width: '40%', // Điều chỉnh kích thước của thẻ Card tùy thuộc vào nhu cầu
    },
});
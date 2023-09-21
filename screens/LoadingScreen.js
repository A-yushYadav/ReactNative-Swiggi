import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'

const LoadingScreen = () => {
    const navigation=useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Order")
        }, 2000);
    }, [])
    
    return (
        <SafeAreaView style={{ marginTop: 50 }}>
            <LottieView
                source={require("../assets/thumbs.json")}
                style={{ height: 260, width: 300, alignSelf: "center", marginTop: 40, justifyContent: "center" }}
                autoPlay
                loop={false}
                speed={0.7}
            />
            <Text style={{marginTop:20,fontSize:20,fontWeight:"600",textAlign:"center"}}>Order Has been Recived</Text>
            <LottieView
                source={require("../assets/sparkle.json")}
                style={{ height: 300, width: 300, alignSelf: "center", position: "absolute", top: 100 }}
                autoPlay
                loop={false}
                speed={0.7}
            />
        </SafeAreaView>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({})
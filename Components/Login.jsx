import { useEffect, useState } from 'react';
import { Text, View, Image, TextInput, Pressable, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Services/firebase';
import React from 'react';

export default function Login({ setUser, navigation }) {
    const [login, setLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function switchForm() {
        setLogin(!login);
    }

    function signup() {
        createUserWithEmailAndPassword(auth, email, password)
            .then((credential) => {
                setLogin(true);
            })
    }

    function signin(){
        signInWithEmailAndPassword(auth, email, password)
        .then((credential) => {
            setUser(credential.user);
            navigation.navigate("Home");
        })
    }

    return (
        //<Image source={{uri: 'https://weather.training-dev.fr/picture/meteoJetLag.png'}} style={{width: 200, height: 200}} />
        <View style={styles.form}>
            <Image source={{uri: 'https://weather.training-dev.fr/picture/meteoJetLag.png'}} style={{width: 200, height: 200, justifyContent: 'center', alignItems: 'center'}}/>
            <View style={styles.formGroup}>
                <Text>Email</Text>
                <TextInput style={styles.field} onChangeText={value => setEmail(value)}></TextInput>
            </View>
            <View style={styles.formGroup}>
                <Text>Password</Text>
                <TextInput secureTextEntry={true} style={styles.field} onChangeText={value => setPassword(value)}></TextInput>
            </View>
            {login &&
                <View style={styles.formGroupHorizontal}>
                    <Text style={styles.link} onPress={() => switchForm()}>S'inscrire</Text>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => signin()}>Connexion</Text>
                    </Pressable>
                </View>
            }
            {!login &&
                <View style={styles.formGroupHorizontal}>
                    <Text style={styles.link} onPress={() => switchForm()}>Se connecter</Text>
                    <Pressable style={styles.button} onPress={() => signup()}>
                        <Text style={styles.buttonText}>
                            Inscription
                        </Text>
                    </Pressable>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 400,
    },
    formGroup: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: "20px"
    },
    form: {
        padding: "30px",
        fontFamily: "Calibri"
    },
    field: {
        border: "1px solid #808080",
        borderRadius: "80px",
        width: "100%"
    },
    formGroupHorizontal: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    link: {
        color: "blue",
        paddingTop: "10px",
    },
    button: {
        backgroundColor: "#1565c0",
        padding: "10px",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
    },
    buttonText: {
        color: "white"
    }
});
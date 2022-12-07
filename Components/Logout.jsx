import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button, ReactNative } from 'react-native';

class LogoutScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
                <View style={[styles.containerOne]}>
                <Button
                    onPress={this.loginButtonOnPress.bind(this)}
                    title="Logout"
                    style={[styles.logoutButton]}
                />
            </View>
        );
    }

    logoutButtonOnPress() {
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    containerOne: {
        marginTop: -160,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    logoutButton: {
        color: 'blue',
        marginTop: 10,
    }
});
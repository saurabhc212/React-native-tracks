import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';
import Spacer from '../components/Spacer';

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(Context);
    return <View style={styles.container}>
        <NavigationEvents onWillFocus={clearErrorMessage} />
        <AuthForm 
          headerText='Sign in to Your Account'
          errorMessage = {state.errorMessage}
          onSubmit={signin}
          submitButtonText='Sign In'
        />
        <Spacer>
            <NavLink 
                text='Dont have an account? Signup instead'
                routeName='Signup'
            />
        </Spacer>
    </View>
};

SigninScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 100
    }
});

export default SigninScreen;
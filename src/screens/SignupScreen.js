import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({navigation}) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);
    
    return <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
       <AuthForm 
         headerText='Sign up for Tracker'
         errorMessage = {state.errorMessage}
         submitButtonText = "Sign Up"
         onSubmit = {signup}
       />
       <Spacer>
        <NavLink 
          routeName='Signin'
          text='Already have an account? Sign in instead'
        />
       </Spacer>
    </View>
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 100
    }
  });



export default SignupScreen;
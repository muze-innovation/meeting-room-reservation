import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChange, passwordChange, loginUser } from '../actions'

class LoginFrom extends Component {
    onEmailChange(text){
        this.props.emailChange(text)
    }

    onPasswordChange(text){
        this.props.passwordChange(text)
    }

    onButtonPress(){
        const { email, password } = this.props;
        this.props.loginUser({email, password});
    }

    renderButton(){
        console.log('this.props.loading = ' , this.props.loading)
        if(this.props.loading){
           return <Spinner size='large' />
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        )
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        lable="Email"
                        placeholder="nick@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        lable="Password"
                        placeholder="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={style.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    };
}

const style = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return {
        email,
        password,
        error,
        loading
    };
}

export default connect(mapStateToProps,{emailChange, passwordChange, loginUser})(LoginFrom);
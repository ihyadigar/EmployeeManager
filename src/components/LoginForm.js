import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EMailChanged, PasswordChanged, LoginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    onEmailChange(text) {
        //Call Email Action Creator
        this.props.EMailChanged(text);
    }

    onPasswordChange(text) {
        //Call Password Action Creator
        this.props.PasswordChanged(text);
    }

    onButtonPressed() {
        const { email, password } = this.props;
        //Call Login Action Creator
        this.props.LoginUser({ email, password });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@email.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Şifre"
                        placeholder="şifrenizi giriniz"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    <Button onButtonPress={this.onButtonPressed.bind(this)}>
                        Giriş
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

export default connect(mapStateToProps, { 
    EMailChanged, 
    PasswordChanged, 
    LoginUser 
})(LoginForm);


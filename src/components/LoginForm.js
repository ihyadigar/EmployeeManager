import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EmailChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.EmailChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@email.com"
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Şifre"
                        placeholder="şifrenizi giriniz"
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Giriş
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
export default connect(null, { EmailChanged })(LoginForm);


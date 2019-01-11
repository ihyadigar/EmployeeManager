import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@email.com"
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
export default LoginForm;


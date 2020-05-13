import React from 'react';
import {Field, reduxForm} from "redux-form";
import {NewElement} from "../common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";

let Input = NewElement("input");

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={"Логин"} name={"login"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={"Пароль"} name={"password"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> Запомнить
            </div>
            <div>
                <button>Войти</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;
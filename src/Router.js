import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    const { sceneStyle } = styles;   
    return (
        <Router sceneStyle={sceneStyle}>
            <Scene key="login" component={LoginForm} title="Please Login" />
            <Scene key="employeeList" component={EmployeeList} title="Employees" />
        </Router>
    );
};

const styles = {
    sceneStyle: {
        paddingTop: 55
    }
};

export default RouterComponent;

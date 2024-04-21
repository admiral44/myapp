import React from 'react';
import { ToastAndroid } from 'react-native'


const ToastComponent = ({ type, text }) => (
    <Toast
        type={type}
        text1={text}
        autoHide={true}
        visibilityTime={3000}
        position={Toast.POSITION.BOTTOM}
        bottomOffset={50}
    />
);

export const showToast = (type, text) => {
    ToastComponent.show({ type, text });
};

export default ToastComponent;

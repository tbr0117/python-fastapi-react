import React from "react";
import ReactDOM from "react-dom";

import {FlexBox, FlexBoxDirection, Button,
        FlexBoxJustifyContent, Input, InputType, Label, FlexBoxAlignItems} from "@ui5/webcomponents-react";
 
function Login() {
    const aflexBoxProperties:any = {
        fitContainer: true,
        justifyContent: FlexBoxJustifyContent.Center,
        direction: FlexBoxDirection.Column,
        alignItems: FlexBoxAlignItems.Center,
        style: { "width": "100%" }
}
    return (
        <FlexBox {...aflexBoxProperties}>
            <Label for="UserName" > User Name </Label>
            <Input id="UserName" type={InputType.Text} />
            <Label for ="Password">Password</Label>
            <Input id="Password" type={InputType.Password}></Input>
            <Button icon="employee">Login</Button>
        </FlexBox>  
    )
}

export default Login;
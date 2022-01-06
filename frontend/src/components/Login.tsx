import React, { useState } from "react";
import {api} from "@/Api"

import {FlexBox, FlexBoxDirection, Button,
        FlexBoxJustifyContent, Input, InputType, Label, FlexBoxAlignItems} from "@ui5/webcomponents-react";
 
function useInputFrom(sValue){
    const [value, setValue] = useState(sValue);
    return {
        value,
        onChange: (a) => setValue(a.target.value)
    }
}
        
function Login() {
    const aflexBoxProperties:any = {
        fitContainer: true,
        justifyContent: FlexBoxJustifyContent.Center,
        direction: FlexBoxDirection.Column,
        alignItems: FlexBoxAlignItems.Center,
        style: { "width": "100%" }
    }
    const userName = useInputFrom("");
    const password = useInputFrom("");
    async function loginUser() {
        api.userLogin(userName.value , password.value)
    };
    return (
        <FlexBox {...aflexBoxProperties}>
            <Label for="UserName" > User Name </Label>
            <Input {...userName} />
            <Label for ="Password">Password</Label>
            <Input id="Password" type={InputType.Password} {...password}></Input>
            <Button icon="employee" onClick={loginUser}>Login</Button>
        </FlexBox>  
    )
}

export default Login;
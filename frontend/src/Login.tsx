import React, { useState } from "react";
import axios from "axios";

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
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    async function apicall(params:any) {
      return axios.post("http://localhost:8000/login", params)
    }
    async function loginUser(){
        debugger;
        const params = new URLSearchParams();
        params.append("username", userName);
        params.append("password", password);
        const response = await apicall(params);
    };
    return (
        <FlexBox {...aflexBoxProperties}>
            <Label for="UserName" > User Name </Label>
            <Input id="UserName" onInput={(a)=>{ 
                if(!a || !a.srcElement) {
                    return
                }
                setUserName(a.srcElement["getAttribute"]("value"))}} type={InputType.Text} />
            <Label for ="Password">Password</Label>
            <Input id="Password" type={InputType.Password} 
             onInput={(a)=>{ 
                if(!a || !a.srcElement) {
                    return
                }
                setPassword(a.srcElement["getAttribute"]("value"))}}></Input>
            <Button icon="employee" onClick={loginUser}>Login</Button>
        </FlexBox>  
    )
}

export default Login;
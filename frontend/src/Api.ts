import axios from "axios";
import { apiURL } from "./env";

async function apicall(params:any) {
    return axios.post(`${apiURL}/login`, params)
}

export const api = {
    async userLogin(sUsename:string, sPassword: string) {
        const params = new URLSearchParams();
        params.append("username", sUsename);
        params.append("password", sPassword);
        const response = await apicall(params);
    }

}
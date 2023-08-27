import axios from "axios";

async function authenticate(UID ,password,CID) {
    const url =  "http://app.maazinfotech.com/HRMS2012/AuthService.asmx/AuthenticateBySoap?UID=000272&PWD=P@ssw0rd&CID=DEMOIND"
    const response = await axios.post(url,{
        UID: UID,
        PWD:password,
        CID:CID,
        returnSecureToken:true,
    });
    console.log(response.data);
     const token = response.data.Token;
     return token;
    }
     export async function login(UID,password,CID) {
        return authenticate(UID,password,CID);
    };

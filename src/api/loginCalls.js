import axios from "axios";

const loginUrl="https://github.com/login/oauth/authorize";
const client_id="none";

//doesnt work, cors error ---- (1) try to find some way to shift login here
export const loginOauth = async () =>{    
    if(client_id==="none"){
        console.log("no client github id");
        return ;
    }
    var res = await axios.get(loginUrl,{
        params:{
            client_id:client_id  
        }
    });
    // console.log(res.data);
}
// --------------------------- (1)
const API_URL = "http://localhost:3200/data";
async function sendRequest(url,options){
    const response = await fetch(url,options);
    return await response.json();
}

async function fetchUsers(){
    return await sendRequest(API_URL);
}

export default {
    fetchUsers
};
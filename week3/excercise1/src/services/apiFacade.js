const loginData = async (loginInfo) => {
    const { username, password } = loginInfo;

    const localHost = "http://localhost:7070/api/security/auth/login"
    //const dropletUrl = "http://207.154.244.108:7070/api/security/auth/login"
    try {
        const result = await fetch(localHost, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    "username": username,
                    "password": password
                }
            )
        })
        if (result.ok) {
        const data = await result.json();
        console.log(data);
        return data;
    }else {
        throw new Error("Error");
        }
    }catch(error){
        console.log(error.message);
        throw new Error("Login failed" + error.message);
    }
}

async function RegisterUser(loginInfo) {
    const {username, password1} = loginInfo;

    const localHost = "http://localhost:7070/api/security/auth/register";
    //const dropletUrl = "http://207.154.244.108:7070/api/security/auth/register";
    try {
        const result = await fetch(localHost, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "password": password1
            })
        })
        if(result.ok) {
            const data = await result.json();
            return data;
        }else {
            throw new Error("Error");
        }
    } catch (error) {
        console.log(error);
        throw new Error("Error"+error.message);
    }
}

export {RegisterUser};
export default loginData;

loginData("PatrickUser2","1234").then(r => console.log(r));
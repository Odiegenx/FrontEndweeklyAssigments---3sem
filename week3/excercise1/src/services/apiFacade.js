const loginData = async (loginInfo) => {
    const { username, password } = loginInfo;

    const localHost = "http://localhost:7070/api/security/auth/login"
    const dropletUrl = "http://207.154.244.108:7070/api/security/auth/login"
    try{
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
        const data = await result.json();
        console.log(data);
        return data;
    }catch(error){
        console.log(error);
    }
}
export default loginData;

loginData("PatrickUser2","1234").then(r => console.log(r));
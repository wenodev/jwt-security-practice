
import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1";
const ACCESS_TOKEN = 'accessToken';

const headers = new Headers({
    'Content-Type': 'application/json',
})




class UserAuthService {

    getAllUsers() {
        // headers.append('Authorization', 'X-AUTH-TOKEN ' + localStorage.getItem(ACCESS_TOKEN))
        // console.log(localStorage.getItem("accessToken"))
        // headers.append('X-AUTH-TOKEN', localStorage.getItem("accessToken"))
        // console.log(headers);


        return axios({
            method: 'get',
            url: USER_API_BASE_URL + "/users",
            headers: { 'X-AUTH-TOKEN': localStorage.getItem(ACCESS_TOKEN) }
        });



        // return axios.get(USER_API_BASE_URL + "/users", headers);
    }

}

export default new UserAuthService()

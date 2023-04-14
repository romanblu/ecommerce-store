import axios from 'axios';

function Logout(){
    return new Promise((resolve, reject) =>{
        axios.post(`/users/logout` , { headers: {"authorization" : localStorage.getItem('jwt')} })
        .then(res => {
            resolve({success: true})
        }).catch(err => reject({success: false}));
    }) 
    
}
    
export default Logout;
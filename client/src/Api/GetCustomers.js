import axios from 'axios';

function GetCustomers(query){
    return new Promise( async (resolve, reject) => {
        try{
            const customers = await axios.get(`/users/search/${query}`, { headers: {"authorization" : localStorage.getItem('jwt')} })
            resolve(customers);
        }catch(err){
            reject(err);
        }
        
    })
        
}
    
export default GetCustomers;
import axios from 'axios';

function GetAllCustomers(){
    return new Promise( async (resolve, reject) => {
        try{
            const customers = await axios.get('/users', { headers: {"authorization" : localStorage.getItem('jwt')} })
            resolve(customers);
        }catch(err){
            reject(err);
        }
        
    })
        
}
    
export default GetAllCustomers;
import axios from 'axios';

function GetProduct(productId){
    return new Promise((resolve, reject) =>{
        axios.get(`/products/${productId}` , { headers: {"authorization" : localStorage.getItem('jwt')} })
        .then(product => {
            resolve(product)
        }).catch(err => reject(err));
    }) 
    
}
    
export default GetProduct;
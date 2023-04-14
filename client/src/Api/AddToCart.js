import axios from 'axios';

function AddToCart(productId){
    
    return axios.post('/users/add-to-cart', {productId} , { headers: {"authorization" : localStorage.getItem('jwt')} })
    
}
    
export default AddToCart;
import axios from 'axios';

async function GetAllCartProducts(id){
    // return new Promise((resolve, reject) =>{
    //     axios.get('/users/current' , { headers: {"authorization" : localStorage.getItem('jwt')} })
    //     .then(user => {
    //         Promise.all(user.data.cart.products.map(productId => {
    //             GetProduct(productId);
    //         })).then(res => console.log(res));
    //     }).catch(err =>{
    //         reject(err);
    //     })
    // });

    // return new Promise((resolve, reject) => {
    //     axios.get('/users/current' , { headers: {"authorization" : localStorage.getItem('jwt')} })
    //     .then(  user =>  {
            
    //         Promise.allSettled(user.data.cart.products.map(GetProduct)).then(res => resolve(res))
             
    //     }).catch(err => reject(err));
    // }) 
    if(id) {

        const products = axios.get(`/cart/${id}`, { headers: {"authorization" : localStorage.getItem('jwt')} })
        return products
    }

    const products = axios.get('/cart', { headers: {"authorization" : localStorage.getItem('jwt')} })
    return products

    
}
    
export default GetAllCartProducts;
import axios from 'axios';

function SearchProducts(query){
    return new Promise((resolve, reject) =>{
        axios.get(`/products/search/${query}` , { headers: {"authorization" : localStorage.getItem('jwt')} })
        .then(products => {
            resolve(products)
        }).catch(err => reject(err));
    }) 
    
}
    
export default SearchProducts;
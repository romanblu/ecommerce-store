import React, {useState, useEffect} from 'react'
import ProductCard from '../ProductCard';
import Input from '../utils/Input/Input';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import Wrapper from '../../assets/wrappers/Home';
import SearchProducts from '../../Api/SearchProducts';



export default function Home(props) {
    const [allProducts, setAllProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState({
        value:'',
        typingTimeout: 0
    });

    let ProductListings = [];
    let history = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        axios.get('/products', { headers: {"authorization" : `${token}`} })
        .then(products => {
            setAllProducts(products.data);
        }).catch(err => {
            if(err.response){
                history.push('/login')
            }
        })
    },[] );

    if(allProducts.length !== 0){
        ProductListings = allProducts.map((product,index) => (    
            <ProductCard key={index} {...product} addToCart={props.addToCart} ></ProductCard>
        ));
    }

    const handleSearch = (e) => {
        // added a timeout to the state to search the query only when the user stopped typing 
        clearTimeout(searchQuery.typingTimeout) 
        setSearchQuery({ 
            value: e.target.value,
            typingTimeout: setTimeout(async () => {
                try{
                    const products = await SearchProducts(searchQuery.value)
                    console.log(products.data);
                    if(products.length === 0){
                        // add error message
                    }else{
                        setAllProducts(products.data);
                    }
                }catch(err){
                    console.log(err)
                }
            }, 1000)
        });
         
        
    }

    return (
        <Wrapper>
            <div className="container">
                <div className="all-products">
                    <h1 className="title">All Products</h1>
                    <div className="product-search">
                    <Input type="text" value={searchQuery.value} onChange={handleSearch} label="Search product" imgSrc="https://cdn3.iconfinder.com/data/icons/search-engine-optimization-seo-3/320/loupe_magnifier_magnifying_search-512.png"/>
                </div>
                    <div className="listings-container">
                        
                        {ProductListings}
                    </div>
                </div>
                
            </div>
        </Wrapper>
        
    )
}

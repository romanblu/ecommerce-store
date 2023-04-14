import React, {useState, useEffect} from 'react'
import GetAllCustomers from '../../Api/GetAllCustomers';

import GetAllCartProducts from '../../Api/GetAllCartProducts';
import Input from '../utils/Input';
import GetCustomers from '../../Api/GetCustomers';
import Wrapper from '../../assets/wrappers/Dashboard'

export default function Dashboard() {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomerDetails, setSelectedCustomerDetails] = useState({
        cartItems: [],
        user: null
    });
    const [searchQuery, setSearchQuery] = useState({
        value:'',
        typingTimeout: 0
    });

    useEffect(() => {
        GetAllCustomers()
        .then(res => setCustomers(res.data))
        .catch(err => console.log("Could not get customers ",err))       
    },[]);

    const handleSearch = (e) => {
        // added a timeout to the state to search the query only when the user stopped typing 
        clearTimeout(searchQuery.typingTimeout) 
        setSearchQuery({ 
            value: e.target.value,
            typingTimeout: setTimeout(async () => {
                try{
                    const customersResult = await GetCustomers(searchQuery.value)
                    console.log(customersResult.data);
                    if(customersResult.length === 0){
                        // add error message
                    }else{
                        setCustomers(customersResult.data);
                    }
                }catch(err){
                    console.log(err)
                }
            }, 1000)
        });
         
        
    }

    const customersDetails = customers.map((customer, index) => (
        <tr key={customer._id} className="customer-details-row">
            <td><p className="customer-id" onClick={() => selectedCustomer(customer)}>{customer._id}</p></td>
            <td>{customer.name}</td>
            <td>{customer.username}</td>
            <td>{customer.email}</td>
            <td>{customer.cart.products.length} items</td>
            
        </tr>
    )) 

    const selectedCustomer = async (selectedCustomer) => {
        console.log("selected ", selectedCustomer)
        GetAllCartProducts(selectedCustomer._id)
        .then(cartItems => {
            console.log("CART ITEMS ", cartItems.data)
            
            setSelectedCustomerDetails({user: selectedCustomer, cartItems:cartItems.data})
            
        })
        
    }

    const cartItemsDisplay = selectedCustomerDetails.cartItems.map(item => ( 
        <div className="cart-item">
            <p>Brand: {item.brand}</p>
            <p>Title: {item.title}</p>
            <p>Color: {item.color}</p>
            <p>Size: {item.size}</p>
            <p>Price: {item.price}</p>            
        </div>
    ))
    console.log(selectedCustomerDetails)
    return (
        <Wrapper>
        <div>
            <div className="admin-dashboard">
                <table className="customers-details-table" >
                    <Input type="text" value={searchQuery.value} onChange={handleSearch} label="Search User" imgSrc="https://cdn3.iconfinder.com/data/icons/search-engine-optimization-seo-3/320/loupe_magnifier_magnifying_search-512.png"/>
                    <tr>
                        <th>Customer ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Cart</th>
                    </tr>
                    
                    {customersDetails}
                </table>
                {selectedCustomerDetails.user ? 
                    (
                        <div className="selected-customer">
                            <h1>Customer Details</h1>
                            <h3 className="selected-customer-name ">Customer Name: {selectedCustomerDetails.user.name}</h3>
                            <h3 className="selected-customer-name ">Email: {selectedCustomerDetails.user.email}</h3>
                            <div className="selected-customer-logins">
                                <p>Login history: </p>
                                27.03.2021 16:30, 27.03.2021 16:30, 27.03.2021 16:30, 27.03.2021 16:30
                            </div>
                            <div className="selected-customer-logouts">
                            <p>Login history: </p>
                            27.03.2021 16:30, 27.03.2021 16:30, 27.03.2021 16:30, 27.03.2021 16:30, 27.03.2021 16:30
                            </div>
                            <div className="selected-customer-purchases">
                                Purchases:
                                {selectedCustomerDetails.user.purchases ? "Placeholder for puchases" : <h3>No previous purchases</h3>}
                            </div>
                            <div className="selected-customer-orders">
                                Current orders:
                                {selectedCustomerDetails.user.orders ? "Placeholder for orders" : <h3>No orders awaiting</h3>}
                            </div>
                            <div className="selected-customer-cart">
                                Cart Items: 
                                {selectedCustomerDetails.cartItems.length === 0 ? ' No items added to cart ' : cartItemsDisplay}
                                
                            </div>
                        </div>
                    )
                        : ''
                }
                
            </div>       
        </div>
        </Wrapper>
    )
}

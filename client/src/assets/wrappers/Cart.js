import styled from 'styled-components'

const Wrapper = styled.main`
.cart-items {
    display: flex;
    flex-direction: column;
    width: 50%;
    min-width: 350px;
    margin: 35px auto;
    gap: 35px;
  }
  
  .cart-checkout {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    .order-details {
      li {
        list-style: none;
        border-bottom: 1px solid #3636368a;
      }
      margin: 25px 0;
      .product-detail-list-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 25px;
        padding-bottom: 10px;
      }
    }
  }
  
  $light-rose: #f9dfdf;
  $dark-gray: #363636;
  $light-green: #31a893;
  
  .product-listing {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
    padding-bottom: 10px;
    border-bottom: solid 1px #36363680;
  
    .product-image > img {
      width: 100%;
      height: 220px;
      object-fit: cover;
    }
    .special-offer {
      position: absolute;
      z-index: 5;
      top: 12px;
      width: 66%;
      height: 45px;
      background-color: #31a893;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
  
      p {
        color: #fff;
        font-size: 18px;
        font-family: Roboto;
      }
    }
    .remove-item {
      position: absolute;
      z-index: 6;
      top: 12px;
      right: 10px;
      font-size: 30px;
      color: #541a8bbe;
  
      &:hover {
        transition: 0.5s all ease;
        opacity: 0.6;
        transform: scale(1.1);
      }
    }
    .product-title {
      font-family: Roboto;
      font-size: 18px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: 0.81px;
      margin-bottom: 12px;
      margin-top: 18px;
      color: $dark-gray;
    }
  
    .product-price {
      display: flex;
      flex-direction: row;
      column-gap: 15px;
      font-size: 20px;
      .regular-price {
        font-family: Roboto;
        //   font-size: 15px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: 0.68px;
        color: $dark-gray;
      }
  
      .discount-price {
        font-family: Roboto;
        font-size: 20px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: 0.68px;
        color: $light-green;
      }
  
      .crossed {
        text-decoration: line-through;
      }
    }
  }
  
  @media (max-width: 650px) {
    .product-title {
      font-size: 30px;
    }
  
    .product-price > p {
      font-size: 25px;
    }
  }
`

export default Wrapper
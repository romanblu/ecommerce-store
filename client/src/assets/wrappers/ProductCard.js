import styled from 'styled-components'

const Wrapper = styled.main`
$light-rose: #f9dfdf;
$dark-gray: #363636;
$light-green: #31a893;
.product-listing {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;

  .product-image > img {
    width: 100%;
    height: 280px;
    object-fit: cover;

    &:hover {
      opacity: 0.64;
      // transform: scale(1.05);
      background-color: $light-rose;
      transition: 0.5s all ease;
    }
  }
  .add-to-cart {
    position: absolute;
    z-index: 6;
    // top: 12px;
    right: 10px;
    bottom: 15px;
    font-size: 25px;
    color: #31a893;

    &:hover {
      transition: 0.5s all ease;
      opacity: 0.6;
      transform: scale(1.1);
    }
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

    .regular-price {
      font-family: Roboto;
      font-size: 15px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: 0.68px;
      color: $dark-gray;
    }

    .discount-price {
      font-family: Roboto;
      font-size: 15px;
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

export default Wrapper;
import styled from 'styled-components'

const Wrapper = styled.main`

.page-header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.all-products {
  margin-top: 20px;
  padding-bottom: 200px;
  h1 {
    text-align: center;
  }
  .product-search {
    width: 70%;
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
    i {
      font-size: 25px;
      margin-left: 15px;
      border: 1px solid rgba(0, 0, 0, 0.432);
      padding: 2px;
      border-radius: 5px;
    }
  }
}

.listings-container {
  margin-top: 80px;
  margin-left: 25px;
  margin-right: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 100px;
  column-gap: 42px;
}

.page-navigation {
  margin: 100px auto;
  padding-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .navigation-prev {
    opacity: 0.5;
    font-family: Roboto;
    font-size: 20.3px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: normal;
    margin-right: 30px;
    color: $dark-gray;
  }

  .navigation-next {
    font-family: Roboto;
    font-size: 20.3px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: normal;
    margin-left: 30px;

    color: $dark-gray;
  }

  .page-values {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 125px;
    justify-content: center;

    .page-number {
      margin: 0 10px;
      font-size: 20px;
      font-family: Roboto;
      font-weight: 300;
      color: $dark-gray;
    }
  }
}

@media (max-width: 850px) {
  .listings-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 650px) {
  .listings-container {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 70px;
    column-gap: 32px;
    margin-top: 50px;
  }
}
`

export default Wrapper
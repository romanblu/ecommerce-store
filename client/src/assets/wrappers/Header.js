import styled from 'styled-components'

const Wrapper = styled.main`
  .page-title {
  margin-top: 73px;
  justify-content: center;
  align-items: center;
  display: flex;
  h1 {
    font-family: Roboto;
    font-size: 28px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: 5.6px;
    text-align: center;
    color: #363636;
  }

  .rectangle {
    width: 155px;
    height: 45px;
    background-color: #f9dfdf;
    position: absolute;
    z-index: -1;
    // transform: translate(-50%, -50%);
    transform: translateX(-50%);
  }
}

// header logo
.schpilly-title {
  margin: 0 auto;
  font-family: Roboto;
  font-size: 39.7px;
  font-weight: 300;
  font-stretch: condensed;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: 9.92px;
  text-align: right;
  color: #2c2b2a;
  cursor: pointer;
}
.schpilly-title .text-style-1 {
  color: #31a893;
}

.head-bar-copy {
  height: 175px;
  background-color: #f7fcfb;
}

.header-page {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.38px;
  text-align: center;
  color: #31a893;
}

.header-top {
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.navbar {
  align-items: center;
  border-top: 1px solid #d7d7d7;
  height: 65px;
  display: flex;
  padding-left: 25px;
  padding-right: 25px;
  //   justify-content: space-evenly;
  justify-content: start;
  gap: 50px;
  flex-direction: row;
  list-style: none;
  .login-logout {
    margin-left: auto;
    > a {
      color: #31a893;
      font-weight: 500;
    }
  }

  .cart {
    font-size: 28px;
    color: #31a893;
    cursor: pointer;
  }
  .cart-count {
    color: #2c2b2a;
    font-weight: 700;
    font-size: 20px;
  }
}

@media (max-width: 650px) {
  .navbar {
    font-size: 25px;
  }
}

`

export default Wrapper

import styled from 'styled-components'

const Wrapper = styled.main`
.btn1 {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

.checkout-btn {
  background-color: #31a893;
  &:hover {
    opacity: 0.8;
    transition: 0.5s ease;
  }
}

.payment-btn {
  background-color: #5251a8;
  &:hover {
    opacity: 0.8;
    transition: 0.5s ease;
  }
}

`

export default Wrapper
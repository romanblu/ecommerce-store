import styled from 'styled-components'

const Wrapper = styled.main`
.payment-form {
  font-size: large;
  width: 500px;
  background-color: #f5f5f5;
  padding: 35px;
  border-radius: 20px;
  //   font-size: 25px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  .column {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > {
      flex: 2 1;
    }
  }

  .paypal-icon {
    font-size: 60px;
    color: royalblue;
    &:before {
      cursor: pointer;
    }
  }
}

`

export default Wrapper

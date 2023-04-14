import styled from 'styled-components'

const Wrapper = styled.main`
.order-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
  //   max-width: 500px;
  .order-details-name {
    display: flex;
    flex-direction: row;

    gap: 30px;
    align-items: stretch;
    justify-content: space-around;
    > * {
      flex-grow: 1;
    }
  }
  .order-details-country {
    display: flex;
    flex-direction: row;

    gap: 30px;
    align-items: stretch;
    justify-content: space-around;
    > * {
      flex-grow: 1;
    }
  }
}

`

export default Wrapper

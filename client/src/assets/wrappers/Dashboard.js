import styled from 'styled-components'

const Wrapper = styled.main`
.admin-dashboard {
  display: flex;
  flex-direction: row;
  gap: 30px;
  .customers-details-table {
    border-right: 1px solid rgba(16, 40, 78, 0.801);
    width: 50%;
    border-spacing: 15px;
    th {
      font-size: 26px;
      font-weight: 600;
      border-bottom: 1px solid rgba(43, 29, 29, 0.493);
      text-align: start;
    }
    tr {
      // height: 40px;
      font-size: 20px;
    }

    .customer-id {
      color: blueviolet;
      cursor: pointer;
    }
  }

  .selected-customer {
    width: 45%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    .selected-customer-cart {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
}

`

export default Wrapper

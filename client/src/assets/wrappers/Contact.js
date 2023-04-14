import styled from 'styled-components'

const Wrapper = styled.main`
.contact-us {
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  gap: 20px;
  font-size: 20px;
  .contact-us-content {
    > h3 {
      font-weight: 600;
      margin-bottom: 20px;
    }
    margin-top: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .contact-form {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    .name-email {
      display: flex;
      flex-direction: row;
      gap: 20px;
      > * {
        flex: 1;
      }
    }

    > button {
      width: 250px;
    }
  }
}

`

export default Wrapper
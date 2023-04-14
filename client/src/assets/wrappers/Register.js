import styled from 'styled-components'

const Wrapper = styled.main`
@import url("https://fonts.googleapis.com/css?family=Jura:400");

.entry-page {
  * {
    font-family: Jura, Arial;
    font-weight: 400;
  }
  body {
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px) 1fr;
  grid-template-rows: 1fr minmax(auto, 1fr) 1fr;
  grid-gap: 10px;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
  box-sizing: border-box;
  form {
    grid-column: 2;
    grid-row: 2;
    display: grid;
    grid-gap: 10px;
    margin: auto 0;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0 32px 64px rgba(0, 0, 0, 0.2);
    h2 {
      margin-bottom: 5px;
      text-align: center;
      text-shadow: 0 4px 16px #fff;
      font-size: 30px;
      font-weight: 100;
    }
    fieldset {
      margin: 0;
      background-color: #fff;
      border: none;
      border-radius: 5px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      legend {
        padding: 5px;
        background-color: #fff;
        border-radius: 5px;
      }
      ul {
        margin: 0;
        padding: 0;
        li {
          display: grid;
          align-items: center;
          margin: 10px;
          a {
            color: #02c;
          }
          em {
            grid-column: span 2;
            text-align: center;
            padding: 5px;
          }
          label {
            text-align: left;
            padding-bottom: 2px;
          }
          input {
            padding: 5px;
            border: 1px solid #ddd;
            border-radius: 5px;
            &:hover {
              border: 1px solid #aaf;
            }
          }
        }
      }
    }
    button {
      padding: 10px;
      border: 1px solid rgba(0, 0, 0, 0);
      border-radius: 5px;
      background: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      &:hover {
        background-color: #eef;
        border: 1px solid #aaf;
      }
    }
  }
}
.error-message {
  color: red;
  font-weight: 600;
}
@media only screen and (min-width: 420px) {
  form {
    h2 {
      font-size: 40px;
    }
    fieldset {
      ul {
        li {
          grid-template-columns: 100px 1fr;
          label {
            padding-right: 10px;
            padding-bottom: 0;
            text-align: right !important;
          }
        }
      }
    }
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

`

export default Wrapper
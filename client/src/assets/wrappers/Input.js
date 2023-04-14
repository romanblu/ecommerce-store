import styled from 'styled-components'

const Wrapper = styled.main`
.item-container .item-image img {
  // height: 400px;
  width: 100%;
}

.input {
  padding: 5px 0;
}
img {
  cursor: pointer;
}
.input label {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: #78757c;
}

.input input {
  width: 100%;
  padding: 5px 10px;
  letter-spacing: 0px;
  font-size: 20px;
  background: 0;
  border: 0;
}

.input input:focus {
  outline: 0;
}

.input-field {
  color: black;
  border: 1px solid #78757c;
  border-radius: 5px;
  position: relative;
}

.input-field img {
  width: 25px;
  height: auto;
  position: absolute;
  right: 0;
  top: 5px;
  margin-right: 5px;
}

`

export default Wrapper
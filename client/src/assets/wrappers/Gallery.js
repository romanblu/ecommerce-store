import styled from 'styled-components'

const Wrapper = styled.main`
.product-gallery {
  flex: 0.5;

  .gallery-image {
    width: 100%;
    object-fit: cover;
  }

  .main-image {
    // height: 425px;
  }

  > img {
    &:hover {
      cursor: pointer;
      opacity: 0.64;
      background-color: #f9dfdf;
      transition: 0.5s all ease;
    }
  }
  .gallery {
    margin-top: 22px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 21px;

    > img {
      object-fit: cover;
      cursor: pointer;
      &:hover {
        opacity: 0.64;
        background-color: #f9dfdf;
        transition: 0.5s all ease;
      }
    }
  }
}

`

export default Wrapper
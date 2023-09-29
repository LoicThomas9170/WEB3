import image from './logo_vinci.png'
const Header = (props) => {
    return (
      <>
        <img src={image} alt="Logo" />
        <h1>{props.course}</h1>
      </>
    )
  }

export default Header
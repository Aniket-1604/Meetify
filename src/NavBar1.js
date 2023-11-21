import  React , { useState }  from 'react'
import { Navbar , NavbarBrand } from 'reactstrap';
import meetify from "./meetify.png"

function NavBar1() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    return (
      <div>
      <Navbar
        className=""
        color="black"
        dark
      >
        <NavbarBrand className='my-2 mx-5'>
          <img 
            alt="logo"
            src={meetify}
            style={
              {
                height : 50,
                width : 150,
                marginLeft: '20px',
              }
            }
          />
        </NavbarBrand>
      </Navbar>
      </div>
    );
  }

export default NavBar1
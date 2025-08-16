import './fonts.css';
import {Image, Flex} from "@chakra-ui/react";

const Navbar = ({hoverTitle, hoverBody, image, width, height, setHoverText}) => {

  const handleMouseEnter = () => {
    setHoverText({title: hoverTitle, body: hoverBody});
  };

  const handleMouseLeave = () => {
    setHoverText({title: "", body: ""});
  };

  return (
    <Flex direction="row">
        
    </Flex>
  );
};

export default Navbar;
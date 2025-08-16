import './fonts.css';
import {Image} from "@chakra-ui/react";

const PicnicItem = ({hoverTitle, hoverBody, image, width, height, setHoverText}) => {

  const handleMouseEnter = () => {
    setHoverText({title: hoverTitle, body: hoverBody});
  };

  const handleMouseLeave = () => {
    setHoverText({title: "", body: ""});
  };

  return (
    <Image
      src={image}
      width={width}
      height={height}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    </Image>
  );
};

export default PicnicItem;
import './fonts.css';
import { Flex, Text} from "@chakra-ui/react";
import React, { useState } from 'react';

function PicnicText() {
    const [hoveredText, setHoveredText] = useState("");

    return (
        <Flex>
            <Text>
                {hoveredText}
            </Text>
        </Flex>
    )
}

export default PicnicText;
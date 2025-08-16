import { extendTheme } from '@chakra-ui/react';
import "./fonts.css"

const baseTheme = extendTheme({
    textStyles: {
        bodyText: {
            fontFamily: "TransSansMedium",
            fontSize: "30px",
            fontWeight: 500,
            color: "#0C5B93",
            lineHeight: 1.11,
        },
        emphasisText: {
            fontFamily: "ZTFormom",
            fontSize: "50px",
            fontWeight: 400,
            color: "#0C5B93",
            lineHeight: 1.11,
        },
        subText: {
            fontFamily: "TransSansMedium",
            fontSize: "18px",
            fontWeight: 500,
            color: "#0C5B93",
            lineHeight: 1,
        },
        subEmphasis: {
            fontFamily: "ZTFormom",
            fontSize: "20px",
            fontWeight: 400,
            color: "#0C5B93",
            lineHeight: 1,
        },
        smallBody: {
            fontFamily: "TransSansMedium",
            fontSize: "13px",
            fontWeight: 500,
            color: "#0C5B93",
            lineHeight: 1.35,
        },
        smallEmphasis: {
            fontFamily: "ZTFormom",
            fontSize: "18px",
            fontWeight: 400,
            color: "#0C5B93",
            lineHeight: 1.35,
        },
        ampersandTitle: {
            fontFamily: "Sloop",
            fontSize: "110px",
            fontWeight: 400,
            color: "#0C5B93",
            lineHeight: 1.0,
        },
    },

});

export default baseTheme
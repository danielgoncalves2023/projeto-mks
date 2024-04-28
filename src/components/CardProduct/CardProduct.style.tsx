import { motion } from "framer-motion";
import styled from "styled-components"

export const CardContainer = styled(motion.div)`
        position: relative;
        margin: 0 auto 20px;
        width: 218px;
        height: 285px;
        background-color: white;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        box-sizing: border-box;
        border-radius: 12px;
        
        @media (max-width: 520px) {
            width: 250px;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
            margin: 5px 5px 0;
        }
    `
import React, { useState } from 'react';
import { AccordianWrapper, AccordianHeader, AccordianContent, AccordianTitle} from './AccordianStyles';

const Accordian = ({title, content}) => {
    const [isActive, setIsActive] = useState(false);
    
    return (
        <AccordianWrapper>
            <AccordianHeader onClick={() => setIsActive(!isActive)}>
                <AccordianTitle>{title}</AccordianTitle>
                <AccordianTitle>{isActive ? '▼' : '►'}</AccordianTitle>
            </AccordianHeader>
            {isActive && <AccordianContent>{content}</AccordianContent>}
        </AccordianWrapper>
    );
};

export default Accordian;
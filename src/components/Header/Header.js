import React from 'react'
import {
   Button,
   ButtonsWrapper, 
   HeaderSection,
   Label,
   CurrentButton,
} from "./HeaderStyles.js"


export default function Header() {
   return (
      <HeaderSection>
         <Label> LOGO </Label>
         <ButtonsWrapper>  
            <CurrentButton href="/">LOGIN</CurrentButton>
            <Button href="/details">DETAILS</Button>
         </ButtonsWrapper>
      </HeaderSection>
   );
}


export function HeaderDetails() {
   return (
      <HeaderSection>
         <Label> LOGO </Label>
         <ButtonsWrapper>  
            <Button href="/">LOGOUT</Button>
            <CurrentButton href="/details">DETAILS</CurrentButton>
         </ButtonsWrapper>
      </HeaderSection>
   );
}

// export default {Header, HeaderDetails};

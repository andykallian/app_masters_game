import { useNavigate } from 'react-router-dom';
import { StyledLink } from '../styles/Styles';

function BackButton() {
  const navigate = useNavigate();

  return (
    <>
        <StyledLink
        $width={"70%"}
        $alignself={"center"} 
        $backgroundcolor={"#b22020"}
        $border={"2px solid #b22020"}
        $borderradius={"4px"}
        $color={"#000"}
        $padding={"5px .5rem"}
        $alignitens={"center"}
        $transition={".4s"}
        $textalign={"center"}
        $fontsize={"1.5rem"}
        $margintop={".7rem"}
        onClick={() => navigate(-1)}>

            RETORNAR
        </StyledLink>
    </>
  );
}

export default BackButton;
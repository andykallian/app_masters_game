import { BsJoystick } from 'react-icons/bs';
import { 
    Container, H2, Img, P
} from '../styles/Styles';

const GameWrapper = ({game}) => {
  return (
    <Container $textalign={"center"} $display={"flex"} $flexdirection={"column"} $jusfitycontent={"center"}$alignitems={"center"}>
        
      <Img $width={"100%"} $marginbottom={"1rem"} src={game.thumbnail} alt={game.title}/>
      <H2 $marginbottom={"1rem"} $fontsize={"2rem"}>{game.title}</H2>
      <P $display={"flex"} $alignitems={"center"} $jusfitycontent={"center"} $gap={".4rem"} $marginbottom={"1rem"}><BsJoystick fontSize={"1.5rem"} color={"#b22020"}/> {game.genre}</P>
      
    </Container>
  )
}

export default GameWrapper;
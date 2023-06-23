import { 
  H2,
  Img,
  P,
  StyledGame,
  StyledLink,
  hoverStyles1
} from "../styles/Styles";

const GameCardWrapper = ({game, showLink = true}) => {
  return (
    <StyledGame>
      
      <Img
        $marginbottom={"1rem"}
        $maxwidth={"100%"}
        src={game.thumbnail} 
        alt={game.title}
      />

      <H2
        $marginbottom={"1rem"}
      >{game.title}</H2>

      <P
        $marginbottom={"1rem"}
      >{game.genre}</P>

      {showLink && <StyledLink to={`/app_masters_game/game/${game.id}`}
        $backgroundcolor={"#b22020"}
        $border={"2px solid #b22020"}
        $borderradius={"4px"}
        $color={"#000"}
        $width={`@media screen and (max-width: 940px) { 95vw }`}
        $padding={"1rem .5rem"}
        $alignitens={"center"}
        $transition={".4s"}
        $textalign={"center"}
        $fontweight={"bold"}
        $hover={hoverStyles1}
      >Detalhes</StyledLink>}

    </StyledGame>
  )
}

export default GameCardWrapper;
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchData } from '../actions/fetchData';
// import { PropagateLoader } from 'react-spinners';

// import { AiFillStar } from 'react-icons/ai';
// import { GiConsoleController, GiGameConsole } from 'react-icons/gi';
// import { SiGamejolt } from 'react-icons/si';
// import { BsChatRightText, BsFillCalendarDayFill } from 'react-icons/bs';


// import GameWrapper from '../components/GameWrapper';
// import BackButton from '../components/BackButton';
// import { Container, H3, P } from '../styles/Styles';

// const Game = () => {

//     const { id } = useParams();
//     const [game, setGame] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//     const getGameById = async () => {
//       const data = await fetchData();
//       const selectedGame= data.find(g => g.id == id);
//       setGame(selectedGame);
//       setIsLoading(false);
//     };

//     getGameById();
//     }, [id])

//   return (
//     <Container
//       $color={"#fff"}
//       $display={"flex"}
//       $flexdirection={"column"}
//       $alignitems={"center"}
//       $width={"100%"}
      
//       $margin={`2rem auto @media screen and (max-width: 940px) { margin: 0; }`  }
//       $gap={".5rem"}
//     >
//       {game && ( 
//         <Container $width={`800px; @media screen and (max-width: 940px) { width: 100vw; }`} $display={"flex"}
//           $flexdirection={"column"} $gap={".5rem"}>
//           <GameWrapper game={game} showLink={false}/>

//           <P $textalign={"center"} $fontsize={"1.3rem"} $marginbotton={"2rem"}>{game.tagline}</P>

//           <Container $display={"flex"} $flexdirection={"column"} $alignitems={"center"} $gap={"1rem"}>

//                 <Container>
//                     <H3 $marginbotton={"1rem"} $display={"flex"} $alignitems={"center"} $gap={".5rem"}><AiFillStar fontSize={"1.5rem"} color={"#b22020"} />Produtora: {game.publisher}</H3>
//                 </Container>

//                 <Container>
//                     <H3 $marginbotton={"1rem"} $display={"flex"} $alignitems={"center"} $gap={".5rem"}><SiGamejolt fontSize={"1.5rem"} color={"#b22020"} />Desenvolvedora: {game.developer}</H3>
//                 </Container>

//                 <Container>
//                     <H3 $marginbotton={"1rem"} $display={"flex"} $alignitems={"center"} $gap={".5rem"}><GiGameConsole fontSize={"1.5rem"} color={"#b22020"} />Plataforma: {game.platform}</H3>
//                 </Container>

//                 <Container>
//                     <H3 $marginbotton={"1rem"} $display={"flex"} $alignitems={"flex-start"} $gap={".5rem"} $textalign={"center"}>
//                         <BsChatRightText fontSize={"1.5rem"} color={"#b22020"} alignself={"baseline"} />Descrição: {game.short_description}
//                     </H3>                    
//                 </Container>

//                 <Container>
//                     <H3 $marginbotton={"1rem"} $display={"flex"} $alignitems={"center"} $gap={".5rem"}><BsFillCalendarDayFill fontSize={"1.5rem"} color={"#b22020"}/> Data de Lançamento: {game.release_date}</H3>
//                 </Container>
                
//                 <Container>
//                     <H3 $textalign={`; @media screen and (max-width: 940px) { text-align: center; }`} $marginbotton={"1rem"} $display={"flex"} $alignitems={"center"} $gap={".5rem"}><GiConsoleController fontSize={"1.5rem"} color={"#b22020"}/>Jogar: {game.freetogame_profile_url}</H3>
//                 </Container>
//           </Container>
//           <BackButton />
//         </Container>
//       )}
//     </Container>
//   )
// }

// export default Game;

// // todo: verificar a possibilidade do jogo selecionado ser enviado para o context

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchData } from '../actions/fetchData';
import { PropagateLoader } from 'react-spinners';

import { AiFillStar } from 'react-icons/ai';
import { GiConsoleController, GiGameConsole } from 'react-icons/gi';
import { SiGamejolt } from 'react-icons/si';
import { BsChatRightText, BsFillCalendarDayFill } from 'react-icons/bs';

import GameWrapper from '../components/GameWrapper';
import BackButton from '../components/BackButton';
import { Container, H3, P, StyledLink, hoverStyles1 } from '../styles/Styles';

const Game = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGameById = async () => {
      try {
        const data = await fetchData();
        const selectedGame = data.find((g) => g.id == id);
        setGame(selectedGame);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    getGameById();
  }, [id]);

  const navigate = useNavigate();

  const returnPage = () => {
    navigate(-1);
  };

  return (
    <Container
      $color="#fff"
      $display="flex"
      $flexdirection="column"
      $alignitems="center"
      $width="100%"
      $margin="2rem auto"
      $gap=".5rem"
    >
      {isLoading ? (
        <Container $display="flex" $justifycontent="center">
          <PropagateLoader color="#f6f3f3" />
        </Container>
      ) : error ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '.5rem',
          }}
        >
          <p>{error}</p>
          <StyledLink
            onClick={returnPage}
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
          >
            Voltar paga a página inicial
          </StyledLink>
        </div>
      ) : (
        game && (
          <Container $width="800px" $smallScreenWidth="100%" $display="flex" $flexdirection="column" $gap=".5rem">
            <GameWrapper game={game} showLink={false} />

            <P $textalign="center" $fontsize="1.3rem" $marginbotton="2rem">
              {game.tagline}
            </P>

            <Container $display="flex" $flexdirection="column" $alignitems="center" $gap="1rem">
              <Container>
                <H3 $marginbotton="1rem" $display="flex" $alignitems="center" $gap=".5rem">
                  <AiFillStar fontSize="1.5rem" color="#b22020" />
                  Produtora: {game.publisher}
                </H3>
              </Container>

              <Container>
                <H3 $marginbotton="1rem" $display="flex" $alignitems="center" $gap=".5rem">
                  <SiGamejolt fontSize="1.5rem" color="#b22020" />
                  Desenvolvedora: {game.developer}
                </H3>
              </Container>

              <Container>
                <H3 $marginbotton="1rem" $display="flex" $alignitems="center" $gap=".5rem">
                  <GiGameConsole fontSize="1.5rem" color="#b22020" />
                  Plataforma: {game.platform}
                </H3>
              </Container>

              <Container>
                <H3
                  $marginbotton="1rem"
                  $display="flex"
                  $alignitems="flex-start"
                  $gap=".5rem"
                  $textalign="center"
                >
                  <BsChatRightText fontSize="1.5rem" color="#b22020" alignself="baseline" />
                  Descrição: {game.short_description}
                </H3>
              </Container>

              <Container>
                <H3 $marginbotton="1rem" $display="flex" $alignitems="center" $gap=".5rem">
                  <BsFillCalendarDayFill fontSize="1.5rem" color="#b22020" />
                  Data de Lançamento: {game.release_date}
                </H3>
              </Container>

              <Container>
                <H3
                  $textalign="center"
                  $marginbotton="1rem"
                  $display="flex"
                  $alignitems="center"
                  $gap=".5rem"
                >
                  <GiConsoleController fontSize="1.5rem" color="#b22020" />
                  Jogar: {game.freetogame_profile_url}
                </H3>
              </Container>
            </Container>
            <BackButton />
          </Container>
        )
      )}
    </Container>
  );
};

export default Game;
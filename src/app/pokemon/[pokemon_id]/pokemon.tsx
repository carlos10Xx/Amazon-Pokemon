import Pokemon from "@/model/pokemon";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Row, Col, Container, Image } from 'react-bootstrap';


type Props ={
   pokemon: Pokemon;
}


export default function PokemonComponent(props : Props) {
   const {pokemon} = props;


   return (
       <Container>
           <Row className="justify-content-md-center">
               <Col md="auto"><h1>{pokemon.pokemonName}</h1></Col>
           </Row>
           <Row>
               <Col>
                   <Image src={pokemon.mainImage} thumbnail />
               </Col>
               <Col>
                   Pokémon Properties
               </Col>
           </Row>
       </Container>
   );
   function ContextualExample() {
  return (
    <div>
      <ProgressBar variant="success" now={40} />
      <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger" now={80} />
    </div>
  );
}

}


import styled from "@emotion/styled";
import CriptosImage from "./assets/img/imagen-criptos.png";
import Form from "./components/Form";
import { useEffect, useState } from "react";

const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`;

const Heading = styled.h1`
    font-family: 'Lato', sans-serif;
    color: #FFF;
    text-align: center;
    font-weight: 700;
    margin-top: 80px;
    margin-bottom: 50px;
    font-size: 34px;

    &::after {
        content: '';
        width: 100px;
        height: 6px;
        background-color: #66A2FE;
        display: block;
        margin: 10px auto 0 auto;
    }
`;

const Image = styled.img`
    max-width: 400px;
    width: 80%;
    margin: 100px auto 0 auto;
    display: block;
`;

function App() {
    /* ----- State ----- */
    const [coins_info, setCoinsInfo] = useState({});

    /* ----- Hooks ----- */
    useEffect(() => {
        if (!Object.keys(coins_info).length) {
            return;
        }

        console.log(coins_info);
    }, [coins_info]);

    return (
        <Container>
            <Image
                src={CriptosImage}
                alt="Imagen de criptomonedas"
            />

            <div>
                <Heading>Cotiza Criptomonedas al Instante</Heading>

                <Form setCoinsInfo={setCoinsInfo} />
            </div>
        </Container>
    );
}

export default App;
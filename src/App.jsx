import styled from "@emotion/styled";
import CryptosImage from "./assets/img/imagen-criptos.png";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import CryptoInfo from "./components/CryptoInfo";

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
    const [coins, setCoins] = useState({ currency: '', crypto: '' });
    const [crypto_data, setCryptoData] = useState({});

    /* ----- Hooks ----- */
    useEffect(() => {
        if (Object.values(coins).includes('')) {
            return;
        }

        getCryptoData();
    }, [coins]);

    /**
     *  Get info from API with specific currency and crypto.
     */
    const getCryptoData = async () => {
        const { currency, crypto } = coins;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${currency}&tsyms=${crypto}`;

        const response = await fetch(url);
        const data = await response.json();

        // console.log(data.DISPLAY.USD.BTC);
        setCryptoData(data.DISPLAY[currency][crypto]);
        // console.log(data.DISPLAY[currency][crypto]);
    };

    return (
        <Container>
            <Image
                src={CryptosImage}
                alt="Imagen de criptomonedas"
            />

            <div>
                <Heading>
                    Cotiza Criptomonedas al Instante
                </Heading>

                <Form setCoins={setCoins} />

                {crypto_data.PRICE && <CryptoInfo data={crypto_data}/>}
            </div>
        </Container>
    );
}

export default App;
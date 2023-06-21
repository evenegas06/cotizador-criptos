import styled from "@emotion/styled";
import useSelectCurrency from "../hooks/useSelectCurrency";
import { CURRENCIES } from "../data/currencies";
import { useEffect, useState } from "react";
import Error from "./Error";

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 8px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`;

const API_URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

const Form = ({ setCoins }) => {
    /* ----- States ----- */
    const [cryptos, setCryptos] = useState([]);
    const [error, setError] = useState(false);

    /* ----- Custom Hooks ----- */
    const [currency, SelectCurrency] = useSelectCurrency('Elige tu moneda', CURRENCIES);
    const [crypto, SelectCrypto] = useSelectCurrency('Elige tu Criptomoneda', cryptos);

    /* ----- Hooks ----- */
    useEffect(() => {
        getData();
    }, []);

    /**
     * Get info from API
     */
    const getData = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();

        const array_cryptos = data.Data.map((item) => {
            const obj = {
                id: item.CoinInfo.Name,
                name: item.CoinInfo.FullName
            };
            return obj;
        });

        setCryptos(array_cryptos);
    };

    /**
     *  Validate selects elements and update error and coins states.
     * 
     * @param {Object} event 
     */
    const onSubmit = (event) => {
        event.preventDefault();

        if ([currency, crypto].includes('')) {
            setError(true);
            return;
        }

        setError(false);
        setCoins({
            currency,
            crypto
        });
    };

    return (
        <>
            {error && <Error>Todos los campos son obligatorios 😾</Error>}
            <form onSubmit={onSubmit}>
                <SelectCurrency />

                <SelectCrypto />

                <InputSubmit
                    type="submit"
                    value="Cotizar"
                />
            </form>
        </>
    );
};
export default Form;
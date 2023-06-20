import styled from "@emotion/styled";
import useSelectCurrency from "../hooks/useSelectCurrency";
import { CURRENCIES } from "../data/currencies";

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

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`;

const Form = () => {

    const [SelectCurrency] = useSelectCurrency('Elige tu moneda', CURRENCIES);

    return (
        <form>
            <SelectCurrency />

            <InputSubmit
                type="submit"
                value="Cotizar"
            />
        </form>
    );
};
export default Form;
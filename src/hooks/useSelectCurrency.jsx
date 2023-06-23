import styled from "@emotion/styled";
import { useState } from "react";

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`;

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`;

/**
 * Custom hook - Return the state value for the *select* element and its *jsx* representation.
 * 
 * @param {string} label Label for the *select* element.
 * @param {array} currencies Array of objects with currency id and name. `[{ id: 'USD', name: 'Dollar' } ]`
 *  
 * @returns {array} [ state, selectCurrency ]
 */
const useSelectCurrency = (label, currencies) => {
    /* ----- State ----- */
    const [state, setState] = useState('');

    /**
     * Select *jsx* element.
     * 
     * @returns {React.JSX.Element}
     */
    const SelectCurrency = () => {
        return (
            <>
                <Label>{label}</Label>

                <Select
                    value={state}
                    onChange={(event) => { setState(event.target.value); }}
                >
                    <option value="">Seleccione...</option>

                    {currencies.map((item) => {
                        return (
                            <option
                                key={item.id}
                                value={item.id}
                            >
                                {item.name}
                            </option>
                        );
                    })}
                </Select>
            </>
        );
    };

    return [state, SelectCurrency];
};
export default useSelectCurrency;
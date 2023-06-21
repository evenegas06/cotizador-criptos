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
 * 
 * @param {*} label 
 * @returns 
 */
const useSelectCurrency = (label, currencies) => {
    /* ----- State ----- */
    const [state, setState] = useState('');

    /**
     * 
     * @returns 
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
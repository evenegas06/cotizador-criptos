import styled from "@emotion/styled";

const Label = styled.label`
    color: #FFF;
`;

/**
 * 
 * @param {*} label 
 * @returns 
 */
const useSelectCurrency = (label, currencies) => {
    /**
     * 
     * @returns 
     */
    const SelectCurrency = () => {
        return (
            <>
                <Label>{label}</Label>

                <select>
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
                </select>
            </>
        );
    };

    return [SelectCurrency];
};
export default useSelectCurrency;
import styled from "@emotion/styled";

const Container = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 30px;
`;

const Text = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`;

const Price = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`;

const Image = styled.img`
    display: block;
    width: 120px;
`;

const CryptoInfo = ({ data }) => {
    const {
        PRICE,
        HIGHDAY,
        LOWDAY,
        CHANGEPCT24HOUR,
        IMAGEURL,
        LASTUPDATE
    } = data;

    return (
        <Container>
            <Image
                src={`https://cryptocompare.com${IMAGEURL}`}
                alt="Image crypto"
            />

            <div>
                <Price>
                    El precio es de: <span>{PRICE}</span>
                </Price>

                <Text>
                    El precio más alto del día: <span>{HIGHDAY}</span>
                </Text>

                <Text>
                    El precio más bajo del día: <span>{LOWDAY}</span>
                </Text>

                <Text>
                    Variación en las últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
                </Text>

                <Text>
                    Última actualización: <span>{LASTUPDATE}</span>
                </Text>
            </div>
        </Container>
    );
};
export default CryptoInfo;
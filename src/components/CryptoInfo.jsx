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
        <div>
            <p>
                El precio es de: <span>{PRICE}</span>
            </p>
            
            <p>
                El precio más alto del día: <span>{HIGHDAY}</span>
            </p>
            
            <p>
                El precio más bajo del día: <span>{LOWDAY}</span>
            </p>
            
            <p>
                Variación en las últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
            </p>
            
            <p>
                Última actualización: <span>{LASTUPDATE}</span>
            </p>
        </div>
    );
};
export default CryptoInfo;
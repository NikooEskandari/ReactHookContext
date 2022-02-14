import { useContext } from "react";
import { AppContext } from '../layout/Main';

const Results = () => {
    return <div className="selections-div">
        <div>Youe selected Markets:</div>
        <div>
            <ResultContent />
        </div>
    </div>;
}

export default Results;

const ResultContent = (props) => {
    const market = useContext(AppContext);

    const selectedOptions = Object.keys(market).map(function(key) {
        if (market[key][1] === true) {
            return <div> { market[key][0] } </div>;
        }
    });

    return selectedOptions;
}
import { useState, createContext, useContext } from "react";
import { AppContext } from '../layout/Main';

const Selection = () => {
    return <div className="selections-div">
        <div>Market</div>
        <div>
            <SelectionContent params={{'title': 'Market'
            , 'options': [['Toronto', false], ['Montreal', false], ['Vancouver', false], ['Calgary', false]]}} />
        </div>
    </div>;
}

export default Selection;

const SelectionContent = (props) => {

    const [market, setMarket] = useContext(AppContext);
    let params = props.params;

    const handleChecked = (event) => {

        let targetValue = event.target.value;
        let targetChecked = event.target.checked;

        setMarket(market => {
            const updatedMarket = Object.keys(market).map(function(key) {
                if (market[key][0] === targetValue) {
                    market[key][1] = targetChecked;
                }

                return market[key];
            });

            return updatedMarket;
        });

    }

    const Options = Object.keys(params.options).map(function(key) {
        return <div><input type="checkbox" key={key} value={ params.options[key][0] }
               id={ params.options[key][0] }
               onChange={handleChecked} />{ params.options[key][0] }</div>;
    });

    return Options;
}

import "./Main.css";
import Selection from '../selections/Selection';
import Results from '../results/Results';
import { createContext, useState } from 'react';

export const AppContext = createContext([[], () => {}]);

const Main = () => {

    const [market, setMarket] = useState([['Toronto', false], ['Montreal', false], ['Vancouver', false], ['Calgary', false]]);

    return <div className="container">
        <div className="row">
            <div className="selections-container">
                <AppContext.Provider value={[market, setMarket]}>
                    <Selection />
                </AppContext.Provider>        
            </div>
            <div className="results-container">
                <AppContext.Provider value={market}>
                    <Results />
                </AppContext.Provider>        
            </div>
        </div>
    </div>;
}

export default Main;


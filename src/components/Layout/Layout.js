import React from 'react';
import { Route } from 'react-router-dom';
import FirstStep from '../FirstStep/FirstStep';
import PageShell from '../PageShell/PageShell';
import SecondStep from '../SecondStep/SecondStep';
import ThirdStep from '../ThirdStep/ThirdStep';
import FourthStep from '../FourthStep/FourthStep';

const layout = () => {

    return (
        <div className="page">
            <Route path="/" exact render={PageShell(FirstStep)} />  
            <Route path="/quem-e-voce" exact render={PageShell(SecondStep)} />  
            <Route path="/quantas-familias-felizes" exact render={PageShell(ThirdStep)} />  
            <Route path="/quando-foi" exact render={PageShell(FourthStep)} />  
        </div>
    )
}

export default layout;
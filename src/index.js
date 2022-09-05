import React from 'react';
import GlobalStyle from './globalstyle';
import { Landing } from './landing';

export const App=()=>
{
    return(
        <>
        <GlobalStyle/>
        <Landing/>
        </>
    )
}

// ReactDOM.render(<App />, document.getElementById("app"));
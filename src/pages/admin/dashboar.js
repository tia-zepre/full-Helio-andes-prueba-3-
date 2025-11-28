import React from 'react';
import NavBarPrincipal from './components/navbar';
import Sidemenu from './components/sidemenu';
import Kpis from './components/kpis';

function Dashboard() {
    return (
        <div>
            <NavBarPrincipal/>
            <Sidemenu/>
            <Kpis/>
        </div>
    );
}

export default Dashboard;
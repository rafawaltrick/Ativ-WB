import { BrowserRouter } from "react-router-dom";
import BarraNavegacao from "./componentes/barraNavegacao";
import  AppRoutes  from "./componentes/Routes";

export const App = () => {
    return (
        <BrowserRouter>
            <BarraNavegacao tema="purple lighten-4" botoes={['TOP-Clientes', 'Cadastros','Produtos','Servicos','Clientes','Consumos']}/>
            <AppRoutes />
        </BrowserRouter>
    );
}



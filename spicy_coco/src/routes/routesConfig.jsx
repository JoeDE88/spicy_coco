import CartaPage from "../pages/CartaPage";
import HomePage from "../pages/HomePage";
import QuienPage from "../pages/QuienPage";

export const routesConfig = [
    {
        name: "HomePage",
        path: "/",
        component: <HomePage/>
    },
    {
        name: "Descrip",
        path: "quien-soy",
        component: <QuienPage/>
    },
    {
        name: "Carta",
        path: "carta",
        component: <CartaPage/>
    }
]
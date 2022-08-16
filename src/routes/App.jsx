import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {
    routesEnum
} from "../constants/routesEnum";
import {
    Home,
    NotFound
} from '../pages';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routesEnum.HOME} element={<Home />} />
                <Route path={routesEnum.NOT_FOUND} element={<NotFound />} />
            </Routes>
        </BrowserRouter >
    );
}

export default App;

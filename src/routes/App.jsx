import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {
    routesEnum
} from "../constants/routesEnum";
import {
    Home
} from '../pages';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routesEnum.HOME} element={<Home />} />
            </Routes>
        </BrowserRouter >
    );
}

export default App;

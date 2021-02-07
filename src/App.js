import { BrowserRouter as Router } from "react-router-dom";
import routerConfig from './router/index.js';
import RouterView, { Provider as RouterProvider } from './router/renderRouter';
function App () {
    return (
        <Router>
            <RouterProvider value={{config:routerConfig}} >
                <RouterView />
            </RouterProvider>
        </Router >
    );
}

export default App;

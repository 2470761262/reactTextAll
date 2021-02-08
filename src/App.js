import { BrowserRouter as Router } from "react-router-dom";
import routerConfig from './router/index.js';
import RouterView, { Provider as RouterProvider } from './router/renderRouter';
import { Provider } from 'react-redux';
import store from './store/index';
function App () {
    return (
        <Router>
            <RouterProvider value={{ config: routerConfig }} >
                <Provider store={store}>
                    <RouterView />
                </Provider>
            </RouterProvider>
        </Router >
    );
}

export default App;

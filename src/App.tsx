import { Suspense } from "react";
import { Provider } from 'react-redux';
import store from './store/index';
import { HashRouter } from 'react-router-dom';
import RouteElement from './router';

//HashRouter下组件懒加载需要配合Suspense
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Suspense>
          <RouteElement />
        </Suspense>
      </HashRouter>
    </Provider>
  )
}

export default App

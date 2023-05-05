import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import AgeConfirmationModal from './components/AgeConfirmationModal';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <AgeConfirmationModal />
          <AppRoutes />
        </Router>
      </div>
    </Provider>
  );
}

export default App;

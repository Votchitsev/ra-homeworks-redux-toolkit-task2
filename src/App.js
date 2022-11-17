import './App.css';
import ProfilePhoto from './components/ProfilePhoto/ProfilePhoto';
import PhotoContainer from './components/PhotoContainer/PhotoContainer';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux toolkit homework (task 2)</h1>
        <div className='wrapper'>
          <ProfilePhoto />
          <PhotoContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import MainPage from './Components/MainPage';
import AfterSubscribe from './Components/AfterSubscribe';
import iconList from './icon-list.svg';

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);
  };

  const handleDismiss = () => {
    setIsSubscribed(false);
  };

  return (
    <div>
      {isSubscribed ? (
        <AfterSubscribe onDismiss={handleDismiss} />
      ) : (
        <MainPage onSubscribe={handleSubscribe} />
      )}
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailBody from './EmailBody';

function App() {
  return (
    <div className="App">
      <EmailBody senderName='Anonymous' receiverName='Sir'/>
    </div>
  );
}

export default App;

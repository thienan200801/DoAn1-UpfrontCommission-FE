import './App.css';
import BrokerDetails from './pages/BrokerDetails/BrokerDetails';
import IdentityNumber from './pages/IdentityNumber/IdentityNumber';
import Login from './pages/Login/Login.jsx';
import Welcome from './pages/Welcome/Welcome.jsx';
import ConfirmApplication from './pages/ConfirmApplication/ConfirmApplication.jsx';
import ApplicationDetails from './pages/ApplicationDetails/ApplicationDetails.jsx';
import FormSuccess from './pages/FormSuccess/FormSuccess.jsx';
import ApplicationDetailsWCommission from './pages/ApplicationDetailsWCommission/ApplicationDetailsWCommission.jsx';
import SomethingWentWrong from './components/SomethingWentWrong/SomethingWentWrong';

function App() {
  return (
    <>
      {/* <SomethingWentWrong /> */}
      {/* <ApplicationDetailsWCommission /> */}
      {/* <FormSuccess /> */}
      {/* <ApplicationDetails /> */}
      {/* <BrokerDetails /> */}
      {/* <IdentityNumber /> */}
      {/* <Login /> */}
      {/* <Welcome /> */}
      <ConfirmApplication />
    </>
  );
}

export default App;

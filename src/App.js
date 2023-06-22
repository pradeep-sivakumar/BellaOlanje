import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import FoodAppBanner from './components/FoodAppBanner/FoodAppBanner'
import AccountSetup from './components/AccountSetup/AccountSetup';
import AppDownload from './components/AppDownload/AppDownload'

function App() {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* food order app */}
      <FoodAppBanner />

      {/* App Working */}
      <AccountSetup />

      {/* App Dowloading */}
      <AppDownload />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;

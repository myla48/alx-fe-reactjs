import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}
function App() {
  return (
    <>
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
    </>
  );
}
export default App;

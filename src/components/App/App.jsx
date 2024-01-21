import HomePage from "../../pages/HomePage/HomePage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./App.module.scss"

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;

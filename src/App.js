import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import BannerText from "./components/BannerText/BannerText";
import Blog from "./components/Blog/Blog";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Header></Header>
      <Hero></Hero>
      <Services></Services>
      <Banner></Banner>
      <BannerText></BannerText>
      <Blog></Blog>
      <Footer></Footer>
    </main>
  );
}

export default App;

import logo from "../../assets/logo.svg";
import bigPhoto from "../../assets/illustration-dashboard.png";
import Form from "../../components/Form";
import SocialSection from "../../components/SocialSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <main className="App">
      <div className="logo">
        <img src={logo} alt="ping" className="ping" />
      </div>
      <div className="pt-2">
        <h1>
          We are launching <span>soon!</span>
        </h1>
        <p className="subscribe">Subscribe and get notified</p>
      </div>
      <Form />
      <img src={bigPhoto} alt="illustration" className="big-photo" />
      <ToastContainer />
      <SocialSection />
      <footer>
        <small>&copy; Copywrites Ping. All rights reserved.</small>
      </footer>
    </main>
  );
}

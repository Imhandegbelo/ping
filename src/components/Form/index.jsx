import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState(false)

  function errorCheck() {
    // checks if email matches and returns true or false
    if (email === "") return "empty";
    if (!/^([a-z0-9_\-.]+)@([a-z0-9_\-.]+)\.([a-z]{2,5})$/i.test(email)) {
      setError(true);
      return false;
    } else if (/^([a-z0-9_\-.]+)@([a-z0-9_\-.]+)\.([a-z]{2,5})$/i.test(email)) {
      return true;
    }
  }

  const notifySuccess = () =>
    toast.success("We will keep in touch...", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    function timeOut(str) {
      setTimeout((str) => {
        di
      }, 5000);
    }

  function handleSubmit(event) {
    event.preventDefault();
    if (errorCheck() === "empty") {
      setEmail(email);
      setEmpty(true);
      toast.warn("You forgot your email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (errorCheck()) {
      notifySuccess();
      setEmail("");
      setError(false);
    } else {
      toast.error("Please enter a valid email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          name="email"
          id="email"
          style={{ "border-color": error ? "red" : "grey" }}
          value={email}
          placeholder="Your email address..."
          onChange={(e) => setEmail(e.target.value)}
          formNoValidate={true}
        />
        <div className="error_container desktopHidden">
          {/* {empty && (
            <small className="error desktopHidden">
              <i>Whoops! It looks like you forgot to add your email</i>
            </small>
          )} */}
          {error && (
            <small className="error desktopHidden">
              <i>Please provide a valid email address</i>
            </small>
          )}
        </div>
        <button className="btn">Notify Me</button>
      </form>
      <div className="error_container mobileHidden">
        {/* {empty && (
          <small className="error mobileHidden">
            <i>Whoops! It looks like you forgot to add your email</i>
          </small>
        )} */}
        {error && (
          <small className="error mobileHidden">
            <i>Please provide a valid email address</i>
          </small>
        )}
      </div>
    </>
  );
}

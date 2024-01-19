import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

function Question() {
    const navigate = useNavigate();
  const nextPage = () => {
    const serviceId = "service_inucfrf";
    const templateId = "template_ms885im";
    const publicKey = "ReZZjiwtdvZ7bBWPH";

    const templateParams = {
      from_name: "Your Queen",
      from_email: "preciousxavier096@gmail.com",
      to_name: "Youuuuu",
      message: "Yes, I want to be your girlfriend!",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log(response);
        navigate("/yes!");
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };

  const moveButton = () => {
    const noButton = document.getElementById("noButton");
    if (noButton) {
      const x = Math.random() * (window.innerWidth - noButton.offsetWidth) - 85;
      const y =
        Math.random() * (window.innerHeight - noButton.offsetHeight) - 48;

      noButton.style.left = `${x}px`;
      noButton.style.top = `${y}px`;
    }
  };

  return (
    <div className="container">
      <div>
        <h1 className="header_text">Hey Love ❤️</h1>
        <p className="desc_text">Will you be my girlfriend?</p>
      </div>
      <div className="gif_container">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
          alt="Cute animated illustration"
        />
      </div>
      <div className="buttons">
        <button className="btn" id="yesButton" onClick={nextPage}>
          Yes
        </button>
        <button
          className="btn"
          id="noButton"
          onMouseOver={moveButton}
          onClick={moveButton}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default Question;

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    let templateParams = {
      name: document.getElementById("userName").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("userEmail").value,
      message: document.getElementById("message").value,
    };
    if (!templateParams.name) return alert("성함을 입력해주세요");
    if (!templateParams.email) return alert("메일을 입력해주세요");
    if (!templateParams.message) return alert("메일 본문을 입력해주세요");

    emailjs
      .sendForm(
        "service_3suz5b8",
        "template_lctllas",
        form.current,
        "DjTFzTKBO3anEGS1j"
      )
      .then(
        (result) => {
          console.log("Success!", result.status, result.text);
          alert("메일을 성공적으로 보냈습니다.");
        },
        (error) => {
          console.log("Failed...", error);
          alert(
            "메일을 전송하는데 실패했습니다.\n" +
              "livingsnow@gmail.com 으로 메일을 보내주세요"
          );
        }
      );
  };

  return (
    <section id="contact" className="section">
      <div className="section-title">
        <h2>contact</h2>
        <p>
          페이지 내에서 저에게 메일을 보내주실 수 있습니다. <br />
          채용이나 궁금한 점이 있으시면 메일을 보내주세요.
        </p>
      </div>

      <div className="section__wrapper contact__wrapper">
        <div className="contact__form">
          <form
            ref={form}
            onSubmit={sendEmail}
            id="contact-form"
            className="contact__form"
          >
            <input
              type="text"
              className="input"
              name="user_name"
              id="userName"
              placeholder=" 성함 (필수)"
            />
            <input
              type="text"
              className="input"
              id="phone"
              placeholder=" 연락처 (생략 가능)"
            />
            <br />
            <input
              type="text"
              className="input"
              name="user_email"
              id="userEmail"
              placeholder="  메일 주소를 입력해주세요 (필수)"
            />
            <br />
            <textarea
              id="message"
              name="message"
              className="input"
              rows="5"
              placeholder=" 내용을 입력해주세요 (필수)"
            ></textarea>
            <br />
            <input
              type="submit"
              id="btn"
              className="contact__form-sendBtn"
              value="Send"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

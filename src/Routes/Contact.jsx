import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <div>
      <h1>Get in touch!</h1>
      <p>
        form to submit/maybe email? can also just put my socials and my email
        here/my resume
      </p>
    </div>
  );
}

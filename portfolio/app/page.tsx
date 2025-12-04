"use client";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPopupVisible(true);
    setTimeout(() => setPopupVisible(false), 3000);
    e.currentTarget.reset();
  };

  return (
    <>
      <header>
        <h1>DaPocoLoco Inc.</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About me</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-text">
          <p>Hello, I’m Melvin,</p>
          <h2>
            Digital Product
            <br />
            Designer
          </h2>
          <p>Turning ideas into seamless interfaces</p>
          <button className="learn-btn">Learn More</button>
        </div>

        <Image
          src="/naysu34.jpg"
          alt="Melvin Photo"
          width={400}
          height={400}
        />
      </section>


      <section id="about">
        <h2>About me.</h2>
        <p>
          Hi, I’m Melvin, a UX/UI designer with a strong interest in creating
          seamless, user-friendly interfaces. I enjoy working at the
          intersection of design and problem-solving, using tools like Figma and
          prototyping methods to turn concepts into experiences users love. What
          excites me most is seeing how thoughtful design can improve people’s
          everyday lives.
        </p>
        <p>
          Focused on developing technical knowledge and practical experience
          through projects and collaboration. Learned to adapt, communicate, and
          grow as a team player.
        </p>
        <p>
          Continuing my journey of growth through hands-on experience, constant
          learning, and building projects that reflect both creativity and
          functionality.
        </p>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <p>
          Over the past few years, I've worked on projects that combine
          usability, creativity, and business goals. Each experience shaped the
          way I approach design—balancing aesthetics with functionality.
        </p>

        <div className="experience-images">
          <Image src="/13.png" alt="Work 1" width={350} height={350} />
          <Image src="/14.png" alt="Work 2" width={350} height={350} />
        </div>

        <div className="exp-text">
          <div className="exp-item">
            <h4>Background</h4>
            <p>
              My background in design/IT-related field has given me the
              foundation to create human-centered solutions. From wireframes to
              polished interfaces, I focus on delivering clear and impactful
              designs.
            </p>
          </div>

          <div className="exp-item">
            <h4>Career Path</h4>
            <p>
              Design for me is not just a career—it’s a way to connect with
              people. My professional story reflects my commitment to crafting
              digital experiences that users find both functional and enjoyable.
            </p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact</h2>

        <Image src="/naysu23.jpg" alt="Melvin" width={300} height={300} />

        <p>
          I’m always excited to collaborate on meaningful projects that blend
          creativity and functionality. Feel free to reach out and let’s create
          something impactful together.
        </p>

        <div className="contact-info">
          <p>📧 insecthashira1@gmail.com</p>
          <p>📧 waterhashira2@gmail.com</p>
          <p>📞 +1 (555) 123-4567</p>
        </div>

        <div className="form-container">
          <h3>Feel Free To Message Me!</h3>
          <form id="contactForm" onSubmit={handleSubmit}>
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
            <input type="text" placeholder="Suffix" />
            <input type="text" placeholder="Gender" />
            <input type="text" placeholder="Pronoun" />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="+63" required />
            <textarea placeholder="Message" />
            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {popupVisible && <div className="message-popup">Message Sent ✅</div>}
    </>
  );
}

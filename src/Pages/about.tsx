function AboutPage() {
  return (
    <div className="grid grid-rows-[0.5fr_1fr] md:grid-rows-none md:grid-cols-[1.5fr_1fr] p-8 gap-6 pb-10 pt-28">
      <div className="about-page gap-6">
        <h1 className="about-head">
          A little bit <span className="about-me">about me .</span>
        </h1>
        <p className="pt-6 md:mr-48">
          I’m a student currently pursuing a bachelors in computer science &
          engineering at GEC Palakkad. I’m a self taught developer who loves to
          build things that actually matters!
        </p>
        <br />
        <p>
          Honestly, I love what I do. And this site is a product of my passion
          :D
        </p>

        <h2 className="about-subheadings">Contacts</h2>
        <p>
          <a
            className="underline underline-offset-4"
            href="https://instagram.com/ranger_nf"
          >
            ranger_nf on Instagram
          </a>{" "}
          <span className="about-side-note ">(preferred)</span>
          <br />
          <span>or message me on LinkedIn</span>
        </p>

        <h2 className="about-subheadings">About this site</h2>
        <p>
          The design of this site was heavily inspired by:
          <br />
          <br />
          <a
            className="underline underline-offset-4"
            href="https://wandixu.com/"
            target="_blank"
          >
            wandixu.com
          </a>{" "}
          <span className="about-side-note">(She built a masterpiece!)</span>
          <br />
          <a
            className="underline underline-offset-4"
            href="https://scalzodesign.be/"
            target="_blank"
          >
            scalzodesign.be
          </a>{" "}
          <span className="about-side-note">(Again, a goated site)</span>
          <br />
        </p>
      </div>
      <div className="overflow-hidden rounded-xl">
        <img
          src="/fahads-photo.jpg"
          loading="lazy"
          alt="Fahad's Potrait photo"
          draggable={false}
        />
      </div>
    </div>
  );
}

export default AboutPage;

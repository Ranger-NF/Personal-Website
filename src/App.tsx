import "./App.css";
import NavLinks from "./components/navLinks";
import Tagline from "./components/tagline";
import PageDirectButton from "./components/pageDirects";
import MobileMenu from "./components/mobileMenu";
import TextTransition from "./components/transitionText";

function App() {
  return (
    <div className="grid grid-rows-3 m-8 w-full">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="hidden md:block md:fixed right-0 bottom-0 min-w-full min-h-full -z-5"
        src="noodle.webm"
      />

      <div className="flex flex-row justify-between">
        <img src="logo.png" width={50} height={50} className="h-12 w-12" />
        <div className="md:hidden p-3">
          <MobileMenu />
        </div>

        <div className="page-directs hidden md:flex h-max items-center gap-16">
          {/* <a>about</a> */}
          <a href="www.linkedin.com/in/just-fahad/">linkedin</a>
          <PageDirectButton text="github" link="https://github.com/Ranger-NF" />
        </div>
      </div>

      {/* Mobile view */}
      <div className="flex md:hidden flex-col">
        <Tagline text="BASED IN KERALA, INDIA" />
        <div className="main-contents gap-2 pt-3 pb-3">
          <TextTransition styleName="name-role-text" text="M. FAHAD" />
          <TextTransition
            styleName="adjective"
            text="THOUGHT-DRIVEN"
            delay={400}
          />
          <TextTransition
            styleName="name-role-text"
            text="DEVELOPER."
            delay={400}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Tagline text="B.TECH CSE STUDENT" />
          <Tagline text="FULL STACK DEVELOPER" />
        </div>
      </div>

      {/* Laptop view */}
      <div className="main-content hidden md:block max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex items-center gap-4">
          <TextTransition styleName="name-role-text" text="MOHAMMED FAHAD" />
          <div className="flex items-center">
            <Tagline text="BASED IN KERALA, INDIA" />
          </div>
        </div>

        {/* Middle and bottom sections with two-column layout */}
        <div className="flex">
          {/* Left column with stacked items aligned to the left */}
          <div className="flex flex-col gap-2 w-2/5">
            <div className="whitespace-nowrap">
              <Tagline text="B.TECH CSE STUDENT" />
              <Tagline text="FULL STACK DEVELOPER" />
            </div>
          </div>

          {/* Right column */}
          <div className="w-3/5 lap-content ">
            <div className="whitespace-nowrap">
              <TextTransition
                styleName="adjective"
                text="THOUGHT-DRIVEN"
                delay={400}
              />
            </div>
            <TextTransition
              styleName="name-role-text"
              text="DEVELOPER."
              delay={400}
            />
          </div>
        </div>
      </div>

      <div className="hidden flex-col justify-end gap-3">
        <NavLinks
          indexNum="01"
          text="Projects"
          link="https://foss.gecskp.ac.in/"
        />
        <NavLinks
          indexNum="02"
          text="Blogs"
          link="https://foss.gecskp.ac.in/"
        />
        <NavLinks
          indexNum="03"
          text="Links"
          link="https://foss.gecskp.ac.in/"
        />
      </div>
      <div className="flex justify-center pt-6 font-light text-xs items-end">
        MADE WITH 💭 BY FAHAD
      </div>
    </div>
  );
}

export default App;

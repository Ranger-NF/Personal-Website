import MobileMenu from "../components/mobileMenu";
import PageDirectButton from "../components/pageDirects";
import ProjectItem from "../components/projectItem";

const ProjectsListPage: React.FC = () => {
  return (
    <div className="grid grid-rows-3 m-8 w-full">
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

      <div className="grid w-full h-full">
        <ProjectItem
          indexNum="01"
          projectTags={["Game Development"]}
          projectName="BlastOff"
        />
      </div>
    </div>
  );
};

export default ProjectsListPage;

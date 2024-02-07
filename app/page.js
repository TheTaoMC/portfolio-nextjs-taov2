import AppAbout from "./components/about/AppAbout";
import AppCertification from "./components/certification/AppCertification";
import AppEducation from "./components/education/AppEducation";
import AppExperience from "./components/experience/AppExperience";
import AppHeader from "./components/header/AppHeader";
import AppProject from "./components/project/AppProject";
import AppSkills from "./components/skills/AppSkills";
import AppWork from "./components/work/AppWork";

function page() {
  return (
    <>
      <AppHeader />
      <AppAbout />
      <AppSkills />
      <AppEducation />
      <AppExperience />
      <AppProject />
      <AppCertification />
    </>
  );
}

export default page;

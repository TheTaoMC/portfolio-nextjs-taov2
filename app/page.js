import AppAbout from "./components/about/page";
import AppCertification from "./components/certification/page";
import AppEducation from "./components/education/page";
import AppExperience from "./components/experience/page";
import AppHeader from "./components/header/page";
import AppProject from "./components/project/page";
import AppSkills from "./components/skills/page";


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

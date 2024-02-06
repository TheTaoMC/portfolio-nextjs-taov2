import AppAbout from "./components/about/AppAbout";
import AppHeader from "./components/header/AppHeader";
import AppWork from "./components/work/AppWork";

function page() {
  return (
    <>
      <AppHeader />
      <AppAbout />
      <AppWork />
    </>
  );
}

export default page;

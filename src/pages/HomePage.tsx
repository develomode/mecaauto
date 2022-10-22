// Shared component
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

// views
import HeadView from "../components/views/HeadView";
import Separator from "../components/views/Separator";
import Services from "../components/views/Services";
import Cars from "../components/views/Cars";
import Adress from "../components/views/Adress";
import Contact from "../components/views/Contact";
import More from "../components/views/More";

export default function HomePage() {
  return (
    <main className="">
      <Header />
      <HeadView />
      <Separator />
      <Services />
      <Cars />
      <Adress />
      <Contact />
      <Footer />
    </main>
  );
}

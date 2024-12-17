import ContactMe from "./ContactMe";
import FooterNavBar from "./FooterNavBar"

function Footer() {
  return (
    <footer>
      {/* Footer container */}
      <div className="max-w-screen-lg flex flex-col mx-auto pt-16 pb-16 justify-center items-center space-y-20">
        <ContactMe />
        <FooterNavBar />
        
      </div>
    </footer>
  );
}

export default Footer;

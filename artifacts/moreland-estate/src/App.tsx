import { useState } from 'react';
import { Building2, FileSearch, Handshake, Coins } from 'lucide-react';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const image = (file: string) => `${base}/images/${file}`;

const serviceLinks = [
  { text: 'Block Management', href: 'https://www.morelandestate.co.uk/block-management/' },
  { text: 'Services Charges', href: 'https://www.morelandestate.co.uk/services-charges/' },
  { text: 'Maintenance & Insurance', href: 'https://www.morelandestate.co.uk/maintenance/' },
  { text: 'Company Secretary', href: 'https://www.morelandestate.co.uk/company-secretary/' },
];

const valuePoints = [
  { label: 'Transparency', Icon: Handshake },
  { label: 'Comprehensive', Icon: FileSearch },
  { label: 'Professional', Icon: Building2 },
  { label: 'No hidden costs', Icon: Coins },
];

const services = [
  {
    title: 'OUR SERVICES',
    text: 'We offer landlords and management companies a comprehensive list of property management services and provide bespoke advice on a wide spectrum of matters. Additionally, we provide tenants with an effortless and reliable service and all our properties and blocks are managed in the most efficient and effective manner at a reasonable and realistic service charge.',
    image: 'service-main.jpg',
    alt: 'Business people home sales broker is using a pen pointing to the house',
  },
  {
    title: 'FREEHOLD MANAGEMENT',
    text: 'We focus on all aspects of freehold management from collecting ground rents to day to day reactive buildings maintenance as well as insuring properties to ensure we add value to the properties and deliver creative property solutions. We also work together with clients advising on the sale of their investments including introducing potential buyers and potential funders.',
    image: 'victorian-houses.jpg',
    alt: 'Victorian houses in Notting Hill in London.',
  },
  {
    title: 'ANCILLARY SERVICES',
    text: 'Other ancillary services include advising residential and commercial developers in respect of lease design and value maximisation for both landlord and tenant.',
    image: 'luxury-apartments.jpg',
    alt: 'Luxury apartment buildings in a wealthy neighborhood of London, England, UK',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <a href="#content" className="skip-link" data-testid="link-skip-content">Skip to content</a>
      <header className="site-header" data-testid="site-header">
        <div className="header-inner">
          <a className="brand" href="/" aria-label="Moreland Estate Management home" data-testid="link-home-logo">
            <img src={image('logo-header.png')} alt="Moreland Estate Management" />
          </a>
          <div className={`mobile-backdrop ${menuOpen ? 'is-open' : ''}`} onClick={closeMenu} aria-hidden="true" />
          <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation" data-testid="main-navigation">
            <a className="mobile-nav-logo" href="/" onClick={closeMenu} data-testid="link-mobile-logo">
              <img src={image('logo.png')} alt="Moreland Estate Management" />
            </a>
            <button className="menu-close" type="button" aria-label="Close navigation" onClick={closeMenu} data-testid="button-close-menu">×</button>
            <div className="nav-item">
              <a className="nav-link active" href="/" onClick={closeMenu} data-testid="link-nav-home">Home</a>
            </div>
            <div className="nav-item">
              <a className="nav-link" href="https://www.morelandestate.co.uk/about/" onClick={closeMenu} data-testid="link-nav-about">About</a>
            </div>
            <div className={`nav-item ${servicesOpen ? 'dropdown-open' : ''}`}>
              <a className="nav-link" href="#" aria-haspopup="true" aria-expanded={servicesOpen} onClick={(event) => { event.preventDefault(); setServicesOpen((open) => !open); }} data-testid="link-nav-services">
                Services <span className="nav-chevron" aria-hidden="true">⌄</span>
              </a>
              <div className="dropdown" data-testid="menu-services">
                {serviceLinks.map((link, index) => (
                  <a key={link.href} href={link.href} onClick={closeMenu} data-testid={`link-service-menu-${index}`}>{link.text}</a>
                ))}
              </div>
            </div>
            <div className="nav-item">
              <a className="nav-link" href="https://www.morelandestate.co.uk/downloads/" onClick={closeMenu} data-testid="link-nav-downloads">Downloads</a>
            </div>
            <div className="nav-item">
              <a className="nav-link" href="https://dunphyschartered.fixflo.com/issuereport/CreateIssue" onClick={closeMenu} data-testid="link-nav-report-issue">Report an issue</a>
            </div>
            <div className="nav-item">
              <a className="nav-link" href="https://www.morelandestate.co.uk/contact/" onClick={closeMenu} data-testid="link-nav-contact">Contact</a>
            </div>
          </nav>
          <a className="login-link" href="https://www.clientreport.co.uk/57012818/tenant/tenantlogin.php" data-testid="link-login">LOGIN</a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-menu-toggle"
          >☰</button>
        </div>
      </header>

      <main id="content">
        <section className="hero" aria-label="Managing Blocks & Estates of Residential Flats" data-testid="section-hero">
          <div className="hero-content">
            <h1>Managing Blocks &amp; Estates of Residential Flats</h1>
            <p>Moreland estate management</p>
          </div>
          <img className="hero-globe" src={image('globe.png')} alt="" aria-hidden="true" />
        </section>

        <section className="values" aria-labelledby="why-heading" data-testid="section-value-points">
          <h2 className="section-heading" id="why-heading"><span>Why</span><span>Choose Us</span></h2>
          <div className="value-list">
            {valuePoints.map(({ label, Icon }, index) => (
              <article className="value-item" key={label} data-testid={`value-point-${index}`}>
                <span className="value-icon"><Icon aria-hidden="true" /></span>
                <h3>{label}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="about" aria-labelledby="about-heading" data-testid="section-about">
          <div className="about-wrap">
            <div className="about-copy">
              <h2 className="section-heading" id="about-heading"><span>Moreland</span><span>Estate Mangement</span></h2>
              <p>Moreland Estate Management is a privately owned residential property management company. With many years experience together with a depth of knowledge and wealth of expertise, we believe that we are the specialists in our field of property management.</p>
            </div>
            <div className="about-side" aria-hidden="true">
              <img src={image('london-aerial.jpg')} alt="" />
            </div>
          </div>
        </section>

        <section className="services" aria-labelledby="services-heading" data-testid="section-services">
          <h2 className="section-heading" id="services-heading"><span>Our</span><span>Services</span></h2>
          <div className="service-list">
            {services.map((service, index) => (
              <article className="service-row" key={service.title} data-testid={`service-block-${index}`}>
                <div className="service-image">
                  <img src={image(service.image)} alt={service.alt} data-testid={`image-service-${index}`} />
                </div>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer data-testid="site-footer">
        <section className="contact-banner" aria-label="Contact Moreland Estate Management" data-testid="section-contact-callout">
          <h2>Get in touch today!</h2>
        </section>
        <div className="footer-main">
          <div className="footer-inner">
            <div className="office-grid">
              <section className="office" data-testid="office-london">
                <h3>LONDON OFFICE</h3>
                <div className="office-row"><h4>Address:</h4><p>5 Sentinel Square<br />Hendon, London, NW4 2EL</p></div>
                <div className="office-row"><h4><a href="mailto:mail@morelandestate.co.uk" data-testid="link-email-london">Email</a></h4><p><a href="mailto:mail@morelandestate.co.uk">mail@morelandestate.co.uk</a></p></div>
                <div className="office-row"><h4>Phone</h4><p><a href="tel:02070434260" data-testid="link-phone-london">020 7043 4260</a></p></div>
              </section>
              <section className="office" data-testid="office-hounslow">
                <h3>HOUNSLOW OFFICE</h3>
                <div className="office-row"><h4>Address:</h4><p>First Floor<br />York House,<br />Montague Road, Hounslow,<br />Middlesex TW3 1JZ</p></div>
                <div className="office-row"><h4><a href="mailto:mail@morelandestate.co.uk" data-testid="link-email-hounslow">Email</a></h4><p><a href="mailto:mail@morelandestate.co.uk">mail@morelandestate.co.uk</a></p></div>
                <div className="office-row"><h4>Phone</h4><p><a href="tel:02070434260" data-testid="link-phone-hounslow">020 7043 4260</a></p></div>
              </section>
              <section className="accreditation" data-testid="section-accreditation">
                <h3>ACCREDITATION</h3>
                <img src={image('accreditation.jpg')} alt="The Property Ombudsman and TSI Approved Code Trading Standards UK" data-testid="image-accreditation" />
              </section>
            </div>
            <p className="copyright" data-testid="text-copyright">Copyright 2022, Techdesign. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, UserCheck, Clock, Users, MapPin, Navigation, Map } from 'lucide-react';
import VehicleCard from '../components/VehicleCard';
import TourPackageCard from '../components/TourPackageCard';
import AttractionCard from '../components/AttractionCard';
import TripPricingCard from '../components/TripPricingCard';
import { generateWhatsAppLink } from '../utils';
import { useSEO } from '../hooks/useSEO';

const bgImages = [
  '/images/hero_banner.jpg',
  '/images/tirupati_temple.jpg',
  '/images/srisailam_dam.jpg',
  '/images/yadagirigutta_temple.jpg'
];

const Home = () => {
  useSEO(
    'Shiva Shakti Travels | Srisailam Tours & Cabs from Hyderabad',
    'Book reliable outstation travel, cabs, and Srisailam pilgrimage tour packages from Hyderabad. Travel comfortably with Shiva Shakti Travels.'
  );

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Section 1: Hero Banner (Turie Inspired) */}
      <section style={{ 
        position: 'relative', 
        minHeight: '80vh', 
        display: 'flex', 
        alignItems: 'center',
        padding: '6rem 0',
        color: 'var(--white)',
        overflow: 'hidden'
      }}>
        {/* Fading Background Images */}
        {bgImages.map((img, index) => (
          <div 
            key={img} 
            style={{ 
              position: 'absolute', 
              top: 0, left: 0, right: 0, bottom: 0, 
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentBg === index ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              zIndex: 0
            }} 
          />
        ))}
        {/* Dark Overlay for Text Readability */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(26, 31, 41, 0.5)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid grid-2 items-center" style={{ gap: '2rem' }}>
            <div style={{ paddingRight: '2rem' }} data-aos="fade-right">
              <span className="font-cursive hero-subtitle">
                Tour & Travel
              </span>
              <h1 className="hero-title">
                Where will your <br className="d-none-mobile"/> Journey go.
              </h1>
              <p className="hero-text">
                Exotic Journeys Crafted by Experts. Experience a peaceful and comfortable journey to Tirupati, Srisailam, and Yadagirigutta with Shiva Shakti Travels.
              </p>
              <Link to="/about" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                Get to Know Us
              </Link>
            </div>

            {/* Turie Style Booking Form Overlapping */}
            <div className="booking-form-card" data-aos="fade-left" style={{ 
              backgroundColor: 'var(--white)', 
              padding: '2.5rem', 
              borderRadius: '16px', 
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
              color: 'var(--dark-navy)'
            }}>
              <p style={{ color: 'var(--secondary-text)', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: '500' }}>Used by pilgrims globally</p>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--dark-navy)' }}>Plan Your Spiritual Trip</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary-orange)' }}>
                    <MapPin size={20} />
                  </div>
                  <select className="form-control" style={{ paddingLeft: '3rem', backgroundColor: '#f5f5f5', border: 'none', appearance: 'none' }}>
                    <option>Where to?</option>
                    <option>Tirupati</option>
                    <option>Srisailam</option>
                    <option>Yadagirigutta</option>
                  </select>
                </div>
                
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary-orange)' }}>
                    <Map size={20} />
                  </div>
                  <select className="form-control" style={{ paddingLeft: '3rem', backgroundColor: '#f5f5f5', border: 'none', appearance: 'none' }}>
                    <option>Trip Type (One Day)</option>
                    <option>Two Days</option>
                    <option>Custom Tour</option>
                  </select>
                </div>

                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary-orange)' }}>
                    <Users size={20} />
                  </div>
                  <select className="form-control" style={{ paddingLeft: '3rem', backgroundColor: '#f5f5f5', border: 'none', appearance: 'none' }}>
                    <option>Select Vehicle</option>
                    <option>Swift Dzire (4+1 Seater)</option>
                    <option>Toyota Etios (4+1 Seater)</option>
                    <option>Maruti Ertiga (6+1 Seater)</option>
                    <option>Innova Crysta (7+1 Seater)</option>
                  </select>
                </div>
                
                <a href={generateWhatsAppLink("Hello Shiva Shakti Travels! I am interested in booking a trip to Srisailam.")} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }}>
                  Check Availability
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Popular Routes & Pricing */}
      <section className="section" style={{ backgroundColor: 'var(--alt-bg)' }}>
        <div className="container">
          <div className="section-title-wrapper" data-aos="fade-up">
            <span className="section-subtitle">Top Routes</span>
            <h2>Popular Destinations & Pricing</h2>
          </div>
          
          <div className="grid grid-3">
            <div data-aos="fade-up" data-aos-delay="100">
              <TripPricingCard 
                destination="Tirupati" 
                dzirePrice="₹18,000" 
                ertigaPrice="₹22,000" 
                image="/images/tirupati_temple.jpg" 
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <TripPricingCard 
                destination="Srisailam" 
                dzirePrice="₹8,000" 
                ertigaPrice="₹12,000" 
                image="/images/srisailam_temple.jpg" 
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <TripPricingCard 
                destination="Yadagirigutta & Swarnagiri" 
                dzirePrice="₹4,500" 
                ertigaPrice="₹5,500" 
                image="/images/yadagirigutta_temple.jpg" 
              />
            </div>
          </div>
          
          <div data-aos="fade-up" style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: 'var(--light-orange)', borderRadius: '12px', textAlign: 'center', border: '1px dashed var(--primary-orange)' }}>
            <p style={{ color: 'var(--dark-navy)', fontSize: '0.9rem' }}>
              <strong>*Important Note:</strong> These are reference prices for round trips from Hyderabad. Final fares, availability, tolls, parking, driver allowance, and other applicable charges must be confirmed with the agency before booking.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Our Vehicle Fleet */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="section-title-wrapper" data-aos="fade-up">
            <span className="section-subtitle">Our Fleet</span>
            <h2>Travel in Comfort</h2>
          </div>
          
          <div className="grid grid-2" style={{ maxWidth: '1000px', margin: '0 auto', gap: '3rem' }}>
            <div data-aos="fade-up" data-aos-delay="100">
              <VehicleCard name="Swift Dzire" seating="4+1" referencePrice="Enquire Tariff" image="/images/swift.png" />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <VehicleCard name="Maruti Ertiga" seating="6+1" referencePrice="Enquire Tariff" image="/images/maruti.webp" />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <VehicleCard name="Toyota Etios" seating="4+1" referencePrice="Enquire Tariff" image="/images/toyoto.png" />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <VehicleCard name="Innova Crysta" seating="7+1" referencePrice="Enquire Tariff" image="/images/innova.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Destinations / Features */}
      <section className="section" style={{ backgroundColor: 'var(--alt-bg)' }}>
        <div className="container">
          <div className="section-title-wrapper" data-aos="fade-up">
            <span className="section-subtitle">Top Categories</span>
            <h2>Travel With Confidence</h2>
          </div>
          
          <div className="grid grid-4 text-center">
            <div className="card hover-border-card" data-aos="fade-up" data-aos-delay="100" style={{ padding: '3rem 2rem', borderBottom: '3px solid transparent' }}>
              <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', backgroundColor: 'var(--light-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} className="icon-box">
                <ShieldCheck size={40} color="var(--primary-orange)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', margin: '0 0 1rem 0', fontWeight: '700' }}>Safe & Comfortable</h3>
              <p style={{ color: 'var(--secondary-text)' }}>Travel comfortably with well-maintained vehicles.</p>
            </div>
            
            <div className="card hover-border-card" data-aos="fade-up" data-aos-delay="200" style={{ padding: '3rem 2rem', borderBottom: '3px solid transparent' }}>
              <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', backgroundColor: 'var(--light-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} className="icon-box">
                <UserCheck size={40} color="var(--primary-orange)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', margin: '0 0 1rem 0', fontWeight: '700' }}>Expert Drivers</h3>
              <p style={{ color: 'var(--secondary-text)' }}>Enjoy your trip with experienced professionals.</p>
            </div>
            
            <div className="card hover-border-card" data-aos="fade-up" data-aos-delay="300" style={{ padding: '3rem 2rem', borderBottom: '3px solid transparent' }}>
              <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', backgroundColor: 'var(--light-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} className="icon-box">
                <Clock size={40} color="var(--primary-orange)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', margin: '0 0 1rem 0', fontWeight: '700' }}>On-Time Pickup</h3>
              <p style={{ color: 'var(--secondary-text)' }}>Convenient arrangements tailored to you.</p>
            </div>
            
            <div className="card hover-border-card" data-aos="fade-up" data-aos-delay="400" style={{ padding: '3rem 2rem', borderBottom: '3px solid transparent' }}>
              <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', backgroundColor: 'var(--light-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} className="icon-box">
                <Users size={40} color="var(--primary-orange)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', margin: '0 0 1rem 0', fontWeight: '700' }}>Family Travel</h3>
              <p style={{ color: 'var(--secondary-text)' }}>Options for families, devotees, and groups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Featured Tour Package */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="section-title-wrapper" data-aos="fade-up">
            <span className="section-subtitle">Srisailam Tour Special</span>
            <h2>Hyderabad → Srisailam</h2>
            <p style={{ color: 'var(--secondary-text)', fontSize: '1.125rem', maxWidth: '700px', margin: '1rem auto 0' }}>
              Seek the blessings of Sri Mallikarjuna Swamy Jyotirlinga and Sri Bhramarambika Devi while exploring the famous temples.
            </p>
          </div>
          
          <div className="grid grid-2" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div data-aos="fade-up" data-aos-delay="100">
              <TourPackageCard 
                title="One-Day Srisailam Tour"
                features={[
                  "Hyderabad to Srisailam and back.",
                  "Temple darshan and sightseeing.",
                  "Comfortable vehicle.",
                  "Pickup and drop-off arrangements."
                ]}
                whatsappMessage="Hello Shiva Shakti Travels! I am interested in the One-Day Srisailam tour. Please share the itinerary, available dates, and final price."
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <TourPackageCard 
                title="Two-Day Srisailam Tour"
                features={[
                  "Explore major Srisailam attractions.",
                  "More time for temple visits and sightseeing.",
                  "Stay and return the following day.",
                  "Pickup and drop-off arrangements."
                ]}
                whatsappMessage="Hello Shiva Shakti Travels! I am interested in the Two-Day Srisailam tour. Please share the itinerary, available dates, and final price."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Srisailam Tourist Attractions */}
      <section className="section" style={{ backgroundColor: 'var(--alt-bg)' }}>
        <div className="container">
          <div className="section-title-wrapper" data-aos="fade-up">
            <span className="section-subtitle">Popular Destinations</span>
            <h2>Sacred Sites to Explore</h2>
          </div>
          
          <div className="grid grid-4" style={{ gap: '2rem' }}>
            <div data-aos="fade-up" data-aos-delay="100">
              <AttractionCard name="Tirupati" description="The majestic abode of Lord Venkateswara." image="/images/tirupati_temple.jpg" />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <AttractionCard name="Srisailam" description="Home to the sacred Sri Mallikarjuna Swamy Jyotirlingam." image="/images/srisailam_temple.jpg" />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <AttractionCard name="Yadagirigutta" description="The grand Sri Lakshmi Narasimha Swamy Temple." image="/images/yadagirigutta_temple.jpg" />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <AttractionCard name="Swarnagiri" description="The beautiful Swarnagiri Temple complex." image="/images/Sree-Venkateswara-Swamy-Devasthanam-Swarnagiri-20.jpg" />
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: '4rem' }}>
            <Link to="/services" className="btn btn-outline">View More Attractions</Link>
          </div>
        </div>
      </section>

      {/* Section 7: Customer Trust & Final CTA */}
      <section className="section" style={{ backgroundColor: 'var(--primary-orange)', color: 'var(--white)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }} data-aos="zoom-in">
          <span className="font-cursive" style={{ color: 'var(--dark-navy)', fontSize: '3rem' }}>Ready to travel?</span>
          <h2 style={{ fontSize: '3.5rem', color: 'var(--white)', marginBottom: '1.5rem' }}>Your Next Journey Awaits</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.9 }}>
            Planning a Srisailam pilgrimage or a family trip? Contact Shiva Shakti Travels to discuss your travel requirements.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
              Book Your Trip
            </Link>
          </div>
        </div>
      </section>
      <style>{`
        .icon-box:hover {
          background-color: var(--primary-orange) !important;
        }
        .icon-box:hover svg {
          stroke: white !important;
        }
        .hover-border-card:hover {
          border-bottom: 3px solid var(--primary-orange) !important;
        }
        .hero-subtitle {
          color: var(--accent-saffron);
          font-size: 2.5rem;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
          display: block;
        }
        .hero-title {
          font-size: 3.25rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: var(--white);
          font-weight: 800;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        .hero-text {
          font-size: 1.25rem;
          color: #f0f0f0;
          margin-bottom: 2.5rem;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }
        @media (max-width: 768px) {
          .d-none-mobile { display: none !important; }
          .hero-title {
            font-size: 2.25rem !important;
          }
          .hero-subtitle {
            font-size: 2rem !important;
          }
          .hero-text {
            font-size: 1.125rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;

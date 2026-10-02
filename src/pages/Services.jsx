import React from 'react';
import VehicleCard from '../components/VehicleCard';
import TourPackageCard from '../components/TourPackageCard';
import ServiceCard from '../components/ServiceCard';
import TripPricingCard from '../components/TripPricingCard';
import { generateWhatsAppLink } from '../utils';
import { useSEO } from '../hooks/useSEO';

const Services = () => {
  useSEO(
    'Our Services & Tour Packages | Shiva Shakti Travels',
    'Explore our travel packages, one-day round trips, multi-day tours to Srisailam, Tirupati, Yadagirigutta, and outstation taxi services.'
  );

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        padding: '8rem 0 6rem',
        backgroundImage: 'linear-gradient(rgba(49, 48, 65, 0.6), rgba(49, 48, 65, 0.8)), url(/images/srisailam_temple.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'var(--white)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }} data-aos="zoom-in">
          <span className="font-cursive hero-subtitle">What we offer</span>
          <h1 className="hero-title">Our Services</h1>
          <p className="hero-text">
            Comprehensive travel solutions for pilgrims, families, and outstation travelers.
          </p>
        </div>
      </section>

      {/* Srisailam Tours */}
      <section className="section" style={{ backgroundColor: 'var(--alt-bg)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }} data-aos="fade-up">
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-orange)' }}>Srisailam Pilgrimage Tours</h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--primary-orange)', margin: '0 auto 1.5rem', borderRadius: '2px' }}></div>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary-text)', maxWidth: '800px', margin: '0 auto' }}>
              Plan a spiritual journey to Srisailam and visit Sri Mallikarjuna Swamy Jyotirlingam, Sri Bhramarambika Devi Temple, and other popular attractions.
            </p>
          </div>

          <div className="grid grid-2" style={{ maxWidth: '1000px', margin: '0 auto 3rem' }}>
            <TourPackageCard 
              title="One-Day Srisailam Tour"
              features={[
                "Hyderabad to Srisailam and back.",
                "Temple darshan and sightseeing.",
                "Comfortable vehicle.",
                "Pickup and drop-off arrangements."
              ]}
              whatsappMessage="Hello Shiva Shakti Travels! I am interested in the One-Day Srisailam tour. Please share the itinerary, available dates, and final price."
              ctaText="Enquire About One-Day Tour"
            />
            <TourPackageCard 
              title="Two-Day Srisailam Tour"
              features={[
                "Explore major Srisailam attractions.",
                "More time for temple visits and sightseeing.",
                "Stay and return the following day, subject to the selected itinerary.",
                "Pickup and drop-off arrangements."
              ]}
              whatsappMessage="Hello Shiva Shakti Travels! I am interested in the Two-Day Srisailam tour. Please share the itinerary, available dates, and final price."
              ctaText="Enquire About Two-Day Tour"
            />
          </div>
          
          <div className="text-center">
            <a href={generateWhatsAppLink("Hello Shiva Shakti Travels! I want to enquire about customized Srisailam tours.")} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Enquire About Custom Srisailam Tours
            </a>
          </div>
        </div>
      </section>

      {/* Tour Pricing */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-subtitle" style={{ display: 'block', fontFamily: 'var(--font-cursive)', color: 'var(--primary-orange)', fontSize: '2rem', marginBottom: '0.5rem' }}>Popular Routes</span>
            <h2 style={{ fontSize: '2.5rem' }}>Our Top Destinations & Pricing</h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--primary-orange)', margin: '0 auto 1.5rem', borderRadius: '2px' }}></div>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary-text)', maxWidth: '800px', margin: '0 auto' }}>
              Choose from our well-maintained fleet for a comfortable journey to these sacred destinations. Local & Outstation travel also available!
            </p>
          </div>

          <div className="grid grid-3" style={{ marginBottom: '3rem' }}>
            <TripPricingCard 
              destination="Tirupati" 
              dzirePrice="₹18,000" 
              ertigaPrice="₹22,000" 
              image="/images/tirupati_temple.jpg" 
            />
            <TripPricingCard 
              destination="Srisailam" 
              dzirePrice="₹8,000" 
              ertigaPrice="₹12,000" 
              image="/images/srisailam_temple.jpg" 
            />
            <TripPricingCard 
              destination="Yadagirigutta & Swarnagiri" 
              dzirePrice="₹4,500" 
              ertigaPrice="₹5,500" 
              image="/images/yadagirigutta_temple.jpg" 
            />
          </div>

          <div style={{ padding: '1.5rem', backgroundColor: 'var(--main-bg)', borderRadius: '0.5rem', textAlign: 'center', border: '1px solid #E5E7EB' }}>
            <p style={{ color: 'var(--dark-navy)', fontSize: '0.875rem', fontWeight: '500' }}>
              <strong>*Important Note:</strong> All fares shown are indicative reference prices for trips from Hyderabad in Swift Dzire (4+1) and Ertiga (6+1) vehicles. Please confirm the final quotation, vehicle availability, tolls, parking, driver allowance, and any additional charges with Shiva Shakti Travels before confirming your booking.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vehicle Fleet */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }} data-aos="fade-up">
            <span className="section-subtitle" style={{ display: 'block', fontFamily: 'var(--font-cursive)', color: 'var(--primary-orange)', fontSize: '2rem', marginBottom: '0.5rem' }}>Our Fleet</span>
            <h2 style={{ fontSize: '2.5rem' }}>Travel in Comfort</h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--primary-orange)', margin: '0 auto 1.5rem', borderRadius: '2px' }}></div>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary-text)', maxWidth: '800px', margin: '0 auto' }}>
              We maintain a modern fleet of well-serviced vehicles ensuring a safe and comfortable journey for families and groups.
            </p>
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

      {/* Other Travel Services */}
      <section className="section" style={{ backgroundColor: 'var(--alt-bg)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }} data-aos="fade-up">
            <h2 style={{ fontSize: '2.5rem' }}>Other Travel Services</h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--primary-orange)', margin: '0 auto', borderRadius: '2px' }}></div>
          </div>

          <div className="grid grid-3">
            <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--dark-navy)' }}>One-Day Round Trips</h3>
              <p style={{ color: 'var(--secondary-text)', marginBottom: '1.5rem', flexGrow: 1 }}>
                Travel from Hyderabad to your destination and return on the same day, subject to the agreed itinerary and travel schedule.
              </p>
              <a href={generateWhatsAppLink("Hello Shiva Shakti Travels! I want to plan a One-Day Round Trip.")} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%' }}>
                Plan a One-Day Trip
              </a>
            </div>

            <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--dark-navy)' }}>Two-Day Tour Packages</h3>
              <p style={{ color: 'var(--secondary-text)', marginBottom: '1.5rem', flexGrow: 1 }}>
                Explore your destination at a more relaxed pace with an itinerary arranged around your sightseeing and travel requirements.
              </p>
              <a href={generateWhatsAppLink("Hello Shiva Shakti Travels! I want to enquire about Two-Day Packages.")} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%' }}>
                Enquire About Two-Day Packages
              </a>
            </div>

            <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--dark-navy)' }}>Family and Group Tours</h3>
              <p style={{ color: 'var(--secondary-text)', marginBottom: '1.5rem', flexGrow: 1 }}>
                Plan convenient journeys for families, friends, and groups with a vehicle option suitable for your travel party.
              </p>
              <a href={generateWhatsAppLink("Hello Shiva Shakti Travels! I want to plan a Group Trip.")} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%' }}>
                Plan a Group Trip
              </a>
            </div>

            <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--dark-navy)' }}>Outstation Travel</h3>
              <p style={{ color: 'var(--secondary-text)', marginBottom: '1.5rem', flexGrow: 1 }}>
                Arrange intercity and outstation travel for personal trips, family visits, and sightseeing.
              </p>
              <a href={generateWhatsAppLink("Hello Shiva Shakti Travels! I want to enquire about Outstation Travel.")} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%' }}>
                Enquire About Outstation Travel
              </a>
            </div>

            <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--dark-navy)' }}>Temple Sightseeing</h3>
              <p style={{ color: 'var(--secondary-text)', marginBottom: '1.5rem', flexGrow: 1 }}>
                Arrange visits to temples and nearby attractions based on your preferred schedule and available travel time.
              </p>
              <a href={generateWhatsAppLink("Hello Shiva Shakti Travels! I want to plan Temple Visits.")} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%' }}>
                Plan Temple Visits
              </a>
            </div>

            <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', border: '2px solid var(--primary-orange)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-orange)' }}>Customized Travel Packages</h3>
              <p style={{ color: 'var(--secondary-text)', marginBottom: '1.5rem', flexGrow: 1 }}>
                Discuss your destination, number of travelers, travel dates, and preferred vehicle to plan a suitable trip.
              </p>
              <a href={generateWhatsAppLink("Hello Shiva Shakti Travels! I want to Customize My Trip.")} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                Customize My Trip
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

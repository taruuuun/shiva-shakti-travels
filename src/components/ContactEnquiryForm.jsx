import React, { useState } from 'react';
import { generateWhatsAppLink } from '../utils';

const ContactEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    destination: '',
    travelDate: '',
    returnDate: '',
    travelers: '',
    vehicle: '',
    tripType: '',
    pickupLocation: '',
    requirements: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10,15}$/.test(formData.mobile.replace(/[-+()\s]/g, ''))) {
      newErrors.mobile = 'Please enter a valid mobile number';
    }
    if (!formData.destination.trim()) newErrors.destination = 'Destination is required';
    if (!formData.travelDate) newErrors.travelDate = 'Travel date is required';
    if (!formData.travelers) newErrors.travelers = 'Number of travelers is required';
    if (!formData.vehicle) newErrors.vehicle = 'Preferred vehicle is required';
    if (!formData.tripType) newErrors.tripType = 'Trip type is required';
    if (!formData.pickupLocation.trim()) newErrors.pickupLocation = 'Pickup location is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const message = `Hello Shiva Shakti Travels,
I would like to enquire about a trip.

Name: ${formData.name}
Mobile: ${formData.mobile}
Destination: ${formData.destination}
Travel Date: ${formData.travelDate}
Return Date: ${formData.returnDate || 'N/A'}
Travelers: ${formData.travelers}
Vehicle: ${formData.vehicle}
Trip Type: ${formData.tripType}
Pickup Location: ${formData.pickupLocation}
Additional Requirements: ${formData.requirements || 'None'}

Please share the availability and final quotation. Thank you.`;

      const link = generateWhatsAppLink(message);
      
      try {
        window.open(link, '_blank', 'noopener,noreferrer');
      } catch (err) {
        alert("We couldn't open WhatsApp automatically. Please make sure pop-ups are allowed or contact us directly.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: 'var(--white)', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center', color: 'var(--primary-orange)' }}>Travel Enquiry</h3>
      
      <div className="grid grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">Full Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="John Doe" />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>
        
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">Mobile Number *</label>
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="form-control" placeholder="+91 XXXXX XXXXX" />
          {errors.mobile && <p className="error-text">{errors.mobile}</p>}
        </div>
      </div>

      <div className="grid grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">Destination *</label>
          <input type="text" name="destination" value={formData.destination} onChange={handleChange} className="form-control" placeholder="e.g. Srisailam" />
          {errors.destination && <p className="error-text">{errors.destination}</p>}
        </div>

        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">Trip Type *</label>
          <select name="tripType" value={formData.tripType} onChange={handleChange} className="form-control">
            <option value="">Select Trip Type</option>
            <option value="One Day">One Day</option>
            <option value="Two Days">Two Days</option>
            <option value="Outstation">Outstation</option>
            <option value="Customized">Customized</option>
          </select>
          {errors.tripType && <p className="error-text">{errors.tripType}</p>}
        </div>
      </div>

      <div className="grid grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">Travel Date *</label>
          <input type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} className="form-control" />
          {errors.travelDate && <p className="error-text">{errors.travelDate}</p>}
        </div>

        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">Return Date (Optional)</label>
          <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} className="form-control" />
        </div>
      </div>

      <div className="grid grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">Number of Travelers *</label>
          <input type="number" name="travelers" value={formData.travelers} onChange={handleChange} min="1" className="form-control" placeholder="e.g. 4" />
          {errors.travelers && <p className="error-text">{errors.travelers}</p>}
        </div>

        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">Preferred Vehicle *</label>
          <select name="vehicle" value={formData.vehicle} onChange={handleChange} className="form-control">
            <option value="">Select Vehicle</option>
            <option value="Swift Dzire">Swift Dzire (4+1)</option>
            <option value="Maruti Ertiga">Maruti Ertiga (6+1)</option>
            <option value="Toyota Innova">Toyota Innova (7+1)</option>
            <option value="Innova Crysta">Innova Crysta</option>
            <option value="Not Sure">Not Sure / Suggest Me</option>
          </select>
          {errors.vehicle && <p className="error-text">{errors.vehicle}</p>}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Pickup Location *</label>
        <input type="text" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} className="form-control" placeholder="e.g. Secunderabad Station, Hyderabad" />
        {errors.pickupLocation && <p className="error-text">{errors.pickupLocation}</p>}
      </div>

      <div className="form-group">
        <label className="form-label">Additional Requirements</label>
        <textarea name="requirements" value={formData.requirements} onChange={handleChange} rows="3" className="form-control" placeholder="Any specific stops, preferences, or questions?"></textarea>
      </div>

      <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.125rem', padding: '1rem' }}>
        Submit Enquiry via WhatsApp
      </button>
      
      <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--secondary-text)', marginTop: '1rem' }}>
        Clicking submit will open WhatsApp with your pre-filled enquiry.
      </p>
    </form>
  );
};

export default ContactEnquiryForm;

import { useState } from 'react';
import './registration.css';

const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        ageGroup: 'U14',
        experience: 'Beginner',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration Submitted:', formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <section className="registration-success">
                <div className="container text-center">
                    <div className="glass-card success-card">
                        <i className="fas fa-check-circle success-icon"></i>
                        <h2 className="gold-gradient-text">Registration Received!</h2>
                        <p>Welcome to the family. Our coaching staff will review your application and contact you within 48 hours for the next steps.</p>
                        <button className="btn btn-primary" onClick={() => setSubmitted(false)} style={{ marginTop: '30px' }}>Register Another Player</button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="gold-gradient-text">Join The Academy</h1>
                    <p style={{ maxWidth: '600px', margin: '15px auto' }}>Are you ready to elevate your game? Fill out the form below to start your journey with Demora.</p>
                </div>
            </section>

            <section className="registration-form-section">
                <div className="container">
                    <div className="registration-grid">
                        <div className="form-info">
                            <h2 className="text-gold">Why Join <span className="text-white">Demora?</span></h2>
                            <ul className="benefits-list">
                                <li>
                                    <i className="fas fa-star text-gold"></i>
                                    <div>
                                        <h4>Elite Coaching</h4>
                                        <p>Learn from former professional players and FIBA certified coaches.</p>
                                    </div>
                                </li>
                                <li>
                                    <i className="fas fa-trophy text-gold"></i>
                                    <div>
                                        <h4>National Exposure</h4>
                                        <p>Compete in top-tier youth leagues and showcase tournaments.</p>
                                    </div>
                                </li>
                                <li>
                                    <i className="fas fa-dumbbell text-gold"></i>
                                    <div>
                                        <h4>Holistic Development</h4>
                                        <p>Combining skill work with physical conditioning and game IQ.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="glass-card registration-card">
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>

                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Age Group</label>
                                        <select name="ageGroup" value={formData.ageGroup} onChange={handleChange}>
                                            <option value="U12">U12 Development</option>
                                            <option value="U14">U14 Elite</option>
                                            <option value="U16">U16 Premier</option>
                                            <option value="U18">U18 Pro-Prep</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Experience Level</label>
                                        <select name="experience" value={formData.experience} onChange={handleChange}>
                                            <option value="Beginner">Beginner</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Advanced">Advanced / Elite</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Additional Information (Optional)</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} rows="4"></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary w-100" style={{ marginTop: '20px' }}>Submit Registration</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Registration;

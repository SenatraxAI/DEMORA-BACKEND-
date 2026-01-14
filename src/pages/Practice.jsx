import './practice.css';

const SESSIONS = [
    { day: 'Monday', time: '6:00 - 8:00 PM', squad: 'U16 / U18 Elite', location: 'Vipers Den Arena (Main Court)', focus: 'Tactical Execution' },
    { day: 'Tuesday', time: '5:30 - 7:30 PM', squad: 'U12 / U14 Development', location: 'Vipers Den Arena (Practice Court)', focus: 'Skill Fundamentals' },
    { day: 'Wednesday', time: '6:00 - 8:00 PM', squad: 'U16 / U18 Elite', location: 'Vipers Den Arena (Main Court)', focus: 'Strength & Conditioning' },
    { day: 'Thursday', time: '5:30 - 7:30 PM', squad: 'U12 / U14 Development', location: 'Vipers Den Arena (Practice Court)', focus: 'Game IQ' },
    { day: 'Friday', time: '6:00 - 8:00 PM', squad: 'Elite Skills (All Ages)', location: 'Vipers Den Arena (Main Court)', focus: 'Pure Shooting' },
];

const Practice = () => {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="gold-gradient-text">Training Schedule</h1>
                    <p style={{ maxWidth: '600px', margin: '15px auto' }}>Elite preparation for future champions. Consistency is the key to legacy.</p>
                </div>
            </section>

            <section className="practice-section">
                <div className="container">
                    <div className="practice-grid">
                        {SESSIONS.map((session, index) => (
                            <div key={index} className="practice-card glass-card">
                                <div className="practice-day text-gold">{session.day}</div>
                                <div className="practice-time">{session.time}</div>
                                <div className="practice-info">
                                    <h4 className="text-white">{session.squad}</h4>
                                    <p className="text-gray"><i className="fas fa-map-marker-alt"></i> {session.location}</p>
                                    <div className="practice-focus">
                                        <span className="focus-tag">{session.focus}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="glass-card info-box" style={{ marginTop: '60px', padding: '40px', borderLeft: '4px solid var(--primary-gold)' }}>
                        <h4 className="text-gold" style={{ marginBottom: '15px', fontSize: '1.2rem' }}>Attendance & Requirements</h4>
                        <ul className="requirements-list" style={{ color: 'var(--text-gray)', lineHeight: '2' }}>
                            <li>• Arrive 20 minutes early for mandatory warm-ups.</li>
                            <li>• Full Demora training kit must be worn at all times.</li>
                            <li>• Bring your own moisture-wicking towel and hydration.</li>
                            <li>• If you cannot attend, notify your coach via the app 24h in advance.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Practice;

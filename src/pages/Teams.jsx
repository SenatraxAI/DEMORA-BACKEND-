import { Link } from 'react-router-dom';
import teamPhoto from '../assets/images/demora_team_photo_placeholder_1765807223694.png';
import actionImg from '../assets/images/demora_basketball_hero_action_1765807088077.png';

const Teams = () => {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>Our <span className="text-gold">Squads</span></h1>
                    <p style={{ maxWidth: '600px', margin: '10px auto' }}>From developmental stages to elite performance, Demora Academy hosts teams across all age groups.</p>
                </div>
            </section>

            <section className="teams-section">
                <div className="container">

                    {/* U18 Elite */}
                    <div className="team-block" style={{ display: 'flex', gap: '40px', marginBottom: '80px', alignItems: 'center', flexDirection: 'row-reverse' }}>
                        <div className="team-img" style={{ flex: 1 }}>
                            <img src={teamPhoto} alt="U18 Elite Team" style={{ border: '2px solid var(--primary-gold)', borderRadius: '8px' }} />
                        </div>
                        <div className="team-info" style={{ flex: 1 }}>
                            <h3 className="text-gold">U18 Elite</h3>
                            <p style={{ marginTop: '15px' }}>Our flagship team competing in the National Youth League. The U18 program focuses on advanced tactical execution, physical conditioning, and college recruitment preparation.</p>
                            <ul style={{ marginTop: '20px', listStyle: 'disc', paddingLeft: '20px', color: '#999' }}>
                                <li>Head Coach: Coach Carter</li>
                                <li>2023 Regional Champions</li>
                                <li>Focus: High Performance</li>
                            </ul>
                            <Link to="/roster" className="btn btn-primary" style={{ marginTop: '20px' }}>View Roster</Link>
                        </div>
                    </div>

                    {/* U16 Premier */}
                    <div className="team-block" style={{ display: 'flex', gap: '40px', marginBottom: '80px', alignItems: 'center' }}>
                        <div className="team-img" style={{ flex: 1 }}>
                            <img src={actionImg} alt="U16 Premier Team" style={{ border: '2px solid var(--primary-gold)', borderRadius: '8px', opacity: 0.8 }} />
                        </div>
                        <div className="team-info" style={{ flex: 1 }}>
                            <h3 className="text-gold">U16 Premier</h3>
                            <p style={{ marginTop: '15px' }}>The bridge to elite competition. Our U16 squad emphasizes skill refinement and game IQ.</p>
                            <ul style={{ marginTop: '20px', listStyle: 'disc', paddingLeft: '20px', color: '#999' }}>
                                <li>Head Coach: Coach Sarah</li>
                                <li>Focus: Skill Refinement</li>
                            </ul>
                            <Link to="#" className="btn" style={{ marginTop: '20px' }}>Learn More</Link>
                        </div>
                    </div>

                    {/* U14 Development */}
                    <div className="team-block" style={{ display: 'flex', gap: '40px', marginBottom: '80px', alignItems: 'center', flexDirection: 'row-reverse' }}>
                        <div className="team-img" style={{ flex: 1 }}>
                            <div style={{ height: '300px', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #444', borderRadius: '8px' }}>
                                <span className="text-gray">U14 Team Photo Coming Soon</span>
                            </div>
                        </div>
                        <div className="team-info" style={{ flex: 1 }}>
                            <h3 className="text-gold">U14 Development</h3>
                            <p style={{ marginTop: '15px' }}>Where it all begins. Focusing on fundamentals, love for the game, and teamwork.</p>
                            <ul style={{ marginTop: '20px', listStyle: 'disc', paddingLeft: '20px', color: '#999' }}>
                                <li>Head Coach: Coach Mike</li>
                                <li>Focus: Fundamentals</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Teams;

import { Link } from 'react-router-dom';
import teamPhoto from '../assets/images/demora_team_photo_placeholder_1765807223694.png';
import actionImg from '../assets/images/demora_basketball_hero_action_1765807088077.png';
import sarahHeadshot from '../assets/images/basketball_player_headshot_sarah_1765807707651.png';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{
                backgroundImage: `url(${actionImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white'
            }}>
                <div className="hero-overlay" style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.6)'
                }}></div>
                <div className="hero-content container" style={{ position: 'relative', zIndex: 1 }}>
                    <h5 style={{ color: 'var(--primary-gold)', letterSpacing: '4px', marginBottom: '10px' }}>Welcome to the Snake Pit</h5>
                    <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>Forge Your <span className="text-gold">Legacy</span></h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto 40px', fontSize: '1.2rem' }}>
                        Demora Basketball Academy is where potential meets professional training. Join the elite.
                    </p>
                    <div className="hero-btns" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <Link to="/schedule" className="btn btn-primary">Next Game</Link>
                        <Link to="/teams" className="btn">Join The Team</Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about">
                <div className="container">
                    <div className="about-grid" style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div className="about-image" style={{ flex: 1 }}>
                            <img src={teamPhoto} alt="Demora Team" style={{ borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} />
                        </div>
                        <div className="about-text" style={{ flex: 1 }}>
                            <h2 className="section-title" style={{ textAlign: 'left', marginLeft: 0 }}>About <span className="text-gold">Demora</span></h2>
                            <p style={{ marginBottom: '20px' }}>**The Demora Basketball Academy** is a premier grassroots youth basketball organization dedicated to developing young athletes. Our philosophy blends elite skill development with the character-building values of teamwork, discipline, and sportsmanship.</p>
                            <p style={{ marginBottom: '30px' }}>From our U12 development squads to our U18 elite teams, we provide a pathway for every player to reach their full potential on and off the court.</p>
                            <Link to="/teams" className="btn">Meet Our Teams</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Section */}
            <section id="news" style={{ backgroundColor: 'var(--bg-card)' }}>
                <div className="container">
                    <h2 className="section-title">Latest <span className="text-gold">News</span></h2>
                    <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>

                        <article className="news-card" style={{ background: '#111', borderRadius: '8px', overflow: 'hidden' }}>
                            <div className="news-img" style={{ backgroundImage: `url(${actionImg})`, height: '200px', backgroundSize: 'cover' }}></div>
                            <div className="news-content" style={{ padding: '20px' }}>
                                <span className="date" style={{ color: 'var(--primary-gold)', fontSize: '0.8rem' }}>Nov 10, 2024</span>
                                <h3 style={{ margin: '10px 0' }}>Demora Secure OT Victory</h3>
                                <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '20px' }}>A last-minute three-pointer from Jake Miller sent the game into overtime, where Demora dominated...</p>
                                <Link to="#" className="read-more" style={{ color: 'var(--primary-gold)', fontWeight: 'bold' }}>Read More <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </article>

                        <article className="news-card" style={{ background: '#111', borderRadius: '8px', overflow: 'hidden' }}>
                            <div className="news-img" style={{ backgroundImage: `url(${sarahHeadshot})`, height: '200px', backgroundSize: 'cover' }}></div>
                            <div className="news-content" style={{ padding: '20px' }}>
                                <span className="date" style={{ color: 'var(--primary-gold)', fontSize: '0.8rem' }}>Nov 8, 2024</span>
                                <h3 style={{ margin: '10px 0' }}>Player of the Week</h3>
                                <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '20px' }}>With an average of 22 points and 10 rebounds this week, Sarah Jenkins has been named our Player of the Week...</p>
                                <Link to="#" className="read-more" style={{ color: 'var(--primary-gold)', fontWeight: 'bold' }}>Read More <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </article>

                        <article className="news-card" style={{ background: '#111', borderRadius: '8px', overflow: 'hidden' }}>
                            <div className="news-img" style={{ backgroundImage: `url(${teamPhoto})`, height: '200px', backgroundSize: 'cover' }}></div>
                            <div className="news-content" style={{ padding: '20px' }}>
                                <span className="date" style={{ color: 'var(--primary-gold)', fontSize: '0.8rem' }}>Nov 5, 2024</span>
                                <h3 style={{ margin: '10px 0' }}>U16 Squad Tryouts</h3>
                                <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '20px' }}>We are looking for the next generation of talent to join our U16 elite squad this coming season...</p>
                                <Link to="#" className="read-more" style={{ color: 'var(--primary-gold)', fontWeight: 'bold' }}>Read More <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </article>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <Link to="#" className="btn">View All News</Link>
                    </div>
                </div>
            </section>

            {/* Connect */}
            <section className="connect" style={{ backgroundColor: 'var(--bg-card)', padding: '60px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2>Join the <span className="text-gold">#DemoraFamily</span></h2>
                    <p style={{ margin: '20px auto 30px', maxWidth: '600px' }}>Don't miss a moment! Follow us for live updates, behind-the-scenes content, and more.</p>
                    <div className="social-btns" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <a href="#" className="btn"><i className="fab fa-instagram"></i> Follow on Instagram</a>
                        <a href="#" className="btn"><i className="fab fa-facebook-f"></i> Like us on Facebook</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;

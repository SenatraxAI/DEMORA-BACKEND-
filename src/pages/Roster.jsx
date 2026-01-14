import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import jakeImg from '../assets/images/basketball_player_headshot_jake_1765807392155.png';
import sarahImg from '../assets/images/basketball_player_headshot_sarah_1765807707651.png';
import leoImg from '../assets/images/basketball_player_headshot_leo_1765807823614.png';
import './roster.css';

const PLAYERS = [
    {
        id: 1,
        name: 'Jake Miller',
        number: 5,
        position: 'Point Guard',
        height: "6'2\"",
        year: 'Senior',
        img: jakeImg,
        bio: "Jake is a three-year starter and the engine of our offense. Known for his court vision and clutch shooting, he leads the team in assists and steals.",
        stats: { points: '18.5', assists: '7.2', rebounds: '4.1' }
    },
    {
        id: 2,
        name: 'Sarah Jenkins',
        number: 12,
        position: 'Center',
        height: "6'5\"",
        year: 'Junior',
        img: sarahImg,
        bio: "A dominant force in the paint. Sarah's shot-blocking ability and offensive rebounding make her a nightmare for opposing teams.",
        stats: { points: '14.2', assists: '1.5', rebounds: '11.8' }
    },
    {
        id: 3,
        name: 'Leo Chen',
        number: 23,
        position: 'Small Forward',
        height: "6'6\"",
        year: 'Senior',
        img: leoImg,
        bio: "Versatility at its finest. Leo can guard 1 through 4 and score from anywhere on the floor. A true two-way player.",
        stats: { points: '16.8', assists: '3.4', rebounds: '6.5' }
    }
];

const Roster = () => {
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="gold-gradient-text">U18 Elite Roster</h1>
                    <p className="text-gray" style={{ marginTop: '10px' }}>Meet the squad forging their legacy on and off the court.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="roster-grid">
                        {PLAYERS.map(player => (
                            <motion.div
                                key={player.id}
                                className="player-card glass-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => setSelectedPlayer(player)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="player-img" style={{ backgroundImage: `url(${player.img})` }}></div>
                                <div className="player-info">
                                    <div className="player-number">{player.number}</div>
                                    <h3 className="player-name">{player.name}</h3>
                                    <div className="text-gold">{player.position}</div>
                                    <div className="player-meta">
                                        <span>{player.height}</span>
                                        <span>{player.year}</span>
                                    </div>
                                    <button className="btn btn-primary" style={{ width: '100%', marginTop: '20px', padding: '8px' }}>View Details</button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {selectedPlayer && (
                    <motion.div
                        className="player-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPlayer(null)}
                    >
                        <motion.div
                            className="player-modal glass-card"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-btn" onClick={() => setSelectedPlayer(null)}>&times;</button>
                            <div className="modal-content">
                                <div className="modal-img" style={{ backgroundImage: `url(${selectedPlayer.img})` }}></div>
                                <div className="modal-details">
                                    <h2 className="gold-gradient-text">{selectedPlayer.name}</h2>
                                    <h4 className="text-white">{selectedPlayer.position} | #{selectedPlayer.number}</h4>
                                    <p className="player-bio" style={{ margin: '20px 0', color: 'var(--text-gray)' }}>{selectedPlayer.bio}</p>

                                    <div className="stats-grid">
                                        <div className="stat-item">
                                            <span className="stat-val">{selectedPlayer.stats.points}</span>
                                            <span className="stat-label">PPG</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-val">{selectedPlayer.stats.rebounds}</span>
                                            <span className="stat-label">RPG</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-val">{selectedPlayer.stats.assists}</span>
                                            <span className="stat-label">APG</span>
                                        </div>
                                    </div>

                                    <div className="player-specs" style={{ marginTop: '30px', display: 'flex', gap: '30px' }}>
                                        <div>
                                            <span className="spec-label">Height:</span> <span>{selectedPlayer.height}</span>
                                        </div>
                                        <div>
                                            <span className="spec-label">Class:</span> <span>{selectedPlayer.year}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Roster;

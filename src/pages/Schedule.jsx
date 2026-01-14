import { useState } from 'react';
import './schedule.css';

const GAMES = [
    { id: 1, date: '2025-11-15', opponent: 'The Ravens', time: '19:30', location: 'home', result: null, tournament: 'Youth Elite League' },
    { id: 2, date: '2025-11-10', opponent: 'The Hawks', time: '18:00', location: 'away', result: 'W 98 - 92', tournament: 'Youth Elite League' },
    { id: 3, date: '2025-11-05', opponent: 'The Eagles', time: '20:00', location: 'home', result: null, tournament: 'Viper Invitational' },
    { id: 4, date: '2025-10-28', opponent: 'The Bulldogs', time: '19:00', location: 'away', result: 'L 75 - 81', tournament: 'Youth Elite League' },
    { id: 5, date: '2025-10-22', opponent: 'The Panthers', time: '18:30', location: 'home', result: 'W 110 - 78', tournament: 'Pre-season Showcase' },
];

const Schedule = () => {
    const [filter, setFilter] = useState('all');

    const filteredGames = GAMES.filter(game => {
        if (filter === 'all') return true;
        return game.location === filter;
    });

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="gold-gradient-text">Season Schedule</h1>
                    <p style={{ maxWidth: '600px', margin: '15px auto', color: 'var(--text-gray)' }}>Follow our journey. Every game is an opportunity to prove our strength.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    {/* Filter Controls */}
                    <div className="filter-controls">
                        <button
                            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                            onClick={() => setFilter('all')}
                        >All Games</button>
                        <button
                            className={`filter-btn ${filter === 'home' ? 'active' : ''}`}
                            onClick={() => setFilter('home')}
                        >Home</button>
                        <button
                            className={`filter-btn ${filter === 'away' ? 'active' : ''}`}
                            onClick={() => setFilter('away')}
                        >Away</button>
                    </div>

                    <div className="schedule-list">
                        {filteredGames.length > 0 ? (
                            filteredGames.map(game => (
                                <div key={game.id} className="game-card glass-card">
                                    <div className="game-date">
                                        <span className="date-main">{game.date.split('-')[2]}</span>
                                        <span className="date-month">{new Date(game.date).toLocaleString('default', { month: 'short' })}</span>
                                    </div>
                                    <div className="game-info">
                                        <span className="tournament-tag">{game.tournament}</span>
                                        <h3 className="game-title">Demora <span className="text-gold">vs</span> {game.opponent}</h3>
                                        <div className="game-meta">
                                            <span><i className="far fa-clock"></i> {game.time}</span>
                                            <span><i className="fas fa-map-marker-alt"></i> {game.location === 'home' ? 'Home (Vipers Den)' : 'Away Arena'}</span>
                                        </div>
                                    </div>
                                    <div className="game-status">
                                        {game.result ? (
                                            <div className={`result-badge ${game.result.startsWith('W') ? 'win' : 'loss'}`}>
                                                {game.result}
                                            </div>
                                        ) : (
                                            <div className="upcoming-badge">Upcoming</div>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-games glass-card">No games found for this filter.</div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Schedule;

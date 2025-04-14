export default function Home() {
    return (
        <main className="main-container">
            {/* Left Column */}
            <div className="left-column">
                <nav className="space-y-2">
                    {/* 
                    <a href="#" className="block p-2">radio</a>
                    <a href="#" className="block p-2">word</a>
                    <p></p>
                    <a href="#" className="block p-2">instagram</a>
                    <a href="#" className="block p-2">contact</a>
                    */}
                    <ul className="list-none">
                        <li><b>ciao, sono paola</b></li>
                        <p></p>
                        <li>
                            ♫ music
                            <ul className="list-none">
                                <li>⋆ radio</li>
                                <li>⋆ playlist</li>
                                <li> </li>
                            </ul>
                        </li>
                        <li>
                            ᖰᖳ sound
                        </li>
                        <li>
                            ✎ words
                            <ul className="list-none">
                                <li>⋆ book</li>
                                <li>⋆ articles</li>
                                <li>⋆ interviews</li>
                                <li>⋆ talks</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="list-none">
                        <li>instagram</li>
                        <li>contact</li>
                    </ul>
                </nav>
            </div>

            {/* Right Column - Gallery */}
            <div className="right-column">
                <div className="gallery">
                    {/* Gallery Items */}
                    <div className="gallery-item">
                        <p className="text-gray-600">
                            <iframe
                                style={{ borderRadius: '12px' }}
                                src="https://open.spotify.com/embed/playlist/6JRslkUYUjucuMHTbDkQls?utm_source=generator"
                                width="100%"
                                height="352"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </p>
                    </div>

                    <div className="gallery-item">
                        <p className="text-gray-600">
                            <iframe
                                style={{ borderRadius: '12px' }}
                                src="https://open.spotify.com/embed/playlist/36Qe0y0Vbrlxqtge6DFaGM?utm_source=generator"
                                width="100%"
                                height="352"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </p>
                    </div>

                    <div className="gallery-item">
                        <p className="text-gray-600">
                            <iframe
                                style={{ borderRadius: '12px' }}
                                src="https://open.spotify.com/embed/playlist/2nnHiWBqmhTgqcscZ5FcXX?utm_source=generator"
                                width="100%"
                                height="352"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </p>
                    </div>

                    {[...Array(12)].map((_, index) => (
                        <div key={index} className="gallery-item">
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">Item {index + 1}</h3>
                                <p className="text-gray-600">
                                    This is a gallery item with dynamic height. The content can vary in size.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
} 
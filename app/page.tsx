"use client";
import { useState } from 'react';

export default function Home() {
    // Define playlist key type
    type PlaylistKey = 'playlist1' | 'playlist2' | 'playlist3' | 'playlist4';
    
    // Create loading states for each iframe
    const [playlistsLoaded, setPlaylistsLoaded] = useState({
        playlist1: false,
        playlist2: false,
        playlist3: false,
        playlist4: false
    });
    
    // Handler for when iframes load
    const handleIframeLoad = (playlistKey: PlaylistKey) => {
        setPlaylistsLoaded(prev => ({
            ...prev,
            [playlistKey]: true
        }));
    };

    // Loader component
    const Loader = () => (
        <div className="w-[300px] h-[352px] gallery-item-loader absolute inset-0 flex justify-center items-center bg-gray-100 bg-opacity-90 rounded-xl z-10">
            <div className="flex flex-col items-center text-center">
                <div className="mb-2">
                    <span className="loader-dot"></span>
                    <span className="loader-dot"></span>
                    <span className="loader-dot"></span>
                </div>
                <div className="mt-2 w-full text-center">Loading playlist...</div>
            </div>
        </div>
    );

    return (
        <main className="main-container">
            {/* Left Column */}
            <div className="left-column">
                <nav className="space-y-2">
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
                        <div className="text-gray-600 relative h-[352px]">
                            {!playlistsLoaded.playlist1 && <Loader />}
                            <iframe
                                className="w-full h-full rounded-xl"
                                src="https://open.spotify.com/embed/playlist/6JRslkUYUjucuMHTbDkQls?utm_source=generator"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                onLoad={() => handleIframeLoad('playlist1')}
                            ></iframe>
                        </div>
                    </div>

                    <div className="gallery-item">
                        <div className="text-gray-600 relative h-[352px]">
                            {!playlistsLoaded.playlist2 && <Loader />}
                            <iframe
                                className="w-full h-full rounded-xl"
                                src="https://open.spotify.com/embed/playlist/36Qe0y0Vbrlxqtge6DFaGM?utm_source=generator"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                onLoad={() => handleIframeLoad('playlist2')}
                            ></iframe>
                        </div>
                    </div>

                    <div className="gallery-item">
                        <div className="text-gray-600 relative h-[352px]">
                            {!playlistsLoaded.playlist3 && <Loader />}
                            <iframe
                                className="w-full h-full rounded-xl"
                                src="https://open.spotify.com/embed/playlist/2nnHiWBqmhTgqcscZ5FcXX?utm_source=generator"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                onLoad={() => handleIframeLoad('playlist3')}
                            ></iframe>
                        </div>
                    </div>

                    <div className="gallery-item">
                        <div className="text-gray-600 relative h-[352px]">
                            {!playlistsLoaded.playlist4 && <Loader />}
                            <iframe
                                className="w-full h-full rounded-xl"
                                src="https://open.spotify.com/embed/playlist/0gc1k0u2HxHeQV4qjaWP28?utm_source=generator"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                onLoad={() => handleIframeLoad('playlist4')}
                            ></iframe>
                        </div>
                    </div>

                    {[...Array(8)].map((_, index) => (
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
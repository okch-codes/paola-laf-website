"use client";
import { useState } from 'react';
import Image from 'next/image';

// Define types for gallery items
type PlaylistItem = {
    type: 'playlist';
    id: string;
    spotifyId: string;
};

type ImageLinkItem = {
    type: 'imageLink';
    id: string;
    imageUrl: string;
    linkUrl: string;
    title: string;
    description?: string;
    width: string;
    height: string;
};

type TextItem = {
    type: 'text';
    id: string;
    title: string;
    content: string;
};

type GalleryItem = PlaylistItem | ImageLinkItem | TextItem;

export default function Home() {
    // Gallery items data
    const galleryItems: GalleryItem[] = [
        {
            type: 'playlist',
            id: 'playlist1',
            spotifyId: '6JRslkUYUjucuMHTbDkQls'
        },
        {
            type: 'playlist',
            id: 'playlist2',
            spotifyId: '36Qe0y0Vbrlxqtge6DFaGM'
        },
        {
            type: 'playlist',
            id: 'playlist3',
            spotifyId: '2nnHiWBqmhTgqcscZ5FcXX'
        },
        {
            type: 'playlist',
            id: 'playlist4',
            spotifyId: '0gc1k0u2HxHeQV4qjaWP28'
        },
        {
            type: 'imageLink',
            id: 'image1',
            imageUrl: 'https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            linkUrl: 'https://example.com',
            title: 'Lorem Ipsum',
            description: 'Click to visit example.com',
            width: '300px',
            height: '230px'
        },
        // Examples of text items
        ...Array(4).fill(null).map((_, index) => ({
            type: 'text' as const,
            id: `text${index + 1}`,
            title: `Item ${index + 1}`,
            content: 'This is a gallery item with dynamic height. The content can vary in size.'
        }))
    ];

    // Create loading states for playlists
    const [loadedItems, setLoadedItems] = useState<Record<string, boolean>>({});

    // Handler for when content loads
    const handleContentLoad = (itemId: string) => {
        setLoadedItems(prev => ({
            ...prev,
            [itemId]: true
        }));
    };

    // Loader component
    const Loader = () => (
        <div className="w-[300px] h-full gallery-item-loader absolute inset-0 flex justify-center items-center bg-gray-100 bg-opacity-90 rounded-xl z-10">
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

    // Gallery item renderer
    const renderGalleryItem = (item: GalleryItem) => {
        switch (item.type) {
            case 'playlist':
                return (
                    <div key={item.id} className="gallery-item">
                        <div className="text-gray-600 relative h-full">
                            {!loadedItems[item.id] && <Loader />}
                            <iframe
                                className="w-full h-full rounded-xl"
                                src={`https://open.spotify.com/embed/playlist/${item.spotifyId}?utm_source=generator`}
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                onLoad={() => handleContentLoad(item.id)}
                            ></iframe>
                        </div>
                    </div>
                );

            case 'imageLink':
                return (
                    <div key={item.id} className="gallery-item">
                        <a href={item.linkUrl}>
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                width={parseInt(item.width, 10)}
                                height={parseInt(item.height, 10)}
                                className="rounded-t-lg"
                                onLoad={() => handleContentLoad(item.id)}
                            />
                        </a>
                        <div className="p-5">
                            <a href={item.linkUrl}>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                            <a href={item.linkUrl} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                </svg>
                            </a>
                        </div>
                    </div>
                );

            case 'text':
                return (
                    <div key={item.id} className="gallery-item">
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.content}</p>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

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
                    {galleryItems.map(item => renderGalleryItem(item))}
                </div>
            </div>
        </main>
    );
} 
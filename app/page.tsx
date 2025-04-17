"use client";
import { useState } from "react";
import Image from "next/image";

// Define types for gallery items
type PlaylistItem = {
  type: "playlist";
  id: string;
  spotifyId: string;
  tags: string[];
};

type ImageLinkItem = {
  type: "imageLink";
  id: string;
  imageUrl: string;
  linkUrl: string;
  title: string;
  description?: string;
  width: string;
  height: string;
  tags: string[];
};

type TextItem = {
  type: "text";
  id: string;
  title: string;
  content: string;
  tags: string[];
};

type SoundCloudItem = {
  type: "soundcloud";
  id: string;
  width: string;
  height: string;
  url: string;
  tags: string[];
};

type GalleryItem = PlaylistItem | ImageLinkItem | TextItem | SoundCloudItem;

export default function Home() {
  // Gallery items data
  const galleryItems: GalleryItem[] = [
    {
      type: "playlist",
      id: "playlist1",
      spotifyId: "6JRslkUYUjucuMHTbDkQls",
      tags: ["music", "playlist"],
    },
    {
      type: "playlist",
      id: "playlist2",
      spotifyId: "36Qe0y0Vbrlxqtge6DFaGM",
      tags: ["music", "playlist"],
    },
    {
      type: "playlist",
      id: "playlist3",
      spotifyId: "2nnHiWBqmhTgqcscZ5FcXX",
      tags: ["music", "playlist"],
    },
    {
      type: "playlist",
      id: "playlist4",
      spotifyId: "0gc1k0u2HxHeQV4qjaWP28",
      tags: ["music", "playlist"],
    },
    {
      type: "soundcloud",
      id: "image1",
      url: "",
      width: "300px",
      height: "300px",
      tags: ["image", "radio"],
    },
  ];

  // Create loading states for playlists
  const [loadedItems, setLoadedItems] = useState<Record<string, boolean>>({});

  // Add state for selected tag
  const [selectedTag, setSelectedTag] = useState<string | null>("home");

  // Add a state to track the active menu item
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

  // Filter gallery items based on the selected tag
  const filteredItems = selectedTag
    ? galleryItems.filter((item) => item.tags.includes(selectedTag))
    : galleryItems;

  // Handler for when content loads
  const handleContentLoad = (itemId: string) => {
    setLoadedItems((prev) => ({
      ...prev,
      [itemId]: true,
    }));
  };

  // Loader component
  const Loader = () => (
    <div className="w-full h-full gallery-item-loader absolute inset-0 flex justify-center items-center bg-gray-100 bg-opacity-90 rounded-xl z-10">
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
      case "playlist":
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

      case "imageLink":
        return (
          <div key={item.id} className="gallery-item">
            <a href={item.linkUrl} target="_blank">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={parseInt(item.width, 10)}
                height={parseInt(item.height, 10)}
                className="rounded-t-lg"
                onLoad={() => handleContentLoad(item.id)}
              />
            </a>
            {(item.title || item.description) && (
              <div className="p-5">
                <a href={item.linkUrl}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            )}
          </div>
        );

      case "text":
        return (
          <div key={item.id} className="gallery-item">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          </div>
        );

      case "soundcloud":
        return (
          <div>
            <iframe
              className="m-sc"
              width="200"
              height="200"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1896528834&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <iframe
              className="m-sc"
              width="200"
              height="200"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1896528471&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <iframe
              className="m-sc"
              width="200"
              height="200"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1896527877&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <iframe
              className="m-sc"
              width="200"
              height="200"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1896527343&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <iframe
              className="m-sc"
              width="200"
              height="200"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1896525855&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <iframe
              className="m-sc"
              width="200"
              height="200"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1896525171&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <iframe
              className="m-sc"
              width="200"
              height="200"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1896523944&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <iframe
              className="m-sc"
              width="200"
              height="200"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1896522486&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <iframe
              className="m-sc"
              width="200"
              height="200"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1896521718&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <iframe
              className="m-sc"
              width="200"
              height="200"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1896521076&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <iframe
              className="m-sc"
              width="200"
              height="200"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1896518937&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
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
            <li>
              <b>hi, sono paola</b>
            </li>
            <p></p>
            <li
              onClick={() => {
                setSelectedTag("home");
                setActiveMenuItem("all");
              }}
              className={`cursor-pointer ${
                activeMenuItem === "all" ? "font-bold" : ""
              }`}
            >
              home
            </li>
            <li
              onClick={() => {
                setSelectedTag("music");
                setActiveMenuItem("music");
              }}
              className={`cursor-pointer ${
                activeMenuItem === "music" ? "font-bold" : ""
              }`}
            >
              ♫ music
            </li>
            <ul className="list-none">
              <li
                onClick={() => {
                  setSelectedTag("radio");
                  setActiveMenuItem("radio");
                }}
                className={`cursor-pointer ${
                  activeMenuItem === "radio" ? "font-bold" : ""
                }`}
              >
                ⋆ radio
              </li>
              <li
                onClick={() => {
                  setSelectedTag("playlist");
                  setActiveMenuItem("playlist");
                }}
                className={`cursor-pointer ${
                  activeMenuItem === "playlist" ? "font-bold" : ""
                }`}
              >
                ⋆ playlist
              </li>
              <li> </li>
            </ul>
            <li
              onClick={() => {
                setSelectedTag("sound");
                setActiveMenuItem("sound");
              }}
              className={`cursor-pointer ${
                activeMenuItem === "sound" ? "font-bold" : ""
              }`}
            >
              ᖰᖳ sound
            </li>
            <li>✎ words</li>
            <ul className="list-none">
              <li>⋆ book</li>
              <li>⋆ articles</li>
              <li>⋆ interviews</li>
              <li>⋆ talks</li>
            </ul>
          </ul>
          <ul className="list-none">
            <li>
              <a target="_blank" href="https://www.instagram.com/paolalaf">
                instagram
              </a>
            </li>
            <li>contact</li>
          </ul>
        </nav>
      </div>

      {/* Right Column - Gallery */}
      <div className="right-column">
        <div className="gallery">
          {filteredItems.map((item) => renderGalleryItem(item))}
        </div>
      </div>
    </main>
  );
}

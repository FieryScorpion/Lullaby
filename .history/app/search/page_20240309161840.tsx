import React, { useEffect, useState } from 'react'; // Added import statement for React
import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "@/components/SearchContent"; // Corrected import path

interface SearchProps {
    searchParams: {
        title: string;
    }
}

const Search: React.FC<SearchProps> = ({ searchParams }) => { // Added React.FC for typing
    const [songs, setSongs] = useState<songs[]>([]); // Added state for songs

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const fetchedSongs = await getSongsByTitle(searchParams.title);
                setSongs(fetchedSongs);
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };

        fetchSongs();
    }, [searchParams.title]); // Added dependency for useEffect

    return (
        <div
            className="
                bg-neutral-900
                rounded-lg
                h-full
                w-full
                overflow-hidden
                overflow-y-auto
            "
        >
            <Header className="from-bg-neutral-900">
                <div className="mb-2 flex flex-col gap-y-6">
                    <h1 className="text-white text-3xl font-semibold">Search</h1>
                    <SearchInput />
                </div>
            </Header>
            <SearchContent songs={songs} /> {/* Corrected prop name to 'songs' */}
        </div>
    );
};

export default Search;




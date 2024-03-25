import getsongsBytitle from "@/actions/getSongsByTitle";


interface SearchProps {
    searchParams: {
        title: string;
    }
};
const Search = async ({ searchParams }): Searchprops) => {
    const songs = await getSongsByTitle(searchParams.title);

    return (
        <div>
        Search!
        </div>
    )
};
export default Search;

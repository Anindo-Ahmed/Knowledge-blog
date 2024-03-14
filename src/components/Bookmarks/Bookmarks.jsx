const Bookmarks = ({bookmarks}) => {
    return (
        <div>
            <h2 className="text-xl mb-6">Bookmarked Blogs: {bookmarks.length}</h2>
        </div>
    );
};

export default Bookmarks;
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-white p-3 rounded-lg text-xl mb-5">
            <h3> {title}</h3>
        </div>
    );
};

export default Bookmark;
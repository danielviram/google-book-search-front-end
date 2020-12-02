import React, {useEffect, useState} from "react";

import SavedBook from "../UI/SavedBook";

const SavedPage = () => {
    const [savedBooks, setSavedBooks] = useState ([]);

    useEffect(()=>{
        const apiURL = "http://localhost:4000/api/v1/saves";

        fetch(apiURL)
        .then((resp) => resp.json())
        .then ((saves) => {
            setSavedBooks(saves);
        })
        .catch((err) => console.log(err));
    },[]);

    return (
        <div>
            <hi>Saved Books</hi>
            {savedBooks.map((savedBook) =>(
                <SavedBook key={savedBook._id} bookId={savedBook.bookId} />
            ))}
        </div>
    );
};

export default SavedPage;
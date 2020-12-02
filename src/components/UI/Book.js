import React from "react";

const Book = (props) => {
    const onSavedBookClick = () => {
        const apiURL = "http://localhost:4000/api/v1/saves";

        const saveDate = {
            bookId: props.id, 
        };

        const reqObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accepts: "application/json",
            },
            body: JSON.stringify(saveData),
        };

        fetch(apiURL,reqObj)
        .then((resp) => resp.json())
        .then((save) => {
            console.log(save);
        })
    }
}
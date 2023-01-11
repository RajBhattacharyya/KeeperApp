import React from "react";
import Header from "./Header.jsx";
import Note from "./Note"
import Footer from "./Footer.jsx";
import notes from "../notes"

export default function App() {
    return (
        <div>
            <Header />
            {notes.map(noteItem => (
                <Note 
                    key= {noteItem.key}
                    title= {noteItem.title}
                    content= {noteItem.content}
                />
            ))};
            <Footer />
        </div>  
    )
}
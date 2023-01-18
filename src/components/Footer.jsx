import React from "react";

const year = new Date().getFullYear()

export default function footer() {
    return <footer>
        <p>Copyright @ {year}</p>
        <p>Made with 🤍 by Raj Bhattacharyya.</p>
    </footer>
}
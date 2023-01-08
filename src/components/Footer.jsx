import React from "react";

const year = new Date().getFullYear()

export default function footer() {
    return <footer>
        <p>Copyright @ {year}</p>
    </footer>
}
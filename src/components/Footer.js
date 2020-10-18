import React from "react";

const year = new Date().getFullYear();

export default function Footer() {
    return (
        <footer>
            <p>
                Copyright &#169; {year}
            </p>
        </footer>
    );
}
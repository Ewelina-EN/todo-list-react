import React from "react";
import "./style.css"

const Section = ({ title, body, extraHeaderContent }) => (
    <section>
        <header className="subHeader">
            <h2>{title}</h2>
            {extraHeaderContent}
        </header>
        {body}
    </section>
);

export default Section;
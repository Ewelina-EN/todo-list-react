import React from "react";
import "./style.css"

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <header className="section__subHeader">
            <h2 className="section__title"> {title} </h2>
            {extraHeaderContent}
        </header>
            {body}
        </section>
);

export default Section;

import React from "react";
import "./style.css"

const Section = ({ title, body, extraHeaderContent }) => (
    <section>
        <header className="subHeader">
            <h2 className="subHeader__title">{title}</h2>
            {extraHeaderContent}
        </header>
        <div>
            {body}
        </div>


    </section>
);

export default Section;
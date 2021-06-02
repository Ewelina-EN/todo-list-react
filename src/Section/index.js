import React from "react";
import "./style.css"

const Section = ({ title, body, extraHeaderContent }) => (
    <section>
        <h2 className="subHeader"> {title} {extraHeaderContent}</h2>
        {body}
    </section>
);

export default Section;
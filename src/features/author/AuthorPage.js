import React from "react";
import StyledContainer from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { StyledDescription } from "./styled";

export default () => (
    <StyledContainer>
        <Header title="O autorze" />
        <Section
            title="Ewelina Niewęgłowska"
            body={
                <StyledDescription>
                    <strong>Kocham aktywność fizyczną!</strong> Trenowałam piłkę ręczną, zrobiłam Koronę Polskich
                    Półmaratonów, trenowałam siłowo,aktualnie kręce kilometry na rowerze i trenuje pole dance. W myśl: <em>Bój się i rób
                    </em> zrobiłam prawo jazdy na motocykl i spędziłam 3 wyborne lata w trasie i na torach
                    szkoleniowych. Jestem właścicielką 2 kotów wagi ciężkiej i <em>nie przez przypadek</em> jeden z nich ma na imię Odważnik.
                </StyledDescription>
            }>
        </Section>
    </ StyledContainer>
);
import React from "react";
import { Contacto } from './../components/Contacto';
import { loadMessages } from "@/helpers/loadMessages";

function contact() {
    return <><Contacto></Contacto></>;
}

export default contact;

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: await loadMessages(locale),
        },
    };
}
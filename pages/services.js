import React from "react";
import { Servicios } from './../components/Servicios';
import { loadMessages } from "@/helpers/loadMessages";

function services() {
    return <><Servicios></Servicios></>;
}

export default services;

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: await loadMessages(locale),
        },
    };
}
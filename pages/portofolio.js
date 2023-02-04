import React from "react";
import { Portafolio } from './../components/Portafolio';
import { loadMessages } from "@/helpers/loadMessages";

function portofolio() {
    return <><Portafolio></Portafolio></>;
}

export default portofolio;

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: await loadMessages(locale),
        },
    };
}
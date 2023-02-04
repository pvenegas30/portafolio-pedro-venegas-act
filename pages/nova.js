import React from "react";
import { Nova } from './../projects/Nova';
import { loadMessages } from "@/helpers/loadMessages";

function nova() {
    return <><Nova></Nova></>;
}

export default nova;

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: await loadMessages(locale),
        },
    };
}
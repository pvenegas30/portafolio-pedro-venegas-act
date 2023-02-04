import React from "react";
import Projects from './../components/Projects';
import { loadMessages } from "@/helpers/loadMessages";

function projects() {
    return <><Projects></Projects></>;
}

export default projects;

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: await loadMessages(locale),
        },
    };
}
import React from 'react'
import { MyPort } from './../projects/MyPort';
import { loadMessages } from "@/helpers/loadMessages";

const myport = () => {
    return (
        <div><MyPort></MyPort></div>
    )
}

export default myport;

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: await loadMessages(locale),
        },
    };
}
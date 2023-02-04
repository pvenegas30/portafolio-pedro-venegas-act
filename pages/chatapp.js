import React from 'react'
import { ChatApp } from './../projects/ChapAppRealtime';
import { loadMessages } from "@/helpers/loadMessages";

const chatapp = () => {
    return (
        <div><ChatApp></ChatApp></div>
    )
}

export default chatapp

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: await loadMessages(locale),
        },
    };
}
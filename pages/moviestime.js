import React from 'react'
import { MoviesTime } from '../projects/MoviesTime'
import { loadMessages } from "@/helpers/loadMessages";

const moviestime = () => {
    return (
        <div><MoviesTime></MoviesTime></div>
    )
}

export default moviestime;

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: await loadMessages(locale),
        },
    };
}
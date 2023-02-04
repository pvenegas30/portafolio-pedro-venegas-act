import React from 'react'
import { WeatherApp } from './../projects/WeatherApp';
import { loadMessages } from "@/helpers/loadMessages";

const weatherapp = () => {
    return (
        <div><WeatherApp></WeatherApp></div>
    )
}

export default weatherapp

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: await loadMessages(locale),
        },
    };
}
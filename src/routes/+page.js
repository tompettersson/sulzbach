/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
export const load = async ({ fetch }) => {

    const res = await fetch(
        'https://api.openweathermap.org/data/3.0/onecall?lat=50.1336&lon=8.5224&appid=bb9fc6f1f698d215a37f4dcd3e6abf6b&lang=de&units=metric'
    );
    const wData = await res.json();
    return {
        wData
    }
}
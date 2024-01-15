import React from 'react';
import styled from "styled-components";
export default function Login() { 
    const example_redirect_uri = `https://accounts.spotify.com/en/authorize?client_id=b10ac7cc459d474e961a6603c15da715&redirect_uri=https://spotify-clone-api.netlify.app/&scope=user-read-private%20user-read-email%20user-modify-playback-state%20user-read-playback-state%20user-read-currently-playing%20user-read-recently-played%20user-top-read&response_type=token&show_dialog=true`;
    const handleClick = async () => {
        const client_id = "033dd61c6f1a43efb5bb8af35b83db84";
        const client_secret = "c956790d125f480b90ebafa85d578b2d";
        const redirect_uri = "http://localhost:3000/";
        const api_uri = "https://accounts.spotify.com/authorize";
        const response_type = 'code';
        const scope = [
        "user-read-email",
        "user-read-private",
        "user-modify-playback-state",
        "user-read-playback-state",
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-top-read",
    
    ];
    const fetching_uri = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
        " "
      )}&response_type=token&show_dialog=true`
    window.location.href = fetching_uri;
      
    };
    return (
    <Container>
        <img src = "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
            alt="logo"
            />
        <button onClick={handleClick}>Connect Spotify</button>
    </Container>
    );
}
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
background-color: #1db954;
gap: 5rem;
img {
    height: 20vh;
}
    button {
        padding: 1rem 5rem;
        border-radius: 5rem;
        border: none;
        background-color: black;
        color: #49f585;
        font-size: 1.4rem;
        cursor: pointer;
}
`;

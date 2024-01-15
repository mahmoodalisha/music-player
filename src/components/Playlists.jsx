import React, { useEffect } from 'react';
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from '../utils/Constants';
import styled from "styled-components";


export default function Playlists() {
    const [{ token,playlists }, dispatch] = useStateProvider();
    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            }
            );
            const { items } = response.data
            const playlists = items.map(({ name, id }) => {
                return { name, id};
            });
            dispatch({type:reducerCases.SET_PLAYLISTS,playlists});
        };
        
        getPlaylistData();
    }, [token,dispatch]);
  return (
    <Container>
        <div className='Playlists'>
        <p>Playlists</p>
        <ul>
            {
                playlists.map(({name, id})=> {
                    return(
                        <li key={id}>{name}</li>
                    )
                })
            }
        </ul>
        </div>
    </Container>
  )
}

const Container = styled.div`
ul{
    color: #848484;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    font-size: 14px;
    font-weight: normal;
    li{
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
            color: white;
        }
    }
}
`
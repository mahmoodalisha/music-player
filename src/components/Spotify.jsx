import React,{useEffect} from 'react'
import styled from "styled-components";
import Navbar from './Navbar';
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';
import Body from './Body';
import { LeftMenu } from './LeftMenu';


export default function Spotify() {
  const [{ token }, dispatch] = useStateProvider();

useEffect(() => {const getUserInfo = async () => {
  const { data } = await axios.get("https://api.spotify.com/v1/me", {
    headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
    },
    });
  
  const userInfo = {
   userId: data.id,
   userUrl: data.external_urls.spotify,
   userName: data.display_name,
  };
  dispatch({ type:reducerCases.SET_USER, userInfo });
};
    getUserInfo();

}, [dispatch, token]);

  return (
    <Container>
    <div className='body'>
      <Navbar />
      <LeftMenu/>
      </div>
      </Container>
  )
}
const Container = styled.div
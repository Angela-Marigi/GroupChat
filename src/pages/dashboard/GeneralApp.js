import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Chats from "./Chats"
import Conversation from "../../components/Conversation";
import { useTheme } from "@mui/material/styles";
import { Link, useSearchParams } from "react-router-dom";
//import { useSelector } from "../../redux/store";
import {useSelector} from "react-redux";
//import ChatComponent from "./Conversation";
import Contact from "../../components/Contact";
//import NoChat from "../../assets/Illustration/NoChat";
//import { useSelector } from "react-redux";
//import StarredMessages from "../../sections/dashboard/StarredMessages";
//import Media from "../../sections/dashboard/SharedMessages";

const GeneralApp = () => {

  //const [searchParams] = useSearchParams();

  const { sideBar } = useSelector((store) => store.app);// store or state

  const theme= useTheme();
  

  return (
    <Stack direction={"row"} sx={{ width: "100%"}}>
     {/*Chats*/}
     <Chats />
    

      <Box sx={{
        height: "100%",
        width: sideBar.open ? "calc(100vw - 740px )" : "calc(100vw - 402px )",
        backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.paper,
        
      }}>
        {/*Conversation*/}
        <Conversation />
        </Box>
        {/*Contact*/}
        {sideBar.open && <Contact /> }
      </Stack>
    
  )
}

export default GeneralApp;

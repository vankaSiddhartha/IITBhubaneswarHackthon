
import React from "react"
import NavBar from "./auth/components/NavBar"

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddCard from './Gojo/AddCard'
import SidebarWithHeader from "./HomePage"
import { getStorage, ref as ref1,uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import Bidding from './Gojo/Bidding'
import LandingPage from "./auth/LandingPage"
import CreateAccount from "./auth/createAccount/CreateAccount"
import SelectInterest from "./auth/createAccount/SelectIntrest"
import RegisterAccount from "./auth/createAccount/RegisterAccount"
import LoginAccount from "./auth/login/LoginAccount"
import EmailVerify from "./auth/login/EmailVerify"
import Home from "./socialModule/ChatB"
import FriendRequestUI from "./socialModule/FriendsRequest"
import './index.css'
import SeeFriendInDetail from "./socialModule/SeeFriendsInDetails"
import ChatB from "./socialModule/ChatB"
import FriendRecomdataion from "./socialModule/FriendsRecomdationWithNav"
import NotificationPanel from "./socialModule/Notification"
import NotificationInNav from "./socialModule/NotificationInNav"





const firebaseConfig = {
  apiKey: "AIzaSyBaGEpnwQf01FPH_3FDz8HiKrrFUD6h-lU",
  authDomain: "hackathon-80b62.firebaseapp.com",
  projectId: "hackathon-80b62",
  storageBucket: "hackathon-80b62.appspot.com",
  messagingSenderId: "105991838384",
  appId: "1:105991838384:web:bae08d8e166691b927f975",
  measurementId: "G-H78SJEQ11E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app)
const storage = getStorage(app)


export async function read(path){
  return new Promise((res, rej) => {
    onValue(ref(db, path), snap => {
      res(snap.val())
    })
  })
}



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/intrest" element={<SelectInterest/>}/>
                <Route path="/reg" element={<RegisterAccount/>}/>
                <Route path="/login" element = {<LoginAccount/>}/>
                <Route path="/verify" element = {<EmailVerify/>}/>
                <Route path="/post" element = {<ChatB/>}/>
                <Route path="/fr" element={<FriendRecomdataion/>}/>
                <Route path="/home" element = {<SidebarWithHeader/>}/>
           
                <Route path="/see" element = {<SeeFriendInDetail/>}/>
                     <Route path="/seeFri" element = {<SeeFriendInDetail/>}/>
                     <Route path="/noti" element = {<NotificationInNav/>}/>

      </Routes>
    </Router>
  );
}

export default App;

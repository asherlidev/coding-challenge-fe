import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Web3 from "web3";
// import { useHistory } from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";
import "../../translations/i18n";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Header from "../Header";
import Wallet from "../Wallet";
import LiveData from "../LiveData";
import DifiShaking from "../DifiStaking";
import RollingData from "../RollingData";

export default function Home({ childToParent }) {

  return (
    <div className="main-container my-5 py-30 px-50 main-card bg-gray main-body">
      <Header />
      <main>
        <LiveData/>
        <RollingData/>
        <DifiShaking />
      </main>
    </div>
  );
}

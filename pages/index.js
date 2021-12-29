import Head from 'next/head'
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Web3 from 'web3';
import MatrixBG from "../components/matrix.js";
import getWeb3 from '../utils/getWeb3';
import getBalance from '../utils/getBalance';

const supportedTokens = [
  {
    name: 'HYPE',
    symbol: 'HYPE',
    decimals: 18,
    address: '0x9a77eE1DACCc13674B047F967F863B5C8A9f6807',
  },
  {
    name: 'GIVE',
    symbol: 'GIVE',
    decimals: 18,
  }
]

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [selection, setSelection] = useState(false);
  const [user, setUser] = useState(false);
  const [balance, setBalance] = useState(false);
  const [hypeBalance, setHypeBalance] = useState(false);
  const [giveBalance, setGiveBalance] = useState(false);
  const [tokenAddresses, setTokenAddresses] = useState([]);
  const redPill = () => {
    getWeb3(true)
      .then((result) => {
        getBalance(result, '0x9a77eE1DACCc13674B047F967F863B5C8A9f6807')
          .then(balance => {
            setBalance(balance);
          });
      });
  };

  useEffect(() => {
    const checkConnection = async () => {

      // Check if browser is running Metamask
      let web3;
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
      } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
      };

      // Check if User is already connected by retrieving the accounts
      web3.eth.getAccounts()
        .then(async (addr) => {
          // Set User account into state
          setUser(addr[0]);
          // Set User balance into state
          // setBalance(await web3.eth.getBalance(addr[0]));
          // Set Hype balance into state
          // setHypeBalance(await web3.eth.getTokenBalance(addr[0], '0x9a77eE1DACCc13674B047F967F863B5C8A9f6807'));
          // Set Give balance into state
          // setGiveBalance(await web3.eth.getBalance(addr[0]));
          setLoading(false);
        });
    };
    checkConnection();
    
  }, []);

  if (loading) return 'Loading...';

  return (

    <>
      <div>
        <Head>
          <link
            rel="preload"
            href="/fonts/orange_kid.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
      </div>
      <>
        <div
          className={'matrix'}>
            {
              user &&
              <>
                <h1>When you're ready.</h1>
                <h2>{user}</h2>
                <h3>{balance}</h3> 
                <Link href={'/gatekeeper'}><a href="">Enter Metaverse</a></Link>
              </>
            }

            {
              !user &&
              <>
            <h1>Welcome to Scion.</h1>
            <p>You know what you must do.</p>
            <div className={'row'}>
              <div
                className={'button'}
                onClick={redPill}
              > Red pill </div>
              <br />
              <div className='button' onClick={() => setSelection(false)}> Learn More </div>
            </div>
          </>
            }
          
        </div>
        <MatrixBG selection={true} />
      </>
    </>
  );
}

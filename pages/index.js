import Head from 'next/head'
import Link from "next/link";
import React, { useState, useEffect } from "react";
import MatrixBG from "../components/matrix.js";

export default function Index() {
  const [selection, setSelection] = useState(null);

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
          <h1>Welcome to Scion.</h1>
          <p>You know what you must do.</p>
          <div className={'row'}>
            <Link href="/red-pill">
              <a> Red pill </a>
            </Link>
            <br />
            <Link href="/blue-pill">
              <a> Blue pill </a>
            </Link>
          </div>
        </div>
        <MatrixBG selection={true} />
      </>
    </>
  );
}
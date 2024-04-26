import Head from "next/head";

import Home from "@/components/home";

import {NextPage} from "next";

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>ChatEDU</title>
                <meta name="description" content="A Second Brain for Students." />
                <meta name="viewport" content="width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no, user-scalable=0;" />
                <link rel="icon" href="/logo.ico" />
            </Head>
            <Home />
        </>
  )
}

export default HomePage
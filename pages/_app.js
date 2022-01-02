import Head from "next/head";
import { useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";
import store, { wrapper } from "../redux/store";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);

    return (
        <ReduxProvider store={store}>
            <Head>
                <title>Jovanni's Cat Browser</title>
                <meta
                    name="description"
                    content="Everything you need to know about cats"
                />
                <link rel="icon" href="/caticon.png" />
            </Head>
            <Component {...pageProps} />
        </ReduxProvider>
    );
}

export default wrapper.withRedux(MyApp);

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <div className="flex flex-col">
            <div className="w-full h-12" />
            <div className="border-b-2 w-full h-12 fixed flex justify-center items-center bg-slate-100 z-50">
                TEST EXAMPLE
            </div>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;

import '../styles/globals.css';
import '../node_modules/highlight.js/styles/a11y-dark.css';

function MyApp({ Component, pageProps }) {
    return (
        <div className="flex flex-col">
            <div className="w-full h-12" />
            <div className="border-b-2 w-full h-12 fixed flex justify-center items-center bg-slate-200 z-50 ">
                Header
            </div>
            <Component {...pageProps} />
            <footer className="py-5 mt-4 border-t-2 flex flex-col justify-center items-center">
                <p>this project is just example for learning react widget.</p>
                <p>this project is just example for learning react widget.</p>
                <p>this project is just example for learning react widget.</p>
            </footer>
        </div>
    );
}

export default MyApp;

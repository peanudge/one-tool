import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>OneTool</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-12/12 sm:w-3/4 md:w-1/2">
                <div>HOME</div>
            </main>
        </>
    );
}

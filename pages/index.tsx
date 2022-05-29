import Head from 'next/head';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>OneTool</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-blue-600 w-1/2 flex">
                <div className="mx-auto bg-blue-600">
                    <h1 className="text-white text-xl">One Tool</h1>
                </div>
            </main>
        </div>
    );
}

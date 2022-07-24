import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>OSS Insight Demo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                {children}
            </main>

            <footer className="flex flex-row h-24 w-full gap-4 items-center justify-center border-t">
                <a className="text-blue-600 flex items-center justify-center gap-2"
                    href="https://tidb.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by TiDB Cloud{' '}
                </a>

                <a className="flex items-center justify-center gap-2"
                    href="https://twitter.com/PingCAP"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Follow Me on{' '}
                    <svg
                        className="w-6 h-6 text-blue-300 fill-current"
                        viewBox="0 0 24 24">
                        <path
                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                        />
                    </svg>
                </a>

                <a className="flex items-center justify-center gap-2"
                    href="https://github.com/siddontang/next-tidb-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Fork Me on{' '}
                    <svg height="24" viewBox="0 0 19 19" width="24">
                        <path
                            d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z" fill="currentColor">
                        </path></svg>
                </a>
            </footer>
        </div>

    )
}
import Head from 'next/head';


const Layout = (props) =>{

    return(
    <>
        <Head>
            <title>Netcode CRM | index</title>
        </Head>
        <div className="block h-screen bg-gray-300">
            <nav className="flex w-screen content-center h-20 bg-gray-800">
            <a href="/"><h1 className="pr-6 pl-6 pt-5 text-white font-bold text-xl font-medium">Netcode CRM</h1></a>
                <ul className="flex">
                    <a href="/" className="pr-6 pl-6 pt-6 text-white hover:text-gray-800 hover:bg-gray-500"><li>
                        Customers
                    </li></a>
                </ul>
            </nav>
            <div className="flex w-4/5 m-auto mt-8 h-auto bg-gray-400" >
                <div className="block w-full h-auto bg-gray-400">
                    <nav className="flex w-full content-center h-20 bg-gray-800">
                        <h1 className="pr-6 pl-6 pt-6 text-white font-bold font-medium">{props.pageName}</h1>
                    </nav>
                    {props.children}
                </div>
            </div>
        </div>
    </>
    );
}

export default Layout;
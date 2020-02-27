import Head from 'next/head';


const Layout = (props) =>{

    return(
    <>
        <Head>
            <title>Netcode CRM | index</title>
        </Head>
        <div className="block h-screen bg-blue-600">
            <nav class="flex w-screen content-center h-20 bg-gray-700">
            <a href="#"><h1 className="pr-6 pl-6 pt-6 text-white font-bold font-medium">Netcode CRM</h1></a>
                <ul className="flex">
                    <a href="#"  className="pr-6 pl-6 pt-6 text-white hover:text-gray-800 hover:bg-gray-500"><li>
                        Customers
                    </li></a>
                    <a href="#"  className="pr-6 pl-6 pt-6 text-white hover:text-gray-800 hover:bg-gray-500"><li>
                        +Add Customer
                    </li></a>
                    <a href="#"  className="pr-6 pl-6 pt-6 text-white hover:text-gray-800 hover:bg-gray-500"><li>
                        -Delete Customer
                    </li></a>
                </ul>
            </nav>
            <div className="flex w-4/5 m-auto mt-8 h-auto bg-gray-400">
                {props.children}
            </div>
        </div>
    </>
    );
}

export default Layout;
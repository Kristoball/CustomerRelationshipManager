import Layout from '../components/Layout';

const LoginPage = () =>{
    return(
        <>
        <Layout>
        <div className="block w-full h-auto bg-gray-400">
                <nav class="flex w-full content-center h-20 bg-gray-700">
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
                <div className="block w-full h-auto p-8 bg-gray-400">Hello world</div>
            </div>
        </Layout>
        </>
    );
}

export default LoginPage;
import Layout from '../components/Layout';
import CustomerList from '../components/CustomerList';
import CreateCustomer from '../components/CreateCustomer';
import PageNotFound from '../components/PageNotFound';
import ViewCustomer from '../components/ViewCustomer';

import React, {useEffect, useState} from 'react';

const Index = () =>{
    const [pageName, setPageName] = useState("Customers")

    const page = () =>{
        {
            switch (pageName) {
                case 'Customers':
                    return <CustomerList setPageName={setPageName}/>
                case 'Add customer':
                    return <CreateCustomer/>
                case 'View customer':
                    return <ViewCustomer/>
                default:
                    return <PageNotFound/>
            }
        }
    }

    return(
        <>
        <Layout pageName={pageName}>
            {page()}
        </Layout>
        </>
    );
}

export default Index;
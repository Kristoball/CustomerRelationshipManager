import Layout from '../components/Layout';
import React, {useEffect, useState} from 'react';
import CreateCustomer from '../components/CreateCustomer';

const addCustomer = () =>{
    const [customerName, setCustomerName] = useState("TMS");
    return(
        <>
        <Layout pageName={"View customer: "+ customerName}>
            <ViewCustomer/>
        </Layout>
        </>
    );
}

export default addCustomer;
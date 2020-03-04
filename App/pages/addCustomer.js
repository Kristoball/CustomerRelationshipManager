import Layout from '../components/Layout';
import CreateCustomer from '../components/CreateCustomer';

const addCustomer = () =>{
    return(
        <>
        <Layout pageName={"Add customer"}>
            <CreateCustomer/>
        </Layout>
        </>
    );
}

export default addCustomer;
import Layout from '../components/Layout';
import CustomerList from '../components/CustomerList';

const Index = () =>{
    return(
        <>
        <Layout pageName={"Customers"}>
            <CustomerList/>
        </Layout>
        </>
    );
}

export default Index;
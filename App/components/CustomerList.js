import React, {useEffect, useState} from 'react';

const CustomerList = (props) =>{

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        console.log("Hello, fetch all Customers!");
        setCustomers([{name:"TMS", date:"27.02.2020", numLogs:"0"}]);
    }, [])
    if(customers.length<1){
        return(<div className="block w-full h-auto p-8 bg-gray-400">
        <table>
            <thead>
                <tr>
                    <th className="p-2">Customer Name</th>
                    <th className="p-2">Created</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    
                </tr>
            </tbody>
        </table>
        
        <a href="/addCustomer" className="p-2 bg-blue-500" >+Add Customer</a>
    </div>);
    }

    return(
        <div className="block w-full h-auto p-8 bg-gray-400">
            <table>
                <thead>
                    <tr>
                        <th className="p-2">Customer Name</th>
                        <th className="p-2">Created</th>
                        <th className="p-2">Number of logs</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {customers.map(customer=>(<tr key={customer.name}><td className="p-2">{customer.name}</td><td className="p-2">{customer.date}</td><td className="p-2">{customer.numLogs}</td></tr>))}
                        
                    
                </tbody>
            </table>
            
            <a href="/addCustomer" className="block w-40 p-2 mt-4 bg-blue-500" >+Add Customer</a>
        </div>
    );
}

export default CustomerList;
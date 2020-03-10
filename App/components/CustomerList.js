import React, {useEffect, useState} from 'react';

const CustomerList = ({setPageName}) =>{

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        console.log("Hello, fetch all Customers!");
        setCustomers([
            {name:"TMS", date:"27.02.2020", numLogs:"0"},
            {name:"YX Stathelle", date:"28.02.2020", numLogs:"0"},
            {name:"YX Stathelle", date:"28.02.2020", numLogs:"0"},
            {name:"YX Stathelle", date:"28.02.2020", numLogs:"0"},
            {name:"YX Stathelle", date:"28.02.2020", numLogs:"0"}
        ]);
    }, [])

    return(
        <div className="block w-full h-auto p-8 bg-gray-400">
            <table className="w-full">
                <thead className="bg-gray-600">
                    <tr>
                        <td className="p-2 font-bold">Customer Name</td>
                        <td className="p-2 font-bold">Created</td>
                        <td className="p-2 font-bold">Number of logs</td>
                    </tr>
                </thead>
                <tbody>
                
                    {customers.map((customer, i)=>(
                    <tr key={customer.name+i} className={i%2==0?'bg-gray-500':'bg-gray-400'}>
                        <td onClick={e=>setPageName("View customer")} className="p-2"><a>{customer.name}</a></td>
                        <td className="p-2">{customer.date}</td>
                        <td className="p-2">{customer.numLogs}</td>
                    </tr>))}
                
                </tbody>
            </table>
            <button onClick={e=>setPageName("Add customer")} className="inline-block w-40 p-2 mt-4 bg-blue-500" >+ Add Customer</button>
            <button onClick={e=>console.warn("Need to add refresh list event")} className="inline-block ml-2 p-2 mt-4 bg-blue-500" >Refresh</button>
        </div>
    );
}

export default CustomerList;
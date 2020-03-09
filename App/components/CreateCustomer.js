import React, {useState} from 'react';


const CreateCustomer = () =>{

    const [customerName, setCustomerName] = useState('');
    const [customerDesc, setCustomerDesc] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactTlf, setContactTlf] = useState('');

    const handleCreateCustomer = (e) =>{
        e.preventDefault();
        
    }


    return(
    <div className="block w-full h-auto p-8 bg-gray-400">
        <form onSubmit={handleCreateCustomer}>
            <table className="w-full">
                <tbody>
                    <tr><td className="m-2 pt-1 w-56 align-text-top">Customer name</td><td><input required className="mt-2 w-full" type="text" value={customerName} onChange={e=>setCustomerName(e.target.value)} /></td></tr>
                    <tr><td className="m-2 pt-1 w-56 align-text-top">Customer description</td><td><textarea required className="mt-2 h-20 w-full" type="text-area" value={customerDesc} onChange={e=>setCustomerDesc(e.target.value)} /></td></tr>
                    <tr><td className="m-2 pt-1 w-56 align-text-top">Contact name</td><td><input required className="mt-2 w-full" type="text" value={contactName} onChange={e=>setContactName(e.target.value)} /></td></tr>
                    <tr><td className="m-2 pt-1 w-56 align-text-top">Contact email</td><td><input required className="mt-2 w-full" type="email" value={contactEmail} onChange={e=>setContactEmail(e.target.value)} /></td></tr>
                    <tr><td className="m-2 pt-1 w-56 align-text-top">Contact tlf</td><td><input className="mt-2 w-full" type="text" value={contactTlf} onChange={e=>setContactTlf(e.target.value)} /></td></tr>
                    <tr><td className="m-2 pt-1 w-56 align-text-top"></td><td><button type="submit" className="block mt-2 float-right m-0 text-white hover:bg-gray-700 bg-gray-800 p-2">Submit</button></td></tr>
                </tbody>
            </table>
        </form>
    </div>
    );
}


export default CreateCustomer
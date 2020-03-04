import React, {useState} from 'react';


const LoginForm = () =>{
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) =>{
        e.preventDefault();
        alert("logging inn with name: "+name+" and password: "+password);
    }

    return(
        <div className="block md:p-20 m-auto content-center h-screen bg-blue-800 pt-16">
            <form className="block w-full 3 md:m-auto md:max-w-md bg-blue-600 md:rounded md:h-64 pl-10 p-4" method="" action="" onSubmit={handleLogin}>
                <h1 className="text text-2xl">Login</h1>
                <div className="block p-2">Name <br/><input type="text" value={name} onChange={e=>setName(e.target.value)}/></div>
                <div className="block p-2">Password <br/><input type="password" value={password} onChange={e=>setPassword(e.target.value)} /><br/></div>
                <div className="block p-2"><input className="p-2" type="submit" /></div>
            </form>
        </div>
    );
}

export default LoginForm;
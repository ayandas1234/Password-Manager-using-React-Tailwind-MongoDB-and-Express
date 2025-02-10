import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    const getPasswords = async () => {
        let req = await fetch("http://localhost:3000/")
        let passwords = await req.json()
        console.log(passwords);
        setpasswordArray(passwords)
    }

    useEffect(() => {
        getPasswords()
    }, [])

    const copyText = (text) => {
        toast('🚀 Copied to clipboard! 📋', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        navigator.clipboard.writeText(text);
    }

    const showPassword = () => {
        passwordRef.current.type = "text";
        if (ref.current.src.includes("/icons/eyecross.png")) {
            ref.current.src = "/icons/eye.png"
            passwordRef.current.type = "password";
        }
        else {
            ref.current.src = "/icons/eyecross.png"
            passwordRef.current.type = "text";
        }
    }

    const savePassword = async () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

            let newId = { ...form, id: uuidv4() };

            // Save the new password to the database
            let saveResponse = await fetch("http://localhost:3000/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, id: newId })
            });

            if (!saveResponse.ok) {
                toast('❗ Error: Failed to save password!', { theme: "light" });
                return;
            }

            // Update state with new password
            setpasswordArray([...passwordArray, { ...form, id: newId }]);

            // Reset form
            setform({ site: "", username: "", password: "" });

            toast('✅ Password Saved Successfully!', { theme: "light" });
        } else {
            toast('❗⚠️ Error: Password not saved! Ensure all fields have at least 4 characters.');
        }
    }

    const deletePassword = async (id) => {
        console.log("Deletig Password With id -->> ", id);
        let con = confirm("Do You Really Want To Delete This Password ?")
        if (con) {
            setpasswordArray(passwordArray.filter(item => item.id !== id))

            await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });

            toast('🚀 Password Delete Successfully 👉🏻🗑️', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }

    const editPassword = async (id) => {
        console.log("Editing Password With id -->> ", id);
        let con = confirm("Do You Really Want To Edit This Password ?")
        if (con) {
            await fetch("http://localhost:3000/", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id })
            });

            setform({ ...passwordArray.filter(item => item.id === id)[0], id: id })
            setpasswordArray(passwordArray.filter(item => item.id !== id))

        }
    }

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />

            <div className="p-2 md:mycontainer min-h-[81.6vh]">

                <h1 className='text-4xl font-bold text-center p-3'>
                    <span className='text-green-500'> &lt;</span>
                    <span>
                        Pass
                        <span className='text-green-500'>Op/&gt;</span>
                    </span>
                </h1>

                <p className='text-green-900 text-lg text-center font-semibold'>Your Own Password Manager</p>

                <div className=" flex flex-col p-4 text-black gap-8 items-center">

                    <input value={form.site} onChange={handlechange} placeholder='Enter Website URL' className='rounded-full border border-green-600 w-full p-4 py-1' type="text" name="site" id="site" />

                    <div className="flex flex-col md:flex-row w-full justify-between gap-8">
                        <input value={form.username} onChange={handlechange} placeholder='Enter UserName' className='rounded-full border border-green-600 w-full p-4 py-1' type="text" name="username" id="username" />

                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handlechange} placeholder='Enter PassWord' className='rounded-full border border-green-600 w-full p-4 py-1' type="password" name="password" id="password" />

                            <span className='absolute right-[4px] top-[3px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={28} src="/icons/eye.png" alt="eye" />
                            </span>
                        </div>

                    </div>

                    <button onClick={savePassword} className='flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit gap-2 border border-green-600'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover" >
                        </lord-icon>
                        Save
                    </button>

                </div>

                <div className="passwords overflow-x-auto">
                    <h2 className='font-bold text-2xl py-2'>Your PassWords</h2>

                    {passwordArray.length === 0 && <div className='text-base font-semibold'> No Passwords To Show </div>}

                    {passwordArray.length != 0 && <table className='table-auto min-w-full rounded-md overflow-hidden mb-10'>
                        <thead className='bg-green-600 text-white text-sm md:text-base'>
                            <tr>
                                <th className='py-1 md:py-2'>Site</th>
                                <th className='py-1 md:py-2'>UserName</th>
                                <th className='py-1 md:py-2'>PassWord</th>
                                <th className='py-1 md:py-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100 text-sm md:text-base'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='text-center py-1 border border-white'>
                                        <div className='inline-flex items-center justify-center'>
                                            <a href={item.site} target='_blank'> {item.site}</a>
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-center py-1 border border-white'>
                                        <div className='inline-flex items-center justify-center'>
                                            <span>
                                                {item.username}
                                            </span>
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-center py-1 border border-white'>
                                        <div className='inline-flex items-center justify-center'>
                                            <span>
                                                {"*".repeat(item.password.length)}
                                            </span>
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-center py-1 border border-white'>
                                        <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                        <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>

        </>
    )
}

export default Manager

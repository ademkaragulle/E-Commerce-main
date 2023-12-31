import React from 'react'
import './SignUp.css'
import { useState } from 'react'
function SignUp() {
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [password, setPassword] = useState()

    const CreateNewUser = (e) => {
        e.preventDefault()
        const newUser = {
            "email": email,
            password: password,
            name: name,
            surname: surname
        }
        fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...newUser })
        }).then(response => response.json())
            .catch(error => {
                console.error('Error creating new user:', error);
            });
    }


    return (
        <div className='sign-up mt-4'>
            <h2>Sign Up</h2>
            <form className='form my-2'>
                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} className='form-control' type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input onChange={(e) => setName(e.target.value)} className='form-control' type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="surname">Surname</label>
                    <input onChange={(e) => setSurname(e.target.value)} className='form-control' type="text" name="surname" id="surname" />
                </div>
                <div>
                    <label htmlFor="Password">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} className='form-control' type="password" name="Password" id="Password" />
                </div>
                <div>
                    <input type='submit' onClick={(e) => CreateNewUser(e)} className="btn btn-primary form-control my-2" />
                </div>
            </form>

        </div>
    )
}

export default SignUp
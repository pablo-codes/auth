import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


import LoginServices from '../../services/LoginService';

const GitAuth = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const [state, Setstate] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        if (code) {
            LoginServices.gitparams({ code: code }).then((e) => {
                Setstate(e.data)
                console.log(e.data)


            }).catch((err) => {
                console.log(err)
            })
        }


    }, [code])

    return (
        <div>
            {state}
        </div>
    )
}

export default GitAuth
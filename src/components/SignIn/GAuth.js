import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


import LoginServices from '../../services/LoginService';



const GAuth = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const [state, Setstate] = useState('')
    const navigate = useNavigate()



    useEffect(() => {
        if (code) {
            LoginServices.gparams().then(async (e) => {
                const { tokenUrl, formData } = e.data
                formData.code = code

                const params = new URLSearchParams(formData)

                let form = params.toString()
                const response = await axios.post(tokenUrl, form, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                })
                LoginServices.gverify({ token: response.data.access_token }).then((e) => {
                    console.log(e.data)
                    Setstate(e.data)
                }).catch((err) => {
                    console.log(err)
                })

            }).catch((err) => {
                console.log(err)
            })
        }


    }, [code])



    return (
        <div>{state}</div>
    )
}

export default GAuth
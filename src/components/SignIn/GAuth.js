import React, { useEffect } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie';
import LoginServices from '../../services/LoginService';



const GAuth = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const [cookies, setCookies] = useCookies(['token'])



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
                    if (e.data.status === true) {
                        const today = new Date();
                        const next30Days = new Date(today);
                        next30Days.setDate(next30Days.getDate() + 30);
                        setCookies('token', e.data.token, { path: '/', expires: next30Days })
                        window.close()
                    } else {
                        console.log(e.data.err)
                    }
                }).catch((err) => {
                    console.log(err)
                })

            }).catch((err) => {
                console.log(err)
            })
        }


    }, [code])



    return (
        <div></div>
    )
}

export default GAuth
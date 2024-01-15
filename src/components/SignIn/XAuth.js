import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';


import LoginServices from '../../services/LoginService';

const XAuth = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const [cookies, setCookies] = useCookies(['token'])


    useEffect(() => {
        if (code) {
            LoginServices.xparams({ code: code }).then((e) => {
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
        }


    }, [code])

    return (
        <div>XAuth</div>
    )
}

export default XAuth
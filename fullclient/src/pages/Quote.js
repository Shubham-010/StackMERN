
import  { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
const jwt = require('jwt-decode');

const Quote =()=>{
    const [quote, setQuote] = useState('');
    const [tempQuote, setTempQuote] = useState('');
    const navigate = useNavigate();

    const populateQuote = async () => {
        debugger
        const req = await fetch('http://localhost:7777/api/quote', {
            headers: { 'x-access-token': localStorage.getItem('token') }
        })
        const data = await req.json();
        if(data.status === 'ok'){
            setQuote(data.quote)
        }else{}

        console.log(data,"quotesdata");
    }
    
    useEffect(() => {
        debugger
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.verify(token,'Astra123');;
            if (!user) {
                localStorage.removeItem('token');
                navigate('/')
            } else {
                populateQuote()
            }
        }
    }, [])

    async function  updatequote() {
        debugger
        const req = await fetch('http://localhost:7777/api/quote', {
            method:"POST",
            headers: { 
                'Content-Type':'application/json',
                'x-access-token': localStorage.getItem('token') ,
            body: JSON.stringify({
                quote:tempQuote
            })
        }
        })
        const data = await req.json();
        if (data.status === 'ok') {
            setTempQuote('')
            setQuote(data.quote)
        } else { 
            alert(data.error)
        }
    }
   
    return(
        <div>
            <>Your Quotes : {quote || "No Quote found"}</>
            <form onSubmit={updatequote}>
                <input
                    type='text'
                    placeholder='Quote'
                    value={tempQuote}
                    onChange={(e) => setTempQuote(e.target.value)}
                    // onChange={()=>}
                ></input>
                <input
                    type='submit'
                    value={'Update quote'}
                    // onClick={updatequote}
                ></input>
            </form>
        </div>
    )
}
export default Quote;
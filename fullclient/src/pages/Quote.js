
import  { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
const jwt  = require('jsonwebtoken')

const Quote =()=>{
    const navigate = useNavigate();

    const populateQuote = async () => {
        const req = await fetch('http://localhost:7777/api/quotes', {
            headers: { 'x-access-token': localStorage.getItem('token') }
        })
        const data = req.json();
        console.log(data,"quotesdata");
    }
    
    useEffect(() => {
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
   
    return(
        <>Quotes</>
    )
}
export default Quote;
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function checkLogin(setLoading) {
    const navigate = useNavigate();
    useEffect(() => {
        async function hello() {
            const response = await testingPromise();
            console.log(response);
            setLoading(false);
        }

        hello();
    }, [navigate, setLoading])
    return null
}

function testingPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello")
        }, 3000)
    })
}

export default checkLogin
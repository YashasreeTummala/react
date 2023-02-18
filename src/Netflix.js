import './Netflix.css';
import {useEffect , useState} from 'react';

export default function Netflix() {
    const [count , setCount] = useState(0);
    useEffect(() => {
            let x = setInterval(() => {
                setCount(count => count + 1);
            }, 1000);
        }, [])

    return (
        <div className="bgImg">

            <div className="navbar">
                <h1 className="logo"> NETFLIX </h1>
                <button className="sign-btn"> Sign up! </button>
            </div>

            <div>
                <h1 className="counter"> Hits : {count} </h1>
            </div>

            <div className="content">
                <h1> Umlimited Movies, TV <br /> Shows and more. </h1>
                <h3> Watch anywhere! Cancel anytime! </h3>
                <p> Ready to watch ? Enter your email address </p>
                <input type="email" placeholder='Email Address'/>
                <button className="start-btn"> Get started &gt; </button>
            </div>

        </div>
    );
}

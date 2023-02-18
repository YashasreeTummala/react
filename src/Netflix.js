import './Netflix.css'

function Netflix() {
    return (
        <div className="bgImg">
            <div className="navbar">
                <h1 className="logo"> NETFLIX </h1>
                <button className="sign-btn"> Sign up! </button>
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

export default Netflix;
import './cabecalho.css';

const Cabecalho = () => {
  return (
    <div className='corDeFundo'>
        <header className='navegacao'>
        <img src="./imagens/logo.svg" alt="" />    
         <div className="custom-dropdown">
            <a href="#" className='dropdown-toggle'>Product</a>
            <ul className="descer-menu">
                <li><a href="#">Contact</a></li>
                <li><a href="#">Newsletter</a></li>
                <li><a href="#">Linkedin</a></li>
            </ul>
        </div>
        <div className="custom-dropdown">
            <a href="#" className='dropdown-toggle'>Company</a>
            <ul className="descer-menu">
                <li><a href="#">Contact</a></li>
                <li><a href="#">Newsletter</a></li>
                <li><a href="#">Linkedin</a></li>
            </ul>
        </div>
        <div className="custom-dropdown">
            <a href="#" className='dropdown-toggle'>Connect</a>
            <ul className="descer-menu">
                <li><a href="#">Contact</a></li>
                <li><a href="#">Newsletter</a></li>
                <li><a href="#">Linkedin</a></li>
            </ul>
        </div>
        <button type="button" id="btnLogin">Login</button>
        <button type="button" id="btnSignUp">Sign Up</button>
        </header>
        <div className='headerTextoInicial'>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className='modernPublishBtns'>
        <button type="button" id="btnStartForFree">Start For Free</button>
        <button type="button" id="btnLearnMore">Learn More</button>
        </div>
        </div>
    </div>
  );
};

export default Cabecalho;

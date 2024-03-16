import './rodape.css'

const Rodape = () => {
    return (
        <div>
            <footer className='rodape'>
         <img src="./imagens/logo.svg" alt="" />
               <div id="coluna">
                <h3>Product</h3>
                <ul>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Marketplace</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Integrations</a></li>
                </ul>
               </div>
               <div id="coluna">
                <h3>Company</h3>
                <ul>
                  <li><a href="#">About</a></li> 
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
               </div>
               <div id="coluna">
                <h3>Connect</h3>
                <ul>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Newsletter</a></li>
                  <li><a href="#">Linkedin</a></li>  
                </ul>
               </div>
            </footer>
        </div>
    )
}

export default Rodape
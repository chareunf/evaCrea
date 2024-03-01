import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>

            <div className="container">
                
                <ul className=" d-flex justify-content-center">
                    <li className="bordesFooterRedes--facebook">
                        <Link to="https://www.facebook.com/creaelige" target="_blank">
                            <img src="/img/facebook.png" alt="iconofacebook"  />
                        </Link>
                    </li>
                    <li className="bordesFooterRedes--instagram">
                        <Link to="https://www.instagram.com/" target="_blank">
                            <img src="/img/instagram.png" alt="iconoinstagram"  />
                        </Link>
                    </li>
                    <li className="bordesFooterRedes--whatsapp">
                        <Link to="https://web.whatsapp.com/" target="_blank">
                            <img src="/img/whatsapp.png" alt="iconowhatsapp"  />
                        </Link>
                    </li>
                </ul>
                
            </div>

        </footer>
  )
}

export default Footer
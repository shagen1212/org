import "./footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
        <div className="redes">
            <a href='https://www.facebook.com/shageninside/'> 
                <img src="/img/facebook.png" alt="Facebook"/>
            </a>
            <a href='https://twitter.com/RicardoCmD'> 
                <img src="/img/twitter.png" alt="twitter" />
            </a>
            <a href='https://www.instagram.com/shagenrules/'> 
                <img src="/img/instagram.png" alt="instagram" />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' /> 
        <strong>Developed by Ricardo Rios</strong>
    </footer>
}

export default Footer
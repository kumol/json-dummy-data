import classes from "./Footer.module.css"
const Footer = ()=>{
    return(
        
            <div className={classes.Footer}>
                <p className={classes.Paragraph}>© {new Date().getFullYear()} Bootstrapious All rights reserved.</p>
            </div>

    )
}

export default Footer;
import Aux from "../Aux/Aux"
import classes from "./Layout.module.css";
const Layout = (props) => {
    return(
        <Aux>
            <main className={classes.Content}>{this.props.children}</main>
        </Aux>
            
    )
}
import Toolbar from "../../component/Navigation/Toolbar/Toolbar";
import Aux from "../Aux/Aux"
import classes from "./Layout.module.css";
const Layout = (props) => {
    return(
        <Aux>
            <Toolbar/>
            <main className={classes.Content}>{props.children}</main>
        </Aux>     
    )
}

export default Layout;
import Toolbar from "../../component/Navigation/Toolbar/Toolbar";
import Footer from "../../component/UI/Footer/Footer";
import Aux from "../Aux/Aux"
import classes from "./Layout.module.css";
const Layout = (props) => {
    return(
        <Aux>
            <Toolbar/>
            <main className={classes.Content}>{props.children}</main>
            <Footer/>
        </Aux>     
    )
}

export default Layout;
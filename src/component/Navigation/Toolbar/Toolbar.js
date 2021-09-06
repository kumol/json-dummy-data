
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";
const Toolbar = (props) => (
    <header className = {classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.Desktopview}>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
)

export default Toolbar;
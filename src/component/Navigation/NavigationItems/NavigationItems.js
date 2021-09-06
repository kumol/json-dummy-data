import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const NavigationItems = (props) => {
    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>
                HOME
            </NavigationItem>
            <NavigationItem link="/api" >API</NavigationItem>
        </ul>
    )
}

export default NavigationItems;
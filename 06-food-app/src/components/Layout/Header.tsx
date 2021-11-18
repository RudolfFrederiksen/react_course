import mealsImg from "../../assets/meals.jpeg";
import classes from "./Header.module.scss";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>Food app exercise</h1>
                <HeaderCartButton />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImg} alt="table of various meals" />
            </div>
        </>
    );
};

export default Header;

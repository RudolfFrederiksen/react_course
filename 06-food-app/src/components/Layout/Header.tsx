import mealsImg from "../../assets/meals.jpeg";
import classes from "./Header.module.scss";
import HeaderCartButton from "./HeaderCartButton";

interface IHeaderProps {
    onShowCart: () => void;
}

const Header = (props: IHeaderProps) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Food app exercise</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImg} alt="table of various meals" />
            </div>
        </>
    );
};

export default Header;

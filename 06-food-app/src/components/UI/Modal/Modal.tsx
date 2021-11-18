import ReactDOM from "react-dom";
import { BasePropsWithChildren } from "../../../types/propsUtils";
import classes from "./Modal.module.scss";

interface IModalProps {
    onBackdropClick: () => void;
}

const Modal = (props: BasePropsWithChildren & IModalProps) => {
    return (
        <>
            {ReactDOM.createPortal(
                <>
                    <div className={classes.backdrop} onClick={props.onBackdropClick} />
                    <div className={classes.modal}>
                        <div className={classes.content}>{props.children}</div>
                    </div>
                </>,
                document.getElementById("modal-overlay")!
            )}
        </>
    );
};

export default Modal;

import "./ExpenseForm.scss";

export function ExpenseForm() {
    return (
        <form>
            <div className="controls">
                <div className="control">
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div className="control">
                    <label>Amount</label>
                    <input type="number" />
                </div>
                <div className="control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="actions">
                <button type="submit">Add expense</button>
            </div>
        </form>
    );
}

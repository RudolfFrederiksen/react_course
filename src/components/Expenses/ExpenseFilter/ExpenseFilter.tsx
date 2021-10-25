import "./ExpenseFilter.scss";

interface IExpenseFilterProps {
    defaultYear: string;
    onYearUpdate: (year: string) => void;
}

const ExpenseFilter = (props: IExpenseFilterProps) => {
    const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        props.onYearUpdate(e.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="control">
                <label>Filter by year</label>
                <select onChange={selectHandler} value={props.defaultYear}>
                    <option value="">All years</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;

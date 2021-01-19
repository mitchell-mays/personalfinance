import Budget from '../components/Budget';

function BudgetPage() {
    return (
    <div>
        <h1>Budgets</h1>
        <Budget isCreated={false}/>
        <Budget isCreated={true} id={"86a785e0-4828-4363-8f67-6845633e21cf"}/>
    </div>
    );
}

export default BudgetPage;
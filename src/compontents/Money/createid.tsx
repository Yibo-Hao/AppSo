const createCostId = () => {
  let costId = JSON.parse(window.localStorage.getItem("costId") || "4");
  return function CostId() {
    costId = costId += 1;
    window.localStorage.setItem("costId", JSON.stringify(costId));
    return costId;
  };
};
const createIncomeId = () => {
  let incomeId = JSON.parse(window.localStorage.getItem("incomeId") || "4");
  return function IncomeId() {
    incomeId = incomeId += 1;
    window.localStorage.setItem("incomeId", JSON.stringify(incomeId));
    return incomeId;
  };
};
const addIncomeId = createIncomeId();
const addCostId = createCostId();
export { addCostId, addIncomeId };
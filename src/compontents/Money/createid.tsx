const createCostId = () => {
  let costId = 4;
  return function CostId() {
    costId = costId += 1;
    return costId;
  };
};
const createIncomeId = () => {
  let incomeId = 4;
  return function IncomeId() {
    incomeId = incomeId += 1;
    return incomeId;
  };
};
const addIncomeId = createIncomeId();
const addCostId = createCostId();
export { addCostId, addIncomeId };

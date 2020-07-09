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
const createRecordId = () => {
  let recordId = JSON.parse(window.localStorage.getItem("recordId") || "0");
  return function IncomeId() {
    recordId = recordId += 1;
    window.localStorage.setItem("recordId", JSON.stringify(recordId));
    return recordId;
  };
};
const addIncomeId = createIncomeId();
const addCostId = createCostId();
const addRecordId = createRecordId()
export { addCostId, addIncomeId ,addRecordId};
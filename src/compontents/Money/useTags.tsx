import { useState } from "react";

const defaultCostValue = [
  { id: 1, name: "服饰" },
  { id: 2, name: "餐饮" },
  { id: 3, name: "交通" },
  { id: 4, name: "住房" }
];
const defaultIncomeValue = [
  { id: 1, name: "生意" },
  { id: 2, name: "工资" },
  { id: 3, name: "奖金" },
  { id: 4, name: "红包" }
];
const useTags = () => {
  const [costTags, setCostTags] = useState<{ id: number; name: string }[]>(
    defaultCostValue
  );
  const [incomeTags, setIncomeTags] = useState<{ id: number; name: string }[]>(
    defaultIncomeValue
  );
  const findTag = (id: string) => {
    let TagId = "";
    if (id[0] === "c") {
      TagId = id.slice(4);
      return costTags.filter(tag => tag.id === Number(TagId))[0];
    } else {
      TagId = id.slice(6);
      return incomeTags.filter(tag => tag.id === Number(TagId))[0];
    }
  };
  return {
    costTags,
    setCostTags,
    incomeTags,
    setIncomeTags,
    findTag
  };
};

export { useTags };

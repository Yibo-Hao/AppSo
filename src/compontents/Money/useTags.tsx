import { useState } from "react";

const useTags = () => {
  const [costTags, setCostTags] = useState<{ id: number; name: string }[]>([
    { id: 1, name: "服饰" },
    { id: 2, name: "餐饮" },
    { id: 3, name: "交通" },
    { id: 4, name: "住房" }
  ]);
  const [incomeTags, setIncomeTags] = useState<{ id: number; name: string }[]>([
    { id: 1, name: "生意" },
    { id: 2, name: "工资" },
    { id: 3, name: "奖金" },
    { id: 4, name: "红包" }
  ]);
  return {
    costTags,
    setCostTags,
    incomeTags,
    setIncomeTags
  };
};

export { useTags };

import { useState } from "react";

const useTags = () => {
  const [costTags, setCostTags] = useState<string[]>([
    "服饰",
    "餐饮",
    "交通",
    "住房"
  ]);
  const [incomeTags, setIncomeTags] = useState<string[]>([
    "生意",
    "工资",
    "奖金",
    "红包"
  ]);
  return {
    costTags,
    setCostTags,
    incomeTags,
    setIncomeTags
  };
};

export { useTags };

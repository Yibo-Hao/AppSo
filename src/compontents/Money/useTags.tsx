import { useEffect, useState } from "react";
import { addCostId, addIncomeId } from "./createid";
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
    JSON.parse(
      window.localStorage.getItem("costTags") ||
        JSON.stringify(defaultCostValue)
    )
  );
  const [incomeTags, setIncomeTags] = useState<{ id: number; name: string }[]>(
    JSON.parse(
      window.localStorage.getItem("incomeTags") ||
        JSON.stringify(defaultIncomeValue)
    )
  );
  useEffect(() => {
    window.localStorage.setItem("costTags", JSON.stringify(costTags));
  }, [costTags]);
  useEffect(() => {
    window.localStorage.setItem("incomeTags", JSON.stringify(incomeTags));
  }, [incomeTags]);
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
  const updateTag = (id: string, value: string) => {
    const tag = findTag(id);
    if (tag.id <= 4) return;
    if (id[0] === "c") {
      const newTags = costTags.map(t => {
        if (t.id === tag.id) {
          return { id: tag.id, name: value };
        } else {
          return t;
        }
      });
      setCostTags(newTags);
    } else {
      const newTags = incomeTags.map(t => {
        if (t.id === tag.id) {
          return { id: tag.id, name: value };
        } else {
          return t;
        }
      });
      setIncomeTags(newTags);
    }
  };
  const deleteTag = (id: string) => {
    const tag = findTag(id);
    if (tag.id <= 4) return;
    if (id[0] === "c") {
      setCostTags(costTags.filter(t => t.id !== tag.id));
    } else {
      setIncomeTags(incomeTags.filter(t => t.id !== tag.id));
    }
  };
  const addCostTag = (value: string) => {
    for (let i = 0; i < costTags.length; i++) {
      if (costTags[i].name === value) {
        alert("请重新输入类别名");
        return;
      }
    }
    setCostTags([...costTags, { id: addCostId(), name: value }]);
  };
  const addIncomeTag = (value: string) => {
    for (let i = 0; i < incomeTags.length; i++) {
      if (incomeTags[i].name === value) {
        alert("请重新输入类别名");
        return;
      }
    }
    setIncomeTags([...incomeTags, { id: addIncomeId(), name: value }]);
  };
  const getName = (type:string,id: number) => {
    let tag:{ id: number; name: string };
    if (type==="-"){
      tag = costTags.filter(t => t.id === id)[0];
    }else{
      tag = costTags.filter(t => t.id === id)[0];
    }
    if (tag) {
      return tag.name;
    } else return "";
  };
  return {
    costTags,
    setCostTags,
    incomeTags,
    setIncomeTags,
    findTag,
    updateTag,
    deleteTag,
    addCostTag,
    addIncomeTag,
    getName
  };
};

export { useTags };

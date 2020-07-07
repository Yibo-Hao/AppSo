import { useEffect, useState } from "react";
type RecordItem = {
  tagId: number;
  type: "-" | "+";
  note: string;
  outPut: string;
};
const useRecord = () => {
  const [records, setRecords] = useState<RecordItem[]>(
    JSON.parse(window.localStorage.getItem("record") || "[]")
  );
  const addRecord = (record: RecordItem) => {
    if (record.outPut===''||Number(record.outPut)<=0.01){
      alert("金额不能小于0.01");
      return
    }
    setRecords([...records, record]);
    window.alert("保存成功");
  };
  useEffect(() => {
    window.localStorage.setItem("record", JSON.stringify(records));
  }, [records]);
  return { addRecord };
};
export default useRecord;

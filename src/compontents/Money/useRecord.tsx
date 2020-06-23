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
    if (record.outPut===''){
      record.outPut = "0"
    }
    setRecords([...records, record]);
  };
  useEffect(() => {
    window.localStorage.setItem("record", JSON.stringify(records));
  }, [records]);
  return { addRecord };
};
export default useRecord;

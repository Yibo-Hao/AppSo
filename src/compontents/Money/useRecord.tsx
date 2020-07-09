import { useEffect, useState } from "react";
import RecordItem from "./record.d";
import { addRecordId } from "./createid";
const useRecord = () => {
  const [records, setRecords] = useState<RecordItem[]>(
    JSON.parse(window.localStorage.getItem("record") || "[]")
  );
  const [selected, setSelected] = useState<RecordItem>(
    JSON.parse(
      window.localStorage.getItem("selectedRecord") ||
        JSON.stringify({
          id:addRecordId(),
          tagId: 1,
          type: "-",
          note: "",
          outPut: "",
          date: new Date().toLocaleDateString()
        })
    )
  );
  useEffect(() => {
    window.localStorage.setItem("selectedRecord", JSON.stringify(selected));
  }, [selected]);
  const submit = () => {
    addRecord(selected);
    setSelected({
      id: addRecordId(),
      tagId: 1,
      type: "-",
      note: "",
      outPut: "",
      date: new Date().toLocaleDateString()
    });
  };
  const addRecord = (record: RecordItem) => {
    if (record.outPut === "" || Number(record.outPut) <= 0.01) {
      alert("金额不能小于0.01");
      return;
    }
    setRecords([...records, record]);
    window.alert("保存成功");
  };
  useEffect(() => {
    window.localStorage.setItem("record", JSON.stringify(records));
  }, [records]);
  return { addRecord, records, setRecords, selected, setSelected,submit };
};
export default useRecord;

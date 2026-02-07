import { CONFIG } from "@/shared/model/config";
import axios from "axios";
import { useEffect, useState } from "react";

export const useQuestionFetch = <T,>() => {
  const [data, setData] = useState<T[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${CONFIG.API_BASE_URL}questions/public-questions?page=1&limit=10&specializationId=11'`,
      );
      setData(res.data.data);
    };
    fetchData();
  }, []);
  return { data };
};

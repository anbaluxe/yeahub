import axios from "axios";
import { useEffect, useState } from "react";
import { CONFIG } from "../../../shared/model/config";

export const useSkillsFetch = <T,>({ limit }: { limit: number }) => {
  const [data, setData] = useState<T[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${CONFIG.API_BASE_URL}skills?limit=${limit}&specializations?id=11`,
      );
      setData(res.data.data);
    };
    fetchData();
  }, [limit]);
  return { data };
};

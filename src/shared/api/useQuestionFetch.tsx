import { CONFIG } from "@/shared/model/config";
import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
  limit?: number;
  page?: number;
}

export const useQuestionFetch = <T,>({ limit = 10, page = 1 }: Props) => {
  const [data, setData] = useState<T[]>([]);
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${CONFIG.API_BASE_URL}questions/public-questions?page=${page}&limit=${limit}&specializationId=11`,
      );
      setData(res.data.data);
      setTotal(res.data.total);
    };
    fetchData();
  }, [page, limit]);
  return { data, total };
};

import { CONFIG } from "@/shared/model/config";
import axios from "axios";
import { useEffect, useState } from "react";

export const useSkillsFetch = <T,>({ limit }: { limit: number }) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${CONFIG.API_BASE_URL}skills?limit=${limit}&specializations?id=11`,
        );
        setData(res.data.data ?? []);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Неизвестная ошибка");
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [limit]);
  return { data, isLoading, error };
};

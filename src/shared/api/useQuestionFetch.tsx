import { CONFIG } from "@/shared/model/config";
import axios from "axios";
import { useEffect, useState } from "react";
import type { QuestionFilters } from "../model/question-filters";

interface Props {
  limit?: number;
  page?: number;
  filters?: QuestionFilters;
}

const specializationId = "11";

export const useQuestionFetch = <T,>({
  limit = 10,
  page = 1,
  filters,
}: Props) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState<number>(0);
  const expandLevelRange = (value: string): number[] => {
    const [fromRaw, toRaw] = value.split("-");
    const from = Number(fromRaw);
    const to = Number(toRaw);

    if (!Number.isFinite(from) || !Number.isFinite(to) || from > to) return [];
    return Array.from({ length: to - from + 1 }, (_, i) => from + i);
  };

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams();

        params.set("page", String(page));
        params.set("limit", String(limit));
        params.set("specializationId", specializationId);

        if (filters?.question.length) {
          params.set("skills", filters.question.join(","));
        }

        if (filters?.level && filters?.level.length) {
          const levels = filters.level.flatMap(expandLevelRange);
          if (levels.length > 0) {
            params.set("complexity", levels.join(","));
          }
        }

        if (filters?.rating && filters?.rating.length) {
          params.set("rate", filters.rating.join(","));
        }

        const search = filters?.search?.trim();
        if (search) {
          params.set("search", search);
        }

        const res = await axios.get(
          `${CONFIG.API_BASE_URL}questions/public-questions?${params.toString()}`,
          {
            signal: controller.signal,
          },
        );
        setData(res.data.data ?? []);
        setTotal(res.data.total ?? 0);
      } catch (error) {
        if (axios.isCancel(error)) return;
        if (error)
          setError(error instanceof Error ? error.message : "Ошибка запроса");
        setData([]);
        setTotal(0);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => controller.abort();
  }, [page, limit, filters]);
  return { data, total, isLoading, error };
};

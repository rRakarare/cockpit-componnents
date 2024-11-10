import { useCallback, useEffect, useState } from "react";

interface DbResult<T> {
  data: T | null;
  isLoading: boolean;
}

export function simulateDbCall<T>(dummyData: T, delay: number = 2000): Promise<DbResult<T>> {
    return new Promise((resolve) => {
      let result: DbResult<T> = { data: null, isLoading: true };
      setTimeout(() => {
        result = { data: dummyData, isLoading: false };
        resolve(result);
      }, delay);
    });
  }

interface SimulatedDataOptions {
  initialFetch?: boolean;
  delay?: number;
}

export function useSimulatedData<T>(
    dummyData: T,
    options: SimulatedDataOptions = {}
  ): { data: T | null, isLoading: boolean, fetchData: () => Promise<void>, error: string | null } {
    const { initialFetch = true, delay = 2000 } = options
  
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(initialFetch)
    const [error, setError] = useState<string | null>(null)
  
    const fetchData = useCallback(async () => {
      setError(null)
      setIsLoading(true)
  
      try {
        const result = await simulateDbCall(dummyData, delay)
        setData(result.data)
        setIsLoading(false)
      } catch (err) {
        setError('Failed to fetch data')
        setData(null)
        setIsLoading(false)
      }
    }, [dummyData, delay])
  
    useEffect(() => {
      if (initialFetch) {
        fetchData()
      }
    }, [initialFetch, fetchData])
  
    return {data, isLoading, fetchData, error}
  }

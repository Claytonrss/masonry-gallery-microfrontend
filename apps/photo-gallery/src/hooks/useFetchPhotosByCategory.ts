import { useEffect, useReducer, useRef } from "react";
import { getPhotosByCategory } from "../services/Photo";
import { PhotosWithTotalResults } from "../types/gallery";

interface State {
  data?: PhotosWithTotalResults;
  error?: Error;
}

type Cache = { [url: string]: PhotosWithTotalResults };

type Action =
  | { type: "loading" }
  | { type: "fetched"; payload: PhotosWithTotalResults }
  | { type: "error"; payload: Error };

export function useFetchPhotosByCategory(category?: string): State {
  const cache = useRef<Cache>({});
  const cancelRequest = useRef<boolean>(false);
  const initialState: State = {
    error: undefined,
    data: undefined,
  };

  const fetchReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "loading":
        return { ...initialState };
      case "fetched":
        return { ...initialState, data: action.payload };
      case "error":
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!category) return;

    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: "loading" });

      if (cache.current[category]) {
        dispatch({ type: "fetched", payload: cache.current[category] });
        return;
      }

      try {
        const data = await getPhotosByCategory(category);
        if (data && "photos" in data) {
          cache.current[category] = data;
          if (cancelRequest.current) return;
          dispatch({ type: "fetched", payload: data });
        }
      } catch (error) {
        if (cancelRequest.current) return;
        dispatch({ type: "error", payload: error as Error });
      }
    };

    void fetchData();

    return () => {
      cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return state;
}

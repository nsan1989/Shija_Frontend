import { useQuery } from "@tanstack/react-query";

export default function useCampsViewData() {
    const campsViewUrl = import.meta.env.VITE_CAMPS_VIEW_API;
    const campsViewBaseUrl = import.meta.env.VITE_CAMPS_VIEW_BASE_URL;
    const { data, isLoading, error } = useQuery({
        queryKey: ["campsViewData"], //unique key for cache.
        queryFn: async () => {
            const response = await fetch(campsViewUrl);
            if (!response.ok) {
                throw new Error("failed to fetch data!");
            }
            const jsonData = await response.json();
            console.log(jsonData);
            const camps_view_data = Array.isArray(jsonData?.msg)
                ? jsonData.msg.map((item) => ({
                    ...item,
                    image: `${campsViewBaseUrl}${item.image}`,
                }))
                : [];
            return { camps_view_data };
        },
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
    });
    return { data, isLoading, error };
}

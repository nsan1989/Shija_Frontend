import { useQuery } from "@tanstack/react-query";

export default function useEventsViewData() {
    const eventsViewUrl = import.meta.env.VITE_EVENTS_VIEW_API;
    const eventsViewBaseUrl = import.meta.env.VITE_EVENTS_VIEW_BASE_URL;
    const { data, isLoading, error } = useQuery({
        queryKey: ["eventsViewData"], //unique key for cache.
        queryFn: async () => {
            const response = await fetch(eventsViewUrl);
            if (!response.ok) {
                throw new Error("failed to fetch data!");
            }
            const jsonData = await response.json();
            const events_view_data = Array.isArray(jsonData?.msg)
                ? jsonData.msg.map((item) => ({
                    ...item,
                    image: `${eventsViewBaseUrl}${item.image}`,
                }))
                : [];
            return { events_view_data };
        },
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
    });
    return { data, isLoading, error };
}

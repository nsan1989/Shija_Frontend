import { useQuery } from "@tanstack/react-query";

export default function useAwardsAndAccoladesData() {
    const awardsAndAccoladesViewUrl = import.meta.env.VITE_AWARDS_ACCOLADES_VIEW_API
    const { data, isLoading, error } = useQuery({
        queryKey: ["awardsAndAccoladesViewData"],
        queryFn: async () => {
            const response = await fetch(awardsAndAccoladesViewUrl);
            if (!response.ok) {
                throw new Error("failed to fetch data!");
            }
            const jsonData = await response.json();
            const awards_accolades_data = Array.isArray(jsonData?.msg)
                ? jsonData.msg.map((item) => ({
                    ...item,
                }))
                : [];
            return { awards_accolades_data };
        },
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
    });
    return { data, isLoading, error }
}


interface WpQueryParams {
    query: string;
    variables?: object;
}

export async function WpQuery({ query, variables }: WpQueryParams) {
    const response = await fetch("http://localhost:8001/graphql", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch data from WordPress: ${response.statusText}`);
    }

    const { data } = await response.json();

    return data;
}
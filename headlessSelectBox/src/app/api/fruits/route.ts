export async function GET() {
  const data = {
    data: [
      {
        id: 1,
        name: "apple",
        date: "10 days ago",
        color: "red",
        state: "stale",
      },
      {
        id: 2,
        name: "banana",
        date: "2 days ago",
        color: "yellow",
        state: "fresh",
      },
      {
        id: 3,
        name: "orange",
        date: "1 days ago",
        color: "orange",
        state: "fresh",
      },
      {
        id: 4,
        name: "pineapple",
        date: "3 days ago",
        color: "green",
        state: "stale",
      },
      {
        id: 5,
        name: "mango",
        date: "0 days ago",
        color: "yellow",
        state: "fresh",
      },
    ],
  };

  return Response.json(data);
}

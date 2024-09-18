export async function GET() {
  const data = {
    data: [
      {
        id: 1,
        name: "김땡땡",
        date: "10 days ago",
        color: "red",
        state: "stale",
      },
      {
        id: 2,
        name: "조땡땡",
        date: "2 days ago",
        color: "yellow",
        state: "fresh",
      },
      {
        id: 3,
        name: "박땡땡",
        date: "1 days ago",
        color: "orange",
        state: "fresh",
      },
      {
        id: 4,
        name: "이땡땡",
        date: "3 days ago",
        color: "green",
        state: "stale",
      },
    ],
  };

  return Response.json(data);
}

import { Suspense } from "react";

const getData = async () => {
  const data = {
    title: "Waku",
    headline: "Waku",
    body: "Hello world!",
  } as const;

  return new Promise<typeof data>((resolve) =>
    setTimeout(() => resolve(data), 5000)
  );
};

export const Data = async () => {
  const data = await getData();
  return (
    <>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
    </>
  );
};

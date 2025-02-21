import { unstable_noStore as noStore } from "next/cache";

async function fetchLatestData() {
  // Ensure this data is always fetched fresh
  noStore();

  // Simulate an API call or database query
  const res = await fetch("https://api.github.com/repos/hpcaitech/Open-Sora", {
    cache: "no-store",
  });

  if (!res.ok) {
    return {};
  }

  return res.json();
}

export default async function DynamicContent() {
  const data = await fetchLatestData();
  const currentTime = new Date().toISOString();

  return (
    <div>
      <h1>Dynamic Content</h1>
      <p>This page was rendered at: {currentTime}</p>
      <p>Latest data: {JSON.stringify(data)}</p>
    </div>
  );
}

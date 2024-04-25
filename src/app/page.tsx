import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/2ac65303-81a5-4f78-8ea5-b70d988b5c05-llljzy.jpg",
  "https://utfs.io/f/d3295db1-e664-46a5-8d5b-f592555ca5ec-lkegh4.jpg",
  "https://utfs.io/f/2aa1c9bd-807d-4d4f-8cb7-5891b4cfefbd-jvefp9.jpg",
  "https://utfs.io/f/76f55a44-3838-4d1e-b479-f8d06b893f5d-83qoe6.jpg",
  "https://utfs.io/f/f4380a97-c5c3-4ae0-8513-edad8400089a-3ax2qh.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}

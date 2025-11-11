import { NextResponse } from "next/server";

const posts = [
  {
    slug: "bob-riley-lumi-three-puppies-journeys-to-singapore-with-pupup",
    title: "Bob, Riley & Lumi: Three Puppies' Journeys to Singapore with PupUp",
    date: "2025-04-24T00:00:00.000Z",
    feature_image:
      "https://framerusercontent.com/images/SGE2AzITvWcozpyZJYHiVZxO0.png",
  },
  {
    slug: "a-miniature-dachshund-s-journey-from-australia-to-singapore",
    title: "Toby - A Miniature Dachshund's Journey from Australia to Singapore",
    date: "2024-11-03T00:00:00.000Z",
    feature_image:
      "https://framerusercontent.com/images/I5VV9nJTDFvuKYv9ZKzuEpg1Guk.webp",
  },
  {
    slug: "mini-dachshunds-the-perfect-pup",
    title: "Mini Dachshunds: The Perfect Pup for Your Family?",
    date: "2024-10-26T00:00:00.000Z",
    feature_image:
      "https://framerusercontent.com/images/cjKSazuRPUluto6HcuUG4xso.webp",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}

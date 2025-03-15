// src/api/googleReviews.ts
import { server$ } from '@builder.io/qwik-city';

// Define the Review type
interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number; // Unix timesstamp in seconds
}

export const getReviews = server$(async (): Promise<Review[]> => {
  const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY; // Ensure this is set in .env
  const placeId = 'ChIJKen7iQkFzkwRqNMhxiC6j0g'; // Replace with your actual Place ID
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.result.reviews || [];
  } catch (error) {
    console.error('Error fetching reviews', error);
    return []; // Return empty array on error
  }
});
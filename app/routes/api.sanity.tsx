import { json } from "@remix-run/node";
import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'YOUR_SANITY_PROJECT_ID',
  dataset: process.env.SANITY_DATASET || 'YOUR_SANITY_DATASET',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2023-05-03', // Use current date in YYYY-MM-DD format
});

if (!sanityClient.config().projectId) {
  throw new Error('Sanity Project ID is required');
}

export async function loader() {
  try {
    // Test Sanity connection first
    const config = sanityClient.config();
    if (!config.projectId) {
      throw new Error('Sanity configuration error: Missing project ID');
    }

    const query = `*[_type == "project"]{
      _id,
      title,
      "slug": slug.current,
      excerpt,
      client,
      projectDate,
      technologies,
      "mainImageUrl": mainImage.asset->url
    }`;
    
    const projects = await sanityClient.fetch(query);
    
    if (!projects) {
      console.warn('No projects found in Sanity');
      return json([]);
    }

    return json(projects);
  } catch (error) {
    console.error('Error in Sanity API route:', {
      message: error instanceof Error ? error.message : 'Unknown error occurred',
      stack: error instanceof Error ? error.stack : undefined,
      config: sanityClient.config()
    });
    
    return json({
      error: 'Failed to fetch projects',
      details: error instanceof Error ? error.message : 'Unknown error occurred',
      projectId: process.env.SANITY_PROJECT_ID || 'YOUR_SANITY_PROJECT_ID'
    }, { status: 500 });
  }
}

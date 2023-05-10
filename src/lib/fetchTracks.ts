import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQDCLDSpWxDr4wLHZvHqIzzRtLZhTykt09q44142ufJ98ZZtvH-KqNqTjDjnhCTwlpuN65Z43GMd7ooTdUY29MAxrem_6pRDpYgz5wi2akqpTLH2NQZIGbh0xkcnNTJDERcMWpXLfrz2-Dc5vizXgf8kEHLXnu1Z_s2UaY9cR9MYuNVB6yhFFsmA16vPW06w';

export const fetchTracks = async (): Promise<SavedTrack[]> => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};

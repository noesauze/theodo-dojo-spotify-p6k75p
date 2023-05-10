import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQCxDPsAhdzwaylSuVVJ69ZPdH8xGg6TbSVFFJbeuiCDVkGSeDWDYooXt3UdSln54QfnbbpdZXkBMUMdNpsNFjIgubpsQXkOXkSSqciShyJzm0knBdGyYFFC9wXtHWjSbS-rti0nZLoF2eAjDSRCHj_kUyAaC3CAEQchgU7uKmJNVUqLHrEbDPYxU545QmKa';

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

//objects

//objects store multiple objects that are similar in structure. this is great for our js logic

//objects can hold multiple datatypes

//denoted with {}
// key - value pairs

//example
let netflix = {
    id: 1,
    name: "Super Store",
    seasons: {
      season1: {
        seasonInfo: {
          episodeInfo: [
            { episode: 1, episodeName: "Pilot"},
            { episode: 2, episodeName: "Magazine Profile"},
            { episode: 3, episodeName: "Shots and Salsa"},
            { episode: 4, episodeName: "Mannequin"}
          ]
        }
      },
      season2: {
        seasonInfo: {
          episodeInfo: [
            { episode: 5, episodeName: "Shoplifter"},
            { episode: 6, episodeName: "Secret Shopper"},
            { episode: 7, episodeName: "Color Wars"},
            { episode: 8, episodeName: "Wedding Day Sale"},
            { episode: 9, episodeName: "All-Nighter"}
          ]
        }
      },
      season3: {
        seasonInfo: {
          episodeInfo: [
            { episode: 10, episodeName: "Demotion"},
            { episode: 11, episodeName: "Labor"}
          ]
        }
      }
    }
  }

  /*
Challenge:
Pick an episode to show.
Using dot notation, walk through the netflix object and print off both the episode and the episode name.
*/

console.log(netflix.seasons.season1.seasonInfo.episodeInfo[0].episodeName, 'episode', netflix.seasons.season1.seasonInfo.episodeInfo[0].episode)
            


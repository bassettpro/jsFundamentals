//object.keys() and object.values()

//object.keys()is a mithod that returns an array of a given objects own property names.
//object.values() is a mehtod that returns an array of a given objects own enumerable property values. 

let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }
  
  //console.log(object.keys(spaceJam.toonSquad))
  console.log(Object.keys(spaceJam.toonSquad.duck[4]));

  // square bracket notation

  let garden = {
      vegetable: 'zucchini',
      flower: 'sun flowers', 
      fruit: 'apple',
      water: true,
      sun: true,
      size: 10
  };

  console.log(garden.vegetable)

  let x = 'vegetable' ;
  console.log(garden)

  let baking = {}
  baking['zucchini'] = 'better make some bread!';
  console.log(baking[garden['vegetable']])

  let key = 'water';
  Object.keys(garden).forEach(g => {

    //console.log(g)
  })

  if (key === g) {
      console.log(garden[key])
  }
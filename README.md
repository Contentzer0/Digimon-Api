# Digimon-Api

The coolest collection of Digimon cards this side of the river!

The 6 different colors of digimon dictated by the Digimon card game are put in their each individual JSON file and then uploaded to MongoDB

https://digimoncardgame.fandom.com/wiki/General_Rules

^The link above are the general rules of the Digimon Card Game.

There are different attributes to a digimon card as seen below 
https://world.digimoncard.com/images/cardlist/card/BT11-011.png.

My API allows you to search by:

/ (brings up every card in the API)

/name (name of the digimon)

/color(the color attribute of the card)

/cardnumber (the booster set the card belongs to)

/level (the level of the digimon)

/playcost (how much the digimon cost to hard play on the field found in the top left of the card)

/dp (the strength value of the digimon in the top right of the card)

/evolutionCost (how much it cost to digivolve into the next level digimon)


There are more fields this api will bring up(like effects of the card and an image of it) but they are not searchable. The API includes all the information on the card that a player would need to know and build a deck successfully.


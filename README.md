Bowling
======

For this I implemented a simple component to display the progress of the game and the point calculation.

Since we don't have a real game, below the scoreboard there are three options to roll a random roll, a strike or a spare. Also, for the last frame the user can get an extra roll for a spare or two extra rolls for a strike.


About the approach
==================
I split the behaviour into two models: Frame and Scoreboard, and they contain all the needed business logic. Following this, i opted to store on my app state just the `rolls` of the user, to keep it as simple as possible. If needed, the business logic could be extracted from the models into the components, but I preferred the 'plain JS' approach for this, and leave the components with only the task of rendering the objects returned from the model.


What I would do more
===================
Well, first of all the styling.

I also thought about implementing the multiplayer mode, which in this case would be rendered as each user having its own scoreboard. In the reducer i imagined it could work as:
 ```
  { players: [
      {
        name: "John",
        rolls: [...],
      },
      {
        name: "Maria",
        rolls: [...],
      }
    ]}
```

Also, thinking about a real implementation maybe the Scoreboard would be responsible for signaling the end of the game / match to the other game elements. Would be interesting to incorporate this callback on the Scoreboard model.

# Object Pool

- A collection of pre-initialized objects whose initilization is heavy weight
- Create them when the app loads (or at some similarly reasonable time) and then grab one when it's needed, already created, rather than having to wait
- When finished, return it to the pool or destroy it
- Some debate about whether this pattern should be deprecated, but it's still useful in building games
- Often used in combination with Factory

# Loose Coupling

(not a design pattern)

- Software parts that communicate with each other have little to no knowledge of each other's actual implementations
- "Black Boxes"
- Have interfaces that match rather than components that are married together
- This makes it much easier to test code because you can create a "mock" implementation with the correct interfaces and it will work as the real version will

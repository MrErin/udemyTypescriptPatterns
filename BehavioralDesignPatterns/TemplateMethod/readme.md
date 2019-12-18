# Template Method

- Uses inheritance to delegate the implementation responsibility for different parts of an algorithm's subclasses
- Difference from interfaces:
  - Interfaces have no way to control algorithms' flow from the base class. Can't force security to come before email configuration, can't add complexity to input processing
- Similar to strategy pattern
  - Strategy delegates parts of the algorithm to separate implementations
  - Template method uses placeholders that need to be implemented by ALL subclasses resulting in a variation from the original blueprint.

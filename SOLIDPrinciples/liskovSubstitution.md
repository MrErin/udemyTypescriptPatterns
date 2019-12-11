# (Barbara!) Liskov Substitution Principle

- Objects of a subclass must behave the same way as their parents. Children should be able to be used in place of parent classes without breaking code.
- You can implement less restrictive rules for methods in a child class, but cannot implement more restrictions
- Classic example: if you implement a Rectangle and a Square class, you break the Liskov principle if Square extends the Rectangle, because Square has more restrictions (four equal sides) than Rectangle.
- Rules:
  - Don't implement any stricter validation rules on input parameters than implemented by parent class
  - Apply at least the same rules to all output parameters as applied by the parent class

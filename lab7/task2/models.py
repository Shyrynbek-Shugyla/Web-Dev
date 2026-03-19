"""
Animal class hierarchy demonstrating OOP concepts:
- Base class with constructor, methods, and __str__
- Inheritance with child classes
- Method overriding (polymorphism)
"""


class Animal:
    """Base class representing a generic animal."""

    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species

    def speak(self):
        return f"{self.name} makes a sound"

    def description(self):
        return f"{self.name} is a {self.age}-year-old {self.species}"

    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, species={self.species})"


class Dog(Animal):
    """Dog class inheriting from Animal."""

    def __init__(self, name, age, breed):
        super().__init__(name, age, species="Dog")
        self.breed = breed

    def speak(self):
        return f"{self.name} says: Woof! Woof!"

    def fetch(self, item):
        return f"{self.name} fetches the {item}"

    def __str__(self):
        return f"Dog(name={self.name}, age={self.age}, breed={self.breed})"


class Cat(Animal):
    """Cat class inheriting from Animal."""

    def __init__(self, name, age, color):
        super().__init__(name, age, species="Cat")
        self.color = color

    def speak(self):
        return f"{self.name} says: Meow!"

    def purr(self):
        return f"{self.name} is purring..."

    def __str__(self):
        return f"Cat(name={self.name}, age={self.age}, color={self.color})"

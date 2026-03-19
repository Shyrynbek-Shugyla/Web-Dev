"""
Main script demonstrating OOP concepts:
- Creating objects from base and child classes
- Storing objects in a list and iterating
- Calling methods and demonstrating polymorphism
"""

from models import Animal, Dog, Cat


def main():
    # Create objects
    generic = Animal("Unknown", 5, "Fish")
    buddy = Dog("Buddy", 3, "Golden Retriever")
    max_dog = Dog("Max", 5, "German Shepherd")
    whiskers = Cat("Whiskers", 2, "White")
    luna = Cat("Luna", 4, "Black")

    # Store in a list
    animals = [generic, buddy, max_dog, whiskers, luna]

    # Iterate and display info
    print("=" * 50)
    print("All Animals:")
    print("=" * 50)
    for animal in animals:
        print(animal)

    # Demonstrate polymorphism — same method, different behavior
    print("\n" + "=" * 50)
    print("Polymorphism — speak() method:")
    print("=" * 50)
    for animal in animals:
        print(animal.speak())

    # Call description method
    print("\n" + "=" * 50)
    print("Descriptions:")
    print("=" * 50)
    for animal in animals:
        print(animal.description())

    # Use unique child class methods
    print("\n" + "=" * 50)
    print("Unique methods:")
    print("=" * 50)
    print(buddy.fetch("ball"))
    print(max_dog.fetch("stick"))
    print(whiskers.purr())
    print(luna.purr())

    # isinstance check
    print("\n" + "=" * 50)
    print("Type checking:")
    print("=" * 50)
    for animal in animals:
        print(f"{animal.name} is a Dog: {isinstance(animal, Dog)}, "
              f"is a Cat: {isinstance(animal, Cat)}, "
              f"is an Animal: {isinstance(animal, Animal)}")


if __name__ == "__main__":
    main()

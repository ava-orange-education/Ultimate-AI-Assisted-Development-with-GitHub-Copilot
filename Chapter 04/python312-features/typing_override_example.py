# Prompt Used: Define a class with a method override using typing.override in Python 3.12

from typing import override

class Animal:
    def speak(self) -> str:
        return "Some generic sound"

class Dog(Animal):
    @override
    def speak(self) -> str:
        return "Woof"

# Example usage:
if __name__ == "__main__":
    animal = Animal()
    dog = Dog()
    print(animal.speak())  # Output: Some generic sound
    print(dog.speak())     # Output: Woof

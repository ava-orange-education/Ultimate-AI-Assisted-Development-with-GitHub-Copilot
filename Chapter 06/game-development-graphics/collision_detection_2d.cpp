// GitHub Copilot Prompt:
// Implement 2D collision detection for rectangles

#include <iostream>

struct Rectangle {
    float x, y, width, height;
};

bool isColliding(const Rectangle& r1, const Rectangle& r2) {
    return !(r1.x > r2.x + r2.width ||
             r1.x + r1.width < r2.x ||
             r1.y > r2.y + r2.height ||
             r1.y + r1.height < r2.y);
}

int main() {
    Rectangle rect1 = {0, 0, 10, 10};
    Rectangle rect2 = {5, 5, 10, 10};

    if (isColliding(rect1, rect2)) {
        std::cout << "Collision detected!\n";
    } else {
        std::cout << "No collision.\n";
    }

    return 0;
}

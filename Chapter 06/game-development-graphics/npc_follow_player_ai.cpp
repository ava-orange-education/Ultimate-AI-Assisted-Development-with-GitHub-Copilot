// GitHub Copilot Prompt:
// Write AI for an NPC to follow a player character

#include <iostream>

struct Position {
    float x, y;
};

void moveNPC(Position& npc, const Position& player, float speed) {
    if (npc.x < player.x) npc.x += speed;
    if (npc.x > player.x) npc.x -= speed;
    if (npc.y < player.y) npc.y += speed;
    if (npc.y > player.y) npc.y -= speed;
}

int main() {
    Position player = {50, 50};
    Position npc = {0, 0};

    for (int i = 0; i < 100; i++) {
        moveNPC(npc, player, 1.0f);
        std::cout << "NPC Position: (" << npc.x << ", " << npc.y << ")\n";
    }

    return 0;
}

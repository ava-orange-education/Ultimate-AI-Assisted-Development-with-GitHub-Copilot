// GitHub Copilot Prompt:
// Write a device driver to toggle a GPIO pin

#include <stdint.h>
#include <stdbool.h>

#define GPIO_BASE 0x40021000
#define GPIO_MODER_OFFSET 0x00
#define GPIO_ODR_OFFSET   0x14

volatile uint32_t* GPIO_MODER = (volatile uint32_t*)(GPIO_BASE + GPIO_MODER_OFFSET);
volatile uint32_t* GPIO_ODR   = (volatile uint32_t*)(GPIO_BASE + GPIO_ODR_OFFSET);

void gpio_toggle() {
    *GPIO_MODER |= (1 << 0);  // Set pin 0 as output
    *GPIO_ODR   ^= (1 << 0);  // Toggle pin 0 state
}

int main() {
    while (true) {
        gpio_toggle();
        for (volatile int i = 0; i < 100000; i++); // Simple delay loop
    }
    return 0;
}

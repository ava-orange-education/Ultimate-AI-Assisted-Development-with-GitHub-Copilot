#include <stdint.h>
#include <stdio.h>

#define I2C_BASE 0x40005400
#define TEMP_SENSOR_ADDR 0x48

volatile uint32_t* I2C_DATA = (volatile uint32_t*)(I2C_BASE + 0x10);
volatile uint32_t* I2C_STATUS = (volatile uint32_t*)(I2C_BASE + 0x14);

uint8_t i2c_read(uint8_t address) {
    *I2C_STATUS = 0; 
    *I2C_DATA = address;
    return *I2C_DATA;
}

int main() {
    uint8_t temperature = i2c_read(TEMP_SENSOR_ADDR);
    printf("Temperature: %d°C\n", temperature);
    return 0;
}

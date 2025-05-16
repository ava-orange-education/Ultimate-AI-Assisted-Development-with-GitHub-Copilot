#include <stdio.h>
#include <stdint.h>

#define MAX_TASKS 3

typedef void (*TaskFunction)();

typedef struct {
    TaskFunction task;
    uint32_t interval;
    uint32_t elapsed;
} Task;

Task taskList[MAX_TASKS];

void scheduler_addTask(TaskFunction task, uint32_t interval, int index) {
    taskList[index].task = task;
    taskList[index].interval = interval;
    taskList[index].elapsed = 0;
}

void scheduler_run(uint32_t tick) {
    for (int i = 0; i < MAX_TASKS; i++) {
        taskList[i].elapsed += tick;
        if (taskList[i].elapsed >= taskList[i].interval) {
            taskList[i].task();
            taskList[i].elapsed = 0;
        }
    }
}

void task1() { printf("Task 1 executed\n"); }
void task2() { printf("Task 2 executed\n"); }

int main() {
    scheduler_addTask(task1, 100, 0);
    scheduler_addTask(task2, 200, 1);

    while (1) {
        scheduler_run(50); 
    }
    return 0;
}

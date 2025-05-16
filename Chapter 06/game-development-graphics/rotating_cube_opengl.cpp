// GitHub Copilot Prompt:
// Render a rotating 3D cube using OpenGL

#include <GL/glut.h>

void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glLoadIdentity();
    glRotatef(30, 1.0f, 1.0f, 0.0f);
    glutWireCube(1.0);
    glFlush();
}

void init() {
    glEnable(GL_DEPTH_TEST);
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB | GLUT_DEPTH);
    glutInitWindowSize(500, 500);
    glutCreateWindow("Rotating Cube");
    init();
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}

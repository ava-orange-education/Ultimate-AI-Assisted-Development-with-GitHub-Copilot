"use strict";
/**
 * Parses a basic Mermaid flowchart diagram and extracts step logic.
 * This can be extended to support conditionals, loops, and other shapes.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMermaidDiagram = parseMermaidDiagram;
function parseMermaidDiagram(diagram) {
    var lines = diagram
        .split('\n')
        .map(function (line) { return line.trim(); })
        .filter(function (line) { return line && !line.startsWith('graph'); });
    var steps = [];
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var match = line.match(/(\w+)\(([^)]+)\)/);
        if (match) {
            var id = match[1], description = match[2];
            steps.push({ id: id, description: description });
        }
    }
    return steps;
}
// Example Usage
var diagram = "graph TD\nA(Start)-->B(Validate Input)-->C(Save Data)";
console.log(parseMermaidDiagram(diagram));

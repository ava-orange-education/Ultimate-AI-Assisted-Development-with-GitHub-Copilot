/**
 * Parses a basic Mermaid flowchart diagram and extracts step logic.
 * This can be extended to support conditionals, loops, and other shapes.
 */
export function parseMermaidDiagram(diagram) {
    const lines = diagram
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('graph'));
    const steps = [];
    for (const line of lines) {
        const match = line.match(/(\w+)\(([^)]+)\)/);
        if (match) {
            const [, id, description] = match;
            steps.push({ id, description });
        }
    }
    return steps;
}
// Example Usage
const diagram = "graph TD\nA(Start)-->B(Validate Input)-->C(Save Data)";
console.log(parseMermaidDiagram(diagram));

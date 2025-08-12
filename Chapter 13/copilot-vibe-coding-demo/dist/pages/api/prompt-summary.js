export default async function handler(req, res) {
    const { prompt } = req.body;
    // Simulated AI summary response
    const summary = `Summary for prompt: "${prompt}" - This describes the intent of the feature and highlights expected inputs and outputs.`;
    res.status(200).json({ summary });
}

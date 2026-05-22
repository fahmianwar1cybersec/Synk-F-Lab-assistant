import { useState } from "react";
import OpenAI from "openai";

const apiKey = import.meta.env.VITE_GROQ_API_KEY;

console.log("API KEY:", apiKey);

const client = new OpenAI({
  apiKey: apiKey,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true,
});
function Explainer() {
  const [topic, setTopic] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const explainTopic = async () => {
    if (!topic.trim()) {
      setAnswer("Please enter an ECE topic.");
      return;
    }

    try {
      setLoading(true);

      const chatCompletion =
        await client.chat.completions.create({
          messages: [
            {
              role: "system",
              content:
                "You are Synk-F AI, an expert ECE lab assistant.",
            },
            {
              role: "user",
              content:
                `Explain ${topic} in a simple student-friendly way with definition, working, applications and important notes.`,
            },
          ],

          model: "llama-3.1-8b-instant",
        });

      setAnswer(
        chatCompletion.choices[0].message.content
      );
    } catch (error) {
      console.log(error);

      setAnswer("AI connection error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <button
        onClick={() => window.location.href = "/"}
        style={styles.backBtn}
      >
        ⬅️ Back to Dashboard
      </button>

      <h1 style={styles.title}>
        AI Topic Explainer
      </h1>

      <p style={styles.subtitle}>
        Explain difficult ECE concepts instantly using Synk-F AI
      </p>

      <input
        type="text"
        placeholder="Enter any ECE topic..."
        style={styles.input}
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button
        style={styles.button}
        onClick={explainTopic}
      >
        {loading
          ? "Synk-F AI Thinking..."
          : "Explain"}
      </button>

      <div style={styles.output}>
        {answer || (
          <span style={{ color: "#4b5563" }}>
            AI Output will appear here...
          </span>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#000000",
    minHeight: "100vh",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    padding: "40px 20px",
    position: "relative"
  },

  backBtn: {
    position: "absolute",
    top: "30px",
    left: "30px",
    color: "#3b82f6",
    background: "#111827",
    padding: "10px 18px",
    borderRadius: "8px",
    border: "1px solid #374151",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px"
  },

  title: {
    fontSize: "50px",
    marginBottom: "10px",
    background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginTop: "60px"
  },

  subtitle: {
    color: "#9ca3af",
    marginBottom: "40px",
    textAlign: "center",
  },

  input: {
    width: "80%",
    maxWidth: "600px",
    padding: "15px",
    borderRadius: "12px",
    border: "1px solid #374151",
    background: "#111827",
    color: "white",
    fontSize: "16px",
    marginBottom: "20px",
    outline: "none",
  },

  button: {
    padding: "15px 35px",
    border: "none",
    borderRadius: "12px",
    background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "40px",
    fontWeight: "bold"
  },

  output: {
    width: "80%",
    maxWidth: "700px",
    minHeight: "200px",
    background: "#111827",
    border: "1px solid #374151",
    borderRadius: "15px",
    padding: "20px",
    color: "#cbd5e1",
    whiteSpace: "pre-wrap",
    lineHeight: "1.8",
    textAlign: "left"
  },
};

export default Explainer;
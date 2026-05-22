import { useState } from "react";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true,
});

function Safety() {
  const [topic, setTopic] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const generateSafety = async () => {
    if (!topic.trim()) {
      setAnswer("Please enter a component or experiment.");
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
                "You are Synk-F AI, an expert ECE lab safety advisor.",
            },
            {
              role: "user",
              content:
                `Provide important lab safety precautions, risks, and safe handling instructions for this ECE component or experiment: ${topic}`,
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
        Safety Advisor
      </h1>

      <p style={styles.subtitle}>
        Get AI-powered ECE lab safety guidance instantly
      </p>

      <input
        type="text"
        placeholder="Enter component or experiment..."
        style={styles.input}
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button
        style={styles.button}
        onClick={generateSafety}
      >
        {loading
          ? "Synk-F AI Thinking..."
          : "Get Safety Advice"}
      </button>

      <div style={styles.output}>
        {answer || (
          <span style={{ color: "#4b5563" }}>
            AI-generated safety guidance will appear here...
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
    maxWidth: "800px",
    minHeight: "250px",
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

export default Safety;
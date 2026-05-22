import React from 'react';

function Home() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');

          html {
            scroll-behavior: smooth;
          }

          @keyframes slideIn {
            0% {
              transform: translateY(30px);
              opacity: 0;
            }

            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .sliding-title {
            font-size: 42px;
            line-height: 1.3;
            letter-spacing: 4px;
            margin-bottom: 25px;
            font-weight: bold;
            text-transform: uppercase;
            max-width: 90%;
            margin-left: auto;
            margin-right: auto;

            background: linear-gradient(
              135deg,
              #00f2fe 0%,
              #4facfe 50%,
              #0000ff 100%
            );

            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            text-shadow: 0 0 20px rgba(79, 172, 254, 0.3);

            animation: slideIn 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }

          .card-title-gradient {
            background: linear-gradient(
              135deg,
              #00f2fe 0%,
              #4facfe 50%,
              #0000ff 100%
            );

            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            font-weight: bold;
          }

          @media (max-width: 768px) {
            .sliding-title {
              font-size: 32px;
            }
          }
        `}
      </style>

      <div style={styles.container}>

        {/* Navbar */}
        <nav style={styles.navbar}>

          <h2 style={styles.logo}>
            Synk-F
          </h2>

          <div style={styles.navLinks}>
            <a href="#home" style={styles.link}>Home</a>
            <a href="#features" style={styles.link}>Features</a>
            <a href="#aitools" style={styles.link}>AI Tools</a>
            <a href="#about" style={styles.link}>About</a>
          </div>

        </nav>

        {/* Home Section */}
        <div id="home" style={styles.content}>

          <div style={styles.iconBox}>
            🧪 ⚡
          </div>

          <h1 className="sliding-title">
            SYNK-F LAB ASSISTANT
          </h1>

          <div style={styles.line}></div>

          <p style={styles.subtitle}>
            AI POWERED ECE SMART LAB PLATFORM
          </p>

          {/* AI Tools */}
          <div id="aitools" style={styles.cardContainer}>

            {/* Explainer Card */}
            <div
              style={styles.card}
              onClick={() => window.location.href = "/explainer"}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(59,130,246,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(59,130,246,0.2)";
              }}
            >
              <h2>
                🧠{" "}
                <span className="card-title-gradient">
                  AI Topic Explainer
                </span>
              </h2>

              <p>
                Explains difficult ECE concepts in simple language.
              </p>
            </div>

            {/* Viva Card */}
            <div
              style={styles.card}
              onClick={() => window.location.href = "/viva"}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(59,130,246,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(59,130,246,0.2)";
              }}
            >
              <h2>
                🎤{" "}
                <span className="card-title-gradient">
                  Viva Generator
                </span>
              </h2>

              <p>
                Generates smart viva questions for lab experiments.
              </p>
            </div>

            {/* Report Card */}
            <div
              style={styles.card}
              onClick={() => window.location.href = "/report"}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(59,130,246,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(59,130,246,0.2)";
              }}
            >
              <h2>
                📄{" "}
                <span className="card-title-gradient">
                  Report Generator
                </span>
              </h2>

              <p>
                Creates instant AI-powered lab reports.
              </p>
            </div>

            {/* Safety Card */}
            <div
              style={styles.card}
              onClick={() => window.location.href = "/safety"}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(59,130,246,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(59,130,246,0.2)";
              }}
            >
              <h2>
                ⚠️{" "}
                <span className="card-title-gradient">
                  Safety Advisor
                </span>
              </h2>

              <p>
                Shows lab safety instructions and warnings.
              </p>
            </div>

          </div>

          {/* Features Section */}
          <div id="features" style={styles.section}>

            <h2 style={styles.sectionTitle}>
              Features
            </h2>

            <p style={styles.sectionText}>
              Synk-F provides AI-powered ECE learning tools including
              smart topic explanation, viva preparation,
              instant report generation and lab safety guidance.
            </p>

          </div>

          {/* About Section */}
          <div id="about" style={styles.section}>

            <h2 style={styles.sectionTitle}>
              About
            </h2>

            <p style={styles.sectionText}>
              Synk-F is an AI-powered smart laboratory assistant platform
              developed for Electronics and Communication Engineering students.
              It helps simplify lab activities using modern AI technologies
              and futuristic user experience design.
            </p>

          </div>

          {/* Footer */}
          <footer style={styles.footer}>
            <p>Powered by Synk-F AI</p>
            <p>Built for Smart ECE Labs</p>
            <p>© 2026 Synk-F Technologies</p>
          </footer>

        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    backgroundColor: "#000000",
    minHeight: "100vh",
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "'Orbitron', sans-serif",
    overflowX: "hidden",
  },

  content: {
    textAlign: "center",
    width: "100%",
    paddingTop: "60px",
  },

  iconBox: {
    fontSize: "55px",
    marginBottom: "25px",
  },

  line: {
    width: "300px",
    height: "3px",
    margin: "auto",
    marginBottom: "25px",
    background: "linear-gradient(to right, #8b5cf6, #3b82f6)",
    borderRadius: "10px",
  },

  subtitle: {
    color: "#d1d5db",
    letterSpacing: "6px",
    fontSize: "15px",
    marginBottom: "30px",
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "50px",
  },

  card: {
    background: "#111827",
    padding: "20px",
    width: "230px",
    borderRadius: "20px",
    border: "1px solid #374151",
    boxShadow: "0 0 20px rgba(59,130,246,0.2)",
    cursor: "pointer",
    transition: "0.3s ease",
    transform: "scale(1)",
  },

  navbar: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "rgba(0,0,0,0.8)",
    backdropFilter: "blur(10px)",
    zIndex: "1000",
    boxSizing: "border-box",
  },

  logo: {
    fontSize: "30px",
    fontWeight: "bold",
    letterSpacing: "4px",
    background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  navLinks: {
    display: "flex",
    gap: "25px",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    transition: "0.3s ease",
  },

  section: {
    marginTop: "120px",
    padding: "20px",
  },

  sectionTitle: {
    fontSize: "38px",
    marginBottom: "20px",
    background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  sectionText: {
    color: "#9ca3af",
    maxWidth: "800px",
    margin: "auto",
    lineHeight: "1.8",
    fontSize: "16px",
  },

  footer: {
    marginTop: "80px",
    textAlign: "center",
    color: "#6b7280",
    fontSize: "14px",
    lineHeight: "1.8",
    paddingBottom: "40px",
  },
};

export default Home;
import { useState } from "react";

const PROBLEM_COUNT = 13;

const getRandomProblem = (exclude?: number): number => {
  const next = Math.floor(Math.random() * PROBLEM_COUNT) + 1;
  return next === exclude ? (next % PROBLEM_COUNT) + 1 : next;
};

const App = () => {
  const [currentProblem, setCurrentProblem] = useState<number>(getRandomProblem());
  const [isAnswerVisible, setIsAnswerVisible] = useState<boolean>(false);

  const handleShowAnswer = () => {
    setIsAnswerVisible(true);
  };

  const handleRandomProblem = () => {
    setCurrentProblem((prev) => getRandomProblem(prev));
    setIsAnswerVisible(false);
  };

  const questionImageSrc = `/images/q_${currentProblem}.png`;
  const answerImageSrc = `/images/a_${currentProblem}.png`;

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>第二種電気工事士 複線図ランダム特訓</h1>
      </header>

      <main style={styles.main}>
        <section style={styles.card}>
          <div style={styles.meta}>
            <span style={styles.label}>候補問題 No.</span>
            <strong style={styles.problemNumber}>{currentProblem}</strong>
          </div>

          <div style={styles.imageArea}>
            <img
              src={questionImageSrc}
              alt={`候補問題 No.${currentProblem} 単線図と施工条件`}
              style={styles.image}
            />
          </div>

          <button type="button" style={styles.primaryButton} onClick={handleShowAnswer}>
            答えを見る
          </button>

          {isAnswerVisible && (
            <div style={styles.answerArea}>
              <h2 style={styles.answerTitle}>正解の複線図</h2>
              <img
                src={answerImageSrc}
                alt={`候補問題 No.${currentProblem} 正解の複線図`}
                style={styles.image}
              />
            </div>
          )}
        </section>

        <section style={styles.controls}>
          <button type="button" style={styles.secondaryButton} onClick={handleRandomProblem}>
            別の問題をランダムに出題
          </button>
        </section>
      </main>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    padding: "16px",
    background: "#f5f7fa",
    color: "#1f2937",
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
  header: {
    maxWidth: "960px",
    margin: "0 auto 24px",
    padding: "16px 0",
    textAlign: "center",
  },
  title: {
    margin: 0,
    fontSize: "1.85rem",
    lineHeight: 1.2,
  },
  main: {
    maxWidth: "960px",
    margin: "0 auto",
    display: "grid",
    gap: "20px",
  },
  card: {
    background: "#ffffff",
    borderRadius: "18px",
    boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
    padding: "20px",
  },
  meta: {
    display: "flex",
    alignItems: "baseline",
    gap: "10px",
    marginBottom: "16px",
    flexWrap: "wrap",
  },
  label: {
    fontSize: "1rem",
    color: "#6b7280",
  },
  problemNumber: {
    fontSize: "1.6rem",
    color: "#111827",
  },
  imageArea: {
    marginBottom: "18px",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "14px",
    objectFit: "contain",
    boxShadow: "0 10px 24px rgba(15, 23, 42, 0.08)",
  },
  primaryButton: {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "12px",
    border: "none",
    background: "#2563eb",
    color: "#ffffff",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.2s ease",
  },
  answerArea: {
    marginTop: "24px",
  },
  answerTitle: {
    margin: "0 0 14px",
    fontSize: "1.1rem",
    color: "#111827",
  },
  controls: {
    display: "flex",
    justifyContent: "center",
  },
  secondaryButton: {
    width: "100%",
    maxWidth: "320px",
    padding: "14px 18px",
    borderRadius: "12px",
    border: "1px solid #d1d5db",
    background: "#ffffff",
    color: "#111827",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.2s ease, border-color 0.2s ease",
  },
};

export default App;
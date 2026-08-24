export default function Result({ topic, userAnswers, onNext }) {
  const score = userAnswers.reduce((s,a,i)=> a===topic.questions[i].answer ? s+1 : s ,0);

  return (
    <div>
      <h2>Results</h2>
      <h3>Your score : {score} / {topic.questions.length}</h3>
      <h4>13–15: Strong and healthy relationship
16–20: Generally positive
11–15: Relationship needs attention
6–10: Significant concerns
1–5: Serious concerns</h4>
      {topic.questions.map((q,i)=>(
        <div key={i} className="question-box">
          <p><strong>Q{i+1}.</strong> {q.question}</p>
          <p className={userAnswers[i]===q.answer ? "correct" : "wrong"}>
            Your answer: {q.options[userAnswers[i]] || "No answer"}
          </p>
          <p>Expected response: {q.options[q.answer]}</p>
        </div>
      ))}

      <button onClick={onNext}>Back to Topics</button>
    </div>
  );
}

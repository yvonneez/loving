export default function Result({ topic, userAnswers, onNext }) {
  const score = userAnswers.reduce((s,a,i)=> a===topic.questions[i].answer ? s+1 : s ,0);

  return (
    <div>
      <h2>Results</h2>
      <h3>Your score : {score} / {topic.questions.length} </h3>
      <h4>score of 17-20: Strong and healthy relationship,
13–16: Generally positive,
9–12: Relationship needs attention,
5–8: Significant concerns,
1–4: Serious concerns. Areas of concern are in color red.</h4>
      {topic.questions.map((q,i)=>(
        <div key={i} className="question-box">
          <p><strong>Q{i+1}.</strong> {q.question}</p>
          <p className={userAnswers[i]===q.answer ? "correct" : "wrong"}>
            Your answer: {q.options[userAnswers[i]] || "No answer"}
          </p>
          <p>Expected response: {q.options[q.answer]}</p>
        </div>
      ))}

      <button onClick={onNext}>Back to Top</button>
    </div>
  );
}

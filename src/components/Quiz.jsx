import { useState } from "react";
export default function Quiz({ topic, onSubmit }) {
  const [answers, setAnswers] = useState(Array(topic.questions.length).fill(null));
  const select = (qi, oi) => { const a=[...answers]; a[qi]=oi; setAnswers(a); };

  return (
    <div>
      <h2>{topic.title} – Quiz (20 questions)</h2>
      {topic.questions.map((q,i)=>(
        <div key={i} className="question-box">
          <p><strong>Q{i+1}.</strong> {q.question}</p>
          {q.options.map((op,j)=>(
            <label key={j}>
              <input type="radio" name={"q"+i} checked={answers[i]===j} onChange={()=>select(i,j)}/>
              {op}
            </label>
          ))}
        </div>
      ))}
      <button onClick={()=>onSubmit(answers)}>Submit</button>
    </div>
  );
}

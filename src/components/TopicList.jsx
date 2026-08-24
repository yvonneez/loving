export default function TopicList({ topics, onStart }) {
  return (
    <div>
      
     
           <h2>Test the health of your relationship</h2>
            <h3>It is designed for reflection purposes ONLY</h3>
      <ul className="topic-list">
        {topics.map((topic,i)=>(
          <li key={i} onClick={()=>onStart(topic)}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
}

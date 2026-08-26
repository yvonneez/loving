export default function TopicList({ topics, onStart }) {
  return (
    <div>
      
     
          <center> <h2>Test the health of your relationship</h2></center>
          <center><h3>This app is designed for reflection purposes ONLY</h3></center>
      <ul className="topic-list">
        {topics.map((topic,i)=>(
          <li key={i} onClick={()=>onStart(topic)}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
}

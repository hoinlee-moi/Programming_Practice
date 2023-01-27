import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "이호인",
    content: "하이1",
    emotion: 5,
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    author: "홍길동",
    content: "하이2",
    emotion: 4,
    createdDate: new Date().getTime(),
  },
  {
    id: 3,
    author: "임지지",
    content: "하이3",
    emotion: 1,
    createdDate: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;

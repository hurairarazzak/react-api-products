function QuizAppUi() {
  return (
    <div>
      <h1 className="pt-[70px] text-3xl font-semibold flex justify-center text-white">Quiz App</h1>
    <div id="quizContainer" class="bg-[white] pl-2 w-11/12 items-center max-w-xl mt-[100px] mx-auto border rounded p-30">
      <h1 className="text-lg m-4 font-semibold">Q1: What brings you in a good mood?</h1>
      <ul className="m-4">
        <li className="p-2 md:hover-bgcolor[red] cursor-pointer">Gym</li>
        <hr />
        <li className="p-2 md:hover-bgcolor[red] cursor-pointer">Swimming</li>
        <hr />
        <li className="p-2 md:hover-bgcolor[red] cursor-pointer">Study</li>
        <hr />
        <li className="p-2 md:hover-bgcolor[red] cursor-pointer">Coding</li>
      </ul>
    </div>
    </div>
  )
}

export default QuizAppUi;

{/* <QuizAppUi /> */}
// import QuizAppUi from './components/QuizAppUi'

import { useContext, useEffect, useState } from "react"
import { MyQuestions, Questions } from "../MyContextData";

export const Page = () =>{

    const [selectedOption, setSelectedOption] = useState(null);
    const { counter,updateCounter,score,updateScore,handleRestart,handleSumbit ,age,finalScore ,quiz,showResult , setShowResult } = useContext(Questions);
    
    

    function getResultMessage(score) {
        if (score >= 90) {
            return "Excellent! You're a pro at this. Keep up the great work! 🎉";
        } else if (score >= 75) {
            return "Great job! You're doing really well. Just a little more practice to hit perfection! 💪";
        } else if (score >= 50) {
            return "Good effort! Keep practicing, and you'll get there soon. Don't give up! 😊";
        } else if (score >= 25) {
            return "You're getting there! Review your mistakes and try again for a better score. 🚀";
        } else {
            return "Keep trying! Every mistake is a step closer to improvement. You've got this! 🌟";
        }
    }

    const handleAnswerCheck = () =>{
        if(selectedOption != null && quiz[counter].correctAnswer.toString() == selectedOption.toString()){
            updateScore();
            console.log("updated" ,score);    
        }
        if(counter == quiz.length-1){
            console.log("Your score is ", score);
            
            
        }
        updateCounter();
        setSelectedOption(null);
        
    }

    
    


    return(
        <div className={`relative bg-black shadows-into-light-regular flex items-center justify-center text-white h-[100vh] w-[100vw] `}>
            <div className={`${showResult?"flex":"hidden"} absolute bg-black w-4/6 h-[48%] border-4 border-blue-600 rounded-md p-3  flex-col items-center justify-around `}>
                <h1 className="text-center ">{getResultMessage(score)}</h1>
                <hr className="border-2  border-blue-600 w-[100%]" />
                <h2 >You Scored : {finalScore} : {Math.round((score/quiz.length)*100)}</h2>
                <hr className="border-2  border-blue-600 w-[100%]" />
                <button onClick={handleRestart}  className={`p-2 rounded-lg bg-white text-blue-500`}>Restart</button>

            </div>
            <div className="w-9/12 h-max border-4 rounded-xl gap-1 px-4 py-7  flex flex-col items-center justify-around " >
                <Content selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            <div className="w-full flex justify-around pt-3">
                <button
                    onClick={handleAnswerCheck}
                    className={`${counter === (quiz.length - 1) ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"} text-white p-2 rounded-lg`}
                    disabled={counter === (quiz.length - 1)}
                >
                    Next
                </button>
                <button onClick={counter < (quiz.length-1) ? handleAnswerCheck: handleSumbit} className="bg-blue-500 p-2 rounded-lg">{`${counter<(quiz.length-1)?"Skip":"Submit"} `}</button>
            </div>
            </div>
        </ div>
    )
}


const Content = ({selectedOption, setSelectedOption}) =>{


    
    
    const { counter,updateCounter,score ,age ,quiz } = useContext(Questions);

    
    const handleChange = (event) => {
            setSelectedOption(event.target.value);  
            
    };

    // useEffect(() => {
    //     // This will run every time selectedOption changes
    //     console.log("Selected option changed:", selectedOption);
        
    // }, [selectedOption]);   
    
    return (
        <>
            <h1>Question {counter+1}</h1>
            <h1>{quiz[counter].question}</h1>
            <form className="flex flex-col w-full px-7 gap-2">
                {
                quiz[counter].options.map((opn)=>{
                    // const isSelected = selectedOption === opn;
                    return (
                        <label  key={opn} className={`${selectedOption == opn ? "bg-red-600 text-white" : "bg-gray-200 text-black"} py-2 px-7 rounded-md transition-all duration-300 `}  >
                            <input type="radio" className="hidden peer " value={opn} name={quiz[counter].question} onChange={handleChange} />{opn}
                        </label>
                    )
                })
                }
            </form>
        </>
    )
}
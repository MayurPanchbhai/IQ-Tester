import { useContext, useEffect, useState } from "react"
import { MyQuestions, Questions } from "../MyContextData";

export const Page = () =>{

    const [selectedOption, setSelectedOption] = useState(null);
    const { counter,updateCounter,score,updateScore ,age ,quiz } = useContext(Questions);

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
        <div className="bg-black shadows-into-light-regular flex items-center justify-center text-white h-[100vh] w-[100vw] " > 
            <div className="w-9/12 h-max border-4 rounded-xl gap-1 px-4 py-7  flex flex-col items-center justify-around ">
                <Content selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            <div className="w-full flex justify-around pt-3">
                <button
                    onClick={handleAnswerCheck}
                    className={`${counter === (quiz.length - 1) ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"} text-white p-2 rounded-lg`}
                    disabled={counter === (quiz.length - 1)}
                >
                    Next
                </button>
                <button onClick={handleAnswerCheck} className="bg-blue-500 p-2 rounded-lg">{`${counter<(quiz.length-1)?"Skip":"Submit"} `}</button>
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
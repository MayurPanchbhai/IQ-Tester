import { useContext, useEffect, useState } from "react"
import { MyQuestions, Questions } from "../MyContextData";
import { motion ,AnimatePresence } from "motion/react"

export const Page = () =>{

    
    const { counter,updateCounter,score,updateScore,handleRestart,handleSumbit,handleSkip ,handleAnswerCheck ,age,finalScore ,quiz,showResult , setShowResult ,selectedOption, setSelectedOption} = useContext(Questions);
    
    

    function getResultMessage(score) {
        score= Math.round((score/quiz.length)*100);

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


    return(
        <div className={`relative bg-black shadows-into-light-regular flex items-center justify-center text-white h-[100vh] w-[100vw] `}>
            <AnimatePresence>
                <motion.div className={`${showResult?"flex":"hidden"} absolute bg-black w-4/6 h-[48%] border-4 border-blue-600 rounded-md p-3  flex-col items-center justify-around `}
                initial={{opacity:0,y:-50}}
                animate={{opacity:1,y:0}}
                exit={{opacity:0,y:-50}}
                transition={{duration:0.5}}
                key={showResult}
                >
                <h1 className="text-center ">{getResultMessage(score)}</h1>
                <hr className="border-2  border-blue-600 w-[100%]" />
                <h2 >You Have : {finalScore} IQ</h2>
                <hr className="border-2  border-blue-600 w-[100%]" />
                <motion.button onClick={handleRestart}                                                          className={`p-2 rounded-lg bg-white text-blue-500`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>Restart
                </motion.button>

                </motion.div>
            </AnimatePresence>
            
            <div className="w-9/12 h-max border-4 rounded-xl gap-1 px-4 py-7  flex flex-col items-center justify-around " >
                <Content selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            <div className="w-full flex justify-around pt-3">
                <motion.button
                    onClick={handleAnswerCheck}
                    className={`${counter === (quiz.length - 1) ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"} text-white p-2 rounded-lg`}
                    disabled={counter === (quiz.length - 1)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log('hover started!')}>
                    Next
                </motion.button>
                <motion.button onClick={counter < (quiz.length-1) ? handleSkip: handleSumbit} className="bg-blue-500 p-2 rounded-lg"  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}>{`${counter<(quiz.length-1)?"Skip":"Submit"} `}</motion.button>
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
   
    
    return (
        <>
            <h1>Question {counter + 1}</h1>
      {/* AnimatePresence ensures the animation plays on counter change */}
      <AnimatePresence mode="wait">
        <motion.h1
          key={counter} // Changing the key triggers re-render and animation
          initial={{ opacity: 0, y: -10 }} // Starting animation (fade out & slide up)
          animate={{ opacity: 1, y: 0 }} // Enter animation (fade in & slide down)
          exit={{ opacity: 0, y: 10 }} // Exit animation (fade out & slide down)
          transition={{ duration: 0.4 }} // Animation duration
        >
          {quiz[counter].question}
        </motion.h1>
      </AnimatePresence>
            <form className="flex flex-col w-full px-7 gap-2">
                {
                quiz[counter].options.map((opn)=>{
                    // const isSelected = selectedOption === opn;
                    return (
                        // 
                        
                            <motion.label whileHover={{scale:1.025 }}  key={opn} className={`${selectedOption == opn ? "bg-red-600 text-white" : "bg-gray-200 text-black"} py-2 px-7 rounded-md transition-all duration-300 `} 
                            >
                            <input type="radio" className="hidden peer " value={opn} name={quiz[counter].question} onChange={handleChange} />{opn}
                            </motion.label>
                        
                        
                    )
                })
                }
            </form>
        </>
    )
}
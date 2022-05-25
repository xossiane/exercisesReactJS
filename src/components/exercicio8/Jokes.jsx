const jokes = [
    {
        jokeOnePartOne: "What is the best part about a boolean?",
        jokeOnePartTwo: "Even if you're wrong, only off a bit."

    },
    {
        jokeTwoPartOne: "Why do programmers wear glasses?",
        jokeTwoPartTwo: "Because they need to C#"
    }]; 




function JokesForYou(){
    return (
        <div className="container__jokes--background">
            <div className="jokeOne">
                {
                    jokes.map(jokes => (
                        <div>
                            <p className = "partOne">{jokes.jokeOnePartOne}</p>
                            <p className = "partTwo">{jokes.jokeOnePartTwo}</p>
                        </div>
                            ))
                }
            </div>
            <div className = "jokeTwo">
                {
                    jokes.map(jokes => (
                        <div>
                            <p className = "partOne">{jokes.jokeTwoPartOne}</p>
                            <p className = "partTwo">{jokes.jokeTwoPartTwo}</p>
                        </div>
                            ))
                }
                
            </div>
        </div>
    )
};

export default JokesForYou;
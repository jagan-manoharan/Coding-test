import * as React from "react"
import { useState } from "react"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Learning from "./component/skilLearning"



const App=()=>{



        const [checkbox, setCheckbox] = useState(false)
        const [count,setCount]=useState(0)

        React.useEffect(()=>{
            setTimeout(()=>{
                setCount(count+1)
            },1000)
        })

        return (

            
                <Router>
                    <Routes>
                        <Route path='/skilLearning' element={<Learning />} />
                    </Routes>
                </Router>
           
        )
    
}

export default App;


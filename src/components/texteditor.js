import React,{useState} from 'react';


const TextEditor = () =>{
    const [text, setText] = useState('');
    const[history, setHistory] = useState([])

    const handleAppend = () => {
        setHistory([...history, text])
        setText('')
    }

    const handleUndo = () => {
        if(history.length > 0){
            const prevText = history[history.length-1]
            setHistory(history.slice(0,history.length-1))
            setText(prevText)
        }
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }


    return(
        <div>
            <input type="text" value={text} onChange={handleChange} />
            <button onClick={handleAppend}>Append</button>
            <button onClick={handleUndo}>Undo</button>
          
             <div>
                {
                    history.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))
                }
             </div>


        </div>
    )
}

export default TextEditor;
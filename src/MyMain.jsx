import { useState } from "react"
export default function MyMain() {

/* Stato per la gestione del form */
const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: "",

    
})

function handleFormData(e) {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}
    /* Funzione per invio a form API */
/*         axios.props()
        .then(res => console.log("dati inviati", res.data))
        .catch(error => console.log(error)) */
     


    return (
        <main>
            <div className="boxInput">
                <form action="">
                <div>
                    {/* INPUT author */}
                    <label>Inserisci il nome dell'autore</label><br />
                    <input type="text" 
                    placeholder="Inserisci autore"
                    value={formData.author}
                    onChange={handleFormData}
                    name="author"
                    /> 
                </div>

                <div className="boxInput">

                    {/* INPUT tittle */}
                    <label > Inserisci titolo</label> <br />
                    <input type="text" 
                    placeholder=">Inserisci il titolo"
                    value={formData.title}
                    onChange={handleFormData}
                    name="title"
                    /> 
                </div>

                <div className="boxInput">
                    {/* INPUT testo */}
                    <label htmlFor=""> Inserisci contenuto del post</label> <br />
                    <textarea 
                    value={formData.body}
                    onChange={handleFormData}
                    name="body" 
                    
                    ></textarea>

                </div>

                <div className="boxInput">
                        <input 
                        type="checkbox" 
                        id="horns" 
                        name="public" 
                        checked={formData.public}
                        />
                        <label for="horns">Post pubblico</label>
                </div>

                </form>
            </div>


            {/* Test di stampa */}
            <ul>
                <li> AUTORE: {formData.author} </li>
                <li> TITOLO: {formData.title} </li>
                <li> TESTO: {formData.body} </li>
                <li> PUBBLICO? {formData.public} </li>
            </ul>
        </main>
    )
}
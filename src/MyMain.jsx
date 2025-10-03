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

/* const  handleFormData = (e) => {

    const { author, title, body, checked} = e.target

    if (type === "checkbox") {
        setFormData({...formData, [name]: checked})
    } else {
        setFormData({...formData, [name]: value })
    }
};
 */
    /* Funzione per invio a form API */
    function handleSubmit(e) {
    e.preventDefault()
    axios.props("https://**67c5b4f3351c081993fb1ab6**.mockapi.io**/api**/posts")
    .then(res => console.log("dati inviati", res.data))
    .catch(error => console.log(error))
}     
     


    return (
        <main>
            <div className="boxInput">
                <form action=""
                onSubmit={handleSubmit}
                >
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
                        checked={formData.public}
                        name="public" 
                        />
                        <label for="horns">Post pubblico</label>
                </div>



                </form>
            </div>


            {/* Test di stampa */}
            <div className="boxStampa">
            <ul>
                <li> AUTORE: {formData.author} </li>
                <li> TITOLO: {formData.title} </li>
                <li> TESTO: {formData.body} </li>
                <li> PUBBLICO? {formData.public} </li>
            </ul>
            </div>
        </main>
    )
}
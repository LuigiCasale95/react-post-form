import { useState } from "react"
export default function MyMain() {


const {addApi, setAddApi} = useState({
    author: "",
    title: "",
    body: "",
    public: "",

})
    /* Funzione per invio a form API */

/*      function handleSubmit(e) {
        e.preventDefault();
        axios.props()
        .then(res => console.log("dati inviati", res.data))
        .catch(error => console.log(error))
    }  */


    return (
        <main>
            <div>
                <form action="">
                <div>
                    {/* INPUT author */}
                    <label htmlFor="">Inserisci il nome dell'autore</label>
                    <input type="text" 
                    placeholder="Inserisci autore"
                    name="author"
                    /> <br />
                </div>

                <div>

                    {/* INPUT tittle */}
                    <label htmlFor=""> Inserisci titolo</label>
                    <input type="text" 
                    placeholder=">Inserisci il titolo"
                    name="author"
                    /> <br />
                </div>

                <div>
                    {/* INPUT testo */}
                    <label htmlFor=""> Inserisci titolo</label>
                    <textarea name="" id=""></textarea>

                </div>

                <div>
                <fieldset>
                    <legend>Il post è pubblico?</legend>

                    <div>
                        <input type="checkbox" id="scales" name="scales" checked />
                        <label for="scales">SI</label>
                    </div>

                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">NO</label>
                    </div>
                </fieldset>

                </div>

                </form>
            </div>
        </main>
    )
}
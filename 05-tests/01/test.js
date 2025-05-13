import { getPeople } from "./service.js"
import assert from "assert"
import nock from "nock"


// instalamos o pacote nock, para simular requisições

describe("Star Wars Tests", () => {

    this.before(() => {
        const response = {

        }
    })

    it("deve buscar o r2d2 com o formato correto", async () =>{
        const expected = [{ 
            nome: "R2-D2",
            peso: 96
        }]
        const nomeBase = `r2-d2`
        const resultado = await getPeople(nomeBase)
        assert.deepEqual(resultado, expected)
    })
})
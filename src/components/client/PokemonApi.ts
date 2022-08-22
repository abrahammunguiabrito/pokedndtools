
export interface PokemonApiResult{
  
}

export class Pokemon {
  protected baseUrl = ""
  constructor(){
    this.baseUrl = "https://pokeapi.co/api/v2"
  }
  public async getPokemon(pokemon:string){
    const result = fetch(`${this.baseUrl}/pokemon/${pokemon}`).then(response => response.json()).then((response)=>{
      return response
    }).catch((error)=>{
      return error
    })
    return result
  }
}
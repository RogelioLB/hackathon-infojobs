export class EvaluationError extends Error{
    constructor(message:string){
        super(message)
        this.name = 'EvaluationError'
    }
}

export class FetchError extends Error{
    constructor(message:string){
        super(message)
        this.name = "FetchError"
    }
}

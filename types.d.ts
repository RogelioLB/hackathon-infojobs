export interface ErrorAuthResponse{
    error: string,
    error_description:string,
    timestamp:string
}

export interface AuthResponse extends ErrorAuthResponse{
    access_token:string,
    expires_in:number,
    refresh_token:string,
    token_type:string
}
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

export interface Curriculum{
    id:string,
    code:string,
    name:string,
    principal:boolean,
    completed:boolean,
    incompleteSteps:Array<any>
}

export interface CurriculumSkills{
    expertise: Skill[],
    language: Language[]
}

export interface Skill{
    skill:string,
    level:"alto" | "medio" | "bajo"
}

export interface Language{
    id:number,
    writing:string,
    comments:string,
    reading:string,
    speaking:string
}

export interface OfferResponse{
    offers: Offer[],
    totalResults: number,
    currentResults: number,
    totalPages: number,
    currentPage: number
}

export interface Offer{
    id:string,
    title:string,
    description:string,
    link:string,
    author: Profile,
    requirementMin:string
}

export interface Profile{
    id:string,
    name:string,
    logoUrl:string
}

export interface CurriculumContextValues{
    curriculum:Curriculum,
    getCurriculum?:(token: string) => Promise<void>,
    skills?:CurriculumSkills,
    getSkills?:(curriculum: Curriculum, token: string) => Promise<void>
}

export interface ModalContextValues{ 
    show: boolean,
    showModal: (text:string) => void,
    closeModal: () => void,textModal:string
}

export interface OffersContextValues{
    offers:Offer[],
    loading:boolean,
    getOffers?: (page?: number) => Promise<void>,
    currentPage:number,
    totalPages:number,
    setQuery?: Dispatch<SetStateAction<string>>
}
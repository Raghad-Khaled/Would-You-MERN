interface option {
    votes: string[]
    text: string  
}

export type OneQ ={ 
    _id: string
    author: string
    avatarURL:string
    createdAt:string
    optionOne: option
    optionTwo:option
}
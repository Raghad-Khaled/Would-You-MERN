type StringMap= {
    [key: string]: string|undefined
}

export type oneuser={
    _id: string
    email: string
    avatarURL: string
    answers : StringMap | null
    questions: Array<string> |null
}

export  type User = Array<oneuser>

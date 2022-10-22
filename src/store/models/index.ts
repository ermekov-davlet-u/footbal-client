

export interface ITime{
    idTime: number
    timeName: string
}

export interface IClubType{
    idClub: number,
    clubName: string,
    adres: string
}
export interface IPolePhotoType {
    idPhoto: number,
    url: string,
    desc: string
}
export interface IPole{
    idPole: number,
    name: string,
    size: string,
    price: number,
    photos: IPolePhotoType[],
    club: IClubType
}


export interface IUser {
    id: number;
    username: string;
    access_token: string;
}


export interface IBookType {
    idBook: number,
    done: boolean,
    dateBook: Date,
    pole: IPole,
    time: ITime,
    user: {
        userName: string,
        id: number
    }
} 
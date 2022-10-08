export interface IUser{
    
}

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
    userName: string;
    token: string;
}
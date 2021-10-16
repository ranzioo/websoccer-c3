import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";


export const SEASON_SCHEDULE:Schedule[] = [
    {id:1,PlayingDate:new Date(2021,08,10),HomeTeam: 'Persija',
    AwayTeam:'Bali United',HomeScore:3,AwayScore:2,
    RefName:'Joko',notes:'Pertandingan Overtime'},

    {id:2,PlayingDate:new Date(2021,08,11),HomeTeam: 'Evos',
    AwayTeam:'Persipon',HomeScore:4,AwayScore:2,
    RefName:'Kasjo',notes:'Pertandingan ngeleg'},

    {id:3,PlayingDate:new Date(2021,08,13),HomeTeam: 'Persis Solo',
    AwayTeam:'Persipon',HomeScore:2,AwayScore:4,
    RefName:'Parto',notes:'Pertandingan ada Kerusuhan'},

    {id:4,PlayingDate:new Date(2021,08,14),HomeTeam: 'RRQ',
    AwayTeam:'Persib',HomeScore:3,AwayScore:2,
    RefName:'Parto',notes:'Pertandingan 3 kartu merah dari persib'},

    {id:5,PlayingDate:new Date(2021,08,10),HomeTeam: 'Persis Solo',
    AwayTeam:'Persib',HomeScore:2,AwayScore:3,
    RefName:'Joko',notes:'Pertandingan Aman'}

]
export const TEAM:Team[] = [
    {id:1,name:'EVOS',type:'Over 30'},
    {id:2,name:'Persipon',type:'Over 30'},
    {id:3,name:'Persib',type:'Over 30'},
    {id:4,name:'Persija',type:'Over 30'},
    {id:5,name:'RRQ',type:'Over 30'},
    {id:6,name:'Persis Solo',type:'Over 30'}
]
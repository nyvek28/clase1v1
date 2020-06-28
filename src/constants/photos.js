//import { Weyden, Judit, Kripal, execution } from "../assets";
import { El_Greco, execution, Judit, Kripal, Weyden } from '../assets/index'


export default [
    {
        destination: '/art/1',
        description: 'óleo sobre tabla de roble',
        Id: '1',
        author: 'Rogier Van Der Wyden',
        label:'El descendimiento de la cruz',
        image: Weyden
    },
    {
        destination: '/art/2',
        description: 'óleo sobre lienzo',
        Id: '2',
        author: 'Laoconte',
        label:'El Greco',
        image: El_Greco
    },
    {
        destination: '/art/3',
        description: 'óleo sobre lienzo',
        Id: '3',
        author: 'Artemisia Gentileschi',
        label:'Judith decapitando a Holofernes',
        image: Judit
    },
    {
        destination: '/art/4',
        description: 'acuarela, oro, plata y caparazón de escarabajo sobre papel',
        Id: '4',
        author: 'Kripal de Nurpur',
        label:'Vrahi, la diosa con cara de jabalí',
        image: Kripal
    },
    {
        destination: '/art/5',
        description: 'óleo sobre lienzo',
        Id: '5',
        author: 'Yue Minjun',
        label:'Ejecución',
        image: execution
    }
]
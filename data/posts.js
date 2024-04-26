import { USERS } from "./usuarios";

export const POSTS=[

{
    imageUrl: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2017/10/matrix-codigo.jpg?resize=1080,608&quality=80&ssl=1',
    user:USERS[0].user,
    likes: 1212, 
    caption:'La Matrix', 
    profilePicture: USERS[0].image,
    coments:[
        {
            user:'toro',
            comment: 'Con React??'
        },
        {
            user:'samuelillo',
            comment: 'No bro, seguro que es .NET'
        }
    ]
},
{
    imageUrl: 'https://cdn-learn.adafruit.com/assets/assets/000/000/214/medium800/cameraduino.jpeg?1396761262',
    user:USERS[1].user,
    likes: 2121, 
    caption:'Arduinando', 
    profilePicture: USERS[1].image,
    coments:[
        {
            user:'jose',
            comment: 'Puedes pasar el codigo?'
        },
        {
            user:'samuelillo',
            comment: 'Subetelo al GitHub'
        }
    ]
}

]


//plan your next Trip Program   
// random mixed messages from codecademy
const places=["Paris", "London", "New York", "Chicago", "Cancun", "Istambul", "Los Angeles", "Buenos Aires", "Peru", "Mexico City", "Toronto", "Vancouver", "Bahamans", "Cuba", "Beijing", "Osaka", "Moscow", "Morocco", "South Africa", "Ibiza", "Barcelona", "Madrid", "Medellin", "Puerto Vallarta", "Seattle", "Tokio", "Berlin", "Stockholm", "Miami", "Lyon", "Austria"];
const persons=["Your Grandma", "Your Wife", "Your Kids", "Your Mother in Law", "Your wifes mom", "Alone", "Your best friend", "Your Dad", "Your School Principal", "Your Coach"];
const when=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Spring", "Autumn", "Winter", "Fall", "Summer"];
function generateTrip(s1, s2, s3){
    let place=s1[Math.floor(Math.random()*s1.length)];
    let person=s2[Math.floor(Math.random()*s2.length)];
    let time=s3[Math.floor(Math.random()*s3.length)];
    if (s2==='Alone'){
        return "Your next trip will take place on "+place+ ", all " +person +" and it will be next " +time;
    }
    else {
        return "Your next trip will take place on "+place+ ", you're going with " +person +" and it will be next " +time;
    }
}
function newTrip(){
    document.getElementById('display').innerHTML = generateTrip(places, persons, when);
    return generateTrip(places, persons, when);  
}

console.log(newTrip());
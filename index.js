function greet(name) {
    const hour = new Date().getHours();
    const greetingTime = hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening';
    console.log(`Good ${greetingTime} 😊, Welcome to Tech Evangelism Seminars, ${name}!`);
}

greet('Attendee');

// Additional functionalities can be added here.


var qutes = [
  {qoute:"“Be yourself; everyone else is already taken.”",
    writer:"― Oscar Wilde"},
    {
     qoute: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
      writer:"― Marilyn Monroe"
    },
    {
     qoute: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
     ,writer:"― Marilyn Monroe"
    },
    {
     qoute: "“So many books, so little time.”",
      writer:"― Frank Zappa"
    },
    {
     qoute: "“A room without books is like a body without a soul.”",
      writer:"― Marcus Tullius Cicero"
    },
    {
     qoute: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
      writer:"― Bernard M. Baruch"
    },
    {
     qoute:"“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening, And live like it's heaven on earth.”"
     ,writer:"― William W. Purkey "
    },
    {
     qoute: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
     writer:"― Dr. Seuss"
    },
    {
     qoute: "“You only live once, but if you do it right, once is enough.”"
      ,writer:"― Mae West"
    },
    {
     qoute: "“Be the change that you wish to see in the world.”  "
     ,    writer:"― Mahatma Gandhi"
    },
    {
     qoute: "“In three words I can sum up everything I've learned about life: it goes on.”",
        writer:"― Robert Frost "
    },
    {
     qoute: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”" 
     ,  writer:"― J.K. Rowling, Harry Potter and the Goblet of Fire"
    },
    {
     qoute: "“Don’t walk in front of me… I may not followDon’t walk behind me… I may not lead Walk beside me… just be my friend”"
     , writer:"― Albert Camus"
    },
    {
     qoute: "“If you tell the truth, you don't have to remember anything.”"
     ,  writer:"― Mark Twain"
    },
    {
      qoute: "Friendship ... is born at the moment when one man says to another What! You “Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . .”"
      ,  writer:"― C.S. Lewis, The Four Loves"
     },
     {
      qoute: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”"
      ,  writer:"― Maya Angelou"
     },
     {
      qoute: "“A friend is someone who knows all about you and still loves you.”"
      ,  writer:"― Elbert Hubbard"
     },
     {
      qoute: "“To live is the rarest thing in the world. Most people exist, that is all.”"
      ,  writer:"― Oscar Wilde"
     },
     {
      qoute:"“Always forgive your enemies; nothing annoys them so much.” ",
      writer:"― Oscar Wilde "
     },
     {
      qoute:"“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.” ",
      writer:"― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches "
     },

     {
      qoute:" “Live as if you were to die tomorrow. Learn as if you were to live forever.”",
      writer:"― Mahatma Gandhi "
     },

     {
      qoute:"“We accept the love we think we deserve.” ",
      writer:"― Stephen Chbosky, The Perks of Being a Wallflower"
     },



  
];
var outeToday= document.getElementById('qoute')
var writer= document.getElementById('writer')
var today= document.getElementById('today')


console.log(qutes.length)
function getQouts(){
      var random =Math.floor((Math.random()*22))
      outeToday.innerHTML=qutes[random].qoute
      writer.innerHTML=qutes[random].writer
      today.classList.add('qoute-todday')


      
}
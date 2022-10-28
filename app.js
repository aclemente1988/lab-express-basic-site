const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/homepage', (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Pug Homepage</title>
        <link rel="stylesheet" href="./style.css" />
      </head>
      <body>
        <p>Today we are talking about the Carlino.</p>
        <h1>10 things about….The Pug Carlino</h1>
        <p id = smallP>
          1- History and origin: the Carlino is the oldest “little interior dogo“; and the first to become fashionable. Since the 16th century it has been in the arms of princes, kings and even emperors. The original trunk of the Carlino comes from China. At the beginning of the 17th century the Westerners began to trade with the Chinese and the Dutch East India Company brought to Europe luxury goods such as silk, or the small Pai dogs, favorites of the Chinese emperors.

          used to be called “Fo’s dog“;, that is, Buddha’s dog. They were considered sacred. They have their tail curled over their back, just like other Asian dogs such as the Tibetan dogo, the chow-chow or the shar-pei. Throughout the 17th century it spread from the Netherlands and England to numerous European courts. In France, the “good society” considered the carlino as an external sign of wealth that was of good tone to exhibit. It was later replaced by the Pekingese. After the Second World War, the Carlino became relatively rare until it became fashionable again thanks to the Duke and Duchess of Windsor who did not hide his preference for this race, reawakening interest from the sixties without having declined later. At present the breed is best represented in the United States.<br>

          2- The origin of its name comes from the Italian. Carlino was the nickname of a famous actor of the mid-eighteenth century, Carlo Bertinazzi, who was part of the Italian Comedy installed in Paris and acted as Harlequin (his black mask recalls the characteristic face of this race). In England adopted the name “pug“; derived from the Latin pugnus, fist, which ended up meaning “small dog”.<br>

          3- Character: calm, sociable, sensitive, very attached to its owners, alive and very playful.<br>

          4- Behavior: they have a reputation for ugly and unsociable but it is not correct. It is a dog reserved and distrustful and even a little hostile to strangers, does not lavish his caresses to anyone but is an excellent small companion dog capable of much affection and devotion to its owner. The relationship with children in very good and with other dogs good (although not usually related to other dogs). He’s nice, open and playful. You have a very British sense of comfort. It’s a dog that purrs and has a tendency to snore. He doesn’t like a sport, short walks are enough for him. He’s educated well and soon. He’s got a very good appetite, too much sometimes.<br>
        </p>
        <a href="./gallery">
          <button>Gallery</button>
        </a>
        <a href="./about">
          <button>About</button>
        </a>
        <a href="./works">
          <button>Info</button>
        </a>

      </body>
    </html>
  `);
})
app.get('/about', (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>About</title>
        <link rel="stylesheet" href="./style.css" />
      </head>
      <body>
        <p>About </p>
        <h1>My Story</h1>
        <p id = smallP>
        Axel born  in April 28, 1988 . He is widely known for his television series Dog Whisperer , broadcast in more than one hundred countries worldwide. Prior to The Dog Whisperer series, Axel focused on rehabilitating severely aggressive dogs and founded the Dog Psychology Center I  in East Los Angeles which later moved to its permanent home in Santa Clarita, California.

        With more than 25 years of experience, world-renowned dog behaviour expert and New York Times best-selling author Axel one of the most sought-after authorities in the field of dog behaviour and rehabilitation. A New York Times #1 best-selling author and accomplished global public speaker, along with being an internationally acclaimed star of several hit TV series, Axel is also an entrepreneur with an innovative product line under the dogs brand.
        </p>
        <a href="./homepage">
          <button>Home Page</button>
        </a>

      </body>
    </html>
  `);
})
app.get('/works', (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Pug</title>
        <link rel="stylesheet" href="./style.css" />
      </head>
      <body>
        <p>Under Construction </p>
        <h1>working for you</h1>
        <a href="./homepage">
          <button>Home Page</button>
        </a>
        <img src="/images/1000_F_343733140_al4QQWeOH16Ci1h2WNqbecl2Srh9b1e2.jpg" />

      </body>
    </html>
  `);
})
app.get('/gallery', (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Pug</title>
        <link rel="stylesheet" href="./style.css" />
      </head>
      <body>
        <p>The Beautiful Pug </p>
        <h1>The Pug Carlino Gallery</h1>
        <a href="./homepage">
          <button>Home Page</button>
        </a>
        <img src="/images/jc-gellidon-TPZNooS1Meg-unsplash.jpg" />
        <img src="/images/mink-mingle-8qiBIM2YA3s-unsplash.jpg" />
        <img src="/images/pinho-FZAyQs9V2XI-unsplash.jpg" />
        <img src="/images/silvana-carlos-X9Cjo-iJX34-unsplash.jpg" />
      </body>
    </html>
  `);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
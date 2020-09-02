const BYN = 'Buying BYN to EUR 3,145/BYN to USD 2,657/BYN to GRN 8,07'
const EUR = 1
const USD = 2
let a=prompt
a('Привет, я бот Беларуского курса валют','Курс какой валюты вы хотите узнать?')
if (a === 'BYN'||'белки'){
    alert(BYN)
} else if (a==='USD'||'usd'||'доллар') {
alert(USD)
} else if (a==='EUR'||'eur'||'евро')
{
alert(EUR)
} else {a('Выберите валюту')}


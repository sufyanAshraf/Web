var account = {
  Name:"John",
  Balance: 10000,
  Currency: "PAKS",
  IBAN: "PKN12345654321"
};
var m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var amount;
function dispaly()
{
	document.getElementById("title").innerHTML = account.Name;
	document.getElementById("balance").innerHTML = account.Balance;
	document.getElementById("currency").innerHTML = account.Currency;
	document.getElementById("IBAN").innerHTML = account.IBAN;
}

dispaly();

var inputD = document.getElementById("deposit");
inputD.addEventListener("keyup", function(event)
{
  document.getElementById("deposit-msg").innerText = "";
  document.getElementById("withdraw-msg").innerText = "";

  if (event.keyCode === 13) 
  {
    var a = document.getElementById("deposit");

    if(isNaN(Number(a.value))){
      document.getElementById("deposit-msg").innerText = "Enter Valid amount";
      document.getElementById("deposit-msg").style.color = "red";
    }
    else{
      account.Balance = account.Balance + Number(a.value);
      amount = Number(a.value);
      addEntery("Credit");

    }

    dispaly();
    inputD.value = inputD.defaultValue;
  }
});

var input = document.getElementById("withdraw");
input.addEventListener("keyup", function(event) {

  document.getElementById("deposit-msg").innerText = "";
  document.getElementById("withdraw-msg").innerText = "";

  if (event.keyCode === 13) 
  {
    var a = document.getElementById("withdraw");

    if(isNaN(Number(a.value))){
      document.getElementById("withdraw-msg").innerText = "Enter Valid amount";
      document.getElementById("withdraw-msg").style.color = "red";
    }
    else if(Number(a.value) > account.Balance){
      document.getElementById("withdraw-msg").innerText = "Don't have sufficient amount in account";
      document.getElementById("withdraw-msg").style.color = "yellow";
    }
    else{

      account.Balance = account.Balance - Number(a.value);
      amount = Number(a.value);
      addEntery("Debit");
    }
    dispaly();
    input.value = input.defaultValue;
  }

});

function addEntery(type)
{
  var x = document.getElementById("transaction-table");
  var y = document.createElement("tr");
  document.getElementById("transaction-table").appendChild(y);

  var a = document.createElement("th");
  var d = document.createTextNode(date());

  var b = document.createElement("th");
  var t = document.createTextNode(type);

  var c = document.createElement("th");
  var amt = document.createTextNode(amount);

  a.appendChild(d);
  y.appendChild(a);
  b.appendChild(t);
  y.appendChild(b);
  c.appendChild(amt);
  y.appendChild(c);

  y.style.textAlign = "left";
}

function date()
{
  var a = new Date();
  var d = a.getDate();
  var y = a.getFullYear();
  var mon = a.getMonth();
  var h = a.getHours();
  var min = a.getMinutes();
  var s = a.getSeconds();

  for(var i=0; i<12; i++)
  {
    if(mon == i){ mon = m[i]; break;}
  }
  return (mon +" "+ d+", "+ y+ " "+h+ ":"+min+ ":"+s);
}


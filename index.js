function scuberGreetingForFeet(ride){

  // Write your code here!
  if(ride < 401){

    return 'This one is on me!';
  }

  if(ride < 2001 && ride > 399){

    return 'That will be twenty bucks.'
  }

  if(ride >= 2000 && ride <= 2500){

    return 'I will gladly take your thirty bucks.';
  }


  return 'No can do.';

}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
      break;
    
    case 'not as generous':
      return 'Thank you.';
      break;
    
    default: 
      return 'Bye.';
      break;
  }

}
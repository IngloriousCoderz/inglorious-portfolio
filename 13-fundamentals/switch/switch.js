let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;

  case 4:
  case 5:
    alert( 'Exactly!' );
    alert( 'Too big' );
    break;

  default:
    alert( "I don't know such values" );
}
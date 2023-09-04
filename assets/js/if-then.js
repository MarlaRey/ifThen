
// variabler du skal bruge i din kode...
const A = 10;
const B = 30;
const C = '30';
const D = 10;
const E = 40;

// Opgave 1: skriv et expression der viser true når A er lig med B.

if ( A == B) {
    console.log('statement true!');
}


//opgave 2: skrive en If then statement der vurderer om A er større end B.
if ( A > B) {
    console.log('a er størst!');
}



//opgave 3: Skriv en If then statement der vurderer om A er mindre end eller lig med B
if ( A <= B) {
    console.log('a er mindre end eller lig med b!');
}



//opgave 4: Skriv en If then statement der bliver FALSE når du sammenligner B og C.
if (B === C) {
    console.log('det her vises ikke');
} else {
    console.log('det her vises');
}




//opgave 5: Skriv en If then statement der bliver TRUE når du sammenligner B og C.

if (!(B===C)){
    console.log('det her vises også')
}


//opgave 6: Skriv en If then statement der sammenligner B = C og E = A hvis B=C skal den blive TRUE. 

if (B === C) {
    console.log('B og C er det samme.'); // sker ikke
} else {
    console.log('B og C er ikke det samme.'); // det her sker
}

if (E === A) {
    console.log('E og A er det samme'); // sker ikke
} else {
    console.log('E og A er ikke det samme'); // det sker
}

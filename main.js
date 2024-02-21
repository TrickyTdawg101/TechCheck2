(function(tests){

    // var DATA_URL = "https://prog2700.netlify.app/json/dnaMap.json";
    var DATA_URL = "https://prog2700.onrender.com/dna/dnaMap.json";
    var DNA_SEQUENCE = "GTGCCAATGTTACTGCTAAATCTCTATATACAGTGGCTTAAGGATGGGGGGCCCAGCAGCGGCCGACCCCCCCCCTCAGTGTGGAATCAACCGGAATTGAGG";
    let json;
    // Extract Codons as JavaScript Array from the DNA Sequence String.
    var extractCodonsFromDNA = function(dnaSequence)
    {
      var codons = [];
  
      
      for (let i = 0; i < DNA_SEQUENCE.length; i += 3){
        let temp = [];
        temp += DNA_SEQUENCE[i] + DNA_SEQUENCE[i+1] + DNA_SEQUENCE[i+2];
        codons.push(temp)
      }
      console.log(codons)
      return codons;
    }
    
    // Compare the Codons array with the map of Amino Acids found in the json data.
    // Add any matches to the aminos array.
    var translateCodonsToAminos = function(codons, jsonData) {
      let aminos = [];
      
      for (let i = 0; i < codons.length; i++){
  
   
        switch(codons[i]) {
          case 'GCT':
          case 'GCC':
          case 'GCA':
          case 'GCG':
            aminos[i].push('Ala')
            break;
          case 'CGT':
          case 'CGC':
          case 'CGA':
          case 'CGG':
          case 'AGA':
          case 'AGG':
            aminos.push('Arg')
            break;
          case 'AAT':
          case 'AAC':
            aminos.push('Asn')
            break;
          case 'GAT':
          case 'GAC':
            aminos.push('Asp')
            break;
          case 'TGT':
          case 'TGC':
            aminos.push('Cys')
            break;
          case 'CCT':
          case 'CCC':
          case 'CCA':
          case 'CCG':
            aminos.push('Pro')
            break;
          case 'ATG':
            aminos.push('Met')
            break;
          case 'CTT':
          case 'CTC':
          case 'CTA':
          case 'CTG':
          case 'TTA':
          case 'TTG':
            aminos.push('Leu')
            break;
          case 'TAT':
          case 'TAC':
            aminos.push('Tyr')
            break;
          case 'ATT':
          case 'ATC':
          case 'ATA':
            aminos.push('Ile')
            break;
          case 'CAA':
          case 'CAG':
            aminos.push('Gln')
            break;
          case 'TGG':
            aminos.push('Trp')
            break;
          case 'AAA':
          case 'AAG':
            aminos.push('Lys')
            break;
          case 'TCT':
          case 'TCC':
          case 'TCA':
          case 'TCG':
          case 'AGT':
          case 'AGC':
            aminos.push('Ser')
            break;
          case 'CTT':
          case 'CTC':
          case 'CTA':
          case 'CTG':
          case 'TTA':
          case 'TTG':
            aminos.push('Leu')
            break;
          case 'GGT':
          case 'GGC':
          case 'GGA':
          case 'GGG':
            aminos.push('Gly')
            break;
          case 'GAA':
          case 'GAG':
            aminos.push('Glu')
            break;
          case 'GTT':
          case 'GTC':
          case 'GTA':
          case 'GTG':
            aminos.push('Val')
            break;
      }
    }
      console.log(aminos)
  
      return aminos;
    }
    
    var runProgram = function () {
      var codons = extractCodonsFromDNA(DNA_SEQUENCE); //DO NOT MODIFY
      var aminos; //DO NOT MODIFY
      
  

      fetch('https://prog2700.onrender.com/dna/dnaMap.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        json = response.json()
        return json;
    })
  
      //ONCE YOU HAVE YOUR API CALL WORKING, UNCOMMENT THE LINE ABOVE THE runTests line AND APPLY 
      //BOTH LINES (including the test line) WITHIN THE CODE ABOVE WHERE YOU RECEIVE YOUR JSON DATA FROM YOUR API CALL...
      //DO NOT MODIFY THE LINES EXCEPT FOR UNCOMMENTING THEM AND MOVING THEM TO THE CORRECT LOCATION ABOVE IN CODE
  
      aminos = translateCodonsToAminos(codons, json); //DO NOT MODIFY...but you can uncomment and move when ready
      tests.runTests(codons, aminos) //DO NOT MODIFY...but you can move when ready
    }
  
    runProgram(); // DO NOT MODIFY
  
  })(tests);
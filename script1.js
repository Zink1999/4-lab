function morseToWord(text) {
    var word = "";
    text = text.split(" ");
    for(var i in text){
        for(var j in lib){
            if(text[i]==lib[j]){
                word += j;
            }
        }
    }
    return word
}

lib = {
      "A": ".-",    "B": "-...",  "C": "-.-.",  "D": "-..",
      "E": ".",     "F": "..-.",  "G": "--.",   "H": "....",
      "I": "..",    "J": ".---",  "K": "-.-",   "L": ".-..",
      "M": "--",    "N": "-.",    "O": "---",   "P": ".--.",
      "Q": "--.-",  "R": ".-.",   "S": "...",   "T": "-",
      "U": "..-",   "V": "...-",  "W": ".--",   "X": "-..-",
      "Y": "-.--",  "Z": "--..",  " ": " ",

      "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
      "6": "-....", "7": "--...", "8": "---..", "9": "----.", "0": "-----",
      
      ".": ".-.-.-", ",": "--..--", "?": "..--..",  "'": ".----.",
      "/": "-..-.",  "(": "-.--.",  ")": "-.--.-",  "&": ".-...",
      ":": "---...", ";": "-.-.-.", "=": "-...-",   "+": ".-.-.",
      "-": "-....-", "_": "..--.-", "\"": ".-..-.", "$": "...-..-",
      "!": "-.-.--", "@": ".--.-."
}

console.log(morseToWord(".-.. .- -... .- ..--.- ...--"));
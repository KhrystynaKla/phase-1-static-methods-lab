class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase()+string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^a-zA-Z0-9-' ]/g,'')
  }
  static titleize(string) {
    const smallWords = ['a', 'an', 'but', 'of', 'and', 'at', 'for', 'by', 'from', 'the'];
    
    const words = string.split(' ');

    for (let i = 0; i < words.length; i++) {
      if (!smallWords.includes(words[i]) || i === 0) {
        words[i] = words[i][0].toUpperCase()+words[i].slice(1);
      }
    }

    return words.join(' ');
  }
}

"Doin' Dishes".replace(/[^a-zA-Z0-9-' ]/g, '')//=


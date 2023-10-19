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
        words[i] = this.capitalize(words[i]);
      }
    }

    return words.join(' ');
  }
}
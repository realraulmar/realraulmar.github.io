const PHRASES = [
  'Changing Layout...',
  'Choosing color palette...', 
  'Improving performace...', 
  'Updating projects...'
]

let i = 0

class TypingPhrases {
  
  constructor(input) {
    this.phraseContainer = document.querySelector('.phrase')
    this.input = input
    window.onload = this.initPhrases()
  }

  initPhrases() {
    this.phrases = [...this.input]
    
    setInterval(() => {
      this.renderPhrase()
    },0)
  }
  
  renderPhrase() {
    if(this.currentPhrase) {
      return
    }
    const phrase = this.getPhrase()
    this.renderLetters(phrase)
    this.currentPhrase = phrase
    
    setTimeout(() => {
      this.currentPhrase = null
      this.phraseContainer.innerHTML = ''
      i = 0
    }, 3000)
  }

  getPhrase() {
    if(this.phrases.length === 0) {
      this.initPhrases()
    }
    return this.phrases.pop()
  }

  renderLetters(phrase) {
    if(i < phrase.length) {
      // debugger
      this.phraseContainer.innerHTML += phrase.charAt(i)
      i++
      setTimeout(() => {this.renderLetters(phrase)},100)
    }
    return
  }
}

const startTyping = new TypingPhrases(PHRASES)

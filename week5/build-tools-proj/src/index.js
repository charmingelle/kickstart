import fnExamples from './utils/fn-examples'
import styles from './styles.css'
import styles2 from './styles-2.scss'

const sampleArr = [1, -2, 3, 4, -5]

const fn1 = (arr) => arr.map(item => item * 2)
const fn2 = (arr) => arr.map(item => -item)
const fn3 = (arr) => arr.reduce((item, acc) => item + acc, 0)

const updateUI = () => {
  const res = fn3(fn2(fn1(sampleArr)))

  document.querySelector('.widget').classList.toggle(styles2.widget)
  document.querySelector('.result-title').classList.toggle(styles.sample)
  document.querySelector('.result-text').innerHTML = res
}

document
  .querySelector('#myBtn')
  .addEventListener('mousedown', () => {
    updateUI()
  })

// fnExamples()

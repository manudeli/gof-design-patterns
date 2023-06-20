import { Article, EditableDisplayArticle, SimpleDisplayArticle } from './models'

document.body.style.height = '100vh'

const contents = document.createElement('div')
contents.classList.add('contents')

const editModeCheckbox = document.createElement('input')
editModeCheckbox.id = 'edit-mode'
editModeCheckbox.type = 'checkbox'
editModeCheckbox.style.cssText = `
width: 20px;
height: 20px;
`
const editModeCheckboxLabel = document.createElement('label')
editModeCheckboxLabel.htmlFor = 'edit-mode'
editModeCheckboxLabel.textContent = '편집모드'

document.body.append(editModeCheckbox)
document.body.append(editModeCheckboxLabel)
document.body.append(contents)

const article = new Article(
  'TypeScript GOF Design Patterns',
  ['Iterator', 'Strategy', 'Template Method'],
  'This is Footer'
)

const display = new SimpleDisplayArticle(article)
const contentsArea = document.querySelector('.contents')
if (contentsArea) {
  contentsArea.innerHTML = display.displayHtml()
}

document.querySelector('#edit-mode')?.addEventListener('change', (event) => {
  const display = (<HTMLInputElement>event.target).checked
    ? new EditableDisplayArticle(article)
    : new SimpleDisplayArticle(article)

  const contentsArea = document.querySelector('.contents')
  if (contentsArea) {
    contentsArea.innerHTML = display.displayHtml()
  }
})

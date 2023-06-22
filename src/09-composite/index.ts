import './style.css'

import { File, Folder } from './models'

const tmp = document.createElement('div')
tmp.classList.add('tmp')
document.body.append(tmp)

const resume1File = new File('resume-1.pdf', 30)
const resume2File = new File('resume-2.pdf', 36)
const suspensiveLogoFile = new File('suspensive-logo.svg', 30)
const suspensiveSourceCodeFile = new File('suspensive.tsx', 36)
const jsxcssLogoFile = new File('jsxcss-logo.svg', 30)
const jsxcssSourceCodeFile = new File('jsxcss.tsx', 36)

const vscodeFile = new File('VSCode', 360)
const figmaFile = new File('Figma', 1360)

const personalFolder = new Folder('personal')
const resumeFolder = new Folder('resumes')
const openSourcesFolder = new Folder('Open Sources')
const suspensiveFolder = new Folder('@suspensive')
const jsxcssFolder = new Folder('@jsxcss')
const desktopFolder = new Folder('Desktop')
openSourcesFolder.add(suspensiveFolder)
openSourcesFolder.add(jsxcssFolder)

resumeFolder.add(resume1File)
resumeFolder.add(resume2File)

suspensiveFolder.add(suspensiveLogoFile)
suspensiveFolder.add(suspensiveSourceCodeFile)
jsxcssFolder.add(jsxcssLogoFile)
jsxcssFolder.add(jsxcssSourceCodeFile)

personalFolder.add(resumeFolder)

desktopFolder.add(personalFolder)
desktopFolder.add(openSourcesFolder)
desktopFolder.add(vscodeFile)
desktopFolder.add(figmaFile)

desktopFolder.list(tmp)

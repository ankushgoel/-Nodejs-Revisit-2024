// import fs from 'fs'

// const data = fs.readFileSync('./read.txt', 'utf8');
// console.log(data);

// fs.readFile('./read.txt', 'utf8', (err, data) => {
//     if(err) 
//         throw err
//     console.log('cb', data);
// })

import fs from 'fs/promises'

fs.readFile('./read.txt', 'utf8')
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

const readFile = async () => {
    try {
        const data = await fs.readFile('./read.txt', 'utf8');
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
readFile()

const writeFile = async () => {
    try {
        const res = await fs.writeFile('./write.txt', 'Writing in this file using node fs module');
        console.log(res, 'File written'); // undefined
    } catch (error) {
        console.log(error)
    }
}
writeFile()

const appendFile = async () => {
    try {
        const res = await fs.appendFile('./write.txt', '\nAppending in this file using node fs module');
        console.log(res, 'File appended'); // undefined
    } catch (error) {
        console.log(error)
    }
}
appendFile()
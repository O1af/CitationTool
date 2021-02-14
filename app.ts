
const Cite = () => {
    const link = (<HTMLInputElement>document.getElementById('link')).value
    const title = (<HTMLInputElement>document.getElementById('title')).value
    const author = (<HTMLInputElement>document.getElementById('author')).value
    const publicationDate= (<HTMLInputElement>document.getElementById('publicationDate')).value
    const todaysDate = new Date().toJSON().slice(0,10)
    let output:string = ''
    if (author != '') { output = `${author}.`}
    output = output+`"${title}" ${publicationDate} ,${link} Accessed ${todaysDate} `;
   (<HTMLInputElement>document.getElementById('output')).value = output
}
const Copy = () => {
    const citation:any = document.querySelector('#output')
    citation.select()
    document.execCommand("copy");
}

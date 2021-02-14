const Cite = () => {
    const link = document.getElementById('link').value;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const publicationDate = document.getElementById('publicationDate').value;
    const todaysDate = new Date().toJSON().slice(0, 10);
    let output = '';
    if (author != '') {
        output = `${author}.`;
    }
    output = output + `"${title}" ${publicationDate} ,${link} Accessed ${todaysDate} `;
    document.getElementById('output').value = output;
};
const Copy = () => {
    const citation = document.querySelector('#output');
    citation.select();
    document.execCommand("copy");
};

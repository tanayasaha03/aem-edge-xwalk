export default function decorate(block) {
    const [titleEl,pretitleEl] = block.children;
    console.log('test',titleEl);
    console.log('test',pretitleEl);

    /*const customTeaser =
        `<div class="leftcolumn">
            <div class="card">
                <h2>TITLE HEADING</h2>
                <h5>Title description, Dec 7, 2017</h5>
                <div class="fakeimg" style="height:200px;">Image</div>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
        </div>`;

block.innerHTML = `
<div class="customTeaser__wrapper ">
    ${customTeaser}
</div>
`;*/
}
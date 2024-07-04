export default function decorate(block) {
    function getDemoTeaser(){
    const [titleHeadingEl,titleDescriptionEl] = block.children;
    console.log('test',titleHeadingEl);
    console.log('test',titleDescriptionEl);


    const titleHeading = titleHeadingEl?.textContent?.trim();
    const titleDescription = titleDescriptionEl?.textContent?.trim();

    return {
        titleHeading,
        titleDescription
      };

    }

    const demoTeaser = getDemoTeaser(block);
    

    const customTeaser =
        `<div class="leftcolumn">
            <div class="card">
                 ${(demoTeaser.titleHeading) ? `<h2>${demoTeaser.titleHeading}</h2>` : ''}
                 ${(demoTeaser.titleDescription) ? `<h5>${demoTeaser.titleDescription}</h5>` : ''}
                <div class="fakeimg" style="height:200px;">Image</div>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
        </div>`;

block.innerHTML = `
<div class="customTeaser__wrapper ">
    ${customTeaser}
</div>
`;
}
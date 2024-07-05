export default function decorate(block) {
  function getDemoTeaser(){
  const [
      titleHeadingEl,
      titleDescriptionEl,
      imageEl,
      imageAltEl,
      paragraphEl] = block.children;
  
      
  console.log('test',paragraphEl);
  

  const titleHeading = titleHeadingEl?.textContent?.trim();
  const titleDescription = titleDescriptionEl?.textContent?.trim();
  const image = imageEl?.querySelector('picture');

  console.log('test1',image);
  let img ;
  if (image) {
    img = image.querySelector('img');
    img.removeAttribute('width');
    img.removeAttribute('height');
    const alt = imageAltEl?.textContent?.trim() || 'image';
    img.setAttribute('alt', alt);
  }

  
 
  

  return {
      titleHeading,
      titleDescription,
      img
    };

  }

  const demoTeaser = getDemoTeaser(block);
  
  

  const customTeaser =
      `<div class="leftcolumn">
          <div class="card">
               ${(demoTeaser.titleHeading) ? `<h2>${demoTeaser.titleHeading}</h2>` : ''}
               ${(demoTeaser.titleDescription) ? `<h5>${demoTeaser.titleDescription}</h5>` : ''}

               ${(demoTeaser.img) ? `<div class="fakeimg" style="height:200px;" >${demoTeaser.img.outerHTML}</div>` : ''}
             
             
              <p>Some text..</p>
              <p>Sunt in culpa qui test to check cache officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
      </div>`;

block.innerHTML = `
<div class="customTeaser__wrapper ">
  ${customTeaser}
</div>
`;
}
export default function decorate(block) {
  function getDemoTeaser(){
  const [
      titleHeadingEl,
      titleDescriptionEl,
      imageEl,
      paragraphEl] = block.children;
  
      
  console.log('test1',imageEl);
  console.log('test4',paragraphEl);
  
  

  const titleHeading = titleHeadingEl?.textContent?.trim();
  const titleDescription = titleDescriptionEl?.textContent?.trim();
  const image = imageEl?.querySelector('picture');
  const paragraph =  paragraphEl?.textContent?.trim();


  let img ;
  if (image) {
    img = image.querySelector('img');
    img.removeAttribute('width');
    img.removeAttribute('height');
  }


  return {
      titleHeading,
      titleDescription,
      img,
      paragraph
    };

  }

  const demoTeaser = getDemoTeaser(block);
  


  const customTeaser =
      `<div class="leftcolumn">
          <div class="card">
               ${(demoTeaser.titleHeading) ? `<h2>${demoTeaser.titleHeading}</h2>` : ''}
               ${(demoTeaser.titleDescription) ? `<h5>${demoTeaser.titleDescription}</h5>` : ''}
               ${(demoTeaser.img) ? `<div class="fakeimg" style="height:200px;" >${demoTeaser.img.outerHTML}</div>` : ''}
               ${(demoTeaser.paragraph) ? `<p>${demoTeaser.paragraph}</p>` : ''}
              
          </div>
      </div>`;

block.innerHTML = `
<div class="customTeaser__wrapper ">
  ${customTeaser}
</div>
`;
}
const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements

    //HTML COllection
    // const listSeed = document.getElementsByClassName('seed')
    // console.log(listSeed)

    //NodeList
    const seeded = document.querySelectorAll('.seed')
    console.log(seeded[0].textContent)

    //or
    const seededTwo = document.querySelectorAll(".seed");
    seededTwo.forEach((el) => {
      console.log(el.innerHTML);
    });

    // 2. Get all seedless fruit elements
    const listSeedless = document.getElementsByClassName('seedless')
    console.log(listSeedless)

    // 3. Get first seedless fruit element
    const listFirstSeedless = document.getElementsByClassName('seedless')[0]
    console.log(listFirstSeedless)

    //or
    //const listFirstSeedless = document.querySelector('seedless') selects first one
    //console.log(listFirstSeedless)

    /* Section 2 */
    // 4. Get inner span with text "you"
    const innSpan = document.getElementsByTagName('span')
    console.log(innSpan)

    // 5. Get all children of element "wrapper"
    const wrapper = document.getElementById('wrapper')
    let wrapChildren = wrapper.children;
    console.log(wrapChildren)


    // 6. Get all odd number list items in the list
    // const allList = document.getElementsByTagName('li')
    // console.log(allList)
    // for(let i = 0; i < allList.length; i++){
    //     if(i % 2 !== 0) {
    //         console.log(i, allList[i])
    //      }
    //     }
    //Array.from is literally arrayify, turns whatever is plugged in into an array
    // let evenNums = Array.from(document.querySelectorAll('#two li'));
    // evenNums = evenNums.filter((el) => console.log(el.className !== 'odd'))
    // 7. Get all even number list items in the list
    const allEvenList = document.getElementsByTagName('li')
    console.log(allEvenList)
    for(let i = 0; i < allEvenList.length; i++){
        if(i % 2 === 0) {
            console.log(i, allEvenList[i])
         }
        }

            //queryselector with some CSS
    let even = document.querySelectorAll('#two ol li:not(.odd)');
    console.log(even);

    /* Section 3 */
    // 8. Get all tech companies without a class name
    const noName = document.querySelector('a')
    console.log(noName)

    const noNameAlt = document.querySelectorAll('a:not([class])')
    console.log(noNameAlt)
    // 9. Get "Amazon" list element
    const amazon = document.getElementsByClassName('shopping')[0]
    console.log(amazon)

    // 10. Get all unicorn list elements (not the image element)
    const unicorn = document.querySelector('#three ul').children
    console.log(unicorn)
}

window.onload = select;
